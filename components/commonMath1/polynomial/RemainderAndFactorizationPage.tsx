"use client";

import { InlineMath, BlockMath } from "react-katex";

export default function RemainderAndFactorizationPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.18 등식의 분류
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    등호 (<InlineMath math="=" />)를 사용하여 두 식의 값이 같음을 나타낸 식을 등식이라고 합니다.
                    하지만 모든 등식이 같은 성질을 가지는 것은 아닙니다.
                    등식은 성립하는 방식에 따라 방정식과 항등식으로 나눌 수 있습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">방정식</h3>

                    <p className="leading-8 text-gray-300">
                        방정식은 문자에 대입하는 값에 따라 참이 되기도 하고 거짓이 되기도 하는 등식입니다.
                    </p>

                    <BlockMath math="2x+3=9" />

                    <p className="mt-5 leading-8 text-gray-300">
                        예를 들어 <InlineMath math="x=3" />을 대입하면
                    </p>

                    <BlockMath math="2\cdot3+3=9" />

                    <p className="leading-8 text-gray-300">
                        이므로 참입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        하지만 <InlineMath math="x=1" />을 대입하면
                    </p>

                    <BlockMath math="2\cdot1+3=5" />

                    <p className="leading-8 text-gray-300">
                        이므로 거짓입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 방정식에서는 참이 되게 하는 값이 중요합니다.
                        이 값을 방정식의 <span className="font-semibold text-white">해</span>라고 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">항등식</h3>

                    <p className="leading-8 text-gray-300">
                        항등식은 문자에 어떤 값을 대입해도 항상 참이 되는 등식입니다.
                    </p>

                    <BlockMath math="2(x+2)=2x+4" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 식은 분배법칙에 의해 항상 성립합니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        예를 들어 <InlineMath math="x=0" />, <InlineMath math="x=5" />, <InlineMath math="x=-3" />을 대입해도 모두 참입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        즉 항등식에서는 모든 수가 해가 됩니다.
                        그래서 항등식에서는 보통 해를 묻지 않습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        항등식에서 중요한 것
                    </h3>

                    <p className="leading-8 text-gray-300">
                        항등식에서는 해를 구하는 것이 의미가 없습니다.
                        대신 식 속에 포함된 미지의 계수를 구하는 문제가 자주 출제됩니다.
                    </p>

                    <BlockMath math="ax+b=2x+3" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 식이 <InlineMath math="x" />에 대한 항등식이라면,
                        모든 <InlineMath math="x" />에 대하여 두 식이 같아야 합니다.
                        따라서 <InlineMath math="a" />와 <InlineMath math="b" />의 값이 정해져야 합니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        이처럼 항등식에서 정해지지 않은 계수를 구하는 방법을
                        <span className="font-semibold text-white"> 미정계수법</span>이라고 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        방정식과 항등식의 차이
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] border-collapse text-sm text-gray-300">
                            <thead>
                                <tr className="border-b border-white/20 text-white">
                                    <th className="px-4 py-3 text-left">구분</th>
                                    <th className="px-4 py-3 text-left">방정식</th>
                                    <th className="px-4 py-3 text-left">항등식</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="px-4 py-3 font-semibold text-white">성립 조건</td>
                                    <td className="px-4 py-3">특정한 값에서만 참</td>
                                    <td className="px-4 py-3">모든 값에서 참</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="px-4 py-3 font-semibold text-white">관심사</td>
                                    <td className="px-4 py-3">해를 구하는 것</td>
                                    <td className="px-4 py-3">식의 관계를 이용하는 것</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="px-4 py-3 font-semibold text-white">해의 개수</td>
                                    <td className="px-4 py-3">하나 또는 여러 개</td>
                                    <td className="px-4 py-3">모든 수</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="px-4 py-3 font-semibold text-white">대표 문제</td>
                                    <td className="px-4 py-3">
                                        <InlineMath math="x" />의 값을 구하시오
                                    </td>
                                    <td className="px-4 py-3">
                                        <InlineMath math="a,\;b" />의 값을 구하시오
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-semibold text-white">대표 해법</td>
                                    <td className="px-4 py-3">방정식의 해법</td>
                                    <td className="px-4 py-3">미정계수법</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        방정식은 참이 되는 값을 찾는 등식이고,
                        항등식은 모든 값에서 항상 참이 되는 등식입니다.

                        따라서 방정식에서는 해를 구하고,
                        항등식에서는 미정계수를 구합니다.
                    </p>

                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.19 <InlineMath math="x" />에 대한 항등식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    문제에서 <span className="font-semibold text-white">모든 </span>
                    <InlineMath math="x" />
                    <span className="font-semibold text-white">에 대하여</span>,
                    <span className="font-semibold text-white"> 임의의 </span>
                    <InlineMath math="x" />
                    <span className="font-semibold text-white">에 대하여</span>,
                    또는 <InlineMath math="x" />
                    <span className="font-semibold text-white">에 관계없이</span> 라는 표현이 나오면
                    그 등식은 <InlineMath math="x" />에 대한 항등식으로 보아야 합니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        항등식의 기본 성질
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 항등식은 모든 <InlineMath math="x" />에 대하여
                        성립해야 합니다. 따라서 식을 한쪽으로 정리했을 때 모든 계수가
                        <InlineMath math="0" />이 되어야 합니다.
                    </p>

                    <BlockMath math="ax+b=0" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 식이 <InlineMath math="x" />에 대한 항등식이라면
                    </p>

                    <BlockMath math="a=0,\quad b=0" />

                    <p className="leading-8 text-gray-300">
                        이어야 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        일차식의 항등식
                    </h3>

                    <BlockMath math="ax+b=a'x+b'" />

                    <p className="mt-5 leading-8 text-gray-300">
                        위 식이 <InlineMath math="x" />에 대한 항등식이라면 양변의 같은 차수의 계수가
                        같아야 합니다.
                    </p>

                    <BlockMath math="a=a',\quad b=b'" />

                    <p className="mt-5 leading-8 text-gray-300">
                        왜 그런지 식을 한쪽으로 정리해 보면 알 수 있습니다.
                    </p>

                    <BlockMath math="ax+b=a'x+b'" />
                    <BlockMath math="(a-a')x+(b-b')=0" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 식이 모든 <InlineMath math="x" />에 대하여 성립하려면
                    </p>

                    <BlockMath math="a-a'=0,\quad b-b'=0" />

                    <p className="leading-8 text-gray-300">
                        이어야 하므로
                    </p>

                    <BlockMath math="a=a',\quad b=b'" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차식의 항등식
                    </h3>

                    <BlockMath math="ax^2+bx+c=0" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 식이 <InlineMath math="x" />에 대한 항등식이라면
                    </p>

                    <BlockMath math="a=0,\quad b=0,\quad c=0" />

                    <p className="leading-8 text-gray-300">
                        이어야 합니다.
                    </p>

                    <BlockMath math="ax^2+bx+c=a'x^2+b'x+c'" />

                    <p className="mt-5 leading-8 text-gray-300">
                        또한 위 식이 <InlineMath math="x" />에 대한 항등식이라면
                    </p>

                    <BlockMath math="a=a',\quad b=b',\quad c=c'" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        핵심 정리
                    </h3>

                    <div className="space-y-4">
                        <BlockMath math="ax+b=0\text{ 이 }x\text{에 대한 항등식}\Longleftrightarrow a=0,\;b=0" />
                        <BlockMath math="ax+b=a'x+b'\text{ 이 }x\text{에 대한 항등식}\Longleftrightarrow a=a',\;b=b'" />
                        <BlockMath math="ax^2+bx+c=0\text{ 이 }x\text{에 대한 항등식}\Longleftrightarrow a=0,\;b=0,\;c=0" />
                        <BlockMath math="ax^2+bx+c=a'x^2+b'x+c'\text{ 이 }x\text{에 대한 항등식}\Longleftrightarrow a=a',\;b=b',\;c=c'" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 항등식에서는 식을 한쪽으로 정리한 후,
                        각 차수의 계수가 모두 <InlineMath math="0" />인지 확인합니다.
                        또는 양변의 같은 차수의 계수가 서로 같은지 비교합니다.
                    </p>

                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.20 <InlineMath math="x,\;y" />에 대한 항등식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    문제에서 <span className="font-semibold text-white">모든 </span>
                    <InlineMath math="x,\;y" />
                    <span className="font-semibold text-white">에 대하여</span>,
                    <span className="font-semibold text-white"> 임의의 </span>
                    <InlineMath math="x,\;y" />
                    <span className="font-semibold text-white">에 대하여</span>,
                    또는 <InlineMath math="x,\;y" />
                    <span className="font-semibold text-white">에 관계없이</span> 라는 표현이 나오면
                    그 등식은 <InlineMath math="x,\;y" />에 대한 항등식으로 보아야 합니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="x,\;y" />가 독립인 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />와 <InlineMath math="y" />가 서로 독립이면,
                        각 문자와 상수항의 계수를 각각 비교합니다.
                    </p>

                    <BlockMath math="ax+by+c=0" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 식이 모든 <InlineMath math="x,\;y" />에 대하여 성립한다면
                    </p>

                    <BlockMath math="a=0,\quad b=0,\quad c=0" />

                    <p className="leading-8 text-gray-300">
                        이어야 합니다.
                    </p>

                    <BlockMath math="ax+by+c=a'x+b'y+c'" />

                    <p className="mt-5 leading-8 text-gray-300">
                        또한 위 식이 모든 <InlineMath math="x,\;y" />에 대하여 성립한다면
                    </p>

                    <BlockMath math="a=a',\quad b=b',\quad c=c'" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="x,\;y" />사이에 조건이 있는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        경우에 따라 <InlineMath math="x" />와 <InlineMath math="y" /> 사이에
                        관계가 주어지기도 합니다.
                    </p>

                    <BlockMath math="x+y=4" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이때 <InlineMath math="x" />와 <InlineMath math="y" />는 서로 독립이 아닙니다.
                        따라서 한 변수를 다른 변수로 나타내면, 결국 1.19에서 배운
                        <InlineMath math="x" />에 대한 항등식으로 바꿀 수 있습니다.
                    </p>

                    <BlockMath math="y=4-x" />
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        예제
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 식이 <InlineMath math="x+y=4" />를 만족하는 모든 <InlineMath math="x,\;y" />에 대하여 성립한다고 하자.
                    </p>

                    <BlockMath math="ax+by=8" />

                    <p className="mt-5 leading-8 text-gray-300">
                        조건식 <InlineMath math="x+y=4" />에서
                    </p>

                    <BlockMath math="y=4-x" />

                    <p className="leading-8 text-gray-300">
                        이므로 이를 대입하면
                    </p>

                    <BlockMath math="ax+b(4-x)=8" />
                    <BlockMath math="(a-b)x+4b=8" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이제 이 식은 <InlineMath math="x" />에 대한 항등식입니다.
                        따라서 양변의 계수를 비교하면
                    </p>

                    <BlockMath math="a-b=0,\quad 4b=8" />

                    <p className="leading-8 text-gray-300">
                        이므로
                    </p>

                    <BlockMath math="b=2,\quad a=2" />

                    <p className="mt-5 font-semibold text-white">
                        따라서 <InlineMath math="a=2,\;b=2" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        다른 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        항상 한 변수로 바꾸어야 하는 것은 아닙니다.
                        숫자가 단순한 경우에는 조건을 만족하는 <InlineMath math="x,\;y" />의 값을 직접 대입해도 됩니다.
                    </p>

                    <BlockMath math="x+y=4" />

                    <p className="mt-5 leading-8 text-gray-300">
                        예를 들어 <InlineMath math="(x,y)=(0,4)" />를 대입하면
                    </p>

                    <BlockMath math="4b=8" />
                    <BlockMath math="b=2" />

                    <p className="mt-5 leading-8 text-gray-300">
                        또 <InlineMath math="(x,y)=(4,0)" />을 대입하면
                    </p>

                    <BlockMath math="4a=8" />
                    <BlockMath math="a=2" />

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 <InlineMath math="a=2,\;b=2" />를 얻을 수 있습니다.
                        다만 일반적으로는 한 변수를 소거하여 <InlineMath math="x" />에 대한 항등식으로 바꾸는 방법이 가장 체계적입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x,\;y" />가 독립이면 각 문자와 상수항의 계수를 비교합니다.
                        그러나 <InlineMath math="x+y=4" />처럼 두 문자 사이에 조건이 있으면,
                        한 변수를 다른 변수로 나타내어 <InlineMath math="x" />에 대한 항등식으로
                        바꾸어 해결할 수 있습니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.21 미정계수법
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    항등식 문제에서는 해를 구하는 것이 목적이 아닙니다.
                    항등식은 모든 값에 대하여 성립하므로 해가 무수히 많기 때문입니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    따라서 항등식 문제에서는 식 속에 포함된
                    미정계수의 값을 구하는 것이 중요합니다.
                    이러한 미정계수를 구하는 방법을
                    <span className="font-semibold text-white"> 미정계수법</span>
                    이라고 합니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        1. 계수비교법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        식을 정리한 뒤 같은 차수의 계수를 비교하여
                        미정계수를 구하는 방법입니다.
                    </p>

                    <BlockMath math="ax+b=2x+3" />

                    <p className="mt-5 leading-8 text-gray-300">
                        양변의 계수를 비교하면
                    </p>

                    <BlockMath math="a=2,\quad b=3" />

                    <p className="leading-8 text-gray-300">
                        이 됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        2. 수치대입법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        항등식은 모든 값에 대하여 성립하므로
                        편리한 값을 대입하여 미정계수를 구할 수 있습니다.
                    </p>

                    <BlockMath math="ax+b=2x+3" />

                    <p className="mt-5 leading-8 text-gray-300">
                        먼저 <InlineMath math="x=0" />을 대입하면
                    </p>

                    <BlockMath math="b=3" />

                    <p className="mt-5 leading-8 text-gray-300">
                        다시 <InlineMath math="x=1" />을 대입하면
                    </p>

                    <BlockMath math="a+b=5" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="a=2,\quad b=3" />

                    <p className="leading-8 text-gray-300">
                        을 얻습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        미정계수의 개수와 식의 개수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        일반적으로 미정계수가 <InlineMath math="n" />개라면
                        이를 결정하기 위해서는 서로 독립인 식이 <InlineMath math="n" />개 필요합니다.
                    </p>

                    <BlockMath math="ax+b=2x+3" />

                    <p className="mt-5 leading-8 text-gray-300">
                        위 식에는 미정계수
                        <InlineMath math="a,b" />가 2개 있으므로
                        두 개의 식이 필요합니다.
                    </p>

                    <BlockMath math="a=2" />
                    <BlockMath math="b=3" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        등식 <InlineMath math="a(x-1)+b(x+1)=2x-6" />가 임의의 실수
                        <InlineMath math="x" />에 대하여 항상 성립할 때, <InlineMath math="a+2b" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">풀이 1 : 계수비교법</p>

                            <BlockMath math="a(x-1)+b(x+1)=2x-6" />
                            <BlockMath math="(a+b)x+(-a+b)=2x-6" />

                            <p>양변의 계수를 비교하면</p>

                            <BlockMath math="a+b=2,\quad -a+b=-6" />

                            <p>따라서</p>

                            <BlockMath math="a=4,\quad b=-2" />

                            <div className="border-t border-white/10 pt-5">
                                <p className="font-semibold text-white">풀이 2 : 수치대입법</p>

                                <p>
                                    <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math="2b=-4" />
                                <BlockMath math="b=-2" />

                                <p>
                                    <InlineMath math="x=-1" />을 대입하면
                                </p>

                                <BlockMath math="-2a=-8" />
                                <BlockMath math="a=4" />
                            </div>

                            <p>그러므로</p>

                            <BlockMath math="a+2b=4+2(-2)=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-black/40 p-6">
                    <h3 className="mb-5 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        모든 실수 <InlineMath math="x" />에 대하여
                    </p>

                    <BlockMath math="a(x-1)(x+2)+bx(x-1)+cx(x+2)=x^2-3x-4" />

                    <p className="leading-8 text-gray-300">
                        가 성립할 때, <InlineMath math="a^2+b^2+c^2" />의 값을 구하여라.
                    </p>

                    <details className="mt-6 rounded-xl border border-white/15 bg-black/50 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-8">
                            <div>
                                <h4 className="mb-3 font-bold text-white">풀이 1 : 계수비교법</h4>

                                <p className="leading-8 text-gray-300">전개하면</p>

                                <BlockMath math="a(x^2+x-2)+b(x^2-x)+c(x^2+2x)=x^2-3x-4" />
                                <BlockMath math="(a+b+c)x^2+(a-b+2c)x-2a=x^2-3x-4" />

                                <p className="leading-8 text-gray-300">계수를 비교하면</p>

                                <BlockMath math="a+b+c=1,\quad a-b+2c=-3,\quad -2a=-4" />

                                <p className="leading-8 text-gray-300">따라서</p>

                                <BlockMath math="a=2,\quad b=1,\quad c=-2" />
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <h4 className="mb-3 font-bold text-white">풀이 2 : 수치대입법</h4>

                                <p className="leading-8 text-gray-300">
                                    인수가 보이면 그 인수를 <InlineMath math="0" />으로 만드는 값을
                                    먼저 생각합니다.
                                </p>

                                <p className="mt-5 leading-8 text-gray-300">
                                    <InlineMath math="x=0" />을 대입하면
                                </p>

                                <BlockMath math="-2a=-4" />
                                <BlockMath math="a=2" />

                                <p className="mt-5 leading-8 text-gray-300">
                                    <InlineMath math="x=-2" />를 대입하면
                                </p>

                                <BlockMath math="6b=6" />
                                <BlockMath math="b=1" />

                                <p className="mt-5 leading-8 text-gray-300">
                                    <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math="3c=-6" />
                                <BlockMath math="c=-2" />
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <p className="leading-8 text-gray-300">그러므로</p>

                                <BlockMath math="a^2+b^2+c^2=2^2+1^2+(-2)^2=9" />

                                <p className="font-semibold text-white">
                                    따라서 정답은 <InlineMath math="9" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">생각하기</h4>

                                <p className="leading-8 text-gray-300">
                                    예제 1은 계수비교법과 수치대입법이 모두 간단합니다.
                                    하지만 예제 2처럼 인수가 많이 보이는 식에서는 전개보다 수치대입법이 더 빠릅니다.
                                    인수가 보이면 먼저 그 인수를 <InlineMath math="0" />으로 만드는 값을 생각해 봅니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        다음 항등식이 성립할 때
                    </p>

                    <BlockMath math="\frac{a}{x}+\frac{b}{x+1}+\frac{c}{x+2}=\frac{4}{x(x+1)(x+2)}" />

                    <p className="text-gray-300">
                        <InlineMath math="a+b+c" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                풀이 1 : 분모의 인수를 곱하고 대입하기
                            </p>

                            <p>
                                <InlineMath math="a" />를 구하려면 양변에 분모의 인수 <InlineMath math="x" />를 곱합니다.
                            </p>

                            <BlockMath math="a+\frac{bx}{x+1}+\frac{cx}{x+2}=\frac{4}{(x+1)(x+2)}" />

                            <p>
                                이제 <InlineMath math="x=0" />을 대입하면
                            </p>

                            <BlockMath math="a=\frac{4}{1\cdot2}=2" />

                            <p>
                                <InlineMath math="b" />를 구하려면 양변에 분모의 인수 <InlineMath math="x+1" />을 곱합니다.
                            </p>

                            <BlockMath math="\frac{a(x+1)}{x}+b+\frac{c(x+1)}{x+2}=\frac{4}{x(x+2)}" />

                            <p>
                                이제 <InlineMath math="x=-1" />을 대입하면
                            </p>

                            <BlockMath math="b=\frac{4}{(-1)\cdot1}=-4" />

                            <p>
                                <InlineMath math="c" />를 구하려면 양변에 분모의 인수 <InlineMath math="x+2" />를 곱합니다.
                            </p>

                            <BlockMath math="\frac{a(x+2)}{x}+\frac{b(x+2)}{x+1}+c=\frac{4}{x(x+1)}" />

                            <p>
                                이제 <InlineMath math="x=-2" />를 대입하면
                            </p>

                            <BlockMath math="c=\frac{4}{(-2)(-1)}=2" />

                            <p>따라서</p>

                            <BlockMath math="a+b+c=2+(-4)+2=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>

                            <div className="border-t border-white/10 pt-5">
                                <p className="font-semibold text-white">
                                    풀이 2 : 일반적인 풀이
                                </p>

                                <p>
                                    보통은 양변에 분모의 최소공배수 <InlineMath math="x(x+1)(x+2)" />를 곱하여 다항식 항등식으로 만듭니다.
                                </p>

                                <BlockMath math="a(x+1)(x+2)+bx(x+2)+cx(x+1)=4" />

                                <p>
                                    이제 <InlineMath math="x=0,\;-1,\;-2" />를 대입합니다.
                                </p>

                                <BlockMath math="x=0\Rightarrow 2a=4\Rightarrow a=2" />
                                <BlockMath math="x=-1\Rightarrow -b=4\Rightarrow b=-4" />
                                <BlockMath math="x=-2\Rightarrow 2c=4\Rightarrow c=2" />

                                <BlockMath math="a+b+c=2-4+2=0" />

                                <p className="font-semibold text-white">
                                    따라서 답은 <InlineMath math="0" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">생각하기</h4>

                                <p className="leading-8">
                                    분수식에서 특정 계수만 남기고 싶을 때는 그 계수가 붙은 항의
                                    분모를 곱한 뒤, 다른 항들이 사라지는 값을 대입하면 됩니다.
                                    일반적인 참고서 풀이에서는 먼저 통분한 뒤 수치대입을 사용합니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3-x^2+1=(x-1)(x-2)(x-3)+a(x-1)(x-2)+b(x-1)+c" />
                        가 <InlineMath math="x" />에 대한 항등식이 되도록 하는 <InlineMath math="a,b,c" />에 대하여 <InlineMath math="a+b+c" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                풀이 : 수치대입법
                            </p>

                            <p>
                                오른쪽 식에는 <InlineMath math="(x-1)" />, <InlineMath math="(x-2)" />, <InlineMath math="(x-3)" />
                                이 보이므로 이들을 0으로 만드는 값을 대입합니다.
                            </p>

                            <p>
                                <InlineMath math="x=1" />을 대입하면
                            </p>

                            <BlockMath math="1-1+1=c" />
                            <BlockMath math="c=1" />

                            <p>
                                <InlineMath math="x=2" />를 대입하면
                            </p>

                            <BlockMath math="8-4+1=b+1" />
                            <BlockMath math="5=b+1" />
                            <BlockMath math="b=4" />

                            <p>
                                <InlineMath math="x=3" />을 대입하면
                            </p>

                            <BlockMath math="27-9+1=2a+8+1" />
                            <BlockMath math="19=2a+9" />
                            <BlockMath math="a=5" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a+b+c=5+4+1=10" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="10" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각하기
                                </h4>

                                <p className="leading-8">
                                    이 문제는 계수비교법으로도 풀 수 있지만,
                                    전개해야 할 식이 많아 계산이 복잡합니다.
                                    반면 수치대입법은 <InlineMath math="x=1,2,3" />
                                    을 대입하는 것만으로 <InlineMath math="c,b,a" />
                                    를 차례로 구할 수 있습니다.
                                    인수가 많이 보이는 항등식에서는 수치대입법이 특히 강력합니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="(k+1)x-(2k+3)y-3k-5=0" />이 <InlineMath math="k" />에 대한 항등식일 때,
                        상수 <InlineMath math="x,\;y" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">문제 읽기</h4>

                                <p className="leading-8">
                                    수학 문제에서는 먼저 변수를 확인해야 합니다.
                                    변수는 문제에서 지정해 줍니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 문제는 <InlineMath math="k" />에 대한 항등식이라고 했으므로,
                                    변수는 <InlineMath math="k" />입니다.
                                    따라서 <InlineMath math="x,\;y" />는 변수가 아니라 상수입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    상수는 변수를 제외한 모든 숫자와 다른 문자를 의미합니다.
                                </p>
                            </div>

                            <p>
                                주어진 식을 <InlineMath math="k" />에 대하여 정리합니다.
                            </p>

                            <BlockMath math="(k+1)x-(2k+3)y-3k-5=0" />

                            <BlockMath math="kx+x-2ky-3y-3k-5=0" />

                            <BlockMath math="(x-2y-3)k+(x-3y-5)=0" />

                            <p>
                                이 식이 <InlineMath math="k" />에 대한 항등식이므로,
                                <InlineMath math="k" />의 계수와 상수항이 모두
                                <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath math="x-2y-3=0" />
                            <BlockMath math="x-3y-5=0" />

                            <p>두 식을 연립합니다.</p>

                            <BlockMath math="x-2y=3" />
                            <BlockMath math="x-3y=5" />

                            <p>
                                두 식을 빼면
                            </p>

                            <BlockMath math="y=-2" />

                            <p>
                                이를 <InlineMath math="x-2y=3" />에 대입하면
                            </p>

                            <BlockMath math="x-2(-2)=3" />
                            <BlockMath math="x+4=3" />
                            <BlockMath math="x=-1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="x=-1,\;y=-2" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                    <p className="leading-8 text-gray-300">
                        다음 식이 <InlineMath math="x,\;y" />값에 관계없이 항상 일정한 값을 갖도록 <InlineMath math="a,\;b" />의 값을 구하여라.
                    </p>
                    <BlockMath math="\frac{4x+ay+b}{x+y+1}" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                분수식은 보통 변수의 값에 따라 값이 달라집니다.
                            </p>

                            <BlockMath math="\frac{3x+1}{2x+1}" />

                            <p>
                                이런 식은 <InlineMath math="x" />의 값에 따라 값이 달라집니다.
                                하지만 다음과 같이 분자가 분모의 상수배이면 값이 일정합니다.
                            </p>

                            <BlockMath math="\frac{4x+2}{2x+1}=2" />

                            <p>
                                따라서 분수식의 값이 항상 일정하려면 분자가 분모의 상수배가 되어야 합니다.
                            </p>

                            <BlockMath math="\frac{4x+ay+b}{x+y+1}" />

                            <p>
                                분모의 <InlineMath math="x" />의 계수는 <InlineMath math="1" />이고,
                                분자의 <InlineMath math="x" />의 계수는 <InlineMath math="4" />입니다.
                                따라서 분자는 분모의 <InlineMath math="4" />배여야 합니다.
                            </p>

                            <BlockMath math="4x+ay+b=4(x+y+1)" />

                            <BlockMath math="4x+ay+b=4x+4y+4" />

                            <p>
                                계수를 비교하면
                            </p>

                            <BlockMath math="a=4,\quad b=4" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="a=4,\;b=4" />입니다.
                            </p>

                            <div className="border-t border-white/10 pt-5">
                                <p className="font-semibold text-white">일반적인 풀이</p>

                                <p>
                                    분수식의 값이 일정하므로 그 값을 <InlineMath math="k" />라고 둡니다.
                                </p>

                                <BlockMath math="\frac{4x+ay+b}{x+y+1}=k" />

                                <BlockMath math="4x+ay+b=k(x+y+1)" />

                                <BlockMath math="4x+ay+b=kx+ky+k" />

                                <p>
                                    계수를 비교하면
                                </p>

                                <BlockMath math="k=4,\quad a=k,\quad b=k" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a=4,\quad b=4" />
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-5">
                            <p className="font-semibold text-white">풀이 3 : 분수식에 직접 대입하기</p>

                            <p>
                                이 식의 값이 <InlineMath math="x,\;y" />에 관계없이 항상 일정하므로,
                                조건을 만족하는 여러 값을 넣어도 분수식의 값은 같아야 합니다.
                            </p>

                            <p>
                                구하려는 문자는 <InlineMath math="a,\;b" /> 두 개이므로,
                                서로 다른 식 두 개를 만들면 됩니다.
                            </p>

                            <p>
                                먼저 <InlineMath math="(x,y)=(0,0)" />을 대입하면
                            </p>

                            <BlockMath math="\frac{b}{1}=b" />

                            <p>
                                <InlineMath math="(x,y)=(1,0)" />을 대입하면
                            </p>

                            <BlockMath math="\frac{4+b}{2}" />

                            <p>
                                두 값이 같아야 하므로
                            </p>

                            <BlockMath math="b=\frac{4+b}{2}" />
                            <BlockMath math="2b=4+b" />
                            <BlockMath math="b=4" />

                            <p>
                                이번에는 <InlineMath math="(x,y)=(0,1)" />을 대입하면
                            </p>

                            <BlockMath math="\frac{a+b}{2}" />

                            <p>
                                이 값도 처음 값과 같아야 하므로
                            </p>

                            <BlockMath math="b=\frac{a+b}{2}" />

                            <p>
                                <InlineMath math="b=4" />를 대입하면
                            </p>

                            <BlockMath math="4=\frac{a+4}{2}" />
                            <BlockMath math="8=a+4" />
                            <BlockMath math="a=4" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="a=4,\;b=4" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x+y=1" />을 만족하는 모든 실수 <InlineMath math="x,\;y" />에 대하여
                    </p>

                    <BlockMath math="ax^2+bxy+cy^2=1" />

                    <p className="leading-8 text-gray-300">
                        이 항상 성립할 때, <InlineMath math="a+b+c" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <h4 className="font-bold text-white">
                                풀이 1 : 한 문자로 정리 후 계수비교
                            </h4>

                            <p>
                                조건 <InlineMath math="x+y=1" />
                                에서
                            </p>

                            <BlockMath math="y=1-x" />

                            <p>
                                를 원래 식에 대입하면
                            </p>

                            <BlockMath math="ax^2+bx(1-x)+c(1-x)^2=1" />

                            <BlockMath math="(a-b+c)x^2+(b-2c)x+c=1" />

                            <p>
                                모든 <InlineMath math="x" />에 대하여 성립하므로
                                항등식입니다.
                            </p>

                            <BlockMath math="(a-b+c)x^2+(b-2c)x+(c-1)=0" />

                            <p>
                                계수를 비교하면
                            </p>

                            <BlockMath math="a-b+c=0" />
                            <BlockMath math="b-2c=0" />
                            <BlockMath math="c-1=0" />

                            <BlockMath math="c=1,\quad b=2,\quad a=1" />

                            <BlockMath math="a+b+c=4" />

                            <p className="font-semibold text-white">
                                따라서 답은 4입니다.
                            </p>

                            <hr className="border-white/10" />

                            <h4 className="font-bold text-white">
                                풀이 2 : 한 문자로 정리 후 수치대입
                            </h4>

                            <p>
                                앞과 같이
                            </p>

                            <BlockMath math="ax^2+bx(1-x)+c(1-x)^2=1" />

                            <p>
                                을 얻는다.
                            </p>

                            <p>
                                이제 적당한 값을 대입한다.
                            </p>

                            <BlockMath math="x=0 \Rightarrow c=1" />

                            <BlockMath math="x=1 \Rightarrow a=1" />

                            <BlockMath math="x=2 \Rightarrow 4a-2b+c=1" />

                            <p>
                                앞의 결과를 대입하면
                            </p>

                            <BlockMath math="4-2b+1=1" />

                            <BlockMath math="b=2" />

                            <BlockMath math="a+b+c=1+2+1=4" />

                            <p className="font-semibold text-white">
                                따라서 답은 4입니다.
                            </p>

                            <hr className="border-white/10" />

                            <h4 className="font-bold text-white">
                                풀이 3 : 조건을 만족하는 수를 직접 대입
                            </h4>

                            <p>
                                미정계수는 <InlineMath math="a,\;b,\;c" />
                                의 3개이므로 식 3개를 만들면 된다.
                            </p>

                            <p>
                                조건 <InlineMath math="x+y=1" />
                                을 만족하는 수를 대입한다.
                            </p>

                            <BlockMath math="(x,y)=(1,0)" />

                            <BlockMath math="a=1" />

                            <BlockMath math="(x,y)=(0,1)" />

                            <BlockMath math="c=1" />

                            <BlockMath math="(x,y)=(2,-1)" />

                            <BlockMath math="4a-2b+c=1" />

                            <p>
                                앞의 결과를 대입하면
                            </p>

                            <BlockMath math="4-2b+1=1" />

                            <BlockMath math="b=2" />

                            <BlockMath math="a+b+c=4" />

                            <p className="font-semibold text-white">
                                따라서 답은 4입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                    <p className="leading-8 text-gray-300">
                        모든 실수 <InlineMath math="x" />에 대하여 아래의 식이 항상 성립할 때, <InlineMath math="p_1+p_2+\cdots+p_{10}" />을 구하여라.
                    </p>

                    <BlockMath math="\frac{1}{(x-10)(x-9)\cdots(x-1)}=\frac{p_1}{x-1}+\frac{p_2}{x-2}+\cdots+\frac{p_{10}}{x-10}" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                이 식을 통분해서 계수비교로 풀 수도 있지만,
                                오른쪽 분자가 복잡한 9차식이 되어 계산이 매우 길어집니다.
                            </p>

                            <p>
                                대신 각 분모를 없애는 값을 대입하여 <InlineMath math="p_1,\;p_2,\;\cdots,\;p_{10}" />의 관계를 봅니다.
                            </p>

                            <p>
                                먼저 <InlineMath math="p_1" />을 구하려면 양변에 <InlineMath math="x-1" />을 곱하고 <InlineMath math="x=1" />을 대입합니다.
                            </p>

                            <BlockMath math="p_1=\frac{1}{(1-10)(1-9)\cdots(1-2)}" />
                            <BlockMath math="p_1=\frac{1}{(-9)(-8)\cdots(-1)}=-\frac{1}{9!}" />

                            <p>
                                이번에는 <InlineMath math="p_{10}" />을 구하려면 양변에 <InlineMath math="x-10" />을 곱하고 <InlineMath math="x=10" />을 대입합니다.
                            </p>

                            <BlockMath math="p_{10}=\frac{1}{(10-9)(10-8)\cdots(10-1)}" />
                            <BlockMath math="p_{10}=\frac{1}{1\cdot2\cdots9}=\frac{1}{9!}" />

                            <p>
                                따라서 <InlineMath math="p_1" />과 <InlineMath math="p_{10}" />은
                                절댓값이 같고 부호가 반대입니다.
                            </p>

                            <BlockMath math="p_1+p_{10}=0" />

                            <p>
                                같은 방식으로 식의 대칭성을 보면
                            </p>

                            <BlockMath math="p_2+p_9=0,\quad p_3+p_8=0,\quad p_4+p_7=0,\quad p_5+p_6=0" />

                            <p>
                                그러므로 전체 합은
                            </p>

                            <BlockMath math="p_1+p_2+\cdots+p_{10}" />
                            <BlockMath math="=(p_1+p_{10})+(p_2+p_9)+(p_3+p_8)+(p_4+p_7)+(p_5+p_6)" />
                            <BlockMath math="=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">생각하기</h4>

                                <p className="leading-8">
                                    이 문제는 모든 <InlineMath math="p_i" />를 직접 구하려고 하면 계산이 매우 커집니다.
                                    하지만 식이 <InlineMath math="1" />부터 <InlineMath math="10" />까지
                                    대칭적으로 배열되어 있으므로,
                                    앞쪽 항과 뒤쪽 항을 짝지어 보면 쉽게 해결할 수 있습니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    어려운 수학 문제의 해결 방법은 계산 자체가 아니라 구조를 발견하는 것입니다.
                                    계산이 어려워 보이면 무작정 계산하지 말고 잠시 멈추어 식을 다시 관찰해 보세요.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    식을 분해할 수는 없는지, 항의 순서를 바꿀 수는 없는지,
                                    또는 서로 묶어서 새로운 구조를 만들 수는 없는지 생각해 보아야 합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    전개와 인수분해 같은 항등변환은 식을 분해하고 다시 조립하는 데 도움을 주는 중요한 도구입니다.
                                </p>

                                <p className="mt-3 font-semibold text-white">
                                    수학 문제는 계산을 많이 하는 것이 아니라 계산하기 쉬운 형태로 바꾸는 과정이라고 생각하면 좋습니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-6 text-3xl font-bold">
                    1.22 다항식의 나눗셈
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    초등학교에서 배운 나눗셈과 고등학교에서 배우는 다항식의 나눗셈은
                    본질적으로 같은 계산입니다.
                    먼저 초등학교에서 배운 나눗셈을 다시 살펴보겠습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        초등학교에서 배운 나눗셈
                    </h3>

                    <p className="leading-8 text-gray-300">
                        예를 들어 <InlineMath math="23\div4=5\cdots3" />
                        입니다.
                    </p>

                    <div className="my-6 flex justify-center">
                        <div className="font-mono text-lg leading-8 text-white">

                            <div className="ml-12">
                                5 ⋯ 3
                            </div>

                            <div className="flex">
                                <div className="pr-3">4</div>

                                <div className="border-l-2 border-t-2 border-white pl-4 pr-6">
                                    23
                                </div>
                            </div>

                            <div className="ml-12">
                                20
                            </div>

                            <div className="ml-12 w-10 border-t-2 border-white">
                                3
                            </div>

                        </div>
                    </div>

                    <p className="leading-8 text-gray-300">
                        여기서 <InlineMath math="20=4\times5" />이므로
                    </p>

                    <BlockMath math="23=20+3" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="23=4\times5+3" />

                    <p className="leading-8 text-gray-300">
                        와 같이 나타낼 수 있습니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        즉,
                    </p>

                    <BlockMath math="\text{나누어지는 수}=\text{나누는 수}\times\text{몫}+\text{나머지}" />

                    <p className="leading-8 text-gray-300">
                        의 관계가 항상 성립합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        다항식의 나눗셈도 같은 원리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />
                        를 <InlineMath math="g(x)" />
                        로 나눈 몫이 <InlineMath math="Q(x)" />
                        이고,
                        나머지가 <InlineMath math="R(x)" />
                        라고 하면
                    </p>

                    <BlockMath math="f(x)=g(x)Q(x)+R(x)" />

                    <p className="leading-8 text-gray-300">
                        이 성립합니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        즉,
                    </p>

                    <BlockMath math="\text{나누어지는 식}=\text{나누는 식}\times\text{몫}+\text{나머지}" />

                    <p className="leading-8 text-gray-300">
                        로 나타낼 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        나누는 식과 나머지의 관계
                    </h3>

                    <p className="leading-8 text-gray-300">
                        숫자의 나눗셈에서는 나머지가 나누는 수보다 작아야 합니다.
                    </p>

                    <BlockMath math="23=4\times5+3" />

                    <p className="leading-8 text-gray-300">
                        에서 나머지 3은 나누는 수 4보다 작습니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        다항식의 나눗셈도 마찬가지입니다.
                        나머지의 차수가 나누는 식의 차수보다 크거나 같으면
                        다시 나눌 수 있으므로 나눗셈이 끝난 것이 아닙니다.
                    </p>

                    <BlockMath math="R(x)\text{의 차수} < g(x)\text{의 차수}" />

                    <p className="leading-8 text-gray-300">
                        따라서 나머지의 차수는 항상 나누는 식의 차수보다 낮아야 합니다.
                    </p>

                    <div className="mt-5 overflow-x-auto">
                        <table className="w-full border-collapse text-center">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-3">나누는 식</th>
                                    <th className="p-3">가능한 나머지</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="p-3">3차식</td>
                                    <td className="p-3">2차 이하</td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">2차식</td>
                                    <td className="p-3">1차 이하</td>
                                </tr>

                                <tr>
                                    <td className="p-3">1차식</td>
                                    <td className="p-3">상수</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="p(x)" />는 <InlineMath math="x" />에 관한 다항식이고,
                    </p>

                    <BlockMath math="x^8+ax^3+b=(x^2-1)p(x)+4" />

                    <p className="leading-8 text-gray-300">
                        가 <InlineMath math="x" />에 관한 항등식일 때, <InlineMath math="10a+b" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                오른쪽에 <InlineMath math="x^2-1" />이 있으므로 <InlineMath math="x^2=1" />을 이용합니다.
                            </p>

                            <p>
                                <InlineMath math="x^2=1" />이면
                            </p>

                            <BlockMath math="x^8=(x^2)^4=1,\quad x^3=x" />

                            <p>
                                따라서 주어진 식은
                            </p>

                            <BlockMath math="1+ax+b=4" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="ax+b=3" />

                            <p>
                                이 식이 <InlineMath math="x^2=1" />을 만족하는 모든 <InlineMath math="x" />에 대하여 성립해야 하므로 <InlineMath math="x=1,\;-1" />에서 모두 성립해야 합니다.
                            </p>

                            <BlockMath math="a+b=3" />
                            <BlockMath math="-a+b=3" />

                            <p>
                                두 식을 풀면
                            </p>

                            <BlockMath math="a=0,\quad b=3" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="10a+b=3" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        다음 식이 <InlineMath math="x" />에 대한 항등식일 때, <InlineMath math="pq" />의 값을 구하여라.
                    </p>

                    <BlockMath math="(x+1)(x^2-2)Q(x)=x^4+px^2+q" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                왼쪽에는 <InlineMath math="x+1" />과 <InlineMath math="x^2-2" />가 곱해져 있습니다.
                                따라서 각각을 <InlineMath math="0" />으로 만드는 조건을 이용합니다.
                            </p>

                            <p>
                                먼저 <InlineMath math="x=-1" />을 대입하면 왼쪽은 <InlineMath math="0" />이 됩니다.
                            </p>

                            <BlockMath math="1+p+q=0" />

                            <p>
                                다음으로 <InlineMath math="x^2=2" />를 대입하면 <InlineMath math="x^2-2=0" />이므로 왼쪽은 역시 <InlineMath math="0" />이 됩니다.
                            </p>

                            <BlockMath math="x^4+px^2+q=0" />
                            <BlockMath math="4+2p+q=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="p+q=-1" />
                            <BlockMath math="2p+q=-4" />

                            <p>
                                두 식을 풀면
                            </p>

                            <BlockMath math="p=-3,\quad q=2" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="pq=-6" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-6" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x^2=2" />를 만족하는 값은 <InlineMath math="x=\sqrt{2}" />, <InlineMath math="x=-\sqrt{2}" />입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    각각의 값을 직접 대입해도 되지만,
                                    이 문제에서 필요한 것은 <InlineMath math="x" />의 값이 아니라 <InlineMath math="x^2" />의 값입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    그래서 <InlineMath math="x=\sqrt{2}" />와 <InlineMath math="x=-\sqrt{2}" />를 따로 계산하지 않고, <InlineMath math="x^2=2" />를 바로 이용하면 계산이 훨씬 간단해집니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^5-4x^3+ax-1" />을 <InlineMath math="x^3-x^2+bx" />로 나누었을 때의 몫이 <InlineMath math="x^2+x-1" />이고, 나머지가 <InlineMath math="cx^2-1" />이라 한다.
                        이때 <InlineMath math="a,\;b,\;c" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                다항식의 나눗셈에서는 다음 관계가 성립합니다.
                            </p>

                            <BlockMath math="\text{나누어지는 식}=\text{나누는 식}\times\text{몫}+\text{나머지}" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x^5-4x^3+ax-1=(x^3-x^2+bx)(x^2+x-1)+(cx^2-1)" />

                            <p>
                                오른쪽을 전개합니다.
                            </p>

                            <BlockMath math="(x^3-x^2+bx)(x^2+x-1)" />

                            <BlockMath math="=x^5-x^3+b x^3+b x^2-bx" />

                            <p>
                                여기에 나머지 <InlineMath math="cx^2-1" />을 더하면
                            </p>

                            <BlockMath math="x^5+(b-1)x^3+(b+c)x^2-bx-1" />

                            <p>
                                이것이
                            </p>

                            <BlockMath math="x^5-4x^3+ax-1" />

                            <p>
                                와 같아야 하므로 계수를 비교합니다.
                            </p>

                            <BlockMath math="b-1=-4" />
                            <BlockMath math="b+c=0" />
                            <BlockMath math="-b=a" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="b=-3,\quad c=3,\quad a=3" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="a=3,\;b=-3,\;c=3" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        정리
                    </h3>

                    <BlockMath math="\text{나누어지는 식}=\text{나누는 식}\times\text{몫}+\text{나머지}" />

                    <p className="leading-8 text-gray-300">
                        초등학교의 나눗셈과 다항식의 나눗셈은 같은 원리를 사용합니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        또한 나머지는 항상 나누는 식보다 차수가 낮아야 합니다.
                    </p>

                    <BlockMath math="\text{나머지의 차수 < 나누는 식의 차수}" />

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.23 나머지정리
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    나머지정리는 <InlineMath math="x" />에 관한 식을 일차식으로 나눈
                    나머지를 구하는 방법입니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">나머지정리</h3>

                    <p className="leading-8 text-gray-300">
                        일차식이 <InlineMath math="0" />이 되게 하는 <InlineMath math="x" />의 값을 <InlineMath math="x" />에 관한 식에 대입합니다.
                    </p>

                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border-collapse text-center text-gray-300">
                            <thead>
                                <tr className="border-b border-white/20 text-white">
                                    <th className="p-3">x에 관한 식</th>
                                    <th className="p-3">일차식</th>
                                    <th className="p-3">0으로 만드는 값</th>
                                    <th className="p-3">나머지</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="p-3"><InlineMath math="f(x)" /></td>
                                    <td className="p-3"><InlineMath math="x-3" /></td>
                                    <td className="p-3"><InlineMath math="3" /></td>
                                    <td className="p-3"><InlineMath math="f(3)" /></td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3"><InlineMath math="2f(x)-3g(x)" /></td>
                                    <td className="p-3"><InlineMath math="x+2" /></td>
                                    <td className="p-3"><InlineMath math="-2" /></td>
                                    <td className="p-3"><InlineMath math="2f(-2)-3g(-2)" /></td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3"><InlineMath math="{f(x)}^2" /></td>
                                    <td className="p-3"><InlineMath math="2x-1" /></td>
                                    <td className="p-3"><InlineMath math="\frac12" /></td>
                                    <td className="p-3"><InlineMath math="{f\left(\frac12\right)}^2" /></td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        <InlineMath math="x^3-x^2+x-1" />
                                    </td>
                                    <td className="p-3"><InlineMath math="3x+2" /></td>
                                    <td className="p-3"><InlineMath math="-\frac23" /></td>
                                    <td className="p-3">
                                        <InlineMath math="\left(-\frac23\right)^3-\left(-\frac23\right)^2+\left(-\frac23\right)-1" />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-3"><InlineMath math="f(3x-1)" /></td>
                                    <td className="p-3"><InlineMath math="x" /></td>
                                    <td className="p-3"><InlineMath math="0" /></td>
                                    <td className="p-3"><InlineMath math="f(-1)" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">왜 그럴까?</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)" />를 <InlineMath math="x-3" />으로 나눈
                        나머지를 <InlineMath math="R" />이라고 하면
                    </p>

                    <BlockMath math="f(x)=(x-3)Q(x)+R" />

                    <p className="leading-8 text-gray-300">
                        입니다. 양변에 <InlineMath math="x=3" />을 대입하면
                    </p>

                    <BlockMath math="f(3)=(3-3)Q(3)+R" />
                    <BlockMath math="f(3)=R" />

                    <p className="leading-8 text-gray-300">
                        따라서 <InlineMath math="x-3" />으로 나눈 나머지는 <InlineMath math="f(3)" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        나머지정리는 이미 증명이 끝난 정리입니다.<br />
                        문제를 풀 때마다 <InlineMath math="f(x)=(x-a)Q(x)+R" />
                        를 다시 쓸 필요는 없습니다.
                    </p>

                    <p className="mt-3 font-semibold text-white">
                        일차식이 <InlineMath math="0" />이 되는 값을 대입하는 것이
                        나머지정리의 결론입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 일차식 <InlineMath math="ax+b" />로 나누었을 때,
                        나머지로 옳은 것은?
                    </p>

                    <div className="mt-5 grid gap-3 text-gray-300 sm:grid-cols-2 lg:grid-cols-5">
                        <div>① <InlineMath math="f(-b)" /></div>
                        <div>② <InlineMath math="f(0)" /></div>
                        <div>③ <InlineMath math="f(1)" /></div>
                        <div>④ <InlineMath math="f\left(-\frac{b}{a}\right)" /></div>
                        <div>⑤ <InlineMath math="f\left(\frac{b}{a}\right)" /></div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                나머지정리는 일차식이 <InlineMath math="0" />이 되게 하는 <InlineMath math="x" />의 값을 대입하는 것입니다.
                            </p>

                            <p>
                                나누는 식은 <InlineMath math="ax+b" />이므로
                            </p>

                            <BlockMath math="ax+b=0" />

                            <p>
                                를 풀면
                            </p>

                            <BlockMath math="x=-\frac{b}{a}" />

                            <p>
                                따라서 나머지는
                            </p>

                            <BlockMath math="f\left(-\frac{b}{a}\right)" />

                            <p className="font-semibold text-white">
                                따라서 정답은 ④ <InlineMath math="f\left(-\frac{b}{a}\right)" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        두 다항식 <InlineMath math="f(x),\;g(x)" />에 대하여 <InlineMath math="f(x)+g(x)" />, <InlineMath math="f(x)g(x)" />를 <InlineMath math="x+2" />로 나눈 나머지가 각각 <InlineMath math="8,\;15" />라고 한다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        이때 <InlineMath math="\{f(x)\}^2+\{g(x)\}^2" />을 <InlineMath math="x+2" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">구하려는 것</p>

                            <p>
                                <InlineMath math="x+2=0" />이 되게 하는 값은 <InlineMath math="x=-2" />입니다.
                            </p>

                            <p>
                                따라서 구하려는 나머지는
                            </p>

                            <BlockMath math="\{f(-2)\}^2+\{g(-2)\}^2" />

                            <p className="font-semibold text-white">조건에서 알 수 있는 것</p>

                            <p>
                                <InlineMath math="f(x)+g(x)" />를 <InlineMath math="x+2" />로 나눈 나머지가
                                <InlineMath math="8" />이므로
                            </p>

                            <BlockMath math="f(-2)+g(-2)=8" />

                            <p>
                                <InlineMath math="f(x)g(x)" />를 <InlineMath math="x+2" />로 나눈 나머지가
                                <InlineMath math="15" />이므로
                            </p>

                            <BlockMath math="f(-2)g(-2)=15" />

                            <p className="font-semibold text-white">풀이</p>

                            <p>
                                구하려는 식은 제곱의 합이므로 다음 항등식을 이용합니다.
                            </p>

                            <BlockMath math="A^2+B^2=(A+B)^2-2AB" />

                            <p>
                                여기서 <InlineMath math="A=f(-2)" />, <InlineMath math="B=g(-2)" />로 보면
                            </p>

                            <BlockMath math="\{f(-2)\}^2+\{g(-2)\}^2" />
                            <BlockMath math="=\{f(-2)+g(-2)\}^2-2f(-2)g(-2)" />
                            <BlockMath math="=8^2-2\cdot15" />
                            <BlockMath math="=64-30=34" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="34" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    문제를 읽자마자 계산하지 말고, 먼저 무엇을 구해야 하는지 확인해 봅니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 문제에서 구하려는 것은 <InlineMath math="\{f(-2)\}^2+\{g(-2)\}^2" />이고,
                                    조건에서 알 수 있는 것은 <InlineMath math="f(-2)+g(-2)" />와 <InlineMath math="f(-2)g(-2)" />입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    구하려는 식과 조건 사이의 관계를 찾으면, <InlineMath math="f(-2)" />와 <InlineMath math="g(-2)" />를
                                    각각 구하지 않아도 문제를 해결할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />의 다항식 <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나눌 때 나머지가 <InlineMath math="2" />이다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        <InlineMath math="(x^2+3x+5)f(x)" />를 <InlineMath math="x-2" />로 나눌 때의 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                구하려는 것
                            </p>

                            <p>
                                <InlineMath math="(x^2+3x+5)f(x)" />를 <InlineMath math="x-2" />로 나눈 나머지입니다.
                            </p>

                            <p>
                                나머지정리에 의해 <InlineMath math="x-2=0" />이 되게 하는 값 <InlineMath math="x=2" />를 대입하면 됩니다.
                            </p>

                            <BlockMath math="(2^2+3\cdot2+5)f(2)=15f(2)" />

                            <p className="font-semibold text-white">
                                주어진 조건
                            </p>

                            <p>
                                <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나눈 나머지가 <InlineMath math="2" />이므로
                            </p>

                            <BlockMath math="f(2)=2" />

                            <p className="font-semibold text-white">
                                계산
                            </p>

                            <BlockMath math="15f(2)=15\cdot2=30" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="30" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    문제를 읽으면 먼저 무엇을 구해야 하는지 확인합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 문제에서 구하려는 것은 <InlineMath math="f(2)" />가 아니라 <InlineMath math="(x^2+3x+5)f(x)" />를 <InlineMath math="x-2" />로 나눈 나머지입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    나머지정리에 의해 먼저 <InlineMath math="x=2" />를 대입한 식을 만들고,
                                    그 다음 조건에서 <InlineMath math="f(2)=2" />를 이용하면
                                    계산을 쉽게 할 수 있습니다.
                                </p>

                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)=x^3+2x^2-4x+k" />
                        를 <InlineMath math="x-1" />
                        로 나누어떨어지도록 할 때,
                        상수 <InlineMath math="k" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                구하려는 것
                            </p>

                            <p>
                                <InlineMath math="k" />의 값을 구하는 문제입니다.
                            </p>

                            <p className="font-semibold text-white">
                                주어진 조건
                            </p>

                            <p>
                                <InlineMath math="x-1" />로 나누어떨어진다는 것은
                                나머지가 <InlineMath math="0" />이라는 뜻입니다.
                            </p>

                            <p>
                                따라서 나머지정리에 의해
                            </p>

                            <BlockMath math="f(1)=0" />

                            <p className="font-semibold text-white">
                                계산
                            </p>

                            <BlockMath math="1^3+2(1)^2-4(1)+k=0" />

                            <BlockMath math="1+2-4+k=0" />

                            <BlockMath math="-1+k=0" />

                            <BlockMath math="k=1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    "나누어떨어진다"는 말이 나오면
                                    가장 먼저 "나머지가 0이다"를 떠올려야 합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    그리고 나머지정리에 의해 <InlineMath math="x-1" />을 <InlineMath math="0" />으로 만드는 값 <InlineMath math="x=1" />을 대입하면 됩니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    나누어떨어짐 → 나머지 0 →
                                    <InlineMath math="f(1)=0" />
                                    의 흐름을 익혀 두면
                                    인수정리에서도 그대로 사용할 수 있습니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)=x^3+ax^2+bx+2" />에 대하여 <InlineMath math="f(x)" />가 <InlineMath math="x-1" />로 나누어떨어질 때, <InlineMath math="a+b" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">구하려는 것</p>

                            <p>
                                이 문제에서 구하려는 것은 <InlineMath math="a" />, <InlineMath math="b" /> 각각이 아니라 <InlineMath math="a+b" />입니다.
                            </p>

                            <p className="font-semibold text-white">주어진 조건</p>

                            <p>
                                <InlineMath math="x-1" />로 나누어떨어진다는 것은
                                나머지가 <InlineMath math="0" />이라는 뜻입니다.
                            </p>

                            <BlockMath math="f(1)=0" />

                            <p className="font-semibold text-white">계산</p>

                            <BlockMath math="1^3+a\cdot1^2+b\cdot1+2=0" />
                            <BlockMath math="1+a+b+2=0" />
                            <BlockMath math="a+b+3=0" />
                            <BlockMath math="a+b=-3" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-3" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    문제를 풀기 전에 구하려는 것이 무엇인지 먼저 확인해야 합니다.
                                    이 문제는 <InlineMath math="a" />와 <InlineMath math="b" />를
                                    각각 구하는 문제가 아니라 <InlineMath math="a+b" />를 구하는 문제입니다.
                                    문제에 따라서 각각의 값을 구할 수 없어도 하나의 식의 형태로 나오기도 합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    목표를 먼저 확인하면 불필요하게 <InlineMath math="a" />, <InlineMath math="b" />를
                                    따로 구하려는 시행착오를 줄일 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="2x^3+ax^2+bx-12" />를 <InlineMath math="x-2" />로 나누면 떨어지고, <InlineMath math="x-3" />으로 나누면 <InlineMath math="12" />가 남을 때, <InlineMath math="a+b" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">조건 정리</p>

                            <p>
                                <InlineMath math="x-2" />로 나누어떨어지므로
                            </p>

                            <BlockMath math="f(2)=0" />

                            <p>
                                <InlineMath math="x-3" />으로 나누면 나머지가
                                <InlineMath math="12" />이므로
                            </p>

                            <BlockMath math="f(3)=12" />

                            <p className="font-semibold text-white">계산</p>

                            <BlockMath math="f(2)=2\cdot2^3+a\cdot2^2+2b-12=0" />
                            <BlockMath math="16+4a+2b-12=0" />
                            <BlockMath math="4a+2b=-4" />
                            <BlockMath math="2a+b=-2" />

                            <BlockMath math="f(3)=2\cdot3^3+a\cdot3^2+3b-12=12" />
                            <BlockMath math="54+9a+3b-12=12" />
                            <BlockMath math="9a+3b=-30" />
                            <BlockMath math="3a+b=-10" />

                            <p>
                                두 식
                            </p>

                            <BlockMath math="2a+b=-2,\quad 3a+b=-10" />

                            <p>
                                을 연립하면
                            </p>

                            <BlockMath math="a=-8,\quad b=14" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a+b=6" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="6" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />에 관한 식 <InlineMath math="2x^3+ax^2+bx+1" />을 <InlineMath math="x-1" />로 나누면 나머지가 <InlineMath math="8" />이고, <InlineMath math="x+1" />로 나누면 나누어떨어진다.
                        이 식을 <InlineMath math="x+2" />로 나눌 때의 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">구하려는 것</p>

                            <p>
                                <InlineMath math="x+2" />로 나눈 나머지를 구해야 하므로 <InlineMath math="x=-2" />를 대입한 값을 구하면 됩니다.
                            </p>

                            <BlockMath math="f(-2)" />

                            <p className="font-semibold text-white">조건 정리</p>

                            <p>
                                <InlineMath math="x-1" />로 나누면 나머지가 <InlineMath math="8" />이므로
                            </p>

                            <BlockMath math="f(1)=8" />

                            <p>
                                <InlineMath math="x+1" />로 나누어떨어지므로
                            </p>

                            <BlockMath math="f(-1)=0" />

                            <p className="font-semibold text-white">계산</p>

                            <BlockMath math="f(1)=2+a+b+1=8" />
                            <BlockMath math="a+b=5" />

                            <BlockMath math="f(-1)=-2+a-b+1=0" />
                            <BlockMath math="a-b=1" />

                            <p>
                                두 식을 연립하면
                            </p>

                            <BlockMath math="a=3,\quad b=2" />

                            <p>
                                모르는 값 <InlineMath math="a,b" />를 알게 되었으므로 식을 업데이트합니다.
                            </p>

                            <BlockMath math="f(x)=2x^3+3x^2+2x+1" />

                            <p>
                                이제 <InlineMath math="x=-2" />를 대입합니다.
                            </p>

                            <BlockMath math="f(-2)=2(-2)^3+3(-2)^2+2(-2)+1" />
                            <BlockMath math="=-16+12-4+1" />
                            <BlockMath math="=-7" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-7" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    모르는 값을 구했다면 반드시 원래 식에 다시 반영해야 합니다.
                                    이 과정을 놓치면 마지막에 어떤 식에 값을 대입해야 하는지 헷갈리기 쉽습니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">1.24 조립제법</h2>

                <p className="leading-8 text-gray-300">
                    조립제법은 다항식을 일차식으로 나눌 때,
                    몫과 나머지를 계수만으로 찾는 방법입니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    일반적인 다항식 나눗셈에서는 식 전체를 쓰면서 계산하지만,
                    조립제법에서는 계수만 적어 계산합니다.
                    또한 나눗셈 과정의 뺄셈 연산을 덧셈 연산으로 바꾸어 계산합니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        일반적인 나눗셈과 조립제법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음은 <InlineMath math="2x^3+3x^2-4x+1" />을 <InlineMath math="x-2" />로 나누는 계산입니다.
                    </p>

                    <div className="mt-6 overflow-hidden rounded-xl bg-white p-3">
                        <img
                            src="/images/synthetic-division.png"
                            alt="일반적인 나눗셈과 조립제법 비교"
                            className="w-full"
                        />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 방법은 계산 과정은 다르지만 같은 나눗셈을 수행합니다.
                    </p>

                    <BlockMath math="2x^3+3x^2-4x+1=(x-2)(2x^2+7x+10)+21" />

                    <p className="leading-8 text-gray-300">
                        따라서 몫은 <InlineMath math="2x^2+7x+10" />이고,
                        나머지는 <InlineMath math="21" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        생각해보기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        조립제법은 새로운 나눗셈이 아니라,
                        일반적인 다항식 나눗셈을 계수만으로 간단하게 표현한 것입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        다만 조립제법은 일차식이 0이 되는 값을 기준으로 계산하므로,
                        나누는 식이 무엇인지 항상 함께 확인해야 합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        나머지만 구하는 문제에서는 조립제법보다
                        나머지정리로 직접 대입하는 것이 더 간단한 경우도 많습니다.<br />
                        조립제법은 몫과 나머지를 함께 구해야 할 때 특히 유용합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 일차식 <InlineMath math="x-a" />로 나누었을 때의 몫을 <InlineMath math="Q(x)" />, 나머지를 <InlineMath math="R" />이라 하자.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        이때 <InlineMath math="x^2f(x)" />를 <InlineMath math="x-a" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                구하려는 것
                            </p>

                            <p>
                                <InlineMath math="x^2f(x)" />를 <InlineMath math="x-a" />로 나눈 나머지입니다.
                            </p>

                            <p>
                                나머지정리에 의해 <InlineMath math="x=a" />를 대입한 값을 구하면 됩니다.
                            </p>

                            <BlockMath math="x^2f(x)\rightarrow a^2f(a)" />

                            <p className="font-semibold text-white">
                                주어진 조건
                            </p>

                            <p>
                                <InlineMath math="f(x)" />를 <InlineMath math="x-a" />로 나눈 나머지가 <InlineMath math="R" />이므로
                            </p>

                            <BlockMath math="f(a)=R" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a^2f(a)=a^2R" />

                            <p className="font-semibold text-white">
                                따라서 나머지는
                            </p>

                            <BlockMath math="a^2R" />

                            <p className="font-semibold text-white">
                                정답은 <InlineMath math="a^2R" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    나머지정리는 <InlineMath math="f(x)" />에만 적용되는 것이 아닙니다. <InlineMath math="x^2f(x)" />, <InlineMath math="\{f(x)\}^2" />, <InlineMath math="2f(x)-3g(x)" />와 같이 <InlineMath math="x" />에 관한 식이라면
                                    모두 같은 방법으로 적용할 수 있습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    먼저 구하려는 대상을 확인한 뒤,
                                    일차식이 <InlineMath math="0" />이 되는 값을 대입하면 됩니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.25 조립제법만 있는 경우의 주의사항
                </h2>

                <p className="leading-8 text-gray-300">
                    조립제법은 일차식으로 나누는 계산을 간단하게 기록한 방법입니다.
                    하지만 조립제법만 보고는 원래 나눗셈의 모든 정보를 알 수는 없습니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        예시
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 조립제법을 살펴봅시다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath
                            math={String.raw`
                                \begin{array}{r|rrrr}
                                -1 & 1 & 2 & 3 & 4\\
                                &   & -1 & -1 & -2\\
                                \hline
                                & 1 & 1 & 2 & 2
                                \end{array}
                                `}
                        />
                    </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                    <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                        <h3 className="mb-4 text-xl font-bold text-green-300">
                            정확하게 알 수 있는 것
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조립제법의 첫 줄은 나누어지는 식의 계수입니다.
                        </p>

                        <BlockMath math="x^3+2x^2+3x+4" />

                        <p className="leading-8 text-gray-300">
                            또한 마지막 숫자는 나머지입니다.
                        </p>

                        <BlockMath math="\text{나머지}=2" />
                    </div>

                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            정확하게 알 수 없는 것
                        </h3>

                        <p className="leading-8 text-gray-300">
                            조립제법의 왼쪽 숫자 <InlineMath math="-1" />은
                            일차식이 <InlineMath math="0" />이 되는 값만 알려 줍니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 나누는 식과 몫은
                            조립제법만으로는 정확하게 결정할 수 없습니다.
                        </p>
                    </div>

                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        왜 그럴까?
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 세 일차식은 모두 <InlineMath math="x=-1" />일 때 <InlineMath math="0" />이 됩니다.
                    </p>

                    <BlockMath math="x+1" />
                    <BlockMath math="2x+2" />
                    <BlockMath math="\frac12x+\frac12" />

                    <p className="leading-8 text-gray-300">
                        따라서 위 세 식으로 나누는 경우 모두 같은 조립제법을 사용합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        그러나 나누는 식이 달라지면 몫은 달라집니다.
                    </p>

                    <div className="mt-5 overflow-x-auto">
                        <table className="w-full border-collapse text-center">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-3 text-white">나누는 식</th>
                                    <th className="p-3 text-white">몫</th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        <InlineMath math="x+1" />
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="x^2+x+2" />
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        <InlineMath math="2x+2" />
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="\frac12(x^2+x+2)" />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-3">
                                        <InlineMath math="\frac12x+\frac12" />
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="2(x^2+x+2)" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        나누는 식과 몫을 곱하면
                        모두 같은 나누어지는 식 <InlineMath math="x^3+2x^2+3x+4" />
                        이 만들어집니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-3 font-bold text-red-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        조립제법은 계산 과정의 일부를 간단하게 기록한 것입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        따라서 조립제법만 보고는
                        <strong>나누어지는 식과 나머지</strong>는 알 수 있지만,
                        <strong>나누는 식과 몫</strong>은 정확하게 결정할 수 없습니다.
                    </p>

                    <p className="mt-3 font-semibold text-white">
                        나누는 식 또는 몫 중 하나는 함께 주어져야
                        원래의 나눗셈을 완전히 복원할 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)" />를 <InlineMath math="ax-b" />로 나눌 때의 몫을 <InlineMath math="Q(x)" />,
                        나머지를 <InlineMath math="R" />
                        이라 하자.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        이때, <InlineMath math="f(x)" />를 <InlineMath math="x-\frac{b}{a}" />로 나눈 몫과 나머지는?
                    </p>

                    <div className="mt-5 rounded-xl border border-white/15 p-5">
                        <p className="leading-8 text-gray-300">
                            ① <InlineMath math="Q(x),\ R" />
                        </p>

                        <p className="leading-8 text-gray-300">
                            ② <InlineMath math="aQ(x),\ R" />
                        </p>

                        <p className="leading-8 text-gray-300">
                            ③ <InlineMath math="aQ(x),\ aR" />
                        </p>

                        <p className="leading-8 text-gray-300">
                            ④ <InlineMath math="\frac1aQ(x),\ R" />
                        </p>

                        <p className="leading-8 text-gray-300">
                            ⑤ <InlineMath math="\frac1aQ(x),\ \frac1aR" />
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                주어진 조건에 의해
                            </p>

                            <BlockMath math="f(x)=(ax-b)Q(x)+R" />

                            <p>
                                그런데
                            </p>

                            <BlockMath math="ax-b=a\left(x-\frac{b}{a}\right)" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="f(x)=a\left(x-\frac{b}{a}\right)Q(x)+R" />

                            <BlockMath math="f(x)=\left(x-\frac{b}{a}\right)\{aQ(x)\}+R" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\text{몫}=aQ(x)" />
                            <BlockMath math="\text{나머지}=R" />

                            <p className="font-semibold text-white">
                                정답은 ② <InlineMath math="aQ(x),\ R" /> 입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="ax-b" />와 <InlineMath math="x-\frac{b}{a}" />는 <InlineMath math="x=\frac{b}{a}" />에서
                                    모두 <InlineMath math="0" />이 됩니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 나머지는 같지만,
                                    나누는 식의 계수가 달라졌으므로
                                    몫은 달라질 수 있습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이는 조립제법에서
                                    일차식이 <InlineMath math="0" />이 되는 값만으로는
                                    나누는 식과 몫을 정확하게 결정할 수 없는 이유이기도 합니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.26 연조립제법
                </h2>

                <p className="leading-8 text-gray-300">
                    연조립제법은 조립제법을 여러 번 이어서 사용하여 계수를 찾는 방법입니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    조립제법을 한 번 하면 몫과 나머지가 나옵니다.
                    이때 나온 몫을 다시 일차식으로 나누는 방법을 연조립제법이라고 합니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        연조립제법의 생각
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="x-a" />로 나누면
                    </p>

                    <BlockMath math="f(x)=(x-a)Q_1(x)+R_1" />

                    <p className="leading-8 text-gray-300">
                        이 됩니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        여기서 나온 몫 <InlineMath math="Q_1(x)" />을 다시 <InlineMath math="x-b" />로 나누면
                    </p>

                    <BlockMath math="Q_1(x)=(x-b)Q_2(x)+R_2" />

                    <p className="leading-8 text-gray-300">
                        처럼 계속 이어서 계산할 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        연조립제법은 새로운 계산법이 아니라 조립제법을 반복해서 사용하는 방법입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        조립제법으로 나온 몫을 다시 조립제법하면,
                        여러 단계의 계수나 나머지를 차례대로 찾을 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        등식 <InlineMath math="x^3+2x^2-4=a(x-1)^3+b(x-1)^2+c(x-1)+d" />
                        이 <InlineMath math="x" />에 관한 항등식이 될 때, <br /><InlineMath math="a+b+c-d" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                풀이 1 : 연조립제법
                            </p>

                            <p>
                                주어진 식을 <InlineMath math="x-1" />을 기준으로 정리해야 하므로, <InlineMath math="x=1" />을 기준으로 연조립제법을 사용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{array}{r|rrrr}
1 & 1 & 2 & 0 & -4\\
  &   & 1 & 3 & 3\\
\hline
  & 1 & 3 & 3 & -1
\end{array}
`}
                            />

                            <p>
                                첫 번째 나머지는 <InlineMath math="d=-1" />입니다.
                                나온 몫 <InlineMath math="x^2+3x+3" />을 다시 조립제법합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{array}{r|rrr}
1 & 1 & 3 & 3\\
  &   & 1 & 4\\
\hline
  & 1 & 4 & 7
\end{array}
`}
                            />

                            <p>
                                따라서 <InlineMath math="c=7" />입니다.
                                다시 나온 몫 <InlineMath math="x+4" />를 조립제법합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{array}{r|rr}
1 & 1 & 4\\
  &   & 1\\
\hline
  & 1 & 5
\end{array}
`}
                            />

                            <p>
                                따라서 <InlineMath math="b=5" />이고, 마지막 몫이
                                <InlineMath math="1" />이므로 <InlineMath math="a=1" />입니다.
                            </p>

                            <BlockMath math="a=1,\quad b=5,\quad c=7,\quad d=-1" />

                            <BlockMath math="a+b+c-d=1+5+7-(-1)=14" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="14" />입니다.
                            </p>
                            <p>
                                이 풀이를 하나의 연조립제법을 하면 다음과 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{array}{r|rrrr}
1 & 1 & 2 & 0 & -4\\
  &   & 1 & 3 & 3\\
\hline
1  & 1 & 3 & 3 & -1\\
&   & 1 & 4\\
\hline
1  & 1 & 4 & 7\\
&   & 1\\
\hline
  & 1 & 5
\end{array}
`}
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    다른 풀이
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x-1" />을 하나의 문자처럼 보기 위해 <InlineMath math="x" /> 대신 <InlineMath math="x+1" />을 대입합니다.
                                </p>

                                <BlockMath math="(x+1)^3+2(x+1)^2-4=ax^3+bx^2+cx+d" />

                                <BlockMath math="x^3+5x^2+7x-1=ax^3+bx^2+cx+d" />

                                <p>
                                    계수를 비교하면
                                </p>

                                <BlockMath math="a=1,\quad b=5,\quad c=7,\quad d=-1" />

                                <BlockMath math="a+b+c-d=14" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 항등식
                    </p>

                    <BlockMath math="ax^3+bx^2+cx+d=3(x-1)^3+2(x-1)^2-5(x-1)+6" />

                    <p className="leading-8 text-gray-300">
                        에서 <InlineMath math="a+2b+3c+4d" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">풀이 1 : 전개해서 계수비교</p>

                            <BlockMath math="3(x-1)^3+2(x-1)^2-5(x-1)+6" />

                            <BlockMath math="=3(x^3-3x^2+3x-1)+2(x^2-2x+1)-5x+5+6" />

                            <BlockMath math="=3x^3-7x^2+10" />

                            <p>
                                따라서 계수를 비교하면
                            </p>

                            <BlockMath math="a=3,\quad b=-7,\quad c=0,\quad d=10" />

                            <BlockMath math="a+2b+3c+4d=3+2(-7)+3(0)+4(10)=29" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="29" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : <InlineMath math="x" /> 대신 <InlineMath math="x+1" /> 대입 후 연조립제법
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    양변에 <InlineMath math="x" /> 대신 <InlineMath math="x+1" />을 대입하면
                                </p>

                                <BlockMath math="a(x+1)^3+b(x+1)^2+c(x+1)+d=3x^3+2x^2-5x+6" />

                                <p>
                                    이제 오른쪽 식을 <InlineMath math="x+1" />을 기준으로 연조립제법합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{r|rrrr}
-1 & 3 & 2 & -5 & 6\\
   &   & -3 & 1 & 4\\
\hline
   & 3 & -1 & -4 & 10
\end{array}
`}
                                />

                                <p>
                                    따라서 <InlineMath math="d=10" />입니다. 나온 몫
                                    <InlineMath math="3x^2-x-4" />를 다시 조립제법합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{r|rrr}
-1 & 3 & -1 & -4\\
   &   & -3 & 4\\
\hline
   & 3 & -4 & 0
\end{array}
`}
                                />

                                <p>
                                    따라서 <InlineMath math="c=0" />입니다. 다시 나온 몫
                                    <InlineMath math="3x-4" />를 조립제법합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{r|rr}
-1 & 3 & -4\\
   &   & -3\\
\hline
   & 3 & -7
\end{array}
`}
                                />

                                <p>
                                    따라서 <InlineMath math="b=-7" />이고 마지막 몫이
                                    <InlineMath math="3" />이므로 <InlineMath math="a=3" />입니다.
                                </p>

                                <BlockMath math="a=3,\quad b=-7,\quad c=0,\quad d=10" />
                                <BlockMath math="a+2b+3c+4d=29" />

                                <p>
                                    이 풀이를 하나의 연조립제법을 하면 다음과 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
            \begin{array}{r|rrrr}
            -1 & 3 & 2 & -5 & 6\\
            &   & 3 & 1 & 4\\
            \hline
            -1  & 3 & -1 & -4 & 10\\
            &   & -3 & 4\\
            \hline
            -1  & 3 & -4 & 0\\
            &   & -3\\
            \hline
            & 3 & -7
            \end{array}
            `}
                                />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3-x^2+1=(x-1)(x-2)(x-3)+a(x-1)(x-2)+b(x-1)+c" />
                        가 <InlineMath math="x" />에 대한 항등식이 되도록 하는 <InlineMath math="a,\;b,\;c" />에 대하여 <InlineMath math="a+b+c" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">풀이 1 : 수치대입</p>

                            <p>
                                <InlineMath math="x=1" />을 대입하면 <InlineMath math="c" />만 남습니다.
                            </p>

                            <BlockMath math="1^3-1^2+1=c" />
                            <BlockMath math="c=1" />

                            <p>
                                <InlineMath math="x=2" />를 대입하면
                            </p>

                            <BlockMath math="2^3-2^2+1=b(2-1)+c" />
                            <BlockMath math="5=b+1" />
                            <BlockMath math="b=4" />

                            <p>
                                <InlineMath math="x=3" />을 대입하면
                            </p>

                            <BlockMath math="3^3-3^2+1=a(3-1)(3-2)+b(3-1)+c" />
                            <BlockMath math="19=2a+8+1" />
                            <BlockMath math="a=5" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a+b+c=5+4+1=10" />

                            <p className="font-semibold text-white">
                                답은 <InlineMath math="10" />입니다.
                            </p>

                            <p className="font-semibold text-white">풀이 2 : 연조립제법</p>

                            <p>
                                왼쪽 식 <InlineMath math="x^3-x^2+1" />의 계수는
                            </p>

                            <BlockMath math="1,\;-1,\;0,\;1" />

                            <p>
                                입니다. 먼저 <InlineMath math="x-1" />을 기준으로 조립제법을 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{array}{r|rrrr}
1 & 1 & -1 & 0 & 1\\
  &   & 1 & 0 & 0\\
\hline
  & 1 & 0 & 0 & 1
\end{array}
`}
                            />

                            <p>
                                첫 번째 나머지가 <InlineMath math="c" />이므로
                            </p>

                            <BlockMath math="c=1" />

                            <p>
                                나온 몫 <InlineMath math="x^2" />을 다시 <InlineMath math="x-2" />로 조립제법합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{array}{r|rrr}
2 & 1 & 0 & 0\\
  &   & 2 & 4\\
\hline
  & 1 & 2 & 4
\end{array}
`}
                            />

                            <p>
                                두 번째 나머지가 <InlineMath math="b" />이므로
                            </p>

                            <BlockMath math="b=4" />

                            <p>
                                다시 나온 몫 <InlineMath math="x+2" />를 <InlineMath math="x-3" />으로 조립제법합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{array}{r|rr}
3 & 1 & 2\\
  &   & 3\\
\hline
  & 1 & 5
\end{array}
`}
                            />

                            <p>
                                세 번째 나머지가 <InlineMath math="a" />이므로
                            </p>

                            <BlockMath math="a=5" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a+b+c=5+4+1=10" />

                            <p className="font-semibold text-white">
                                답은 <InlineMath math="10" />입니다.
                            </p>
                            <p>
                                이 풀이를 하나의 연조립제법을 하면 다음과 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
            \begin{array}{r|rrrr}
            1 & 1 & -1 & 0 & 1\\
            &   & 1 & 0 & 0\\
            \hline
            2  & 1 & 0 & 0 & 1\\
            &   & 2 & 4\\
            \hline
            3  & 1 & 2 & 4\\
            &   & 3\\
            \hline
            & 1 & 5
            \end{array}
            `}
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    이 문제는 <InlineMath math="x=1,\;2,\;3" />을 차례로 대입하면 <InlineMath math="c" />, <InlineMath math="b" />, <InlineMath math="a" />가 순서대로 결정됩니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    식의 구조를 보면 어떤 값을 대입해야 계산이 줄어드는지 알 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.27 다항식의 나머지와 정수의 나머지
                </h2>

                <p className="leading-8 text-gray-300">
                    다항식의 나머지와 정수의 나머지는 구조적으로 같습니다.
                    다만 정수의 나머지는 항상 <InlineMath math="0" />보다 크거나 같아야 합니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">예시 1</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^{99}" />을 <InlineMath math="x+1" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="x+1=0" />이 되게 하는 값은 <InlineMath math="x=-1" />입니다.
                            </p>

                            <BlockMath math="x^{99}=(-1)^{99}=-1" />

                            <p className="font-semibold text-white">
                                따라서 나머지는 <InlineMath math="-1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">예시 2</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="123^{99}" />을 <InlineMath math="124" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="123" />을 하나의 문자 <InlineMath math="x" />처럼 생각하면, <InlineMath math="123=124-1" />이므로 <InlineMath math="x=-1" />을 대입하는 것과 같은 구조입니다.
                            </p>

                            <BlockMath math="123^{99}=(124-1)^{99}" />

                            <p>
                                따라서 위의 다항식 문제와 같이 생각하면 나머지는 <InlineMath math="-1" />처럼 보입니다.
                            </p>

                            <p>
                                하지만 정수의 나머지는 <InlineMath math="0" />보다 크거나 같아야 합니다. <InlineMath math="-1" />은 나머지로 쓸 수 없으므로
                            </p>

                            <BlockMath math="-1+124=123" />

                            <p className="font-semibold text-white">
                                따라서 정수의 나머지는 <InlineMath math="123" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        참고
                    </h3>

                    <p className="leading-8 text-gray-300">
                        어떤 정수를 <InlineMath math="5" />로 나누었을 때 나머지가 <InlineMath math="3" />이라는 말은 다음 두 가지로 생각할 수 있습니다.
                    </p>

                    <ul className="mt-3 space-y-2 text-gray-300">
                        <li>
                            • <InlineMath math="5" />개씩 묶으면 <InlineMath math="3" />개가 남는다.
                        </li>
                        <li>
                            • <InlineMath math="5" />개씩 묶으면 <InlineMath math="2" />개가 모자란다.
                        </li>
                    </ul>

                    <p className="mt-3 leading-8 text-gray-300">
                        즉, <InlineMath math="3" />이 남는다는 말은 <InlineMath math="-2" />가 남는 것처럼 생각할 수도 있습니다.
                        그러나 정수의 나머지는 보통 <InlineMath math="0" /> 이상이고 나누는 수보다 작은 값으로 나타냅니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.28 다항식의 나머지
                </h2>

                <p className="leading-8 text-gray-300">
                    나머지를 구할 때는 나누는 식을 <InlineMath math="0" />으로 만드는
                    조작을 이용할 수 있습니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">정수의 나머지</h3>

                    <p className="leading-8 text-gray-300">
                        초등학교에서 배운 나눗셈을 생각해 봅니다.
                    </p>

                    <BlockMath math="17=5\cdot3+2" />

                    <p className="leading-8 text-gray-300">
                        여기서 나누는 수 <InlineMath math="5" />를 <InlineMath math="0" />으로 바꾸면 나머지 <InlineMath math="2" />만 남습니다.
                    </p>

                    <BlockMath math="31=11\cdot2+9" />

                    <p className="leading-8 text-gray-300">
                        마찬가지로 나누는 수 <InlineMath math="11" />을 <InlineMath math="0" />으로 바꾸면 나머지 <InlineMath math="9" />만 남습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">예시 1</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3+2x^2+3x+4" />를 <InlineMath math="x-1" />로 나눈 나머지를 구합니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x-1=0" />이므로 <InlineMath math="x=1" />을 대입합니다.
                    </p>

                    <BlockMath math="1^3+2\cdot1^2+3\cdot1+4=10" />

                    <p className="font-semibold text-white">
                        따라서 나머지는 <InlineMath math="10" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">예시 2</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3+2x^2+3x+4" />를 <InlineMath math="x^2-x-1" />로 나눈 나머지를 구합니다.
                    </p>

                    <BlockMath math="x^2-x-1=0" />
                    <BlockMath math="x^2=x+1" />

                    <p className="leading-8 text-gray-300">
                        따라서 높은 차수를 낮춥니다.
                    </p>

                    <BlockMath math="x^3=x\cdot x^2=x(x+1)=x^2+x" />
                    <BlockMath math="=(x+1)+x=2x+1" />

                    <p className="leading-8 text-gray-300">
                        그러므로
                    </p>

                    <BlockMath math="x^3+2x^2+3x+4" />
                    <BlockMath math="=(2x+1)+2(x+1)+3x+4" />
                    <BlockMath math="=7x+7" />

                    <p className="font-semibold text-white">
                        따라서 나머지는 <InlineMath math="7x+7" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">예시 3</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3+2x^2+3x+4" />를 <InlineMath math="x^3-x" />로 나눈 나머지를 구합니다.
                    </p>

                    <BlockMath math="x^3-x=0" />
                    <BlockMath math="x^3=x" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="x^3+2x^2+3x+4" />
                    <BlockMath math="=x+2x^2+3x+4" />
                    <BlockMath math="=2x^2+4x+4" />

                    <p className="font-semibold text-white">
                        따라서 나머지는 <InlineMath math="2x^2+4x+4" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">정리</h3>

                    <p className="leading-8 text-gray-300">
                        나머지를 구할 때는 나누는 식을 <InlineMath math="0" />으로 두고,
                        그 관계를 이용하여 식의 차수를 낮춥니다.
                    </p>

                    <p className="mt-3 font-semibold text-white">
                        나머지는 항상 나누는 식보다 차수가 낮아야 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^{2010}+1" />을 <InlineMath math="x^2-1" />로 나누었을 때의 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                나누는 식을 <InlineMath math="0" />으로 두면
                            </p>

                            <BlockMath math="x^2-1=0" />

                            <BlockMath math="x^2=1" />

                            <p>
                                따라서 식의 높은 차수를 낮출 수 있습니다.
                            </p>

                            <BlockMath math="x^{2010}+1" />

                            <BlockMath math="=(x^2)^{1005}+1" />

                            <BlockMath math="=1^{1005}+1" />

                            <BlockMath math="=2" />

                            <p className="font-semibold text-white">
                                따라서 나머지는 <InlineMath math="2" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    나머지정리에서는 일차식을 <InlineMath math="0" />으로 만들었습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    여기서는 이차식 <InlineMath math="x^2-1" />을 <InlineMath math="0" />으로 만들어 <InlineMath math="x^2=1" />이라는 관계를 얻었습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 관계를 이용하면 매우 높은 차수도 낮은 차수로 바꾸어
                                    나머지를 쉽게 구할 수 있습니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^3+ax^2+bx+3" />
                        가 <InlineMath math="x^2+x+1" />
                        로 나누어 떨어질 때, <InlineMath math="a,\;b" />
                        의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                풀이 1 : 나누는 식 = 0 이용
                            </p>

                            <p>
                                나누는 식을 <InlineMath math="0" />으로 두면
                            </p>

                            <BlockMath math="x^2+x+1=0" />
                            <BlockMath math="x^2=-x-1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x^3=x(-x-1)=-x^2-x" />
                            <BlockMath math="=-(-x-1)-x=1" />

                            <p>
                                이를 원래 식에 대입하면
                            </p>

                            <BlockMath math="x^3+ax^2+bx+3" />

                            <BlockMath math="=1+a(-x-1)+bx+3" />

                            <BlockMath math="=(-a+b)x+(-a+4)" />

                            <p>
                                나누어 떨어지므로 나머지가 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath math="(-a+b)x+(-a+4)=0" />

                            <BlockMath math="-a+b=0,\quad -a+4=0" />

                            <BlockMath math="a=4,\quad b=4" />

                            <p className="font-semibold text-white">
                                따라서
                                <InlineMath math="a=4,\;b=4" />
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 몫을 이용한 풀이
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    삼차식을 이차식으로 나누면 몫은 일차식입니다.
                                </p>

                                <p>
                                    최고차항이 <InlineMath math="x^3" />
                                    이므로 몫은 <InlineMath math="x+k" />
                                    의 형태입니다.
                                </p>

                                <BlockMath math="x^3+ax^2+bx+3=(x^2+x+1)(x+k)" />

                                <p>
                                    상수항이 <InlineMath math="3" />
                                    이므로
                                </p>

                                <BlockMath math="k=3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="(x^2+x+1)(x+3)" />

                                <BlockMath math="=x^3+4x^2+4x+3" />

                                <p>
                                    계수를 비교하면
                                </p>

                                <BlockMath math="a=4,\quad b=4" />
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^{30}+ax^2+bx+3" />
                        가 <InlineMath math="x^2+x+1" />
                        로 나누어떨어질 때, <InlineMath math="a,\;b" />
                        의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                나누는 식을 <InlineMath math="0" />으로 두면
                            </p>

                            <BlockMath math="x^2+x+1=0" />
                            <BlockMath math="x^2=-x-1" />

                            <p>
                                양변에 <InlineMath math="x-1" />을 곱하면
                            </p>

                            <BlockMath math="(x^2+x+1)(x-1)=0" />
                            <BlockMath math="x^3-1=0" />
                            <BlockMath math="x^3=1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x^{30}=(x^3)^{10}=1" />

                            <p>
                                원래 식은
                            </p>

                            <BlockMath math="x^{30}+ax^2+bx+3" />
                            <BlockMath math="=1+a(-x-1)+bx+3" />
                            <BlockMath math="=(-a+b)x+(-a+4)" />

                            <p>
                                나누어떨어지므로 나머지가 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath math="(-a+b)x+(-a+4)=0" />
                            <BlockMath math="-a+b=0,\quad -a+4=0" />
                            <BlockMath math="a=4,\quad b=4" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="a=4,\;b=4" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    이 문제는 차수가 커서 몫을 직접 구하기는 어렵습니다.
                                    하지만 나누는 식 <InlineMath math="x^2+x+1" />을 <InlineMath math="0" />으로 두면 <InlineMath math="x^3=1" />이라는 관계를 얻을 수 있습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 <InlineMath math="x^{30}" />은 <InlineMath math="1" />로 바뀌고,
                                    실질적으로는 예제 2와 같은 문제로 정리됩니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.29 나눗셈 조건에 숨어있는 구조
                </h2>

                <p className="leading-8 text-gray-300">
                    큰 나눗셈 조건 안에는 더 작은 나눗셈 조건들이 숨어 있습니다.
                    복잡한 나눗셈 조건을 보면 한 번에 계산하려고 하지 말고,
                    그 안에 어떤 조건들이 들어 있는지 먼저 관찰해야 합니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">정수의 나눗셈</h3>

                    <p className="leading-8 text-gray-300">
                        어떤 수를 <InlineMath math="15" />로 나눈 나머지가 <InlineMath math="13" />이라고 해 봅시다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        <InlineMath math="15=3\cdot5" />이므로 <InlineMath math="15" />로 나눈 조건 안에는 <InlineMath math="3" />으로 나눈 조건과 <InlineMath math="5" />로 나눈 조건이 숨어 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="13 \text{을 } 3 \text{으로 나눈 나머지}=1" />
                        <BlockMath math="13 \text{을 } 5 \text{로 나눈 나머지}=3" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 <InlineMath math="15" />로 나눈 나머지가 <InlineMath math="13" />이라는 조건 안에는 다음 정보가 숨어 있습니다.
                    </p>

                    <ul className="mt-3 space-y-2 text-gray-300">
                        <li>• <InlineMath math="3" />으로 나눈 나머지 <InlineMath math="1" /></li>
                        <li>• <InlineMath math="5" />로 나눈 나머지 <InlineMath math="3" /></li>
                    </ul>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">조금 더 큰 예</h3>

                    <p className="leading-8 text-gray-300">
                        어떤 수를 <InlineMath math="30" />으로 나눈 나머지가 <InlineMath math="11" />이라고 해 봅시다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        <InlineMath math="30" />의 약수로 나눈 나머지는
                        나머지 <InlineMath math="11" />을 다시 나누어 확인할 수 있습니다.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="2" />로 나눈 나머지 :
                            <span className="ml-2 font-semibold text-white">1</span>
                        </div>
                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="3" />으로 나눈 나머지 :
                            <span className="ml-2 font-semibold text-white">2</span>
                        </div>
                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="5" />로 나눈 나머지 :
                            <span className="ml-2 font-semibold text-white">1</span>
                        </div>
                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="6" />으로 나눈 나머지 :
                            <span className="ml-2 font-semibold text-white">5</span>
                        </div>
                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="10" />으로 나눈 나머지 :
                            <span className="ml-2 font-semibold text-white">1</span>
                        </div>
                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="15" />로 나눈 나머지 :
                            <span className="ml-2 font-semibold text-white">11</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">다항식에서도 같은 구조</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)" />를 <InlineMath math="(x-1)(x-2)" />로 나눈 나머지가 <InlineMath math="3x+2" />라고 해 봅시다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        그러면 <InlineMath math="x-1" />로 나눈 나머지와 <InlineMath math="x-2" />로 나눈 나머지도 숨어 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="x=1 \text{ 대입 } \Rightarrow 3(1)+2=5" />
                        <BlockMath math="x=2 \text{ 대입 } \Rightarrow 3(2)+2=8" />
                    </div>

                    <ul className="mt-3 space-y-2 text-gray-300">
                        <li>• <InlineMath math="x-1" />로 나눈 나머지 <InlineMath math="5" /></li>
                        <li>• <InlineMath math="x-2" />로 나눈 나머지 <InlineMath math="8" /></li>
                    </ul>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">세 개의 인수가 있는 경우</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)" />를 <InlineMath math="(x-1)(x-2)(x-3)" />으로 나눈 나머지가 <InlineMath math="x^2+2x+3" />이라고 해 봅시다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        그러면 이 조건 안에는 여러 작은 나눗셈 조건이 숨어 있습니다.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="x=1" /> 대입
                            <div className="mt-2 font-semibold text-white">
                                <InlineMath math="6" />
                            </div>
                        </div>

                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="x=2" /> 대입
                            <div className="mt-2 font-semibold text-white">
                                <InlineMath math="11" />
                            </div>
                        </div>

                        <div className="rounded-xl bg-black/40 p-4">
                            <InlineMath math="x=3" /> 대입
                            <div className="mt-2 font-semibold text-white">
                                <InlineMath math="18" />
                            </div>
                        </div>
                    </div>

                    <ul className="mt-5 space-y-2 text-gray-300">
                        <li>• <InlineMath math="x-1" />로 나눈 나머지 <InlineMath math="6" /></li>
                        <li>• <InlineMath math="x-2" />로 나눈 나머지 <InlineMath math="11" /></li>
                        <li>• <InlineMath math="x-3" />으로 나눈 나머지 <InlineMath math="18" /></li>
                    </ul>

                    <p className="mt-6 leading-8 text-gray-300">
                        두 개의 인수를 묶어도 새로운 나머지 조건을 얻을 수 있습니다.
                    </p>

                    <div className="mt-5 overflow-x-auto">
                        <table className="w-full border-collapse text-center">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-3 text-white">나누는 식</th>
                                    <th className="p-3 text-white">나머지</th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        <InlineMath math="(x-1)(x-2)" />
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="5x+1" />
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        <InlineMath math="(x-1)(x-3)" />
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="6x" />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-3">
                                        <InlineMath math="(x-2)(x-3)" />
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="7x-3" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)=x^4+ax^3+bx^2+5" />를 <InlineMath math="(x-1)(x+1)" />로 나눈 나머지가 <InlineMath math="x+3" />일 때, <InlineMath math="a+b" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">풀이 1 : 숨어있는 조건 찾기</p>

                            <p>
                                <InlineMath math="(x-1)(x+1)" />로 나눈 나머지가 <InlineMath math="x+3" />이므로, <InlineMath math="x-1" />과 <InlineMath math="x+1" />에 대한 조건이 숨어 있습니다.
                            </p>

                            <BlockMath math="x=1 \Rightarrow f(1)=1+3=4" />
                            <BlockMath math="x=-1 \Rightarrow f(-1)=-1+3=2" />

                            <p>
                                이제 주어진 식에 대입합니다.
                            </p>

                            <BlockMath math="f(1)=1+a+b+5=4" />
                            <BlockMath math="a+b=-2" />

                            <BlockMath math="f(-1)=1-a+b+5=2" />
                            <BlockMath math="-a+b=-4" />

                            <p>
                                이 문제에서 구하려는 것은 <InlineMath math="a+b" />이므로,
                                첫 번째 식에서 바로
                            </p>

                            <BlockMath math="a+b=-2" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-2" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나누는 식 = 0 이용
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="(x-1)(x+1)=x^2-1" />이므로
                                </p>

                                <BlockMath math="x^2-1=0" />
                                <BlockMath math="x^2=1" />

                                <p>
                                    이 관계를 이용하여 주어진 식을 일차식으로 낮춥니다.
                                </p>

                                <BlockMath math="x^4+ax^3+bx^2+5" />
                                <BlockMath math="=(x^2)^2+a x(x^2)+b x^2+5" />
                                <BlockMath math="=1+ax+b+5" />
                                <BlockMath math="=ax+b+6" />

                                <p>
                                    이 나머지가 <InlineMath math="x+3" />과 같아야 하므로
                                </p>

                                <BlockMath math="ax+b+6=x+3" />

                                <p>
                                    계수를 비교하면
                                </p>

                                <BlockMath math="a=1,\quad b=-3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a+b=-2" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="x^2+x-2" />로 나누었을 때의 나머지가 <InlineMath math="2x+1" />이다.
                        다항식 <InlineMath math="f(2x-3)" />을 <InlineMath math="x-2" />로 나누었을 때의 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                <InlineMath math="f(2x-3)" />을 <InlineMath math="x-2" />로 나눈 나머지를 구하는 문제이다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x=2" />

                            <p>
                                를 대입한다.
                            </p>

                            <BlockMath math="f(2\cdot2-3)" />

                            <BlockMath math="=f(1)" />

                            <p>
                                즉, 구하려는 대상은
                            </p>

                            <BlockMath math="f(1)" />

                            <p>
                                이다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 조건에서 필요한 값을 찾는다.
                            </p>

                            <p>
                                나누는 식을 인수분해하면
                            </p>

                            <BlockMath math="x^2+x-2=(x-1)(x+2)" />

                            <p>
                                나머지가 <InlineMath math="2x+1" />
                                이므로
                            </p>

                            <BlockMath math="f(1)=2(1)+1=3" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="3" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="x-1" />로 나눌 때의 나머지가 <InlineMath math="3" />이고, <InlineMath math="x+3" />으로 나눌 때의 나머지가 <InlineMath math="-1" />이다.
                        <br />이 다항식을 <InlineMath math="(x-1)(x+3)" />으로 나눌 때의 나머지를 <InlineMath math="R(x)" />라 할 때, <InlineMath math="R(2)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                문제에서는 나머지를 <InlineMath math="R(x)" />라고 주었지만,
                                그대로는 계산할 수 없습니다.
                            </p>

                            <p>
                                <InlineMath math="(x-1)(x+3)" />은 이차식이므로
                                나머지는 일차식입니다.
                            </p>

                            <BlockMath math="R(x)=ax+b" />

                            <p className="font-semibold text-white">
                                2단계 : 나눗셈식을 작성한다.
                            </p>

                            <BlockMath math="f(x)=(x-1)(x+3)Q(x)+R(x)" />

                            <BlockMath math="f(x)=(x-1)(x+3)Q(x)+ax+b" />

                            <p className="font-semibold text-white">
                                3단계 : 나누는 식 = 0 을 이용한다.
                            </p>

                            <p>
                                조건에서
                            </p>

                            <BlockMath math="f(1)=3" />

                            <BlockMath math="f(-3)=-1" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="R(1)=3" />

                            <BlockMath math="R(-3)=-1" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="a+b=3" />

                            <BlockMath math="-3a+b=-1" />

                            <p>
                                두 식을 풀면
                            </p>

                            <BlockMath math="a=1,\quad b=2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="R(x)=x+2" />

                            <p className="font-semibold text-white">
                                4단계 : 구하려는 값을 계산한다.
                            </p>

                            <BlockMath math="R(2)=2+2=4" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="4" />이다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    큰 나눗셈 조건 <InlineMath math="(x-1)(x+3)" />
                                    안에는 <InlineMath math="x-1" />, <InlineMath math="x+3" />
                                    의 조건이 숨어 있습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    나머지를 일차식으로 놓고,
                                    숨어 있는 두 조건을 이용하면
                                    나머지 전체를 복원할 수 있습니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 다항식 <InlineMath math="f(x)" />를 <InlineMath math="x-2" />, <InlineMath math="x-3" />으로 나눈 나머지가
                        각각 <InlineMath math="4" />, <InlineMath math="6" />이다.
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="x^2-5x+6" />으로 나눈 나머지를 <InlineMath math="g(x)" />라 할 때, <InlineMath math="g(1)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                <InlineMath math="x^2-5x+6=(x-2)(x-3)" />은 이차식이므로,
                                나머지 <InlineMath math="g(x)" />는 일차식입니다.
                            </p>

                            <BlockMath math="g(x)=ax+b" />

                            <p className="font-semibold text-white">
                                2단계 : 나눗셈식을 작성한다.
                            </p>

                            <BlockMath math="f(x)=(x^2-5x+6)Q(x)+g(x)" />
                            <BlockMath math="f(x)=(x-2)(x-3)Q(x)+ax+b" />

                            <p className="font-semibold text-white">
                                3단계 : 숨어있는 조건을 이용한다.
                            </p>

                            <BlockMath math="f(2)=4,\quad f(3)=6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="g(2)=4,\quad g(3)=6" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="2a+b=4" />
                            <BlockMath math="3a+b=6" />

                            <p>
                                두 식을 풀면
                            </p>

                            <BlockMath math="a=2,\quad b=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="g(x)=2x" />

                            <p className="font-semibold text-white">
                                4단계 : 구하려는 값을 계산한다.
                            </p>

                            <BlockMath math="g(1)=2" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)=3x+3" />일 때, <InlineMath math="\{f(x)\}^{20}" />을 <InlineMath math="(x+2)(x+1)" />로 나누었을 때의 나머지를 <InlineMath math="R(x)" />라 한다.
                        이때 <InlineMath math="R(0)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                <InlineMath math="(x+2)(x+1)" />은 이차식이므로
                                나머지 <InlineMath math="R(x)" />는 일차식입니다.
                            </p>

                            <BlockMath math="R(x)=ax+b" />

                            <p className="font-semibold text-white">
                                2단계 : 숨어있는 조건을 이용한다.
                            </p>

                            <p>
                                <InlineMath math="x=-2" />를 대입하면
                            </p>

                            <BlockMath math="R(-2)=\{f(-2)\}^{20}" />

                            <p>
                                <InlineMath math="f(-2)=3(-2)+3=-3" />이므로
                            </p>

                            <BlockMath math="-2a+b=(-3)^{20}" />
                            <BlockMath math="-2a+b=3^{20}" />

                            <p>
                                <InlineMath math="x=-1" />을 대입하면
                            </p>

                            <BlockMath math="R(-1)=\{f(-1)\}^{20}" />

                            <p>
                                <InlineMath math="f(-1)=3(-1)+3=0" />이므로
                            </p>

                            <BlockMath math="-a+b=0" />

                            <p className="font-semibold text-white">
                                3단계 : 연립하여 구한다.
                            </p>

                            <BlockMath math="-2a+b=3^{20}" />
                            <BlockMath math="-a+b=0" />

                            <p>
                                두 식을 빼면
                            </p>

                            <BlockMath math="-a=3^{20}" />
                            <BlockMath math="a=-3^{20}" />

                            <p>
                                <InlineMath math="-a+b=0" />이므로
                            </p>

                            <BlockMath math="b=a=-3^{20}" />

                            <p className="font-semibold text-white">
                                4단계 : 구하려는 값을 계산한다.
                            </p>

                            <BlockMath math="R(0)=b=-3^{20}" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-3^{20}" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)" />를 <InlineMath math="x^2-3x+2" />, <InlineMath math="x^2-4x+3" />으로 나눌 때의 나머지는
                        각각 <InlineMath math="3" />, <InlineMath math="3x" />이다. <InlineMath math="f(x)" />를 <InlineMath math="x^2-5x+6" />으로 나눌 때의 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                <InlineMath math="x^2-5x+6=(x-2)(x-3)" />이므로,
                                구하려는 나머지는 일차식입니다.
                            </p>

                            <BlockMath math="ax+b" />

                            <p className="font-semibold text-white">
                                2단계 : 필요한 값을 찾는다.
                            </p>

                            <p>
                                <InlineMath math="x^2-3x+2=(x-1)(x-2)" />이고,
                                이때 나머지가 <InlineMath math="3" />이므로
                            </p>

                            <BlockMath math="f(2)=3" />

                            <p>
                                <InlineMath math="x^2-4x+3=(x-1)(x-3)" />이고,
                                이때 나머지가 <InlineMath math="3x" />이므로
                            </p>

                            <BlockMath math="f(3)=3\cdot3=9" />

                            <p className="font-semibold text-white">
                                3단계 : 나머지식을 결정한다.
                            </p>

                            <p>
                                구하려는 나머지를 <InlineMath math="ax+b" />라고 하면
                            </p>

                            <BlockMath math="2a+b=3" />
                            <BlockMath math="3a+b=9" />

                            <p>
                                두 식을 풀면
                            </p>

                            <BlockMath math="a=6,\quad b=-9" />

                            <p className="font-semibold text-white">
                                따라서 나머지는 <InlineMath math="6x-9" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각해보기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    이 문제는 바로 계산하는 문제가 아니라,
                                    구하려는 나머지를 결정하기 위해 어떤 값이 필요한지 찾는 문제입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="(x-2)(x-3)" />으로 나눈 나머지를 구하려면 <InlineMath math="f(2)" />와 <InlineMath math="f(3)" />이 필요합니다.
                                    주어진 조건에서 그 두 값을 찾아내는 것이 핵심입니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^{2010}-1" />을 <InlineMath math="x^3-x" />로 나누었을 때의 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                <InlineMath math="x^3-x" />는 삼차식이므로,
                                나머지는 이차 이하의 식입니다.
                            </p>

                            <BlockMath math="ax^2+bx+c" />

                            <p className="font-semibold text-white">
                                2단계 : 나누는 식의 구조를 본다.
                            </p>

                            <BlockMath math="x^3-x=x(x^2-1)" />

                            <p>
                                먼저 <InlineMath math="x" />로 나눈 나머지를 봅니다.
                            </p>

                            <BlockMath math="x^{2010}-1" />
                            <BlockMath math="x=0 \Rightarrow -1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="c=-1" />

                            <p>
                                다음으로 <InlineMath math="x^2-1" />로 나눈 나머지를 봅니다.
                            </p>

                            <BlockMath math="x^2-1=0" />
                            <BlockMath math="x^2=1" />

                            <p>
                                그러면
                            </p>

                            <BlockMath math="x^{2010}-1=(x^2)^{1005}-1=1-1=0" />

                            <p>
                                즉, 구하려는 나머지 <InlineMath math="ax^2+bx+c" />도 <InlineMath math="x^2-1" />로 나누었을 때 나머지가 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <p>
                                이미 <InlineMath math="c=-1" />이므로
                            </p>

                            <BlockMath math="ax^2+bx-1" />

                            <p>
                                에서 <InlineMath math="x^2=1" />을 이용하면
                            </p>

                            <BlockMath math="a+bx-1=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a=1,\quad b=0" />

                            <p className="font-semibold text-white">
                                그러므로 나머지는
                            </p>

                            <BlockMath math="x^2-1" />
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^{1995}-1" />을 <InlineMath math="x^3+x" />로 나누었을 때의 나머지를 <InlineMath math="R(x)" />라 한다. 이때 <InlineMath math="R(1996)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                <InlineMath math="x^3+x" />는 삼차식이므로,
                                나머지 <InlineMath math="R(x)" />는 이차 이하의 식입니다.
                            </p>

                            <BlockMath math="R(x)=ax^2+bx+c" />

                            <p className="font-semibold text-white">
                                2단계 : 나누는 식의 구조를 본다.
                            </p>

                            <BlockMath math="x^3+x=x(x^2+1)" />

                            <p>
                                먼저 <InlineMath math="x" />로 나눈 나머지를 봅니다.
                            </p>

                            <BlockMath math="x=0 \Rightarrow x^{1995}-1=-1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="c=-1" />

                            <p>
                                다음으로 <InlineMath math="x^2+1" />로 나눈 나머지를 봅니다.
                            </p>

                            <BlockMath math="x^2+1=0" />
                            <BlockMath math="x^2=-1" />

                            <p>
                                그러면
                            </p>

                            <BlockMath math="x^{1995}=x(x^2)^{997}=x(-1)^{997}=-x" />

                            <BlockMath math="x^{1995}-1=-x-1" />

                            <p>
                                즉, 구하려는 나머지 <InlineMath math="ax^2+bx+c" />도 <InlineMath math="x^2+1" />로 나누었을 때 <InlineMath math="-x-1" />이 되어야 합니다.
                            </p>

                            <p>
                                이미 <InlineMath math="c=-1" />이므로
                            </p>

                            <BlockMath math="ax^2+bx-1" />

                            <p>
                                여기서 <InlineMath math="x^2=-1" />을 이용하면
                            </p>

                            <BlockMath math="-a+bx-1=-x-1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a=0,\quad b=-1" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="R(x)=-x-1" />

                            <p className="font-semibold text-white">
                                3단계 : 구하려는 값을 계산한다.
                            </p>

                            <BlockMath math="R(1996)=-1996-1=-1997" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1997" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 9</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="(x-1)(x-2)" />로 나눈 나머지는 <InlineMath math="2x+1" />, <InlineMath math="(x-1)(x-3)" />으로 나눈 나머지는 <InlineMath math="6x-3" />이라고 한다. <InlineMath math="f(x)" />를 <InlineMath math="(x-1)(x-2)(x-3)" />으로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">풀이 1 : 이미 알고 있는 나머지 이용</p>

                            <p>
                                구하려는 나머지는 삼차식으로 나눈 나머지이므로 이차 이하의 식입니다.
                            </p>

                            <p>
                                먼저 <InlineMath math="(x-1)(x-2)" />로 나눈 나머지가 <InlineMath math="2x+1" />이므로, 구하려는 나머지는 다음과 같이 둘 수 있습니다.
                            </p>

                            <BlockMath math="R(x)=a(x-1)(x-2)+2x+1" />

                            <p>
                                또 <InlineMath math="(x-1)(x-3)" />으로 나눈 나머지가 <InlineMath math="6x-3" />이므로
                            </p>

                            <BlockMath math="f(3)=6\cdot3-3=15" />

                            <p>
                                따라서 <InlineMath math="R(3)=15" />입니다.
                            </p>

                            <BlockMath math="a(3-1)(3-2)+2\cdot3+1=15" />
                            <BlockMath math="2a+7=15" />
                            <BlockMath math="a=4" />

                            <p>
                                그러므로 구하려는 나머지는
                            </p>

                            <BlockMath math="R(x)=4(x-1)(x-2)+2x+1" />
                            <BlockMath math="R(x)=4x^2-10x+9" />

                            <p className="font-semibold text-white">
                                따라서 나머지는 <InlineMath math="4x^2-10x+9" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나누는 식 = 0 이용
                                </h4>

                                <p>
                                    구하려는 나머지를 <InlineMath math="R(x)=ax^2+bx+c" />라고 둡니다.
                                </p>

                                <p>
                                    <InlineMath math="(x-1)(x-2)=x^2-3x+2" />이므로
                                </p>

                                <BlockMath math="x^2-3x+2=0" />
                                <BlockMath math="x^2=3x-2" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="ax^2+bx+c=a(3x-2)+bx+c" />
                                <BlockMath math="=(3a+b)x+(-2a+c)" />

                                <p>
                                    이 식이 <InlineMath math="2x+1" />과 같아야 하므로
                                </p>

                                <BlockMath math="3a+b=2,\quad -2a+c=1" />

                                <p>
                                    또 <InlineMath math="x=3" />에서 나머지는 <InlineMath math="15" />이므로
                                </p>

                                <BlockMath math="9a+3b+c=15" />

                                <p>
                                    세 식을 풀면
                                </p>

                                <BlockMath math="a=4,\quad b=-10,\quad c=9" />

                                <BlockMath math="R(x)=4x^2-10x+9" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 3 : 숨어있는 조건 연립
                                </h4>

                                <p>
                                    <InlineMath math="(x-1)(x-2)" />로 나눈 나머지가 <InlineMath math="2x+1" />이므로
                                </p>

                                <BlockMath math="f(1)=3,\quad f(2)=5" />

                                <p>
                                    <InlineMath math="(x-1)(x-3)" />으로 나눈 나머지가 <InlineMath math="6x-3" />이므로
                                </p>

                                <BlockMath math="f(3)=15" />

                                <p>
                                    구하려는 나머지를 <InlineMath math="R(x)=ax^2+bx+c" />라고 하면
                                </p>

                                <BlockMath math="a+b+c=3" />
                                <BlockMath math="4a+2b+c=5" />
                                <BlockMath math="9a+3b+c=15" />

                                <p>
                                    이를 풀면
                                </p>

                                <BlockMath math="a=4,\quad b=-10,\quad c=9" />

                                <BlockMath math="R(x)=4x^2-10x+9" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 10</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나누었을 때의 나머지가 <InlineMath math="3" />, <InlineMath math="x^2+x+1" />로 나누었을 때의 나머지가 <InlineMath math="3x+4" />이다. <InlineMath math="f(x)" />
                        를 <InlineMath math="(x-2)(x^2+x+1)" />로 나누었을 때의 나머지를 <InlineMath math="R(x)" />라 할 때, <InlineMath math="R(1)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                풀이 1 : 이미 알고 있는 나머지 이용
                            </p>

                            <p>
                                <InlineMath math="(x-2)(x^2+x+1)" />은 삼차식이므로
                                나머지는 이차 이하의 식이다.
                            </p>

                            <p>
                                <InlineMath math="x^2+x+1" />로 나눈 나머지가 <InlineMath math="3x+4" />이므로
                            </p>

                            <BlockMath math="R(x)=a(x^2+x+1)+3x+4" />

                            <p>
                                또
                            </p>

                            <BlockMath math="f(2)=3" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="R(2)=3" />

                            <BlockMath math="a(4+2+1)+6+4=3" />

                            <BlockMath math="7a+10=3" />

                            <BlockMath math="a=-1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="R(x)=-(x^2+x+1)+3x+4" />

                            <BlockMath math="R(x)=-x^2+2x+3" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="R(1)=-1+2+3=4" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="4" />이다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나누는 식 = 0 이용
                                </h4>

                                <p>
                                    구하려는 나머지를
                                </p>

                                <BlockMath math="R(x)=ax^2+bx+c" />

                                <p>
                                    라고 두자.
                                </p>

                                <p>
                                    <InlineMath math="x^2+x+1=0" /> 이므로
                                </p>

                                <BlockMath math="x^2=-x-1" />

                                <p>
                                    나머지식은
                                </p>

                                <BlockMath math="a(-x-1)+bx+c" />

                                <BlockMath math="=(-a+b)x+(-a+c)" />

                                <p>
                                    이것이 <InlineMath math="3x+4" />
                                    와 같아야 하므로
                                </p>

                                <BlockMath math="-a+b=3" />

                                <BlockMath math="-a+c=4" />

                                <p>
                                    또
                                </p>

                                <BlockMath math="R(2)=3" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="4a+2b+c=3" />

                                <p>
                                    세 식을 풀면
                                </p>

                                <BlockMath math="a=-1,\quad b=2,\quad c=3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="R(x)=-x^2+2x+3" />

                                <BlockMath math="R(1)=4" />
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 11</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="x^2+x+1" />로 나누면 나머지가 <InlineMath math="x+2" />이고, <InlineMath math="x-1" />로 나누면 나머지가 <InlineMath math="6" />이다. 이 <InlineMath math="f(x)" />
                        를 <InlineMath math="x^3-1" />로 나눈 나머지를 <InlineMath math="g(x)" />라 할 때, <InlineMath math="g(x)" />를 <InlineMath math="x+1" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                풀이 1 : 이미 알고 있는 나머지 이용
                            </p>

                            <p>
                                먼저 <InlineMath math="x^3-1" />을 인수분해합니다.
                            </p>

                            <BlockMath math="x^3-1=(x-1)(x^2+x+1)" />

                            <p>
                                <InlineMath math="x^3-1" />은 삼차식이므로,
                                나머지 <InlineMath math="g(x)" />는 이차 이하의 식입니다.
                            </p>

                            <p>
                                <InlineMath math="x^2+x+1" />로 나눈 나머지가 <InlineMath math="x+2" />이므로
                            </p>

                            <BlockMath math="g(x)=a(x^2+x+1)+x+2" />

                            <p>
                                또 <InlineMath math="x-1" />로 나누면 나머지가 <InlineMath math="6" />이므로
                            </p>

                            <BlockMath math="g(1)=6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a(1^2+1+1)+1+2=6" />
                            <BlockMath math="3a+3=6" />
                            <BlockMath math="a=1" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="g(x)=x^2+x+1+x+2" />
                            <BlockMath math="g(x)=x^2+2x+3" />

                            <p>
                                이제 <InlineMath math="g(x)" />를 <InlineMath math="x+1" />로 나눈 나머지는 <InlineMath math="g(-1)" />입니다.
                            </p>

                            <BlockMath math="g(-1)=(-1)^2+2(-1)+3=2" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나누는 식 = 0 이용
                                </h4>

                                <p>
                                    구하려는 나머지를 <InlineMath math="g(x)=ax^2+bx+c" />라고 둡니다.
                                </p>

                                <p>
                                    <InlineMath math="x^2+x+1=0" />이므로
                                </p>

                                <BlockMath math="x^2=-x-1" />

                                <p>
                                    나머지식은
                                </p>

                                <BlockMath math="ax^2+bx+c" />
                                <BlockMath math="=a(-x-1)+bx+c" />
                                <BlockMath math="=(-a+b)x+(-a+c)" />

                                <p>
                                    이것이 <InlineMath math="x+2" />와 같아야 하므로
                                </p>

                                <BlockMath math="-a+b=1" />
                                <BlockMath math="-a+c=2" />

                                <p>
                                    또 <InlineMath math="x-1" />로 나눈 나머지가 <InlineMath math="6" />이므로
                                </p>

                                <BlockMath math="g(1)=6" />
                                <BlockMath math="a+b+c=6" />

                                <p>
                                    세 식을 풀면
                                </p>

                                <BlockMath math="a=1,\quad b=2,\quad c=3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="g(x)=x^2+2x+3" />

                                <p>
                                    구하려는 것은 <InlineMath math="x+1" />로 나눈 나머지이므로
                                    <InlineMath math="x=-1" />을 대입합니다.
                                </p>

                                <BlockMath math="g(-1)=1-2+3=2" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 12</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)" />를 <InlineMath math="(x^2+x+1)^2" />으로 나누면 나머지가 <InlineMath math="x^3+x+1" />이고, <InlineMath math="(x-1)^3" />
                        으로 나누면 나머지가 <InlineMath math="x^2+x+4" />이다. <InlineMath math="f(x)" />
                        를 <InlineMath math="x^3-1" />로 나눈 나머지를 <InlineMath math="R(x)" />라 할 때, <InlineMath math="R(1)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                풀이 1 : 이미 알고 있는 나머지 이용
                            </p>

                            <p>
                                먼저 <InlineMath math="x^3-1" />을 인수분해하면
                            </p>

                            <BlockMath math="x^3-1=(x-1)(x^2+x+1)" />

                            <p>
                                따라서 구하려는 나머지는 이차 이하의 식입니다.
                            </p>

                            <p>
                                <InlineMath math="f(x)" />를 <InlineMath math="x^2+x+1" />로 나눈 나머지를 먼저 찾습니다.
                            </p>

                            <BlockMath math="x^2+x+1=0" />
                            <BlockMath math="x^3=1" />

                            <p>
                                조건에서 나머지가 <InlineMath math="x^3+x+1" />이므로
                            </p>

                            <BlockMath math="x^3+x+1=1+x+1=x+2" />

                            <p>
                                즉, <InlineMath math="x^2+x+1" />로 나눈 나머지는 <InlineMath math="x+2" />입니다.
                            </p>

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="R(x)=a(x^2+x+1)+x+2" />

                            <p>
                                또 <InlineMath math="(x-1)^3" />으로 나눈 나머지가 <InlineMath math="x^2+x+4" />이므로
                            </p>

                            <BlockMath math="f(1)=1^2+1+4=6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="R(1)=6" />

                            <BlockMath math="a(1^2+1+1)+1+2=6" />
                            <BlockMath math="3a+3=6" />
                            <BlockMath math="a=1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="R(x)=x^2+x+1+x+2" />
                            <BlockMath math="R(x)=x^2+2x+3" />

                            <BlockMath math="R(1)=1+2+3=6" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="6" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나누는 식 = 0 이용
                                </h4>

                                <p>
                                    구하려는 나머지를
                                </p>

                                <BlockMath math="R(x)=ax^2+bx+c" />

                                <p>
                                    라고 둡니다.
                                </p>

                                <p>
                                    <InlineMath math="x^2+x+1=0" />이므로
                                </p>

                                <BlockMath math="x^2=-x-1" />

                                <p>
                                    나머지식을 낮추면
                                </p>

                                <BlockMath math="ax^2+bx+c=a(-x-1)+bx+c" />
                                <BlockMath math="=(-a+b)x+(-a+c)" />

                                <p>
                                    이것이 <InlineMath math="x+2" />와 같아야 하므로
                                </p>

                                <BlockMath math="-a+b=1" />
                                <BlockMath math="-a+c=2" />

                                <p>
                                    또 <InlineMath math="f(1)=6" />이므로
                                </p>

                                <BlockMath math="R(1)=6" />
                                <BlockMath math="a+b+c=6" />

                                <p>
                                    세 식을 풀면
                                </p>

                                <BlockMath math="a=1,\quad b=2,\quad c=3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="R(x)=x^2+2x+3" />
                                <BlockMath math="R(1)=6" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">정리</h3>

                    <p className="leading-8 text-gray-300">
                        큰 나눗셈 조건 안에는 더 작은 나눗셈 조건들이 숨어 있습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        복잡한 조건이 나오면 한 번에 해결하려고 하지 말고,
                        인수 하나, 인수 둘, 인수 셋으로 나누어 관찰해 보세요.
                    </p>

                    <p className="mt-3 font-semibold text-white">
                        다항식의 나눗셈을 잘 이해하려면 계산보다 먼저 조건의 구조를 보는 연습이 필요합니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.30 인수정리
                </h2>

                <p className="leading-8 text-gray-300">
                    인수정리는 삼차 이상의 <InlineMath math="x" />에 관한 식을
                    인수분해할 때 사용하는 방법입니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    핵심은 나머지가 <InlineMath math="0" />이 되는 일차식을 찾는 것입니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        인수정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        나머지정리에 의해 <InlineMath math="f(x)" />를 <InlineMath math="x-a" />로 나눈 나머지는 <InlineMath math="f(a)" />입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="f(a)=0" />

                    <p className="leading-8 text-gray-300">
                        이면 <InlineMath math="f(x)" />는 <InlineMath math="x-a" />로 나누어떨어집니다.
                    </p>

                    <BlockMath math="f(a)=0 \quad \Longleftrightarrow \quad x-a \text{ 는 } f(x) \text{ 의 인수}" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        0이 되는 값의 후보
                    </h3>

                    <p className="leading-8 text-gray-300">
                        예를 들어 삼차식
                    </p>

                    <BlockMath math="px^3+qx^2+rx+s" />

                    <p className="leading-8 text-gray-300">
                        가 다음과 같이 인수분해된다고 해 봅시다.
                    </p>

                    <BlockMath math="(ax-\alpha)(bx-\beta)(cx-\gamma)" />

                    <p className="leading-8 text-gray-300">
                        그러면 최고차항의 계수와 상수항은 다음과 같이 만들어집니다.
                    </p>

                    <BlockMath math="p=abc" />
                    <BlockMath math="s=-\alpha\beta\gamma" />

                    <p className="leading-8 text-gray-300">
                        또한 각각의 일차식을 <InlineMath math="0" />으로 만드는 값은
                    </p>

                    <BlockMath math="x=\frac{\alpha}{a},\quad x=\frac{\beta}{b},\quad x=\frac{\gamma}{c}" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        따라서 인수정리를 이용할 때는 보통
                    </p>

                    <BlockMath math="\pm\frac{\text{상수항의 약수}}{\text{최고차항의 계수의 약수}}" />

                    <p className="leading-8 text-gray-300">
                        중에서 <InlineMath math="f(x)=0" />이 되는 값을 찾습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        인수를 찾은 후
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(a)=0" />이 되는 값을 찾으면 <InlineMath math="x-a" />가 인수라는 것을 알 수 있습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        그 다음에는 조립제법을 사용할 수도 있고,
                        조립제법 없이 전개를 거꾸로 생각하여 조립할 수도 있습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        즉, 인수 하나를 찾았다면
                    </p>

                    <BlockMath math="f(x)=(x-a)(\text{남은 다항식})" />

                    <p className="leading-8 text-gray-300">
                        의 형태로 두고, 1.11에서 배운 <InlineMath math="\text{2항}\times\text{다항식}" />의 전개를
                        거꾸로 이용하여 남은 다항식을 찾을 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="3x^3-7x^2+4" />
                        를 인수분해하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : 인수의 후보를 찾는다.
                            </p>

                            <p>
                                인수정리에 의해
                            </p>

                            <BlockMath math="\pm\frac{\text{상수항의 약수}}{\text{최고차항의 계수의 약수}}" />

                            <p>
                                를 조사한다.
                            </p>

                            <BlockMath math="\pm1,\ \pm2,\ \pm4,\ \pm\frac13,\ \pm\frac23,\ \pm\frac43" />

                            <p className="font-semibold text-white">
                                2단계 : 0이 되는 값을 찾는다.
                            </p>

                            <BlockMath math="f(x)=3x^3-7x^2+4" />

                            <BlockMath math="f(1)=3-7+4=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x-1" />

                            <p>
                                은 인수이다.
                            </p>

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="3x^3-7x^2+4=(x-1)(\text{이차식})" />

                            <p className="font-semibold text-white">
                                3단계 : 역순으로 조립한다.
                            </p>

                            <p>
                                <InlineMath math="x-1" />이 인수이므로
                            </p>

                            <BlockMath math="3x^3-7x^2+4=(x-1)(\text{이차식})" />

                            <p>
                                이차식의 최고차항은 <InlineMath math="3x^2" />이어야 합니다.
                            </p>

                            <p>
                                또한 상수항이 <InlineMath math="+4" />이므로
                            </p>

                            <BlockMath math="(x-1)(3x^2+\square x-4)" />

                            <p>
                                의 형태가 됩니다.
                            </p>

                            <p>
                                이제 전개했을 때 <InlineMath math="x^2" />의 계수가 <InlineMath math="-7" />이 되어야 합니다.
                            </p>

                            <p>
                                따라서 가운데 항의 계수는
                            </p>

                            <BlockMath math="-4" />

                            <p>
                                임을 알 수 있습니다.
                            </p>

                            <BlockMath math="3x^3-7x^2+4=(x-1)(3x^2-4x-4)" />

                            <p>
                                다시 인수분해하면
                            </p>

                            <BlockMath math="=(x-1)(3x+2)(x-2)" />
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="2x^3-x^2+2x-1" />
                        을 유리수 범위에서 인수분해하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 인수의 후보를 찾는다.
                            </p>

                            <BlockMath math="\pm\frac{\text{상수항의 약수}}{\text{최고차항의 계수의 약수}}" />

                            <BlockMath math="\pm1,\quad \pm\frac12" />

                            <p>
                                값을 대입해 보면
                            </p>

                            <BlockMath math="f\left(\frac12\right)=2\left(\frac12\right)^3-\left(\frac12\right)^2+2\left(\frac12\right)-1=0" />

                            <p>
                                따라서 <InlineMath math="x-\frac12" />가 인수이고,
                                정수 계수로 보면 <InlineMath math="2x-1" />이 인수입니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 역순으로 조립한다.
                            </p>

                            <BlockMath math="2x^3-x^2+2x-1=(2x-1)(\text{이차식})" />

                            <p>
                                최고차항이 <InlineMath math="2x^3" />이므로
                                이차식의 첫 항은 <InlineMath math="x^2" />입니다.
                            </p>

                            <p>
                                상수항이 <InlineMath math="-1" />이므로
                                이차식의 상수항은 <InlineMath math="1" />입니다.
                            </p>

                            <BlockMath math="(2x-1)(x^2+\square x+1)" />

                            <p>
                                전개했을 때 <InlineMath math="x^2" />의 계수가 <InlineMath math="-1" />이 되어야 하므로
                                가운데 항은 없습니다.
                            </p>

                            <BlockMath math="2x^3-x^2+2x-1=(2x-1)(x^2+1)" />

                            <p className="font-semibold text-white">
                                따라서 유리수 범위에서 인수분해하면 <InlineMath math="(2x-1)(x^2+1)" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^3+27" />을 인수분해하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 인수를 찾는다.
                            </p>

                            <p>
                                <InlineMath math="x=-3" />을 대입하면
                            </p>

                            <BlockMath math="(-3)^3+27=-27+27=0" />

                            <p>
                                따라서 <InlineMath math="x+3" />은 인수입니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 역순으로 조립한다.
                            </p>

                            <BlockMath math="x^3+27=(x+3)(\text{이차식})" />

                            <p>
                                최고차항과 상수항을 먼저 맞추면
                            </p>

                            <BlockMath math="(x+3)(x^2+\square x+9)" />

                            <p>
                                전개했을 때 <InlineMath math="x" />항이 없어야 하므로
                                가운데 항은 <InlineMath math="-3x" />입니다.
                            </p>

                            <BlockMath math="x^3+27=(x+3)(x^2-3x+9)" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="(x+3)(x^2-3x+9)" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^4-x^3-x^2-5x+6" />
                        을 인수분해하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : 인수의 후보를 찾는다.
                            </p>

                            <p>
                                최고차항의 계수가 <InlineMath math="1" />이고
                                상수항이 <InlineMath math="6" />이므로
                            </p>

                            <BlockMath math="\pm1,\ \pm2,\ \pm3,\ \pm6" />

                            <p>
                                을 조사한다.
                            </p>

                            <BlockMath math="f(1)=1-1-1-5+6=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x-1" />

                            <p>
                                은 인수이다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 역순으로 조립한다.
                            </p>

                            <BlockMath math="x^4-x^3-x^2-5x+6=(x-1)(\text{삼차식})" />

                            <p>
                                최고차항과 상수항을 먼저 맞추면
                            </p>

                            <BlockMath math="(x-1)(x^3+\square x^2+\square x-6)" />

                            <p>
                                이고, 전개하여 계수를 맞추면
                            </p>

                            <BlockMath math="x^4-x^3-x^2-5x+6=(x-1)(x^3-2x-6)" />

                            <p className="font-semibold text-white">
                                3단계 : 삼차식에 다시 인수정리를 적용한다.
                            </p>

                            <p>
                                남은 삼차식
                            </p>

                            <BlockMath math="x^3-2x-6" />

                            <p>
                                에 대하여 인수의 후보
                            </p>

                            <BlockMath math="\pm1,\ \pm2,\ \pm3,\ \pm6" />

                            <p>
                                을 조사하면
                            </p>

                            <BlockMath math="f(2)=8-4-6=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x-2" />

                            <p>
                                는 인수이다.
                            </p>

                            <p>
                                다시 역순으로 조립하면
                            </p>

                            <BlockMath math="x^3-2x-6=(x-2)(x^2+2x+3)" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x^4-x^3-x^2-5x+6=(x-1)(x-2)(x^2+2x+3)" />

                            <p className="font-semibold text-white">
                                따라서 인수분해의 결과는
                            </p>

                            <BlockMath math="(x-1)(x-2)(x^2+2x+3)" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^4+2x^3-7x^2-8x+12" />
                        를 인수분해하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 인수의 후보를 찾는다.
                            </p>

                            <p>
                                최고차항의 계수가 <InlineMath math="1" />이고 상수항이 <InlineMath math="12" />이므로 후보는
                            </p>

                            <BlockMath math="\pm1,\ \pm2,\ \pm3,\ \pm4,\ \pm6,\ \pm12" />

                            <p>
                                입니다.
                            </p>

                            <BlockMath math="f(1)=1+2-7-8+12=0" />

                            <p>
                                따라서 <InlineMath math="x-1" />은 인수입니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 역순으로 조립한다.
                            </p>

                            <BlockMath math="x^4+2x^3-7x^2-8x+12=(x-1)(\text{삼차식})" />

                            <p>
                                최고차항과 상수항을 먼저 맞추면
                            </p>

                            <BlockMath math="(x-1)(x^3+\square x^2+\square x-12)" />

                            <p>
                                전개했을 때 <InlineMath math="x^3" />의 계수가 <InlineMath math="2" />가 되어야 하므로 삼차식의 두 번째 항은 <InlineMath math="3x^2" />입니다.
                            </p>

                            <BlockMath math="x^4+2x^3-7x^2-8x+12=(x-1)(x^3+3x^2-4x-12)" />

                            <p className="font-semibold text-white">
                                3단계 : 남은 삼차식을 다시 인수분해한다.
                            </p>

                            <BlockMath math="x^3+3x^2-4x-12" />

                            <p>
                                묶어서 인수분해하면
                            </p>

                            <BlockMath math="x^2(x+3)-4(x+3)" />
                            <BlockMath math="=(x+3)(x^2-4)" />
                            <BlockMath math="=(x+3)(x-2)(x+2)" />

                            <p className="font-semibold text-white">
                                따라서
                            </p>

                            <BlockMath math="x^4+2x^3-7x^2-8x+12=(x-1)(x+3)(x-2)(x+2)" />
                        </div>
                    </details>
                </div>


                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^3+(2p-1)x+2p" />
                        를 인수분해하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                문자가 있는 식에서는 문자가 사라지는 값을 먼저 찾아봅니다.
                            </p>

                            <BlockMath math="x=-1" />

                            <p>
                                을 대입하면
                            </p>

                            <BlockMath math="(-1)^3+(2p-1)(-1)+2p" />
                            <BlockMath math="-1-2p+1+2p=0" />

                            <p>
                                따라서 <InlineMath math="x+1" />은 인수입니다.
                            </p>

                            <p className="font-semibold text-white">
                                역순으로 조립합니다.
                            </p>

                            <BlockMath math="x^3+(2p-1)x+2p=(x+1)(\text{이차식})" />

                            <p>
                                최고차항과 상수항을 먼저 맞추면
                            </p>

                            <BlockMath math="(x+1)(x^2+\square x+2p)" />

                            <p>
                                전개했을 때 <InlineMath math="x^2" />항이 없어야 하므로
                                가운데 항은 <InlineMath math="-x" />입니다.
                            </p>

                            <BlockMath math="x^3+(2p-1)x+2p=(x+1)(x^2-x+2p)" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="(x+1)(x^2-x+2p)" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^3-3x^2+(a+2)x-2a" />
                        를 인수분해하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                문자가 있는 식에서는 문자가 사라지는 값을 먼저 찾아봅니다.
                            </p>

                            <p>
                                <InlineMath math="x=2" />를 대입하면
                            </p>

                            <BlockMath math="2^3-3\cdot2^2+(a+2)2-2a" />
                            <BlockMath math="=8-12+2a+4-2a=0" />

                            <p>
                                따라서 <InlineMath math="x-2" />는 인수입니다.
                            </p>

                            <p className="font-semibold text-white">
                                역순으로 조립합니다.
                            </p>

                            <BlockMath math="x^3-3x^2+(a+2)x-2a=(x-2)(\text{이차식})" />

                            <p>
                                최고차항과 상수항을 먼저 맞추면
                            </p>

                            <BlockMath math="(x-2)(x^2+\square x+a)" />

                            <p>
                                전개했을 때 <InlineMath math="x^2" />의 계수가 <InlineMath math="-3" />이 되어야 하므로 가운데 항은 <InlineMath math="-x" />입니다.
                            </p>

                            <BlockMath math="x^3-3x^2+(a+2)x-2a=(x-2)(x^2-x+a)" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="(x-2)(x^2-x+a)" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^3-(k+5)x^2+(5k+4)x-4k" />
                        를 인수분해하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                문자가 있는 식에서는 문자가 사라지는 값을 먼저 찾아봅니다.
                            </p>

                            <p>
                                <InlineMath math="x=1" />을 대입하면
                            </p>

                            <BlockMath math="1-(k+5)+(5k+4)-4k" />
                            <BlockMath math="=1-k-5+5k+4-4k=0" />

                            <p>
                                따라서 <InlineMath math="x-1" />은 인수입니다.
                            </p>

                            <p className="font-semibold text-white">
                                역순으로 조립합니다.
                            </p>

                            <BlockMath math="x^3-(k+5)x^2+(5k+4)x-4k=(x-1)(\text{이차식})" />

                            <p>
                                최고차항과 상수항을 먼저 맞추면
                            </p>

                            <BlockMath math="(x-1)(x^2+\square x+4k)" />

                            <p>
                                전개했을 때 <InlineMath math="x^2" />의 계수가 <InlineMath math="-(k+5)" />가 되어야 하므로 가운데 항은 <InlineMath math="-(k+4)x" />입니다.
                            </p>

                            <BlockMath math="x^3-(k+5)x^2+(5k+4)x-4k=(x-1)(x^2-(k+4)x+4k)" />

                            <p>
                                남은 이차식을 다시 인수분해하면
                            </p>

                            <BlockMath math="x^2-(k+4)x+4k=(x-k)(x-4)" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="(x-1)(x-k)(x-4)" />
                        </div>
                    </details>
                </div>
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        인수정리는 나머지정리에서 나머지가 <InlineMath math="0" />인 경우입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        삼차 이상의 식을 인수분해할 때는 먼저 <InlineMath math="f(x)=0" />이 되는 값을 찾아 일차인수를 찾습니다.
                    </p>

                    <p className="mt-3 font-semibold text-white">
                        인수를 찾은 뒤에는 조립제법을 사용하거나,
                        전개를 거꾸로 생각하여 남은 식을 조립하면 됩니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.31 나머지정리와 다항식의 작성
                </h2>

                <p className="leading-8 text-gray-300">
                    나머지정리는 다항식의 값을 구하는 데 사용할 수 있지만,
                    반대로 다항식을 작성하는 데에도 사용할 수 있습니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        나머지 조건의 의미
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(1)=0" />이라는 말은 <InlineMath math="f(x)" />를 <InlineMath math="x-1" />로 나눈 나머지가 <InlineMath math="0" />이라는 뜻입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        또 <InlineMath math="f(2)=3" />이라는 말은 <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나눈 나머지가 <InlineMath math="3" />이라는 뜻입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        최고차항의 계수가 1인 삼차식 작성
                    </h3>

                    <p className="leading-8 text-gray-300">
                        최고차항의 계수가 <InlineMath math="1" />인 삼차식은
                        세 조건을 이용하여 만들 수 있습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        특히 <InlineMath math="f(1), f(2), f(3)" />의 값이 주어졌다면,
                        먼저 다음 기본식을 생각합니다.
                    </p>

                    <BlockMath math="(x-1)(x-2)(x-3)" />

                    <p className="leading-8 text-gray-300">
                        이 식은 <InlineMath math="x=1,2,3" />에서 모두
                        <InlineMath math="0" />이 됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        여러 가지 경우
                    </h3>

                    <div className="space-y-5 text-gray-300">
                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                1. <InlineMath math="f(1)=0,\ f(2)=0,\ f(3)=0" />
                            </p>
                            <BlockMath math="f(x)=(x-1)(x-2)(x-3)" />
                        </div>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                2. <InlineMath math="f(1)=5,\ f(2)=5,\ f(3)=5" />
                            </p>
                            <BlockMath math="f(x)=(x-1)(x-2)(x-3)+5" />
                        </div>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                3. <InlineMath math="f(1)=f(2)=f(3)" />
                            </p>
                            <p className="mt-3 leading-8">
                                같은 값을 <InlineMath math="k" />라고 두면
                            </p>
                            <BlockMath math="f(x)=(x-1)(x-2)(x-3)+k" />
                        </div>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                4. <InlineMath math="f(1)=1,\ f(2)=2,\ f(3)=3" />
                            </p>
                            <BlockMath math="f(x)=(x-1)(x-2)(x-3)+x" />
                        </div>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                5. <InlineMath math="f(1)=1,\ f(2)=4,\ f(3)=7" />
                            </p>
                            <BlockMath math="f(x)=(x-1)(x-2)(x-3)+3x-2" />
                        </div>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                6. <InlineMath math="f(1)=1,\ f(2)=0,\ f(3)=-1" />
                            </p>
                            <BlockMath math="f(x)=(x-1)(x-2)(x-3)-x+2" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        조금 더 복잡한 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(1)=3,\ f(2)=6,\ f(3)=13" />인 경우를 생각해 봅니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        세 조건을 한 번에 맞추기 어렵다면, 먼저 두 조건을 만족하는 식을 만들고 남은 조건으로 미정계수를 정할 수 있습니다.
                        먼저 <InlineMath math="f(1)=3,\ f(2)=6" />을 만족하도록 하는 이차식을 작성할 수 있습니다.
                        그리고 구하려는 식이 삼차식이므로 몫을 일차식 <InlineMath math="(x+a)" />라고 두고 <InlineMath math="3x" />를 붙입니다.
                    </p>

                    <BlockMath math="f(x)=(x-1)(x-2)(x+a)+3x" />

                    <p className="leading-8 text-gray-300">
                        이제 <InlineMath math="f(3)=13" />을 이용합니다.
                    </p>

                    <BlockMath math="f(3)=2(a+3)+9=13" />
                    <BlockMath math="2a+15=13" />
                    <BlockMath math="a=-1" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="f(x)=(x-1)^2(x-2)+3x" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        최고차항의 계수가 1인 삼차식 <InlineMath math="f(x)" />에 대하여
                    </p>

                    <BlockMath math="f(1)=5,\quad f(2)=5,\quad f(3)=5" />

                    <p className="leading-8 text-gray-300">
                        일 때, <InlineMath math="f(x)" />를 <InlineMath math="x-4" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : 조건을 만족하는 다항식을 작성한다.
                            </p>

                            <p>
                                <InlineMath math="f(1)=f(2)=f(3)=5" /> 이므로
                            </p>

                            <BlockMath math="f(x)=(x-1)(x-2)(x-3)+5" />

                            <p className="font-semibold text-white">
                                2단계 : 구하려는 값을 계산한다.
                            </p>

                            <p>
                                <InlineMath math="x-4" />로 나눈 나머지는 <InlineMath math="f(4)" />입니다.
                            </p>

                            <BlockMath math="f(4)=(4-1)(4-2)(4-3)+5" />

                            <BlockMath math="=3\cdot2\cdot1+5" />

                            <BlockMath math="=11" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="11" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        삼차식 <InlineMath math="f(x)" />에 대하여
                    </p>

                    <BlockMath math="f(-1)=2,\quad f(0)=0,\quad f(1)=-2,\quad f(2)=14" />

                    <p className="leading-8 text-gray-300">
                        일 때, <InlineMath math="f(2x+1)" />을 <InlineMath math="x-1" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                <InlineMath math="f(2x+1)" />을 <InlineMath math="x-1" />로 나눈 나머지는
                            </p>

                            <BlockMath math="f(2\cdot1+1)=f(3)" />

                            <p>
                                즉, 구하려는 대상은
                            </p>

                            <BlockMath math="f(3)" />

                            <p>
                                입니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 주어진 조건으로 다항식을 작성한다.
                            </p>

                            <p>
                                <InlineMath math="f(-1)=2,\ f(0)=0,\ f(1)=-2" />를 만족하는
                                일차식은
                            </p>

                            <BlockMath math="-2x" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                삼차식이고 세 개의 조건을 이미 사용했으므로
                            </p>

                            <BlockMath math="f(x)=a(x+1)x(x-1)-2x" />

                            <p>
                                의 형태로 둘 수 있습니다.
                            </p>

                            <p className="font-semibold text-white">
                                3단계 : 남은 조건을 이용한다.
                            </p>

                            <p>
                                <InlineMath math="f(2)=14" />이므로
                            </p>

                            <BlockMath math="a(3)(2)(1)-4=14" />

                            <BlockMath math="6a-4=14" />

                            <BlockMath math="a=3" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=3(x+1)x(x-1)-2x" />

                            <p className="font-semibold text-white">
                                4단계 : 구하려는 값을 계산한다.
                            </p>

                            <BlockMath math="f(3)=3(4)(3)(2)-6" />

                            <BlockMath math="=72-6=66" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="66" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 삼차식 <InlineMath math="f(x)" />에 대하여
                    </p>

                    <BlockMath math="f(1)=1,\quad f(2)=-1,\quad f(3)=1,\quad f(4)=13" />

                    <p className="leading-8 text-gray-300">
                        일 때, <InlineMath math="f(5)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : 세 조건을 먼저 만족하는 식을 만든다.
                            </p>

                            <p>
                                <InlineMath math="f(1)=1" />, <InlineMath math="f(3)=1" /> 이므로
                            </p>

                            <BlockMath math="f(x)=(x-1)(x-3)(ax+b)+1" />

                            <p>
                                로 둘 수 있습니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 남은 조건을 이용하여 미정계수를 구한다.
                            </p>

                            <p>
                                <InlineMath math="f(2)=-1" /> 이므로
                            </p>

                            <BlockMath math="(2-1)(2-3)(2a+b)+1=-1" />

                            <BlockMath math="-(2a+b)+1=-1" />

                            <BlockMath math="2a+b=2" />

                            <p>
                                또 <InlineMath math="f(4)=13" /> 이므로
                            </p>

                            <BlockMath math="(4-1)(4-3)(4a+b)+1=13" />

                            <BlockMath math="3(4a+b)+1=13" />

                            <BlockMath math="4a+b=4" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\begin{cases}
2a+b=2\\
4a+b=4
\end{cases}" />

                            <p>
                                를 연립하면
                            </p>

                            <BlockMath math="a=1,\quad b=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=(x-1)(x-3)x+1" />

                            <p className="font-semibold text-white">
                                3단계 : 구하려는 값을 계산한다.
                            </p>

                            <BlockMath math="f(5)=(5-1)(5-3)\cdot5+1" />

                            <BlockMath math="=4\cdot2\cdot5+1" />

                            <BlockMath math="=41" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="41" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="leading-8 text-gray-300">
                        3차항의 계수가 1인 삼차식 <InlineMath math="f(x)" />에 대하여
                    </p>

                    <BlockMath math="f(2)=2,\quad f(0)=0,\quad f(-2)=2" />

                    <p className="leading-8 text-gray-300">
                        일 때, <InlineMath math="f(3)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : 세 조건을 만족하는 식을 만든다.
                            </p>

                            <p>
                                <InlineMath math="f(2)=2" />, <InlineMath math="f(-2)=2" /> 이므로
                            </p>

                            <BlockMath math="f(x)=(x-2)(x+2)(x+a)+2" />

                            <p>
                                로 둘 수 있습니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 남은 조건을 이용한다.
                            </p>

                            <p>
                                <InlineMath math="f(0)=0" /> 이므로
                            </p>

                            <BlockMath math="(-2)(2)a+2=0" />

                            <BlockMath math="-4a+2=0" />

                            <BlockMath math="a=\frac12" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=(x-2)(x+2)\left(x+\frac12\right)+2" />

                            <p className="font-semibold text-white">
                                3단계 : 구하려는 값을 계산한다.
                            </p>

                            <BlockMath math="f(3)=(3-2)(3+2)\left(3+\frac12\right)+2" />

                            <BlockMath math="=1\cdot5\cdot\frac72+2" />

                            <BlockMath math="=\frac{35}{2}+2" />

                            <BlockMath math="=\frac{39}{2}" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="\frac{39}{2}" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 4차식 <InlineMath math="f(x)" />에 대하여
                    </p>

                    <BlockMath math="f(1)=1,\quad f(2)=\frac12,\quad f(3)=\frac13,\quad f(4)=\frac14,\quad f(5)=\frac15" />

                    <p className="leading-8 text-gray-300">
                        일 때, <InlineMath math="f(7)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 분수 조건을 정리한다.
                            </p>

                            <p>
                                주어진 값은 모두 분자가 <InlineMath math="1" />이고,
                                분모가 대입한 값과 같습니다.
                            </p>

                            <BlockMath math="1\cdot f(1)=1,\quad 2f(2)=1,\quad 3f(3)=1,\quad 4f(4)=1,\quad 5f(5)=1" />

                            <p>
                                따라서 <InlineMath math="xf(x)" />를 생각합니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 조건을 만족하는 식을 만든다.
                            </p>

                            <p>
                                <InlineMath math="xf(x)-1" />은
                                <InlineMath math="x=1,2,3,4,5" />에서 모두
                                <InlineMath math="0" />이 됩니다.
                            </p>

                            <BlockMath math="xf(x)-1=a(x-1)(x-2)(x-3)(x-4)(x-5)" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="xf(x)=a(x-1)(x-2)(x-3)(x-4)(x-5)+1" />

                            <p className="font-semibold text-white">
                                3단계 : 미정계수 a를 구한다.
                            </p>

                            <p>
                                <InlineMath math="x=0" />을 대입하면
                            </p>

                            <BlockMath math="0\cdot f(0)=a(-1)(-2)(-3)(-4)(-5)+1" />

                            <BlockMath math="0=-120a+1" />

                            <BlockMath math="a=\frac1{120}" />

                            <p className="font-semibold text-white">
                                4단계 : 구하려는 값을 계산한다.
                            </p>

                            <BlockMath math="7f(7)=\frac1{120}(6)(5)(4)(3)(2)+1" />

                            <BlockMath math="=6+1=7" />

                            <BlockMath math="f(7)=1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다항식을 작성할 때는 먼저 값이 <InlineMath math="0" />이 되는 부분을 <InlineMath math="(x-1)(x-2)(x-3)" />처럼 만들고,
                        남은 값을 더해 줍니다. 세 조건을 한 번에 맞추기 어렵다면, 두 조건을 먼저 만족시키고 남은 조건으로 미정계수를 정할 수 있습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        최고차항의 계수가 <InlineMath math="1" />이 아닐 때는
                        앞에 미정계수를 하나 더 두어 조정합니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.32 완전제곱식으로 나눈 나머지
                </h2>

                <p className="leading-8 text-gray-300">
                    <InlineMath math="(x-a)^2" />으로 나눈 나머지는
                    일차식입니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    완전제곱식으로 나눈 나머지는
                    나누는 식을 <InlineMath math="0" />으로 두어 차수를 낮추거나,
                    나눗셈식을 작성한 뒤 인수분해를 이용하여 구할 수 있습니다.
                </p>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3+2x^2+3x+4" />를 <InlineMath math="(x-1)^2" />으로 나누었을 때의 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                풀이 1 : 나누는 식 = 0 이용
                            </p>

                            <p>
                                <InlineMath math="(x-1)^2=0" />이므로 <InlineMath math="x-1=0" />입니다.
                            </p>

                            <p>
                                따라서 <InlineMath math="x=1" />로만 바꾸는 것이 아니라, <InlineMath math="x^2" />과 <InlineMath math="x^3" />을 <InlineMath math="x" />에 관한 일차식으로 낮추어야 합니다.
                            </p>

                            <BlockMath math="(x-1)^2=0" />
                            <BlockMath math="x^2-2x+1=0" />
                            <BlockMath math="x^2=2x-1" />

                            <p>
                                그러면
                            </p>

                            <BlockMath math="x^3=x(2x-1)=2x^2-x" />
                            <BlockMath math="=2(2x-1)-x=3x-2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x^3+2x^2+3x+4" />
                            <BlockMath math="=(3x-2)+2(2x-1)+3x+4" />
                            <BlockMath math="=10x" />

                            <p className="font-semibold text-white">
                                따라서 나머지는 <InlineMath math="10x" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나눗셈식과 인수분해 이용
                                </h4>

                                <p>
                                    <InlineMath math="(x-1)^2" />으로 나눈 나머지는 일차식이므로
                                </p>

                                <BlockMath math="x^3+2x^2+3x+4=(x-1)^2Q(x)+ax+b" />

                                <p>
                                    <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math="10=a+b" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="b=-a+10" />

                                <p>
                                    이므로 나머지는
                                </p>

                                <BlockMath math="ax+b=a(x-1)+10" />

                                <p>
                                    이 됩니다.
                                </p>

                                <p>
                                    이제 양변에서 <InlineMath math="10" />을 빼면
                                </p>

                                <BlockMath math="x^3+2x^2+3x-6=(x-1)^2Q(x)+a(x-1)" />

                                <p>
                                    오른쪽은 <InlineMath math="x-1" />을 인수로 가지므로,
                                    왼쪽도 <InlineMath math="x-1" />을 인수로 가져야 합니다.
                                </p>

                                <BlockMath math="x^3+2x^2+3x-6=(x-1)(x^2+3x+6)" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^2+3x+6=(x-1)Q(x)+a" />

                                <p>
                                    <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math="a=1+3+6=10" />

                                <p>
                                    그러므로
                                </p>

                                <BlockMath math="b=-a+10=0" />

                                <BlockMath math="ax+b=10x" />
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3+ax^2+bx+2" />가 <InlineMath math="(x-1)^2" />으로 나누어떨어질 때, <InlineMath math="ab" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                풀이 1 : 나누는 식 = 0 이용
                            </p>

                            <p>
                                <InlineMath math="(x-1)^2=0" />이므로
                            </p>

                            <BlockMath math="x^2=2x-1" />

                            <p>
                                또한
                            </p>

                            <BlockMath math="x^3=3x-2" />

                            <p>
                                따라서 주어진 식은
                            </p>

                            <BlockMath math="x^3+ax^2+bx+2" />
                            <BlockMath math="=(3x-2)+a(2x-1)+bx+2" />
                            <BlockMath math="=(2a+b+3)x-a" />

                            <p>
                                나누어떨어지므로 나머지가 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath math="(2a+b+3)x-a=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-a=0,\quad 2a+b+3=0" />
                            <BlockMath math="a=0,\quad b=-3" />

                            <p className="font-semibold text-white">
                                그러므로 <InlineMath math="ab=0" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나눗셈식과 인수분해 이용
                                </h4>

                                <p>
                                    <InlineMath math="(x-1)^2" />으로 나누어떨어지므로 <InlineMath math="x-1" />이 두 번 인수로 들어갑니다.
                                </p>

                                <BlockMath math="x^3+ax^2+bx+2=(x-1)^2(x+c)" />

                                <p>
                                    최고차항과 상수항을 맞추면 <InlineMath math="c=2" />입니다.
                                </p>

                                <BlockMath math="x^3+ax^2+bx+2=(x-1)^2(x+2)" />

                                <p>
                                    전개하면
                                </p>

                                <BlockMath math="(x^2-2x+1)(x+2)" />
                                <BlockMath math="=x^3-3x+2" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a=0,\quad b=-3" />

                                <BlockMath math="ab=0" />
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />의 다항식 <InlineMath math="x^n(x^2-ax+b)" />를 <InlineMath math="(x-3)^2" />으로 나누었을 때,
                        나머지가 <InlineMath math="3^n(x-3)" />이다. <InlineMath math="a+b" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                풀이 1 : 나누는 식 = 0 이용
                            </p>

                            <p>
                                <InlineMath math="n" />은 자연수이고, 답은 <InlineMath math="n" />의 값에 관계없이 일정해야 합니다.
                                따라서 계산이 가장 간단한 <InlineMath math="n=1" />일 때를 생각합니다.
                            </p>

                            <BlockMath math="x(x^2-ax+b)\text{ 를 }(x-3)^2\text{으로 나눈 나머지}=3(x-3)" />

                            <p>
                                <InlineMath math="(x-3)^2=0" />이므로
                            </p>

                            <BlockMath math="x^2-6x+9=0" />
                            <BlockMath math="x^2=6x-9" />

                            <p>
                                또한
                            </p>

                            <BlockMath math="x^3=x(6x-9)=6x^2-9x=6(6x-9)-9x=27x-54" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x(x^2-ax+b)=x^3-ax^2+bx" />
                            <BlockMath math="=(27x-54)-a(6x-9)+bx" />
                            <BlockMath math="=(27-6a+b)x+9a-54" />

                            <p>
                                이것이 <InlineMath math="3(x-3)=3x-9" />와 같아야 하므로
                            </p>

                            <BlockMath math="27-6a+b=3,\quad 9a-54=-9" />

                            <BlockMath math="a=5,\quad b=6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a+b=11" />
                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="11" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나눗셈식과 인수분해 이용
                                </h4>

                                <BlockMath math="x^n(x^2-ax+b)=(x-3)^2Q(x)+3^n(x-3)" />

                                <p>
                                    먼저 <InlineMath math="x=3" />을 대입하면
                                </p>

                                <BlockMath math="3^n(9-3a+b)=0" />
                                <BlockMath math="9-3a+b=0" />

                                <p>
                                    따라서 <InlineMath math="x^2-ax+b" />는
                                    <InlineMath math="x-3" />을 인수로 갖습니다.
                                </p>

                                <p>
                                    상수항을 맞추면
                                </p>

                                <BlockMath math="x^2-ax+b=(x-3)\left(x-\frac{b}{3}\right)" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="x^n(x-3)\left(x-\frac{b}{3}\right)=(x-3)^2Q(x)+3^n(x-3)" />

                                <p>
                                    양변에서 <InlineMath math="x-3" />을 공통으로 생각하면
                                </p>

                                <BlockMath math="x^n\left(x-\frac{b}{3}\right)=(x-3)Q(x)+3^n" />

                                <p>
                                    다시 <InlineMath math="x=3" />을 대입하면
                                </p>

                                <BlockMath math="3^n\left(3-\frac{b}{3}\right)=3^n" />

                                <BlockMath math="3-\frac{b}{3}=1" />

                                <BlockMath math="b=6" />

                                <p>
                                    이제 처음 얻은 관계
                                </p>

                                <BlockMath math="9-3a+b=0" />

                                <p>
                                    에 <InlineMath math="b=6" />을 대입하면
                                </p>

                                <BlockMath math="9-3a+6=0" />

                                <BlockMath math="a=5" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a+b=5+6=11" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="x^{20}-1" />을 <InlineMath math="(x-1)^2" />으로 나눈 나머지를 <InlineMath math="R(x)" />라고 할 때, <InlineMath math="R(2)" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 나눗셈식을 작성한다.
                            </p>

                            <p>
                                <InlineMath math="(x-1)^2" />으로 나누었을 때의 나머지는 일차식이므로
                            </p>

                            <BlockMath math="R(x)=ax+b" />

                            <p>
                                라고 둘 수 있습니다.
                            </p>

                            <BlockMath math="x^{20}-1=(x-1)^2Q(x)+ax+b" />

                            <p>
                                여기에 <InlineMath math="x=1" />을 대입하면
                            </p>

                            <BlockMath math="0=a+b" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="b=-a" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="R(x)=a(x-1)" />

                            <BlockMath math="x^{20}-1=(x-1)^2Q(x)+a(x-1)" />

                            <p className="font-semibold text-white">
                                2단계 : 인수분해를 이용한다.
                            </p>

                            <p>
                                좌변과 우변을 각각 <InlineMath math="x-1" />을 인수로 묶으면
                            </p>

                            <BlockMath math="(x-1)(x^{19}+x^{18}+\cdots+x+1)=(x-1)\{(x-1)Q(x)+a\}" />

                            <p>
                                양변을 <InlineMath math="x-1" />로 나누면
                            </p>

                            <BlockMath math="x^{19}+x^{18}+\cdots+x+1=(x-1)Q(x)+a" />

                            <p className="font-semibold text-white">
                                3단계 : 상수를 구한다.
                            </p>

                            <p>
                                여기에 <InlineMath math="x=1" />을 대입하면
                            </p>

                            <BlockMath math="1+1+\cdots+1=a" />

                            <p>
                                왼쪽에는 <InlineMath math="1" />이 20개 있으므로
                            </p>

                            <BlockMath math="a=20" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="b=-a=-20" />

                            <p>
                                그러므로 나머지는
                            </p>

                            <BlockMath math="R(x)=20x-20" />

                            <p className="font-semibold text-white">
                                4단계 : 구하는 값을 계산한다.
                            </p>

                            <BlockMath math="R(2)=20\cdot2-20=20" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="20" />입니다.
                            </p>
                        </div>
                    </details>
                </div>
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        핵심
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="(x-a)^2" />으로 나누면 나머지는 <InlineMath math="px+q" />의 꼴입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        따라서 단순히 <InlineMath math="x=a" />를 한 번 대입하는 것만으로는
                        나머지를 완전히 결정할 수 없습니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.33 나눗셈식의 작성과 몫의 표현
                </h2>

                <p className="leading-8 text-gray-300">
                    다항식의 나눗셈을 정확하게 다루려면 나눗셈식을 바르게 작성해야 합니다.
                    특히 몫은 나누는 식에 따라 달라질 수 있으므로, 같은 기호를 함부로 반복해서 쓰지 않도록 주의해야 합니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        초등수학의 나눗셈
                    </h3>

                    <p className="leading-8 text-gray-300">
                        먼저 정수의 나눗셈을 생각해 봅니다.
                    </p>

                    <BlockMath math="31=3\cdot10+1" />

                    <p className="leading-8 text-gray-300">
                        따라서 <InlineMath math="31" />을 <InlineMath math="10" />으로 나누면
                        몫은 <InlineMath math="3" />, 나머지는 <InlineMath math="1" />입니다.
                    </p>

                    <BlockMath math="31=6\cdot5+1" />

                    <p className="leading-8 text-gray-300">
                        따라서 <InlineMath math="31" />을 <InlineMath math="5" />로 나누면
                        몫은 <InlineMath math="6" />, 나머지는 <InlineMath math="1" />입니다.
                    </p>

                    <p className="mt-3 font-semibold text-white">
                        같은 수를 나누더라도 나누는 수가 달라지면 몫은 달라질 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        다항식에서도 같습니다
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="x-1" />로 나눈 나머지가 <InlineMath math="3" />이면
                    </p>

                    <BlockMath math="f(x)=(x-1)Q_1(x)+3" />

                    <p className="leading-8 text-gray-300">
                        라고 쓸 수 있습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        또 <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나눈 나머지가 <InlineMath math="5" />이면
                    </p>

                    <BlockMath math="f(x)=(x-2)Q_2(x)+5" />

                    <p className="leading-8 text-gray-300">
                        라고 써야 합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        여기서 <InlineMath math="Q_1(x)" />와 <InlineMath math="Q_2(x)" />는
                        일반적으로 서로 다른 몫입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-3 font-bold text-red-300">
                        자주 하는 실수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음과 같이 쓰는 경우가 많습니다.
                    </p>

                    <BlockMath math="f(x)=(x-1)Q(x)+3" />
                    <BlockMath math="f(x)=(x-2)Q(x)+5" />

                    <p className="leading-8 text-gray-300">
                        하지만 이렇게 쓰면 두 나눗셈의 몫이 모두 <InlineMath math="Q(x)" />로 같다는 뜻이 됩니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        실제로는 나누는 식이 다르므로 몫도 달라질 수 있습니다.
                        따라서 서로 다른 몫은 다른 기호로 구분하여 써야 합니다.
                    </p>

                    <BlockMath math="f(x)=(x-1)Q_1(x)+3" />
                    <BlockMath math="f(x)=(x-2)Q_2(x)+5" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        몫이 주어진 문제
                    </h3>

                    <p className="leading-8 text-gray-300">
                        나머지만 구하는 문제에서는 나누는 식을 <InlineMath math="0" />으로 만드는 값을 이용하면 충분한 경우가 많습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        하지만 문제에서 몫이 직접 등장하면 반드시 나눗셈식을 작성해야 합니다.
                    </p>

                    <BlockMath math="f(x)=(\text{나누는 식})(\text{몫})+(\text{나머지})" />

                    <p className="leading-8 text-gray-300">
                        식을 생략하지 않고 쓸 때에는 정확한 기호를 사용하는 습관이 필요합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나눈
                        몫이 <InlineMath math="Q(x)" />, 나머지가 <InlineMath math="5" />이고, <InlineMath math="Q(x)" />를 <InlineMath math="x-3" />으로 나눈 나머지가 <InlineMath math="2" />일 때, <InlineMath math="xf(x)" />를 <InlineMath math="x-3" />으로 나눈 나머지를 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 대상을 확인한다.
                            </p>

                            <p>
                                <InlineMath math="xf(x)" />를 <InlineMath math="x-3" />으로 나눈 나머지는
                                나머지정리에 의해
                            </p>

                            <BlockMath math="3f(3)" />

                            <p>
                                입니다. 따라서 먼저 <InlineMath math="f(3)" />을 구해야 합니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 나눗셈식을 작성한다.
                            </p>

                            <p>
                                <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나눈 몫이
                                <InlineMath math="Q(x)" />, 나머지가 <InlineMath math="5" />이므로
                            </p>

                            <BlockMath math="f(x)=(x-2)Q(x)+5" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                여기에 <InlineMath math="x=3" />을 대입하면
                            </p>

                            <BlockMath math="f(3)=Q(3)+5" />

                            <p>
                                가 됩니다.
                            </p>

                            <p className="font-semibold text-white">
                                3단계 : 필요한 값을 찾는다.
                            </p>

                            <p>
                                <InlineMath math="Q(x)" />를 <InlineMath math="x-3" />으로 나눈 나머지가
                                <InlineMath math="2" />이므로
                            </p>

                            <BlockMath math="Q(3)=2" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(3)=2+5=7" />

                            <p className="font-semibold text-white">
                                4단계 : 구하려는 나머지를 계산한다.
                            </p>

                            <BlockMath math="3f(3)=3\cdot7=21" />

                            <p className="font-semibold text-white">
                                따라서 구하는 나머지는 <InlineMath math="21" />입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    생각의 흐름
                                </h4>

                                <BlockMath math="\text{구하려는 것}=3f(3)" />
                                <BlockMath math="f(3)=Q(3)+5" />
                                <BlockMath math="Q(3)=2" />
                                <BlockMath math="3f(3)=21" />

                                <p className="leading-8 text-gray-300">
                                    몫이 문제에 등장하면 먼저 나눗셈식을 작성하고,
                                    구하려는 값에서 필요한 값을 차례로 찾아갑니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        다항식 <InlineMath math="f(x)" />를 <InlineMath math="g(x)" />로 나눈 몫이 <InlineMath math="x^2+x" />, 나머지가 <InlineMath math="x^2-3x+4" />이고, <InlineMath math="g(x)" />를 <InlineMath math="x-2" />로 나눈 나머지가 <InlineMath math="3" />이다.
                        이 다항식 <InlineMath math="f(x)" />를 <InlineMath math="x+1" />로 나누었을 때 몫을 <InlineMath math="Q(x)" />, 나머지를 <InlineMath math="R" />이라 할 때, <InlineMath math="Q(2)+R" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="font-semibold text-white">
                                1단계 : <InlineMath math="g(x)" />의 나눗셈식을 작성한다.
                            </p>

                            <p>
                                <InlineMath math="g(x)" />를 <InlineMath math="x-2" />로 나눈 나머지가 <InlineMath math="3" />이므로
                            </p>

                            <BlockMath math="g(x)=(x-2)h(x)+3" />

                            <p>
                                라고 둘 수 있습니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : <InlineMath math="f(x)" />에 대입한다.
                            </p>

                            <p>
                                문제의 조건에서
                            </p>

                            <BlockMath math="f(x)=g(x)(x^2+x)+(x^2-3x+4)" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="f(x)=\{(x-2)h(x)+3\}(x^2+x)+(x^2-3x+4)" />

                            <BlockMath math="=x(x-2)(x+1)h(x)+3x^2+3x+x^2-3x+4" />

                            <BlockMath math="=x(x-2)(x+1)h(x)+4x^2+4" />

                            <p className="font-semibold text-white">
                                3단계 : <InlineMath math="x+1" />로 나누는 꼴로 정리한다.
                            </p>

                            <p>
                                <InlineMath math="4x^2+4" />를 <InlineMath math="x+1" />로 나누면
                            </p>

                            <BlockMath math="4x^2+4=(x+1)(4x-4)+8" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="f(x)=(x+1)\{x(x-2)h(x)+4x-4\}+8" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="Q(x)=x(x-2)h(x)+4x-4" />

                            <BlockMath math="R=8" />

                            <p className="font-semibold text-white">
                                4단계 : <InlineMath math="Q(2)+R" />을 계산한다.
                            </p>

                            <BlockMath math="Q(2)=2\cdot(2-2)\cdot h(2)+4\cdot2-4" />

                            <BlockMath math="=4" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="Q(2)+R=4+8=12" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="\boxed{12}" />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    핵심 아이디어
                                </h4>

                                <p>
                                    몫이 주어져 있으면 바로 계산하지 말고,
                                    먼저 나눗셈식을 작성합니다.
                                </p>

                                <BlockMath math="g(x)=(x-2)h(x)+3" />

                                <p>
                                    를 이용하여 나머지 정보를 식 속에 넣으면
                                    <InlineMath math="x+1" />의 인수를 만들 수 있습니다.
                                </p>

                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-3 font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        몫은 나누는 식에 따라 달라질 수 있습니다.
                        따라서 서로 다른 나눗셈식을 작성할 때는
                        <InlineMath math="Q_1(x), Q_2(x)" />처럼 몫을 구분해야 합니다.
                    </p>

                    <p className="mt-3 font-semibold text-white">
                        수학에서 같은 기호를 쓰면 같은 대상을 의미합니다.
                        식을 생략하지 않고 쓸 때에는 정확하게 쓰는 습관을 들여야 합니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    1.34 항등식을 이용한 계수
                </h2>

                <p className="leading-8 text-gray-300">
                    항등식은 모든 <InlineMath math="x" />에 대하여 성립하는 식입니다.
                    따라서 적당한 값을 대입하면 필요한 계수의 합을 구할 수 있습니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        예시 1
                    </h3>

                    <BlockMath math="(x^2-x+1)^3=a_0+a_1x+a_2x^2+a_3x^3+a_4x^4+a_5x^5+a_6x^6" />

                    <p className="leading-8 text-gray-300">
                        이 식을 직접 전개하면 모든 계수를 구할 수 있습니다.
                        하지만 계수의 합만 필요하다면 항등식에 값을 대입하면 됩니다.
                    </p>

                    <p className="mt-4">
                        <InlineMath math="x=1" />을 대입하면
                    </p>

                    <BlockMath math="1=a_0+a_1+a_2+a_3+a_4+a_5+a_6" />

                    <p>
                        <InlineMath math="x=-1" />을 대입하면
                    </p>

                    <BlockMath math="27=a_0-a_1+a_2-a_3+a_4-a_5+a_6" />

                    <p>
                        두 식을 더하면
                    </p>

                    <BlockMath math="a_0+a_2+a_4+a_6=14" />

                    <p>
                        두 식을 빼면
                    </p>

                    <BlockMath math="a_1+a_3+a_5=-13" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        예시 2
                    </h3>
                    <div className="text-[0.95rem]">
                        <BlockMath math="(x^2-x+1)^3=a_0+a_1(x-1)+a_2(x-1)^2+a_3(x-1)^3+a_4(x-1)^4+a_5(x-1)^5+a_6(x-1)^6" />
                    </div><br />
                    <p>
                        이번에는 <InlineMath math="x-1" />을 기준으로 전개된 항등식입니다.
                    </p>

                    <p className="mt-4">
                        <InlineMath math="x=2" />를 대입하면 <InlineMath math="x-1=1" />이므로
                    </p>

                    <BlockMath math="27=a_0+a_1+a_2+a_3+a_4+a_5+a_6" />

                    <p>
                        <InlineMath math="x=0" />을 대입하면 <InlineMath math="x-1=-1" />이므로
                    </p>

                    <BlockMath math="1=a_0-a_1+a_2-a_3+a_4-a_5+a_6" />

                    <p>
                        두 식을 더하면
                    </p>

                    <BlockMath math="a_0+a_2+a_4+a_6=14" />

                    <p>
                        두 식을 빼면
                    </p>

                    <BlockMath math="a_1+a_3+a_5=13" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="leading-8 text-gray-300">
                        모든 실수 <InlineMath math="x" />에 대하여
                    </p>

                    <BlockMath math="x^{10}=a_{10}(x+2)^{10}+a_9(x+2)^9+\cdots+a_1(x+2)+a_0" />

                    <p className="leading-8 text-gray-300">
                        이 성립할 때, <InlineMath math="a_1+a_2+\cdots+a_9" />의 값을 구하시오.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 전체 합을 만들 값을 대입한다.
                            </p>

                            <p>
                                <InlineMath math="x=-1" />을 대입하면 <InlineMath math="x+2=1" />이므로
                            </p>

                            <BlockMath math="(-1)^{10}=a_{10}+a_9+\cdots+a_1+a_0" />

                            <BlockMath math="1=a_0+a_1+\cdots+a_9+a_{10}" />

                            <p className="font-semibold text-white">
                                2단계 : 양 끝 계수를 구한다.
                            </p>

                            <p>
                                <InlineMath math="x=-2" />를 대입하면 <InlineMath math="x+2=0" />이므로
                            </p>

                            <BlockMath math="(-2)^{10}=a_0" />

                            <BlockMath math="a_0=1024" />

                            <p>
                                또한 양변의 최고차항의 계수를 비교하면
                            </p>

                            <BlockMath math="a_{10}=1" />

                            <p className="font-semibold text-white">
                                3단계 : 필요한 계수의 합을 구한다.
                            </p>

                            <BlockMath math="1=a_0+(a_1+a_2+\cdots+a_9)+a_{10}" />

                            <BlockMath math="1=1024+(a_1+a_2+\cdots+a_9)+1" />

                            <BlockMath math="a_1+a_2+\cdots+a_9=-1024" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="\boxed{-1024}" />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    핵심 아이디어
                                </h4>

                                <p>
                                    모든 계수를 직접 구할 필요는 없습니다.
                                    필요한 계수의 합이 나오도록 적절한 값을 대입하면 됩니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="leading-8 text-gray-300">
                        모든 실수 <InlineMath math="x" />에 대하여
                    </p>

                    <BlockMath math="\left(\frac{x}{2}+1\right)^8=a_0+a_1x+a_2x^2+\cdots+a_8x^8" />

                    <p className="leading-8 text-gray-300">
                        이 성립할 때, <InlineMath math="a_0-2a_1+4a_2-8a_3+\cdots+256a_8" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 식을 확인한다.
                            </p>

                            <p>
                                구하려는 식은
                            </p>

                            <BlockMath math="a_0+a_1(-2)+a_2(-2)^2+a_3(-2)^3+\cdots+a_8(-2)^8" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 우변에 <InlineMath math="x=-2" />를 대입한 값입니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 항등식에 <InlineMath math="x=-2" />를 대입한다.
                            </p>

                            <BlockMath math="\left(\frac{-2}{2}+1\right)^8=a_0-2a_1+4a_2-8a_3+\cdots+256a_8" />

                            <BlockMath math="(-1+1)^8=a_0-2a_1+4a_2-8a_3+\cdots+256a_8" />

                            <BlockMath math="0=a_0-2a_1+4a_2-8a_3+\cdots+256a_8" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="\boxed{0}" />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    핵심 아이디어
                                </h4>

                                <p>
                                    계수 앞의 숫자들이 <InlineMath math="1, -2, 4, -8, \cdots" />
                                    이므로 <InlineMath math="x=-2" />를 대입한 형태입니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="leading-8 text-gray-300">
                        모든 실수 <InlineMath math="x" />에 대하여
                    </p>

                    <BlockMath math="(3x^2-x-1)^5=a_0+a_1x+a_2x^2+\cdots+a_{10}x^{10}" />

                    <p className="leading-8 text-gray-300">
                        이 성립할 때, 다음 식의 값을 구하시오.
                    </p>
                    <BlockMath math="\frac{a_1}{3}+\frac{a_3}{3^3}+\frac{a_5}{3^5}+\frac{a_7}{3^7}+\frac{a_9}{3^9}" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 식을 확인한다.
                            </p>

                            <p>
                                구하려는 식은 홀수차항의 계수에 <InlineMath math="x=\frac13" />을 대입한 부분입니다.
                            </p>

                            <BlockMath math="\frac{a_1}{3}+\frac{a_3}{3^3}+\cdots+\frac{a_9}{3^9}" />

                            <p>
                                홀수차항만 남기려면 <InlineMath math="x=\frac13" />과 <InlineMath math="x=-\frac13" />을 대입한 식을 이용합니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : <InlineMath math="x=\frac13" />을 대입한다.
                            </p>

                            <BlockMath math="\left(3\left(\frac13\right)^2-\frac13-1\right)^5" />
                            <BlockMath math="=\left(\frac13-\frac13-1\right)^5" />
                            <BlockMath math="=-1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a_0+\frac{a_1}{3}+\frac{a_2}{3^2}+\cdots+\frac{a_{10}}{3^{10}}=-1" />

                            <p className="font-semibold text-white">
                                3단계 : <InlineMath math="x=-\frac13" />을 대입한다.
                            </p>

                            <BlockMath math="\left(3\left(-\frac13\right)^2+\frac13-1\right)^5" />
                            <BlockMath math="=\left(\frac13+\frac13-1\right)^5" />
                            <BlockMath math="=\left(-\frac13\right)^5=-\frac1{243}" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a_0-\frac{a_1}{3}+\frac{a_2}{3^2}-\frac{a_3}{3^3}+\cdots+\frac{a_{10}}{3^{10}}=-\frac1{243}" />

                            <p className="font-semibold text-white">
                                4단계 : 두 식을 뺀다.
                            </p>

                            <p>
                                두 식을 빼면 홀수차항만 두 배로 남습니다.
                            </p>

                            <BlockMath math="2\left(\frac{a_1}{3}+\frac{a_3}{3^3}+\frac{a_5}{3^5}+\frac{a_7}{3^7}+\frac{a_9}{3^9}\right)" />
                            <BlockMath math="=-1-\left(-\frac1{243}\right)" />
                            <BlockMath math="=-\frac{242}{243}" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\frac{a_1}{3}+\frac{a_3}{3^3}+\frac{a_5}{3^5}+\frac{a_7}{3^7}+\frac{a_9}{3^9}" />
                            <BlockMath math="=-\frac{121}{243}" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-\frac{121}{243}" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="leading-8 text-gray-300">
                        모든 실수 <InlineMath math="x" />에 대하여
                    </p>

                    <BlockMath math="(x^4-x^3-2x^2+3x)^4=a_0+a_1x+a_2x^2+\cdots+a_{16}x^{16}" />

                    <p className="leading-8 text-gray-300">
                        이 성립할 때, <InlineMath math="a_3+a_6+a_8+a_{10}+a_{12}+a_{14}+a_{16}" />의 값을 구하시오.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="font-semibold text-white">
                                1단계 : 구하려는 계수의 구조를 확인한다.
                            </p>

                            <p>
                                주어진 식은
                            </p>

                            <BlockMath math="(x^4-x^3-2x^2+3x)^4" />

                            <p>
                                입니다. 괄호 안의 모든 항에 <InlineMath math="x" />가 들어 있으므로,
                                네 번 곱하면 최소 차수는 <InlineMath math="x^4" />입니다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a_0=a_1=a_2=a_3=0" />

                            <p>
                                입니다.
                            </p>

                            <p className="font-semibold text-white">
                                2단계 : 짝수차항의 계수 합을 구한다.
                            </p>

                            <p>
                                짝수차항의 계수 합은 <InlineMath math="x=1" />과 <InlineMath math="x=-1" />을 대입한 값을 이용합니다.
                            </p>

                            <BlockMath math="P(x)=(x^4-x^3-2x^2+3x)^4" />

                            <BlockMath math="P(1)=(1-1-2+3)^4=1" />

                            <BlockMath math="P(-1)=(1+1-2-3)^4=81" />

                            <p>
                                따라서 짝수차항의 계수 합은
                            </p>

                            <BlockMath math="\frac{P(1)+P(-1)}{2}=\frac{1+81}{2}=41" />

                            <p className="font-semibold text-white">
                                3단계 : 필요 없는 항을 뺀다.
                            </p>

                            <p>
                                구하려는 값은 짝수차항 중에서 <InlineMath math="a_6,a_8,\ldots,a_{16}" />의 합입니다.
                                따라서 짝수차항의 계수 합에서 <InlineMath math="a_4" />를 빼면 됩니다.
                            </p>

                            <p>
                                최소차항은 <InlineMath math="(3x)^4" />에서 나오므로
                            </p>

                            <BlockMath math="a_4=81" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a_3+a_6+a_8+a_{10}+a_{12}+a_{14}+a_{16}" />
                            <BlockMath math="=0+(41-81)" />
                            <BlockMath math="-40" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-40" />입니다.
                            </p>
                        </div>
                    </details>
                </div>
            </section>


        </>
    );
}