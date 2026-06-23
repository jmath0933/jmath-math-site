"use client";

import { InlineMath, BlockMath } from "react-katex";

export default function ComplexNumbersPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.1 실수 체계
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    수는 처음부터 지금과 같은 모습이 아니었습니다.
                    계산이 복잡해지고 연산의 범위가 넓어지면서,
                    필요한 수가 하나씩 새롭게 등장했습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        수의 확장
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            물건의 개수를 세기 위해 <b className="text-white">자연수</b>가 사용되었습니다.
                        </p>

                        <BlockMath math="1,\ 2,\ 3,\ 4,\ \cdots" />

                        <p>
                            뺄셈을 하다 보면 자연수만으로는 부족합니다.
                        </p>

                        <BlockMath math="3-5=-2" />

                        <p>
                            그래서 0과 음의 정수를 포함한 <b className="text-white">정수</b>가 등장했습니다.
                        </p>

                        <p>
                            나눗셈을 하다 보면 정수만으로는 부족합니다.
                        </p>

                        <BlockMath math="1\div2=\frac12" />

                        <p>
                            그래서 분수로 나타낼 수 있는 <b className="text-white">유리수</b>가 등장했습니다.
                        </p>

                        <p>
                            하지만 제곱근을 생각하면 유리수만으로도 부족합니다.
                        </p>

                        <BlockMath math="x^2=2" />
                        <BlockMath math="x=\sqrt2" />

                        <p>
                            <InlineMath math="\sqrt2" />는 유리수로 나타낼 수 없습니다.
                            그래서 <b className="text-white">무리수</b>가 등장했습니다.
                        </p>

                        <p>
                            유리수와 무리수를 모두 포함하여 수직선 위의 모든 점을 나타내는 수를
                            <b className="text-white"> 실수</b>라고 합니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <p className="leading-8 text-gray-300">
                        수의 범위는 외워서 넓어진 것이 아닙니다.
                        새로운 계산을 하기 위해 기존의 수로 표현할 수 없는 값이 필요했고,
                        그때마다 수의 범위가 확장되었습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            자연수 : 개수를 세기 위해
                        </p>
                        <p className="leading-8 text-gray-300">
                            정수 : 뺄셈을 하기 위해
                        </p>
                        <p className="leading-8 text-gray-300">
                            유리수 : 나눗셈을 하기 위해
                        </p>
                        <p className="leading-8 text-gray-300">
                            무리수 : 제곱근을 표현하기 위해
                        </p>
                        <p className="leading-8 text-gray-300">
                            실수 : 수직선 위의 모든 점을 표현하기 위해
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        자연수의 분류
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        자연수는 양의 약수의 개수에 따라 다음과 같이 분류할 수 있습니다.
                    </p>

                    <div className="rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            <b className="text-white">1</b> : 양의 약수가 1개인 유일한 수
                        </p>
                        <p className="leading-8 text-gray-300">
                            <b className="text-white">소수</b> : 양의 약수의 개수가 2개인 수
                        </p>
                        <p className="leading-8 text-gray-300">
                            <b className="text-white">합성수</b> : 양의 약수의 개수가 3개 이상인 수
                        </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                        <h4 className="mb-3 text-lg font-bold text-red-300">
                            자주 하는 실수
                        </h4>

                        <p className="leading-8 text-gray-300">
                            1은 소수가 아닙니다. 소수는 양의 약수가 정확히 2개인 수인데,
                            1의 양의 약수는 1 하나뿐입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        실수의 분류
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        실수는 크게 유리수와 무리수로 나눌 수 있습니다.
                        유리수 안에는 정수와 정수가 아닌 유리수가 있고,
                        정수 안에는 자연수, 0, 음의 정수가 있습니다.
                    </p>

                    <div className="overflow-x-auto rounded-xl bg-black/40 p-6">
                        <div className="min-w-[520px] font-mono text-lg leading-9 text-gray-200">
                            <p>실수</p>
                            <p>├─ 유리수</p>
                            <p>│&nbsp;&nbsp;├─ 정수</p>
                            <p>│&nbsp;&nbsp;│&nbsp;&nbsp;├─ 자연수</p>
                            <p>│&nbsp;&nbsp;│&nbsp;&nbsp;├─ 0</p>
                            <p>│&nbsp;&nbsp;│&nbsp;&nbsp;└─ 음의 정수</p>
                            <p>│&nbsp;&nbsp;└─ 정수가 아닌 유리수</p>
                            <p>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ 유한소수</p>
                            <p>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ 순환소수</p>
                            <p>└─ 무리수</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        복소수로 이어지는 질문
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        지금까지 수의 범위는 필요한 계산을 하기 위해 계속 넓어졌습니다.
                        그렇다면 다음 방정식은 실수의 범위에서 해결할 수 있을까요?
                    </p>

                    <BlockMath math="x^2+1=0" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 식을 정리하면
                    </p>

                    <BlockMath math="x^2=-1" />

                    <p className="mt-5 leading-8 text-gray-300">
                        그런데 실수의 제곱은 항상 0 이상입니다.
                        따라서 실수의 범위에서는 이 방정식의 해를 구할 수 없습니다.
                    </p>

                    <p className="mt-5 font-semibold leading-8 text-white">
                        이 문제를 해결하기 위해 다음 단원에서 새로운 수인 허수를 도입합니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.2 허수와 제곱근 기호
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    제곱근 기호는 제곱하면 원래의 수가 나오도록 만든 기호입니다.
                    그런데 이 성질을 음수에 적용할 때 학생들이 자주 실수합니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        제곱근 기호의 성질
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        먼저 다음 식들을 계산해 봅시다.
                    </p>

                    <div className="rounded-xl bg-black/40 p-5">
                        <BlockMath math="(\sqrt{2})^2=2" />
                        <BlockMath math="(\sqrt{\triangle})^2=\triangle" />
                        <BlockMath math="(\sqrt{\square})^2=\square" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        즉, 제곱근 기호 안에 있는 대상은 제곱하면 다시 밖으로 나옵니다.
                    </p>

                    <BlockMath math="(\sqrt{a})^2=a" />
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        자주 하는 실수
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        그렇다면 다음 식은 얼마일까요?
                    </p>

                    <BlockMath math="(\sqrt{-1})^2" />

                    <p className="mt-5 leading-8 text-gray-300">
                        많은 학생들이 이 식의 값을 <InlineMath math="1" />이라고 생각합니다.
                        제곱하면 양수가 된다는 생각이 먼저 떠오르기 때문입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        하지만 앞에서 본 성질을 그대로 적용하면,
                        제곱근 기호 안의 수가 그대로 나와야 합니다.
                    </p>

                    <BlockMath math="(\sqrt{-1})^2=-1" />

                    <p className="mt-5 font-semibold leading-8 text-white">
                        중요한 것은 <InlineMath math="\sqrt{-1}" /> 자체가 <InlineMath math="-1" />이라는 뜻이 아니라, <InlineMath math="\sqrt{-1}" />을 제곱하면 <InlineMath math="-1" />이 된다는 뜻입니다.
                    </p>
                </div>

                <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h4 className="mb-3 text-lg font-bold text-red-300">
                        제곱근 기호 정확히 읽기
                    </h4>

                    <p className="mb-5 leading-8 text-gray-300">
                        다음 두 식은 모양이 비슷하여 자주 혼동하지만,
                        의미가 전혀 다른 식입니다.
                    </p>

                    <div className="rounded-xl bg-black/40 p-5">
                        <BlockMath math="(\sqrt{\square})^2" />

                        <p className="mt-4 text-center leading-8 text-gray-300">
                            제곱근 기호 전체를 두 번 곱하는 식
                        </p>

                        <BlockMath math="(\sqrt{\square})^2=\square" />
                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="\sqrt{\square^2}" />

                        <p className="mt-4 text-center leading-8 text-gray-300">
                            먼저 제곱한 뒤 제곱근을 취하는 식
                        </p>

                        <BlockMath math="\sqrt{\square^2}=|\square|" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        제곱을 하면 양수와 음수의 구별이 사라집니다.
                        따라서 다시 제곱근을 취하면 원래 수가 아니라
                        절댓값이 됩니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                        <h5 className="mb-4 font-semibold text-yellow-300">
                            예시
                        </h5>

                        <BlockMath math="(\sqrt{-3})^2=-3" />

                        <BlockMath math="\sqrt{(-3)^2}=3" />

                        <p className="mt-5 leading-8 text-gray-300">
                            첫 번째 식은 제곱근 기호 전체를 제곱한 것이므로
                            제곱근 안의 수가 그대로 나옵니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            두 번째 식은 먼저 제곱하여 9를 만든 뒤
                            제곱근을 취하므로 3이 됩니다.
                        </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                        <h5 className="mb-4 font-semibold text-green-300">
                            요약
                        </h5>

                        <BlockMath math="(\sqrt{\triangle})^2=\triangle" />

                        <p className="text-center leading-8 text-gray-300">
                            제곱근이 먼저 나오면 원래 수가 나온다.
                        </p>

                        <BlockMath math="\sqrt{\square^2}=|\square|" />

                        <p className="text-center leading-8 text-gray-300">
                            제곱이 먼저 나오면 절댓값이 나온다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        실수에는 없는 수
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        다음 방정식을 생각해 봅시다.
                    </p>

                    <BlockMath math="x^2+1=0" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 식을 정리하면 다음과 같습니다.
                    </p>

                    <BlockMath math="x^2=-1" />

                    <p className="mt-5 leading-8 text-gray-300">
                        그런데 실수의 제곱은 항상 <InlineMath math="0" /> 이상입니다.
                        따라서 제곱해서 <InlineMath math="-1" />이 되는 실수는 없습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="x^2=-1" />
                        <p className="text-center leading-8 text-gray-300">
                            를 만족하는 실수 <InlineMath math="x" />는 존재하지 않습니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        허수 단위
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        실수에는 없지만, 제곱해서 <InlineMath math="-1" />이 되는 수가 필요합니다.
                        그래서 이 수를 새로운 기호로 나타내기로 합니다.
                    </p>

                    <BlockMath math="i=\sqrt{-1}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이 <InlineMath math="i" />를 <b className="text-white">허수 단위</b>라고 합니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 허수 단위의 가장 중요한 성질은 다음과 같습니다.
                    </p>

                    <BlockMath math="i^2=-1" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이제 앞의 방정식 <InlineMath math="x^2+1=0" />의 해는 다음과 같이 나타낼 수 있습니다.
                    </p>

                    <BlockMath math="x=\pm i" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        복소수의 표현
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        실수는 수직선 위의 한 점으로 나타낼 수 있습니다.
                        즉, 실수는 가로선 하나를 모두 사용하여 표현됩니다.
                    </p>

                    <p className="mb-5 leading-8 text-gray-300">
                        하지만 허수는 실수가 아니므로 수직선 위에 나타낼 수 없습니다.
                        그래서 허수를 표현하기 위해 실수축에 수직인 새로운 축을 생각합니다.
                    </p>

                    <div className="rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            가로축 : 실수축
                        </p>
                        <p className="leading-8 text-gray-300">
                            세로축 : 허수축
                        </p>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        이처럼 실수축과 허수축을 함께 사용하여 수를 나타내는 평면을
                        <b className="text-white"> 복소평면</b>이라고 합니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        현재 교과과정에서는 복소평면 자체를 자세히 다루지는 않지만,
                        복소수를 표현하는 생각으로 이해하면 됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        복소수
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        실수축에 해당하는 값이 <InlineMath math="a" />,
                        허수축에 해당하는 값이 <InlineMath math="b" />일 때,
                        이 수를 다음과 같이 나타냅니다.
                    </p>

                    <BlockMath math="a+bi" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이와 같이 실수와 허수를 함께 사용하여 나타낸 수를
                        <b className="text-white"> 복소수</b>라고 합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="a+bi\quad (a,\ b는\ 실수)" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        여기서 <InlineMath math="a" />를 실수부분, <InlineMath math="b" />를 허수부분이라고 합니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.3 복소수의 표현
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    복소수는 실수와 허수를 함께 사용하여 나타낸 수입니다.
                    실수만으로는 표현할 수 없는 수를 다루기 위해 복소수가 만들어졌습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        복소수의 꼴
                    </h3>

                    <BlockMath math="z=a+bi" />

                    <p className="mt-5 leading-8 text-gray-300">
                        여기서 <InlineMath math="a,b" />는 실수이고, <InlineMath math="i" />는 <InlineMath math="i^2=-1" />을 만족하는 허수단위입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="z=a+bi" />
                        <p className="text-center leading-8 text-gray-300">
                            실수부분이 <InlineMath math="a" />, 허수부분이 <InlineMath math="b" />인 복소수
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        실수부분과 허수부분
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        복소수 <InlineMath math="a+bi" />
                        에서
                    </p>

                    <div className="rounded-xl bg-black/40 p-5">
                        <BlockMath math="실수부분=a" />
                        <BlockMath math="허수부분=b" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        허수부분은 <InlineMath math="bi" />
                        전체가 아니라 <InlineMath math="b" />
                        임에 주의해야 합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-yellow-300">
                            예
                        </h4>

                        <BlockMath math="z=2+3i" />

                        <BlockMath math="실수부분=2" />

                        <BlockMath math="허수부분=3" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        켤레복소수
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        복소수와 허수부분의 부호만 반대인 복소수를
                        켤레복소수라고 합니다.
                    </p>

                    <BlockMath math="z=a+bi" />

                    <BlockMath math="\overline{z}=a-bi" />

                    <p className="mt-5 leading-8 text-gray-300">
                        켤레복소수는 원래 복소수와 실수부분은 같고,
                        허수부분의 부호만 반대입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        예제
                    </h3>

                    <BlockMath math="z=2+3i" />

                    <p className="mt-5 leading-8 text-gray-300">
                        허수부분의 부호만 반대로 바꾸면
                    </p>

                    <BlockMath math="\overline{z}=2-3i" />

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="\overline{(2+3i)}=2-3i" />
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="z=a+bi" />

                    <p className="text-center leading-8 text-gray-300">
                        실수부분은 a, 허수부분은 b
                    </p>

                    <BlockMath math="\overline{z}=a-bi" />

                    <p className="text-center leading-8 text-gray-300">
                        켤레복소수는 허수부분의 부호만 반대
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.4 복소수의 상등
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    복소수는 실수부분과 허수부분으로 이루어져 있습니다.
                    따라서 두 복소수가 같다는 것은 실수부분끼리 같고,
                    허수부분끼리 같다는 뜻입니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        복소수의 상등
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        실수 <InlineMath math="a,b,c,d" />에 대하여
                    </p>

                    <BlockMath math="a+bi=c+di" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이면 실수부분과 허수부분이 각각 같아야 하므로
                    </p>

                    <BlockMath math="a=c,\quad b=d" />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="a+bi=c+di\Longleftrightarrow a=c,\quad b=d" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        특별한 경우
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        복소수 <InlineMath math="0" />은
                        <InlineMath math="0+0i" />로 생각할 수 있습니다.
                    </p>

                    <BlockMath math="a+bi=0" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이면
                    </p>

                    <BlockMath math="a=0,\quad b=0" />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="a+bi=0\Longleftrightarrow a=0,\quad b=0" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        풀이 전략
                    </h3>

                    <p className="leading-8 text-gray-300">
                        복소수의 상등 문제가 나오면 먼저 실수부분과 허수부분을 나눕니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            1. 실수부분끼리 비교한다.
                        </p>
                        <p className="leading-8 text-gray-300">
                            2. 허수부분끼리 비교한다.
                        </p>
                        <p className="leading-8 text-gray-300">
                            3. 만들어진 연립방정식을 푼다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수 <InlineMath math="a,b" />가 <InlineMath math="(a-b)+(a+b)i=6+2i" />를 만족할 때, <InlineMath math="ab" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                복소수의 상등에 의해 실수부분끼리, 허수부분끼리 비교합니다.
                            </p>

                            <BlockMath math="a-b=6" />
                            <BlockMath math="a+b=2" />

                            <p>두 식을 더하면</p>

                            <BlockMath math="2a=8" />
                            <BlockMath math="a=4" />

                            <p>따라서</p>

                            <BlockMath math="4+b=2" />
                            <BlockMath math="b=-2" />

                            <p>그러므로</p>

                            <BlockMath math="ab=4\cdot(-2)=-8" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-8" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수 <InlineMath math="x,y" />에 대하여 <InlineMath math="(1-i)x+(1+i)y=4-2i" />가 성립할 때, <InlineMath math="xy" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>먼저 식을 실수부분과 허수부분으로 정리합니다.</p>

                            <BlockMath math="(1-i)x+(1+i)y" />
                            <BlockMath math="=x-xi+y+yi" />
                            <BlockMath math="=(x+y)+(-x+y)i" />

                            <p>따라서</p>

                            <BlockMath math="(x+y)+(-x+y)i=4-2i" />

                            <p>복소수의 상등에 의해</p>

                            <BlockMath math="x+y=4" />
                            <BlockMath math="-x+y=-2" />

                            <p>두 식을 풀면</p>

                            <BlockMath math="2y=2" />
                            <BlockMath math="y=1" />
                            <BlockMath math="x=3" />

                            <p>그러므로</p>

                            <BlockMath math="xy=3" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수 <InlineMath math="x,y" />가 <InlineMath math="i(x+iy^2)+(2x+3y)i+3x+y-1=0" />을 만족시킬 때, <InlineMath math="xy" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>먼저 식을 정리합니다.</p>

                            <BlockMath math="i(x+iy^2)=xi+i^2y^2" />
                            <BlockMath math="=xi-y^2" />

                            <p>따라서 전체 식은</p>

                            <BlockMath math="-y^2+xi+(2x+3y)i+3x+y-1=0" />

                            <p>실수부분과 허수부분으로 나누면</p>

                            <BlockMath math="(3x+y-1-y^2)+(x+2x+3y)i=0" />

                            <BlockMath math="(3x+y-1-y^2)+(3x+3y)i=0" />

                            <p>복소수의 상등에 의해</p>

                            <BlockMath math="3x+y-1-y^2=0" />
                            <BlockMath math="3x+3y=0" />

                            <p>두 번째 식에서</p>

                            <BlockMath math="x+y=0" />
                            <BlockMath math="x=-y" />

                            <p>이를 첫 번째 식에 대입합니다.</p>

                            <BlockMath math="3(-y)+y-1-y^2=0" />
                            <BlockMath math="-y^2-2y-1=0" />
                            <BlockMath math="(y+1)^2=0" />
                            <BlockMath math="y=-1" />

                            <p>따라서</p>

                            <BlockMath math="x=1" />

                            <p>그러므로</p>

                            <BlockMath math="xy=1\cdot(-1)=-1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수 <InlineMath math="x,y" />가 <InlineMath math="xy-xi-yi-3-2i=0" />을 만족할 때, <InlineMath math="x^3+y^3" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>식을 실수부분과 허수부분으로 나눕니다.</p>

                            <BlockMath math="xy-xi-yi-3-2i=0" />
                            <BlockMath math="(xy-3)+(-x-y-2)i=0" />

                            <p>복소수의 상등에 의해</p>

                            <BlockMath math="xy-3=0" />
                            <BlockMath math="-x-y-2=0" />

                            <p>따라서</p>

                            <BlockMath math="xy=3" />
                            <BlockMath math="x+y=-2" />

                            <p>구하려는 식은</p>

                            <BlockMath math="x^3+y^3" />

                            <p>세제곱의 합 공식을 이용합니다.</p>

                            <BlockMath math="x^3+y^3=(x+y)^3-3xy(x+y)" />

                            <p>값을 대입하면</p>

                            <BlockMath math="x^3+y^3=(-2)^3-3\cdot3\cdot(-2)" />
                            <BlockMath math="=-8+18" />
                            <BlockMath math="=10" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="10" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수 <InlineMath math="x,y" />에 대하여 <InlineMath math="|x-y|+(y-2)i=5x-2-3xi" />가 성립할 때, <InlineMath math="x+y=\frac{q}{p}" />라 하자.
                        이때 <InlineMath math="p+q" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>오른쪽을 실수부분과 허수부분으로 나눕니다.</p>

                            <BlockMath math="5x-2-3xi=(5x-2)+(-3x)i" />

                            <p>따라서 복소수의 상등에 의해</p>

                            <BlockMath math="|x-y|=5x-2" />
                            <BlockMath math="y-2=-3x" />

                            <p>두 번째 식에서</p>

                            <BlockMath math="y=2-3x" />

                            <p>이를 첫 번째 식에 대입합니다.</p>

                            <BlockMath math="|x-y|=|x-(2-3x)|" />
                            <BlockMath math="=|4x-2|" />

                            <p>따라서</p>

                            <BlockMath math="|4x-2|=5x-2" />

                            <p>
                                오른쪽은 절댓값과 같으므로 <InlineMath math="5x-2\ge0" />입니다.
                            </p>

                            <p>경우를 나눕니다.</p>

                            <BlockMath math="4x-2\ge0\quad \text{이면}\quad |4x-2|=4x-2" />
                            <BlockMath math="4x-2=5x-2" />
                            <BlockMath math="x=0" />

                            <p>
                                하지만 <InlineMath math="4x-2\ge0" />을 만족하지 않으므로 불가능합니다.
                            </p>

                            <BlockMath math="4x-2<0\quad \text{이면}\quad |4x-2|=-(4x-2)" />
                            <BlockMath math="-4x+2=5x-2" />
                            <BlockMath math="9x=4" />
                            <BlockMath math="x=\frac49" />

                            <p>따라서</p>

                            <BlockMath math="y=2-3\cdot\frac49" />
                            <BlockMath math="y=2-\frac43=\frac23" />

                            <p>그러므로</p>

                            <BlockMath math="x+y=\frac49+\frac23" />
                            <BlockMath math="=\frac49+\frac69" />
                            <BlockMath math="=\frac{10}{9}" />

                            <p>
                                <InlineMath math="x+y=\frac{q}{p}" />이므로 <InlineMath math="q=10,\ p=9" />입니다.
                            </p>

                            <BlockMath math="p+q=19" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="19" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        자주 하는 실수
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        다음과 같이 실수부분과 허수부분을 섞어서 비교하면 안 됩니다.
                    </p>

                    <BlockMath math="a+bi=c+di" />

                    <BlockMath math="a+b=c+d\quad \text{로 비교하면 안 됩니다.}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        복소수는 반드시 실수부분은 실수부분끼리,
                        허수부분은 허수부분끼리 비교해야 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="a+bi=c+di\Longleftrightarrow a=c,\quad b=d" />

                    <BlockMath math="a+bi=0\Longleftrightarrow a=0,\quad b=0" />

                    <p className="mt-5 text-center leading-8 text-gray-300">
                        복소수의 상등은 실수부분과 허수부분을 따로 비교해야 합니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.5 복소수의 사칙연산과 분모의 실수화
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    복소수의 계산은 실수부분과 허수부분을 구분해서 정리합니다.
                    덧셈과 뺄셈은 동류항을 계산하듯이 실수부분끼리, 허수부분끼리 계산하고,
                    곱셈은 전개한 뒤 <InlineMath math="i^2=-1" />을 이용합니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">덧셈과 뺄셈</h3>

                    <BlockMath math="(a+bi)+(c+di)=(a+c)+(b+d)i" />
                    <BlockMath math="(a+bi)-(c+di)=(a-c)+(b-d)i" />

                    <p className="mt-5 leading-8 text-gray-300">
                        복소수의 덧셈과 뺄셈은 문자식에서 동류항을 정리하는 것과 같습니다.
                        실수부분은 실수부분끼리, 허수부분은 허수부분끼리 계산합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="(2+3i)+(1-4i)" />
                        <BlockMath math="=(2+1)+(3-4)i" />
                        <BlockMath math="=3-i" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">곱셈</h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        복소수의 곱셈은 전개공식을 이용합니다.
                        전개한 뒤 <InlineMath math="i^2=-1" />을 대입하여 정리합니다.
                    </p>

                    <BlockMath math="(a+bi)(c+di)" />
                    <BlockMath math="=ac+adi+bci+bdi^2" />
                    <BlockMath math="=(ac-bd)+(ad+bc)i" />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="(2+i)(3-2i)" />
                        <BlockMath math="=6-4i+3i-2i^2" />
                        <BlockMath math="=6-i+2" />
                        <BlockMath math="=8-i" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        켤레복소수의 합과 곱
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        복소수 <InlineMath math="z=a+bi" />의 켤레복소수는
                        <InlineMath math="\overline{z}=a-bi" />입니다.
                    </p>

                    <BlockMath math="z=a+bi,\quad \overline{z}=a-bi" />

                    <p className="mt-5 leading-8 text-gray-300">
                        켤레복소수의 합은 항상 실수입니다.
                    </p>

                    <BlockMath math="z+\overline{z}" />
                    <BlockMath math="=(a+bi)+(a-bi)" />
                    <BlockMath math="=2a" />

                    <p className="mt-5 leading-8 text-gray-300">
                        켤레복소수의 곱도 항상 실수입니다.
                    </p>

                    <BlockMath math="z\overline{z}" />
                    <BlockMath math="=(a+bi)(a-bi)" />
                    <BlockMath math="=a^2+b^2" />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            <b className="text-white">켤레복소수의 합과 곱은 항상 실수입니다.</b>
                        </p>
                        <p className="leading-8 text-gray-300">
                            <b className="text-white">켤레복소수의 곱</b>
                            은 <b className="text-white">실수부의 제곱 + 허수부의 제곱</b>입니다.
                        </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-yellow-300">
                            중요한 공식
                        </h4>

                        <BlockMath math="z+\overline{z}=2a" />
                        <BlockMath math="z\overline{z}=a^2+b^2" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        켤레복소수의 사칙연산 성질
                    </h3>

                    <BlockMath math="\overline{z+w}=\overline z+\overline w" />

                    <BlockMath math="\overline{z-w}=\overline z-\overline w" />

                    <BlockMath math="\overline{zw}=\overline z\ \overline w" />

                    <BlockMath math="\overline{\frac zw}=\frac{\overline z}{\overline w}\quad(w\ne0)" />

                    <p className="mt-5 leading-8 text-gray-300">
                        즉, 켤레를 취하는 연산은 덧셈, 뺄셈, 곱셈, 나눗셈의
                        안과 밖의 순서를 바꾸어도 결과가 같습니다.
                    </p>

                    <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-yellow-300">
                            활용 예시
                        </h4>

                        <p className="leading-8 text-gray-300">
                            실수 계수 이차식
                        </p>

                        <BlockMath math="f(x)=ax^2+bx+c" />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath math="f(1+i)=3-2i" />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="f(1-i)" />의 값을 구해 봅시다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            계수 <InlineMath math="a,b,c" />가 모두 실수이므로
                            켤레복소수의 성질에 의해
                        </p>

                        <BlockMath math="f(\overline z)=\overline{f(z)}" />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="f(1-i)=f(\overline{1+i})" />

                        <BlockMath math="=\overline{f(1+i)}" />

                        <BlockMath math="=\overline{3-2i}" />

                        <BlockMath math="=3+2i" />

                        <p className="font-semibold text-white">
                            따라서 <InlineMath math="f(1-i)=3+2i" />입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">나눗셈과 분모의 실수화</h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        복소수가 분모에 있으면 분모를 실수로 바꾸어 정리합니다.
                        이때 분모의 켤레복소수를 분자와 분모에 모두 곱합니다.
                    </p>

                    <BlockMath math="\frac{1}{2+i}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        분모 <InlineMath math="2+i" />의 켤레복소수는
                        <InlineMath math="2-i" />입니다.
                    </p>

                    <BlockMath math="\frac{1}{2+i}\cdot\frac{2-i}{2-i}" />

                    <BlockMath math="=\frac{2-i}{(2+i)(2-i)}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        분모는 켤레복소수의 곱이므로 실수가 됩니다.
                    </p>

                    <BlockMath math="(2+i)(2-i)=2^2+1^2=5" />

                    <BlockMath math="\frac{1}{2+i}=\frac{2-i}{5}" />

                    <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-blue-300">
                            분모의 실수화 공식
                        </h4>

                        <BlockMath math="\frac{1}{a+bi}=\frac{a-bi}{a^2+b^2}" />

                        <p className="mt-4 leading-8 text-gray-300">
                            분모의 복소수에 켤레복소수를 곱하면
                            <InlineMath math="a^2+b^2" />가 되어 실수가 됩니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        자주 하는 실수
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        분모의 실수화를 할 때 분모에만 켤레복소수를 곱하면 안 됩니다.
                        값이 변하지 않도록 분자와 분모에 같은 수를 곱해야 합니다.
                    </p>

                    <BlockMath math="\frac{1}{2+i}\cdot\frac{2-i}{2-i}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        즉, <InlineMath math="1" />을 곱하는 형태로 생각해야 합니다.
                    </p>
                </div>


                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="(a+bi)\pm(c+di)=(a\pm c)+(b\pm d)i" />

                    <BlockMath math="(a+bi)(c+di)=(ac-bd)+(ad+bc)i" />

                    <BlockMath math="z+\overline{z}=2a" />

                    <p className="text-center leading-8 text-gray-300">
                        켤레복소수의 합은 항상 실수입니다.
                    </p>

                    <BlockMath math="z\overline{z}=a^2+b^2" />

                    <p className="text-center leading-8 text-gray-300">
                        켤레복소수의 곱은 실수부의 제곱과 허수부의 제곱을 더한 값입니다.
                    </p>

                    <BlockMath math="\frac{1}{a+bi}=\frac{a-bi}{a^2+b^2}" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 식을 만족하는 <InlineMath math="x,y" />에 대하여 <InlineMath math="x-y" />의 값을 구하시오.
                    </p>
                    <BlockMath math="\frac{x}{1-i}+\frac{y}{1+i}=2-i" />


                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                분모 <InlineMath math="1-i" />와 <InlineMath math="1+i" />는 서로 켤레복소수입니다.
                                따라서 각각 따로 실수화하지 않고 바로 통분할 수 있습니다.
                            </p>

                            <BlockMath math="\frac{x}{1-i}+\frac{y}{1+i}" />

                            <BlockMath math="=\frac{x(1+i)+y(1-i)}{(1-i)(1+i)}" />

                            <p>분모는 켤레복소수의 곱이므로 실수가 됩니다.</p>

                            <BlockMath math="(1-i)(1+i)=1^2+1^2=2" />

                            <p>분자를 정리하면</p>

                            <BlockMath math="x(1+i)+y(1-i)" />
                            <BlockMath math="=x+xi+y-yi" />
                            <BlockMath math="=(x+y)+(x-y)i" />

                            <p>따라서</p>

                            <BlockMath math="\frac{x}{1-i}+\frac{y}{1+i}" />
                            <BlockMath math="=\frac{(x+y)+(x-y)i}{2}" />

                            <BlockMath math="=\frac{x+y}{2}+\frac{x-y}{2}i" />

                            <p>
                                이것이 <InlineMath math="2-i" />와 같으므로 복소수의 상등을 이용합니다.
                            </p>

                            <BlockMath math="\frac{x+y}{2}=2" />
                            <BlockMath math="\frac{x-y}{2}=-1" />

                            <p>따라서</p>

                            <BlockMath math="x+y=4" />
                            <BlockMath math="x-y=-2" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-2" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x=2009,\ y=2010" />일 때, 다음 식의 값을 구하시오.
                    </p>
                    <BlockMath math="\frac{x+yi}{y-xi}+\frac{y-xi}{x+yi}" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 두 복소수의 관계를 봅니다.
                            </p>

                            <BlockMath math="x+yi" />
                            <BlockMath math="y-xi" />

                            <p>
                                두 복소수는 단순한 켤레복소수는 아니지만,
                                직접 곱해 보면 분모가 정리됩니다.
                            </p>

                            <BlockMath math="\frac{x+yi}{y-xi}" />

                            <p>분모의 켤레복소수 <InlineMath math="y+xi" />를 곱합니다.</p>

                            <BlockMath math="\frac{x+yi}{y-xi}\cdot\frac{y+xi}{y+xi}" />

                            <BlockMath math="=\frac{(x+yi)(y+xi)}{y^2+x^2}" />

                            <BlockMath math="=\frac{xy+x^2i+y^2i+xyi^2}{x^2+y^2}" />

                            <BlockMath math="=\frac{xy-xy+(x^2+y^2)i}{x^2+y^2}" />

                            <BlockMath math="=i" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\frac{y-xi}{x+yi}" />

                            <p>
                                는 앞 식의 역수입니다.
                            </p>

                            <BlockMath math="\frac{y-xi}{x+yi}=\frac{1}{i}" />

                            <BlockMath math="=-i" />

                            <p>그러므로</p>

                            <BlockMath math="\frac{x+yi}{y-xi}+\frac{y-xi}{x+yi}" />
                            <BlockMath math="=i+(-i)" />
                            <BlockMath math="=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        복소수 <InlineMath math="z" />의 켤레복소수를 <InlineMath math="\overline z" />라 할 때,
                    </p>

                    <BlockMath math="(1+i)z+3i\overline z=2+i" />

                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족하는 복소수 <InlineMath math="z" />를 구하시오.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="z=a+bi" />라 두면
                            </p>

                            <BlockMath math="\overline z=a-bi" />

                            <p>주어진 식에 대입합니다.</p>

                            <BlockMath math="(1+i)(a+bi)+3i(a-bi)=2+i" />

                            <p>전개하면</p>

                            <BlockMath math="a+bi+ai-b+3ai+3b" />

                            <BlockMath math="=(a+2b)+(4a+b)i" />

                            <p>따라서</p>

                            <BlockMath math="(a+2b)+(4a+b)i=2+i" />

                            <p>복소수의 상등에 의해</p>

                            <BlockMath math="a+2b=2" />
                            <BlockMath math="4a+b=1" />

                            <p>연립방정식을 풀면</p>

                            <BlockMath math="a=0" />
                            <BlockMath math="b=1" />

                            <p>따라서</p>

                            <BlockMath math="z=i" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="i" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        등식
                    </p>

                    <BlockMath math="(2-i)z+4i\overline z=-1+4i" />

                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족하는 복소수 <InlineMath math="z" />에 대하여 <InlineMath math="z^2" />의 값을 구하시오.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="z=a+bi" />라 두면
                            </p>

                            <BlockMath math="\overline z=a-bi" />

                            <p>주어진 식에 대입합니다.</p>

                            <BlockMath math="(2-i)(a+bi)+4i(a-bi)=-1+4i" />

                            <p>전개하면</p>

                            <BlockMath math="2a+2bi-ai+b+4ai+4b" />

                            <BlockMath math="=(2a+5b)+(3a+2b)i" />

                            <p>따라서</p>

                            <BlockMath math="(2a+5b)+(3a+2b)i=-1+4i" />

                            <p>복소수의 상등에 의해</p>

                            <BlockMath math="2a+5b=-1" />
                            <BlockMath math="3a+2b=4" />

                            <p>연립방정식을 풀면</p>

                            <BlockMath math="a=2" />
                            <BlockMath math="b=-1" />

                            <p>따라서</p>

                            <BlockMath math="z=2-i" />

                            <p>구하려는 값은</p>

                            <BlockMath math="z^2=(2-i)^2" />

                            <BlockMath math="=4-4i+i^2" />

                            <BlockMath math="=4-4i-1" />

                            <BlockMath math="=3-4i" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3-4i" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="\alpha=-3+i,\quad \beta=1+3i" />일 때, <InlineMath math="\alpha\overline{\alpha}+\overline{\alpha}\beta+\alpha\overline{\beta}+\beta\overline{\beta}" />
                        의 값을 구하시오.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                식을 묶어서 봅니다.
                            </p>

                            <BlockMath math="\alpha\overline{\alpha}+\overline{\alpha}\beta+\alpha\overline{\beta}+\beta\overline{\beta}" />

                            <BlockMath math="=\overline{\alpha}(\alpha+\beta)+\overline{\beta}(\alpha+\beta)" />

                            <BlockMath math="=(\overline{\alpha}+\overline{\beta})(\alpha+\beta)" />

                            <p>
                                그런데 <InlineMath math="\overline{\alpha}+\overline{\beta}" />는 <InlineMath math="\alpha+\beta" />의 켤레복소수입니다.
                            </p>

                            <BlockMath math="=(\alpha+\beta)\overline{(\alpha+\beta)}" />

                            <p>
                                먼저 <InlineMath math="\alpha+\beta" />를 구하면
                            </p>

                            <BlockMath math="\alpha+\beta=(-3+i)+(1+3i)" />
                            <BlockMath math="=-2+4i" />

                            <p>
                                켤레복소수의 곱은 실수부의 제곱과 허수부의 제곱을 더한 값입니다.
                            </p>

                            <BlockMath math="(-2+4i)(-2-4i)" />
                            <BlockMath math="=(-2)^2+4^2" />
                            <BlockMath math="=4+16" />
                            <BlockMath math="=20" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="20" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="z=1+i" />일 때, 다음 식의 값을 구하시오.
                    </p>
                    <BlockMath math="\frac{z-1}{z}+\frac{\overline{z}-1}{\overline{z}}" />


                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="z=1+i" />이므로
                            </p>

                            <BlockMath math="\overline{z}=1-i" />

                            <p>
                                첫 번째 분수를 계산합니다.
                            </p>

                            <BlockMath math="\frac{z-1}{z}=\frac{(1+i)-1}{1+i}" />
                            <BlockMath math="=\frac{i}{1+i}" />

                            <p>
                                분모를 실수화합니다.
                            </p>

                            <BlockMath math="\frac{i}{1+i}\cdot\frac{1-i}{1-i}" />
                            <BlockMath math="=\frac{i(1-i)}{(1+i)(1-i)}" />
                            <BlockMath math="=\frac{i-i^2}{2}" />
                            <BlockMath math="=\frac{1+i}{2}" />

                            <p>
                                두 번째 분수를 계산합니다.
                            </p>

                            <BlockMath math="\frac{\overline{z}-1}{\overline{z}}=\frac{(1-i)-1}{1-i}" />
                            <BlockMath math="=\frac{-i}{1-i}" />

                            <BlockMath math="\frac{-i}{1-i}\cdot\frac{1+i}{1+i}" />
                            <BlockMath math="=\frac{-i(1+i)}{(1-i)(1+i)}" />
                            <BlockMath math="=\frac{-i-i^2}{2}" />
                            <BlockMath math="=\frac{1-i}{2}" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\frac{z-1}{z}+\frac{\overline{z}-1}{\overline{z}}" />
                            <BlockMath math="=\frac{1+i}{2}+\frac{1-i}{2}" />
                            <BlockMath math="=1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x=1+\sqrt2 i" />일 때, <InlineMath math="x^2-2x+4" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <BlockMath math="x=1+\sqrt2 i" />

                            <BlockMath math="x-1=\sqrt2 i" />

                            <BlockMath math="(x-1)^2=(\sqrt2 i)^2" />

                            <BlockMath math="x^2-2x+1=-2" />

                            <BlockMath math="x^2-2x+3=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x^2-2x=-3" />

                            <p>
                                구하는 값은
                            </p>

                            <BlockMath math="x^2-2x+4=-3+4" />

                            <BlockMath math="=1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x=1+\sqrt2 i" />일 때, <InlineMath math="3x^3-5x^2+8x+1" />의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 1 : 주어진 식을 이용하기
                                </h4>

                                <p>
                                    먼저 <InlineMath math="x=1+\sqrt2 i" />에서
                                </p>

                                <BlockMath math="x-1=\sqrt2 i" />

                                <BlockMath math="(x-1)^2=(\sqrt2 i)^2" />

                                <BlockMath math="x^2-2x+1=-2" />

                                <BlockMath math="x^2-2x+3=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^2=2x-3" />

                                <BlockMath math="x^3=2x^2-3x" />

                                <BlockMath math="=2(2x-3)-3x" />

                                <BlockMath math="=x-6" />

                                <p>
                                    이를 주어진 식에 대입하면
                                </p>

                                <BlockMath math="3x^3-5x^2+8x+1" />

                                <BlockMath math="=3(x-6)-5(2x-3)+8x+1" />

                                <BlockMath math="=x-2" />

                                <BlockMath math="=(1+\sqrt2 i)-2" />

                                <BlockMath math="=-1+\sqrt2 i" />

                                <p className="font-semibold text-white">
                                    따라서 답은 <InlineMath math="-1+\sqrt2 i" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 나눗셈을 이용하기
                                </h4>

                                <p>
                                    앞에서 구한 식
                                </p>

                                <BlockMath math="x^2-2x+3=0" />

                                <p>
                                    을 이용합니다.
                                </p>

                                <BlockMath math="3x^3-5x^2+8x+1" />

                                <p>
                                    을
                                </p>

                                <BlockMath math="x^2-2x+3" />

                                <p>
                                    으로 나누면
                                </p>

                                <BlockMath math="3x^3-5x^2+8x+1=(x^2-2x+3)(3x+1)+x-2" />

                                <p>
                                    그런데
                                </p>

                                <BlockMath math="x^2-2x+3=0" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="(x^2-2x+3)(3x+1)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="3x^3-5x^2+8x+1=x-2" />

                                <BlockMath math="=(1+\sqrt2 i)-2" />

                                <BlockMath math="=-1+\sqrt2 i" />

                                <p className="font-semibold text-white">
                                    따라서 답은 <InlineMath math="-1+\sqrt2 i" />입니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        모든 복소수 <InlineMath math="z" />에 대하여 다음 중 실수인 것을 모두 골라라.
                        단, <InlineMath math="\overline z" />는 <InlineMath math="z" />의 켤레복소수이다.
                    </p>

                    <div className="rounded-xl bg-white/10 p-5">
                        <BlockMath math="\text{ㄱ.}\quad (z+1)^2" />
                        <BlockMath math="\text{ㄴ.}\quad (2z+1)(\overline z+1)-z" />
                        <BlockMath math="\text{ㄷ.}\quad (z^2+z+1)(\overline z+1)+\{(\overline z)^2+\overline z+1\}(z+1)" />
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 1 : <InlineMath math="z=a+bi" /> 로 계산
                                </h4>

                                <p>
                                    <InlineMath math="z=a+bi" />, <InlineMath math="\overline z=a-bi" />라고 두자.
                                </p>

                                <p>
                                    ㄱ을 확인하면
                                </p>

                                <BlockMath math="(z+1)^2=(a+1+bi)^2" />

                                <BlockMath math="=(a+1)^2-b^2+2(a+1)bi" />

                                <p>
                                    일반적으로 허수부분이 0이 아니므로 항상 실수는 아니다.
                                </p>

                                <p>
                                    따라서 ㄱ은 거짓이다.
                                </p>

                                <p>
                                    ㄴ을 전개하면
                                </p>

                                <BlockMath math="(2z+1)(\overline z+1)-z" />

                                <BlockMath math="=2z\overline z+z+\overline z+1" />

                                <p>
                                    그런데
                                </p>

                                <BlockMath math="z\overline z=a^2+b^2" />

                                <BlockMath math="z+\overline z=2a" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="=2(a^2+b^2)+2a+1" />

                                <p>
                                    항상 실수이다.
                                </p>

                                <p>
                                    따라서 ㄴ은 참이다.
                                </p>

                                <p>
                                    ㄷ을 전개하면
                                </p>

                                <BlockMath math="(z^2+z+1)(\overline z+1)+((\overline z)^2+\overline z+1)(z+1)" />

                                <p>
                                    첫 번째 항과 두 번째 항은 서로 켤레복소수 관계가 된다.
                                </p>

                                <p>
                                    따라서 어떤 복소수 <InlineMath math="w" />에 대하여
                                </p>

                                <BlockMath math="w+\overline w" />

                                <p>
                                    의 꼴이므로 항상 실수이다.
                                </p>

                                <p>
                                    따라서 ㄷ은 참이다.
                                </p>

                                <p className="font-semibold text-white">
                                    따라서 정답은 ㄴ, ㄷ이다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 켤레복소수의 성질 이용
                                </h4>

                                <p>
                                    ㄱ은
                                </p>

                                <BlockMath math="z=i" />

                                <p>
                                    를 대입하면
                                </p>

                                <BlockMath math="(i+1)^2=2i" />

                                <p>
                                    이므로 실수가 아니다.
                                </p>

                                <p>
                                    따라서 ㄱ은 거짓이다.
                                </p>

                                <p>
                                    ㄴ은 전개하면
                                </p>

                                <BlockMath math="(2z+1)(\overline z+1)-z" />

                                <BlockMath math="=2z\overline z+z+\overline z+1" />

                                <p>
                                    켤레복소수의 합과 곱은 항상 실수이므로
                                    전체도 항상 실수이다.
                                </p>

                                <p>
                                    따라서 ㄴ은 참이다.
                                </p>

                                <p>
                                    ㄷ에서
                                </p>

                                <BlockMath math="w=(z^2+z+1)(\overline z+1)" />

                                <p>
                                    라 두면
                                </p>

                                <BlockMath math="\overline w=((\overline z)^2+\overline z+1)(z+1)" />

                                <p>
                                    이다.
                                </p>

                                <p>
                                    따라서 ㄷ은
                                </p>

                                <BlockMath math="w+\overline w" />

                                <p>
                                    의 꼴이므로 항상 실수이다.
                                </p>

                                <p className="font-semibold text-white">
                                    따라서 정답은 ㄴ, ㄷ이다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.6 복소수의 분류
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    복소수는 실수부분과 허수부분의 값에 따라 실수, 순허수, 일반허수로 나눌 수 있습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        복소수의 기본 꼴
                    </h3>

                    <BlockMath math="z=a+bi\quad(a,b는\ 실수)" />

                    <p className="mt-5 leading-8 text-gray-300">
                        여기서 <InlineMath math="a" />는 실수부분,
                        <InlineMath math="b" />는 허수부분입니다.
                        이 두 값이 0인지 아닌지에 따라 복소수를 분류합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        복소수의 분류
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">
                        <BlockMath math="z=a+bi" />

                        <p className="mt-4 leading-8 text-gray-300">
                            <b className="text-white">실수</b> : <InlineMath math="b=0" />
                        </p>

                        <BlockMath math="z=a" />

                        <p className="mt-4 leading-8 text-gray-300">
                            <b className="text-white">순허수</b> : <InlineMath math="a=0,\ b\ne0" />
                        </p>

                        <BlockMath math="z=bi\quad(b\ne0)" />

                        <p className="mt-4 leading-8 text-gray-300">
                            <b className="text-white">일반허수</b> : <InlineMath math="a\ne0,\ b\ne0" />
                        </p>

                        <BlockMath math="z=a+bi\quad(a\ne0,\ b\ne0)" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        예를 들어 보기
                    </h3>

                    <div className="space-y-5 text-gray-300">
                        <p>
                            <InlineMath math="3=3+0i" /> 이므로 실수입니다.
                        </p>

                        <p>
                            <InlineMath math="-2i=0-2i" /> 이므로 순허수입니다.
                        </p>

                        <p>
                            <InlineMath math="4+5i" /> 는 실수부분과 허수부분이 모두 0이 아니므로 일반허수입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        제곱하면 어떻게 될까?
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        복소수를 제곱하면 어떤 종류의 수가 되는지 살펴봅시다.
                    </p>

                    <div className="rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            <b className="text-white">실수</b>를 제곱하면 0 이상인 실수가 됩니다.
                        </p>

                        <BlockMath math="a^2\ge0" />

                        <p className="mt-5 leading-8 text-gray-300">
                            <b className="text-white">순허수</b>를 제곱하면 음의 실수가 됩니다.
                        </p>

                        <BlockMath math="(bi)^2=b^2i^2=-b^2<0\quad(b\ne0)" />

                        <p className="mt-5 leading-8 text-gray-300">
                            <b className="text-white">일반허수</b>를 제곱하면 보통 실수부분과 허수부분이 함께 나타납니다.
                        </p>

                        <BlockMath math="(a+bi)^2=a^2-b^2+2abi" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        자주 하는 실수
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        허수라고 해서 모두 순허수는 아닙니다.
                    </p>

                    <BlockMath math="2i" />

                    <p className="text-center leading-8 text-gray-300">
                        는 순허수이지만,
                    </p>

                    <BlockMath math="3+2i" />

                    <p className="text-center leading-8 text-gray-300">
                        는 일반허수입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        또한 복소수는 실수와 허수를 모두 포함하는 가장 큰 범위의 수입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        요약
                    </h3>

                    <BlockMath math="z=a+bi" />

                    <BlockMath math="\text{실수}: b=0" />

                    <BlockMath math="\text{순허수}: a=0,\ b\ne0" />

                    <BlockMath math="\text{일반허수}: a\ne0,\ b\ne0" />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="\text{실수의 제곱}\ge0" />
                        <BlockMath math="\text{순허수의 제곱}<0" />
                        <BlockMath math="(a+bi)^2=a^2-b^2+2abi" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수 <InlineMath math="a" />에 대하여 복소수 <InlineMath math="a(1+i)-3(1-i)" />를 제곱한 것이
                        음의 실수일 때, <InlineMath math="a" />의 값을 구하시오.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 주어진 복소수를 정리합니다.
                            </p>

                            <BlockMath math="a(1+i)-3(1-i)" />
                            <BlockMath math="=a+ai-3+3i" />
                            <BlockMath math="=(a-3)+(a+3)i" />

                            <p>
                                이 복소수를 제곱한 것이 음의 실수라는 것은,
                                원래 복소수가 순허수라는 뜻입니다.
                            </p>

                            <p>
                                따라서 실수부분이 0이어야 합니다.
                            </p>

                            <BlockMath math="a-3=0" />
                            <BlockMath math="a=3" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        복소수 <InlineMath math="(3-2i)x+(1-i)y" />를 제곱하였더니 <InlineMath math="-3" />이 되었다.
                        이때 실수 <InlineMath math="x,y" />에 대하여 <InlineMath math="x-y" />의 값을 구하시오.
                        단, <InlineMath math="x>0" />이다.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 주어진 복소수를 정리합니다.
                            </p>

                            <BlockMath math="(3-2i)x+(1-i)y" />
                            <BlockMath math="=3x-2xi+y-yi" />
                            <BlockMath math="=(3x+y)+(-2x-y)i" />

                            <p>
                                이 복소수의 제곱이 <InlineMath math="-3" />이므로
                                제곱한 결과는 음의 실수입니다.
                            </p>

                            <p>
                                따라서 원래 복소수는 순허수입니다.
                                즉, 실수부분이 0입니다.
                            </p>

                            <BlockMath math="3x+y=0" />
                            <BlockMath math="y=-3x" />

                            <p>
                                그러면 허수부분은
                            </p>

                            <BlockMath math="-2x-y=-2x-(-3x)=x" />

                            <p>
                                따라서 복소수는
                            </p>

                            <BlockMath math="xi" />

                            <p>
                                이 복소수를 제곱하면
                            </p>

                            <BlockMath math="(xi)^2=x^2i^2=-x^2" />

                            <p>
                                이것이 <InlineMath math="-3" />과 같으므로
                            </p>

                            <BlockMath math="-x^2=-3" />
                            <BlockMath math="x^2=3" />

                            <p>
                                조건 <InlineMath math="x>0" />에 의해
                            </p>

                            <BlockMath math="x=\sqrt3" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="y=-3\sqrt3" />

                            <p>
                                구하는 값은
                            </p>

                            <BlockMath math="x-y=\sqrt3-(-3\sqrt3)" />
                            <BlockMath math="=4\sqrt3" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="4\sqrt3" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="\alpha,\ \beta" />가 복소수일 때,
                        다음 중 참인 것을 모두 골라라.
                        단, <InlineMath math="\overline{\beta}" />는 <InlineMath math="\beta" />의 켤레복소수이다.
                    </p>

                    <div className="rounded-xl bg-white/10 p-5 text-gray-300">
                        <p className="leading-8">
                            (가) <InlineMath math="\alpha=\overline{\beta}" />이면 <InlineMath math="\alpha+\beta,\ \alpha\beta" />는 모두 실수이다.
                        </p>
                        <p className="leading-8">
                            (나) <InlineMath math="\alpha=\overline{\beta}" />일 때, <InlineMath math="\alpha\beta=0" />이면 <InlineMath math="\alpha=0" />이다.
                        </p>
                        <p className="leading-8">
                            (다) <InlineMath math="\alpha^2+\beta^2=0" />이면 <InlineMath math="\alpha=\beta=0" />이다.
                        </p>
                        <p className="leading-8">
                            (라) <InlineMath math="\alpha+\beta i=0" />이면 <InlineMath math="\alpha=\beta=0" />이다.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="\beta=x+yi" />라고 하면 <InlineMath math="\overline{\beta}=x-yi" />입니다.
                            </p>

                            <p>(가)를 확인합니다.</p>

                            <BlockMath math="\alpha=\overline{\beta}=x-yi" />

                            <BlockMath math="\alpha+\beta=(x-yi)+(x+yi)=2x" />

                            <BlockMath math="\alpha\beta=(x-yi)(x+yi)=x^2+y^2" />

                            <p>
                                둘 다 실수이므로 (가)는 참입니다.
                            </p>

                            <p>(나)를 확인합니다.</p>

                            <BlockMath math="\alpha\beta=(x-yi)(x+yi)=x^2+y^2" />

                            <p>
                                이것이 0이면
                            </p>

                            <BlockMath math="x^2+y^2=0" />

                            <p>
                                따라서 <InlineMath math="x=0,\ y=0" />이므로 <InlineMath math="\alpha=0" />입니다.
                                따라서 (나)는 참입니다.
                            </p>

                            <p>(다)는 거짓입니다.</p>

                            <BlockMath math="\alpha=1,\quad \beta=i" />

                            <BlockMath math="\alpha^2+\beta^2=1^2+i^2=1-1=0" />

                            <p>
                                하지만 <InlineMath math="\alpha,\beta" />가 모두 0은 아닙니다.
                            </p>

                            <p>(라)는 거짓입니다.</p>

                            <BlockMath math="\alpha=-i,\quad \beta=1" />

                            <BlockMath math="\alpha+\beta i=-i+i=0" />

                            <p>
                                하지만 <InlineMath math="\alpha,\beta" />가 모두 0은 아닙니다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 참인 것은 (가), (나)입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        복소수 <InlineMath math="z=a+bi" />가 다음 두 조건을 만족한다.
                    </p>

                    <div className="rounded-xl bg-white/10 p-5">
                        <BlockMath math="(1+i+z)^2<0" />
                        <BlockMath math="z^2=c+4i" />
                    </div>

                    <p className="mt-4 mb-4 leading-8 text-gray-300">
                        이때, <InlineMath math="a^2+b^2+c^2" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="(1+i+z)^2" />이 음의 실수라는 것은
                                <InlineMath math="1+i+z" />가 순허수라는 뜻입니다.
                            </p>

                            <BlockMath math="z=a+bi" />

                            <BlockMath math="1+i+z=(a+1)+(b+1)i" />

                            <p>
                                순허수이므로 실수부분이 0입니다.
                            </p>

                            <BlockMath math="a+1=0" />

                            <BlockMath math="a=-1" />

                            <p>
                                이제 <InlineMath math="z=-1+bi" />입니다.
                            </p>

                            <BlockMath math="z^2=(-1+bi)^2" />

                            <BlockMath math="=1-2bi+b^2i^2" />

                            <BlockMath math="=1-b^2-2bi" />

                            <p>
                                그런데
                            </p>

                            <BlockMath math="z^2=c+4i" />

                            <p>
                                이므로 허수부분을 비교하면
                            </p>

                            <BlockMath math="-2b=4" />

                            <BlockMath math="b=-2" />

                            <p>
                                실수부분을 비교하면
                            </p>

                            <BlockMath math="c=1-b^2=1-4=-3" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a^2+b^2+c^2=(-1)^2+(-2)^2+(-3)^2" />

                            <BlockMath math="=1+4+9" />

                            <BlockMath math="=14" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="14" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        복소수 <InlineMath math="(a^2+3a+2)+(a^2+2a)i" />
                        를 제곱하면 음의 실수가 된다.
                        이때 실수 <InlineMath math="a" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                복소수를 제곱해서 음의 실수가 되려면,
                                원래 복소수는 순허수이어야 합니다.
                            </p>

                            <p>
                                따라서 실수부분이 0이어야 합니다.
                            </p>

                            <BlockMath math="a^2+3a+2=0" />

                            <BlockMath math="(a+1)(a+2)=0" />

                            <BlockMath math="a=-1,\quad a=-2" />

                            <p>
                                이제 허수부분이 0이 아닌지 확인해야 합니다.
                            </p>

                            <BlockMath math="a^2+2a=a(a+2)" />

                            <p>
                                <InlineMath math="a=-1" />일 때,
                            </p>

                            <BlockMath math="a^2+2a=(-1)^2+2(-1)=-1" />

                            <p>
                                따라서 복소수는 <InlineMath math="-i" />이고,
                                제곱하면 <InlineMath math="-1" />입니다.
                            </p>

                            <p>
                                <InlineMath math="a=-2" />일 때,
                            </p>

                            <BlockMath math="a^2+2a=(-2)^2+2(-2)=0" />

                            <p>
                                이 경우 복소수는 0이므로 제곱해도 음의 실수가 아닙니다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.7 <InlineMath math="i" />의 거듭제곱
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    허수단위 <InlineMath math="i" />는 <InlineMath math="i^2=-1" />을 만족한다.
                    따라서 아무리 높은 거듭제곱이라도 결국 <InlineMath math="1,\ i,\ -1,\ -i" /> 중 하나의 형태로 나타난다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="i^n" />의 거듭제곱은 순환한다
                    </h3>

                    <BlockMath math="i^1=i" />
                    <BlockMath math="i^2=-1" />
                    <BlockMath math="i^3=-i" />
                    <BlockMath math="i^4=1" />

                    <BlockMath math="i^5=i" />
                    <BlockMath math="i^6=-1" />
                    <BlockMath math="i^7=-i" />
                    <BlockMath math="i^8=1" />

                    <p className="mt-5 leading-8 text-gray-300">
                        즉,
                    </p>

                    <BlockMath math="i,\ -1,\ -i,\ 1" />

                    <p className="leading-8 text-gray-300">
                        이 4개가 반복된다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="i^4=1" />

                    <p className="leading-8 text-gray-300">
                        이므로
                    </p>

                    <BlockMath math="i^{4의\ 배수}=1" />

                    <p className="leading-8 text-gray-300">
                        이다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        거듭제곱 계산
                    </h3>

                    <p className="leading-8 text-gray-300">
                        지수를 4로 나눈 나머지만 알면 값을 구할 수 있다.
                    </p>

                    <table className="mt-5 w-full border-collapse text-center">
                        <thead>
                            <tr>
                                <th className="border border-white/20 p-3">
                                    4로 나눈 나머지
                                </th>
                                <th className="border border-white/20 p-3">
                                    값
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-white/20 p-3">0</td>
                                <td className="border border-white/20 p-3">1</td>
                            </tr>
                            <tr>
                                <td className="border border-white/20 p-3">1</td>
                                <td className="border border-white/20 p-3"><InlineMath math="i" /></td>
                            </tr>
                            <tr>
                                <td className="border border-white/20 p-3">2</td>
                                <td className="border border-white/20 p-3">-1</td>
                            </tr>
                            <tr>
                                <td className="border border-white/20 p-3">3</td>
                                <td className="border border-white/20 p-3"><InlineMath math="-i" /></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-6 rounded-xl bg-black/40 p-5">
                        <BlockMath math="i^{41}" />

                        <p className="leading-8 text-gray-300">
                            41을 4로 나누면 나머지가 1이므로
                        </p>

                        <BlockMath math="i^{41}=i" />
                    </div>

                    <div className="mt-4 rounded-xl bg-black/40 p-5">
                        <BlockMath math="i^{30}" />

                        <p className="leading-8 text-gray-300">
                            30을 4로 나누면 나머지가 2이므로
                        </p>

                        <BlockMath math="i^{30}=i^2=-1" />
                    </div>

                    <div className="mt-4 rounded-xl bg-black/40 p-5">
                        <BlockMath math="i^{103}" />

                        <p className="leading-8 text-gray-300">
                            103을 4로 나누면 나머지가 3이므로
                        </p>

                        <BlockMath math="i^{103}=i^3=-i" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        분모에 있는 i의 거듭제곱
                    </h3>

                    <p className="leading-8 text-gray-300">
                        곱셈과 나눗셈은 서로 반대 연산이다.
                    </p>

                    <BlockMath math="3\times2=6" />
                    <BlockMath math="6\div3=2" />
                    <BlockMath math="6\div2=3" />

                    <p className="mt-5 leading-8 text-gray-300">
                        같은 원리로
                    </p>

                    <BlockMath math="i^{40}=1" />

                    <p className="leading-8 text-gray-300">
                        을 이용하면
                    </p>

                    <BlockMath math="\frac1{i^{39}}" />

                    <BlockMath math="=\frac{i}{i^{40}}" />

                    <BlockMath math="=i" />

                    <hr className="my-5 border-white/10" />

                    <BlockMath math="\frac1{i^{30}}" />

                    <BlockMath math="=\frac{i^2}{i^{32}}" />

                    <BlockMath math="=i^2" />

                    <BlockMath math="=-1" />

                    <hr className="my-5 border-white/10" />

                    <BlockMath math="\frac1{i^{101}}" />

                    <BlockMath math="=\frac{i^3}{i^{104}}" />

                    <BlockMath math="=i^3" />

                    <BlockMath math="=-i" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        연속된 지수 4개의 합
                    </h3>

                    <BlockMath math="i^n+i^{n+1}+i^{n+2}+i^{n+3}" />

                    <p className="leading-8 text-gray-300">
                        에서 <InlineMath math="i^n" />을 묶어내면
                    </p>

                    <BlockMath math="i^n(1+i+i^2+i^3)" />

                    <p className="leading-8 text-gray-300">
                        이다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        그런데
                    </p>

                    <BlockMath math="1+i+i^2+i^3" />

                    <BlockMath math="=1+i-1-i" />

                    <BlockMath math="=0" />

                    <p className="leading-8 text-gray-300">
                        이므로
                    </p>

                    <BlockMath math="i^n+i^{n+1}+i^{n+2}+i^{n+3}=0" />

                    <p className="mt-4 font-semibold text-white">
                        즉, 연속된 지수 4개의 합은 항상 0이다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="i^2=-1" />
                    <BlockMath math="i^4=1" />

                    <p className="leading-8 text-gray-300">
                        i의 거듭제곱은
                    </p>

                    <BlockMath math="i,\ -1,\ -i,\ 1" />

                    <p className="leading-8 text-gray-300">
                        의 순서로 반복된다.
                    </p>

                    <BlockMath math="i^{4의\ 배수}=1" />

                    <BlockMath math="i^{4의\ 배수가\ 아닌\ 수}=i^{4로\ 나눈\ 나머지}" />

                    <BlockMath math="i^n+i^{n+1}+i^{n+2}+i^{n+3}=0" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="1+i^3+i^5+i^7+i^9" />의 값을 구하시오.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                i의 거듭제곱은 4개마다 반복됩니다.
                            </p>

                            <BlockMath math="i^3=-i,\quad i^5=i,\quad i^7=-i,\quad i^9=i" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="1+i^3+i^5+i^7+i^9" />

                            <BlockMath math="=1-i+i-i+i" />

                            <BlockMath math="=1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="i+i^2+\cdots+i^{403}=a+bi" />
                        일 때, <InlineMath math="b-a" />의 값을 구하여라.
                        단, <InlineMath math="a,b" />는 실수이다.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                i의 거듭제곱은 연속된 지수 4개의 합이 0입니다.
                            </p>

                            <BlockMath math="i+i^2+i^3+i^4=0" />

                            <p>
                                따라서 1번부터 400번까지는 4개씩 묶으면 모두 0이 됩니다.
                            </p>

                            <BlockMath math="i+i^2+\cdots+i^{400}=0" />

                            <p>
                                남는 항은
                            </p>

                            <BlockMath math="i^{401}+i^{402}+i^{403}" />

                            <p>
                                입니다.
                            </p>

                            <BlockMath math="i^{401}=i,\quad i^{402}=-1,\quad i^{403}=-i" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="i+i^2+\cdots+i^{403}" />

                            <BlockMath math="=i-1-i" />

                            <BlockMath math="-1" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="a+bi=-1+0i" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="a=-1,\quad b=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="b-a=0-(-1)=1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 식의 값을 구하시오.
                    </p>
                    <BlockMath math="1+\frac1i+\frac1{i^2}+\frac1{i^3}+\cdots+\frac1{i^{100}}" />


                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>
                        <div className="mt-5 space-y-5 text-gray-300">
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 1
                                </h4>
                                <div className="mt-5 space-y-5 text-gray-300">
                                    <p>
                                        먼저 분모에 있는 i의 거듭제곱을 정리합니다.
                                    </p>

                                    <BlockMath math="\frac1i=-i" />
                                    <BlockMath math="\frac1{i^2}=-1" />
                                    <BlockMath math="\frac1{i^3}=i" />
                                    <BlockMath math="\frac1{i^4}=1" />

                                    <p>
                                        따라서
                                    </p>

                                    <BlockMath math="1+\frac1i+\frac1{i^2}+\frac1{i^3}" />

                                    <BlockMath math="=1-i-1+i" />

                                    <BlockMath math="=0" />

                                    <p>
                                        즉, 연속된 4개의 항의 합은 0입니다.
                                    </p>

                                    <p>
                                        주어진 식은
                                    </p>

                                    <BlockMath math="1+\frac1i+\frac1{i^2}+\frac1{i^3}+\cdots+\frac1{i^{100}}" />

                                    <p>
                                        총 101개의 항으로 이루어져 있습니다.
                                    </p>

                                    <p>
                                        4개씩 묶으면 100개의 항이 모두 0이 되고, 처음의 1개가 남습니다.
                                    </p>

                                    <BlockMath math="=1" />

                                    <p className="font-semibold text-white">
                                        따라서 답은 <InlineMath math="1" />입니다.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : <InlineMath math="i^{100}" />을 곱하기
                                </h4>

                                <p>
                                    100은 4의 배수이므로
                                </p>

                                <BlockMath math="i^{100}=1" />

                                <p>
                                    이다.
                                </p>

                                <p>
                                    따라서 주어진 식에
                                    <InlineMath math="i^{100}" />을 곱해도 값은 변하지 않는다.
                                </p>

                                <BlockMath math="\left(1+\frac1i+\frac1{i^2}+\cdots+\frac1{i^{100}}\right)i^{100}" />

                                <BlockMath math="=i^{100}+i^{99}+i^{98}+\cdots+i+1" />

                                <p>
                                    항의 순서를 바꾸면
                                </p>

                                <BlockMath math="1+i+i^2+i^3+\cdots+i^{100}" />

                                <p>
                                    이 된다.
                                </p>

                                <p>
                                    연속된 4개의 합은 항상 0이므로
                                </p>

                                <BlockMath math="(1+i+i^2+i^3)+(i^4+i^5+i^6+i^7)+\cdots" />

                                <BlockMath math="=0" />

                                <p>
                                    마지막 항은
                                </p>

                                <BlockMath math="i^{100}=1" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="1+i+i^2+\cdots+i^{100}=1" />

                                <p>
                                    따라서 원래 식의 값도
                                </p>

                                <BlockMath math="1" />

                                <p className="font-semibold text-white">
                                    따라서 답은 <InlineMath math="1" />입니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="i+2i^2+3i^3+\cdots+30i^{30}=A+Bi" />
                        일 때, <InlineMath math="B-A" />의 값을 구하여라.
                        <br />
                        (단, <InlineMath math="A,B" />는 실수이다.)
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 1 : 실수부와 허수부를 따로 모으기
                                </h4>

                                <p>
                                    <InlineMath math="i^n" />은
                                </p>

                                <BlockMath math="i,\ -1,\ -i,\ 1" />

                                <p>
                                    의 순서로 반복된다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="
          i+2(-1)+3(-i)+4
          +5i+6(-1)+7(-i)+8+\cdots
        " />

                                <p>
                                    실수부는
                                </p>

                                <BlockMath math="
          (-2+4)+(-6+8)+(-10+12)+\cdots+(-30)
        " />

                                <BlockMath math="
          =2+2+2+2+2+2+2-30
        " />

                                <BlockMath math="=-16" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="A=-16" />

                                <p>
                                    허수부는
                                </p>

                                <BlockMath math="
          (1-3)+(5-7)+(9-11)+\cdots+(25-27)+29
        " />

                                <BlockMath math="
          =(-2)\times7+29
        " />

                                <BlockMath math="=15" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="B=15" />

                                <p>
                                    그러므로
                                </p>

                                <BlockMath math="B-A=15-(-16)=31" />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 2 : 4개씩 묶기
                                </h4>

                                <p>
                                    연속된 4개씩 묶어 보자.
                                </p>

                                <BlockMath math="
          (i+2i^2+3i^3+4i^4)
          +(5i^5+6i^6+7i^7+8i^8)
          +\cdots
        " />

                                <p>
                                    첫 번째 묶음은
                                </p>

                                <BlockMath math="
          i-2-3i+4
        " />

                                <BlockMath math="
          =2-2i
        " />

                                <p>
                                    두 번째 묶음은
                                </p>

                                <BlockMath math="
          5i-6-7i+8
        " />

                                <BlockMath math="
          =2-2i
        " />

                                <p>
                                    같은 방식으로
                                </p>

                                <BlockMath math="
          (4k+1)i^{4k+1}
          +(4k+2)i^{4k+2}
          +(4k+3)i^{4k+3}
          +(4k+4)i^{4k+4}
        " />

                                <BlockMath math="
          =2-2i
        " />

                                <p>
                                    1~28까지는 7묶음이 있으므로
                                </p>

                                <BlockMath math="
          7(2-2i)=14-14i
        " />

                                <p>
                                    남는 항은
                                </p>

                                <BlockMath math="
          29i^{29}+30i^{30}
        " />

                                <BlockMath math="
          =29i-30
        " />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="
          (14-14i)+(29i-30)
        " />

                                <BlockMath math="
          =-16+15i
        " />

                                <p>
                                    즉
                                </p>

                                <BlockMath math="A=-16,\quad B=15" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="B-A=31" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="31" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="a_1,a_2,\cdots,a_{10}" />이
                        각각 <InlineMath math="1" /> 또는 <InlineMath math="-1" />의 값을 가지고
                    </p>

                    <BlockMath math="a_1a_2\cdots a_{10}=1" />

                    <p className="mb-4 leading-8 text-gray-300">
                        일 때,
                    </p>

                    <BlockMath math="\sqrt{a_1}\sqrt{a_2}\cdots\sqrt{a_{10}}" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값이 될 수 있는 것을 모두 고르시오.
                    </p>

                    <div className="rounded-xl bg-white/10 p-5">
                        <p>ㄱ. <InlineMath math="1" /></p>
                        <p>ㄴ. <InlineMath math="-1" /></p>
                        <p>ㄷ. <InlineMath math="i" /></p>
                        <p>ㄹ. <InlineMath math="-i" /></p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="a_k" />는 <InlineMath math="1" /> 또는 <InlineMath math="-1" />만 가능하다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\sqrt{1}=1,\qquad \sqrt{-1}=i" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="\sqrt{a_1}\sqrt{a_2}\cdots\sqrt{a_{10}}" />

                            <p>
                                은 결국
                            </p>

                            <BlockMath math="i^n" />

                            <p>
                                의 형태가 된다.
                            </p>

                            <p>
                                여기서 <InlineMath math="n" />은 <InlineMath math="-1" />의 개수이다.
                            </p>

                            <p>
                                그런데
                            </p>

                            <BlockMath math="a_1a_2\cdots a_{10}=1" />

                            <p>
                                이므로 <InlineMath math="-1" />의 개수는 짝수 개여야 한다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="n=0,2,4,6,8,10" />

                            <p>
                                만 가능하다.
                            </p>

                            <p>
                                즉 구하려는 값은
                            </p>

                            <BlockMath math="i^0,\ i^2,\ i^4,\ i^6,\ i^8,\ i^{10}" />

                            <p>
                                중 하나이다.
                            </p>

                            <BlockMath math="i^0=1" />
                            <BlockMath math="i^2=-1" />
                            <BlockMath math="i^4=1" />
                            <BlockMath math="i^6=-1" />

                            <p>
                                따라서 가능한 값은
                            </p>

                            <BlockMath math="1,\ -1" />

                            <p>
                                뿐이다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 정답은 ㄱ, ㄴ이다.
                            </p>

                        </div>
                    </details>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.8 알아두면 편한 복소수 계산
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    복소수 계산에서는 자주 반복해서 등장하는 형태가 있습니다.
                    모두 직접 전개해서 구할 수 있지만, 결과를 기억해 두면 계산이 훨씬 빨라집니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        자주 나오는 기본 계산
                    </h3>

                    <BlockMath math="(1+i)^2=2i" />
                    <BlockMath math="(1-i)^2=-2i" />

                    <BlockMath math="\left(\frac{1+i}{\sqrt2}\right)^2=i" />
                    <BlockMath math="\left(\frac{1-i}{\sqrt2}\right)^2=-i" />

                    <BlockMath math="\frac{1+i}{1-i}=i" />
                    <BlockMath math="\frac{1-i}{1+i}=-i" />

                    <BlockMath math="(1+i)(1-i)=2" />
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        왜 이렇게 될까?
                    </h3>

                    <BlockMath math="(1+i)^2=1+2i+i^2=2i" />

                    <BlockMath math="(1-i)^2=1-2i+i^2=-2i" />

                    <BlockMath math="\left(\frac{1+i}{\sqrt2}\right)^2=\frac{(1+i)^2}{2}=\frac{2i}{2}=i" />

                    <BlockMath math="\left(\frac{1-i}{\sqrt2}\right)^2=\frac{(1-i)^2}{2}=\frac{-2i}{2}=-i" />

                    <BlockMath math="\frac{1+i}{1-i}=\frac{(1+i)^2}{(1-i)(1+i)}=\frac{2i}{2}=i" />

                    <BlockMath math="\frac{1-i}{1+i}=\frac{(1-i)^2}{(1+i)(1-i)}=\frac{-2i}{2}=-i" />
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        기억해두면 좋은 이유
                    </h3>

                    <p className="leading-8 text-gray-300">
                        예를 들어 <InlineMath math="(1+i)^6" />을 계산할 때
                        처음부터 여섯 번 곱할 필요가 없습니다.
                    </p>

                    <BlockMath math="(1+i)^2=2i" />

                    <p className="leading-8 text-gray-300">
                        이므로
                    </p>

                    <BlockMath math="(1+i)^6=\{(1+i)^2\}^3=(2i)^3" />

                    <p className="leading-8 text-gray-300">
                        처럼 훨씬 짧게 계산할 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="(1+i)^6-(1-i)^6" />을 간단히 하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <BlockMath math="(1+i)^2=2i,\quad (1-i)^2=-2i" />

                            <p>따라서</p>

                            <BlockMath math="(1+i)^6=\{(1+i)^2\}^3=(2i)^3=8i^3=-8i" />

                            <BlockMath math="(1-i)^6=\{(1-i)^2\}^3=(-2i)^3=-8i^3=8i" />

                            <p>그러므로</p>

                            <BlockMath math="(1+i)^6-(1-i)^6=-8i-8i=-16i" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-16i" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="\left(\frac{1+i}{\sqrt2}\right)^2+\left(\frac{1+i}{\sqrt2}\right)^4+\left(\frac{1+i}{\sqrt2}\right)^6+\left(\frac{1+i}{\sqrt2}\right)^8" />
                        을 간단히 하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저
                            </p>

                            <BlockMath math="\left(\frac{1+i}{\sqrt2}\right)^2=i" />

                            <p>
                                이므로 주어진 식은
                            </p>

                            <BlockMath math="i+i^2+i^3+i^4" />

                            <p>
                                입니다.
                            </p>

                            <BlockMath math="i+i^2+i^3+i^4=i-1-i+1=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="f(x)=x^{2010}+\frac1{x^{2010}}" />일 때,
                        <InlineMath math="f\left(\frac{1+i}{\sqrt2}\right)+f\left(\frac{1-i}{\sqrt2}\right)" />
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저
                            </p>

                            <BlockMath math="\left(\frac{1+i}{\sqrt2}\right)^2=i" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="\left(\frac{1+i}{\sqrt2}\right)^{2010}=i^{1005}" />

                            <p>
                                1005를 4로 나누면 나머지가 1이므로
                            </p>

                            <BlockMath math="i^{1005}=i" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f\left(\frac{1+i}{\sqrt2}\right)=i+\frac1i=i-i=0" />

                            <p>
                                마찬가지로
                            </p>

                            <BlockMath math="\left(\frac{1-i}{\sqrt2}\right)^2=-i" />

                            <BlockMath math="\left(\frac{1-i}{\sqrt2}\right)^{2010}=(-i)^{1005}=-i" />

                            <BlockMath math="f\left(\frac{1-i}{\sqrt2}\right)=-i+\frac1{-i}=0" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="f\left(\frac{1+i}{\sqrt2}\right)+f\left(\frac{1-i}{\sqrt2}\right)=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\left(\frac{1+i}{\sqrt2}\right)^n=i" />
                        를 만족하는 두 자리의 자연수 <InlineMath math="n" /> 중 가장 큰 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <BlockMath math="\left(\frac{1+i}{\sqrt2}\right)^2=i" />

                            <p>
                                이므로 양변을 제곱하면
                            </p>

                            <BlockMath math="\left(\frac{1+i}{\sqrt2}\right)^n=i" />

                            <BlockMath math="\Longrightarrow i^{n/2}=i" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="i^{n/2-1}=1" />

                            <p>
                                이다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\frac n2-1=4k" />

                            <BlockMath math="n=8k+2" />

                            <p>
                                두 자리 자연수 중 가장 큰 값은
                            </p>

                            <BlockMath math="n=98" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="98" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 등식을 만족하는 실수 <InlineMath math="a,b" />
                        에 대하여 <InlineMath math="a-b" />
                        의 값을 구하여라.
                    </p>

                    <BlockMath math="\left(\frac{1+i}{1-i}\right)^{2010}=a+bi" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                자주 사용하는 계산 결과
                            </p>

                            <BlockMath math="\frac{1+i}{1-i}=i" />

                            <p>
                                를 이용하면
                            </p>

                            <BlockMath math="\left(\frac{1+i}{1-i}\right)^{2010}=i^{2010}" />

                            <p>
                                2010을 4로 나누면 나머지가 2이므로
                            </p>

                            <BlockMath math="i^{2010}=i^2=-1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a=-1,\qquad b=0" />

                            <BlockMath math="a-b=-1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)=\left(\frac{1-x}{1+x}\right)^{99}" />
                        일 때,
                    </p>

                    <BlockMath math="f\!\left(\frac{1+i}{1-i}\right)+f\!\left(\frac{1-i}{1+i}\right)" />

                    <p className="leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저
                            </p>

                            <BlockMath math="\frac{1+i}{1-i}=i" />

                            <BlockMath math="\frac{1-i}{1+i}=-i" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="f(i)=\left(\frac{1-i}{1+i}\right)^{99}" />

                            <BlockMath math="=(-i)^{99}" />

                            <BlockMath math="-i" />

                            <p>
                                또한
                            </p>

                            <BlockMath math="f(-i)=\left(\frac{1+i}{1-i}\right)^{99}" />

                            <BlockMath math="=i^{99}" />

                            <BlockMath math="i" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(i)+f(-i)=-i+i" />

                            <BlockMath math="=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        함수
                        <InlineMath math="f(n)=\left(\frac{1+i}{1-i}\right)^n" />
                        이라 할 때,
                        다음 중 모든 자연수 <InlineMath math="n" />에 대하여
                        성립하는 것은?
                    </p>

                    <div className="mt-4 rounded-xl bg-white/10 p-5">
                        <p>① <InlineMath math="f(n+1)=f(n)" /></p>
                        <p>② <InlineMath math="f(n+2)=f(n)" /></p>
                        <p>③ <InlineMath math="f(n+3)=f(n)" /></p>
                        <p>④ <InlineMath math="f(n+4)=f(n)" /></p>
                        <p>⑤ <InlineMath math="f(n+5)=f(n)" /></p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 자주 사용하는 계산 결과
                            </p>

                            <BlockMath math="\frac{1+i}{1-i}=i" />

                            <p>
                                를 이용하면
                            </p>

                            <BlockMath math="f(n)=i^n" />

                            <p>
                                이다.
                            </p>

                            <p>
                                그런데
                            </p>

                            <BlockMath math="i^4=1" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="i^{n+4}=i^ni^4=i^n" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(n+4)=f(n)" />

                            <p>
                                이 항상 성립한다.
                            </p>

                            <p>
                                실제로
                            </p>

                            <BlockMath math="i,\ -1,\ -i,\ 1,\ i,\ -1,\ -i,\ 1,\cdots" />

                            <p>
                                과 같이 4개마다 반복된다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 정답은 ④이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="(1+i)^2=2i" />
                    <BlockMath math="(1-i)^2=-2i" />
                    <BlockMath math="\left(\frac{1+i}{\sqrt2}\right)^2=i" />
                    <BlockMath math="\left(\frac{1-i}{\sqrt2}\right)^2=-i" />
                    <BlockMath math="\frac{1+i}{1-i}=i" />
                    <BlockMath math="\frac{1-i}{1+i}=-i" />
                    <BlockMath math="(1+i)(1-i)=2" />

                    <p className="mt-5 text-center leading-8 text-gray-300">
                        직접 전개할 수 있지만, 자주 나오므로 기억해 두면 계산이 빨라집니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.9 음수의 제곱근
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    지금까지는 실수 범위에서 음수의 제곱근을 정의할 수 없었다.
                    그러나 허수단위 <InlineMath math="i=\sqrt{-1}" />를 도입하면
                    음수의 제곱근도 간단하게 나타낼 수 있다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        음수의 제곱근
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="a>0" />일 때
                    </p>

                    <BlockMath math="\sqrt{-a}=\sqrt a\,i" />

                    <p className="leading-8 text-gray-300">
                        로 계산한다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        계산 예시
                    </h3>

                    <BlockMath math="\sqrt{-3}=\sqrt3\,i" />

                    <BlockMath math="\sqrt{-7}=\sqrt7\,i" />

                    <BlockMath math="\sqrt{-9}=3i" />

                    <BlockMath math="\sqrt{-12}=2\sqrt3\,i" />

                    <BlockMath math="\sqrt{-27}=3\sqrt3\,i" />
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        자주 하는 실수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        음수의 제곱근은 음수만 꺼내는 것이 아니라
                        <InlineMath math="\sqrt{-1}=i" />를 먼저 분리해야 한다.
                    </p>

                    <BlockMath math="\sqrt{-12}" />

                    <BlockMath math="\neq \sqrt{-4}\sqrt3" />

                    <p>
                        올바른 계산은
                    </p>

                    <BlockMath math="\sqrt{-12}" />

                    <BlockMath math="\sqrt{12}\sqrt{-1}" />

                    <BlockMath math="2\sqrt3\,i" />

                    <p>
                        이다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음을 간단히 하여라.
                    </p>

                    <BlockMath math="\sqrt{-48}" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <BlockMath math="\sqrt{-48}" />

                            <BlockMath math="\sqrt{16\cdot3}\sqrt{-1}" />

                            <BlockMath math="4\sqrt3\,i" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="4\sqrt3\,i" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음을 간단히 하여라.
                    </p>

                    <BlockMath math="\sqrt{-8}\times\sqrt{-18}" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <BlockMath math="\sqrt{-8}=2\sqrt2\,i" />

                            <BlockMath math="\sqrt{-18}=3\sqrt2\,i" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="(2\sqrt2\,i)(3\sqrt2\,i)" />

                            <BlockMath math="12i^2" />

                            <BlockMath math="-12" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-12" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 식을 간단히 하여라.
                    </p>

                    <BlockMath math="\sqrt{-3}\sqrt{-2}\sqrt2\sqrt3+\frac{\sqrt6}{\sqrt{-2}}" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 음수의 제곱근을 허수를 이용하여 바꾸면
                            </p>

                            <BlockMath math="\sqrt{-3}=\sqrt3\,i" />

                            <BlockMath math="\sqrt{-2}=\sqrt2\,i" />

                            <p>
                                이므로 첫 번째 항은
                            </p>

                            <BlockMath math="\sqrt{-3}\sqrt{-2}\sqrt2\sqrt3" />

                            <BlockMath math="=(\sqrt3\,i)(\sqrt2\,i)\sqrt2\sqrt3" />

                            <BlockMath math="=(\sqrt3\sqrt3)(\sqrt2\sqrt2)i^2" />

                            <BlockMath math="=3\cdot2\cdot(-1)" />

                            <BlockMath math="=-6" />

                            <p>
                                다음으로 두 번째 항은
                            </p>

                            <BlockMath math="\frac{\sqrt6}{\sqrt{-2}}" />

                            <BlockMath math="=\frac{\sqrt6}{\sqrt2\,i}" />

                            <BlockMath math="=\frac{\sqrt3}{i}" />

                            <p>
                                분모의 <InlineMath math="i" />를 없애기 위해
                                <InlineMath math="i" />를 곱하면
                            </p>

                            <BlockMath math="\frac{\sqrt3}{i}" />

                            <BlockMath math="=\frac{\sqrt3\,i}{i^2}" />

                            <BlockMath math="=-\sqrt3\,i" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-6+(-\sqrt3\,i)" />

                            <BlockMath math="-6-\sqrt3\,i" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-6-\sqrt3\,i" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="\sqrt{-a}=\sqrt a\,i\qquad(a>0)" />

                    <BlockMath math="\sqrt{-1}=i" />

                    <BlockMath math="\sqrt{-12}=2\sqrt3\,i" />

                    <BlockMath math="\sqrt{-27}=3\sqrt3\,i" />
                </div>


            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.10 음수의 제곱근 성질
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    제곱근의 곱셈과 나눗셈은 제곱근 안의 수가 양수일 때와
                    음수일 때 결과가 달라질 수 있습니다.
                    음수의 제곱근은 먼저 <InlineMath math="i" />를 이용하여 바꾼 뒤 계산해야 합니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        곱셈과 음수의 제곱근
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        두 제곱근 안의 수가 모두 음수일 때는 다음과 같이 계산합니다.
                    </p>

                    <BlockMath math="a<0,\ b<0\quad\Longrightarrow\quad \sqrt a\sqrt b=-\sqrt{ab}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        예를 들어
                    </p>

                    <BlockMath math="\sqrt{-2}\sqrt{-3}" />

                    <BlockMath math="=(\sqrt2 i)(\sqrt3 i)" />

                    <BlockMath math="=\sqrt6 i^2" />

                    <BlockMath math="-\sqrt6" />

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 음수끼리의 제곱근을 곱할 때
                        <InlineMath math="\sqrt a\sqrt b=\sqrt{ab}" />를 그대로 쓰면 안 됩니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-red-300">
                            자주 하는 실수
                        </h4>

                        <BlockMath math="\sqrt{-2}\sqrt{-3}\ne\sqrt{(-2)(-3)}" />

                        <BlockMath math="\sqrt{-2}\sqrt{-3}=-\sqrt6" />

                        <BlockMath math="\sqrt{(-2)(-3)}=\sqrt6" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        역으로 해석할 때 주의
                    </h3>

                    <p className="leading-8 text-gray-300">
                        앞에서는
                        <InlineMath math="a<0,\ b<0" />이면
                        <InlineMath math="\sqrt a\sqrt b=-\sqrt{ab}" />가 된다고 했습니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        하지만 식
                        <InlineMath math="\sqrt a\sqrt b=-\sqrt{ab}" />
                        이 주어지고 범위를 구하는 경우에는 0도 포함해야 합니다.
                    </p>

                    <BlockMath math="\sqrt a\sqrt b=-\sqrt{ab}" />

                    <p className="mt-4 leading-8 text-gray-300">
                        이 식이 성립할 조건은
                    </p>

                    <BlockMath math="a\le0,\quad b\le0" />

                    <p className="mt-4 leading-8 text-gray-300">
                        입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        예를 들어 <InlineMath math="a=0,\ b=-3" />이면
                    </p>

                    <BlockMath math="\sqrt0\sqrt{-3}=0" />

                    <BlockMath math="-\sqrt{0\cdot(-3)}=0" />

                    <p className="mt-4 leading-8 text-gray-300">
                        이므로 식이 성립합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        나눗셈과 음수의 제곱근
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        분모가 음수의 제곱근일 때도 먼저
                        <InlineMath math="i" />를 이용하여 바꿔 계산합니다.
                    </p>

                    <BlockMath math="\frac{\sqrt2}{\sqrt{-3}}" />

                    <BlockMath math="=\frac{\sqrt2}{\sqrt3 i}" />

                    <BlockMath math="=\frac{\sqrt2}{\sqrt3 i}\cdot\frac{i}{i}" />

                    <BlockMath math="=\frac{\sqrt2 i}{\sqrt3 i^2}" />

                    <BlockMath math="-\frac{\sqrt2}{\sqrt3}i" />

                    <BlockMath math="-\sqrt{\frac23}i" />

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-blue-300">
                            나눗셈 성질
                        </h4>

                        <BlockMath math="a\ge0,\ b<0\quad\Longrightarrow\quad \frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />

                        <p className="mt-4 leading-8 text-gray-300">
                            단, 분모는 0이 될 수 없으므로
                            <InlineMath math="b=0" />은 포함되지 않습니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        자주 하는 실수
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        음수의 제곱근이 들어 있는 식에서는
                        제곱근의 곱셈과 나눗셈 공식을 아무 조건 없이 사용하면 안 됩니다.
                    </p>

                    <BlockMath math="\sqrt{-2}\sqrt{-3}=-\sqrt6" />

                    <BlockMath math="\sqrt{(-2)(-3)}=\sqrt6" />

                    <p className="mt-5 leading-8 text-gray-300">
                        두 식은 서로 다릅니다.
                        음수의 제곱근은 반드시 먼저 <InlineMath math="\sqrt{-a}=\sqrt a i" />로 바꾸어 계산해야 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음을 간단히 하여라.
                    </p>

                    <BlockMath math="\sqrt{-5}\sqrt{-20}" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <BlockMath math="\sqrt{-5}=\sqrt5 i" />
                            <BlockMath math="\sqrt{-20}=2\sqrt5 i" />

                            <p>따라서</p>

                            <BlockMath math="\sqrt{-5}\sqrt{-20}" />
                            <BlockMath math="=(\sqrt5 i)(2\sqrt5 i)" />
                            <BlockMath math="=10i^2" />
                            <BlockMath math="-10" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-10" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음을 간단히 하여라.
                    </p>

                    <BlockMath math="\frac{\sqrt6}{\sqrt{-2}}" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <BlockMath math="\sqrt{-2}=\sqrt2 i" />

                            <p>따라서</p>

                            <BlockMath math="\frac{\sqrt6}{\sqrt{-2}}" />
                            <BlockMath math="=\frac{\sqrt6}{\sqrt2 i}" />
                            <BlockMath math="=\frac{\sqrt3}{i}" />

                            <p>
                                <InlineMath math="\frac1i=-i" />이므로
                            </p>

                            <BlockMath math="\frac{\sqrt3}{i}=-\sqrt3 i" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-\sqrt3 i" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 식을 간단히 하여라.
                    </p>

                    <BlockMath math="\sqrt{-3}\sqrt{-2}\sqrt2\sqrt3+\frac{\sqrt6}{\sqrt{-2}}" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <BlockMath math="\sqrt{-3}=\sqrt3 i,\quad \sqrt{-2}=\sqrt2 i" />

                            <p>첫 번째 항은</p>

                            <BlockMath math="\sqrt{-3}\sqrt{-2}\sqrt2\sqrt3" />
                            <BlockMath math="=(\sqrt3 i)(\sqrt2 i)\sqrt2\sqrt3" />
                            <BlockMath math="=(\sqrt3\sqrt3)(\sqrt2\sqrt2)i^2" />
                            <BlockMath math="=3\cdot2\cdot(-1)" />
                            <BlockMath math="-6" />

                            <p>두 번째 항은</p>

                            <BlockMath math="\frac{\sqrt6}{\sqrt{-2}}" />
                            <BlockMath math="=\frac{\sqrt6}{\sqrt2 i}" />
                            <BlockMath math="=\frac{\sqrt3}{i}" />
                            <BlockMath math="-\sqrt3 i" />

                            <p>따라서</p>

                            <BlockMath math="\sqrt{-3}\sqrt{-2}\sqrt2\sqrt3+\frac{\sqrt6}{\sqrt{-2}}" />
                            <BlockMath math="-6-\sqrt3 i" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-6-\sqrt3 i" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        두 실수 <InlineMath math="a,b" />에 대하여 <InlineMath math="\sqrt a\sqrt b=-\sqrt{ab}" />일 때, <InlineMath math="\sqrt{(a+b)^2}-\sqrt{a^2}" />을 간단히 하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="\sqrt a\sqrt b=-\sqrt{ab}" />이므로
                            </p>

                            <BlockMath math="a\le0,\quad b\le0" />

                            <p>입니다. 따라서</p>

                            <BlockMath math="a+b\le0,\quad a\le0" />

                            <BlockMath math="\sqrt{(a+b)^2}=|a+b|=-(a+b)" />

                            <BlockMath math="\sqrt{a^2}=|a|=-a" />

                            <p>그러므로</p>

                            <BlockMath math="\sqrt{(a+b)^2}-\sqrt{a^2}" />

                            <BlockMath math="=-(a+b)-(-a)" />

                            <BlockMath math="-b" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-b" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        0이 아닌 실수 <InlineMath math="a,b" />에 대하여 <InlineMath math="\sqrt a\sqrt b=-\sqrt{ab}" />일 때, <InlineMath math="\sqrt a+\sqrt b" />의 켤레복소수를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="a,b" />가 0이 아니고 <InlineMath math="\sqrt a\sqrt b=-\sqrt{ab}" />이므로
                            </p>

                            <BlockMath math="a<0,\quad b<0" />

                            <p>입니다.</p>

                            <BlockMath math="\sqrt a=\sqrt{-a}i,\quad \sqrt b=\sqrt{-b}i" />

                            <p>따라서</p>

                            <BlockMath math="\sqrt a+\sqrt b" />

                            <BlockMath math="=(\sqrt{-a}+\sqrt{-b})i" />

                            <p>
                                순허수의 켤레복소수는 부호를 반대로 바꾼 수입니다.
                            </p>

                            <BlockMath math="\overline{\sqrt a+\sqrt b}" />

                            <BlockMath math="-\sqrt a-\sqrt b" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-\sqrt a-\sqrt b" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="a,b" />는 실수이고 <InlineMath math="\frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />일 때, <InlineMath math="\sqrt{(a-b)^2}-\sqrt{b^2}+2|a|" />를 간단히 하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="\frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />이므로
                            </p>

                            <BlockMath math="a\ge0,\quad b<0" />

                            <p>입니다. 따라서</p>

                            <BlockMath math="a-b>0" />

                            <BlockMath math="\sqrt{(a-b)^2}=|a-b|=a-b" />

                            <BlockMath math="\sqrt{b^2}=|b|=-b" />

                            <BlockMath math="|a|=a" />

                            <p>그러므로</p>

                            <BlockMath math="\sqrt{(a-b)^2}-\sqrt{b^2}+2|a|" />

                            <BlockMath math="=(a-b)-(-b)+2a" />

                            <BlockMath math="3a" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3a" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수 <InlineMath math="x" />가 <InlineMath math="\frac{\sqrt{x+2}}{\sqrt{x}}=-\sqrt{\frac{x+2}{x}}" />
                        를 만족할 때, <InlineMath math="|x|+\sqrt{(x+2)^2}" />을 간단히 하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="\frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />가 성립하려면
                            </p>

                            <BlockMath math="a\ge0,\quad b<0" />

                            <p>이어야 합니다.</p>

                            <p>
                                여기서는 <InlineMath math="a=x+2,\ b=x" />이므로
                            </p>

                            <BlockMath math="x+2\ge0,\quad x<0" />

                            <BlockMath math="-2\le x<0" />

                            <p>따라서</p>

                            <BlockMath math="|x|=-x" />

                            <BlockMath math="\sqrt{(x+2)^2}=|x+2|=x+2" />

                            <p>그러므로</p>

                            <BlockMath math="|x|+\sqrt{(x+2)^2}" />

                            <BlockMath math="-x+(x+2)" />

                            <BlockMath math="2" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        0이 아닌 두 실수 <InlineMath math="a,b" />가 <InlineMath math="\frac{\sqrt a}{\sqrt b}+\sqrt{\frac ab}=0" />
                        을 만족할 때, <InlineMath math="\sqrt{a^2}+\sqrt{b^2}+\sqrt{(a-b)^2}" />을 간단히 하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                주어진 식은
                            </p>

                            <BlockMath math="\frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />

                            <p>
                                와 같습니다.
                            </p>

                            <p>
                                <InlineMath math="a,b" />가 0이 아니므로
                            </p>

                            <BlockMath math="a>0,\quad b<0" />

                            <p>입니다.</p>

                            <p>따라서</p>

                            <BlockMath math="\sqrt{a^2}=|a|=a" />

                            <BlockMath math="\sqrt{b^2}=|b|=-b" />

                            <BlockMath math="\sqrt{(a-b)^2}=|a-b|=a-b" />

                            <p>그러므로</p>

                            <BlockMath math="\sqrt{a^2}+\sqrt{b^2}+\sqrt{(a-b)^2}" />

                            <BlockMath math="=a+(-b)+(a-b)" />

                            <BlockMath math="=2a-2b" />

                            <BlockMath math="=2(a-b)" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2(a-b)" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 9</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        0이 아닌 두 실수 <InlineMath math="a,b" />에 대하여 <InlineMath math="\frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />
                        일 때, <InlineMath math="\sqrt{(a-2b)^2}+|3b|" />을 간단히 하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="\frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />이고 <InlineMath math="a,b" />가 0이 아니므로
                            </p>

                            <BlockMath math="a>0,\quad b<0" />

                            <p>입니다.</p>

                            <p>
                                따라서 <InlineMath math="a-2b>0" />이므로
                            </p>

                            <BlockMath math="\sqrt{(a-2b)^2}=|a-2b|=a-2b" />

                            <p>
                                또 <InlineMath math="b<0" />이므로
                            </p>

                            <BlockMath math="|3b|=-3b" />

                            <p>그러므로</p>

                            <BlockMath math="\sqrt{(a-2b)^2}+|3b|" />

                            <BlockMath math="=(a-2b)+(-3b)" />

                            <BlockMath math="=a-5b" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="a-5b" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 10</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="\sqrt{-2-x}\sqrt{x-3}+\sqrt{(-2-x)(x-3)}=0" />
                        을 만족하는 정수 <InlineMath math="x" />의 개수를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>주어진 식을 이항하면</p>

                            <BlockMath math="\sqrt{-2-x}\sqrt{x-3}=-\sqrt{(-2-x)(x-3)}" />

                            <p>
                                이는 <InlineMath math="\sqrt a\sqrt b=-\sqrt{ab}" />의 꼴입니다.
                            </p>

                            <BlockMath math="a=-2-x,\quad b=x-3" />

                            <p>
                                이 식이 성립하려면
                            </p>

                            <BlockMath math="a\le0,\quad b\le0" />

                            <p>이어야 합니다.</p>

                            <BlockMath math="-2-x\le0,\quad x-3\le0" />

                            <BlockMath math="x\ge-2,\quad x\le3" />

                            <BlockMath math="-2\le x\le3" />

                            <p>
                                따라서 가능한 정수는
                            </p>

                            <BlockMath math="-2,\ -1,\ 0,\ 1,\ 2,\ 3" />

                            <p className="font-semibold text-white">
                                따라서 정수 <InlineMath math="x" />의 개수는 <InlineMath math="6" />개입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 11</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 식을 만족하는 정수 <InlineMath math="x" />의 개수를 구하여라.
                    </p>
                    <BlockMath math="\frac{\sqrt{3-x}}{\sqrt{-2-x}}+\sqrt{\frac{3-x}{-2-x}}=0" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>주어진 식을 이항하면</p>

                            <BlockMath math="\frac{\sqrt{3-x}}{\sqrt{-2-x}}=-\sqrt{\frac{3-x}{-2-x}}" />

                            <p>
                                이는 <InlineMath math="\frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />의 꼴입니다.
                            </p>

                            <BlockMath math="a=3-x,\quad b=-2-x" />

                            <p>
                                이 식이 성립하려면
                            </p>

                            <BlockMath math="a\ge0,\quad b<0" />

                            <p>
                                이어야 합니다. 분모는 0이 될 수 없으므로
                                <InlineMath math="b<0" />입니다.
                            </p>

                            <BlockMath math="3-x\ge0,\quad -2-x<0" />

                            <BlockMath math="x\le3,\quad x>-2" />

                            <BlockMath math="-2<x\le3" />

                            <p>
                                따라서 가능한 정수는
                            </p>

                            <BlockMath math="-1,\ 0,\ 1,\ 2,\ 3" />

                            <p className="font-semibold text-white">
                                따라서 정수 <InlineMath math="x" />의 개수는 <InlineMath math="5" />개입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="a<0,\ b<0\quad\Longrightarrow\quad \sqrt a\sqrt b=-\sqrt{ab}" />
                    <BlockMath math="a>0,\ b<0\quad\Longrightarrow\quad \frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />

                    <p className="text-center leading-8 text-gray-300">
                        하지만 역으로 범위를 구할 때는
                    </p>

                    <BlockMath math="\sqrt a\sqrt b=-\sqrt{ab}\quad\Longrightarrow\quad a\le0,\ b\le0" />

                    <BlockMath math="a\ge0,\ b<0\quad\Longrightarrow\quad \frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />

                    <p className="mt-5 text-center leading-8 text-gray-300">
                        음수의 제곱근은 먼저 <InlineMath math="i" />로 바꾸어 계산합니다.
                    </p>
                </div>
            </section>

        </>
    );
}