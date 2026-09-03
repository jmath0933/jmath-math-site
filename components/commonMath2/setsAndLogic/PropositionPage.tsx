"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PropositionPage() {
    return (
        <>

            {/* 2.13 명제와 조건 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.13 명제와 조건
                </h2>

                <p className="leading-8 text-gray-300">
                    명제와 조건의 뜻을 알아보고, 조건과 진리집합의 관계를 살펴봅시다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 명제 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 명제
                        </h3>

                        <p className="leading-8 text-gray-300">
                            참과 거짓을 분명하게 구분할 수 있는 문장이나 식을{" "}
                            <span className="font-bold text-yellow-300">
                                명제
                            </span>
                            라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="space-y-4 text-gray-300">
                                <p>① 사람은 죽는다.</p>

                                <p>
                                    ② <InlineMath math="\pi" />의 소수점 아래
                                    1000번째 숫자는 3이다.
                                </p>

                                <p>
                                    ③ <InlineMath math="\sqrt{2}" />는 유리수이다.
                                </p>

                                <p>
                                    ④ <InlineMath math="2x+1=9" />
                                </p>

                                <p>
                                    ⑤ <InlineMath math="2x+1=2x+1" />
                                </p>

                                <p>
                                    ⑥ <InlineMath math="2x+1=2x+3" />
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    참인 명제
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ①, ⑤
                                </p>
                            </div>

                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                                <p className="mb-3 font-bold text-red-300">
                                    거짓인 명제
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ③, ⑥
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                ②도 명제입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="\pi" />의 소수점 아래 1000번째 숫자를
                                바로 확인하기 어렵더라도 그 숫자는 정확히 하나로 정해져 있습니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                그 숫자가 3이면 참이고, 3이 아니면 거짓이므로
                                ②는 명제입니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                ④는 명제가 아닙니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="2x+1=9" />는{" "}
                                <InlineMath math="x=4" />일 때는 참이지만,
                                다른 값에서는 거짓입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                즉, <InlineMath math="x" />의 값에 따라 참과
                                거짓이 달라지므로 명제가 아닙니다.
                            </p>
                        </div>

                    </div>


                    {/* 2. 조건 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 조건
                        </h3>

                        <p className="leading-8 text-gray-300">
                            경우에 따라 참이 되거나 거짓이 되는 문장이나 식을{" "}
                            <span className="font-bold text-yellow-300">
                                조건
                            </span>
                            이라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BlockMath
                                math={String.raw`
p:\ 2x+1=9
`}
                            />

                            <p className="mt-3 leading-8 text-gray-300">
                                이 조건은 <InlineMath math="x=4" />일 때 참이고,
                                그 밖의 값에서는 거짓입니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="font-bold text-blue-300">
                                명제와 조건의 차이
                            </p>

                            <div className="mt-4 space-y-3 leading-8 text-gray-300">
                                <p>
                                    명제 : 참과 거짓이 분명하게 결정됩니다.
                                </p>

                                <p>
                                    조건 : 값이나 경우에 따라 참과 거짓이 달라집니다.
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* 3. 진리집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 진리집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건을 참이 되게 하는 원소들로 만든 집합을{" "}
                            <span className="font-bold text-yellow-300">
                                진리집합
                            </span>
                            이라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            명제나 조건은 주로{" "}
                            <InlineMath math="p,q,r,\ldots" />로 나타내고,
                            조건의 진리집합은 같은 글자의 대문자인{" "}
                            <InlineMath math="P,Q,R,\ldots" />로 나타냅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BlockMath
                                math={String.raw`
p:\ 2x+1=9
`}
                            />

                            <p className="mt-3 leading-8 text-gray-300">
                                전체집합이 자연수 전체의 집합일 때 이 조건을
                                참이 되게 하는 값은 <InlineMath math="x=4" />뿐이므로
                            </p>

                            <BlockMath
                                math={String.raw`
P=\{4\}
`}
                            />
                        </div>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <BlockMath
                                math={String.raw`
p\longleftrightarrow P,\qquad
q\longleftrightarrow Q,\qquad
r\longleftrightarrow R
`}
                            />

                            <p className="mt-3 text-center font-bold text-green-300">
                                조건과 그 진리집합을 함께 생각합니다.
                            </p>
                        </div>

                    </div>


                    {/* 4. 조건의 부정 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 조건의 부정
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건 <InlineMath math="p" />의 부정은{" "}
                            <InlineMath math="\sim p" />로 나타냅니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="\sim p" />는 조건{" "}
                            <InlineMath math="p" />가 거짓이 되는 경우를 나타내므로,
                            진리집합은 <InlineMath math="P" />의 여집합이 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\boxed{
\sim p
\longleftrightarrow
P^C
}
`}
                            />
                        </div>

                    </div>


                    {/* 5. 조건과 진리집합의 연산 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 조건과 진리집합의 연산
                        </h3>

                        <p className="leading-8 text-gray-300">
                            전체집합을
                        </p>

                        <BlockMath
                            math={String.raw`
U=\{1,2,3,4,5,6,7,8,9\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라 하고 다음 세 조건을 생각해 봅시다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BlockMath
                                math={String.raw`
p:\ x\text{는 짝수}
`}
                            />

                            <BlockMath
                                math={String.raw`
q:\ x\text{는 소수}
`}
                            />

                            <BlockMath
                                math={String.raw`
r:\ x>5
`}
                            />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            각 조건의 진리집합은
                        </p>

                        <BlockMath
                            math={String.raw`
P=\{2,4,6,8\}
`}
                        />

                        <BlockMath
                            math={String.raw`
Q=\{2,3,5,7\}
`}
                        />

                        <BlockMath
                            math={String.raw`
R=\{6,7,8,9\}
`}
                        />

                    </div>


                    {/* 6. 조건의 부정과 진리집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 조건의 부정과 진리집합
                        </h3>

                        <div className="space-y-4">

                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <BlockMath
                                    math={String.raw`
\sim p:\ x\text{는 짝수가 아니다}
`}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    자연수에서는 짝수가 아닌 수는 홀수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ x\text{는 홀수}
`}
                                />

                                <BlockMath
                                    math={String.raw`
P^C=\{1,3,5,7,9\}
`}
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <BlockMath
                                    math={String.raw`
\sim q:\ x\text{는 소수가 아니다}
`}
                                />

                                <BlockMath
                                    math={String.raw`
Q^C=\{1,4,6,8,9\}
`}
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <BlockMath
                                    math={String.raw`
\sim r:\ x\le5
`}
                                />

                                <BlockMath
                                    math={String.raw`
R^C=\{1,2,3,4,5\}
`}
                                />
                            </div>

                        </div>

                    </div>


                    {/* 7. 이고 / 또는 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. ‘이고’와 ‘또는’
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 조건을 ‘이고’, ‘또는’으로 연결하면
                            진리집합의 연산과 정확히 대응합니다.
                        </p>

                        <div className="mt-5 space-y-4">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    <InlineMath math="p" /> 이고{" "}
                                    <InlineMath math="q" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />는 짝수이면서 소수인 수
                                </p>

                                <BlockMath math={String.raw`P\cap Q`} />
                                <BlockMath math={String.raw`P\cap Q=\{2\}`} />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    <InlineMath math="\sim p" /> 이고{" "}
                                    <InlineMath math="q" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />는 홀수이면서 소수인 수
                                </p>

                                <BlockMath math={String.raw`P^C\cap Q`} />
                                <BlockMath math={String.raw`P^C\cap Q=\{3,5,7\}`} />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <p className="mb-3 font-bold text-purple-300">
                                    <InlineMath math="q" /> 또는{" "}
                                    <InlineMath math="r" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />는 소수이거나 5보다 큰 수
                                </p>

                                <BlockMath math={String.raw`Q\cup R`} />
                                <BlockMath
                                    math={String.raw`Q\cup R=\{2,3,5,6,7,8,9\}`}
                                />
                            </div>

                        </div>

                    </div>


                    {/* 8. 조건과 진리집합의 대응 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            8. 조건과 진리집합의 대응
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건의 부정과 ‘이고’, ‘또는’은 진리집합의 연산과
                            다음과 같이 대응합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\sim p
\longleftrightarrow
P^C
`}
                            />

                            <BlockMath
                                math={String.raw`
p\text{이고 }q
\longleftrightarrow
P\cap Q
`}
                            />

                            <BlockMath
                                math={String.raw`
p\text{ 또는 }q
\longleftrightarrow
P\cup Q
`}
                            />
                        </div>

                    </div>


                    {/* 9. 조건 전체의 부정 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            9. 조건 전체의 부정
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건{" "}
                            <InlineMath math="p\text{이고 }q" />의 부정은
                            두 조건이 동시에 참인 경우를 제외한 모든 경우입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\sim(p\text{이고 }q)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            진리집합으로 나타내면
                        </p>

                        <BlockMath
                            math={String.raw`
(P\cap Q)^C
`}
                        />

                        <p className="mt-3 leading-8 text-gray-300">
                            이고, 드모르간 법칙에 의해
                        </p>

                        <BlockMath
                            math={String.raw`
(P\cap Q)^C=P^C\cup Q^C
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\boxed{
\sim(p\text{이고 }q)
=
\sim p\text{ 또는 }\sim q
}
`}
                            />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            위의 예에서는
                        </p>

                        <BlockMath
                            math={String.raw`
\text{x는 홀수이거나 소수가 아닌 수}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 뜻합니다.
                        </p>

                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                반대로 ‘또는’의 부정
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\sim(p\text{ 또는 }q)
=
\sim p\text{이고 }\sim q
}
`}
                            />

                            <BlockMath
                                math={String.raw`
(P\cup Q)^C=P^C\cap Q^C
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8">
                            다음 중 명제인 것을 모두 고르시오. (정답 2개)
                        </p>

                        <div className="mt-5 space-y-4">
                            <p>
                                ① 사람은 꽃보다 아름답다.
                            </p>

                            <p>
                                ② 농구 선수는 키가 크다.
                            </p>

                            <p>
                                ③ <InlineMath math="x\ge2" />
                            </p>

                            <p>
                                ④ <InlineMath math="7-x=2-x" />
                            </p>

                            <p>
                                ⑤ 맞꼭지각의 크기는 서로 같다.
                            </p>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 사람은 꽃보다 아름답다.
                                </p>

                                <p className="leading-8">
                                    ‘아름답다’는 사람에 따라 판단이 달라질 수 있으므로
                                    참과 거짓을 분명하게 구분할 수 없습니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 명제가 아닙니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 농구 선수는 키가 크다.
                                </p>

                                <p className="leading-8">
                                    ‘키가 크다’의 기준이 정해져 있지 않고 모든
                                    농구 선수가 키가 크다고 할 수도 없으므로
                                    참과 거짓을 분명하게 구분할 수 없습니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 명제가 아닙니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ <InlineMath math="x\ge2" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x" />의 값에 따라 참이 되기도 하고
                                    거짓이 되기도 합니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 명제가 아니라 조건입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ <InlineMath math="7-x=2-x" />
                                </p>

                                <p className="leading-8">
                                    양변에 <InlineMath math="x" />를 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
7=2
`}
                                />

                                <p className="leading-8">
                                    가 되어 어떤 <InlineMath math="x" />에 대해서도
                                    성립하지 않습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    즉, 항상 거짓임이 분명하므로
                                </p>

                                <p className="mt-3 font-bold text-green-300">
                                    거짓인 명제입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ⑤ 맞꼭지각의 크기는 서로 같다.
                                </p>

                                <p className="leading-8">
                                    맞꼭지각의 크기는 항상 서로 같으므로
                                    참과 거짓을 분명하게 구분할 수 있습니다.
                                </p>

                                <p className="mt-3 font-bold text-green-300">
                                    참인 명제입니다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ④, ⑤
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    명제인지 판단할 때는 그 문장이{" "}
                                    <span className="font-bold text-white">
                                        참인지 거짓인지 분명하게 하나로 결정되는지
                                    </span>
                                    를 확인합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    참인 문장만 명제가 되는 것은 아닙니다.
                                    거짓임이 분명한 문장도 명제입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{참인 명제와 거짓인 명제 모두 명제이다.}
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
                        <p className="leading-8">
                            다음 중 명제인 것은?
                        </p>

                        <div className="mt-5 space-y-4">
                            <p>
                                ① <InlineMath math="3x+2>0" />
                            </p>

                            <p>
                                ② 100의 약수는 많다.
                            </p>

                            <p>
                                ③ 홍길동은 키가 크다.
                            </p>

                            <p>
                                ④ 사과는 맛있는 과일이다.
                            </p>

                            <p>
                                ⑤ 모든 실수 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="x^2+3x+6=0" />이다.
                            </p>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① <InlineMath math="3x+2>0" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x" />의 값에 따라 참이 되기도 하고
                                    거짓이 되기도 합니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 명제가 아니라 조건입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 100의 약수는 많다.
                                </p>

                                <p className="leading-8">
                                    ‘많다’의 기준이 정해져 있지 않으므로
                                    참과 거짓을 분명하게 구분할 수 없습니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 명제가 아닙니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 홍길동은 키가 크다.
                                </p>

                                <p className="leading-8">
                                    ‘키가 크다’의 기준이 정해져 있지 않으므로
                                    참과 거짓을 분명하게 구분할 수 없습니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 명제가 아닙니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 사과는 맛있는 과일이다.
                                </p>

                                <p className="leading-8">
                                    ‘맛있다’는 사람에 따라 판단이 달라질 수 있으므로
                                    참과 거짓을 분명하게 구분할 수 없습니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 명제가 아닙니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ⑤ 모든 실수 <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2+3x+6=0" />이다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x" />가 들어 있지만{" "}
                                    <span className="font-bold text-yellow-300">
                                        모든 실수 <InlineMath math="x" />에 대하여
                                    </span>
                                    라고 범위가 정해져 있으므로 이 문장은
                                    참인지 거짓인지 판단할 수 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    완전제곱식으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+3x+6
=
\left(x+\frac{3}{2}\right)^2+\frac{15}{4}
`}
                                />

                                <p className="leading-8">
                                    이므로 모든 실수 <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+3x+6>0
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서{" "}
                                    <InlineMath math="x^2+3x+6=0" />은 성립하지 않습니다.
                                </p>

                                <p className="mt-3 font-bold text-green-300">
                                    즉, ⑤는 거짓인 명제입니다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ⑤
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x" />가 포함되어 있다고 해서
                                    항상 조건인 것은 아닙니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    ①처럼 <InlineMath math="x" />의 값에 따라 참과
                                    거짓이 달라지면 조건이지만,
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{모든 실수 }x\text{에 대하여}
`}
                                />

                                <p className="leading-8">
                                    와 같이 <InlineMath math="x" />에 대한 범위가
                                    정해져 전체 문장의 참과 거짓을 판단할 수 있으면
                                    명제가 됩니다.
                                </p>

                                <p className="mt-3 text-center font-bold text-blue-200">
                                    거짓인 문장도 참과 거짓이 분명하면 명제입니다.
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
                        <p className="leading-8">
                            다음 명제 중 그 부정이 참인 것은?
                        </p>

                        <div className="mt-5 space-y-4">
                            <p>
                                ① <InlineMath math="\sqrt{2}+\sqrt{5}\ne\sqrt{7}" />
                            </p>

                            <p>
                                ② <InlineMath math="3\le\sqrt{5}" />
                            </p>

                            <p>
                                ③ 13은 소수이다.
                            </p>

                            <p>
                                ④ <InlineMath math="1+\sqrt{2}" />는 실수이다.
                            </p>

                            <p>
                                ⑤ 정삼각형의 세 내각의 크기는 모두 같다.
                            </p>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    먼저 문제의 뜻을 해석합니다.
                                </p>

                                <p className="leading-8">
                                    어떤 명제의 부정이 참이라는 것은
                                    원래 명제가 거짓이라는 뜻입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\text{가 참}
\quad\Longleftrightarrow\quad
p\text{가 거짓}
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① <InlineMath math="\sqrt{2}+\sqrt{5}\ne\sqrt{7}" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sqrt{2}+\sqrt{5}>0" />이므로
                                    양변을 제곱하여 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(\sqrt{2}+\sqrt{5})^2
=
7+2\sqrt{10}
>
7
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt{2}+\sqrt{5}>\sqrt{7}
`}
                                />

                                <p className="leading-8">
                                    이므로 ①은 참인 명제입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② <InlineMath math="3\le\sqrt{5}" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sqrt{5}<3" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
3\le\sqrt{5}
`}
                                />

                                <p className="leading-8">
                                    는 거짓입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 그 부정
                                </p>

                                <BlockMath
                                    math={String.raw`
3>\sqrt{5}
`}
                                />

                                <p className="leading-8">
                                    는 참입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 13은 소수이다.
                                </p>

                                <p className="leading-8">
                                    13의 양의 약수는 1과 13뿐이므로
                                    참인 명제입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ <InlineMath math="1+\sqrt{2}" />는 실수이다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="1" />과 <InlineMath math="\sqrt{2}" />는
                                    모두 실수이므로 그 합도 실수입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 ④는 참인 명제입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ⑤ 정삼각형의 세 내각의 크기는 모두 같다.
                                </p>

                                <p className="leading-8">
                                    정삼각형의 세 내각은 모두{" "}
                                    <InlineMath math="60^\circ" />이므로
                                    참인 명제입니다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ②
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    <span className="font-bold text-white">
                                        명제의 부정이 참
                                    </span>
                                    이라는 말은{" "}
                                    <span className="font-bold text-yellow-300">
                                        원래 명제가 거짓
                                    </span>
                                    이라는 뜻입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p\text{가 참}
\quad\Longleftrightarrow\quad
\sim p\text{가 거짓}
`}
                                />

                                <BlockMath
                                    math={String.raw`
p\text{가 거짓}
\quad\Longleftrightarrow\quad
\sim p\text{가 참}
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
                        <p className="leading-8">
                            세 실수 <InlineMath math="a,b,c" />에 대하여 다음에서
                            조건 <InlineMath math="p" />와 그 부정{" "}
                            <InlineMath math="\sim p" />로 옳은 것만을 있는 대로
                            고른 것은?
                        </p>

                        <div className="mt-5 space-y-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <div className="grid grid-cols-[2rem_15rem_1fr] items-center gap-x-4">
                                <span>ㄱ.</span>
                                <InlineMath math="p:\ a\le0\text{ 또는 }b<0" />
                                <InlineMath math="\sim p:\ a>0\text{이고 }b>0" />
                            </div>

                            <div className="grid grid-cols-[2rem_15rem_1fr] items-center gap-x-4">
                                <span>ㄴ.</span>
                                <InlineMath math="p:\ ab=0" />
                                <InlineMath math="\sim p:\ a\ne0\text{이고 }b\ne0" />
                            </div>

                            <div className="grid grid-cols-[2rem_15rem_1fr] items-center gap-x-4">
                                <span>ㄷ.</span>
                                <InlineMath math="p:\ a^2+b^2+c^2=0" />
                                <InlineMath math="\sim p:\ a\ne0\text{ 또는 }b\ne0\text{ 또는 }c\ne0" />
                            </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ① ㄱ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ② ㄴ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ③ ㄱ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ④ ㄴ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
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
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄱ을 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ a\le0\text{ 또는 }b<0
`}
                                />

                                <p className="mt-3 leading-8">
                                    ‘또는’으로 연결된 조건을 부정하면 각각을
                                    부정한 뒤 ‘이고’로 연결합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim(a\le0)
\quad\Longrightarrow\quad
a>0
`}
                                />

                                <BlockMath
                                    math={String.raw`
\sim(b<0)
\quad\Longrightarrow\quad
b\ge0
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서 올바른 부정은
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ a>0\text{이고 }b\ge0
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    제시된 <InlineMath math="b>0" />은{" "}
                                    <InlineMath math="b=0" />인 경우를 빠뜨렸으므로
                                    ㄱ은 옳지 않습니다.
                                </p>
                            </div>


                            {/* ㄴ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄴ을 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ ab=0
`}
                                />

                                <p className="mt-3 leading-8">
                                    두 실수의 곱이 0이라는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
a=0\text{ 또는 }b=0
`}
                                />

                                <p className="leading-8">
                                    과 같습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이를 부정하면
                                </p>

                                <BlockMath
                                    math={String.raw`
a\ne0\text{이고 }b\ne0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ a\ne0\text{이고 }b\ne0
`}
                                />

                                <p className="mt-3 font-bold text-green-300">
                                    따라서 ㄴ은 옳습니다.
                                </p>
                            </div>


                            {/* ㄷ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄷ을 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ a^2+b^2+c^2=0
`}
                                />

                                <p className="mt-3 leading-8">
                                    <InlineMath math="a,b,c" />는 실수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2\ge0,\qquad b^2\ge0,\qquad c^2\ge0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 세 제곱의 합이 0이 되려면 각각이
                                    모두 0이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2+b^2+c^2=0
\quad\Longleftrightarrow\quad
a=0,\ b=0,\ c=0
`}
                                />

                                <p className="mt-3 leading-8">
                                    이를 부정하면 세 수 중 적어도 하나는
                                    0이 아니어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ 
a\ne0\text{ 또는 }b\ne0\text{ 또는 }c\ne0
`}
                                />

                                <p className="mt-3 font-bold text-green-300">
                                    따라서 ㄷ은 옳습니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ④ ㄴ, ㄷ
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    조건을 부정할 때는 각 조건을 부정하는 것뿐 아니라{" "}
                                    <span className="font-bold text-white">
                                        ‘이고’와 ‘또는’도 서로 바뀐다는 것
                                    </span>
                                    에 주의합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim(p\text{ 또는 }q)
=
\sim p\text{이고 }\sim q
`}
                                />

                                <BlockMath
                                    math={String.raw`
\sim(p\text{이고 }q)
=
\sim p\text{ 또는 }\sim q
`}
                                />

                                <p className="mt-3 leading-8">
                                    또한 부등식의 부정에서는 등호가 어디에
                                    포함되는지도 반드시 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
\sim(a\le0)&:\ a>0\\
\sim(b<0)&:\ b\ge0
\end{aligned}
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
                        <p className="leading-8">
                            전체집합{" "}
                            <InlineMath math="U=\{1,2,3,\ldots,10\}" />에 대하여
                            두 조건 <InlineMath math="p" />, <InlineMath math="q" />가
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x\text{는 홀수},\qquad
q:\ x\text{는 소수}
`}
                        />

                        <p className="leading-8">
                            일 때, 조건 ‘<InlineMath math="p" /> 그리고{" "}
                            <InlineMath math="q" />’의 진리집합은?
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ① <InlineMath math="\{3\}" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ② <InlineMath math="\{3,5\}" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ③ <InlineMath math="\{3,5,7\}" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ④ <InlineMath math="\{3,5,7,9\}" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ⑤ <InlineMath math="\{1,3,5,7\}" />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                </p>

                                <p className="leading-8">
                                    전체집합에서 홀수는
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{1,3,5,7,9\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 조건 <InlineMath math="q" />의 진리집합을 구합니다.
                                </p>

                                <p className="leading-8">
                                    10 이하의 소수는
                                </p>

                                <BlockMath
                                    math={String.raw`
Q=\{2,3,5,7\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ ‘<InlineMath math="p" /> 그리고{" "}
                                    <InlineMath math="q" />’의 진리집합을 구합니다.
                                </p>

                                <p className="leading-8">
                                    ‘<InlineMath math="p" /> 그리고{" "}
                                    <InlineMath math="q" />’는 두 조건을 모두
                                    만족시키는 원소이므로 진리집합은 교집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
P\cap Q
`}
                                />

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
P\cap Q
&=\{1,3,5,7,9\}\cap\{2,3,5,7\}\\
&=\{3,5,7\}
\end{aligned}
`}
                                />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ③ <InlineMath math="\{3,5,7\}" />
                                </p>
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
p\text{ 그리고 }q
\longleftrightarrow
P\cap Q
`}
                                />

                                <p className="mt-3 leading-8">
                                    ‘그리고’는 두 조건을{" "}
                                    <span className="font-bold text-white">
                                        동시에 만족
                                    </span>
                                    해야 하므로 진리집합에서는{" "}
                                    <span className="font-bold text-yellow-300">
                                        교집합
                                    </span>
                                    에 해당합니다.
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
                        <p className="leading-8">
                            실수 전체의 집합에서 두 조건
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x>3,\qquad q:\ x\le-5
`}
                        />

                        <p className="leading-8">
                            의 진리집합을 각각 <InlineMath math="P,\ Q" />라 할 때,
                            다음 중 조건 <InlineMath math="-5<x\le3" />의 진리집합은?
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ① <InlineMath math="P\cup Q" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ② <InlineMath math="P\cup Q^C" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ③ <InlineMath math="P\cap Q" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ④ <InlineMath math="P\cap Q^C" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ⑤ <InlineMath math="(P\cup Q)^C" />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 각 조건의 진리집합을 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{x\mid x>3\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
Q=\{x\mid x\le-5\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② <InlineMath math="-5<x\le3" />을 두 조건으로 나누어 생각합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x\le3" />은{" "}
                                    <InlineMath math="x>3" />이 아닌 것이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le3
\quad\Longleftrightarrow\quad
\sim p
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="x>-5" />는{" "}
                                    <InlineMath math="x\le-5" />가 아닌 것이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x>-5
\quad\Longleftrightarrow\quad
\sim q
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
-5<x\le3
\quad\Longleftrightarrow\quad
\sim p\text{ 이고 }\sim q
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 진리집합의 연산으로 나타냅니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sim p" />의 진리집합은{" "}
                                    <InlineMath math="P^C" />,{" "}
                                    <InlineMath math="\sim q" />의 진리집합은{" "}
                                    <InlineMath math="Q^C" />이고, ‘이고’는 교집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\cap Q^C
`}
                                />

                                <p className="leading-8">
                                    입니다. 드모르간의 법칙을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\cap Q^C=(P\cup Q)^C
`}
                                />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ⑤ <InlineMath math="(P\cup Q)^C" />
                                </p>
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
-5<x\le3
\quad\Longleftrightarrow\quad
x>-5\text{ 이고 }x\le3
`}
                                />

                                <p className="mt-3 leading-8">
                                    각각을 원래 조건의 부정으로 바꾸면
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim q\text{ 이고 }\sim p
`}
                                />

                                <p className="leading-8">
                                    이므로 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\cap Q^C=(P\cup Q)^C
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다. 즉, 조건의{" "}
                                    <span className="font-bold text-yellow-300">부정</span>은
                                    진리집합의{" "}
                                    <span className="font-bold text-yellow-300">여집합</span>,
                                    ‘이고’는{" "}
                                    <span className="font-bold text-yellow-300">교집합</span>
                                    으로 연결됩니다.
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
                        <p className="leading-8">
                            자연수 전체의 집합에서 두 조건 <InlineMath math="p" />,{" "}
                            <InlineMath math="q" />가
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x^2-7x+10=0,\qquad
q:\ 1\le x\le5
`}
                        />

                        <p className="leading-8">
                            일 때, 조건 ‘<InlineMath math="p" /> 또는{" "}
                            <InlineMath math="\sim q" />’의 부정의 진리집합의
                            모든 원소의 합을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-7x+10=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(x-2)(x-5)=0
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{2,5\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 조건 <InlineMath math="q" />의 진리집합을 구합니다.
                                </p>

                                <p className="leading-8">
                                    전체집합이 자연수 전체의 집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
Q=\{1,2,3,4,5\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 조건 전체를 부정합니다.
                                </p>

                                <p className="leading-8">
                                    ‘또는’으로 연결된 조건 전체를 부정하면
                                    각각을 부정한 뒤 ‘이고’로 연결합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
\sim(p\text{ 또는 }\sim q)
&=\sim p\text{이고 }\sim(\sim q)\\
&=\sim p\text{이고 }q
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\cap Q
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 진리집합의 원소를 구합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="P^C\cap Q" />는{" "}
                                    <InlineMath math="Q" />의 원소 중{" "}
                                    <InlineMath math="P" />에 속하지 않는 원소들의
                                    집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
P^C\cap Q
&=Q-P\\
&=\{1,2,3,4,5\}-\{2,5\}\\
&=\{1,3,4\}
\end{aligned}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ⑤ 모든 원소를 더합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1+3+4=8
`}
                                />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="8" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    조건 전체의 부정에서는{" "}
                                    <span className="font-bold text-white">
                                        ‘또는’이 ‘이고’로 바뀌고 각각의 조건을 부정
                                    </span>
                                    합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim(p\text{ 또는 }\sim q)
=
\sim p\text{이고 }q
`}
                                />

                                <p className="mt-3 leading-8">
                                    진리집합으로 바꾸면
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\cap Q
=
Q-P
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="Q" />에서{" "}
                                    <InlineMath math="P" />의 원소만 제외하면 됩니다.
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8">
                            실수 <InlineMath math="x" />에 대한 조건{" "}
                            ‘<InlineMath math="x" />는 2보다 작다.’의 부정은?
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ① <InlineMath math="x<2" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ② <InlineMath math="x\le2" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ③ <InlineMath math="x=2" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ④ <InlineMath math="x\ge2" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ⑤ <InlineMath math="x>2" />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <div>
                                <p className="leading-8">
                                    ‘<InlineMath math="x" />는 2보다 작다.’를 식으로 나타내면
                                </p>

                                <BlockMath math="x<2" />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>

                            <div>
                                <p className="leading-8">
                                    이 조건의 부정은{" "}
                                    <InlineMath math="x<2" />가 아닌 모든 경우이므로
                                </p>

                                <BlockMath math="x\ge2" />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ④ <InlineMath math="x\ge2" />
                                </p>
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    부등식을 부정할 때는 부등호의 방향만 바꾸는 것이 아니라
                                    등호의 포함 여부도 함께 바뀝니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x<a &\quad\longleftrightarrow\quad \text{부정}:x\ge a\\
x>a &\quad\longleftrightarrow\quad \text{부정}:x\le a\\
x\le a &\quad\longleftrightarrow\quad \text{부정}:x>a\\
x\ge a &\quad\longleftrightarrow\quad \text{부정}:x<a
\end{aligned}
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
                        <p className="leading-8">
                            실수 <InlineMath math="x" />에 대한 조건
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x^3-3x^2-x+3\ne0
`}
                        />

                        <p className="leading-8">
                            에 대하여 조건 <InlineMath math="\sim p" />의 진리집합의
                            모든 원소의 합을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="p" />를 부정합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\ne0" />의 부정은{" "}
                                    <InlineMath math="=0" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ x^3-3x^2-x+3=0
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 방정식을 인수분해합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x^3-3x^2-x+3
&=x^2(x-3)-1(x-3)\\
&=(x^2-1)(x-3)\\
&=(x-1)(x+1)(x-3)
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-1)(x+1)(x-3)=0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x=-1,\ 1,\ 3
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{-1,1,3\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 모든 원소를 더합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-1+1+3=3
`}
                                />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="3" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    조건의 부정을 먼저 정확하게 만든 뒤,
                                    그 조건을 참이 되게 하는 값을 구하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ f(x)\ne0
\quad\Longrightarrow\quad
\sim p:\ f(x)=0
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="\sim p" />의 진리집합은
                                    방정식 <InlineMath math="f(x)=0" />의 해집합과 같습니다.
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
                        <p className="leading-8">
                            전체집합{" "}
                            <InlineMath math="U=\{x\mid x\text{는 한 자리의 자연수}\}" />에
                            대하여 조건 <InlineMath math="p" />가
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x\text{는 홀수 또는 }6\text{의 약수이다.}
`}
                        />

                        <p className="leading-8">
                            일 때, 조건 <InlineMath math="\sim p" />의 진리집합의
                            모든 원소의 합을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 전체집합을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    한 자리의 자연수는 1부터 9까지이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
U=\{1,2,3,4,5,6,7,8,9\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 조건 <InlineMath math="p" />를 부정합니다.
                                </p>

                                <p className="leading-8">
                                    ‘홀수 또는 6의 약수’의 부정에서는
                                    각각의 조건을 부정하고 ‘또는’을 ‘이고’로 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
\sim p:\;&x\text{는 홀수가 아니고}\\
&x\text{는 }6\text{의 약수가 아니다.}
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    자연수에서 홀수가 아닌 수는 짝수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ x\text{는 짝수이고 }6\text{의 약수가 아니다.}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 진리집합을 구합니다.
                                </p>

                                <p className="leading-8">
                                    전체집합에서 짝수인 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
\{2,4,6,8\}
`}
                                />

                                <p className="leading-8">
                                    이고, 이 중 6의 약수는 <InlineMath math="2,6" />입니다.
                                    따라서 <InlineMath math="\sim p" />의 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
\{4,8\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 모든 원소를 더합니다.
                                </p>

                                <BlockMath math="4+8=12" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="12" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    ‘또는’으로 연결된 조건 전체를 부정하면{" "}
                                    <span className="font-bold text-white">
                                        각각을 부정하고 ‘이고’로 바꿉니다.
                                    </span>
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim(A\text{ 또는 }B)
=
(\sim A)\text{이고 }(\sim B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
&\sim(\text{홀수 또는 }6\text{의 약수})\\
&\qquad=\text{짝수이고 }6\text{의 약수가 아닌 수}
\end{aligned}
`}
                                />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 최종 핵심 */}
                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-5 text-2xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 leading-8">
                        <p>
                            <span className="font-bold text-white">
                                명제
                            </span>
                            : 참과 거짓을 분명하게 구분할 수 있는 문장이나 식
                        </p>

                        <p>
                            <span className="font-bold text-white">
                                조건
                            </span>
                            : 경우에 따라 참이 되거나 거짓이 되는 문장이나 식
                        </p>

                        <p>
                            <span className="font-bold text-white">
                                진리집합
                            </span>
                            : 조건을 참이 되게 하는 원소들의 집합
                        </p>
                    </div>

                    <div className="mt-5 rounded-lg bg-black/20 p-5">
                        <BlockMath
                            math={String.raw`
\begin{aligned}
\sim p
&\longleftrightarrow P^C\\
p\text{이고 }q
&\longleftrightarrow P\cap Q\\
p\text{ 또는 }q
&\longleftrightarrow P\cup Q
\end{aligned}
`}
                        />
                    </div>

                    <div className="mt-5 rounded-lg border border-yellow-400/20 bg-black/20 p-5 text-center">
                        <p className="font-bold text-yellow-200">
                            조건의 논리 연산은 진리집합의 집합 연산과 같다.
                        </p>
                    </div>
                </div>

            </section>

            {/* 2.14 명제 p → q */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold text-white">
                    2.14 명제 <InlineMath math="p\to q" />
                </h2>

                <p className="leading-8 text-gray-300">
                    두 조건을 ‘이면’으로 연결한 명제의 뜻을 알아보고,
                    진리집합을 이용하여 명제의 참과 거짓을 판단해 봅시다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. p이면 q이다 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            1. <InlineMath math="p" />이면 <InlineMath math="q" />이다
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건 <InlineMath math="p" />와 조건 <InlineMath math="q" />를
                            ‘이면’으로 연결하면 하나의 명제가 됩니다.
                        </p>

                        <BlockMath math="p\to q" />

                        <p className="leading-8 text-gray-300">
                            이 명제를
                            ‘<InlineMath math="p" />이면 <InlineMath math="q" />이다.’
                            라고 읽습니다.
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                                <div className="mb-2 font-bold text-blue-300">
                                    가정
                                </div>
                                <InlineMath math="p" />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                                <div className="mb-2 font-bold text-yellow-300">
                                    이면
                                </div>
                                <InlineMath math="\to" />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                                <div className="mb-2 font-bold text-green-300">
                                    결론
                                </div>
                                <InlineMath math="q" />
                            </div>
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\underbrace{p}_{\text{가정}}
\ \to\
\underbrace{q}_{\text{결론}}
`}
                            />

                            <p className="mt-3 text-center leading-8 text-gray-300">
                                ‘이면’ 앞의 조건을{" "}
                                <span className="font-bold text-blue-300">가정</span>,
                                ‘이면’ 뒤의 조건을{" "}
                                <span className="font-bold text-green-300">결론</span>
                                이라고 합니다.
                            </p>
                        </div>

                    </div>


                    {/* 2. 참인 명제와 거짓인 명제 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            2. 참인 명제와 거짓인 명제
                        </h3>

                        <p className="leading-8 text-gray-300">
                            다음 명제를 생각해 봅시다.
                        </p>

                        <BlockMath
                            math={String.raw`
x>5\text{이면 }x>3\text{이다.}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x>5" />인 수는 항상{" "}
                            <InlineMath math="x>3" />도 만족합니다.
                            따라서 이 명제는 참입니다.
                        </p>

                        <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <BlockMath
                                math={String.raw`
x>5
\quad\longrightarrow\quad
x>3
`}
                            />

                            <p className="mt-3 text-center font-bold text-green-300">
                                참인 명제
                            </p>
                        </div>

                        <p className="mt-6 leading-8 text-gray-300">
                            반대로 다음 명제를 생각해 봅시다.
                        </p>

                        <BlockMath
                            math={String.raw`
x>3\text{이면 }x>5\text{이다.}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x=4" />를 대입하면 가정{" "}
                            <InlineMath math="x>3" />은 참이지만 결론{" "}
                            <InlineMath math="x>5" />는 거짓입니다.
                            따라서 이 명제는 거짓입니다.
                        </p>

                        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                            <BlockMath
                                math={String.raw`
x=4:\qquad
x>3\ \text{참},\qquad
x>5\ \text{거짓}
`}
                            />

                            <p className="mt-3 text-center font-bold text-red-300">
                                거짓인 명제
                            </p>
                        </div>

                    </div>


                    {/* 3. 반례 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            3. 반례
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />에서 가정{" "}
                            <InlineMath math="p" />는 만족하지만 결론{" "}
                            <InlineMath math="q" />는 만족하지 않는 예를{" "}
                            <span className="font-bold text-yellow-300">
                                반례
                            </span>
                            라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
x>3\text{이면 }x>5\text{이다.}
`}
                            />

                            <BlockMath math="x=4" />

                            <p className="text-center leading-8 text-gray-300">
                                <InlineMath math="4>3" />은 참이지만{" "}
                                <InlineMath math="4>5" />는 거짓이므로{" "}
                                <InlineMath math="x=4" />는 이 명제의 반례입니다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 명제가 거짓임을 보이기 위해서는
                            반례를 하나만 찾으면 됩니다.
                        </p>

                    </div>


                    {/* 4. 진리집합으로 판단 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            4. 진리집합으로 명제의 참과 거짓 판단하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건 <InlineMath math="p" />,{" "}
                            <InlineMath math="q" />의 진리집합을 각각{" "}
                            <InlineMath math="P" />, <InlineMath math="Q" />라고 합시다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />가 참이라는 것은
                            조건 <InlineMath math="p" />를 만족하는 모든 원소가
                            조건 <InlineMath math="q" />도 만족한다는 뜻입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 <InlineMath math="P" />의 모든 원소가{" "}
                            <InlineMath math="Q" />에 포함되어야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <BlockMath
                                math={String.raw`
p\to q\text{가 참}
\quad\Longleftrightarrow\quad
P\subset Q
`}
                            />

                            <p className="mt-3 text-center font-bold text-green-300">
                                작은 집합에서 큰 집합으로의 명제는 참
                            </p>
                        </div>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                                <p className="mb-3 text-center font-bold text-green-300">
                                    참인 명제
                                </p>

                                <BlockMath math="x>5\to x>3" />

                                <BlockMath
                                    math={String.raw`
\{x\mid x>5\}
\subset
\{x\mid x>3\}
`}
                                />
                            </div>

                            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                <p className="mb-3 text-center font-bold text-red-300">
                                    거짓인 명제
                                </p>

                                <BlockMath math="x>3\to x>5" />

                                <BlockMath
                                    math={String.raw`
\{x\mid x>3\}
\not\subset
\{x\mid x>5\}
`}
                                />
                            </div>
                        </div>

                    </div>


                    {/* 5. 화살표 기호 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            5. <InlineMath math="\to" />와{" "}
                            <InlineMath math="\Rightarrow" />
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="p\to q" />는
                            ‘<InlineMath math="p" />이면{" "}
                            <InlineMath math="q" />이다.’라는{" "}
                            <span className="font-bold text-white">
                                명제 자체
                            </span>
                            를 나타냅니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이 명제가 참일 때는 두 줄의 화살표를 사용하여
                        </p>

                        <BlockMath math="p\Rightarrow q" />

                        <p className="leading-8 text-gray-300">
                            로 나타냅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="text-center">
                                    <BlockMath math="p\to q" />
                                    <p className="text-gray-400">
                                        ‘<InlineMath math="p" />이면{" "}
                                        <InlineMath math="q" />이다.’라는 명제
                                    </p>
                                </div>

                                <div className="text-center">
                                    <BlockMath math="p\Rightarrow q" />
                                    <p className="text-gray-400">
                                        <InlineMath math="p\to q" />가 참
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* 6. 참인 명제와 집합의 연산 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            6. 참인 명제와 집합의 연산
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />가 참이면
                            진리집합 사이에는
                        </p>

                        <BlockMath math="P\subset Q" />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            앞에서 배운 부분집합의 성질을 이용하면 다음 관계들이
                            모두 성립합니다.
                        </p>

                        <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid items-center gap-3 sm:grid-cols-[12rem_1fr]">
                                <BlockMath math="P\cap Q=P" />
                                <p className="text-gray-400">
                                    교집합은 작은 집합
                                </p>
                            </div>

                            <div className="grid items-center gap-3 sm:grid-cols-[12rem_1fr]">
                                <BlockMath math="P\cup Q=Q" />
                                <p className="text-gray-400">
                                    합집합은 큰 집합
                                </p>
                            </div>

                            <div className="grid items-center gap-3 sm:grid-cols-[12rem_1fr]">
                                <BlockMath math="P-Q=\varnothing" />
                                <p className="text-gray-400">
                                    작은 집합에서 큰 집합을 빼면 남는 원소가 없음
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                            <p className="mb-4 font-bold text-purple-300">
                                여집합을 이용한 표현
                            </p>

                            <p className="leading-8 text-gray-300">
                                명제 <InlineMath math="p\to q" />가 참이면
                                반례가 없으므로
                            </p>

                            <BlockMath
                                math={String.raw`
P-Q=P\cap Q^C=\varnothing
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다. 양변의 여집합을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
(P\cap Q^C)^C=\varnothing^C
`}
                            />

                            <p className="leading-8 text-gray-300">
                                드모르간 법칙에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
P^C\cup Q=U
`}
                            />

                            <p className="mt-3 leading-8 text-gray-300">
                                가 됩니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\begin{aligned}
p\Rightarrow q
&\Longleftrightarrow P\subset Q\\
&\Longleftrightarrow P\cap Q=P\\
&\Longleftrightarrow P\cup Q=Q\\
&\Longleftrightarrow P-Q=\varnothing\\
&\Longleftrightarrow P\cap Q^C=\varnothing\\
&\Longleftrightarrow P^C\cup Q=U
\end{aligned}
`}
                            />
                        </div>

                    </div>


                    {/* 7. 반례의 집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            7. 반례의 집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />의 반례는
                            가정 <InlineMath math="p" />는 만족하지만
                            결론 <InlineMath math="q" />는 만족하지 않는 원소입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            즉, <InlineMath math="P" />에는 속하지만{" "}
                            <InlineMath math="Q" />에는 속하지 않는 원소입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\text{반례의 집합}=P-Q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            차집합을 교집합과 여집합으로 바꾸면
                        </p>

                        <BlockMath
                            math={String.raw`
P-Q=P\cap Q^C
`}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\boxed{
\text{반례의 집합}
=
P-Q
=
P\cap Q^C
}
`}
                            />

                            <p className="mt-3 text-center leading-8 text-gray-300">
                                가정의 진리집합에는 속하고
                                결론의 진리집합에는 속하지 않는 원소
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 <InlineMath math="p\to q" />가 참이 되려면
                            반례가 하나도 없어야 하므로
                        </p>

                        <BlockMath
                            math={String.raw`
P-Q=\varnothing
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이어야 합니다.
                        </p>

                    </div>


                    {/* 8. 여집합과 포함관계 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            8. 여집합과 포함관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="P\subset Q" />일 때 두 집합의
                            여집합을 생각하면 포함관계의 방향이 바뀝니다.
                        </p>

                        <BlockMath
                            math={String.raw`
P\subset Q
\quad\Longleftrightarrow\quad
Q^C\subset P^C
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 <InlineMath math="p\to q" />가 참이면
                        </p>

                        <BlockMath
                            math={String.raw`
p\Rightarrow q
\quad\Longleftrightarrow\quad
P\subset Q
\quad\Longleftrightarrow\quad
Q^C\subset P^C
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다.
                        </p>

                    </div>

                </div>


                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8">
                            전체집합 <InlineMath math="U" />에 대하여 두 조건{" "}
                            <InlineMath math="p,\ q" />의 진리집합을 각각{" "}
                            <InlineMath math="P,\ Q" />라 하자.
                            명제 <InlineMath math="\sim q\to p" />가 참일 때,
                            다음 중 항상 옳은 것은?
                        </p>

                        <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                            <div>
                                ① <InlineMath math="P\cup Q=P" />
                            </div>

                            <div>
                                ② <InlineMath math="P\cap Q=Q" />
                            </div>

                            <div>
                                ③ <InlineMath math="P\cup Q^C=Q" />
                            </div>

                            <div>
                                ④ <InlineMath math="P-Q=Q^C" />
                            </div>

                            <div>
                                ⑤ <InlineMath math="P\cup Q=P" />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                조건 <InlineMath math="\sim q" />의 진리집합은{" "}
                                <InlineMath math="Q^C" />입니다.
                            </p>

                            <p className="leading-8">
                                명제 <InlineMath math="\sim q\to p" />가 참이므로
                                가정의 진리집합은 결론의 진리집합에 포함됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
Q^C\subset P
`}
                            />

                            <p className="leading-8">
                                한편 차집합 <InlineMath math="P-Q" />를
                                교집합으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
P-Q=P\cap Q^C
`}
                            />

                            <p className="leading-8">
                                이고, <InlineMath math="Q^C\subset P" />이므로
                                작은 집합 <InlineMath math="Q^C" />와{" "}
                                <InlineMath math="P" />의 교집합은{" "}
                                <InlineMath math="Q^C" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
P\cap Q^C=Q^C
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
P-Q=P\cap Q^C=Q^C
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">정답</p>

                                <p className="text-lg font-bold text-white">
                                    ④ <InlineMath math="P-Q=Q^C" />
                                </p>
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    참인 명제에서는 가정의 진리집합이
                                    결론의 진리집합에 포함됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim q\Rightarrow p
\quad\Longrightarrow\quad
Q^C\subset P
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P-Q
=
P\cap Q^C
=
Q^C
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
                        <p className="leading-8">
                            전체집합{" "}
                            <InlineMath math="U=\{x\mid x\text{는 7 이하의 자연수}\}" />에
                            대하여 두 조건 <InlineMath math="p,\ q" />의 진리집합을 각각{" "}
                            <InlineMath math="P,\ Q" />라 하자. 조건{" "}
                            <InlineMath math="p" />가
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x^2-5x+6=0
`}
                        />

                        <p className="leading-8">
                            일 때, 명제 <InlineMath math="p\to\sim q" />가 참이 되도록 하는
                            집합 <InlineMath math="Q" />의 개수는?
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-5x+6=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(x-2)(x-3)=0
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{2,3\}
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 명제가 참이 되기 위한 진리집합의 포함관계를 구합니다.
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to\sim q" />가 참이므로
                                    가정의 진리집합은 결론의 진리집합에 포함되어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="\sim q" />의 진리집합은{" "}
                                    <InlineMath math="Q^C" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset Q^C
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이것은 <InlineMath math="P" />와{" "}
                                    <InlineMath math="Q" />가 공통된 원소를 갖지 않는다는 뜻이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
P\cap Q=\varnothing
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 집합 <InlineMath math="Q" />가 될 수 있는 경우를 구합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="P=\{2,3\}" />이므로{" "}
                                    <InlineMath math="Q" />에는{" "}
                                    <InlineMath math="2,\ 3" />이 포함될 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    전체집합
                                </p>

                                <BlockMath
                                    math={String.raw`
U=\{1,2,3,4,5,6,7\}
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="2,\ 3" />을 제외하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\{1,4,5,6,7\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="Q" />는 이 집합의 부분집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset\{1,4,5,6,7\}
`}
                                />

                                <p className="mt-3 leading-8">
                                    원소가 5개인 집합의 부분집합의 개수는
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


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    <InlineMath math="32" />개
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to\sim q" />가 참이면
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset Q^C
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="P" />와{" "}
                                    <InlineMath math="Q" />는 서로 겹치지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
P\cap Q=\varnothing
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="Q" />는 전체집합에서{" "}
                                    <InlineMath math="P" />의 원소를 제외한 나머지 원소들로
                                    만들 수 있는 부분집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset U-P
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                전체집합 <InlineMath math="U" />에 대하여 세 조건{" "}
                                <InlineMath math="p,\ q,\ r" />의 진리집합을 각각{" "}
                                <InlineMath math="P,\ Q,\ R" />이라 하자.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                세 집합 <InlineMath math="P,\ Q,\ R" /> 사이의 포함 관계가
                                오른쪽 벤 다이어그램과 같을 때, 다음 [보기] 중 항상 참인
                                명제를 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                                    <div>
                                        ㄱ. <InlineMath math="p\to\sim q" />
                                    </div>

                                    <div>
                                        ㄴ. <InlineMath math="\sim p\to q" />
                                    </div>

                                    <div>
                                        ㄷ. <InlineMath math="\sim r\to\sim q" />
                                    </div>

                                    <div>
                                        ㄹ. <InlineMath math="p\to\sim r" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/2.14_3.png"
                                alt="세 집합 P, Q, R의 포함 관계를 나타낸 벤 다이어그램"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                            ① ㄱ
                        </div>

                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                            ② ㄴ
                        </div>

                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                            ③ ㄱ, ㄷ
                        </div>

                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                            ④ ㄷ, ㄹ
                        </div>

                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                            ⑤ ㄱ, ㄴ, ㄹ
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                벤 다이어그램에서 먼저 집합 사이의 관계를 읽습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
Q\subset R
`}
                            />

                            <p className="leading-8">
                                또한 집합 <InlineMath math="P" />와{" "}
                                <InlineMath math="Q" />는 서로 겹치지 않으므로
                            </p>

                            <BlockMath
                                math={String.raw`
P\cap Q=\varnothing
`}
                            />

                            <p className="leading-8">
                                입니다. 각 명제를 진리집합의 포함관계로 바꾸어 판단합니다.
                            </p>


                            {/* ㄱ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄱ. <InlineMath math="p\to\sim q" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sim q" />의 진리집합은{" "}
                                    <InlineMath math="Q^C" />이므로 이 명제가 참이려면
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset Q^C
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그림에서 <InlineMath math="P" />와{" "}
                                    <InlineMath math="Q" />는 서로 겹치지 않으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
P\cap Q=\varnothing
\quad\Longleftrightarrow\quad
P\subset Q^C
`}
                                />

                                <p className="mt-3 font-bold text-green-300">
                                    따라서 ㄱ은 참입니다.
                                </p>
                            </div>


                            {/* ㄴ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄴ. <InlineMath math="\sim p\to q" />
                                </p>

                                <p className="leading-8">
                                    이 명제가 참이려면
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\subset Q
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러나 그림에서 <InlineMath math="P" />의 바깥에는{" "}
                                    <InlineMath math="Q" />에 속하지 않는 부분도 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\not\subset Q
`}
                                />

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 ㄴ은 거짓입니다.
                                </p>
                            </div>


                            {/* ㄷ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄷ. <InlineMath math="\sim r\to\sim q" />
                                </p>

                                <p className="leading-8">
                                    그림에서
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset R
`}
                                />

                                <p className="leading-8">
                                    이므로 여집합을 취하면 포함관계의 방향이 바뀌어
                                </p>

                                <BlockMath
                                    math={String.raw`
R^C\subset Q^C
`}
                                />

                                <p className="leading-8">
                                    가 됩니다.
                                </p>

                                <p className="mt-3 font-bold text-green-300">
                                    따라서 ㄷ은 참입니다.
                                </p>
                            </div>


                            {/* ㄹ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄹ. <InlineMath math="p\to\sim r" />
                                </p>

                                <p className="leading-8">
                                    이 명제가 참이려면
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset R^C
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러나 그림에서 <InlineMath math="P" />의 일부가{" "}
                                    <InlineMath math="R" />과 겹칩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
P\cap R\ne\varnothing
`}
                                />

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 ㄹ은 거짓입니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ③ ㄱ, ㄷ
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    벤 다이어그램 문제에서는 명제를 바로 판단하기보다
                                    먼저 진리집합의 포함관계로 바꾸어 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p\Rightarrow q
\quad\Longleftrightarrow\quad
P\subset Q
`}
                                />

                                <p className="mt-3 leading-8">
                                    특히 그림에서 바로 확인할 수 있는
                                </p>

                                <BlockMath
                                    math={String.raw`
P\cap Q=\varnothing,
\qquad
Q\subset R
`}
                                />

                                <p className="leading-8">
                                    을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset Q^C,
\qquad
R^C\subset Q^C
`}
                                />

                                <p className="leading-8">
                                    를 얻을 수 있습니다.
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
                            전체집합 <InlineMath math="U" />에서 세 조건{" "}
                            <InlineMath math="p,\ q,\ r" />의 진리집합을 각각{" "}
                            <InlineMath math="P,\ Q,\ R" />이라 할 때,
                        </p>

                        <BlockMath
                            math={String.raw`
P\cap Q=Q,\qquad P-R=\varnothing
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이 성립한다. 다음 [보기] 중 거짓인 명제를 있는 대로 고른 것은?
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <div className="space-y-5">
                                <div>
                                    ㄱ. <InlineMath math="\sim r\to\sim p" />
                                </div>

                                <div>
                                    ㄴ. <InlineMath math="q\to r" />
                                </div>

                                <div>
                                    ㄷ. <InlineMath math="r\to q" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                            <div>① ㄱ</div>
                            <div>② ㄴ</div>
                            <div>③ ㄷ</div>
                            <div>④ ㄱ, ㄴ</div>
                            <div>⑤ ㄱ, ㄴ, ㄷ</div>
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 주어진 집합의 연산 관계를 포함관계로 바꾸어 봅니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="P\cap Q=Q" />이므로
                                교집합이 <InlineMath math="Q" />라는 것은{" "}
                                <InlineMath math="Q" />가 <InlineMath math="P" />에
                                포함된다는 뜻입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
Q\subset P
`}
                            />

                            <p className="leading-8">
                                또 <InlineMath math="P-R=\varnothing" />이므로{" "}
                                <InlineMath math="P" />에는{" "}
                                <InlineMath math="R" />의 바깥에 있는 원소가 없습니다.
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
P\subset R
`}
                            />

                            <p className="leading-8">
                                입니다. 두 관계를 연결하면
                            </p>

                            <BlockMath
                                math={String.raw`
Q\subset P\subset R
`}
                            />


                            {/* ㄱ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄱ. <InlineMath math="\sim r\to\sim p" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="P\subset R" />에서
                                    양쪽의 여집합을 생각하면 포함관계의 방향이 바뀌므로
                                </p>

                                <BlockMath
                                    math={String.raw`
R^C\subset P^C
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim r\Rightarrow\sim p
`}
                                />

                                <p className="font-bold text-green-300">
                                    이므로 ㄱ은 참입니다.
                                </p>
                            </div>


                            {/* ㄴ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄴ. <InlineMath math="q\to r" />
                                </p>

                                <p className="leading-8">
                                    앞에서
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset P\subset R
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset R
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
q\Rightarrow r
`}
                                />

                                <p className="font-bold text-green-300">
                                    이므로 ㄴ은 참입니다.
                                </p>
                            </div>


                            {/* ㄷ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄷ. <InlineMath math="r\to q" />
                                </p>

                                <p className="leading-8">
                                    이 명제가 참이 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
R\subset Q
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러나 주어진 관계에서 알 수 있는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset P\subset R
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="R\subset Q" />는
                                    항상 성립한다고 할 수 없습니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 ㄷ은 거짓입니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ③ ㄷ
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    집합의 연산으로 주어진 조건을 먼저
                                    포함관계로 바꾸는 것이 핵심입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
P\cap Q=Q
\quad\Longrightarrow\quad
Q\subset P
`}
                                />

                                <BlockMath
                                    math={String.raw`
P-R=\varnothing
\quad\Longrightarrow\quad
P\subset R
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{Q\subset P\subset R}
`}
                                />

                                <p className="leading-8">
                                    를 먼저 얻은 뒤 각 명제를 판단하면 됩니다.
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
                            <InlineMath math="n" />이 10 이하의 자연수일 때, 다음 명제
                        </p>

                        <BlockMath
                            math={String.raw`
n\text{이 짝수이면 }n\text{은 }24\text{의 약수이다.}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 거짓임을 보여 주는 <InlineMath math="n" />의 값은?
                        </p>

                        <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                            <div>
                                ① <InlineMath math="2" />
                            </div>

                            <div>
                                ② <InlineMath math="4" />
                            </div>

                            <div>
                                ③ <InlineMath math="6" />
                            </div>

                            <div>
                                ④ <InlineMath math="8" />
                            </div>

                            <div>
                                ⑤ <InlineMath math="10" />
                            </div>
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                명제 <InlineMath math="p\to q" />가 거짓임을 보이려면
                                가정 <InlineMath math="p" />는 참이지만 결론{" "}
                                <InlineMath math="q" />는 거짓이 되는{" "}
                                <span className="font-bold text-yellow-300">
                                    반례
                                </span>
                                를 찾으면 됩니다.
                            </p>

                            <p className="leading-8">
                                주어진 명제에서 가정은
                            </p>

                            <BlockMath
                                math={String.raw`
n\text{은 짝수이다.}
`}
                            />

                            <p className="leading-8">
                                이고, 결론은
                            </p>

                            <BlockMath
                                math={String.raw`
n\text{은 }24\text{의 약수이다.}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                보기의 수는 모두 짝수이므로 가정을 만족합니다.
                                이 중 <InlineMath math="24" />의 약수가 아닌 수를 찾으면 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
24\text{의 약수 중 10 이하의 짝수}
=
2,\ 4,\ 6,\ 8
`}
                            />

                            <p className="leading-8">
                                따라서 <InlineMath math="n=10" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
10\text{은 짝수}
\qquad\text{하지만}\qquad
10\text{은 }24\text{의 약수가 아님}
`}
                            />

                            <p className="leading-8">
                                이므로 가정은 참이고 결론은 거짓입니다.
                                따라서 <InlineMath math="n=10" />은 주어진 명제의 반례입니다.
                            </p>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ⑤ <InlineMath math="10" />
                                </p>
                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to q" />의 반례는
                                    가정은 만족하지만 결론은 만족하지 않는 경우입니다.
                                    반례를 하나만 찾으면 그 명제가 거짓임을 알 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
p\text{는 참},\qquad q\text{는 거짓}
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
                            전체집합 <InlineMath math="U" />에 대하여 두 조건{" "}
                            <InlineMath math="p,\ q" />의 진리집합을 각각{" "}
                            <InlineMath math="P,\ Q" />라 하자. 이때 명제
                            ‘<InlineMath math="\sim p" />이면 <InlineMath math="q" />이다.’가
                            거짓임을 보이는 원소가 속하는 집합은?
                        </p>

                        <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                            <div>
                                ① <InlineMath math="P\cap Q" />
                            </div>

                            <div>
                                ② <InlineMath math="P^C\cap Q" />
                            </div>

                            <div>
                                ③ <InlineMath math="P\cap Q^C" />
                            </div>

                            <div>
                                ④ <InlineMath math="(P\cup Q)^C" />
                            </div>

                            <div>
                                ⑤ <InlineMath math="P\cup Q" />
                            </div>
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                명제 <InlineMath math="\sim p\to q" />가 거짓이 되려면
                                가정 <InlineMath math="\sim p" />는 참이고
                                결론 <InlineMath math="q" />는 거짓이어야 합니다.
                            </p>

                            <p className="leading-8">
                                먼저 <InlineMath math="\sim p" />가 참인 원소는
                                진리집합 <InlineMath math="P" />에 속하지 않으므로
                            </p>

                            <BlockMath
                                math={String.raw`
P^C
`}
                            />

                            <p className="leading-8">
                                에 속합니다.
                            </p>

                            <p className="leading-8">
                                또 <InlineMath math="q" />가 거짓인 원소는
                            </p>

                            <BlockMath
                                math={String.raw`
Q^C
`}
                            />

                            <p className="leading-8">
                                에 속합니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 조건을 동시에 만족하는 원소가 속하는 집합은
                            </p>

                            <BlockMath
                                math={String.raw`
P^C\cap Q^C
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                드모르간 법칙을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
P^C\cap Q^C
=
(P\cup Q)^C
`}
                            />

                            <p className="leading-8">
                                이므로 구하는 집합은{" "}
                                <InlineMath math="(P\cup Q)^C" />입니다.
                            </p>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ④ <InlineMath math="(P\cup Q)^C" />
                                </p>
                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to q" />의 반례는
                                    가정은 참이고 결론은 거짓인 원소입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 문제에서는 가정이 <InlineMath math="\sim p" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\text{는 참}
\quad\Longrightarrow\quad
P^C
`}
                                />

                                <p className="leading-8">
                                    결론 <InlineMath math="q" />는 거짓이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
q\text{는 거짓}
\quad\Longrightarrow\quad
Q^C
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\cap Q^C
=
(P\cup Q)^C
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
                            두 조건
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x<2\text{ 또는 }x\ge4,\qquad
q:\ k<x<8
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 명제 <InlineMath math="\sim p\to q" />가
                            거짓임을 보이는 반례 중 정수는 <InlineMath math="2" />뿐일 때,
                            실수 <InlineMath math="k" />의 값의 범위는?{" "}
                            (단, <InlineMath math="k<8" />)
                        </p>

                        <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                            <div>
                                ① <InlineMath math="1<k\le5" />
                            </div>

                            <div>
                                ② <InlineMath math="2\le k<3" />
                            </div>

                            <div>
                                ③ <InlineMath math="1<k<3" />
                            </div>

                            <div>
                                ④ <InlineMath math="2<k\le3" />
                            </div>

                            <div>
                                ⑤ <InlineMath math="2\le k<7" />
                            </div>
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 가정 <InlineMath math="\sim p" />의 범위를 구합니다.
                                </p>

                                <p className="leading-8">
                                    조건 <InlineMath math="p" />가
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ x<2\text{ 또는 }x\ge4
`}
                                />

                                <p className="leading-8">
                                    이므로 이를 부정하면 ‘또는’은 ‘이고’로 바뀌어
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ x\ge2\text{이고 }x<4
`}
                                />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ 2\le x<4
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 명제의 반례를 구합니다.
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="\sim p\to q" />의 반례는
                                    가정 <InlineMath math="\sim p" />는 참이고,
                                    결론 <InlineMath math="q" />는 거짓인 경우입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    조건 <InlineMath math="q" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
q:\ k<x<8
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데 가정 <InlineMath math="\sim p" />를 만족하는{" "}
                                    <InlineMath math="x" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
2\le x<4
`}
                                />

                                <p className="leading-8">
                                    이므로 항상 <InlineMath math="x<8" />입니다.
                                    따라서 이 범위에서 <InlineMath math="q" />가 거짓이 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le k
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 반례는
                                </p>

                                <BlockMath
                                    math={String.raw`
2\le x<4,\qquad x\le k
`}
                                />

                                <p className="leading-8">
                                    를 동시에 만족하는 수입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 반례 중 정수가 2뿐이 되도록 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="2\le x<4" />에 들어 있는 정수는
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    반례 중 정수가 <InlineMath math="2" />뿐이 되려면
                                    <InlineMath math="2" />는 반례에 포함되고{" "}
                                    <InlineMath math="3" />은 반례에 포함되지 않아야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="2" />가 반례이려면
                                </p>

                                <BlockMath
                                    math={String.raw`
2\le k
`}
                                />

                                <p className="leading-8">
                                    이어야 하고, <InlineMath math="3" />이 반례가 아니려면
                                </p>

                                <BlockMath
                                    math={String.raw`
k<3
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
2\le k<3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ② <InlineMath math="2\le k<3" />
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="\sim p\to q" />의 반례는
                                    가정은 참이고 결론은 거짓인 경우입니다.
                                    먼저 반례가 될 수 있는 <InlineMath math="x" />의 범위를 구한 뒤,
                                    그 범위에 들어 있는 정수를 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ 2\le x<4
`}
                                />

                                <BlockMath
                                    math={String.raw`
q\text{가 거짓}:\ x\le k
`}
                                />

                                <p className="leading-8">
                                    정수 <InlineMath math="2" />는 포함하고{" "}
                                    <InlineMath math="3" />은 제외해야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2\le k<3
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
                            세 실수 <InlineMath math="x,\ y,\ z" />에 대하여
                            참인 명제인 것만을 [보기]에서 있는 대로 고른 것은?
                        </p>

                        <div className="mt-5 space-y-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div>
                                ㄱ. <InlineMath math="x" />가 8의 약수이면{" "}
                                <InlineMath math="x" />는 24의 양의 약수이다.
                            </div>

                            <div>
                                ㄴ. <InlineMath math="x^3=y^3" />이면{" "}
                                <InlineMath math="x=y" />이다.
                            </div>

                            <div>
                                ㄷ. <InlineMath math="|x|+|y|=0" />이면{" "}
                                <InlineMath math="x^2+y^2=0" />이다.
                            </div>

                            <div>
                                ㄹ. <InlineMath math="x^2+y^2+z^2>0" />이면{" "}
                                <InlineMath math="x\ne0,\ y\ne0,\ z\ne0" />이다.
                            </div>

                        </div>

                        <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                            <div>① ㄱ</div>
                            <div>② ㄱ, ㄷ</div>
                            <div>③ ㄱ, ㄴ, ㄷ</div>
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
                                    ㄱ을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    8의 양의 약수는
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 2,\ 4,\ 8
`}
                                />

                                <p className="leading-8">
                                    이고, 이 수들은 모두 24의 양의 약수입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 2,\ 4,\ 8
\quad\longrightarrow\quad
24\text{의 양의 약수}
`}
                                />

                                <p className="mt-3 font-bold text-green-300">
                                    따라서 ㄱ은 참입니다.
                                </p>
                            </div>


                            {/* ㄴ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄴ을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x^3=y^3" />에서 이항하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^3-y^3=0
`}
                                />

                                <p className="leading-8">
                                    이고, 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-y)(x^2+xy+y^2)=0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+xy+y^2
=
\left(x+\frac{y}{2}\right)^2
+\frac34y^2
\ge0
`}
                                />

                                <p className="leading-8">
                                    이고, 이 값이 <InlineMath math="0" />인 경우에도{" "}
                                    <InlineMath math="x=y=0" />이므로 결국
                                </p>

                                <BlockMath
                                    math={String.raw`
x=y
`}
                                />

                                <p className="mt-3 font-bold text-green-300">
                                    입니다. 따라서 ㄴ은 참입니다.
                                </p>
                            </div>


                            {/* ㄷ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄷ을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    절댓값은 항상 <InlineMath math="0" /> 이상이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
|x|\ge0,\qquad |y|\ge0
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
|x|+|y|=0
`}
                                />

                                <p className="leading-8">
                                    이려면 두 값이 모두 <InlineMath math="0" />이어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x=0,\qquad y=0
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2=0
`}
                                />

                                <p className="mt-3 font-bold text-green-300">
                                    이므로 ㄷ은 참입니다.
                                </p>
                            </div>


                            {/* ㄹ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ㄹ을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    명제가 거짓임을 보이기 위해 반례를 찾아봅니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    예를 들어
                                </p>

                                <BlockMath
                                    math={String.raw`
x=1,\qquad y=0,\qquad z=0
`}
                                />

                                <p className="leading-8">
                                    이라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2+z^2
=
1>0
`}
                                />

                                <p className="leading-8">
                                    이므로 가정은 참입니다.
                                    그러나 <InlineMath math="y=0" />,{" "}
                                    <InlineMath math="z=0" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x\ne0,\ y\ne0,\ z\ne0
`}
                                />

                                <p className="leading-8">
                                    라는 결론은 거짓입니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 ㄹ은 거짓입니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ③ ㄱ, ㄴ, ㄷ
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    명제가 참인지 확인할 때는 가정을 만족하는 모든 경우에서
                                    결론이 성립하는지 확인합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    반대로 명제가 거짓임을 보이려면
                                    가정은 참이지만 결론은 거짓인 반례 하나를 찾으면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{반례}
=
\text{가정은 참,\ 결론은 거짓}
}
`}
                                />

                                <p className="mt-3 leading-8">
                                    특히 ㄹ에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2+z^2>0
`}
                                />

                                <p className="leading-8">
                                    이라는 것은 세 수 중{" "}
                                    <span className="font-bold text-yellow-300">
                                        적어도 하나가 0이 아니다
                                    </span>
                                    라는 뜻이지, 세 수가 모두 0이 아니라는 뜻은 아닙니다.
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
                            실수 <InlineMath math="x" />에 대한 두 조건{" "}
                            <InlineMath math="p,\ q" />가 다음과 같다.
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ a\le x\le2a+6,\qquad
q:\ x^2-3x+2>0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            명제 <InlineMath math="\sim q\to p" />가 참이 되도록 하는
                            정수 <InlineMath math="a" />의 개수는?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="q" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-3x+2>0
`}
                                />

                                <p className="leading-8">
                                    인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-1)(x-2)>0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
q:\ x<1\text{ 또는 }x>2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 조건 <InlineMath math="\sim q" />의 진리집합을 구합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="q" />의 부정을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim q:\ x\ge1\text{이고 }x\le2
`}
                                />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim q:\ 1\le x\le2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 명제가 참이 되기 위한 포함관계를 세웁니다.
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="\sim q\to p" />가 참이므로
                                    가정의 진리집합이 결론의 진리집합에 포함되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{x\mid1\le x\le2\}
\subset
\{x\mid a\le x\le2a+6\}
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="1\le x\le2" />의 모든 수가{" "}
                                    <InlineMath math="a\le x\le2a+6" />을 만족해야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    왼쪽 끝에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
a\le1
`}
                                />

                                <p className="leading-8">
                                    이어야 하고, 오른쪽 끝에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
2\le2a+6
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2a+6\ge2
\quad\Longrightarrow\quad
a\ge-2
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
-2\le a\le1
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 정수 <InlineMath math="a" />의 개수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    조건을 만족하는 정수는
                                </p>

                                <BlockMath
                                    math={String.raw`
-2,\ -1,\ 0,\ 1
`}
                                />

                                <p className="leading-8">
                                    이므로 모두 <InlineMath math="4" />개입니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    <InlineMath math="4" />개
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 가정 <InlineMath math="\sim q" />의 진리집합을
                                    정확히 구한 뒤, 참인 명제의 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{가정의 진리집합}
\subset
\text{결론의 진리집합}
`}
                                />

                                <p className="leading-8">
                                    을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1\le x\le2
\quad\Longrightarrow\quad
a\le x\le2a+6
`}
                                />

                                <p className="leading-8">
                                    따라서 작은 범위 <InlineMath math="1\le x\le2" />를
                                    큰 범위 <InlineMath math="a\le x\le2a+6" />가
                                    완전히 포함해야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a\le1,\qquad 2a+6\ge2
`}
                                />

                                <p className="leading-8">
                                    를 얻습니다.
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
                            세 조건 <InlineMath math="p,\ q,\ r" />이
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x<a,\qquad
q:\ x>5,\qquad
r:\ -3<x\le-1\text{ 또는 }x\ge b
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 명제 <InlineMath math="\sim p\to q" />와
                            명제 <InlineMath math="q\to r" />이 모두 참이 되도록 하는
                            정수 <InlineMath math="a" />의 최솟값과
                            정수 <InlineMath math="b" />의 최댓값의 곱을 구하시오.
                            (단, <InlineMath math="b>-1" />)
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* a */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 명제 <InlineMath math="\sim p\to q" />를 이용하여{" "}
                                    <InlineMath math="a" />의 범위를 구합니다.
                                </p>

                                <p className="leading-8">
                                    조건 <InlineMath math="p" />가
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ x<a
`}
                                />

                                <p className="leading-8">
                                    이므로 그 부정은
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:\ x\ge a
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    명제 <InlineMath math="\sim p\to q" />가 참이므로
                                    가정의 진리집합이 결론의 진리집합에 포함되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{x\mid x\ge a\}
\subset
\{x\mid x>5\}
`}
                                />

                                <p className="leading-8">
                                    가정의 진리집합에는 <InlineMath math="x=a" />도
                                    포함되므로 <InlineMath math="a" /> 자체가{" "}
                                    <InlineMath math="5" />보다 커야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a>5
`}
                                />

                                <p className="leading-8">
                                    따라서 정수 <InlineMath math="a" />의 최솟값은
                                </p>

                                <BlockMath
                                    math={String.raw`
a_{\min}=6
`}
                                />
                            </div>


                            {/* b */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 명제 <InlineMath math="q\to r" />를 이용하여{" "}
                                    <InlineMath math="b" />의 범위를 구합니다.
                                </p>

                                <p className="leading-8">
                                    조건 <InlineMath math="q" />의 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
x>5
`}
                                />

                                <p className="leading-8">
                                    이고, 조건 <InlineMath math="r" />의 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
-3<x\le-1
\text{ 또는 }
x\ge b
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    명제 <InlineMath math="q\to r" />가 참이려면
                                    모든 <InlineMath math="x>5" />가 조건{" "}
                                    <InlineMath math="r" />을 만족해야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데 <InlineMath math="x>5" />인 수는
                                    첫 번째 범위
                                </p>

                                <BlockMath
                                    math={String.raw`
-3<x\le-1
`}
                                />

                                <p className="leading-8">
                                    에는 속할 수 없으므로 반드시
                                </p>

                                <BlockMath
                                    math={String.raw`
x\ge b
`}
                                />

                                <p className="leading-8">
                                    를 만족해야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    모든 <InlineMath math="x>5" />에 대하여{" "}
                                    <InlineMath math="x\ge b" />가 성립하려면
                                </p>

                                <BlockMath
                                    math={String.raw`
b\le5
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    문제에서 <InlineMath math="b>-1" />이고{" "}
                                    <InlineMath math="b" />는 정수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
b=0,\ 1,\ 2,\ 3,\ 4,\ 5
`}
                                />

                                <p className="leading-8">
                                    따라서 정수 <InlineMath math="b" />의 최댓값은
                                </p>

                                <BlockMath
                                    math={String.raw`
b_{\max}=5
`}
                                />
                            </div>


                            {/* 곱 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 두 값을 곱합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
6\times5=30
`}
                                />
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    <InlineMath math="30" />
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    두 명제가 모두 참이므로 각각
                                    가정의 진리집합이 결론의 진리집합에 포함되도록
                                    경계값을 비교합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\Rightarrow q
\quad\Longrightarrow\quad
\{x\mid x\ge a\}
\subset
\{x\mid x>5\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
q\Rightarrow r
\quad\Longrightarrow\quad
\{x\mid x>5\}
\subset
R
`}
                                />

                                <p className="leading-8">
                                    특히 첫 번째 포함관계에서는{" "}
                                    <InlineMath math="x=a" />가 포함되므로{" "}
                                    <InlineMath math="a>5" />이고,
                                    두 번째에서는 <InlineMath math="x" />가{" "}
                                    <InlineMath math="5" />보다 큰 값에 얼마든지 가까워질 수 있으므로{" "}
                                    <InlineMath math="b\le5" />가 되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a_{\min}=6,\qquad
b_{\max}=5
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
                            세 조건 <InlineMath math="p,\ q,\ r" />이
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ x^2\le9,\qquad
q:\ -5\le x\le a,\qquad
r:\ x\ge b
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 명제 <InlineMath math="p\to q" />와
                            명제 <InlineMath math="q\to r" />이 참이 되도록 하는
                            상수 <InlineMath math="a" />의 최솟값과
                            상수 <InlineMath math="b" />의 최댓값의 곱은?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* P */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2\le9
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-3\le x\le3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* a */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 명제 <InlineMath math="p\to q" />를 이용하여{" "}
                                    <InlineMath math="a" />의 범위를 구합니다.
                                </p>

                                <p className="leading-8">
                                    명제가 참이므로 가정의 진리집합이
                                    결론의 진리집합에 포함되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{x\mid-3\le x\le3\}
\subset
\{x\mid-5\le x\le a\}
`}
                                />

                                <p className="leading-8">
                                    왼쪽 끝은 이미
                                </p>

                                <BlockMath
                                    math={String.raw`
-5\le-3
`}
                                />

                                <p className="leading-8">
                                    으로 만족하므로, 오른쪽 끝 <InlineMath math="3" />이
                                    결론의 진리집합에 포함되면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
3\le a
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="a" />의 최솟값은
                                </p>

                                <BlockMath
                                    math={String.raw`
a_{\min}=3
`}
                                />
                            </div>


                            {/* b */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 명제 <InlineMath math="q\to r" />를 이용하여{" "}
                                    <InlineMath math="b" />의 범위를 구합니다.
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="q\to r" />가 참이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\{x\mid-5\le x\le a\}
\subset
\{x\mid x\ge b\}
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    조건 <InlineMath math="q" />의 진리집합에서 가장 작은 수는{" "}
                                    <InlineMath math="-5" />입니다.
                                    따라서 <InlineMath math="-5" />도{" "}
                                    <InlineMath math="x\ge b" />를 만족해야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-5\ge b
`}
                                />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath
                                    math={String.raw`
b\le-5
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="b" />의 최댓값은
                                </p>

                                <BlockMath
                                    math={String.raw`
b_{\max}=-5
`}
                                />
                            </div>


                            {/* 곱 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 두 값을 곱합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
3\times(-5)=-15
`}
                                />
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    <InlineMath math="-15" />
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    두 명제가 모두 참이므로 세 진리집합 사이에는
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset Q\subset R
`}
                                />

                                <p className="leading-8">
                                    의 관계가 성립합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{-3\le x\le3\}
\subset
\{-5\le x\le a\}
\subset
\{x\ge b\}
`}
                                />

                                <p className="leading-8">
                                    첫 번째 포함관계에서는 오른쪽 끝을 비교하여{" "}
                                    <InlineMath math="a\ge3" />,
                                    두 번째 포함관계에서는 가장 작은 값{" "}
                                    <InlineMath math="-5" />를 비교하여{" "}
                                    <InlineMath math="b\le-5" />를 얻습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a_{\min}=3,\qquad
b_{\max}=-5
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
                            두 조건
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ |x-2|\le k,\qquad
q:\ -3\le x\le7
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 명제 <InlineMath math="p\to q" />가 참이 되도록 하는
                            자연수 <InlineMath math="k" />의 개수는?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 1 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
|x-2|\le k
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="k" />는 자연수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-k\le x-2\le k
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
2-k\le x\le2+k
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* 2 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 명제가 참이 되기 위한 포함관계를 세웁니다.
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to q" />가 참이므로
                                    가정의 진리집합이 결론의 진리집합에 포함되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{x\mid2-k\le x\le2+k\}
\subset
\{x\mid-3\le x\le7\}
`}
                                />

                                <p className="leading-8">
                                    따라서 왼쪽 끝과 오른쪽 끝을 각각 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2-k\ge-3,\qquad
2+k\le7
`}
                                />
                            </div>


                            {/* 3 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ <InlineMath math="k" />의 범위를 구합니다.
                                </p>

                                <p className="leading-8">
                                    첫 번째 부등식에서
                                </p>

                                <BlockMath
                                    math={String.raw`
2-k\ge-3
\quad\Longrightarrow\quad
k\le5
`}
                                />

                                <p className="leading-8">
                                    두 번째 부등식에서도
                                </p>

                                <BlockMath
                                    math={String.raw`
2+k\le7
\quad\Longrightarrow\quad
k\le5
`}
                                />

                                <p className="leading-8">
                                    를 얻습니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
k\le5
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* 4 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 자연수 <InlineMath math="k" />의 개수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k" />는 자연수이므로 가능한 값은
                                </p>

                                <BlockMath
                                    math={String.raw`
k=1,\ 2,\ 3,\ 4,\ 5
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 모두 <InlineMath math="5" />개입니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    <InlineMath math="5" />개
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    절댓값 부등식의 진리집합을 먼저 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
|x-2|\le k
\quad\Longleftrightarrow\quad
2-k\le x\le2+k
`}
                                />

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to q" />가 참이려면
                                    이 범위 전체가 <InlineMath math="-3\le x\le7" /> 안에
                                    들어가야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2-k\ge-3,\qquad
2+k\le7
`}
                                />

                                <p className="leading-8">
                                    를 동시에 만족해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
k\le5
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
                            실수 <InlineMath math="x" />에 대한 두 조건
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ |x-a|\le5,\qquad
q:\ x^2-64>0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 명제 <InlineMath math="p\to\sim q" />가
                            참이 되도록 하는 실수 <InlineMath math="a" />의 최댓값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 1 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
|x-a|\le5
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-5\le x-a\le5
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a-5\le x\le a+5
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* 2 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 조건 <InlineMath math="\sim q" />의 진리집합을 구합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 조건 <InlineMath math="q" />를 풀면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-64>0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(x-8)(x+8)>0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
q:\ x<-8\text{ 또는 }x>8
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이를 부정하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim q:\ -8\le x\le8
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* 3 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 명제가 참이 되기 위한 포함관계를 세웁니다.
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to\sim q" />가 참이므로
                                    가정의 진리집합이 결론의 진리집합에 포함되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{x\mid a-5\le x\le a+5\}
\subset
\{x\mid-8\le x\le8\}
`}
                                />

                                <p className="leading-8">
                                    따라서 양쪽 끝을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
a-5\ge-8,\qquad
a+5\le8
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* 4 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ <InlineMath math="a" />의 범위를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a-5\ge-8
\quad\Longrightarrow\quad
a\ge-3
`}
                                />

                                <BlockMath
                                    math={String.raw`
a+5\le8
\quad\Longrightarrow\quad
a\le3
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
-3\le a\le3
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="a" />의 최댓값은{" "}
                                    <InlineMath math="3" />입니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    <InlineMath math="3" />
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 가정 <InlineMath math="p" />와 결론{" "}
                                    <InlineMath math="\sim q" />의 진리집합을 각각 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ a-5\le x\le a+5
`}
                                />

                                <BlockMath
                                    math={String.raw`
\sim q:\ -8\le x\le8
`}
                                />

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to\sim q" />가 참이려면
                                    첫 번째 범위가 두 번째 범위 안에 완전히 들어가야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a-5\ge-8,\qquad
a+5\le8
`}
                                />

                                <p className="leading-8">
                                    를 동시에 만족해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-3\le a\le3
`}
                                />

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
                            실수 <InlineMath math="x" />에 대한 두 조건{" "}
                            <InlineMath math="p,\ q" />가
                        </p>

                        <BlockMath
                            math={String.raw`
p:\ |x-1|<a,\qquad
q:\ |x+2|<5
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 명제 ‘<InlineMath math="p" />이면{" "}
                            <InlineMath math="q" />이다.’가 참이 되도록 하는
                            양수 <InlineMath math="a" />의 최댓값은?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 1 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
|x-1|<a
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="a" />는 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-a<x-1<a
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
1-a<x<1+a
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* 2 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 조건 <InlineMath math="q" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
|x+2|<5
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-5<x+2<5
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
-7<x<3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>
                            </div>


                            {/* 3 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 명제가 참이 되기 위한 포함관계를 세웁니다.
                                </p>

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to q" />가 참이므로
                                    가정의 진리집합이 결론의 진리집합에 포함되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{x\mid1-a<x<1+a\}
\subset
\{x\mid-7<x<3\}
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="p" />의 범위가{" "}
                                    <InlineMath math="q" />의 범위 안에 완전히 들어가야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
1-a\ge-7,\qquad
1+a\le3
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>
                            </div>


                            {/* 4 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ <InlineMath math="a" />의 범위를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1-a\ge-7
\quad\Longrightarrow\quad
a\le8
`}
                                />

                                <BlockMath
                                    math={String.raw`
1+a\le3
\quad\Longrightarrow\quad
a\le2
`}
                                />

                                <p className="leading-8">
                                    두 조건을 동시에 만족하고{" "}
                                    <InlineMath math="a" />는 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
0<a\le2
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="a" />의 최댓값은{" "}
                                    <InlineMath math="2" />입니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    <InlineMath math="2" />
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    두 절댓값 부등식을 먼저 각각 하나의 범위로 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ 1-a<x<1+a
`}
                                />

                                <BlockMath
                                    math={String.raw`
q:\ -7<x<3
`}
                                />

                                <p className="leading-8">
                                    명제 <InlineMath math="p\to q" />가 참이려면
                                    첫 번째 범위가 두 번째 범위 안에 완전히 들어가야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
1-a\ge-7,\qquad
1+a\le3
`}
                                />

                                <p className="leading-8">
                                    를 비교하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
0<a\le2
`}
                                />

                            </div>

                        </div>

                    </details>

                </div>


                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-5 text-2xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5">
                        <div>
                            <p className="mb-2 font-bold text-white">
                                ① 명제의 구조
                            </p>

                            <BlockMath
                                math={String.raw`
\underbrace{p}_{\text{가정}}
\to
\underbrace{q}_{\text{결론}}
`}
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-bold text-white">
                                ② 참인 명제
                            </p>

                            <BlockMath
                                math={String.raw`
p\Rightarrow q
\quad\Longleftrightarrow\quad
P\subset Q
`}
                            />

                            <p className="text-center text-gray-300">
                                작은 집합에서 큰 집합으로
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 font-bold text-white">
                                ③ 반례
                            </p>

                            <BlockMath
                                math={String.raw`
\text{반례의 집합}
=
P-Q
=
P\cap Q^C
`}
                            />

                            <p className="text-center text-gray-300">
                                가정은 만족하지만 결론은 만족하지 않는 원소
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 font-bold text-white">
                                ④ 참인 명제의 여러 표현
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
p\Rightarrow q
&\Longleftrightarrow P\subset Q\\
&\Longleftrightarrow P\cap Q=P\\
&\Longleftrightarrow P\cup Q=Q\\
&\Longleftrightarrow P-Q=\varnothing\\
&\Longleftrightarrow P\cap Q^C=\varnothing\\
&\Longleftrightarrow P^C\cup Q=U
\end{aligned}
`}
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-bold text-white">
                                ⑤ 여집합
                            </p>

                            <BlockMath
                                math={String.raw`
P\subset Q
\quad\Longleftrightarrow\quad
Q^C\subset P^C
`}
                            />

                            <p className="text-center text-gray-300">
                                여집합을 취하면 포함관계의 방향이 바뀝니다.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/* 2.15 ‘모든’과 ‘어떤’이 포함된 명제 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.15 ‘모든’과 ‘어떤’이 포함된 명제
                </h2>

                <p className="leading-8 text-gray-300">
                    조건에 ‘모든’ 또는 ‘어떤’이라는 말이 붙으면
                    하나의 참 또는 거짓을 판단할 수 있는 명제가 됩니다.
                    진리집합을 이용하여 그 의미를 알아봅니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 본문 카드 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. ‘모든’이 포함된 명제
                        </h3>

                        <p className="leading-8 text-gray-300">
                            전체집합 <InlineMath math="U" />의 모든 원소가
                            조건 <InlineMath math="p" />를 만족하면
                        </p>

                        <BlockMath
                            math={String.raw`
\text{모든 }x\text{에 대하여 }p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            는 참입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            조건 <InlineMath math="p" />의 진리집합을{" "}
                            <InlineMath math="P" />라 하면,
                            전체집합의 모든 원소가 조건을 만족한다는 것은
                            진리집합이 전체집합과 같다는 뜻입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{모든 }x\text{에 대하여 }p\text{가 참}
\quad\Longleftrightarrow\quad
P=U
}
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            반대로 전체집합에서 조건 <InlineMath math="p" />를
                            만족하지 않는 원소가 하나라도 있으면
                            이 명제는 거짓입니다.
                        </p>

                    </div>


                    {/* 본문 카드 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. ‘모든’이 포함된 명제의 예
                        </h3>

                        <p className="leading-8 text-gray-300">
                            전체집합을
                        </p>

                        <BlockMath
                            math={String.raw`
U=\{1,2,3,4\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라고 하겠습니다.
                        </p>

                        <div className="mt-5 space-y-5">

                            <div>
                                <p className="font-bold text-white">
                                    <InlineMath math="p" /> : 모든{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x<5" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="1,2,3,4" />는 모두{" "}
                                    <InlineMath math="x<5" />를 만족하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{1,2,3,4\}=U
`}
                                />

                                <p className="leading-8 font-bold text-green-300">
                                    따라서 명제 <InlineMath math="p" />는 참입니다.
                                </p>
                            </div>


                            <div className="border-t border-white/10 pt-5">
                                <p className="font-bold text-white">
                                    <InlineMath math="q" /> : 모든{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x>2" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="x>2" />를 만족하는 원소는{" "}
                                    <InlineMath math="3,4" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
Q=\{3,4\}\ne U
`}
                                />

                                <p className="leading-8 font-bold text-red-300">
                                    따라서 명제 <InlineMath math="q" />는 거짓입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    실제로 <InlineMath math="x=1" /> 또는{" "}
                                    <InlineMath math="x=2" />를 대입하면
                                    <InlineMath math="x>2" />가 성립하지 않습니다.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* 본문 카드 3 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. ‘어떤’이 포함된 명제
                        </h3>

                        <p className="leading-8 text-gray-300">
                            전체집합 <InlineMath math="U" />의 원소 중
                            조건 <InlineMath math="p" />를 만족하는 원소가
                            하나라도 존재하면
                        </p>

                        <BlockMath
                            math={String.raw`
\text{어떤 }x\text{에 대하여 }p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            는 참입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 조건 <InlineMath math="p" />의 진리집합{" "}
                            <InlineMath math="P" />에 원소가 하나라도 있으면 됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{어떤 }x\text{에 대하여 }p\text{가 참}
\quad\Longleftrightarrow\quad
P\ne\varnothing
}
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            반대로 조건을 만족하는 원소가 하나도 없으면
                            진리집합은 <InlineMath math="\varnothing" />이고,
                            이 명제는 거짓입니다.
                        </p>

                    </div>


                    {/* 본문 카드 4 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. ‘어떤’이 포함된 명제의 예
                        </h3>

                        <p className="leading-8 text-gray-300">
                            같은 전체집합
                        </p>

                        <BlockMath
                            math={String.raw`
U=\{1,2,3,4\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에서 다음 두 명제를 생각해 봅시다.
                        </p>

                        <div className="mt-5 space-y-5">

                            <div>
                                <p className="font-bold text-white">
                                    <InlineMath math="r" /> : 어떤{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x>4" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    전체집합에는 <InlineMath math="4" />보다 큰 원소가
                                    하나도 없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
R=\varnothing
`}
                                />

                                <p className="leading-8 font-bold text-red-300">
                                    따라서 명제 <InlineMath math="r" />는 거짓입니다.
                                </p>
                            </div>


                            <div className="border-t border-white/10 pt-5">
                                <p className="font-bold text-white">
                                    <InlineMath math="s" /> : 어떤{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x<2" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="x=1" />이 조건{" "}
                                    <InlineMath math="x<2" />를 만족하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
S=\{1\}\ne\varnothing
`}
                                />

                                <p className="leading-8 font-bold text-green-300">
                                    따라서 명제 <InlineMath math="s" />는 참입니다.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* 본문 카드 5 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. ‘모든’과 ‘어떤’의 핵심
                        </h3>

                        <p className="leading-8 text-gray-300">
                            ‘모든’이 포함된 명제가 참이려면
                            전체집합의 원소가 하나도 빠짐없이 조건을 만족해야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{모든 }x\text{에 대하여 }p\text{가 참}
\quad\Longleftrightarrow\quad
P=U
}
`}
                        />

                        <p className="mt-5 leading-8 text-gray-300">
                            반면 ‘어떤’이 포함된 명제가 참이려면
                            조건을 만족하는 원소가 하나만 있어도 됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{어떤 }x\text{에 대하여 }p\text{가 참}
\quad\Longleftrightarrow\quad
P\ne\varnothing
}
`}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="font-bold text-yellow-300">
                                기억하기
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <span className="font-bold text-white">모든</span>
                                {" "}→ 하나도 빠짐없이 만족 →{" "}
                                <InlineMath math="P=U" />
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <span className="font-bold text-white">어떤</span>
                                {" "}→ 하나라도 만족 →{" "}
                                <InlineMath math="P\ne\varnothing" />
                            </p>
                        </div>

                    </div>

                    {/* 본문 카드 6 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. ‘모든’과 ‘어떤’은 서로 부정 관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            ‘모든’과 ‘어떤’이 포함된 명제의 부정을
                            진리집합을 이용하여 알아봅시다.
                        </p>


                        {/* 모든의 부정 */}
                        <div className="mt-6">

                            <p className="font-bold text-white">
                                ① ‘모든 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="p" />’의 부정
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                ‘모든 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="p" />’가 참이라는 것은
                            </p>

                            <BlockMath
                                math={String.raw`
P=U
`}
                            />

                            <p className="leading-8 text-gray-300">
                                라는 뜻입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                이것이 성립하지 않는다는 것은
                            </p>

                            <BlockMath
                                math={String.raw`
P\ne U
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이고, 양쪽의 여집합을 생각하면
                            </p>

                            <BlockMath
                                math={String.raw`
P^C\ne U^C
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다. <InlineMath math="U^C=\varnothing" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
P^C\ne\varnothing
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                <InlineMath math="P^C" />는 조건{" "}
                                <InlineMath math="\sim p" />의 진리집합이므로,
                                <InlineMath math="\sim p" />를 만족하는{" "}
                                <InlineMath math="x" />가 적어도 하나 존재한다는 뜻입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\sim(\text{모든 }x\text{에 대하여 }p)
=
\text{어떤 }x\text{에 대하여 }\sim p
}
`}
                            />

                        </div>


                        {/* 어떤의 부정 */}
                        <div className="mt-7 border-t border-white/10 pt-6">

                            <p className="font-bold text-white">
                                ② ‘어떤 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="p" />’의 부정
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                ‘어떤 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="p" />’가 참이라는 것은
                            </p>

                            <BlockMath
                                math={String.raw`
P\ne\varnothing
`}
                            />

                            <p className="leading-8 text-gray-300">
                                라는 뜻입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                이것이 성립하지 않는다는 것은
                            </p>

                            <BlockMath
                                math={String.raw`
P=\varnothing
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이고, 양쪽의 여집합을 생각하면
                            </p>

                            <BlockMath
                                math={String.raw`
P^C=\varnothing^C
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다. <InlineMath math="\varnothing^C=U" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
P^C=U
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                <InlineMath math="P^C" />는 조건{" "}
                                <InlineMath math="\sim p" />의 진리집합이므로,
                                모든 <InlineMath math="x" />가{" "}
                                <InlineMath math="\sim p" />를 만족한다는 뜻입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\sim(\text{어떤 }x\text{에 대하여 }p)
=
\text{모든 }x\text{에 대하여 }\sim p
}
`}
                            />

                        </div>


                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                기억하기
                            </p>

                            <BlockMath
                                math={String.raw`
\text{모든}
\quad\xleftrightarrow{\text{부정}}\quad
\text{어떤}
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                ‘모든’과 ‘어떤’은 서로 부정 관계입니다.
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
                                다음 [보기]에서 옳은 것만을 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 space-y-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <div className="leading-8">
                                    ㄱ. 명제 ‘어떤 실수 <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2+1\le0" />’의 부정은
                                    ‘모든 실수 <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2+1>0" />’이다.
                                </div>

                                <div className="leading-8">
                                    ㄴ. 명제 ‘어떤 홀수 <InlineMath math="n" />에 대하여{" "}
                                    <InlineMath math="n^2" />은 짝수이다.’의 부정은
                                    ‘모든 홀수 <InlineMath math="n" />에 대하여{" "}
                                    <InlineMath math="n^2" />은 홀수이다.’이다.
                                </div>

                                <div className="leading-8">
                                    ㄷ. 명제 ‘<InlineMath math="x\ge3" />인 모든{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2\ge9" />’의 부정은
                                    ‘<InlineMath math="x\ge3" />인 어떤{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2\le9" />’이다.
                                </div>

                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄴ</div>
                                <div>③ ㄱ, ㄴ</div>
                                <div>④ ㄱ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
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
                                        ㄱ을 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        ‘어떤 <InlineMath math="x" />에 대하여’의 부정은
                                        ‘모든 <InlineMath math="x" />에 대하여’이고,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+1\le0
`}
                                    />

                                    <p className="leading-8">
                                        의 부정은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+1>0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim
\left(
\text{어떤 실수 }x\text{에 대하여 }x^2+1\le0
\right)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=
\text{모든 실수 }x\text{에 대하여 }x^2+1>0
`}
                                    />

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 ㄱ은 옳습니다.
                                    </p>
                                </div>


                                {/* ㄴ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ을 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        ‘어떤 홀수 <InlineMath math="n" />에 대하여’의 부정은
                                        ‘모든 홀수 <InlineMath math="n" />에 대하여’입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또 정수에서 ‘짝수이다’의 부정은 ‘홀수이다’이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim
\left(
\text{어떤 홀수 }n\text{에 대하여 }n^2\text{은 짝수이다}
\right)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=
\text{모든 홀수 }n\text{에 대하여 }n^2\text{은 홀수이다}
`}
                                    />

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 ㄴ은 옳습니다.
                                    </p>
                                </div>


                                {/* ㄷ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ을 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        ‘모든 <InlineMath math="x" />에 대하여’의 부정은
                                        ‘어떤 <InlineMath math="x" />에 대하여’입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2\ge9
`}
                                    />

                                    <p className="leading-8">
                                        의 부정은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2<9
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 올바른 부정은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{x}\ge3\text{인 어떤 }x\text{에 대하여 }x^2<9
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 font-bold text-red-300">
                                        제시된 <InlineMath math="x^2\le9" />는
                                        부정이 아니므로 ㄷ은 옳지 않습니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ③ ㄱ, ㄴ
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        ‘모든’과 ‘어떤’이 포함된 명제를 부정할 때는
                                        두 가지를 동시에 바꾸어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{모든}
\quad\longleftrightarrow\quad
\text{어떤}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
p
\quad\longrightarrow\quad
\sim p
`}
                                    />

                                    <p className="leading-8">
                                        특히 부등식에서는 등호의 포함 여부에 주의합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim(x^2\ge9)
\quad:\quad
x^2<9
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
                                전체집합{" "}
                                <InlineMath math="U=\{-2,-1,0,1,2,3,4\}" />의
                                공집합이 아닌 부분집합 <InlineMath math="X" />에 대하여 명제
                            </p>

                            <BlockMath
                                math={String.raw`
\text{집합 }X\text{의 모든 원소 }x\text{에 대하여 }
x^3-2x^2-x+2=0\text{이다.}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 부정이 참이 되도록 하는 집합 <InlineMath math="X" />의
                                개수를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 방정식을 만족하는 원소를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^3-2x^2-x+2=0
`}
                                    />

                                    <p className="leading-8">
                                        인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2(x-2)-(x-2)=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(x-2)(x^2-1)=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(x-2)(x-1)(x+1)=0
`}
                                    />

                                    <p className="leading-8">
                                        따라서 방정식을 만족하는 전체집합{" "}
                                        <InlineMath math="U" />의 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-1,\ 1,\ 2
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 원래 명제의 뜻을 생각합니다.
                                    </p>

                                    <p className="leading-8">
                                        원래 명제가 참이라는 것은 집합{" "}
                                        <InlineMath math="X" />의 모든 원소가 방정식을
                                        만족한다는 뜻입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 원래 명제가 참이려면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
X\subset\{-1,1,2\}
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 명제의 부정이 참인 경우를 생각합니다.
                                    </p>

                                    <p className="leading-8">
                                        ‘모든 <InlineMath math="x" />에 대하여’의 부정은
                                        ‘어떤 <InlineMath math="x" />에 대하여’이므로,
                                        주어진 명제의 부정은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{집합 }X\text{의 어떤 원소 }x\text{에 대하여 }
x^3-2x^2-x+2\ne0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        즉, <InlineMath math="X" />에
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-2,\ 0,\ 3,\ 4
`}
                                    />

                                    <p className="leading-8">
                                        중 적어도 하나가 포함되어야 합니다.
                                    </p>
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 집합 <InlineMath math="X" />의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        전체집합 <InlineMath math="U" />의 부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^7
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 중 <InlineMath math="-2,\ 0,\ 3,\ 4" />가
                                        하나도 포함되지 않은 집합은{" "}
                                        <InlineMath math="\{-1,1,2\}" />의 부분집합이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^3
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 구하는 집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^7-2^3
=
128-8
=
120
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="120" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        ‘모든 원소가 조건을 만족한다’의 부정은
                                        ‘조건을 만족하지 않는 원소가 적어도 하나 있다’입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim
\left(
\text{모든 }x\in X\text{에 대하여 }p
\right)
=
\text{어떤 }x\in X\text{에 대하여 }\sim p
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이 문제에서는 방정식을 만족하지 않는 원소{" "}
                                        <InlineMath math="-2,\ 0,\ 3,\ 4" /> 중
                                        적어도 하나가 <InlineMath math="X" />에 포함되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^7-2^3=120
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
                                집합 <InlineMath math="U=\{1,2,3,4,5,6\}" />의
                                공집합이 아닌 부분집합 <InlineMath math="P" />에 대하여 명제
                            </p>

                            <BlockMath
                                math={String.raw`
\text{집합 }P\text{의 어떤 원소 }x\text{에 대하여 }
x^2-9x+18=0\text{이다.}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가 참이 되도록 하는 집합 <InlineMath math="P" />의
                                개수를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 방정식을 만족하는 원소를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-9x+18=0
`}
                                    />

                                    <p className="leading-8">
                                        인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-3)(x-6)=0
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=3\text{ 또는 }x=6
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② ‘어떤 원소’의 의미를 생각합니다.
                                    </p>

                                    <p className="leading-8">
                                        명제가 참이 되려면 집합 <InlineMath math="P" />의
                                        원소 중 방정식을 만족하는 원소가
                                        하나라도 있어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        방정식을 만족하는 원소는{" "}
                                        <InlineMath math="3,\ 6" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3\in P\text{ 또는 }6\in P
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 전체에서 반대의 경우를 뺍니다.
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="U" />의 부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^6
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 중 <InlineMath math="3" />과{" "}
                                        <InlineMath math="6" />이 모두 포함되지 않은 경우에는
                                        나머지 네 원소
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,\ 2,\ 4,\ 5
`}
                                    />

                                    <p className="leading-8">
                                        만을 이용하여 부분집합을 만들면 되므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^4
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 구하는 집합 <InlineMath math="P" />의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^6-2^4
=
64-16
=
48
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="48" />개
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        ‘어떤 원소 <InlineMath math="x" />에 대하여{" "}
                                        <InlineMath math="p" />’가 참이려면
                                        조건 <InlineMath math="p" />를 만족하는 원소가
                                        하나라도 존재하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3\in P\text{ 또는 }6\in P
`}
                                    />

                                    <p className="leading-8">
                                        따라서 전체에서 <InlineMath math="3,\ 6" />이
                                        하나도 들어 있지 않은 경우를 빼는 것이 간단합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^6-2^4=48
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
                                전체집합 <InlineMath math="U" />의 공집합이 아닌 세 부분집합{" "}
                                <InlineMath math="A,\ B,\ C" />에 대하여 다음은{" "}
                                <InlineMath math="A,\ B,\ C" />의 관계를 나타낸 명제이다.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8">
                                    (가) 모든 <InlineMath math="x\in A" />에 대하여{" "}
                                    <InlineMath math="x\notin C" />이다.
                                </p>

                                <p className="leading-8">
                                    (나) 어떤 <InlineMath math="x\in B" />에 대하여{" "}
                                    <InlineMath math="x\notin A" />이다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                세 집합 <InlineMath math="A,\ B,\ C" />의 포함 관계를 나타낸
                                다음 벤 다이어그램 중 위의 두 명제가 항상 참이 되도록 하는 것은?
                            </p>


                            {/* 선택지 그림 */}
                            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                                <div>
                                    <p className="mb-2 font-bold text-white">①</p>

                                    <div className="rounded-xl border border-white/10 bg-white p-3">
                                        <img
                                            src="/images/commonMath2/2.15_4_1.png"
                                            alt="예제 4 선택지 1 벤 다이어그램"
                                            className="mx-auto w-full rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-2 font-bold text-white">②</p>

                                    <div className="rounded-xl border border-white/10 bg-white p-3">
                                        <img
                                            src="/images/commonMath2/2.15_4_2.png"
                                            alt="예제 4 선택지 2 벤 다이어그램"
                                            className="mx-auto w-full rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-2 font-bold text-white">③</p>

                                    <div className="rounded-xl border border-white/10 bg-white p-3">
                                        <img
                                            src="/images/commonMath2/2.15_4_3.png"
                                            alt="예제 4 선택지 3 벤 다이어그램"
                                            className="mx-auto w-full rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-2 font-bold text-white">④</p>

                                    <div className="rounded-xl border border-white/10 bg-white p-3">
                                        <img
                                            src="/images/commonMath2/2.15_4_4.png"
                                            alt="예제 4 선택지 4 벤 다이어그램"
                                            className="mx-auto w-full rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-2 font-bold text-white">⑤</p>

                                    <div className="rounded-xl border border-white/10 bg-white p-3">
                                        <img
                                            src="/images/commonMath2/2.15_4_5.png"
                                            alt="예제 4 선택지 5 벤 다이어그램"
                                            className="mx-auto w-full rounded-lg"
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 가 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① (가)를 집합의 관계로 바꿉니다.
                                    </p>

                                    <p className="leading-8">
                                        모든 <InlineMath math="x\in A" />에 대하여{" "}
                                        <InlineMath math="x\notin C" />라는 것은
                                        집합 <InlineMath math="A" />의 원소가 하나도{" "}
                                        <InlineMath math="C" />에 속하지 않는다는 뜻입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\cap C=\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        즉, <InlineMath math="A" />와{" "}
                                        <InlineMath math="C" />는 서로소이어야 합니다.
                                    </p>
                                </div>


                                {/* 나 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② (나)를 집합의 관계로 바꿉니다.
                                    </p>

                                    <p className="leading-8">
                                        어떤 <InlineMath math="x\in B" />에 대하여{" "}
                                        <InlineMath math="x\notin A" />라는 것은{" "}
                                        <InlineMath math="B" />에는 속하지만{" "}
                                        <InlineMath math="A" />에는 속하지 않는 원소가
                                        적어도 하나 존재한다는 뜻입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B-A\ne\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        따라서 <InlineMath math="B" /> 전체가{" "}
                                        <InlineMath math="A" /> 안에 들어가서는 안 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B\not\subset A
`}
                                    />
                                </div>


                                {/* 선택 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 두 조건을 동시에 만족하는 그림을 찾습니다.
                                    </p>

                                    <p className="leading-8">
                                        ②의 그림에서는 <InlineMath math="A" />가{" "}
                                        <InlineMath math="B" /> 안에 있고,{" "}
                                        <InlineMath math="B" />와 <InlineMath math="C" />가
                                        서로 겹치지 않습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="A" />도{" "}
                                        <InlineMath math="C" />와 겹치지 않으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\cap C=\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        이 성립하여 (가)는 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한 <InlineMath math="A" />는{" "}
                                        <InlineMath math="B" />의 일부분이므로{" "}
                                        <InlineMath math="B" />에는{" "}
                                        <InlineMath math="A" />에 속하지 않는 부분이 존재합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B-A\ne\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        따라서 (나)도 참입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ②
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        ‘모든’이 나오면 조건을 만족하지 않는 원소가
                                        하나라도 있는지를 생각하고,
                                        ‘어떤’이 나오면 조건을 만족하는 원소가
                                        적어도 하나 있는지를 생각합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{(가)}
\quad\Longleftrightarrow\quad
A\cap C=\varnothing
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\text{(나)}
\quad\Longleftrightarrow\quad
B-A\ne\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        문장을 먼저 집합의 관계로 바꾼 뒤
                                        벤 다이어그램을 판단하면 됩니다.
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
                                명제
                            </p>

                            <BlockMath
                                math={String.raw`
\text{어떤 실수 }x\text{에 대하여 }x^2-18x+k<0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 부정이 참이 되도록 하는 상수{" "}
                                <InlineMath math="k" />의 최솟값은?
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 주어진 명제의 부정을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        ‘어떤 실수 <InlineMath math="x" />에 대하여’의 부정은
                                        ‘모든 실수 <InlineMath math="x" />에 대하여’입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-18x+k<0
`}
                                    />

                                    <p className="leading-8">
                                        의 부정은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-18x+k\ge0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 주어진 명제의 부정은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{모든 실수 }x\text{에 대하여 }
x^2-18x+k\ge0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 이차식을 완전제곱식으로 나타냅니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-18x+k
`}
                                    />

                                    <p className="leading-8">
                                        를 완전제곱식으로 나타내면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-18x+k
=
(x-9)^2+k-81
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 모든 실수에서 성립하기 위한 조건을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        모든 실수 <InlineMath math="x" />에 대하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-9)^2+k-81\ge0
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="(x-9)^2" />의 최솟값은{" "}
                                        <InlineMath math="0" />이므로
                                        이 식의 최솟값은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k-81
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
k-81\ge0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
k\ge81
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="k" />의 최솟값은{" "}
                                        <InlineMath math="81" />입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="81" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 ‘어떤’이 포함된 명제를 정확하게 부정합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim
\left(
\text{어떤 실수 }x\text{에 대하여 }p
\right)
=
\text{모든 실수 }x\text{에 대하여 }\sim p
`}
                                    />

                                    <p className="leading-8">
                                        따라서 이 문제는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{모든 실수 }x\text{에 대하여 }
x^2-18x+k\ge0
`}
                                    />

                                    <p className="leading-8">
                                        이 성립하도록 하는 <InlineMath math="k" />를 찾는
                                        문제로 바뀝니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-9)^2+k-81\ge0
`}
                                    />

                                    <p className="leading-8">
                                        이므로 최솟값을 이용하면{" "}
                                        <InlineMath math="k\ge81" />을 얻습니다.
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
                                명제
                            </p>

                            <BlockMath
                                math={String.raw`
a\le x\le a+2\text{인 어떤 실수 }x\text{에 대하여 }
-5<x\le3\text{이다.}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가 참이 되게 하는 정수 <InlineMath math="a" />의 개수는?
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① ‘어떤 실수’의 의미를 생각합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a\le x\le a+2" />인 실수 중에서{" "}
                                        <InlineMath math="-5<x\le3" />을 만족하는 실수가
                                        하나라도 존재하면 명제는 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 두 조건의 진리집합의 교집합이
                                        공집합이 아니어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{x\mid a\le x\le a+2\}
\cap
\{x\mid-5<x\le3\}
\ne\varnothing
`}
                                    />
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 두 범위가 만나기 위한 조건을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        첫 번째 범위의 왼쪽 끝{" "}
                                        <InlineMath math="a" />가{" "}
                                        <InlineMath math="3" />보다 오른쪽에 있으면
                                        두 범위는 만날 수 없습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a\le3
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        또한 첫 번째 범위의 오른쪽 끝{" "}
                                        <InlineMath math="a+2" />가{" "}
                                        <InlineMath math="-5" />보다 커야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a+2>-5
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a>-7
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 정수 <InlineMath math="a" />의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        두 조건을 동시에 만족하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-7<a\le3
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 가능한 정수 <InlineMath math="a" />는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-6,-5,-4,-3,-2,-1,0,1,2,3
`}
                                    />

                                    <p className="leading-8">
                                        이므로 모두 <InlineMath math="10" />개입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="10" />개
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        ‘어떤 실수 <InlineMath math="x" />에 대하여’가
                                        참이라는 것은 두 조건을 동시에 만족하는{" "}
                                        <InlineMath math="x" />가 하나라도 존재한다는 뜻입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{어떤 }x
\quad\Longleftrightarrow\quad
\text{교집합}\ne\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        따라서 두 범위가 조금이라도 겹치도록
                                        경계를 비교하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a\le3,\qquad a+2>-5
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
-7<a\le3
`}
                                    />

                                    <p className="leading-8">
                                        특히 <InlineMath math="-5<x" />에서{" "}
                                        <InlineMath math="-5" />는 포함되지 않으므로{" "}
                                        <InlineMath math="a+2>-5" />에서 등호가 들어가지 않는 것에
                                        주의합니다.
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
                                정수 <InlineMath math="k" />에 대한 두 조건{" "}
                                <InlineMath math="p,\ q" />가 모두 참인 명제가 되도록 하는
                                모든 <InlineMath math="k" />의 값의 합을 구하시오.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8">
                                    <InlineMath math="p" /> : 모든 실수{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2+2kx+5k+6>0" />이다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="q" /> : 어떤 실수{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2=k-3" />이다.
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 명제 <InlineMath math="p" />가 참이 되도록 합니다.
                                    </p>

                                    <p className="leading-8">
                                        모든 실수 <InlineMath math="x" />에 대하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+2kx+5k+6>0
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이차식의 최고차항의 계수가 양수이므로
                                        모든 실수 <InlineMath math="x" />에 대하여
                                        양수가 되려면 판별식이 <InlineMath math="0" />보다 작아야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac{D}{4}
=
k^2-(5k+6)
<0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
k^2-5k-6<0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(k-6)(k+1)<0
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-1<k<6
`}
                                    />

                                    <p className="leading-8">
                                        이고, <InlineMath math="k" />는 정수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k=0,\ 1,\ 2,\ 3,\ 4,\ 5
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 명제 <InlineMath math="q" />가 참이 되도록 합니다.
                                    </p>

                                    <p className="leading-8">
                                        어떤 실수 <InlineMath math="x" />에 대하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2=k-3
`}
                                    />

                                    <p className="leading-8">
                                        이 성립해야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        실수의 제곱은 항상 <InlineMath math="0" /> 이상이므로
                                        이러한 실수 <InlineMath math="x" />가 존재하려면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k-3\ge0
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k\ge3
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 두 명제가 모두 참이 되도록 합니다.
                                    </p>

                                    <p className="leading-8">
                                        명제 <InlineMath math="p" />에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-1<k<6
`}
                                    />

                                    <p className="leading-8">
                                        이고, 명제 <InlineMath math="q" />에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k\ge3
`}
                                    />

                                    <p className="leading-8">
                                        이므로 두 조건을 동시에 만족하는 정수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k=3,\ 4,\ 5
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 모든 <InlineMath math="k" />의 값의 합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3+4+5=12
`}
                                    />

                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="12" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        ‘모든’과 ‘어떤’의 의미를 구분하여 각각의 조건을
                                        따로 판단합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{모든 실수 }x
\quad\Longrightarrow\quad
x^2+2kx+5k+6>0
\text{이 항상 성립}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\text{어떤 실수 }x
\quad\Longrightarrow\quad
x^2=k-3
\text{을 만족하는 실수가 하나라도 존재}
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p:\ -1<k<6,
\qquad
q:\ k\ge3
`}
                                    />

                                    <p className="leading-8">
                                        을 동시에 만족하는 정수만 고르면 됩니다.
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
                                명제
                            </p>

                            <BlockMath
                                math={String.raw`
\text{모든 실수 }x\text{에 대하여 }
2x^2+4x+a\ge0\text{이다.}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가 거짓이 되도록 하는 정수{" "}
                                <InlineMath math="a" />의 최댓값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 명제가 거짓이라는 뜻을 생각합니다.
                                    </p>

                                    <p className="leading-8">
                                        ‘모든 실수 <InlineMath math="x" />에 대하여’가
                                        거짓이라는 것은 그 부정이 참이라는 뜻입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim
\left(
\text{모든 실수 }x\text{에 대하여 }
2x^2+4x+a\ge0
\right)
`}
                                    />

                                    <p className="leading-8">
                                        ‘모든’의 부정은 ‘어떤’이고,
                                        <InlineMath math="\ge0" />의 부정은{" "}
                                        <InlineMath math="<0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{어떤 실수 }x\text{에 대하여 }
2x^2+4x+a<0
`}
                                    />

                                    <p className="leading-8">
                                        이 참이어야 합니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 이차식의 최솟값을 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2x^2+4x+a
`}
                                    />

                                    <p className="leading-8">
                                        를 완전제곱식으로 나타내면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2x^2+4x+a
=
2(x+1)^2+a-2
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="(x+1)^2" />의 최솟값은{" "}
                                        <InlineMath math="0" />이므로
                                        이차식의 최솟값은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a-2
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 어떤 실수에서 음수가 되도록 합니다.
                                    </p>

                                    <p className="leading-8">
                                        어떤 실수 <InlineMath math="x" />에 대하여
                                        이차식이 <InlineMath math="0" />보다 작으려면
                                        이차식의 최솟값이 <InlineMath math="0" />보다 작아야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a-2<0
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a<2
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="a" />는 정수이므로{" "}
                                        <InlineMath math="2" />보다 작은 정수 중 가장 큰 수는{" "}
                                        <InlineMath math="1" />입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="1" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        ‘모든 실수에서 <InlineMath math="\ge0" />’이라는 명제가
                                        거짓이라는 것은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{어떤 실수에서 }<0
`}
                                    />

                                    <p className="leading-8">
                                        이라는 뜻입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{모든}
\quad\xrightarrow{\text{부정}}\quad
\text{어떤}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
2(x+1)^2+a-2<0
\text{인 }x\text{가 존재}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 이차식의 최솟값이 음수가 되어야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a-2<0
\quad\Longrightarrow\quad
a<2
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
                                실수 <InlineMath math="x" />에 대한 조건
                            </p>

                            <BlockMath
                                math={String.raw`
\text{모든 실수 }x\text{에 대하여 }
x^2+2kx+3k^2>-2kx-16\text{이다.}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가 참인 명제가 되도록 하는 정수{" "}
                                <InlineMath math="k" />의 최댓값을{" "}
                                <InlineMath math="M" />, 최솟값을{" "}
                                <InlineMath math="m" />이라 하자.{" "}
                                <InlineMath math="M-m" />의 값은?
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 부등식을 한쪽으로 정리합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+2kx+3k^2>-2kx-16
`}
                                    />

                                    <p className="leading-8">
                                        모든 항을 왼쪽으로 이항하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+4kx+3k^2+16>0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 모든 실수에서 성립하기 위한 조건을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        이차식
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+4kx+3k^2+16
`}
                                    />

                                    <p className="leading-8">
                                        의 최고차항의 계수는 양수입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 모든 실수 <InlineMath math="x" />에 대하여
                                        이차식이 <InlineMath math="0" />보다 크려면
                                        이차방정식이 실근을 갖지 않아야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac D4<0
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac D4
=
(2k)^2-(3k^2+16)
<0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
k^2-16<0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(k-4)(k+4)<0
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-4<k<4
`}
                                    />
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 정수 <InlineMath math="k" />의 최댓값과 최솟값을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="k" />는 정수이므로 가능한 값은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-3,-2,-1,0,1,2,3
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
M=3,\qquad m=-3
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
M-m
=
3-(-3)
=
6
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="6" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        ‘모든 실수 <InlineMath math="x" />에 대하여’라는 말은
                                        부등식이 일부의 <InlineMath math="x" />에서만 성립하는 것이 아니라
                                        모든 실수에서 성립해야 한다는 뜻입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+4kx+3k^2+16>0
\quad
(\text{모든 실수 }x)
`}
                                    />

                                    <p className="leading-8">
                                        최고차항의 계수가 양수이고 부등호가{" "}
                                        <InlineMath math=">0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac D4<0
`}
                                    />

                                    <p className="leading-8">
                                        을 이용합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac D4=k^2-16<0
\quad\Longrightarrow\quad
-4<k<4
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
                                자연수 전체의 집합의 부분집합 중 다음 두 명제가
                                모두 참이 되도록 하는 집합 <InlineMath math="X" />의
                                개수를 구하시오.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8">
                                    (가) 집합 <InlineMath math="X" />의 어떤 원소{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2-10x+16>0" />이다.
                                </p>

                                <p className="leading-8">
                                    (나) 집합 <InlineMath math="X" />의 모든 원소{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="x^2-10x+9\le0" />이다.
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 명제 (나)에서 집합 <InlineMath math="X" />가
                                        가질 수 있는 원소를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-10x+9\le0
`}
                                    />

                                    <p className="leading-8">
                                        인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-1)(x-9)\le0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\le x\le9
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        (나)는 집합 <InlineMath math="X" />의{" "}
                                        <span className="font-bold text-yellow-300">
                                            모든 원소
                                        </span>
                                        가 이 조건을 만족해야 한다는 뜻이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
X\subset\{1,2,3,4,5,6,7,8,9\}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 명제 (가)를 만족하는 원소를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-10x+16>0
`}
                                    />

                                    <p className="leading-8">
                                        인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-2)(x-8)>0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x<2\text{ 또는 }x>8
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그런데 (나)에 의해 <InlineMath math="X" />의 원소는
                                        모두 <InlineMath math="1" /> 이상{" "}
                                        <InlineMath math="9" /> 이하의 자연수이므로,
                                        이 중 (가)의 부등식을 만족하는 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,\ 9
`}
                                    />

                                    <p className="leading-8">
                                        뿐입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ ‘어떤 원소’의 조건을 적용합니다.
                                    </p>

                                    <p className="leading-8">
                                        (가)는 집합 <InlineMath math="X" />의{" "}
                                        <span className="font-bold text-yellow-300">
                                            어떤 원소
                                        </span>
                                        가 부등식을 만족해야 하므로,
                                        <InlineMath math="X" />에는{" "}
                                        <InlineMath math="1" /> 또는{" "}
                                        <InlineMath math="9" />가 적어도 하나 포함되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\in X\text{ 또는 }9\in X
`}
                                    />
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 집합 <InlineMath math="X" />의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        집합
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1,2,3,4,5,6,7,8,9\}
`}
                                    />

                                    <p className="leading-8">
                                        의 부분집합은 모두
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^9
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 중 <InlineMath math="1" />과{" "}
                                        <InlineMath math="9" />가 모두 포함되지 않는 경우에는
                                        나머지 일곱 원소
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2,\ 3,\ 4,\ 5,\ 6,\ 7,\ 8
`}
                                    />

                                    <p className="leading-8">
                                        만으로 부분집합을 만들므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^7
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 구하는 집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^9-2^7
=
512-128
=
384
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="384" />개
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 ‘모든’이 포함된 (나)를 이용하여{" "}
                                        <InlineMath math="X" />가 가질 수 있는 원소 전체를
                                        제한합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{(나)}
\quad\Longrightarrow\quad
X\subset\{1,2,3,4,5,6,7,8,9\}
`}
                                    />

                                    <p className="leading-8">
                                        그 안에서 (가)의 조건을 만족하는 원소는{" "}
                                        <InlineMath math="1,\ 9" />이므로,
                                        ‘어떤’이 참이 되려면 둘 중 적어도 하나가{" "}
                                        <InlineMath math="X" />에 포함되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{어떤}
\quad\Longleftrightarrow\quad
1\text{ 또는 }9\text{가 적어도 하나 포함}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
2^9-2^7=384
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

                        <p className="leading-8 text-gray-300">
                            ‘모든’과 ‘어떤’이 포함된 명제는
                            진리집합을 이용하면 간단하게 판단할 수 있습니다.
                        </p>


                        {/* 모든 */}
                        <div className="mt-6">

                            <p className="font-bold text-white">
                                ① ‘모든’ → 진리집합과 전체집합을 비교
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{모든 }x\text{에 대하여 }p\text{가 참}
\quad\Longleftrightarrow\quad
P=U
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                전체집합의 원소가 하나도 빠짐없이 조건{" "}
                                <InlineMath math="p" />를 만족해야 합니다.
                            </p>

                        </div>


                        {/* 어떤 */}
                        <div className="mt-6 border-t border-white/10 pt-6">

                            <p className="font-bold text-white">
                                ② ‘어떤’ → 진리집합과 공집합을 비교
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{어떤 }x\text{에 대하여 }p\text{가 참}
\quad\Longleftrightarrow\quad
P\ne\varnothing
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                조건 <InlineMath math="p" />를 만족하는 원소가
                                하나라도 있으면 됩니다.
                            </p>

                        </div>


                        {/* 부정 */}
                        <div className="mt-6 border-t border-white/10 pt-6">

                            <p className="font-bold text-white">
                                ③ ‘모든’과 ‘어떤’ → 서로 부정 관계
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\sim(\text{모든 }x\text{에 대하여 }p)
=
\text{어떤 }x\text{에 대하여 }\sim p
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
\sim(\text{어떤 }x\text{에 대하여 }p)
=
\text{모든 }x\text{에 대하여 }\sim p
}
`}
                            />

                        </div>


                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-4 font-bold text-blue-300">
                                한눈에 정리
                            </p>

                            <div className="space-y-3 text-gray-300">

                                <p className="leading-8">
                                    <span className="font-bold text-white">모든</span>
                                    {" "}→ <InlineMath math="P=U" />인지 확인
                                </p>

                                <p className="leading-8">
                                    <span className="font-bold text-white">어떤</span>
                                    {" "}→ <InlineMath math="P\ne\varnothing" />인지 확인
                                </p>

                                <p className="leading-8">
                                    <span className="font-bold text-white">부정</span>
                                    {" "}→ ‘모든’과 ‘어떤’을 서로 바꾸고
                                    조건 <InlineMath math="p" />를{" "}
                                    <InlineMath math="\sim p" />로 바꿈
                                </p>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* 2.16 명제의 역과 대우 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.16 명제의 역과 대우
                </h2>

                <p className="leading-8 text-gray-300">
                    명제의 가정과 결론을 바꾸어 만든 역과 대우를 알아보고,
                    원래 명제와 대우의 관계를 이용하여 명제를 증명하는 방법을 알아봅니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 본문 카드 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 명제의 역
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />에서{" "}
                            <InlineMath math="p" />를 가정,{" "}
                            <InlineMath math="q" />를 결론이라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이때 가정과 결론의 자리를 바꾸어 만든 명제
                        </p>

                        <BlockMath
                            math={String.raw`
q\to p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 명제 <InlineMath math="p\to q" />의{" "}
                            <span className="font-bold text-white">역</span>이라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <BlockMath
                                math={String.raw`
\boxed{
p\to q\text{의 역}:q\to p
}
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                역은 가정과 결론의 자리를 바꿉니다.
                            </p>

                        </div>

                    </div>


                    {/* 본문 카드 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 명제의 대우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />에서
                            가정과 결론의 자리를 바꾸면서 각각 부정하여 만든 명제
                        </p>

                        <BlockMath
                            math={String.raw`
\sim q\to\sim p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 명제 <InlineMath math="p\to q" />의{" "}
                            <span className="font-bold text-white">대우</span>라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <BlockMath
                                math={String.raw`
\boxed{
p\to q\text{의 대우}:\sim q\to\sim p
}
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                대우는 가정과 결론의 자리를 바꾸고 각각 부정합니다.
                            </p>

                        </div>

                    </div>


                    {/* 본문 카드 3 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 원래 명제와 대우의 진리값
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제와 그 대우는 항상 진리값이 같습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
p\to q
\quad\Longleftrightarrow\quad
\sim q\to\sim p
}
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 원래 명제가 참이면 그 대우도 참이고,
                            원래 명제가 거짓이면 그 대우도 거짓입니다.
                        </p>

                        <div className="mt-5 space-y-3">

                            <p className="leading-8 text-gray-300">
                                • <InlineMath math="p\to q" />가 참
                                {" "}→ 대우 <InlineMath math="\sim q\to\sim p" />도 참
                            </p>

                            <p className="leading-8 text-gray-300">
                                • <InlineMath math="p\to q" />가 거짓
                                {" "}→ 대우 <InlineMath math="\sim q\to\sim p" />도 거짓
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            반면 명제와 그 역은 항상 진리값이 같은 것은 아닙니다.
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q
\qquad\text{와}\qquad
q\to p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            는 각각 따로 참과 거짓을 판단해야 합니다.
                        </p>

                    </div>


                    {/* 본문 카드 4 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 진리집합으로 보는 대우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건 <InlineMath math="p,\ q" />의 진리집합을 각각{" "}
                            <InlineMath math="P,\ Q" />라고 하겠습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />가 참이면
                        </p>

                        <BlockMath
                            math={String.raw`
P\subset Q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            두 집합의 여집합을 생각하면 포함관계의 방향이 바뀌어
                        </p>

                        <BlockMath
                            math={String.raw`
Q^C\subset P^C
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            그런데 <InlineMath math="Q^C" />는{" "}
                            <InlineMath math="\sim q" />의 진리집합이고,{" "}
                            <InlineMath math="P^C" />는{" "}
                            <InlineMath math="\sim p" />의 진리집합입니다.
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q
\quad\Longleftrightarrow\quad
P\subset Q
`}
                        />

                        <BlockMath
                            math={String.raw`
\sim q\to\sim p
\quad\Longleftrightarrow\quad
Q^C\subset P^C
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로 원래 명제와 대우는 항상 진리값이 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <BlockMath
                                math={String.raw`
\boxed{
P\subset Q
\quad\Longleftrightarrow\quad
Q^C\subset P^C
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
p\to q
\quad\Longleftrightarrow\quad
\sim q\to\sim p
}
`}
                            />

                        </div>

                    </div>


                    {/* 본문 카드 5 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 대우는 언제 사용하는가?
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />를 직접 증명하기 어려울 때
                            진리값이 같은 대우
                        </p>

                        <BlockMath
                            math={String.raw`
\sim q\to\sim p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 대신 증명할 수 있습니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            특히 다음과 같은 경우에는 대우를 이용하는 것이
                            더 간단한 경우가 많습니다.
                        </p>

                        <div className="mt-5 space-y-4">

                            <p className="leading-8 text-gray-300">
                                ① 가정에 <span className="font-bold text-white">부정의 표현</span>이
                                들어 있어 직접 다루기 복잡한 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                ② 가정에 <span className="font-bold text-white">무한히 많은 경우</span>를
                                확인해야 하는 표현이 있는 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                ③ 가정이 결론보다 복잡하여{" "}
                                <span className="font-bold text-white">
                                    결론을 부정한 형태에서 출발하는 것이 더 간단한 경우
                                </span>
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                대우를 생각하는 출발점
                            </p>

                            <BlockMath
                                math={String.raw`
p\to q
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                를 직접 증명하기 어렵다면 먼저{" "}
                                <span className="font-bold text-white">결론을 부정</span>합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\sim q
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                그리고 가정의 부정{" "}
                                <InlineMath math="\sim p" />를 이끌어 내는지 생각합니다.
                            </p>

                        </div>

                    </div>


                    {/* 본문 카드 6 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 대우를 이용한 증명
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 증명하려고 할 때 직접 증명하는 대신 대우
                        </p>

                        <BlockMath
                            math={String.raw`
\sim q\to\sim p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 증명해도 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            원래 명제와 대우의 진리값이 같기 때문입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                대우를 이용한 증명의 순서
                            </p>

                            <BlockMath
                                math={String.raw`
\text{결론의 부정 }\sim q
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
\text{가정의 부정 }\sim p\text{를 이끌어 냄}
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
\sim q\to\sim p\text{가 참}
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
p\to q\text{도 참}
`}
                            />

                        </div>

                    </div>


                    {/* 본문 카드 7 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 귀류법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            어떤 명제가 참임을 증명할 때,
                            그 명제가 거짓이라고 가정하여 모순이 생김을 보이는 방법을{" "}
                            <span className="font-bold text-white">귀류법</span>이라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            특히 명제 <InlineMath math="p\to q" />에서
                            가정 <InlineMath math="p" />가 성립한다고 할 때
                            결론 <InlineMath math="q" />를 증명하려면,
                            결론이 거짓이라고 가정하여
                        </p>

                        <BlockMath
                            math={String.raw`
\sim q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에서 출발합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            그리고 이미 주어진 가정이나 알고 있는 사실과
                            모순되는 결과를 이끌어 냅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                귀류법의 순서
                            </p>

                            <BlockMath
                                math={String.raw`
\text{결론 }q\text{가 거짓이라고 가정}
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
\sim q
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
\text{모순 발생}
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
q\text{는 참}
`}
                            />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            대우를 이용한 증명과 귀류법은 모두{" "}
                            <span className="font-bold text-white">
                                결론의 부정에서 출발
                            </span>
                            한다는 공통점이 있습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            그러나 대우를 이용한 증명은{" "}
                            <InlineMath math="\sim q\to\sim p" />를 증명하는 것이고,
                            귀류법은 <InlineMath math="\sim q" />를 가정했을 때
                            모순이 생김을 보이는 방법입니다.
                        </p>

                    </div>

                    {/* 본문 카드 8 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            8. 외워두어야 할 증명 문제
                        </h3>

                        <p className="leading-8 text-gray-300">
                            다음 증명은 귀류법과 대우를 이용한 증명이 함께 사용되는
                            대표적인 증명입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-4 font-bold text-yellow-300">
                                문제
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="\sqrt2" />가 무리수임을 증명하시오.
                            </p>

                        </div>


                        {/* 귀류법 시작 */}
                        <div className="mt-6">

                            <p className="mb-4 text-xl font-bold text-white">
                                ① 귀류법으로 증명을 시작합니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="\sqrt2" />가 무리수임을 증명하기 위하여
                                반대로 <InlineMath math="\sqrt2" />가{" "}
                                <span className="font-bold text-white">유리수라고 가정</span>합니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                그러면 서로 소인 두 정수 <InlineMath math="a,\ b" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
\sqrt2=\frac{a}{b}
\qquad (b\ne0)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                로 나타낼 수 있습니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                양변에 <InlineMath math="b" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
a=b\sqrt2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이고, 양변을 제곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
a^2=2b^2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>


                        {/* a가 2의 배수 */}
                        <div className="mt-7">

                            <p className="mb-4 text-xl font-bold text-white">
                                ② <InlineMath math="a" />가 2의 배수임을 보입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="a^2=2b^2" />이므로{" "}
                                <InlineMath math="a^2" />은 2의 배수입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                이때
                            </p>

                            <BlockMath
                                math={String.raw`
a^2\text{이 2의 배수}
\quad\Longrightarrow\quad
a\text{가 2의 배수}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                라는 사실을 이용합니다.
                            </p>


                            {/* 대우 설명 */}
                            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    대우를 이용한 증명
                                </p>

                                <p className="leading-8 text-gray-300">
                                    위 명제의 대우는
                                </p>

                                <BlockMath
                                    math={String.raw`
a\text{가 2의 배수가 아니다}
\quad\Longrightarrow\quad
a^2\text{도 2의 배수가 아니다}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    <InlineMath math="a" />가 2의 배수가 아니면{" "}
                                    <InlineMath math="a" />는 홀수이므로 어떤 정수{" "}
                                    <InlineMath math="n" />에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
a=2n+1
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 나타낼 수 있습니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    양변을 제곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
a^2
&=(2n+1)^2\\
&=4n^2+4n+1\\
&=2(2n^2+2n)+1
\end{aligned}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 <InlineMath math="a^2" />도 2의 배수가 아닙니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    따라서 대우가 참이므로 원래 명제도 참입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
a^2\text{이 2의 배수}
\quad\Longrightarrow\quad
a\text{가 2의 배수}
}
`}
                                />

                            </div>

                        </div>


                        {/* b가 2의 배수 */}
                        <div className="mt-7">

                            <p className="mb-4 text-xl font-bold text-white">
                                ③ <InlineMath math="b" />도 2의 배수임을 보입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="a" />가 2의 배수이므로 어떤 정수{" "}
                                <InlineMath math="m" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
a=2m
`}
                            />

                            <p className="leading-8 text-gray-300">
                                으로 나타낼 수 있습니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                이를 <InlineMath math="a^2=2b^2" />에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
(2m)^2=2b^2
`}
                            />

                            <BlockMath
                                math={String.raw`
4m^2=2b^2
`}
                            />

                            <BlockMath
                                math={String.raw`
2m^2=b^2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 <InlineMath math="b^2" />도 2의 배수입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                앞에서 확인한 사실에 의해{" "}
                                <InlineMath math="b" />도 2의 배수입니다.
                            </p>

                        </div>


                        {/* 모순 */}
                        <div className="mt-7">

                            <p className="mb-4 text-xl font-bold text-white">
                                ④ 모순을 확인합니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                지금까지의 결과에 의해{" "}
                                <InlineMath math="a" />와 <InlineMath math="b" />는
                                모두 2의 배수입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
a\text{는 2의 배수},
\qquad
b\text{는 2의 배수}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 <InlineMath math="a,\ b" />는 공통으로{" "}
                                <InlineMath math="2" />를 약수로 가지므로 서로 소가 아닙니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                이것은 처음에 <InlineMath math="a,\ b" />를 서로 소인
                                정수라고 한 것에 모순입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                따라서 <InlineMath math="\sqrt2" />가 유리수라는 가정이
                                잘못되었으므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{\sqrt2\text{는 무리수이다.}}
`}
                            />

                        </div>


                        {/* 증명 구조 */}
                        <div className="mt-7 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="mb-4 font-bold text-green-300">
                                증명의 구조
                            </p>

                            <BlockMath
                                math={String.raw`
\sqrt2\text{가 유리수라고 가정}
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
\sqrt2=\frac ab
\qquad
(a,\ b\text{는 서로 소})
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
a^2=2b^2
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
a\text{가 2의 배수}
`}
                            />

                            <p className="text-center text-sm text-blue-300">
                                ↑ 이 과정에서 대우를 이용한 증명
                            </p>

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
b\text{도 2의 배수}
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
a,\ b\text{가 서로 소라는 것에 모순}
`}
                            />

                            <p className="text-center text-gray-400">↓</p>

                            <BlockMath
                                math={String.raw`
\therefore\ \sqrt2\text{는 무리수}
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
                                사각형 <InlineMath math="\mathrm{ABCD}" />에 대하여
                                조건 <InlineMath math="p,\ q" />를
                            </p>

                            <BlockMath
                                math={String.raw`
p:\ \overline{AB}=\overline{CD},\qquad
q:\ \text{사각형 }\mathrm{ABCD}\text{는 평행사변형이다.}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                라고 할 때, 다음 [보기]의 명제 중 참인 것을 모두 고른 것은?
                            </p>

                            <div className="mt-5 space-y-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                                    <div>
                                        ㄱ. <InlineMath math="p\to q" />
                                    </div>

                                    <div>
                                        ㄴ. <InlineMath math="\sim p\to\sim q" />
                                    </div>

                                    <div>
                                        ㄷ. <InlineMath math="q\to p" />
                                    </div>

                                    <div>
                                        ㄹ. <InlineMath math="\sim q\to\sim p" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ, ㄴ</div>
                                <div>② ㄱ, ㄷ</div>
                                <div>③ ㄱ, ㄹ</div>
                                <div>④ ㄴ, ㄷ</div>
                                <div>⑤ ㄷ, ㄹ</div>
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
                                        ㄱ. <InlineMath math="p\to q" />
                                    </p>

                                    <p className="leading-8">
                                        한 쌍의 대변의 길이가 같다고 해서
                                        사각형이 반드시 평행사변형인 것은 아닙니다.
                                    </p>

                                    <p className="mt-3 font-bold text-red-300">
                                        따라서 ㄱ은 거짓입니다.
                                    </p>
                                </div>


                                {/* ㄷ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ. <InlineMath math="q\to p" />
                                    </p>

                                    <p className="leading-8">
                                        평행사변형은 두 쌍의 대변의 길이가 각각 같으므로
                                        특히
                                        <InlineMath math="\overline{AB}=\overline{CD}" />가
                                        성립합니다.
                                    </p>

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 ㄷ은 참입니다.
                                    </p>
                                </div>


                                {/* ㄴ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ. <InlineMath math="\sim p\to\sim q" />
                                    </p>

                                    <p className="leading-8">
                                        ㄷ의 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
`}
                                    />

                                    <p className="leading-8">
                                        의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        원래 명제와 대우는 진리값이 같고
                                        <InlineMath math="q\to p" />가 참이므로
                                    </p>

                                    <p className="mt-3 font-bold text-green-300">
                                        ㄴ도 참입니다.
                                    </p>
                                </div>


                                {/* ㄹ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄹ. <InlineMath math="\sim q\to\sim p" />
                                    </p>

                                    <p className="leading-8">
                                        ㄹ은 ㄱ의 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
`}
                                    />

                                    <p className="leading-8">
                                        의 대우입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        원래 명제와 대우는 진리값이 같고
                                        <InlineMath math="p\to q" />가 거짓이므로
                                    </p>

                                    <p className="mt-3 font-bold text-red-300">
                                        ㄹ도 거짓입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ④ ㄴ, ㄷ
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        원래 명제와 그 대우는 항상 진리값이 같습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p\text{가 참}
\quad\Longleftrightarrow\quad
\sim p\to\sim q\text{가 참}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
p\to q\text{가 거짓}
\quad\Longleftrightarrow\quad
\sim q\to\sim p\text{가 거짓}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 네 명제를 하나씩 전부 따로 판단하기보다,
                                        하나의 명제와 그 대우를 묶어서 판단하면 간단합니다.
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
                                다음 [보기]의 명제 중 그 역과 대우가 참인 것의 개수는?
                                <br />
                                (단, <InlineMath math="x,\ y" />는 실수이다.)
                            </p>

                            <div className="mt-5 space-y-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8">
                                    ㄱ. <InlineMath math="x=1" />이면{" "}
                                    <InlineMath math="x^3=1" />이다.
                                </p>

                                <p className="leading-8">
                                    ㄴ. <InlineMath math="|x|\ge1" />이면{" "}
                                    <InlineMath math="x^2\ge1" />이다.
                                </p>

                                <p className="leading-8">
                                    ㄷ. <InlineMath math="xy\ne0" />이면{" "}
                                    <InlineMath math="x\ne0" />이고{" "}
                                    <InlineMath math="y\ne0" />이다.
                                </p>

                                <p className="leading-8">
                                    ㄹ. <InlineMath math="|x|+|y|=0" />이면{" "}
                                    <InlineMath math="x^2+y^2=0" />이다.
                                </p>

                                <p className="leading-8">
                                    ㅁ. <InlineMath math="x+y<0" />이면{" "}
                                    <InlineMath math="x<0" />이고{" "}
                                    <InlineMath math="y<0" />이다.
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    원래 명제와 대우는 항상 진리값이 같습니다.
                                    따라서 각 명제에 대하여{" "}
                                    <span className="font-bold text-white">
                                        원래 명제와 역이 모두 참인지
                                    </span>
                                    를 확인하면 됩니다.
                                </p>


                                {/* ㄱ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄱ.
                                    </p>

                                    <p className="leading-8">
                                        원래 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=1\to x^3=1
`}
                                    />

                                    <p className="leading-8">
                                        은 참입니다. 그 역은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^3=1\to x=1
`}
                                    />

                                    <p className="leading-8">
                                        이고, 실수에서 <InlineMath math="x^3=1" />이면{" "}
                                        <InlineMath math="x=1" />이므로 역도 참입니다.
                                    </p>

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 역과 대우가 모두 참입니다.
                                    </p>
                                </div>


                                {/* ㄴ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ.
                                    </p>

                                    <p className="leading-8">
                                        원래 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|\ge1\to x^2\ge1
`}
                                    />

                                    <p className="leading-8">
                                        은 참입니다. 그 역은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2\ge1\to |x|\ge1
`}
                                    />

                                    <p className="leading-8">
                                        이고, <InlineMath math="x^2=|x|^2" />이므로
                                        역도 참입니다.
                                    </p>

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 역과 대우가 모두 참입니다.
                                    </p>
                                </div>


                                {/* ㄷ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="xy\ne0" />이면 두 수{" "}
                                        <InlineMath math="x,\ y" />는 모두{" "}
                                        <InlineMath math="0" />이 아니므로 원래 명제는 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그 역은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x\ne0\text{이고 }y\ne0
\to
xy\ne0
`}
                                    />

                                    <p className="leading-8">
                                        이므로 역도 참입니다.
                                    </p>

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 역과 대우가 모두 참입니다.
                                    </p>
                                </div>


                                {/* ㄹ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄹ.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="|x|+|y|=0" />이면
                                        두 항이 모두 <InlineMath math="0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=0,\qquad y=0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서{" "}
                                        <InlineMath math="x^2+y^2=0" />이므로
                                        원래 명제는 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        역
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+y^2=0
\to
|x|+|y|=0
`}
                                    />

                                    <p className="leading-8">
                                        에서도 실수의 제곱은 <InlineMath math="0" /> 이상이므로{" "}
                                        <InlineMath math="x=y=0" />입니다.
                                        따라서 역도 참입니다.
                                    </p>

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 역과 대우가 모두 참입니다.
                                    </p>
                                </div>


                                {/* ㅁ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㅁ.
                                    </p>

                                    <p className="leading-8">
                                        예를 들어
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=1,\qquad y=-2
`}
                                    />

                                    <p className="leading-8">
                                        로 놓으면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x+y=-1<0
`}
                                    />

                                    <p className="leading-8">
                                        이지만 <InlineMath math="x<0" />은 성립하지 않습니다.
                                        따라서 원래 명제는 거짓입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        원래 명제와 대우의 진리값은 같으므로
                                        대우도 거짓입니다.
                                    </p>

                                    <p className="mt-3 font-bold text-red-300">
                                        따라서 역과 대우가 모두 참인 명제가 아닙니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="4" />개
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        원래 명제와 대우는 항상 진리값이 같으므로,
                                        대우를 다시 따로 조사할 필요는 없습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
\quad\Longleftrightarrow\quad
\sim q\to\sim p
`}
                                    />

                                    <p className="leading-8">
                                        따라서 이 문제에서{" "}
                                        <span className="font-bold text-white">
                                            역과 대우가 모두 참
                                        </span>
                                        이려면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q\text{가 참}
\qquad\text{이고}\qquad
q\to p\text{가 참}
`}
                                    />

                                    <p className="leading-8">
                                        인지만 확인하면 됩니다.
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
                                다음 그림과 같이 한쪽 면에는 숫자, 다른 쪽 면에는 영어 문자가
                                쓰여진 4장의 카드가 있다. 명제
                            </p>

                            <BlockMath
                                math={String.raw`
\text{짝수가 쓰인 카드의 뒷면에는 모음이 쓰여 있다.}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가 참인지 확인하기 위하여 뒤집어 볼 필요가 있는 카드는?
                            </p>

                            <div className="mt-5 flex justify-center">
                                <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-white p-4">
                                    <img
                                        src="/images/commonMath2/2.16_3.png"
                                        alt="숫자 1, 2와 문자 A, B가 적힌 네 장의 카드"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① 1, 2</div>
                                <div>② 1, A</div>
                                <div>③ 1, B</div>
                                <div>④ 2, A</div>
                                <div>⑤ 2, B</div>
                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    주어진 명제를 조건으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
p:\ \text{짝수이다.}
`}
                                />

                                <BlockMath
                                    math={String.raw`
q:\ \text{모음이다.}
`}
                                />

                                <p className="leading-8">
                                    이므로 주어진 명제는
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 숫자 2가 보이는 카드
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="2" />는 짝수이므로
                                        뒷면에 반드시 모음이 있어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        만약 뒷면이 자음이라면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{짝수}
\quad\text{이지만}\quad
\text{모음이 아님}
`}
                                    />

                                    <p className="leading-8">
                                        이 되어 명제가 거짓이 됩니다.
                                    </p>

                                    <p className="mt-3 font-bold text-yellow-300">
                                        따라서 2 카드는 반드시 뒤집어 보아야 합니다.
                                    </p>
                                </div>


                                {/* B */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 문자 B가 보이는 카드
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="B" />는 모음이 아닌 자음입니다.
                                        이 카드의 반대쪽에 짝수가 있다면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{짝수}
\quad\text{이지만}\quad
\text{모음이 아님}
`}
                                    />

                                    <p className="leading-8">
                                        이므로 원래 명제가 거짓이 됩니다.
                                    </p>

                                    <p className="mt-3 font-bold text-yellow-300">
                                        따라서 B 카드도 반드시 뒤집어 보아야 합니다.
                                    </p>
                                </div>


                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 숫자 1이 보이는 카드
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="1" />은 짝수가 아닙니다.
                                        주어진 명제는 짝수인 카드에 대해서만 말하고 있으므로
                                        뒷면에 모음이 있든 자음이 있든 명제의 참과 거짓에
                                        영향을 주지 않습니다.
                                    </p>

                                    <p className="mt-3 font-bold text-gray-400">
                                        따라서 1 카드는 뒤집어 볼 필요가 없습니다.
                                    </p>
                                </div>


                                {/* A */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 문자 A가 보이는 카드
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A" />는 모음입니다.
                                        반대쪽 숫자가 짝수라면 명제에 맞고,
                                        홀수라고 해도 주어진 명제에는 어긋나지 않습니다.
                                    </p>

                                    <p className="mt-3 font-bold text-gray-400">
                                        따라서 A 카드도 뒤집어 볼 필요가 없습니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ⑤ 2, B
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        명제 <InlineMath math="p\to q" />를 확인하려면
                                        명제를 거짓으로 만들 수 있는 경우를 찾아야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\text{는 참},\qquad q\text{는 거짓}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 이 문제에서는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{짝수}
\quad+\quad
\text{모음이 아님}
`}
                                    />

                                    <p className="leading-8">
                                        이 가능한지를 확인해야 하므로{" "}
                                        <InlineMath math="2" />와{" "}
                                        <InlineMath math="B" />를 뒤집어 보아야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이것은 대우
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{모음이 아니다}
\to
\text{짝수가 아니다}
`}
                                    />

                                    <p className="leading-8">
                                        를 확인하는 것과도 같습니다.
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
                                실수 <InlineMath math="x" />에 대한 두 조건{" "}
                                <InlineMath math="p,\ q" />가 다음과 같다.
                            </p>

                            <BlockMath
                                math={String.raw`
p:\ x^2+ax+b=0,\qquad
q:\ |x|=5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                명제 <InlineMath math="p\to q" />의 역이 참이 되도록 하는
                                두 상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="a-b" />의 값은?
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 주어진 명제의 역을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
`}
                                    />

                                    <p className="leading-8">
                                        의 역은 가정과 결론의 자리를 바꾼
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 조건 <InlineMath math="q" />를 만족하는 값을 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|=5
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=5\text{ 또는 }x=-5
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 역이 참이 되기 위한 조건을 이용합니다.
                                    </p>

                                    <p className="leading-8">
                                        역 <InlineMath math="q\to p" />가 참이므로{" "}
                                        <InlineMath math="q" />를 만족하는{" "}
                                        <InlineMath math="x=5,-5" />는 모두 조건{" "}
                                        <InlineMath math="p" />를 만족해야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="5,-5" />는 이차방정식
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+ax+b=0
`}
                                    />

                                    <p className="leading-8">
                                        의 두 근입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        두 근이 <InlineMath math="5,-5" />인 이차방정식은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-5)(x+5)=0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-25=0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        주어진 식과 계수를 비교하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=0,\qquad b=-25
`}
                                    />
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ <InlineMath math="a-b" />를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a-b
=
0-(-25)
=
25
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="25" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        원래 명제 <InlineMath math="p\to q" />의 역은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 <InlineMath math="q" />를 만족하는 모든 값이{" "}
                                        <InlineMath math="p" />를 만족해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|=5
\quad\Longrightarrow\quad
x=5,-5
`}
                                    />

                                    <p className="leading-8">
                                        즉, <InlineMath math="5,-5" />가
                                        이차방정식의 두 근이 되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-5)(x+5)
=
x^2-25
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
                                실수 <InlineMath math="x" />에 대한 두 조건
                            </p>

                            <BlockMath
                                math={String.raw`
p:\ x^2-x+2<0,\qquad
q:\ x^2-ax+16>0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이 있다. 명제 <InlineMath math="p\to\sim q" />와
                                명제 <InlineMath math="\sim p\to q" />가 모두 참이 되도록 하는
                                정수 <InlineMath math="a" />의 개수를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-x+2<0
`}
                                    />

                                    <p className="leading-8">
                                        이차방정식 <InlineMath math="x^2-x+2=0" />의
                                        판별식을 구하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
D=(-1)^2-4\cdot1\cdot2
=-7<0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        최고차항의 계수가 양수이고 실근이 없으므로
                                        모든 실수 <InlineMath math="x" />에 대하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-x+2>0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 조건 <InlineMath math="p" />를
                                        만족하는 실수는 없습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P=\varnothing
`}
                                    />
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 명제 <InlineMath math="p\to\sim q" />를 판단합니다.
                                    </p>

                                    <p className="leading-8">
                                        조건 <InlineMath math="p" />의 진리집합이
                                        공집합이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P=\varnothing
\subset
Q^C
`}
                                    />

                                    <p className="leading-8">
                                        는 항상 성립합니다.
                                    </p>

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 명제 <InlineMath math="p\to\sim q" />는{" "}
                                        <InlineMath math="a" />의 값에 관계없이 항상 참입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 명제 <InlineMath math="\sim p\to q" />가 참이 되도록 합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="P=\varnothing" />이므로
                                        조건 <InlineMath math="\sim p" />의 진리집합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P^C=U
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="\sim p\to q" />가 참이 되려면
                                        조건 <InlineMath math="q" />가 모든 실수에서
                                        참이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-ax+16>0
\qquad
(\text{모든 실수 }x)
`}
                                    />

                                    <p className="leading-8">
                                        최고차항의 계수가 양수이고 부등호가{" "}
                                        <InlineMath math=">0" />이므로 판별식이{" "}
                                        <InlineMath math="0" />보다 작아야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
D=a^2-64<0
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-8<a<8
`}
                                    />
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 정수 <InlineMath math="a" />의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="-8<a<8" />을 만족하는 정수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7
`}
                                    />

                                    <p className="leading-8">
                                        이므로 모두 <InlineMath math="15" />개입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="15" />개
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 조건 <InlineMath math="p" />의 진리집합이
                                        공집합이라는 것을 확인하는 것이 핵심입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P=\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        는 항상 참이고,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\to q
`}
                                    />

                                    <p className="leading-8">
                                        가 참이 되려면 <InlineMath math="q" />가
                                        모든 실수에서 참이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-ax+16>0
\quad(\text{모든 실수 }x)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
D<0
\quad\Longrightarrow\quad
-8<a<8
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
                                전체집합{" "}
                                <InlineMath math="U=\{x\mid x\text{는 18 이하의 자연수}\}" />에
                                대하여 두 조건 <InlineMath math="p,\ q" />의 진리집합이 각각
                            </p>

                            <BlockMath
                                math={String.raw`
P=\{a,6,a+5\},\qquad
Q=\{6,8,3a-6\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이다. 명제 <InlineMath math="p\to q" />의 역과 대우가
                                모두 참일 때, 상수 <InlineMath math="a" />의 값은?
                                <br />
                                (단, <InlineMath math="a\ne1,\ a\ne6" />)
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 역과 대우가 참이라는 조건을 진리집합으로 나타냅니다.
                                    </p>

                                    <p className="leading-8">
                                        명제 <InlineMath math="p\to q" />의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to\sim p
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 원래 명제와 대우는 진리값이 같으므로
                                        대우가 참이면 원래 명제도 참입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\Rightarrow q
\quad\Longrightarrow\quad
P\subset Q
`}
                                    />

                                    <p className="leading-8">
                                        한편 원래 명제의 역은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
`}
                                    />

                                    <p className="leading-8">
                                        이고 이것도 참이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset P
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P=Q
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 공통으로 들어 있어야 하는 원소를 이용합니다.
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="Q" />에는{" "}
                                        <InlineMath math="8" />이 들어 있으므로{" "}
                                        <InlineMath math="P=Q" />가 되려면{" "}
                                        <InlineMath math="8" />도 반드시{" "}
                                        <InlineMath math="P" />의 원소이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P=\{a,6,a+5\}
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=8
\quad\text{또는}\quad
a+5=8
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=8
\quad\text{또는}\quad
a=3
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 두 값을 각각 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a=8" />이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P=\{8,6,13\}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
Q=\{6,8,18\}
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="P\ne Q" />입니다.
                                    </p>

                                    <p className="mt-5 leading-8">
                                        <InlineMath math="a=3" />이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P=\{3,6,8\}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
Q=\{6,8,3\}
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="P=Q" />입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=3
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="3" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        원래 명제의 대우가 참이면 원래 명제도 참이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q
`}
                                    />

                                    <p className="leading-8">
                                        이고, 역도 참이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset P
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{P=Q}
`}
                                    />

                                    <p className="leading-8">
                                        로 바꾸어 생각하는 것이 핵심입니다.
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
                                다음은 자연수 <InlineMath math="n" />에 대하여 명제
                                ‘<InlineMath math="n^2" />이 짝수이면{" "}
                                <InlineMath math="n" />도 짝수이다.’가 참임을
                                그 대우를 이용하여 증명하는 과정이다.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8">
                                    주어진 명제의 대우는
                                    ‘<InlineMath math="n" />이 홀수이면{" "}
                                    <InlineMath math="n^2" />도 홀수이다.’이다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="n=\boxed{\text{ (가) }}" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
n^2=2(\boxed{ \text{  (나)  } })+1
`}
                                />

                                <p className="leading-8">
                                    이때 <InlineMath math="n=\boxed{\text{ (나) }}" />는 <InlineMath math="n=\boxed{\text{ (다) }}" /> 또는 자연수이므로{" "}
                                    <InlineMath math="n^2" />은 홀수이다.
                                </p>

                                <p className="leading-8">
                                    따라서 주어진 명제의 대우가 참이므로
                                    주어진 명제도 참이다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                위의 과정에서 (가), (나)에 알맞은 식을 각각{" "}
                                <InlineMath math="f(k),\ g(k)" />라 하고
                                (다)에 알맞은 수를 <InlineMath math="a" />라 할 때,{" "}
                                <InlineMath math="f(a)+g(3)" />의 값은?
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 대우의 가정을 식으로 나타냅니다.
                                    </p>

                                    <p className="leading-8">
                                        주어진 명제의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n\text{이 홀수이면 }n^2\text{도 홀수이다.}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="n" />은 홀수인 자연수이므로 어떤 자연수{" "}
                                        <InlineMath math="k" />에 대하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n=2k-1
`}
                                    />

                                    <p className="leading-8">
                                        로 나타낼 수 있습니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{(\text{가})=2k-1}
`}
                                    />
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="n^2" />을 홀수의 꼴로 나타냅니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
n^2
&=(2k-1)^2\\
&=4k^2-4k+1\\
&=2(2k^2-2k)+1
\end{aligned}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\boxed{(\text{나})=2k^2-2k}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="2k^2+2k" />는{" "}
                                        <InlineMath math="0" /> 또는 자연수가 되므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{(\text{다})=0}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="n^2" />은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2(\text{0 또는 자연수})+1
`}
                                    />

                                    <p className="leading-8">
                                        의 꼴이므로 홀수입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ <InlineMath math="f(a)+g(3)" />을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        문제의 정의에 따라
                                    </p>

                                    <BlockMath
                                        math={String.raw`
f(k)=2k-1,\qquad
g(k)=2k^2-2k,\qquad
a=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
f(0)=-1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
g(3)
=
2\cdot3^2-2\cdot3
=
18-6
=
12
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
f(a)+g(3)
=
-1+12
=
11
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="11" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        원래 명제를 직접 증명하는 대신 대우
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n\text{이 홀수}
\to
n^2\text{도 홀수}
`}
                                    />

                                    <p className="leading-8">
                                        를 증명합니다. 홀수를{" "}
                                        <InlineMath math="2k+1" />로 나타내어 제곱하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(2k+1)^2
=
2(2k^2+2k)+1
`}
                                    />

                                    <p className="leading-8">
                                        이 되어 다시 홀수의 꼴이 됩니다.
                                        대우가 참이므로 원래 명제도 참입니다.
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
                                다음은 명제 ‘<InlineMath math="n" />이 자연수일 때,{" "}
                                <InlineMath math="\sqrt{n(n+1)}" />은 유리수가 아니다.’를
                                증명한 것이다.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8">
                                    <InlineMath math="\sqrt{n(n+1)}" />이 유리수라 가정하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt{n(n+1)}
=
\frac{a}{b}
\qquad
(a,\ b\text{는 서로 소인 자연수})
`}
                                />

                                <p className="leading-8">
                                    로 놓을 수 있다.
                                </p>

                                <p className="leading-8">
                                    위 식의 양변을 제곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
n(n+1)
=
\frac{a^2}{b^2}
\qquad\cdots\text{①}
`}
                                />

                                <p className="leading-8">
                                    그런데 이 식의 좌변은 자연수이고{" "}
                                    <InlineMath math="a" />와 <InlineMath math="b" />는
                                    서로 소이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
b^2=\boxed{\text{(가)}}
\qquad\cdots\text{②}
`}
                                />

                                <p className="leading-8">
                                    ②를 ①에 대입하여 변형하면
                                </p>

                                <BlockMath
                                    math={String.raw`
4n^2+4n=4a^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
(2n+1)^2-4a^2=\boxed{\text{(나)}}
`}
                                />

                                <BlockMath
                                    math={String.raw`
(2n+1+2a)(2n+1-2a)
=
\boxed{\text{(나)}}
`}
                                />

                                <p className="leading-8">
                                    즉 <InlineMath math="2n+1+2a" />,{" "}
                                    <InlineMath math="2n+1-2a" />는 모두{" "}
                                    <InlineMath math="\boxed{\text{(다)}}" />이거나
                                    모두 <InlineMath math="\boxed{\text{(라)}}" />이다.
                                </p>

                                <p className="leading-8">
                                    이때 어느 경우에나 모순이므로{" "}
                                    <InlineMath math="\sqrt{n(n+1)}" />은 유리수가 아니다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                위의 과정에서 (가), (나), (다), (라)에 알맞은 값을 각각{" "}
                                <InlineMath math="p,\ q,\ r,\ s" />라 할 때,{" "}
                                <InlineMath math="pqrs" />의 값은?
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① <InlineMath math="(\text{가})" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        양변을 제곱하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(n+1)=\frac{a^2}{b^2}
`}
                                    />

                                    <p className="leading-8">
                                        를 얻었습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        좌변 <InlineMath math="n(n+1)" />은 자연수이므로
                                        오른쪽의 분수도 자연수입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그런데 <InlineMath math="a" />와{" "}
                                        <InlineMath math="b" />는 서로 소이므로{" "}
                                        <InlineMath math="a^2" />와{" "}
                                        <InlineMath math="b^2" />도 서로 소입니다.
                                        따라서 분모는 <InlineMath math="1" />이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
b^2=\boxed{1}
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{(\text{가})=1}
`}
                                    />
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="(\text{나})" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="b^2=1" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(n+1)=a^2
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 양변에 <InlineMath math="4" />를 곱하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4n^2+4n=4a^2
`}
                                    />

                                    <p className="leading-8">
                                        양변에 <InlineMath math="1" />을 더하여 정리하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4n^2+4n+1-4a^2=1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(2n+1)^2-4a^2=1
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{(\text{나})=1}
`}
                                    />
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ <InlineMath math="(\text{다}),\ (\text{라})" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        차의 제곱을 인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(2n+1+2a)(2n+1-2a)=1
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="2n+1+2a" />와{" "}
                                        <InlineMath math="2n+1-2a" />는 모두 정수이고,
                                        두 정수의 곱이 <InlineMath math="1" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2n+1+2a=1,\qquad
2n+1-2a=1
`}
                                    />

                                    <p className="leading-8">
                                        이거나
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2n+1+2a=-1,\qquad
2n+1-2a=-1
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{(\text{다})=1},
\qquad
\boxed{(\text{라})=-1}
`}
                                    />
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ <InlineMath math="pqrs" />를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p=1,\qquad
q=1,\qquad
r=1,\qquad
s=-1
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
pqrs
=
1\cdot1\cdot1\cdot(-1)
=
-1
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{-1}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\sqrt{n(n+1)}" />이 유리수라고
                                        가정한 뒤 모순을 이끌어 내는{" "}
                                        <span className="font-bold text-white">
                                            귀류법
                                        </span>
                                        입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt{n(n+1)}
=
\frac ab
`}
                                    />

                                    <p className="leading-8">
                                        에서 서로 소인 <InlineMath math="a,\ b" />의 성질을 이용하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
b^2=1
`}
                                    />

                                    <p className="leading-8">
                                        을 얻고,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(2n+1+2a)(2n+1-2a)=1
`}
                                    />

                                    <p className="leading-8">
                                        로 변형하여 두 정수가 모두{" "}
                                        <InlineMath math="1" />이거나 모두{" "}
                                        <InlineMath math="-1" />이어야 함을 이용합니다.
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
                                다음은 명제 ‘<InlineMath math="n\ge2" />인 자연수{" "}
                                <InlineMath math="n" />에 대하여{" "}
                                <InlineMath math="\sqrt{n^2-1}" />은 무리수이다.’가
                                참임을 귀류법을 이용하여 증명하는 과정이다.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8">
                                    <InlineMath math="\sqrt{n^2-1}" />이 유리수라 가정하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt{n^2-1}
=
\frac{q}{p}
\qquad
(p,\ q\text{는 서로 소인 자연수})
\qquad\cdots\text{①}
`}
                                />

                                <p className="leading-8">
                                    로 나타낼 수 있다.
                                </p>

                                <p className="leading-8">
                                    위 식의 양변을 제곱하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
p^2\boxed{\text{(가)}}=q^2
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="p" />는 <InlineMath math="q^2" />의 약수이고{" "}
                                    <InlineMath math="p,\ q" />는 서로 소인 자연수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n^2=\boxed{\text{(나)}}
`}
                                />

                                <p className="leading-8">
                                    자연수 <InlineMath math="k" />에 대하여
                                </p>

                                <p className="leading-8">
                                    (ⅰ) <InlineMath math="q=2k" />일 때,
                                </p>

                                <BlockMath
                                    math={String.raw`
(2k)^2<n^2<\boxed{\text{(다)}}
`}
                                />

                                <p className="leading-8">
                                    인 자연수 <InlineMath math="n" />이 존재하지 않는다.
                                </p>

                                <p className="leading-8">
                                    (ⅱ) <InlineMath math="q=2k+1" />일 때,
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\text{(다)}}<n^2<(2k+2)^2
`}
                                />

                                <p className="leading-8">
                                    인 자연수 <InlineMath math="n" />이 존재하지 않는다.
                                </p>

                                <p className="leading-8">
                                    (ⅰ), (ⅱ)에서 ①을 만족시키는 자연수{" "}
                                    <InlineMath math="n" />은 존재하지 않는다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="\sqrt{n^2-1}" />은 무리수이다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                위의 과정에서 (가), (나), (다)에 알맞은 식을 각각{" "}
                                <InlineMath math="f(n),\ g(q),\ h(k)" />라 할 때,{" "}
                                <InlineMath math="f(\sqrt2)+g(2)+h(2)" />의 값을 구하시오.
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① <InlineMath math="(\text{가})" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        ①의 양변을 제곱하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n^2-1=\frac{q^2}{p^2}
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p^2(n^2-1)=q^2
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{(\text{가})=n^2-1}
`}
                                    />

                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="(\text{나})" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="p^2(n^2-1)=q^2" />에서{" "}
                                        <InlineMath math="p" />는 <InlineMath math="q^2" />의
                                        약수입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그런데 <InlineMath math="p" />와{" "}
                                        <InlineMath math="q" />가 서로 소이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p=1
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n^2-1=q^2
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
n^2=q^2+1
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{(\text{나})=q^2+1}
`}
                                    />

                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ <InlineMath math="(\text{다})" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        먼저 <InlineMath math="q=2k" />이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n^2=q^2+1
=(2k)^2+1
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(2k)^2
<
n^2
<
(2k+1)^2
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        또 <InlineMath math="q=2k+1" />이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n^2
=
(2k+1)^2+1
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(2k+1)^2
<
n^2
<
(2k+2)^2
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
\boxed{(\text{다})=(2k+1)^2}
`}
                                    />

                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 주어진 값을 계산합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
f(n)=n^2-1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
g(q)=q^2+1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
h(k)=(2k+1)^2
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
f(\sqrt2)
=
(\sqrt2)^2-1
=
1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
g(2)
=
2^2+1
=
5
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
h(2)
=
(2\cdot2+1)^2
=
25
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
f(\sqrt2)+g(2)+h(2)
=
1+5+25
=
31
`}
                                    />

                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{31}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\sqrt{n^2-1}" />이 유리수라고 가정한 뒤
                                        서로 소인 자연수 <InlineMath math="p,\ q" />를 이용하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n^2=q^2+1
`}
                                    />

                                    <p className="leading-8">
                                        을 얻습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이후 <InlineMath math="q" />가 짝수인 경우와 홀수인 경우로
                                        나누면 <InlineMath math="n^2" />이 항상 연속한 두 자연수의
                                        제곱 사이에 놓이게 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
m^2<n^2<(m+1)^2
`}
                                    />

                                    <p className="leading-8">
                                        을 만족하는 자연수 <InlineMath math="n" />은 존재할 수 없으므로
                                        처음의 가정에 모순입니다.
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
                                <InlineMath math="x" />가 실수일 때, 두 조건
                            </p>

                            <BlockMath
                                math={String.raw`
p:\ (x^2-kx+k)(x^2-x-6)\le0,
\qquad
q:\ x^2-x-6\le0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                에 대하여 명제 <InlineMath math="p\to q" />가 참이 되도록 하는
                                실수 <InlineMath math="k" />의 최댓값을{" "}
                                <InlineMath math="M" />, 최솟값을{" "}
                                <InlineMath math="m" />이라 하자.{" "}
                                <InlineMath math="12Mm" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 원래 명제의 대우를 생각합니다.
                                    </p>

                                    <p className="leading-8">
                                        원래 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
`}
                                    />

                                    <p className="leading-8">
                                        에서 가정 <InlineMath math="p" />가 결론{" "}
                                        <InlineMath math="q" />보다 복잡하므로
                                        원래 명제를 직접 다루기보다 대우를 이용합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        명제 <InlineMath math="p\to q" />의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to\sim p
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="\sim q" />와{" "}
                                        <InlineMath math="\sim p" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        조건 <InlineMath math="q" />는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q:\ x^2-x-6\le0
`}
                                    />

                                    <p className="leading-8">
                                        이므로 그 부정은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q:\ x^2-x-6>0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또 조건 <InlineMath math="p" />의 부정은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p:
(x^2-kx+k)(x^2-x-6)>0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-x-6>0
\quad\to\quad
(x^2-kx+k)(x^2-x-6)>0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 대우를 간단하게 정리합니다.
                                    </p>

                                    <p className="leading-8">
                                        대우의 가정에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-x-6>0
`}
                                    />

                                    <p className="leading-8">
                                        이므로 두 번째 인수는 이미 양수입니다.
                                        따라서 결론이 참이 되려면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-kx+k>0
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        한편
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-x-6
=
(x+2)(x-3)
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-x-6>0
\quad\Longleftrightarrow\quad
x<-2\text{ 또는 }x>3
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
x<-2\text{ 또는 }x>3
\quad\to\quad
x^2-kx+k>0
`}
                                    />

                                    <p className="leading-8">
                                        가 성립해야 합니다.
                                    </p>
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ <InlineMath math="k" />의 범위를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        이차식
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-kx+k
`}
                                    />

                                    <p className="leading-8">
                                        의 최고차항의 계수는 양수입니다.
                                        따라서 <InlineMath math="x<-2" />와{" "}
                                        <InlineMath math="x>3" />에서 항상 양수가 되려면
                                        경계에서의 값이 각각 <InlineMath math="0" /> 이상이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="x=-2" />에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(-2)^2-k(-2)+k\ge0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
4+3k\ge0
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k\ge-\frac43
`}
                                    />

                                    <p className="mt-4 leading-8">
                                        또 <InlineMath math="x=3" />에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3^2-3k+k\ge0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
9-2k\ge0
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k\le\frac92
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-\frac43\le k\le\frac92
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 5 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑤ <InlineMath math="12Mm" />의 값을 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
M=\frac92,
\qquad
m=-\frac43
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
12Mm
&=12\cdot\frac92\cdot\left(-\frac43\right)\\
&=-72
\end{aligned}
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="-72" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        원래 명제는 가정에 두 이차식의 곱이 들어 있어 복잡합니다.
                                        이럴 때는 대우
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to\sim p
`}
                                    />

                                    <p className="leading-8">
                                        를 이용하면 가정
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-x-6>0
`}
                                    />

                                    <p className="leading-8">
                                        에 의해 결론의 같은 인수가 이미 양수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-kx+k>0
`}
                                    />

                                    <p className="leading-8">
                                        만 판단하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
\quad\Longleftrightarrow\quad
\sim q\to\sim p
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        즉,{" "}
                                        <span className="font-bold text-yellow-300">
                                            가정이 결론보다 복잡한 경우에는 대우를 먼저 생각
                                        </span>
                                        하면 풀이가 훨씬 간단해질 수 있습니다.
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

                        <div className="space-y-5">

                            <div>
                                <p className="font-bold text-white">
                                    역
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
\quad\longrightarrow\quad
q\to p
`}
                                />

                                <p className="text-center leading-8 text-gray-300">
                                    가정과 결론의 자리를 바꿉니다.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-5">
                                <p className="font-bold text-white">
                                    대우
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
\quad\longrightarrow\quad
\sim q\to\sim p
`}
                                />

                                <p className="text-center leading-8 text-gray-300">
                                    가정과 결론의 자리를 바꾸고 각각 부정합니다.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-5">
                                <p className="font-bold text-white">
                                    원래 명제와 대우
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
p\to q
\quad\Longleftrightarrow\quad
\sim q\to\sim p
}
`}
                                />

                                <p className="text-center leading-8 text-gray-300">
                                    항상 진리값이 같습니다.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-5">
                                <p className="font-bold text-white">
                                    집합으로 표현
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
P\subset Q
\quad\Longleftrightarrow\quad
Q^C\subset P^C
}
`}
                                />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* 2.17 삼단논법 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.17 삼단논법
                </h2>

                <p className="leading-8 text-gray-300">
                    두 명제를 연결하여 새로운 명제를 만드는 방법을 알아봅니다.
                    앞 명제의 결론과 뒤 명제의 가정이 같으면 두 명제를 이어서
                    새로운 명제를 만들 수 있습니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 삼단논법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 명제
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q,
\qquad
q\to r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 모두 참이면
                        </p>

                        <BlockMath
                            math={String.raw`
p\to r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            도 참입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <BlockMath
                                math={String.raw`
p\to q,\quad q\to r
\quad\Longrightarrow\quad
p\to r
`}
                            />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            이와 같이 두 명제를 차례로 연결하여 새로운 명제를 만드는 것을
                            <span className="font-bold text-white"> 삼단논법</span>이라고 합니다.
                        </p>

                    </div>


                    {/* 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 진리집합으로 이해하는 삼단논법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건 <InlineMath math="p,\ q,\ r" />의 진리집합을 각각{" "}
                            <InlineMath math="P,\ Q,\ R" />이라 하겠습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />가 참이므로
                        </p>

                        <BlockMath
                            math={String.raw`
P\subset Q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고, 명제 <InlineMath math="q\to r" />가 참이므로
                        </p>

                        <BlockMath
                            math={String.raw`
Q\subset R
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
P\subset Q\subset R
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
P\subset R
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 따라서 명제
                        </p>

                        <BlockMath
                            math={String.raw`
p\to r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 참입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                집합의 포함관계
                            </p>

                            <BlockMath
                                math={String.raw`
P\subset Q,\quad Q\subset R
\quad\Longrightarrow\quad
P\subset R
`}
                            />

                            <p className="leading-8 text-gray-300">
                                삼단논법은 진리집합의 포함관계를 차례로 연결하는 것과 같습니다.
                            </p>

                        </div>

                    </div>


                    {/* 3 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 명제가 바로 연결되지 않는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼단논법을 사용하려면 앞 명제의 결론과
                            뒤 명제의 가정이 서로 같아야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
p\to \boxed{q},
\qquad
\boxed{q}\to r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            그런데 두 명제가 바로 연결되지 않는 경우에는
                            <span className="font-bold text-yellow-300"> 대우</span>를 이용하여
                            연결할 수 있는 형태로 바꾸어 봅니다.
                        </p>

                    </div>


                    {/* 4 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 대우를 이용한 삼단논법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            다음 두 명제가 모두 참이라고 하겠습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q,
\qquad
r\to\sim q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            두 명제는 그대로는 연결되지 않습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q,
\qquad
r\to\sim q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            첫 번째 명제의 결론은 <InlineMath math="q" />인데,
                            두 번째 명제의 가정은 <InlineMath math="r" />이므로
                            서로 연결되지 않습니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            두 번째 명제
                        </p>

                        <BlockMath
                            math={String.raw`
r\to\sim q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 대우를 취하면
                        </p>

                        <BlockMath
                            math={String.raw`
q\to\sim r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이제
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q,
\qquad
q\to\sim r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            로 <InlineMath math="q" />가 연결되므로 삼단논법에 의하여
                        </p>

                        <BlockMath
                            math={String.raw`
p\to\sim r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 얻습니다.
                        </p>

                    </div>


                    {/* 5 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 성립하는 명제를 모두 구하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            주어진 두 명제
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q,
\qquad
r\to\sim q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에서 새롭게 얻을 수 있는 명제를 모두 구해 봅시다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            먼저
                        </p>

                        <BlockMath
                            math={String.raw`
r\to\sim q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 대우는
                        </p>

                        <BlockMath
                            math={String.raw`
q\to\sim r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q,
\qquad
q\to\sim r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 삼단논법을 적용하면
                        </p>

                        <BlockMath
                            math={String.raw`
p\to\sim r
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 얻습니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            이제 각각의 대우도 참이므로
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q
\quad\Longrightarrow\quad
\sim q\to\sim p
`}
                        />

                        <BlockMath
                            math={String.raw`
p\to\sim r
\quad\Longrightarrow\quad
r\to\sim p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 얻습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                새롭게 얻을 수 있는 네 명제
                            </p>

                            <BlockMath
                                math={String.raw`
q\to\sim r
`}
                            />

                            <BlockMath
                                math={String.raw`
p\to\sim r
`}
                            />

                            <BlockMath
                                math={String.raw`
\sim q\to\sim p
`}
                            />

                            <BlockMath
                                math={String.raw`
r\to\sim p
`}
                            />

                        </div>

                    </div>

                    {/* 6 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 문장으로 표현된 삼단논법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼단논법이 문장으로 주어진 경우에는
                            문장의 핵심 조건만 남겨 간단한 수학 기호로 표현합니다.
                            그다음 공통으로 등장하는 조건을 찾아 명제를 연결합니다.
                        </p>


                        {/* 예시 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                • 도시에는 교통량이 많다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                • 대기의 질이 좋은 곳은 교통량이 적다.
                            </p>

                        </div>


                        {/* 1 */}
                        <div className="mt-6">

                            <p className="mb-3 font-bold text-white">
                                ① 문장을 간단한 수학 기호로 표현합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{도시}\to\text{교통량}
`}
                            />

                            <BlockMath
                                math={String.raw`
\text{대기}\to\sim\text{교통량}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                여기서 <InlineMath math="\text{도시}" />는 도시인 곳,{" "}
                                <InlineMath math="\text{교통량}" />은 교통량이 많은 곳,{" "}
                                <InlineMath math="\text{대기}" />는 대기의 질이 좋은 곳을
                                뜻합니다.
                            </p>

                        </div>


                        {/* 2 */}
                        <div className="mt-6">

                            <p className="mb-3 font-bold text-white">
                                ② 공통으로 등장하는 조건을 찾습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{도시}\to\boxed{\text{교통량}}
`}
                            />

                            <BlockMath
                                math={String.raw`
\text{대기}\to\sim\boxed{\text{교통량}}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                두 명제에서 공통으로 등장하는 조건은{" "}
                                <span className="font-bold text-yellow-300">
                                    교통량
                                </span>
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                그러나 현재 상태로는 두 명제를 바로 연결할 수 없으므로
                                두 번째 명제의 대우를 취합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{대기}\to\sim\text{교통량}
`}
                            />

                            <BlockMath
                                math={String.raw`
\Downarrow\quad\text{대우}
`}
                            />

                            <BlockMath
                                math={String.raw`
\text{교통량}\to\sim\text{대기}
`}
                            />

                        </div>


                        {/* 3 */}
                        <div className="mt-6">

                            <p className="mb-3 font-bold text-white">
                                ③ 삼단논법으로 연결합니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                이제 두 명제를
                            </p>

                            <BlockMath
                                math={String.raw`
\text{도시}\to\text{교통량},
\qquad
\text{교통량}\to\sim\text{대기}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                와 같이 연결할 수 있으므로 삼단논법에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
\text{도시}\to\sim\text{대기}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                를 얻습니다.
                            </p>

                        </div>


                        {/* 4 */}
                        <div className="mt-6">

                            <p className="mb-3 font-bold text-white">
                                ④ 각각의 대우도 구합니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                처음 주어진 명제
                            </p>

                            <BlockMath
                                math={String.raw`
\text{도시}\to\text{교통량}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 대우는
                            </p>

                            <BlockMath
                                math={String.raw`
\sim\text{교통량}\to\sim\text{도시}
`}
                            />

                            <p className="mt-4 leading-8 text-gray-300">
                                이고, 삼단논법으로 얻은 명제
                            </p>

                            <BlockMath
                                math={String.raw`
\text{도시}\to\sim\text{대기}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 대우는
                            </p>

                            <BlockMath
                                math={String.raw`
\text{대기}\to\sim\text{도시}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>


                        {/* 5 */}
                        <div className="mt-6">

                            <p className="mb-3 font-bold text-white">
                                ⑤ 얻어진 수학 기호를 다시 문장으로 표현합니다.
                            </p>

                            <div className="space-y-5">

                                <div>
                                    <BlockMath
                                        math={String.raw`
\text{교통량}\to\sim\text{대기}
`}
                                    />

                                    <p className="text-center leading-8 text-gray-300">
                                        교통량이 많은 곳은 대기의 질이 좋지 않다.
                                    </p>
                                </div>

                                <div>
                                    <BlockMath
                                        math={String.raw`
\text{도시}\to\sim\text{대기}
`}
                                    />

                                    <p className="text-center leading-8 text-gray-300">
                                        도시는 대기의 질이 좋지 않다.
                                    </p>
                                </div>

                                <div>
                                    <BlockMath
                                        math={String.raw`
\sim\text{교통량}\to\sim\text{도시}
`}
                                    />

                                    <p className="text-center leading-8 text-gray-300">
                                        교통량이 적은 곳은 도시가 아니다.
                                    </p>
                                </div>

                                <div>
                                    <BlockMath
                                        math={String.raw`
\text{대기}\to\sim\text{도시}
`}
                                    />

                                    <p className="text-center leading-8 text-gray-300">
                                        대기의 질이 좋은 곳은 도시가 아니다.
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* 핵심 */}
                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                문장으로 표현된 삼단논법의 순서
                            </p>

                            <BlockMath
                                math={String.raw`
\text{문장}
\;\longrightarrow\;
\text{수학 기호}
\;\longrightarrow\;
\text{공통 조건 찾기}
`}
                            />

                            <BlockMath
                                math={String.raw`
\text{대우와 삼단논법}
\;\longrightarrow\;
\text{문장으로 해석}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                긴 문장을 그대로 연결하려고 하지 말고
                                핵심 조건만 간단하게 나타낸 후 관계를 찾는 것이 중요합니다.
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
                                세 조건 <InlineMath math="p,\ q,\ r" />에 대하여 두 명제
                            </p>

                            <BlockMath
                                math={String.raw`
p\to\sim r,
\qquad
\sim q\to r
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이 모두 참일 때, [보기]의 명제 중에서 항상 참인 것을
                                모두 고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    [보기]
                                </p>

                                <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                                    <div>
                                        ㄱ. <InlineMath math="p\to q" />
                                    </div>

                                    <div>
                                        ㄴ. <InlineMath math="r\to\sim p" />
                                    </div>

                                    <div>
                                        ㄷ. <InlineMath math="r\to\sim q" />
                                    </div>

                                    <div>
                                        ㄹ. <InlineMath math="q\to\sim p" />
                                    </div>
                                </div>

                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ, ㄴ</div>
                                <div>② ㄱ, ㄷ</div>
                                <div>③ ㄱ, ㄹ</div>
                                <div>④ ㄴ, ㄷ</div>
                                <div>⑤ ㄴ, ㄹ</div>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 주어진 명제의 대우를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        먼저
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r\to\sim p
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 <span className="font-bold text-white">ㄴ은 참</span>입니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        또
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to r
`}
                                    />

                                    <p className="leading-8">
                                        의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim r\to q
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 연결되는 명제를 찾습니다.
                                    </p>

                                    <p className="leading-8">
                                        주어진 첫 번째 명제와 두 번째 명제의 대우를 연결하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to\sim r,
\qquad
\sim r\to q
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="\sim r" />가 연결되므로
                                        삼단논법에 의하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
`}
                                    />

                                    <p className="leading-8">
                                        를 얻습니다. 따라서{" "}
                                        <span className="font-bold text-white">ㄱ은 참</span>입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 나머지 명제를 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        ㄷ의
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        는 주어진 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to r
`}
                                    />

                                    <p className="leading-8">
                                        의 <span className="font-bold text-yellow-300">역</span>이므로
                                        반드시 참이라고 할 수 없습니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        또한 ㄹ의
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to\sim p
`}
                                    />

                                    <p className="leading-8">
                                        는 주어진 명제와 그 대우를 연결하여 얻을 수 있는
                                        명제가 아니므로 반드시 참이라고 할 수 없습니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ① ㄱ, ㄴ
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        두 명제가 바로 연결되지 않으면 먼저{" "}
                                        <span className="font-bold text-yellow-300">
                                            대우를 이용하여 연결되는 조건
                                        </span>
                                        을 만듭니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to r
\quad\Longrightarrow\quad
\sim r\to q
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to\sim r,
\qquad
\sim r\to q
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\therefore\ p\to q
`}
                                    />

                                    <p className="leading-8">
                                        와 같이 삼단논법을 적용할 수 있습니다.
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
                                전체집합 <InlineMath math="U" />에 대하여 세 조건{" "}
                                <InlineMath math="p,\ q,\ r" />의 진리집합을 각각{" "}
                                <InlineMath math="P,\ Q,\ R" />이라 하자. 명제{" "}
                                <InlineMath math="p\to q" />와{" "}
                                <InlineMath math="\sim r\to\sim q" />가 모두 참일 때,
                                다음 중 항상 옳은 것은?
                            </p>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>
                                    ① <InlineMath math="P\cup Q=P" />
                                </div>

                                <div>
                                    ② <InlineMath math="P-R=R" />
                                </div>

                                <div>
                                    ③ <InlineMath math="P\cap R=P" />
                                </div>

                                <div>
                                    ④ <InlineMath math="P\cup R^C=U" />
                                </div>

                                <div>
                                    ⑤ <InlineMath math="Q-P=\varnothing" />
                                </div>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 두 번째 명제의 대우를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        주어진 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim r\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to r
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 삼단논법을 적용합니다.
                                    </p>

                                    <p className="leading-8">
                                        이제 주어진 첫 번째 명제와 방금 구한 대우를 연결하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q,
\qquad
q\to r
`}
                                    />

                                    <p className="leading-8">
                                        이므로 삼단논법에 의하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to r
`}
                                    />

                                    <p className="leading-8">
                                        가 참입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 진리집합의 포함관계로 나타냅니다.
                                    </p>

                                    <p className="leading-8">
                                        명제 <InlineMath math="p\to q" />가 참이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q
`}
                                    />

                                    <p className="leading-8">
                                        이고, 명제 <InlineMath math="q\to r" />가 참이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset R
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q\subset R
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset R
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 보기를 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="P\subset R" />이므로{" "}
                                        <InlineMath math="P" />와 <InlineMath math="R" />의
                                        교집합은 <InlineMath math="P" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\cap R=P
`}
                                    />

                                    <p className="leading-8">
                                        따라서 항상 옳은 것은 ③입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ③
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        두 번째 명제의 대우를 취하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim r\to\sim q
\quad\Longrightarrow\quad
q\to r
`}
                                    />

                                    <p className="leading-8">
                                        이므로 주어진 명제와 연결하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q,\qquad q\to r
\quad\Longrightarrow\quad
p\to r
`}
                                    />

                                    <p className="leading-8">
                                        를 얻습니다. 이를 진리집합으로 바꾸면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q\subset R
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\cap R=P
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
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
                                전체집합 <InlineMath math="U" />에 대하여 세 조건{" "}
                                <InlineMath math="p,\ q,\ r" />의 진리집합을 각각{" "}
                                <InlineMath math="P,\ Q,\ R" />이라 하자. 세 명제
                            </p>

                            <BlockMath
                                math={String.raw`
p\to\sim q,
\qquad
\sim q\to r,
\qquad
q\to\sim r
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이 모두 참일 때, 항상 옳은 것만을 [보기]에서 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    [보기]
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        ㄱ. <InlineMath math="P\cap Q=\varnothing" />
                                    </div>

                                    <div>
                                        ㄴ. <InlineMath math="P\cap R=R" />
                                    </div>

                                    <div>
                                        ㄷ. <InlineMath math="Q\cup R=U" />
                                    </div>
                                </div>

                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄴ</div>
                                <div>③ ㄱ, ㄷ</div>
                                <div>④ ㄴ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 첫 번째 명제를 진리집합으로 나타냅니다.
                                    </p>

                                    <p className="leading-8">
                                        명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        가 참이므로 진리집합의 포함관계는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q^C
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 <InlineMath math="P" />와{" "}
                                        <InlineMath math="Q" />는 서로 겹치지 않으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\cap Q=\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <span className="font-bold text-white">ㄱ은 참</span>입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="Q^C" />와{" "}
                                        <InlineMath math="R" />의 관계를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        두 번째 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to r
`}
                                    />

                                    <p className="leading-8">
                                        가 참이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q^C\subset R
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        세 번째 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
R\subset Q^C
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q^C\subset R,
\qquad
R\subset Q^C
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
R=Q^C
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ ㄴ, ㄷ을 판단합니다.
                                    </p>

                                    <p className="leading-8">
                                        앞에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q^C
\qquad\text{이고}\qquad
R=Q^C
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset R
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\cap R=P
`}
                                    />

                                    <p className="leading-8">
                                        이며, 반드시 <InlineMath math="P\cap R=R" />인 것은 아닙니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <span className="font-bold text-white">ㄴ은 거짓</span>입니다.
                                    </p>

                                    <p className="mt-5 leading-8">
                                        한편
                                    </p>

                                    <BlockMath
                                        math={String.raw`
R=Q^C
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\cup R
=
Q\cup Q^C
=
U
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <span className="font-bold text-white">ㄷ은 참</span>입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ③ ㄱ, ㄷ
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        명제와 그 대우를 이용하여 진리집합의 포함관계를
                                        양쪽 방향으로 얻으면 집합의 상등을 구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to r
\quad\Longrightarrow\quad
Q^C\subset R
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
q\to\sim r
\quad\Longrightarrow\quad
r\to\sim q
\quad\Longrightarrow\quad
R\subset Q^C
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
R=Q^C
`}
                                    />

                                    <p className="leading-8">
                                        를 얻는 것이 핵심입니다.
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
                                두 명제 <InlineMath math="p\to\sim s" />,{" "}
                                <InlineMath math="r\to q" />가 모두 참이라고 할 때,
                                이들로부터 명제 <InlineMath math="s\to\sim r" />이
                                참이라는 결론을 얻기 위해서는 참인 명제가 하나 더 필요하다.
                                다음 명제가 모두 참이라고 할 때, 이 중에서 필요한 명제는?
                            </p>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>
                                    ① <InlineMath math="q\to p" />
                                </div>

                                <div>
                                    ② <InlineMath math="s\to q" />
                                </div>

                                <div>
                                    ③ <InlineMath math="r\to\sim q" />
                                </div>

                                <div>
                                    ④ <InlineMath math="\sim s\to\sim q" />
                                </div>

                                <div>
                                    ⑤ <InlineMath math="r\to\sim p" />
                                </div>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 주어진 명제의 대우를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        첫 번째 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to\sim s
`}
                                    />

                                    <p className="leading-8">
                                        의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
s\to\sim p
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        두 번째 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r\to q
`}
                                    />

                                    <p className="leading-8">
                                        의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 목표 명제가 되도록 연결 조건을 찾습니다.
                                    </p>

                                    <p className="leading-8">
                                        얻고자 하는 명제는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
s\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        현재 주어진 명제의 대우를 이용하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
s\to\sim p
`}
                                    />

                                    <p className="leading-8">
                                        와
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        를 알고 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 이 두 명제를 연결하려면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        가 필요합니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 필요한 명제를 보기에서 찾습니다.
                                    </p>

                                    <p className="leading-8">
                                        필요한 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
`}
                                    />

                                    <p className="leading-8">
                                        의 대우입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 ①의 명제가 참이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
\quad\Longrightarrow\quad
\sim p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        를 얻을 수 있습니다.
                                    </p>
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 삼단논법으로 연결합니다.
                                    </p>

                                    <p className="leading-8">
                                        지금까지 얻은 명제를 순서대로 연결하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
s\to\sim p,
\qquad
\sim p\to\sim q,
\qquad
\sim q\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        이므로 삼단논법에 의하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
s\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        를 얻습니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ① <InlineMath math="q\to p" />
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 주어진 명제의 대우를 이용하여
                                        목표 명제의 시작과 끝을 만듭니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
s\to\sim p,
\qquad
\sim q\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        그러면 중간에 필요한 연결은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        이고, 이것은 <InlineMath math="q\to p" />의 대우입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
s\to\sim p
\to\sim q
\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        즉, 목표로 하는 명제의{" "}
                                        <span className="font-bold text-yellow-300">
                                            시작과 끝을 먼저 확인하고 중간에 필요한 연결고리를 찾는 것
                                        </span>
                                        이 핵심입니다.
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
                                형사가 세 명의 용의자 A, B, C를 심문한 결과
                                용의자들은 다음과 같이 진술하였다.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div className="space-y-3 text-gray-300">
                                    <p className="leading-8">
                                        A : 나는 범인이 아니다.
                                    </p>

                                    <p className="leading-8">
                                        B : C가 범인이다.
                                    </p>

                                    <p className="leading-8">
                                        C : 내가 범인이다.
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                A, B, C 중 한 명만 진실을 말했다고 할 때,
                                진실을 말한 사람과 범인은?
                            </p>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① A, B</div>
                                <div>② A, C</div>
                                <div>③ B, C</div>
                                <div>④ B, A</div>
                                <div>⑤ C, A</div>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① B와 C의 진술을 비교합니다.
                                    </p>

                                    <p className="leading-8">
                                        B의 진술은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{C가 범인이다}
`}
                                    />

                                    <p className="leading-8">
                                        이고, C의 진술도
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{C가 범인이다}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 B와 C의 진술은 같은 내용이므로
                                        두 진술의 참과 거짓도 항상 같습니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 진실을 말한 사람을 찾습니다.
                                    </p>

                                    <p className="leading-8">
                                        B의 말이 참이면 C의 말도 참이고,
                                        C의 말이 참이면 B의 말도 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그런데 세 사람 중{" "}
                                        <span className="font-bold text-yellow-300">
                                            한 명만 진실
                                        </span>
                                        을 말했다고 하였으므로
                                        B와 C의 말은 모두 거짓이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B:\text{ 거짓},
\qquad
C:\text{ 거짓}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 진실을 말한 사람은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{\text{A}}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 범인을 찾습니다.
                                    </p>

                                    <p className="leading-8">
                                        A의 진술이 참이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{A는 범인이 아니다}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한 B와 C의 진술
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{C가 범인이다}
`}
                                    />

                                    <p className="leading-8">
                                        가 거짓이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{C는 범인이 아니다}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 A와 C는 범인이 아니므로 범인은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{\text{B}}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ① A, B
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        B와 C의 진술은 표현만 다를 뿐
                                        모두
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{C가 범인이다}
`}
                                    />

                                    <p className="leading-8">
                                        라는 같은 명제입니다.
                                        따라서 두 사람의 진술은 동시에 참이거나 동시에 거짓입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        한 명만 진실을 말했으므로 B와 C는 모두 거짓이고,
                                        A만 참입니다. 그 결과 A와 C는 범인이 아니므로
                                        범인은 B입니다.
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
                                다음 두 명제가 참이라고 할 때, 다음 중 항상 참인 명제인 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    (가) 수학을 좋아하는 사람은 경제 관념이 좋다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    (나) 수학을 좋아하지 않는 사람은 투자에 관심이 없다.
                                </p>

                            </div>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <div>
                                    ① 수학을 좋아하는 사람은 투자에 관심이 있다.
                                </div>

                                <div>
                                    ② 경제 관념이 좋은 사람은 수학을 좋아한다.
                                </div>

                                <div>
                                    ③ 경제 관념이 좋지 않은 사람은 투자에 관심이 있다.
                                </div>

                                <div>
                                    ④ 투자에 관심이 있는 사람은 경제 관념이 좋다.
                                </div>

                                <div>
                                    ⑤ 투자에 관심이 없는 사람은 수학을 좋아하지 않는다.
                                </div>

                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 주어진 문장을 간단한 수학 기호로 표현합니다.
                                    </p>

                                    <p className="leading-8">
                                        (가) 수학을 좋아하는 사람은 경제 관념이 좋다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{수학}\to\text{경제}
`}
                                    />

                                    <p className="mt-4 leading-8">
                                        (나) 수학을 좋아하지 않는 사람은 투자에 관심이 없다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim\text{수학}\to\sim\text{투자}
`}
                                    />

                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 공통으로 등장하는 조건을 연결합니다.
                                    </p>

                                    <p className="leading-8">
                                        두 명제에서 공통으로 등장하는 조건은{" "}
                                        <span className="font-bold text-yellow-300">
                                            수학
                                        </span>
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{수학}\to\text{경제},
\qquad
\sim\text{수학}\to\sim\text{투자}
`}
                                    />

                                    <p className="leading-8">
                                        는 그대로 연결되지 않으므로 두 번째 명제의 대우를 취합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim\text{수학}\to\sim\text{투자}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\Downarrow\quad\text{대우}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\text{투자}\to\text{수학}
`}
                                    />

                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 삼단논법을 적용합니다.
                                    </p>

                                    <p className="leading-8">
                                        이제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{투자}\to\text{수학},
\qquad
\text{수학}\to\text{경제}
`}
                                    />

                                    <p className="leading-8">
                                        로 연결되므로 삼단논법에 의하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{투자}\to\text{경제}
`}
                                    />

                                    <p className="leading-8">
                                        를 얻습니다.
                                    </p>

                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 얻어진 수학 기호를 다시 문장으로 표현합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{투자}\to\text{경제}
`}
                                    />

                                    <p className="text-center leading-8 text-white">
                                        투자에 관심이 있는 사람은 경제 관념이 좋다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        따라서 ④가 항상 참입니다.
                                    </p>

                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ④
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        문장으로 주어진 명제는 먼저 핵심 조건만 남겨
                                        간단하게 표현합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{수학}\to\text{경제}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\sim\text{수학}\to\sim\text{투자}
`}
                                    />

                                    <p className="leading-8">
                                        공통 조건인 <InlineMath math="\text{수학}" />이
                                        연결되도록 두 번째 명제의 대우를 취하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{투자}\to\text{수학}
\to\text{경제}
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{투자}\to\text{경제}
`}
                                    />

                                    <p className="leading-8">
                                        를 얻습니다. 마지막에는 수학 기호를 다시 문장으로
                                        해석하여 보기를 찾습니다.
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
                                다음 두 명제가 모두 참일 때, 명제
                                ‘인지도가 높아지면 수입이 증가한다.’가 참이려면
                                하나의 참인 명제가 더 필요하다.
                                다음 중 필요한 명제로 가능한 것을 모두 고르면? (정답 2개)
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    (가) 판매량이 증가하지 않으면 인지도가 높아지지 않는다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    (나) 가격이 상승하면 수입이 증가한다.
                                </p>

                            </div>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <div>
                                    ① 판매량이 증가하면 인지도가 높아진다.
                                </div>

                                <div>
                                    ② 판매량이 증가하지 않으면 가격이 상승하지 않는다.
                                </div>

                                <div>
                                    ③ 인지도가 높아지면 가격이 상승한다.
                                </div>

                                <div>
                                    ④ 가격이 상승하면 인지도가 높아진다.
                                </div>

                                <div>
                                    ⑤ 가격이 상승하지 않으면 판매량이 증가하지 않는다.
                                </div>

                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 주어진 문장을 간단한 수학 기호로 표현합니다.
                                    </p>

                                    <p className="leading-8">
                                        (가)는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim\text{판매량}\to\sim\text{인지도}
`}
                                    />

                                    <p className="leading-8">
                                        이고, (나)는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{가격}\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 첫 번째 명제의 대우를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim\text{판매량}\to\sim\text{인지도}
`}
                                    />

                                    <p className="leading-8">
                                        의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{판매량}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 현재 알고 있는 명제는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{판매량},
\qquad
\text{가격}\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 목표 명제가 되도록 연결 조건을 찾습니다.
                                    </p>

                                    <p className="leading-8">
                                        얻고자 하는 명제는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 인지도에서 출발하여 수입까지 이어지는
                                        연결을 만들면 됩니다.
                                    </p>

                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ ③을 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        ③은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{가격}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        주어진 (나)와 연결하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{가격}
\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        이므로 삼단논법에 의하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        을 얻습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <span className="font-bold text-white">③은 가능</span>합니다.
                                    </p>

                                </div>


                                {/* 5 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑤ ⑤를 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        ⑤는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim\text{가격}\to\sim\text{판매량}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 명제의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{판매량}\to\text{가격}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{판매량}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\text{판매량}\to\text{가격}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\text{가격}\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        을 차례로 연결하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}
\to\text{판매량}
\to\text{가격}
\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        을 얻습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <span className="font-bold text-white">⑤도 가능</span>합니다.
                                    </p>

                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ③, ⑤
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 주어진 명제의 대우를 이용하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{판매량}
`}
                                    />

                                    <p className="leading-8">
                                        을 얻습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        목표는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        이므로 시작인 <InlineMath math="\text{인지도}" />와
                                        끝인 <InlineMath math="\text{수입}" />이 연결되도록
                                        중간 명제를 찾습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        ③을 이용하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}\to\text{가격}\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        이 되고, ⑤의 대우를 이용하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{인지도}
\to\text{판매량}
\to\text{가격}
\to\text{수입}
`}
                                    />

                                    <p className="leading-8">
                                        이 됩니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        즉,{" "}
                                        <span className="font-bold text-yellow-300">
                                            목표 명제의 시작에서 끝까지 이어지는 길을 만드는 것
                                        </span>
                                        이 핵심입니다.
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

                        <div className="space-y-5">

                            <div>
                                <p className="font-bold text-white">
                                    ① 삼단논법
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q,\quad q\to r
\quad\Longrightarrow\quad
p\to r
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ② 진리집합의 포함관계
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset Q,\quad Q\subset R
\quad\Longrightarrow\quad
P\subset R
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ③ 바로 연결되지 않으면 대우를 생각합니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    앞 명제의 결론과 뒤 명제의 가정이 같아지도록
                                    필요한 명제의 대우를 취합니다.
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ④ 연결되는 조건을 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to\boxed{q},
\qquad
\boxed{q}\to r
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    처럼 같은 조건이 가운데에서 연결되는지를 확인하는 것이
                                    가장 중요합니다.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* 2.18 충분조건과 필요조건 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.18 충분조건과 필요조건
                </h2>

                <p className="leading-8 text-gray-300">
                    두 조건 사이의 관계를 이용하여 충분조건과 필요조건을 판단하는
                    방법을 알아봅니다. 충분조건과 필요조건을 판단할 때에는
                    원명제와 역명제의 참, 거짓을 모두 확인하는 것이 중요합니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 충분조건과 필요조건의 판정
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 조건 <InlineMath math="p,\ q" />에 대하여 충분조건과
                            필요조건을 판단하려면 먼저 원명제
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            와 그 역
                        </p>

                        <BlockMath
                            math={String.raw`
q\to p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 참, 거짓을 <span className="font-bold text-white">모두 확인</span>해야
                            합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                가장 중요한 판정 원칙
                            </p>

                            <p className="leading-8 text-gray-300">
                                충분조건과 필요조건을 판정할 때에는
                                원명제와 역명제의 참, 거짓을 반드시 모두 확인하고,
                                <span className="font-bold text-white">
                                    {" "}참인 명제를 기준으로 판단
                                </span>
                                합니다.
                            </p>

                        </div>

                    </div>


                    {/* 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 참인 명제에서 충분조건과 필요조건
                        </h3>

                        <p className="leading-8 text-gray-300">
                            명제
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 참이라고 하겠습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이때 <InlineMath math="p" />이면{" "}
                            <InlineMath math="q" />가 되기에 충분하므로
                            <InlineMath math="p" />는 <InlineMath math="q" />이기 위한{" "}
                            <span className="font-bold text-yellow-300">
                                충분조건
                            </span>
                            입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            반대로 <InlineMath math="p" />가 되려면 반드시{" "}
                            <InlineMath math="q" />이어야 하므로
                            <InlineMath math="q" />는 <InlineMath math="p" />이기 위한{" "}
                            <span className="font-bold text-blue-300">
                                필요조건
                            </span>
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <BlockMath
                                math={String.raw`
p\to q\text{가 참}
`}
                            />

                            <BlockMath
                                math={String.raw`
p:\ q\text{이기 위한 충분조건}
`}
                            />

                            <BlockMath
                                math={String.raw`
q:\ p\text{이기 위한 필요조건}
`}
                            />

                        </div>

                    </div>


                    {/* 3 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 진리집합으로 이해하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조건 <InlineMath math="p,\ q" />의 진리집합을 각각{" "}
                            <InlineMath math="P,\ Q" />라 하겠습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            명제 <InlineMath math="p\to q" />가 참이라는 것은
                        </p>

                        <BlockMath
                            math={String.raw`
P\subset Q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            와 같습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 참인 명제에서 진리집합의 포함관계를 보면
                        </p>

                        <BlockMath
                            math={String.raw`
P\subset Q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로 작은 집합 <InlineMath math="P" />에 해당하는 조건{" "}
                            <InlineMath math="p" />가 충분조건이고,
                            큰 집합 <InlineMath math="Q" />에 해당하는 조건{" "}
                            <InlineMath math="q" />가 필요조건입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                기억하기
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{참인 명제에서 작은 집합은 충분조건, 큰 집합은 필요조건}
}
`}
                            />

                            <BlockMath
                                math={String.raw`
P\subset Q
\quad\Longrightarrow\quad
\begin{cases}
p:\text{ 충분조건}\\
q:\text{ 필요조건}
\end{cases}
`}
                            />

                        </div>

                    </div>


                    {/* 4 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 원명제와 역명제의 참, 거짓
                        </h3>

                        <p className="leading-8 text-gray-300">
                            충분조건과 필요조건은 원명제와 역명제의 참, 거짓에 따라
                            네 가지 경우로 나눌 수 있습니다.
                        </p>


                        {/* 참 참 */}
                        <div className="mt-5">

                            <p className="font-bold text-white">
                                ① 원명제 참, 역명제 참
                            </p>

                            <BlockMath
                                math={String.raw`
p\to q:\text{ 참},
\qquad
q\to p:\text{ 참}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                두 방향이 모두 참이므로 <InlineMath math="p" />는{" "}
                                <InlineMath math="q" />이기 위한 충분조건이면서
                                필요조건입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
p:\ q\text{이기 위한 필요충분조건}
`}
                            />

                        </div>


                        {/* 참 거짓 */}
                        <div className="mt-6">

                            <p className="font-bold text-white">
                                ② 원명제 참, 역명제 거짓
                            </p>

                            <BlockMath
                                math={String.raw`
p\to q:\text{ 참},
\qquad
q\to p:\text{ 거짓}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                참인 명제 <InlineMath math="p\to q" />를 기준으로 판단합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
p:\ q\text{이기 위한 충분조건}
`}
                            />

                            <BlockMath
                                math={String.raw`
q:\ p\text{이기 위한 필요조건}
`}
                            />

                        </div>


                        {/* 거짓 참 */}
                        <div className="mt-6">

                            <p className="font-bold text-white">
                                ③ 원명제 거짓, 역명제 참
                            </p>

                            <BlockMath
                                math={String.raw`
p\to q:\text{ 거짓},
\qquad
q\to p:\text{ 참}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이 경우에는 거짓인 원명제가 아니라
                                <span className="font-bold text-yellow-300">
                                    {" "}참인 역명제
                                </span>
                                를 기준으로 판단합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
q\to p
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가 참이므로
                            </p>

                            <BlockMath
                                math={String.raw`
q:\ p\text{이기 위한 충분조건}
`}
                            />

                            <BlockMath
                                math={String.raw`
p:\ q\text{이기 위한 필요조건}
`}
                            />

                        </div>


                        {/* 거짓 거짓 */}
                        <div className="mt-6">

                            <p className="font-bold text-white">
                                ④ 원명제 거짓, 역명제 거짓
                            </p>

                            <BlockMath
                                math={String.raw`
p\to q:\text{ 거짓},
\qquad
q\to p:\text{ 거짓}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                어느 방향의 명제도 참이 아니므로{" "}
                                <InlineMath math="p" />는 <InlineMath math="q" />이기 위한
                                충분조건도 필요조건도 아닙니다.
                            </p>

                            <BlockMath
                                math={String.raw`
p:\ q\text{이기 위한 아무 조건도 아니다}
`}
                            />

                        </div>

                    </div>


                    {/* 5 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 네 가지 경우의 정리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                            어떤 조건인지를 판단하면 다음과 같습니다.
                        </p>

                        <div className="mt-5 overflow-x-auto">
                            <table className="w-full min-w-[650px] border-collapse text-center text-gray-300">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="p-4">
                                            <InlineMath math="p\to q" />
                                        </th>
                                        <th className="p-4">
                                            <InlineMath math="q\to p" />
                                        </th>
                                        <th className="p-4">
                                            <InlineMath math="p" />는{" "}
                                            <InlineMath math="q" />이기 위한
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b border-white/10">
                                        <td className="p-4">참</td>
                                        <td className="p-4">참</td>
                                        <td className="p-4 font-bold text-yellow-300">
                                            필요충분조건
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-4">참</td>
                                        <td className="p-4">거짓</td>
                                        <td className="p-4 font-bold text-yellow-300">
                                            충분조건
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-4">거짓</td>
                                        <td className="p-4">참</td>
                                        <td className="p-4 font-bold text-blue-300">
                                            필요조건
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-4">거짓</td>
                                        <td className="p-4">거짓</td>
                                        <td className="p-4">
                                            아무 조건도 아님
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>


                    {/* 6 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 문장의 주어를 확인하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            충분조건과 필요조건을 묻는 문장에서는
                            <span className="font-bold text-yellow-300">
                                {" "}어떤 조건이 주어인지
                            </span>
                            를 정확히 확인해야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                다음과 같은 문장이 있다고 하겠습니다.
                            </p>

                            <p className="mt-4 text-center text-lg font-bold text-white">
                                A는 B이기 위한 (　)조건이다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                이 문장에서 묻는 것은
                            </p>

                            <p className="mt-2 text-center font-bold text-yellow-300">
                                A가 어떤 조건인가?
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 먼저
                        </p>

                        <BlockMath
                            math={String.raw`
A\to B,
\qquad
B\to A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 참, 거짓을 확인한 후
                            <span className="font-bold text-white"> A가 충분조건인지,
                                필요조건인지</span>를 답해야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="mb-3 font-bold text-red-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                A와 B의 관계를 정확히 구했더라도 문장의 주어를
                                반대로 읽으면 충분조건과 필요조건을 반대로 답하게 됩니다.
                            </p>

                        </div>

                    </div>


                    {/* 7 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 필요충분조건과 동치
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원명제와 역명제가 모두 참이면
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q,
\qquad
q\to p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 모두 성립합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            진리집합으로 나타내면
                        </p>

                        <BlockMath
                            math={String.raw`
P\subset Q,
\qquad
Q\subset P
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
P=Q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이때 <InlineMath math="p" />는 <InlineMath math="q" />이기 위한
                            필요조건이면서 충분조건이므로{" "}
                            <span className="font-bold text-yellow-300">
                                필요충분조건
                            </span>
                            이라고 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            또한 두 조건 <InlineMath math="p,\ q" />는 서로{" "}
                            <span className="font-bold text-white">동치</span>라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <BlockMath
                                math={String.raw`
p\to q,\quad q\to p
`}
                            />

                            <BlockMath
                                math={String.raw`
\Updownarrow
`}
                            />

                            <BlockMath
                                math={String.raw`
P=Q
`}
                            />

                            <BlockMath
                                math={String.raw`
\Updownarrow
`}
                            />

                            <BlockMath
                                math={String.raw`
p\Longleftrightarrow q
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                <InlineMath math="p" />와 <InlineMath math="q" />는 동치
                            </p>

                        </div>

                    </div>


                    {/* 8 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            8. 충분조건과 필요조건을 판단하는 순서
                        </h3>

                        <p className="leading-8 text-gray-300">
                            문제를 풀 때에는 다음 순서로 판단하면 됩니다.
                        </p>

                        <div className="mt-5 space-y-5">

                            <div>
                                <p className="font-bold text-white">
                                    ① 원명제와 역명제를 모두 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q,
\qquad
q\to p
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ② 각각의 참, 거짓을 판단합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{원명제}:\text{ 참 또는 거짓}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\text{역명제}:\text{ 참 또는 거짓}
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ③ 참인 명제를 기준으로 판단합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{작은 집합}
\quad\longrightarrow\quad
\text{큰 집합}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\text{충분조건}
\quad\longrightarrow\quad
\text{필요조건}
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ④ 마지막으로 문장의 주어를 확인합니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    「A는 B이기 위한 (　)조건이다.」에서는
                                    <span className="font-bold text-yellow-300">
                                        {" "}A가 어떤 조건인지
                                    </span>
                                    답합니다.
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
                                실수 <InlineMath math="x,\ y" />와 집합{" "}
                                <InlineMath math="A,\ B" />에 대하여 다음 중 조건{" "}
                                <InlineMath math="p" />가 조건 <InlineMath math="q" />이기 위한
                                필요조건이지만 충분조건이 아닌 것은?
                            </p>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div className="grid gap-2 md:grid-cols-[240px_1fr]">
                                    <div>
                                        ① <InlineMath math="p:x=2" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:x^2=4" />
                                    </div>
                                </div>

                                <div className="grid gap-2 md:grid-cols-[240px_1fr]">
                                    <div>
                                        ② <InlineMath math="p:x+y>0" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:x>0,\ y>0" />
                                    </div>
                                </div>

                                <div className="grid gap-2 md:grid-cols-[240px_1fr]">
                                    <div>
                                        ③ <InlineMath math="p:x^2+y^2=0" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:x=y=0" />
                                    </div>
                                </div>

                                <div className="grid gap-2 md:grid-cols-[240px_1fr]">
                                    <div>
                                        ④ <InlineMath math="p:x>y>0" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:\dfrac{y}{x}<1" />
                                    </div>
                                </div>

                                <div className="grid gap-2 md:grid-cols-[240px_1fr]">
                                    <div>
                                        ⑤ <InlineMath math="p:A\cap B=\varnothing" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:A\subset B^C" />
                                    </div>
                                </div>

                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 필요한 참·거짓의 관계를 먼저 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                        필요조건이지만 충분조건은 아니어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 원명제와 역명제는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q:\text{ 거짓}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
q\to p:\text{ 참}
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        즉, <span className="font-bold text-yellow-300">
                                            참인 역명제 <InlineMath math="q\to p" />를 기준
                                        </span>
                                        으로 보면 <InlineMath math="p" />가 필요조건입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 각 보기를 확인합니다.
                                    </p>

                                    <p className="font-bold text-white">
                                        ①
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p:x=2,\qquad q:x^2=4
`}
                                    />

                                    <p className="leading-8">
                                        <InlineMath math="x=2" />이면{" "}
                                        <InlineMath math="x^2=4" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q:\text{ 참}
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 조건에 맞지 않습니다.
                                    </p>


                                    <p className="mt-5 font-bold text-white">
                                        ②
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p:x+y>0,\qquad q:x>0,\ y>0
`}
                                    />

                                    <p className="leading-8">
                                        <InlineMath math="x>0,\ y>0" />이면 반드시{" "}
                                        <InlineMath math="x+y>0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p:\text{ 참}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나 예를 들어
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=2,\qquad y=-1
`}
                                    />

                                    <p className="leading-8">
                                        이면 <InlineMath math="x+y=1>0" />이지만{" "}
                                        <InlineMath math="y>0" />은 성립하지 않습니다.
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q:\text{ 거짓}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러므로 <InlineMath math="p" />는{" "}
                                        <InlineMath math="q" />이기 위한{" "}
                                        <span className="font-bold text-yellow-300">
                                            필요조건이지만 충분조건은 아닙니다.
                                        </span>
                                    </p>


                                    <p className="mt-5 font-bold text-white">
                                        ③
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+y^2=0
\quad\Longleftrightarrow\quad
x=y=0
`}
                                    />

                                    <p className="leading-8">
                                        두 방향이 모두 참이므로 필요충분조건입니다.
                                    </p>


                                    <p className="mt-5 font-bold text-white">
                                        ④
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="x>y>0" />이면{" "}
                                        <InlineMath math="x>0" />이므로 양변을{" "}
                                        <InlineMath math="x" />로 나누어
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac{y}{x}<1
`}
                                    />

                                    <p className="leading-8">
                                        을 얻습니다. 따라서 <InlineMath math="p\to q" />가
                                        참이므로 <InlineMath math="p" />는 충분조건입니다.
                                    </p>


                                    <p className="mt-5 font-bold text-white">
                                        ⑤
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\cap B=\varnothing
\quad\Longleftrightarrow\quad
A\subset B^C
`}
                                    />

                                    <p className="leading-8">
                                        두 조건은 동치이므로 필요충분조건입니다.
                                    </p>

                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ②
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        충분조건과 필요조건을 판단할 때에는 먼저
                                        원명제와 역명제의 참, 거짓을 모두 확인합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q:\text{ 거짓},
\qquad
q\to p:\text{ 참}
`}
                                    />

                                    <p className="leading-8">
                                        이 문제에서는 참인 명제
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
`}
                                    />

                                    <p className="leading-8">
                                        를 기준으로 판단하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q:\text{ 충분조건},
\qquad
p:\text{ 필요조건}
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 <InlineMath math="p" />는{" "}
                                        <InlineMath math="q" />이기 위한 필요조건이지만
                                        충분조건은 아닙니다.
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
                                전체집합 <InlineMath math="U" />에 대하여 세 조건{" "}
                                <InlineMath math="p,\ q,\ r" />의 진리집합을 각각{" "}
                                <InlineMath math="P,\ Q,\ R" />이라 하자.{" "}
                                <InlineMath math="\sim p" />는 <InlineMath math="\sim q" />이기 위한
                                충분조건이고, <InlineMath math="r" />은{" "}
                                <InlineMath math="p" />이기 위한 필요조건일 때,
                                다음 중 항상 옳은 것은?
                            </p>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>
                                    ① <InlineMath math="(P\cap R)\subset Q" />
                                </div>

                                <div>
                                    ② <InlineMath math="R\subset(P\cup Q)" />
                                </div>

                                <div>
                                    ③ <InlineMath math="P\subset(Q\cup R)" />
                                </div>

                                <div>
                                    ④ <InlineMath math="Q-R=P" />
                                </div>

                                <div>
                                    ⑤ <InlineMath math="R^C\subset(P\cap Q^C)" />
                                </div>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 충분조건을 명제로 나타냅니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\sim p" />는{" "}
                                        <InlineMath math="\sim q" />이기 위한 충분조건이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        가 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 명제의 대우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
`}
                                    />

                                    <p className="leading-8">
                                        이므로 진리집합의 포함관계는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset P
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 필요조건을 명제로 나타냅니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="r" />은 <InlineMath math="p" />이기 위한
                                        필요조건입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        즉, <InlineMath math="p" />가 성립하려면{" "}
                                        <InlineMath math="r" />이 반드시 성립해야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to r
`}
                                    />

                                    <p className="leading-8">
                                        가 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 진리집합의 포함관계는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset R
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 포함관계를 연결합니다.
                                    </p>

                                    <p className="leading-8">
                                        앞에서 구한 두 관계를 연결하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset P,
\qquad
P\subset R
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset P\subset R
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 보기를 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="P\subset R" />이므로{" "}
                                        <InlineMath math="P" />의 모든 원소는 이미{" "}
                                        <InlineMath math="R" />에 포함되어 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset R\subset Q\cup R
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset(Q\cup R)
`}
                                    />

                                    <p className="leading-8">
                                        는 항상 성립합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 ③이 항상 옳습니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ③
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        충분조건과 필요조건을 먼저 명제의 방향으로
                                        정확하게 바꾸는 것이 중요합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\text{가 }\sim q\text{의 충분조건}
\quad\Longrightarrow\quad
\sim p\to\sim q
`}
                                    />

                                    <p className="leading-8">
                                        대우를 취하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
\quad\Longrightarrow\quad
Q\subset P
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        또
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r\text{이 }p\text{의 필요조건}
\quad\Longrightarrow\quad
p\to r
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
P\subset R
`}
                                    />

                                    <p className="leading-8">
                                        이므로 최종적으로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset P\subset R
`}
                                    />

                                    <p className="leading-8">
                                        을 얻습니다.
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
                                전체집합 <InlineMath math="U" />에 대하여 세 조건{" "}
                                <InlineMath math="p,\ q,\ r" />의 진리집합을 각각{" "}
                                <InlineMath math="P,\ Q,\ R" />이라 할 때,
                            </p>

                            <BlockMath
                                math={String.raw`
(P-Q)\cup(Q-R^C)=\varnothing
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이 성립한다. [보기]에서 항상 옳은 것만을 있는 대로 고른 것은?
                                (단, <InlineMath math="P,\ Q,\ R" />은 공집합이 아니다.)
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    [보기]
                                </p>

                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        ㄱ. <InlineMath math="p" />는 <InlineMath math="q" />이기 위한
                                        충분조건이다.
                                    </div>

                                    <div>
                                        ㄴ. <InlineMath math="\sim r" />은 <InlineMath math="q" />이기 위한
                                        필요조건이다.
                                    </div>

                                    <div>
                                        ㄷ. <InlineMath math="\sim r" />은 <InlineMath math="p" />이기 위한
                                        충분조건이다.
                                    </div>
                                </div>

                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄴ</div>
                                <div>③ ㄱ, ㄴ</div>
                                <div>④ ㄴ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 주어진 집합의 식을 포함관계로 바꿉니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(P-Q)\cup(Q-R^C)=\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        합집합이 공집합이므로 두 집합이 각각 공집합이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P-Q=\varnothing,
\qquad
Q-R^C=\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q,
\qquad
Q\subset R^C
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q\subset R^C
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 포함관계를 명제로 나타냅니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="P\subset Q" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
`}
                                    />

                                    <p className="leading-8">
                                        가 참입니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        또 <InlineMath math="Q\subset R^C" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        가 참입니다.
                                    </p>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ ㄱ을 판단합니다.
                                    </p>

                                    <p className="leading-8">
                                        ㄱ에서 묻는 것은 <InlineMath math="p" />가{" "}
                                        <InlineMath math="q" />이기 위한 어떤 조건인지입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        앞에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
`}
                                    />

                                    <p className="leading-8">
                                        가 참임을 알았으므로 <InlineMath math="p" />는{" "}
                                        <InlineMath math="q" />이기 위한{" "}
                                        <span className="font-bold text-yellow-300">
                                            충분조건
                                        </span>
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <span className="font-bold text-white">ㄱ은 참</span>입니다.
                                    </p>
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ ㄴ을 판단합니다.
                                    </p>

                                    <p className="leading-8">
                                        ㄴ은 <InlineMath math="\sim r" />이{" "}
                                        <InlineMath math="q" />이기 위한 필요조건인지 묻고 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="\sim r" />이{" "}
                                        <InlineMath math="q" />의 필요조건이 되려면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        가 참이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그런데 앞에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset R^C
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="q\to\sim r" />가 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <span className="font-bold text-white">ㄴ은 참</span>입니다.
                                    </p>
                                </div>


                                {/* 5 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑤ ㄷ을 판단합니다.
                                    </p>

                                    <p className="leading-8">
                                        ㄷ은 <InlineMath math="\sim r" />이{" "}
                                        <InlineMath math="p" />이기 위한 충분조건인지 묻고 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이것이 참이려면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim r\to p
`}
                                    />

                                    <p className="leading-8">
                                        즉,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
R^C\subset P
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나 주어진 관계는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P\subset Q\subset R^C
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="R^C\subset P" />라고 할 수 없습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <span className="font-bold text-white">ㄷ은 거짓</span>입니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ③ ㄱ, ㄴ
                                    </p>

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 집합의 식을 진리집합의 포함관계로 바꿉니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(P-Q)\cup(Q-R^C)=\varnothing
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\Downarrow
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
P\subset Q\subset R^C
`}
                                    />

                                    <p className="leading-8">
                                        참인 명제의 방향으로 보면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q,
\qquad
q\to\sim r
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 작은 진리집합에 해당하는 조건은 충분조건,
                                        큰 진리집합에 해당하는 조건은 필요조건이라는 관계를 이용하여
                                        각 문장을 판단합니다.
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
                                    전체집합 <InlineMath math="U" />에 대하여 세 조건{" "}
                                    <InlineMath math="p,\ q,\ r" />의 진리집합이 각각{" "}
                                    <InlineMath math="P,\ Q,\ R" />이다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    세 집합 <InlineMath math="P,\ Q,\ R" /> 사이의 포함 관계가
                                    오른쪽 벤 다이어그램과 같을 때, 다음 중 옳지 않은 것은?
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/2.18_4.png"
                                    alt="집합 Q와 R이 집합 P 안에 있고 서로 겹치지 않는 벤 다이어그램"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>
                            <div className="mt-5 space-y-4 text-gray-300">

                                <div>
                                    ① <InlineMath math="p" />는 <InlineMath math="q" />이기 위한
                                    필요조건이다.
                                </div>

                                <div>
                                    ② <InlineMath math="r" />은 <InlineMath math="p" />이기 위한
                                    충분조건이다.
                                </div>

                                <div>
                                    ③ <InlineMath math="q" />는 <InlineMath math="\sim r" />이기 위한
                                    충분조건이다.
                                </div>

                                <div>
                                    ④ <InlineMath math="\sim q" />는 <InlineMath math="\sim p" />이기 위한
                                    필요조건이다.
                                </div>

                                <div>
                                    ⑤ <InlineMath math="\sim r" />은 <InlineMath math="\sim p" />이기 위한
                                    충분조건이다.
                                </div>

                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    벤 다이어그램에서 <InlineMath math="Q" />와{" "}
                                    <InlineMath math="R" />은 모두 <InlineMath math="P" />에
                                    포함되고, <InlineMath math="Q" />와{" "}
                                    <InlineMath math="R" />은 서로 겹치지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset P,\qquad
R\subset P,\qquad
Q\cap R=\varnothing
`}
                                />

                                <p className="leading-8">
                                    따라서 다음 명제들이 참입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
q\to p,\qquad
r\to p,\qquad
q\to\sim r
`}
                                />

                                <p className="leading-8">
                                    그러므로 ①에서 <InlineMath math="p" />는{" "}
                                    <InlineMath math="q" />이기 위한 필요조건이고,
                                    ②에서 <InlineMath math="r" />은{" "}
                                    <InlineMath math="p" />이기 위한 충분조건이며,
                                    ③에서 <InlineMath math="q" />는{" "}
                                    <InlineMath math="\sim r" />이기 위한 충분조건입니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="Q\subset P" />에서 여집합을 취하면
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\subset Q^C
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\to\sim q
`}
                                />

                                <p className="leading-8">
                                    가 참입니다. 따라서 <InlineMath math="\sim q" />는{" "}
                                    <InlineMath math="\sim p" />이기 위한 필요조건이므로
                                    ④도 옳습니다.
                                </p>

                                <p className="leading-8">
                                    또 <InlineMath math="R\subset P" />에서 여집합을 취하면
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\subset R^C
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 ⑤에서 <InlineMath math="\sim r" />이{" "}
                                    <InlineMath math="\sim p" />이기 위한 충분조건이 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim r\to\sim p
`}
                                />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath
                                    math={String.raw`
R^C\subset P^C
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다. 실제 포함관계는 반대이므로 ⑤는 옳지 않습니다.
                                </p>


                                {/* 정답 */}
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


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        벤 다이어그램에서 먼저 진리집합의 포함관계를 읽고,
                                        이를 참인 명제로 바꾸어 충분조건과 필요조건을 판단합니다.
                                        특히 여집합을 취하면 포함관계의 방향이 반대로 바뀐다는
                                        점에 주의합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset P
\quad\Longrightarrow\quad
P^C\subset Q^C
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
R\subset P
\quad\Longrightarrow\quad
P^C\subset R^C
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
                                    전체집합 <InlineMath math="U" />에 대하여 조건{" "}
                                    <InlineMath math="p,\ q,\ r" />의 진리집합을 각각{" "}
                                    <InlineMath math="P,\ Q,\ R" />이라고 할 때,
                                    집합 <InlineMath math="P,\ Q,\ R" /> 사이의 관계를
                                    벤 다이어그램으로 나타내면 오른쪽과 같다.
                                    이때 [보기] 중 항상 옳은 것을 모두 고른 것은?
                                </p>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        [보기]
                                    </p>

                                    <div className="space-y-4 text-gray-300">

                                        <div>
                                            ㄱ. <InlineMath math="\sim p" />는{" "}
                                            <InlineMath math="q" />이기 위한 충분조건이다.
                                        </div>

                                        <div>
                                            ㄴ. <InlineMath math="r" />은{" "}
                                            <InlineMath math="\sim p" />이기 위한 충분조건이다.
                                        </div>

                                        <div>
                                            ㄷ. <InlineMath math="\sim r" />은{" "}
                                            <InlineMath math="\sim q" />이기 위한 필요조건이다.
                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/2.18_5.png"
                                    alt="집합 P와 Q가 일부 겹치고 집합 R이 Q 안에 있는 벤 다이어그램"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                        </div>
                        <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-5">
                            <div>① ㄱ</div>
                            <div>② ㄴ</div>
                            <div>③ ㄷ</div>
                            <div>④ ㄴ, ㄷ</div>
                            <div>⑤ ㄱ, ㄴ, ㄷ</div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    벤 다이어그램에서 <InlineMath math="R" />은{" "}
                                    <InlineMath math="Q" />에 포함되어 있고,
                                    <InlineMath math="P" />와는 겹치지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
R\subset Q,
\qquad
R\subset P^C
`}
                                />

                                <p className="leading-8">
                                    먼저 ㄱ에서 <InlineMath math="\sim p" />가{" "}
                                    <InlineMath math="q" />이기 위한 충분조건이라는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참이라는 뜻입니다. 진리집합으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
P^C\subset Q
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                    그러나 그림에서 <InlineMath math="P" />의 바깥쪽 전체가{" "}
                                    <InlineMath math="Q" />에 포함되는 것은 아니므로
                                    ㄱ은 옳지 않습니다.
                                </p>

                                <p className="leading-8">
                                    ㄴ에서 <InlineMath math="r" />이{" "}
                                    <InlineMath math="\sim p" />이기 위한 충분조건이라는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
r\to\sim p
`}
                                />

                                <p className="leading-8">
                                    가 참이라는 뜻입니다. 그림에서
                                </p>

                                <BlockMath
                                    math={String.raw`
R\subset P^C
`}
                                />

                                <p className="leading-8">
                                    이므로 ㄴ은 옳습니다.
                                </p>

                                <p className="leading-8">
                                    ㄷ에서 <InlineMath math="\sim r" />이{" "}
                                    <InlineMath math="\sim q" />이기 위한 필요조건이라는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim q\to\sim r
`}
                                />

                                <p className="leading-8">
                                    가 참이라는 뜻입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 그림에서
                                </p>

                                <BlockMath
                                    math={String.raw`
R\subset Q
`}
                                />

                                <p className="leading-8">
                                    이므로 여집합의 포함관계는 반대로 되어
                                </p>

                                <BlockMath
                                    math={String.raw`
Q^C\subset R^C
`}
                                />

                                <p className="leading-8">
                                    입니다. 즉,
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim q\to\sim r
`}
                                />

                                <p className="leading-8">
                                    가 참이므로 ㄷ도 옳습니다.
                                </p>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{④\ \text{ㄴ, ㄷ}}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        충분조건과 필요조건을 판단할 때에는 먼저 문장을
                                        참인 명제의 방향으로 바꾼 뒤, 벤 다이어그램의
                                        포함관계와 비교합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
R\subset P^C
\quad\Longrightarrow\quad
r\to\sim p
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
R\subset Q
\quad\Longrightarrow\quad
Q^C\subset R^C
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\sim q\to\sim r
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        특히 필요조건이라는 문장은 방향을 반대로 읽기 쉬우므로
                                        먼저 어떤 명제가 참이어야 하는지를 쓰는 것이 중요합니다.
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
                                네 조건 <InlineMath math="p,\ q,\ r,\ s" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
p\to\sim s,\qquad
\sim p\to\sim r,\qquad
\sim q\to s
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가 모두 참일 때, [보기]에서 항상 옳은 것만을 있는 대로
                                고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    [보기]
                                </p>

                                <div className="space-y-4 text-gray-300">

                                    <div>
                                        ㄱ. <InlineMath math="s" />는{" "}
                                        <InlineMath math="\sim p" />이기 위한 필요조건이다.
                                    </div>

                                    <div>
                                        ㄴ. <InlineMath math="p" />는{" "}
                                        <InlineMath math="q" />이기 위한 충분조건이다.
                                    </div>

                                    <div>
                                        ㄷ. <InlineMath math="q" />는{" "}
                                        <InlineMath math="r" />이기 위한 충분조건이다.
                                    </div>

                                </div>

                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄴ</div>
                                <div>③ ㄱ, ㄴ</div>
                                <div>④ ㄱ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    주어진 세 명제의 대우를 각각 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to\sim s
\quad\Longrightarrow\quad
s\to\sim p
`}
                                />

                                <BlockMath
                                    math={String.raw`
\sim p\to\sim r
\quad\Longrightarrow\quad
r\to p
`}
                                />

                                <BlockMath
                                    math={String.raw`
\sim q\to s
\quad\Longrightarrow\quad
\sim s\to q
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    ㄱ에서 <InlineMath math="s" />가{" "}
                                    <InlineMath math="\sim p" />이기 위한 필요조건이라는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\to s
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 한다는 뜻입니다.
                                    주어진 명제에서는 <InlineMath math="s\to\sim p" />는
                                    알 수 있지만 그 역인 <InlineMath math="\sim p\to s" />는
                                    반드시 참이라고 할 수 없으므로 ㄱ은 옳지 않습니다.
                                </p>

                                <p className="leading-8">
                                    ㄴ에서 <InlineMath math="p" />가{" "}
                                    <InlineMath math="q" />이기 위한 충분조건이라는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 한다는 뜻입니다.
                                </p>

                                <p className="leading-8">
                                    주어진 명제와 세 번째 명제의 대우를 연결하면
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to\sim s,
\qquad
\sim s\to q
`}
                                />

                                <p className="leading-8">
                                    이므로 삼단논법에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참입니다. 따라서 ㄴ은 옳습니다.
                                </p>

                                <p className="leading-8">
                                    ㄷ에서 <InlineMath math="q" />가{" "}
                                    <InlineMath math="r" />이기 위한 충분조건이라는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
q\to r
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 한다는 뜻입니다.
                                    그러나 주어진 명제와 그 대우들을 이용해도{" "}
                                    <InlineMath math="q\to r" />를 얻을 수 없으므로
                                    ㄷ은 옳지 않습니다.
                                </p>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{②\ \text{ㄴ}}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        충분조건과 필요조건의 문장을 먼저 어떤 명제가
                                        참이어야 하는지로 바꾼 뒤, 주어진 명제와 대우를
                                        연결합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim q\to s
\quad\Longrightarrow\quad
\sim s\to q
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to\sim s\to q
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        가 참입니다. 즉 <InlineMath math="p" />는{" "}
                                        <InlineMath math="q" />이기 위한 충분조건입니다.
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
                                세 조건
                            </p>

                            <div className="mt-5 space-y-4 pl-6 text-gray-300">

                                <div>
                                    <InlineMath math="p:x=5," />
                                </div>

                                <div>
                                    <InlineMath math="q:x^2-(a+1)x+a=0," />
                                </div>

                                <div>
                                    <InlineMath math="r:x^2+bx+c=0" />
                                </div>

                            </div>

                            <p className="leading-8 text-gray-300">
                                에 대하여 <InlineMath math="p" />는{" "}
                                <InlineMath math="q" />이기 위한 충분조건이고{" "}
                                <InlineMath math="q" />는 <InlineMath math="r" />이기 위한
                                필요충분조건일 때, <InlineMath math="a+b+c" />의 값을 구하시오.<br />
                                (단, <InlineMath math="a,\ b,\ c" />는 상수이다.)
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    <InlineMath math="p" />는 <InlineMath math="q" />이기 위한
                                    충분조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참입니다.
                                </p>

                                <p className="leading-8">
                                    즉, <InlineMath math="x=5" />이면 반드시{" "}
                                    <InlineMath math="q" />가 성립해야 하므로{" "}
                                    <InlineMath math="x=5" />를
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-(a+1)x+a=0
`}
                                />

                                <p className="leading-8">
                                    에 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
25-5(a+1)+a=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
20-4a=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=5
`}
                                />

                                <p className="leading-8">
                                    따라서 조건 <InlineMath math="q" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-6x+5=0
`}
                                />

                                <p className="leading-8">
                                    이고, 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-1)(x-5)=0
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="q" />의 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
\{1,5\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="q" />는{" "}
                                    <InlineMath math="r" />이기 위한 필요충분조건이므로
                                    원명제와 역명제가 모두 참입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
q\to r,
\qquad
r\to q
`}
                                />

                                <p className="leading-8">
                                    따라서 두 조건은 동치이고 진리집합이 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
Q=R
`}
                                />

                                <p className="leading-8">
                                    그러므로 조건 <InlineMath math="r" />의 이차방정식도
                                    두 근이 <InlineMath math="1,\ 5" />이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+bx+c
=
(x-1)(x-5)
`}
                                />

                                <BlockMath
                                    math={String.raw`
x^2+bx+c
=
x^2-6x+5
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
b=-6,
\qquad
c=5
`}
                                />

                                <p className="leading-8">
                                    이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b+c
=
5-6+5
=
4
`}
                                />


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


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        충분조건은 참인 명제의 방향으로 해석합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\text{는 }q\text{이기 위한 충분조건}
\quad\Longrightarrow\quad
p\to q
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 <InlineMath math="x=5" />는 조건{" "}
                                        <InlineMath math="q" />를 만족해야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        또 필요충분조건인 두 조건은 서로 동치이므로
                                        진리집합이 같습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\Longleftrightarrow r
\quad\Longrightarrow\quad
Q=R
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 두 이차방정식의 근이 같다는 것을 이용하면 됩니다.
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
                                실수 <InlineMath math="x" />에 대한 두 조건
                            </p>

                            <div className="mt-5 space-y-4 pl-6 text-gray-300">

                                <div>
                                    <InlineMath math="p:x^3-6x^2+11x-6=0," />
                                </div>

                                <div>
                                    <InlineMath math="q:x^2+kx-k-1=0" />
                                </div>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                에 대하여 <InlineMath math="p" />가{" "}
                                <InlineMath math="q" />이기 위한 필요조건이 되도록 하는
                                모든 정수 <InlineMath math="k" />의 값의 곱은?
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 조건 <InlineMath math="p" />의 방정식을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^3-6x^2+11x-6
=
(x-1)(x-2)(x-3)
`}
                                />

                                <p className="leading-8">
                                    이므로 조건 <InlineMath math="p" />의 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{1,2,3\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                    필요조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
q\to p
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 합니다. 따라서 진리집합의 포함관계는
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset P
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 조건 <InlineMath math="q" />의 방정식을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x^2+kx-k-1
&=x^2-x+(k+1)x-(k+1)\\
&=(x-1)(x+k+1)
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    이므로 조건 <InlineMath math="q" />의 해는
                                </p>

                                <BlockMath
                                    math={String.raw`
x=1,\qquad x=-k-1
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="Q\subset P" />이어야 하므로
                                    두 번째 해 <InlineMath math="-k-1" />도{" "}
                                    <InlineMath math="P=\{1,2,3\}" />의 원소이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-k-1\in\{1,2,3\}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
-k-1=1,\ 2,\ 3
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
k=-2,\ -3,\ -4
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 모든 정수 <InlineMath math="k" />의 값의 곱은
                                </p>

                                <BlockMath
                                    math={String.raw`
(-2)(-3)(-4)=-24
`}
                                />


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{-24}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        「<InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                        필요조건」이라는 문장에서 참인 명제의 방향을 먼저
                                        정확히 확인합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\text{가 }q\text{이기 위한 필요조건}
\quad\Longrightarrow\quad
q\to p
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
Q\subset P
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        즉, 조건 <InlineMath math="q" />의 모든 해가
                                        조건 <InlineMath math="p" />의 해가 되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P=\{1,2,3\},
\qquad
Q=\{1,-k-1\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 <InlineMath math="-k-1" />이{" "}
                                        <InlineMath math="1,\ 2,\ 3" /> 중 하나가 되도록 하면 됩니다.
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
                                세 조건 <InlineMath math="p,\ q,\ r" />의 진리집합이 각각
                            </p>

                            <BlockMath
                                math={String.raw`
P=\{4\},\qquad
Q=\{1-a,\ 3b-5\},\qquad
R=\{1+a,\ b^2\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이다. <InlineMath math="p" />는 <InlineMath math="r" />이기 위한
                                충분조건이고 <InlineMath math="q" />는{" "}
                                <InlineMath math="p" />이기 위한 필요조건일 때,{" "}
                                <InlineMath math="a+b" />의 최솟값은?
                                (단, <InlineMath math="a,\ b" />는 실수이다.)
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    <InlineMath math="p" />는 <InlineMath math="r" />이기 위한
                                    충분조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to r
`}
                                />

                                <p className="leading-8">
                                    가 참입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset R
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또 <InlineMath math="q" />는 <InlineMath math="p" />이기 위한
                                    필요조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset Q
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그런데
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{4\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="P\subset Q" />와{" "}
                                    <InlineMath math="P\subset R" />가 성립하려면
                                </p>

                                <BlockMath
                                    math={String.raw`
4\in Q,\qquad 4\in R
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="4\in Q" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
1-a=4
\quad\text{또는}\quad
3b-5=4
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-3
\quad\text{또는}\quad
b=3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또 <InlineMath math="4\in R" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
1+a=4
\quad\text{또는}\quad
b^2=4
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=3
\quad\text{또는}\quad
b=\pm2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    두 조건을 동시에 만족시키는{" "}
                                    <InlineMath math="(a,b)" />를 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(a,b)=(-3,2),\ (-3,-2),\ (3,3)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    각각에 대하여 <InlineMath math="a+b" />의 값을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
-3+2=-1
`}
                                />

                                <BlockMath
                                    math={String.raw`
-3+(-2)=-5
`}
                                />

                                <BlockMath
                                    math={String.raw`
3+3=6
`}
                                />

                                <p className="leading-8">
                                    이므로 최솟값은 <InlineMath math="-5" />입니다.
                                </p>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{-5}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        충분조건과 필요조건을 먼저 참인 명제의 방향으로
                                        바꿉니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\text{는 }r\text{의 충분조건}
\quad\Longrightarrow\quad
p\to r
\quad\Longrightarrow\quad
P\subset R
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
q\text{는 }p\text{의 필요조건}
\quad\Longrightarrow\quad
p\to q
\quad\Longrightarrow\quad
P\subset Q
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        여기서 <InlineMath math="P=\{4\}" />이므로 결국
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4\in Q,\qquad 4\in R
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        을 동시에 만족시키는 <InlineMath math="a,\ b" />를 찾는
                                        문제로 바뀝니다.
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
                                실수 <InlineMath math="x" />에 대한 두 조건
                            </p>

                            <div className="mt-5 space-y-4 pl-6 text-gray-300">

                                <div>
                                    <InlineMath math="p:x^2-x-6\ge0," />
                                </div>

                                <div>
                                    <InlineMath math="q:|x-2|\ge a" />
                                </div>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                에 대하여 <InlineMath math="p" />가{" "}
                                <InlineMath math="q" />이기 위한 필요조건이 되도록 하는
                                실수 <InlineMath math="a" />의 최솟값은?
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 조건 <InlineMath math="p" />의 진리집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-x-6\ge0
`}
                                />

                                <p className="leading-8">
                                    인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x+2)(x-3)\ge0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le-2
\quad\text{또는}\quad
x\ge3
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{x\mid x\le-2\text{ 또는 }x\ge3\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                    필요조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
q\to p
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 합니다. 따라서 진리집합의 포함관계는
                                </p>

                                <BlockMath
                                    math={String.raw`
Q\subset P
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    조건 <InlineMath math="q" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
|x-2|\ge a
`}
                                />

                                <p className="leading-8">
                                    입니다. <InlineMath math="Q\subset P" />가 성립하려면{" "}
                                    <InlineMath math="a" />는 양수이어야 하고,
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le2-a
\quad\text{또는}\quad
x\ge2+a
`}
                                />

                                <p className="leading-8">
                                    가 됩니다.
                                </p>

                                <p className="leading-8">
                                    왼쪽 부분이 <InlineMath math="x\le-2" />에 포함되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
2-a\le-2
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a\ge4
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    또 오른쪽 부분이 <InlineMath math="x\ge3" />에 포함되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
2+a\ge3
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a\ge1
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    두 조건을 동시에 만족시켜야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a\ge4
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
\boxed{4}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        「<InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                        필요조건」이므로 참이어야 하는 명제는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\to p
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
Q\subset P
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        가 되도록 해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{x\mid x\le2-a\text{ 또는 }x\ge2+a\}
\subset
\{x\mid x\le-2\text{ 또는 }x\ge3\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        즉, 절댓값 부등식으로 만들어지는 왼쪽과 오른쪽의
                                        두 범위가 각각 조건 <InlineMath math="p" />의 범위 안에
                                        들어가도록 경계를 비교하는 것이 핵심입니다.
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
                                실수 <InlineMath math="x" />에 대하여 세 조건{" "}
                                <InlineMath math="p,\ q,\ r" />이
                            </p>

                            <div className="mt-5 space-y-4 pl-6 text-gray-300">

                                <div>
                                    <InlineMath math="p:-2\le x\le4\text{ 또는 }x\ge7," />
                                </div>

                                <div>
                                    <InlineMath math="q:x\ge a," />
                                </div>

                                <div>
                                    <InlineMath math="r:x\ge b" />
                                </div>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                일 때, <InlineMath math="q" />는 <InlineMath math="p" />이기 위한
                                필요조건이고 <InlineMath math="r" />은{" "}
                                <InlineMath math="p" />이기 위한 충분조건이다.{" "}
                                <InlineMath math="a" />의 최댓값과{" "}
                                <InlineMath math="b" />의 최솟값의 합은?
                                (단, <InlineMath math="a,\ b" />는 실수이다.)
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 조건 <InlineMath math="p" />의 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{x\mid -2\le x\le4\text{ 또는 }x\ge7\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="q" />는 <InlineMath math="p" />이기 위한
                                    필요조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 합니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P\subset Q
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    조건 <InlineMath math="q:x\ge a" />의 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
Q=\{x\mid x\ge a\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="P" />의 가장 작은 값인{" "}
                                    <InlineMath math="-2" />까지 <InlineMath math="Q" />에
                                    포함되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a\le-2
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="a" />의 최댓값은
                                </p>

                                <BlockMath
                                    math={String.raw`
-2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="r" />은{" "}
                                    <InlineMath math="p" />이기 위한 충분조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
r\to p
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 합니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
R\subset P
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    조건 <InlineMath math="r:x\ge b" />의 진리집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
R=\{x\mid x\ge b\}
`}
                                />

                                <p className="leading-8">
                                    입니다. <InlineMath math="R" />의 모든 원소가{" "}
                                    <InlineMath math="P" />에 포함되어야 하는데,{" "}
                                    <InlineMath math="P" />에는
                                </p>

                                <BlockMath
                                    math={String.raw`
4<x<7
`}
                                />

                                <p className="leading-8">
                                    인 부분이 포함되어 있지 않습니다.
                                    따라서 <InlineMath math="R" />은{" "}
                                    <InlineMath math="x\ge7" />인 부분부터 시작해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
b\ge7
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="b" />의 최솟값은
                                </p>

                                <BlockMath
                                    math={String.raw`
7
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그러므로 구하는 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
-2+7=5
`}
                                />


                                {/* 정답 */}
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


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        필요조건과 충분조건을 먼저 참인 명제의 방향으로
                                        바꾸어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q\text{는 }p\text{의 필요조건}
\quad\Longrightarrow\quad
p\to q
\quad\Longrightarrow\quad
P\subset Q
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r\text{은 }p\text{의 충분조건}
\quad\Longrightarrow\quad
r\to p
\quad\Longrightarrow\quad
R\subset P
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 <InlineMath math="Q" />는{" "}
                                        <InlineMath math="P" /> 전체를 포함하도록 왼쪽으로
                                        충분히 넓어져야 하고, <InlineMath math="R" />은{" "}
                                        <InlineMath math="P" /> 안에 완전히 들어가도록
                                        오른쪽 부분에서 시작해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a\le-2,\qquad b\ge7
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
                                두 조건
                            </p>

                            <div className="mt-5 space-y-4 pl-6  text-gray-300">

                                <div>
                                    <InlineMath math="p:|x-a|>2," />
                                </div>

                                <div>
                                    <InlineMath math="q:x^2-x-30<0" />
                                </div>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                에 대하여 <InlineMath math="\sim p" />가{" "}
                                <InlineMath math="q" />이기 위한 충분조건이 되도록 하는
                                정수 <InlineMath math="a" />의 개수는?
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 조건 <InlineMath math="p" />의 부정{" "}
                                    <InlineMath math="\sim p" />를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p:|x-a|>2
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:|x-a|\le2
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a-2\le x\le a+2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편 조건 <InlineMath math="q" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-x-30<0
`}
                                />

                                <p className="leading-8">
                                    을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x+5)(x-6)<0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-5<x<6
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sim p" />가{" "}
                                    <InlineMath math="q" />이기 위한 충분조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 합니다. 따라서 진리집합의 포함관계는
                                </p>

                                <BlockMath
                                    math={String.raw`
\{x\mid a-2\le x\le a+2\}
\subset
\{x\mid -5<x<6\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    왼쪽 범위의 양 끝점도 모두{" "}
                                    <InlineMath math="-5<x<6" /> 안에 들어가야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a-2>-5,
\qquad
a+2<6
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a>-3,
\qquad
a<4
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
-3<a<4
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이를 만족하는 정수 <InlineMath math="a" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
-2,\ -1,\ 0,\ 1,\ 2,\ 3
`}
                                />

                                <p className="leading-8">
                                    이므로 모두 <InlineMath math="6" />개입니다.
                                </p>


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
                                        먼저 <InlineMath math="\sim p" />의 진리집합을 정확히
                                        구한 뒤, 충분조건이므로 작은 진리집합이 큰 진리집합에
                                        포함되도록 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\text{가 }q\text{의 충분조건}
\quad\Longrightarrow\quad
\sim p\to q
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
[a-2,\ a+2]
\subset
\{x\mid -5<x<6\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        특히 바깥쪽 범위가 엄격한 부등식이므로 양 끝점에서
                                        등호가 성립할 수 없습니다.
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a-2>-5,
\qquad
a+2<6
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        로 비교하는 것이 핵심입니다.
                                    </p>

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
                                실수 <InlineMath math="x" />에 대한 두 조건{" "}
                                <InlineMath math="p,\ q" />가 다음과 같다.
                            </p>

                            <div className="mt-5 space-y-4 pl-6 text-gray-300">

                                <div>
                                    <InlineMath math="p:(x-a+6)(x+2a-16)=0," />
                                </div>

                                <div>
                                    <InlineMath math="q:x(x-2a)\le0" />
                                </div>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                충분조건이 되도록 하는 모든 정수 <InlineMath math="a" />의
                                값의 합을 구하시오.
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                    충분조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 합니다. 따라서 조건 <InlineMath math="p" />의
                                    모든 해가 조건 <InlineMath math="q" />를 만족해야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 조건 <InlineMath math="p" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-a+6)(x+2a-16)=0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x=a-6,\qquad x=16-2a
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편 조건 <InlineMath math="q" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
x(x-2a)\le0
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="a" />의 부호에 따라 나누어
                                    생각합니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        <InlineMath math="a\ge0" />일 때
                                    </p>

                                    <p className="leading-8">
                                        조건 <InlineMath math="q" />의 진리집합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
0\le x\le2a
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서 조건 <InlineMath math="p" />의 두 해가 모두
                                        이 범위에 있어야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
0\le a-6\le2a
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
0\le16-2a\le2a
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="leading-8">
                                        첫 번째 부등식에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a\ge6
`}
                                    />

                                    <p className="leading-8">
                                        이고, 두 번째 부등식에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4\le a\le8
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
6\le a\le8
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        <InlineMath math="a<0" />일 때
                                    </p>

                                    <p className="leading-8">
                                        조건 <InlineMath math="q" />의 진리집합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2a\le x\le0
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        그런데
                                    </p>

                                    <BlockMath
                                        math={String.raw`
16-2a>0
`}
                                    />

                                    <p className="leading-8">
                                        이므로 조건 <InlineMath math="p" />의 해{" "}
                                        <InlineMath math="16-2a" />는 조건{" "}
                                        <InlineMath math="q" />의 진리집합에 포함될 수 없습니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서 <InlineMath math="a<0" />인 경우는 없습니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    따라서 가능한 정수 <InlineMath math="a" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
a=6,\ 7,\ 8
`}
                                />

                                <p className="leading-8">
                                    이므로 그 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
6+7+8=21
`}
                                />


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{21}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                        충분조건이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
\quad\Longrightarrow\quad
P\subset Q
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다. 따라서 조건 <InlineMath math="p" />의 두 해
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a-6,\qquad16-2a
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        가 모두 조건 <InlineMath math="q" />의 진리집합에
                                        포함되어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        특히 <InlineMath math="x(x-2a)\le0" />의 범위는{" "}
                                        <InlineMath math="a" />의 부호에 따라 달라지므로{" "}
                                        <InlineMath math="a\ge0" />과{" "}
                                        <InlineMath math="a<0" />을 나누어 확인하는 것이 핵심입니다.
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
                                자연수 <InlineMath math="x" />에 대한 두 조건{" "}
                                <InlineMath math="p,\ q" />가 다음과 같다.
                            </p>

                            <div className="mt-5 space-y-4 pl-6 text-gray-300">

                                <div>
                                    <InlineMath math="p:x^2-2x>0," />
                                </div>

                                <div>
                                    <InlineMath math="q:x^2-ax+b=0" />
                                </div>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                <InlineMath math="\sim p" />가 <InlineMath math="q" />이기 위한
                                필요충분조건이 되도록 하는 두 상수{" "}
                                <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 조건 <InlineMath math="p" />를 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-2x>0
`}
                                />

                                <BlockMath
                                    math={String.raw`
x(x-2)>0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x<0
\quad\text{또는}\quad
x>2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="x" />는 자연수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
p:x\ge3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 조건 <InlineMath math="p" />의 부정은
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:x=1\text{ 또는 }x=2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sim p" />가{" "}
                                    <InlineMath math="q" />이기 위한 필요충분조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\Longleftrightarrow q
`}
                                />

                                <p className="leading-8">
                                    이고, 두 조건의 진리집합은 서로 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(\sim P)=Q
`}
                                />

                                <p className="leading-8">
                                    따라서 조건 <InlineMath math="q" />의 방정식
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-ax+b=0
`}
                                />

                                <p className="leading-8">
                                    의 해는
                                </p>

                                <BlockMath
                                    math={String.raw`
x=1,\qquad x=2
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-ax+b
=
(x-1)(x-2)
`}
                                />

                                <BlockMath
                                    math={String.raw`
x^2-ax+b
=
x^2-3x+2
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a=3,\qquad b=2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b=3+2=5
`}
                                />


                                {/* 정답 */}
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


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        필요충분조건인 두 조건은 서로 동치이므로
                                        진리집합이 같습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\Longleftrightarrow q
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(\sim P)=Q
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        자연수 <InlineMath math="x" />에서{" "}
                                        <InlineMath math="\sim p" />의 진리집합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1,2\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로 조건 <InlineMath math="q" />의 방정식도
                                        두 근이 <InlineMath math="1,\ 2" />가 되어야 합니다.
                                    </p>

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
                                실수 <InlineMath math="x" />에 대한 두 조건{" "}
                                <InlineMath math="p,\ q" />가
                            </p>

                            <div className="mt-5 space-y-4 pl-6 text-gray-300">

                                <div>
                                    <InlineMath math="p:x^2-x-2\ge0," />
                                </div>

                                <div>
                                    <InlineMath math="q:x^2-4x+a<0" />
                                </div>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                일 때, <InlineMath math="\sim p" />가{" "}
                                <InlineMath math="q" />이기 위한 충분조건이 되도록 하는
                                실수 <InlineMath math="a" />의 최댓값은?
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 조건 <InlineMath math="p" />를 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-x-2\ge0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(x+1)(x-2)\ge0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le-1
\quad\text{또는}\quad
x\ge2
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 조건 <InlineMath math="p" />의 부정은
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p:-1<x<2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sim p" />가{" "}
                                    <InlineMath math="q" />이기 위한 충분조건이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sim p\to q
`}
                                />

                                <p className="leading-8">
                                    가 참이어야 합니다. 즉, 모든{" "}
                                    <InlineMath math="-1<x<2" />에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-4x+a<0
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    이차식을 완전제곱식으로 변형하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-4x+a
=
(x-2)^2+a-4
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="-1<x<2" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
0<(x-2)^2<9
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-4x+a
<
9+a-4
=
a+5
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 모든 <InlineMath math="-1<x<2" />에서
                                    주어진 이차식이 음수가 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
a+5\le0
`}
                                />

                                <p className="leading-8">
                                    이어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a\le-5
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    실제로 <InlineMath math="a=-5" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-4x-5
=
(x+1)(x-5)
`}
                                />

                                <p className="leading-8">
                                    이고, <InlineMath math="-1<x<2" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
(x+1)(x-5)<0
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="a=-5" />도 가능합니다.
                                </p>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{-5}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="\sim p" />가{" "}
                                        <InlineMath math="q" />이기 위한 충분조건이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sim p\to q
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        가 참이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-1<x<2
\quad\Longrightarrow\quad
x^2-4x+a<0
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        여기서 <InlineMath math="x=-1" />은 포함되지 않으므로
                                        경계에서 이차식의 값이 <InlineMath math="0" />이 되는 것은
                                        허용됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=-5
\quad\Rightarrow\quad
x^2-4x-5=(x+1)(x-5)
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 열린 범위의 끝점 때문에{" "}
                                        <InlineMath math="a<-5" />가 아니라{" "}
                                        <InlineMath math="a\le-5" />가 되는 것에 주의합니다.
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

                        <div className="space-y-5">

                            <div>
                                <p className="font-bold text-white">
                                    ① 원명제와 역명제를 반드시 모두 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q,
\qquad
q\to p
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ② 참인 명제를 기준으로 판단합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q\text{가 참}
\quad\Longleftrightarrow\quad
P\subset Q
`}
                                />

                                <BlockMath
                                    math={String.raw`
p:\text{ 충분조건},
\qquad
q:\text{ 필요조건}
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ③ 작은 집합은 충분조건, 큰 집합은 필요조건입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{작은 집합}=\text{충분조건},
\qquad
\text{큰 집합}=\text{필요조건}
}
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ④ 원명제와 역명제가 모두 참이면 필요충분조건입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q,\quad q\to p
\quad\Longleftrightarrow\quad
P=Q
`}
                                />

                                <BlockMath
                                    math={String.raw`
p\Longleftrightarrow q
`}
                                />
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ⑤ 원명제와 역명제가 모두 거짓이면 아무 조건도 아닙니다.
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    ⑥ 문장의 주어를 마지막에 반드시 확인합니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    「A는 B이기 위한 (　)조건이다.」에서는
                                    <span className="font-bold text-yellow-300">
                                        {" "}A가 충분조건인지, 필요조건인지
                                    </span>
                                    를 답합니다.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* 2.19 필요충분조건과 해석 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.19 필요충분조건과 해석
                </h2>

                <p className="leading-8 text-gray-300">
                    두 조건이 서로 필요충분조건이면 두 조건은 같은 의미를 나타냅니다.
                    자주 등장하는 식의 필요충분조건을 알아두면 복잡한 식을
                    간단한 조건으로 해석할 수 있습니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 필요충분조건과 동치
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 조건 <InlineMath math="p,\ q" />에 대하여 원명제와
                            역명제가 모두 참이면
                        </p>

                        <BlockMath
                            math={String.raw`
p\to q,
\qquad
q\to p
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 모두 성립합니다.
                            이때 <InlineMath math="p" />와 <InlineMath math="q" />는
                            서로 <span className="font-bold text-yellow-300">필요충분조건</span>이라고
                            하고, 두 조건은 <span className="font-bold text-yellow-300">동치</span>라고
                            합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
p\Longleftrightarrow q
`}
                        />

                        <p className="leading-8 text-gray-300">
                            진리집합을 각각 <InlineMath math="P,\ Q" />라고 하면,
                            두 조건이 동치라는 것은 두 진리집합이 같다는 뜻입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
p\Longleftrightarrow q
\quad\Longleftrightarrow\quad
P=Q
`}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                필요충분조건의 의미
                            </p>

                            <BlockMath
                                math={String.raw`
p\Longleftrightarrow q
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                <InlineMath math="p" />와 <InlineMath math="q" />는
                                서로 다른 표현이지만 같은 조건을 나타냅니다.
                            </p>

                        </div>

                    </div>


                    {/* 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 합이 0인 식의 해석
                        </h3>

                        <p className="leading-8 text-gray-300">
                            각각의 항이 항상 <InlineMath math="0" /> 이상일 때,
                            그 합이 <InlineMath math="0" />이 되려면
                            각 항이 모두 <InlineMath math="0" />이어야 합니다.
                        </p>

                        <div className="mt-5 space-y-5">

                            <BlockMath
                                math={String.raw`
x^2+y^2=0
\quad\Longleftrightarrow\quad
x=0,\ y=0
`}
                            />

                            <BlockMath
                                math={String.raw`
|x|+|y|=0
\quad\Longleftrightarrow\quad
x=0,\ y=0
`}
                            />

                            <BlockMath
                                math={String.raw`
\sqrt{x}+\sqrt{y}=0
\quad\Longleftrightarrow\quad
x=0,\ y=0
\qquad (x\ge0,\ y\ge0)
`}
                            />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            세 식은 모양은 다르지만 모두{" "}
                            <InlineMath math="x=0,\ y=0" />이라는 같은 조건으로
                            해석할 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                해석의 핵심
                            </p>

                            <BlockMath
                                math={String.raw`
A\ge0,\quad B\ge0
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                일 때
                            </p>

                            <BlockMath
                                math={String.raw`
A+B=0
\quad\Longleftrightarrow\quad
A=0,\ B=0
`}
                            />

                        </div>

                    </div>


                    {/* 3 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. <InlineMath math="x^2+xy+y^2=0" />의 해석
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x^2+xy+y^2" />는 바로 두 제곱의 합으로
                            보이지 않으므로 식을 변형합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{aligned}
x^2+xy+y^2
&=\left(x+\frac{y}{2}\right)^2+\frac{3}{4}y^2
\end{aligned}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            오른쪽의 두 항은 모두 <InlineMath math="0" /> 이상입니다.
                            따라서 그 합이 <InlineMath math="0" />이 되려면
                            두 항이 모두 <InlineMath math="0" />이어야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
x^2+xy+y^2=0
`}
                        />

                        <BlockMath
                            math={String.raw`
\Longleftrightarrow
\left(x+\frac{y}{2}\right)^2=0
\quad\text{이고}\quad
\frac34y^2=0
`}
                        />

                        <BlockMath
                            math={String.raw`
\Longleftrightarrow
x=0,\ y=0
`}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <BlockMath
                                math={String.raw`
\boxed{
x^2+xy+y^2=0
\quad\Longleftrightarrow\quad
x=0,\ y=0
}
`}
                            />

                        </div>

                    </div>


                    {/* 4 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 세 수가 모두 같은 조건
                        </h3>

                        <p className="leading-8 text-gray-300">
                            실수 <InlineMath math="x,\ y,\ z" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
(x-y)^2+(y-z)^2+(z-x)^2=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            을 생각해 봅시다.
                            세 항은 모두 <InlineMath math="0" /> 이상이므로
                            합이 <InlineMath math="0" />이면 각각이 모두{" "}
                            <InlineMath math="0" />이어야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
x-y=0,\qquad
y-z=0,\qquad
z-x=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x-y)^2+(y-z)^2+(z-x)^2=0
\quad\Longleftrightarrow\quad
x=y=z
}
`}
                        />

                        <p className="mt-5 leading-8 text-gray-300">
                            반대로 이 조건을 부정하면
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x-y)^2+(y-z)^2+(z-x)^2\ne0
\quad\Longleftrightarrow\quad
x,y,z\text{가 모두 같은 것은 아니다}
}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            즉, <InlineMath math="x,\ y,\ z" /> 중 서로 다른 두 수가
                            적어도 하나 존재한다는 뜻입니다.
                        </p>

                    </div>


                    {/* 5 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 세 수 중 같은 수가 있는 조건
                        </h3>

                        <p className="leading-8 text-gray-300">
                            곱이 <InlineMath math="0" />이라는 것은
                            곱해진 인수 중 적어도 하나가 <InlineMath math="0" />이라는
                            뜻입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
(x-y)(y-z)(z-x)=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
x-y=0
\quad\text{또는}\quad
y-z=0
\quad\text{또는}\quad
z-x=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 따라서
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x-y)(y-z)(z-x)=0
\quad\Longleftrightarrow\quad
x,y,z\text{ 중 같은 두 수가 있다}
}
`}
                        />

                        <p className="mt-5 leading-8 text-gray-300">
                            반대로 곱이 <InlineMath math="0" />이 아니면
                            세 인수가 모두 <InlineMath math="0" />이 아닙니다.
                        </p>

                        <BlockMath
                            math={String.raw`
x-y\ne0,\qquad
y-z\ne0,\qquad
z-x\ne0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            즉,
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x-y)(y-z)(z-x)\ne0
\quad\Longleftrightarrow\quad
x,y,z\text{가 서로 다르다}
}
`}
                        />

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="mb-3 font-bold text-red-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                「세 수가 모두 같은 것은 아니다」와
                                「세 수가 서로 다르다」는 서로 다른 조건입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
x=1,\quad y=1,\quad z=2
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                이면 세 수가 모두 같은 것은 아니지만,
                                세 수가 서로 다른 것도 아닙니다.
                            </p>

                        </div>

                    </div>


                    {/* 6 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 절댓값의 합과 곱의 부호
                        </h3>

                        <p className="leading-8 text-gray-300">
                            실수 <InlineMath math="x,\ y" />에 대하여{" "}
                            <InlineMath math="x" />와 <InlineMath math="y" />의
                            부호가 같거나 둘 중 하나가 <InlineMath math="0" />이면
                        </p>

                        <BlockMath
                            math={String.raw`
|x+y|=|x|+|y|
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다. 이것은 <InlineMath math="xy\ge0" />과
                            동치입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
|x|+|y|=|x+y|
\quad\Longleftrightarrow\quad
xy\ge0
}
`}
                        />

                        <p className="mt-5 leading-8 text-gray-300">
                            반대로 <InlineMath math="x" />와 <InlineMath math="y" />의
                            부호가 서로 다르면
                        </p>

                        <BlockMath
                            math={String.raw`
|x|+|y|>|x+y|
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다. 이것은 <InlineMath math="xy<0" />과
                            동치입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
|x|+|y|>|x+y|
\quad\Longleftrightarrow\quad
xy<0
}
`}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                한눈에 정리
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
xy\ge0
&\quad\Longleftrightarrow\quad
|x|+|y|=|x+y|\\[4pt]
xy<0
&\quad\Longleftrightarrow\quad
|x|+|y|>|x+y|
\end{aligned}
`}
                            />

                        </div>

                    </div>


                    {/* 7 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 식을 조건으로 해석하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            복잡한 식이 주어졌을 때 식 자체를 계산하는 것보다,
                            그 식과 동치인 조건으로 바꾸어 생각하면 문제를
                            간단하게 해결할 수 있습니다.
                        </p>

                        <div className="mt-5 space-y-5">

                            <div>
                                <BlockMath
                                    math={String.raw`
x^2+y^2=0
`}
                                />

                                <p className="text-center text-gray-300">
                                    ↓
                                </p>

                                <BlockMath
                                    math={String.raw`
x=0,\ y=0
`}
                                />
                            </div>

                            <div>
                                <BlockMath
                                    math={String.raw`
(x-y)^2+(y-z)^2+(z-x)^2=0
`}
                                />

                                <p className="text-center text-gray-300">
                                    ↓
                                </p>

                                <BlockMath
                                    math={String.raw`
x=y=z
`}
                                />
                            </div>

                            <div>
                                <BlockMath
                                    math={String.raw`
(x-y)(y-z)(z-x)=0
`}
                                />

                                <p className="text-center text-gray-300">
                                    ↓
                                </p>

                                <BlockMath
                                    math={String.raw`
x=y
\quad\text{또는}\quad
y=z
\quad\text{또는}\quad
z=x
`}
                                />
                            </div>

                            <div>
                                <BlockMath
                                    math={String.raw`
|x|+|y|=|x+y|
`}
                                />

                                <p className="text-center text-gray-300">
                                    ↓
                                </p>

                                <BlockMath
                                    math={String.raw`
xy\ge0
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                두 실수 <InlineMath math="a,\ b" />에 대하여 다음 보기에서
                                조건 <InlineMath math="p" />가 조건 <InlineMath math="q" />이기
                                위한 필요충분조건인 것을 모두 고르면?
                            </p>

                            <div className="mt-6 space-y-5 pl-4 text-gray-300">
                                <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                                    <div>
                                        ㄱ. <InlineMath math="p:a=b" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:|a|=|b|" />
                                    </div>
                                </div>

                                <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                                    <div>
                                        ㄴ. <InlineMath math="p:a>0\text{이고 }b>0" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:ab>0" />
                                    </div>
                                </div>

                                <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                                    <div>
                                        ㄷ. <InlineMath math="p:a^2+b^2=0" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:|a|+|b|=0" />
                                    </div>
                                </div>

                                <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                                    <div>
                                        ㄹ. <InlineMath math="p:|a|+|b|=0" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:a^2+ab+b^2=0" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄱ, ㄴ</div>
                                <div>③ ㄱ, ㄹ</div>
                                <div>④ ㄷ, ㄹ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ, ㄹ</div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 <InlineMath math="p" />가 조건 <InlineMath math="q" />이기
                                    위한 필요충분조건이 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q,\qquad q\to p
`}
                                />

                                <p className="leading-8">
                                    가 모두 참이어야 합니다. 즉, 두 조건이 서로 동치인지 확인합니다.
                                </p>

                                <div>
                                    <p className="mb-3 font-bold text-white">ㄱ.</p>

                                    <BlockMath
                                        math={String.raw`
a=b
\quad\Longrightarrow\quad
|a|=|b|
`}
                                    />

                                    <p className="leading-8">
                                        는 참이지만, <InlineMath math="|a|=|b|" />라고 해서 반드시{" "}
                                        <InlineMath math="a=b" />인 것은 아닙니다.
                                        예를 들어 <InlineMath math="a=1,\ b=-1" />이면
                                        <InlineMath math="|a|=|b|" />이지만{" "}
                                        <InlineMath math="a\ne b" />입니다.
                                    </p>

                                    <p className="mt-2 font-bold text-red-300">
                                        따라서 필요충분조건이 아닙니다.
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">ㄴ.</p>

                                    <p className="leading-8">
                                        <InlineMath math="a>0,\ b>0" />이면{" "}
                                        <InlineMath math="ab>0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\to q
`}
                                    />

                                    <p className="leading-8">
                                        는 참입니다. 그러나 <InlineMath math="ab>0" />이면
                                        두 수가 모두 음수인 경우도 있습니다.
                                        예를 들어 <InlineMath math="a=-1,\ b=-1" />이면{" "}
                                        <InlineMath math="ab>0" />이지만{" "}
                                        <InlineMath math="a>0,\ b>0" />은 아닙니다.
                                    </p>

                                    <p className="mt-2 font-bold text-red-300">
                                        따라서 필요충분조건이 아닙니다.
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">ㄷ.</p>

                                    <p className="leading-8">
                                        실수의 제곱은 항상 <InlineMath math="0" /> 이상이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^2+b^2=0
\quad\Longleftrightarrow\quad
a=0,\ b=0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 또한 절댓값도 항상 <InlineMath math="0" /> 이상이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|a|+|b|=0
\quad\Longleftrightarrow\quad
a=0,\ b=0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^2+b^2=0
\quad\Longleftrightarrow\quad
|a|+|b|=0
`}
                                    />

                                    <p className="font-bold text-green-300">
                                        이므로 필요충분조건입니다.
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">ㄹ.</p>

                                    <p className="leading-8">
                                        먼저
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|a|+|b|=0
\quad\Longleftrightarrow\quad
a=0,\ b=0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 한편
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^2+ab+b^2
=
\left(a+\frac{b}{2}\right)^2+\frac34b^2
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^2+ab+b^2=0
\quad\Longleftrightarrow\quad
a=0,\ b=0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 두 조건은 서로 동치입니다.
                                    </p>

                                    <p className="font-bold text-green-300">
                                        따라서 필요충분조건입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{④ ㄷ, ㄹ}}
`}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        필요충분조건은 두 조건이 서로 동치인지를 확인하면 됩니다.
                                        특히 다음과 같은 식은 바로 해석할 수 있어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^2+b^2=0
\quad\Longleftrightarrow\quad
|a|+|b|=0
\quad\Longleftrightarrow\quad
a^2+ab+b^2=0
\quad\Longleftrightarrow\quad
a=b=0
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
                                전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                                <InlineMath math="A,\ B" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
(A-B)^C\cap(A\cup B)=A
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이기 위한 필요충분조건은?
                            </p>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>
                                    ① <InlineMath math="A\cap B=A" />
                                </div>
                                <div>
                                    ② <InlineMath math="A\cap B=B" />
                                </div>
                                <div>
                                    ③ <InlineMath math="A-B=\varnothing" />
                                </div>
                                <div>
                                    ④ <InlineMath math="A-B=U" />
                                </div>
                                <div>
                                    ⑤ <InlineMath math="A=B" />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="A-B" />를 교집합과 여집합으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=A\cap B^C
`}
                                />

                                <p className="leading-8">
                                    이므로 드모르간의 법칙에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
(A-B)^C
=(A\cap B^C)^C
=A^C\cup B
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 주어진 식의 왼쪽을 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
(A-B)^C\cap(A\cup B)
&=(A^C\cup B)\cap(A\cup B)\\
&=(A^C\cap A)\cup B\\
&=\varnothing\cup B\\
&=B
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다. 그러므로 주어진 등식은
                                </p>

                                <BlockMath
                                    math={String.raw`
B=A
`}
                                />

                                <p className="leading-8">
                                    일 때, 그리고 그때에만 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{⑤ }A=B}
`}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        필요충분조건을 바로 판정하려 하지 말고,
                                        먼저 주어진 집합의 식을 간단히 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(A-B)^C\cap(A\cup B)=B
`}
                                    />

                                    <p className="leading-8">
                                        이므로 원래 조건은 결국{" "}
                                        <InlineMath math="A=B" />와 동치입니다.
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
                                두 조건 <InlineMath math="p,\ q" />에 대하여{" "}
                                <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                필요충분조건인 것만을 보기에서 있는 대로 고르시오.
                                (단, <InlineMath math="x,\ y,\ z" />는 실수이다.)
                            </p>

                            <div className="mt-6 space-y-5 pl-4 text-gray-300">
                                <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                                    <div>
                                        ㄱ. <InlineMath math="p:|x|<1" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:x<1" />
                                    </div>
                                </div>

                                <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                                    <div>
                                        ㄴ. <InlineMath math="p:|x|=|y|" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:x^2=y^2" />
                                    </div>
                                </div>

                                <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                                    <div>
                                        ㄷ. <InlineMath math="p:(x-y)(y-z)=0" />
                                    </div>
                                    <div>
                                        <InlineMath math="q:x=y=z" />
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
                                    <InlineMath math="p" />가 <InlineMath math="q" />이기 위한
                                    필요충분조건이 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
p\to q,\qquad q\to p
`}
                                />

                                <p className="leading-8">
                                    가 모두 참이어야 합니다.
                                </p>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄱ.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="|x|<1" />이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-1<x<1
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="x<1" />입니다. 따라서{" "}
                                        <InlineMath math="p\to q" />는 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나 <InlineMath math="x<1" />이라고 해서 항상{" "}
                                        <InlineMath math="|x|<1" />인 것은 아닙니다.
                                        예를 들어 <InlineMath math="x=-2" />이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x<1,\qquad |x|=2>1
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="q\to p" />는 거짓입니다.
                                    </p>

                                    <p className="mt-2 font-bold text-red-300">
                                        따라서 필요충분조건이 아닙니다.
                                    </p>
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ.
                                    </p>

                                    <p className="leading-8">
                                        양변이 모두 <InlineMath math="0" /> 이상이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|=|y|
\quad\Longleftrightarrow\quad
|x|^2=|y|^2
`}
                                    />

                                    <p className="leading-8">
                                        이고
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|^2=x^2,\qquad |y|^2=y^2
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|=|y|
\quad\Longleftrightarrow\quad
x^2=y^2
`}
                                    />

                                    <p className="font-bold text-green-300">
                                        따라서 필요충분조건입니다.
                                    </p>
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="x=y=z" />이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x-y=0,\qquad y-z=0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-y)(y-z)=0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 <InlineMath math="q\to p" />는 참입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-y)(y-z)=0
`}
                                    />

                                    <p className="leading-8">
                                        이라는 것은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=y
\quad\text{또는}\quad
y=z
`}
                                    />

                                    <p className="leading-8">
                                        라는 뜻일 뿐, 세 수가 모두 같다는 뜻은 아닙니다.
                                        예를 들어
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=1,\qquad y=1,\qquad z=2
`}
                                    />

                                    <p className="leading-8">
                                        이면 <InlineMath math="(x-y)(y-z)=0" />이지만{" "}
                                        <InlineMath math="x=y=z" />는 아닙니다.
                                        따라서 <InlineMath math="p\to q" />는 거짓입니다.
                                    </p>

                                    <p className="mt-2 font-bold text-red-300">
                                        따라서 필요충분조건이 아닙니다.
                                    </p>
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{ㄴ}}
`}
                                    />
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        필요충분조건을 판단할 때는 한쪽 방향만 확인하면 안 됩니다.
                                        반드시 원명제와 역명제가 모두 참인지 확인합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p\Longleftrightarrow q
`}
                                    />

                                    <p className="leading-8">
                                        특히
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|=|y|
\quad\Longleftrightarrow\quad
x^2=y^2
`}
                                    />

                                    <p className="leading-8">
                                        는 자주 사용하는 동치 관계입니다.
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
                            필요충분조건은 두 조건이 서로 같은 의미를 나타낸다는
                            뜻입니다. 자주 사용하는 동치 관계는 식의 모양과
                            그 의미를 함께 기억해 두는 것이 좋습니다.
                        </p>

                        <div className="mt-5 space-y-5">

                            <BlockMath
                                math={String.raw`
p\Longleftrightarrow q
\quad\Longleftrightarrow\quad
P=Q
`}
                            />

                            <BlockMath
                                math={String.raw`
x^2+y^2=0
\quad\Longleftrightarrow\quad
x=y=0
`}
                            />

                            <BlockMath
                                math={String.raw`
|x|+|y|=0
\quad\Longleftrightarrow\quad
x=y=0
`}
                            />

                            <BlockMath
                                math={String.raw`
x^2+xy+y^2=0
\quad\Longleftrightarrow\quad
x=y=0
`}
                            />

                            <BlockMath
                                math={String.raw`
(x-y)^2+(y-z)^2+(z-x)^2=0
\quad\Longleftrightarrow\quad
x=y=z
`}
                            />

                            <BlockMath
                                math={String.raw`
(x-y)(y-z)(z-x)=0
\quad\Longleftrightarrow\quad
x,y,z\text{ 중 같은 두 수가 있다}
`}
                            />

                            <BlockMath
                                math={String.raw`
(x-y)(y-z)(z-x)\ne0
\quad\Longleftrightarrow\quad
x,y,z\text{가 서로 다르다}
`}
                            />

                            <BlockMath
                                math={String.raw`
|x|+|y|=|x+y|
\quad\Longleftrightarrow\quad
xy\ge0
`}
                            />

                            <BlockMath
                                math={String.raw`
|x|+|y|>|x+y|
\quad\Longleftrightarrow\quad
xy<0
`}
                            />

                        </div>

                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                문제를 풀 때
                            </p>

                            <p className="leading-8 text-gray-300">
                                복잡한 식을 보면 바로 계산하기 전에
                                <span className="font-bold text-white">
                                    {" "}그 식과 동치인 간단한 조건이 무엇인지
                                </span>
                                를 먼저 생각합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{복잡한 식}
\quad\Longleftrightarrow\quad
\text{간단한 조건}
`}
                            />

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}