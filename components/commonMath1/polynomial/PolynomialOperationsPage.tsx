"use client";

import { useEffect, useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

type Step = 0 | 1 | 2 | 3;
type Phase = "raw" | "simplified";

function LikeTermsAnimation() {
  const [step, setStep] = useState<Step>(0);
  const [phase, setPhase] = useState<Phase>("raw");

  const expressions = [
    String.raw`3x^2+5x+7-(2x^2+3yx-5)+(2x^2-3x+5)`,

    String.raw`\color{#fde047}{3}\color{#ffffff}x^2\color{#6b7280}{+5x+7}\color{#fde047}-({2}\color{#ffffff}x^2\color{#6b7280}{+3yx-5\color{#fde047})+(}\color{#fde047}{2}\color{#ffffff}x^2\color{#6b7280}{-3x+5\color{#fde047})}`,

    String.raw`\color{#6b7280}{3x^2+}\color{#ef4444}{5}\color{#ffffff}x\color{#6b7280}{+7}\color{#ef4444}{-}\color{#6b7280}{\color{#ef4444}(\color{#6b7280}2x^2}\color{#ef4444}{+3y}\color{#ffffff}x\color{#6b7280}{-5\color{#ef4444}{)+(}\color{#6b7280}2x^2}\color{#ef4444}{-3}\color{#ffffff}x\color{#6b7280}{+5\color{#ef4444})}`,

    String.raw`\color{#6b7280}{3x^2+5x+}\color{#60a5fa}{7}\color{#60a5fa}{-(}\color{#6b7280}{2x^2+3yx}\color{#60a5fa}{-5})+(\color{#6b7280}{2x^2-3x}\color{#60a5fa}{+5}{)}`,
  ] as const;

  const resultMath =
    step === 0
      ? ""
      : step === 1
        ? phase === "raw"
          ? String.raw`(3-2+2)x^2`
          : String.raw`3x^2`
        : step === 2
          ? phase === "raw"
            ? String.raw`3x^2+(5-3y-3)x`
            : String.raw`3x^2+(2-3y)x`
            : phase === "raw"
            ? String.raw`3x^2+(2-3y)x+(7+5+5)`
            : String.raw`3x^2+(2-3y)x+17`;

  useEffect(() => {
    if (step === 0) return;

    setPhase("raw");

    const simplifyTimer = setTimeout(() => {
    setPhase("simplified");
}, 4000);

// simplified 상태를 900ms 정도 보여줌
const nextTimer = setTimeout(() => {
    setStep((prev) => (prev < 3 ? ((prev + 1) as Step) : prev));
}, 6000);

    return () => {
      clearTimeout(simplifyTimer);
      clearTimeout(nextTimer);
    };
  }, [step]);

  const start = () => {
    setStep(1);
    setPhase("raw");
  };

  const reset = () => {
    setStep(0);
    setPhase("raw");
  };

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
      <h3 className="mb-6 text-2xl font-bold text-white">
        동류항 계산 애니메이션으로 보기
      </h3>

      <div className="rounded-xl bg-white/10 p-6 text-center text-2xl">
        <BlockMath math={expressions[step] ?? expressions[0]} />
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={start}
          className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white"
        >
          계산 과정 보기
        </button>

        <button
          onClick={reset}
          className="rounded-lg bg-white/10 px-4 py-2 font-bold text-white"
        >
          다시 보기
        </button>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-center gap-4 text-3xl">
          <span className="text-white">=</span>

          <div className="min-w-[360px] text-center">
            {step === 0 ? (
              <span className="text-gray-500">
                계산 과정이 여기에 나타납니다.
              </span>
            ) : (
              <span
                key={`${step}-${phase}`}
                className="inline-block animate-[write_1s_ease-out]"
              >
                <BlockMath math={resultMath} />
              </span>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes write {
          from {
            opacity: 0;
            transform: translateY(6px);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

function PowerFractionAnimation() {
  const [step, setStep] = useState<Step>(0);

  useEffect(() => {
    if (step === 0) return;

    const timer = setTimeout(() => {
      setStep((prev) => (prev < 3 ? ((prev + 1) as Step) : prev));
    }, 2000);

    return () => clearTimeout(timer);
  }, [step]);

  const start = () => setStep(1);
  const reset = () => setStep(0);

  const expressions: Record<Step, string> = {
    0: String.raw`\color{#ffffff}\left(-\frac{2x^2}{3y^3}\right)^3`,
    1: String.raw`\color{#fde047}\left(\color{#fde047}{-}\color{#6b7280}{\frac{2x^2}{3y^3}}\color{#fde047}\right)^{\color{#fde047}{3}}`,
    2: String.raw`\color{#60a5fa}\left(\color{#6b7280}{-}\color{#60a5fa}{\frac{2}{3}}\color{#6b7280}{\frac{x^2}{y^3}}\color{#60a5fa}\right)^{\color{#60a5fa}{3}}`,
    3: String.raw`\color{#c084fc}\left(\color{#6b7280}{-\frac{2}{3}}\color{#c084fc}{\frac{x^2}{y^3}}\right)^{\color{#c084fc}{3}}`,
  };

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
      <h3 className="mb-6 text-2xl font-bold text-white">
        거듭제곱 계산 애니메이션으로 보기
      </h3>

      <div className="mt-5 flex gap-3">
        <button
          onClick={start}
          className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white"
        >
          계산 과정 보기
        </button>

        <button
          onClick={reset}
          className="rounded-lg bg-white/10 px-4 py-2 font-bold text-white"
        >
          다시 보기
        </button>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-3xl">
          <div className="min-w-[280px] text-center transition-all duration-300">
            <BlockMath math={expressions[step]} />
          </div>

          <span className="text-white">=</span>

          <div className="flex min-w-[260px] items-center justify-center gap-3 text-3xl">
            {step >= 1 && (
              <span className="animate-[write_0.35s_ease-out] text-yellow-300">
                <InlineMath math="-" />
              </span>
            )}

            {step >= 2 && (
              <span className="animate-[write_0.35s_ease-out] text-blue-300">
                <InlineMath math="\frac{8}{27}" />
              </span>
            )}

            {step >= 3 && (
              <span className="animate-[write_0.35s_ease-out] text-purple-300">
                <InlineMath math="\frac{x^6}{y^9}" />
              </span>
            )}
          </div>
        </div>
      </div>


      <style jsx>{`
                @keyframes write {
                    from {
                        opacity: 0;
                        transform: translateY(6px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
    </div>
  );
}

export default function PolynomialOperationsPage() {
  return (
    <>
      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.1 단항식과 다항식
        </h2>

        <div className="space-y-4 text-lg leading-8">
          <p>
            <strong>• 단항식</strong> : 수와 문자의 곱으로 이루어진 하나의 항
          </p>

          <p>
            <strong>• 다항식</strong> : 하나 이상의 단항식이 덧셈 또는 뺄셈으로
            연결된 식
          </p>

          <p>
            <strong>• 상수항</strong> : 문자가 없는 항
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-xl font-semibold">
            예제
          </h3>

          <BlockMath math="x^3 + 2x^2y + 5xy^2 + y^3 - 7" />

          <p className="mt-4 leading-8 text-gray-300">
            위 식은
          </p>

          <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-200">
            <li>
              <InlineMath math="x^3" />
            </li>

            <li>
              <InlineMath math="2x^2y" />
            </li>

            <li>
              <InlineMath math="5xy^2" />
            </li>

            <li>
              <InlineMath math="y^3" />
            </li>

            <li>
              <InlineMath math="-7" />
            </li>
          </ul>

          <p className="mt-4 leading-8 text-gray-300">
            의 5개의 항으로 이루어진 다항식입니다.
          </p>

          <p className="mt-2 leading-8 text-gray-300">
            또한 상수항은 <InlineMath math="-7" /> 입니다.
          </p>
        </div>

        <details className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
            심화 : 다항식이 아닌 식
          </summary>

          <div className="mt-5 space-y-5 leading-8 text-gray-300">
            <p>
              다항식은 문자의 지수가 <strong>0 이상의 정수</strong>인 항들로
              이루어진 식입니다.
            </p>

            <p>
              따라서 다음과 같은 식들은 다항식이 아닙니다.
            </p>

            <div className="rounded-xl bg-black/40 p-5">
              <ul className="space-y-4 text-lg">
                <li>
                  <InlineMath math="\frac{1}{x}" />{" "}
                  <span className="text-gray-400">
                    : 문자가 분모에 있으므로 다항식이 아닙니다.
                  </span>
                </li>

                <li>
                  <InlineMath math="\sqrt{x}" />{" "}
                  <span className="text-gray-400">
                    : 문자의 지수가 분수이므로 다항식이 아닙니다.
                  </span>
                </li>

                <li>
                  <InlineMath math="x^{-2}" />{" "}
                  <span className="text-gray-400">
                    : 문자의 지수가 음수이므로 다항식이 아닙니다.
                  </span>
                </li>

                <li>
                  <InlineMath math="\frac{x+1}{x}" />{" "}
                  <span className="text-gray-400">
                    : 정리하면 분모에 문자가 남으므로 다항식이 아닙니다.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/15 p-5">
              <p className="mb-3 font-semibold text-white">생각해보기</p>

              <p>
                <InlineMath math="\frac{x^2+x}{x}" /> 는 다항식일까요?
              </p>

              <p className="mt-3 text-gray-400">
                이 식은 <InlineMath math="x \neq 0" /> 에서{" "}
                <InlineMath math="x+1" /> 로 정리됩니다.
                그러나 처음 식 자체에는 분모에 문자가 있으므로, 식을 다룰 때
                정의역을 함께 생각해야 합니다.
              </p>
            </div>
          </div>
        </details>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">1.2 계수와 차수</h2>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">생각해보기</h3>

          <p className="mb-4 text-lg leading-8">
            <InlineMath math="5x^2y^3" /> 은 몇 차식일까요?
          </p>

          <p className="leading-8 text-gray-300">
            많은 학생들은 “5차식”이라고 답합니다. 하지만 이 질문만으로는 차수를
            결정할 수 없습니다.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            수학에서는 먼저 <strong>어떤 문자를 변수로 볼 것인지</strong> 정해야
            합니다.
          </p>

          <div className="mt-5 rounded-xl border border-white/15 p-5">
            <p className="mb-3 text-gray-300">즉, 다음과 같은 조건이 필요합니다.</p>

            <ul className="ml-6 list-disc space-y-2 text-gray-200">
              <li>
                <InlineMath math="x" /> 에 대하여
              </li>
              <li>
                <InlineMath math="y" /> 에 대하여
              </li>
              <li>
                <InlineMath math="x, y" /> 에 대하여
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-white/20 p-5">
            <h3 className="mb-4 text-xl font-bold">
              <InlineMath math="x" /> 에 대하여
            </h3>

            <BlockMath math="5x^2y^3" />

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <InlineMath math="x" /> 의 지수 : <InlineMath math="2" />
              </li>
              <li>
                차수 : <InlineMath math="2" />
              </li>
              <li>
                계수 : <InlineMath math="5y^3" />
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/20 p-5">
            <h3 className="mb-4 text-xl font-bold">
              <InlineMath math="y" /> 에 대하여
            </h3>

            <BlockMath math="5x^2y^3" />

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <InlineMath math="y" /> 의 지수 : <InlineMath math="3" />
              </li>
              <li>
                차수 : <InlineMath math="3" />
              </li>
              <li>
                계수 : <InlineMath math="5x^2" />
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/20 p-5">
            <h3 className="mb-4 text-xl font-bold">
              <InlineMath math="x, y" /> 에 대하여
            </h3>

            <BlockMath math="5x^2y^3" />

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                전체 차수 : <InlineMath math="2+3=5" />
              </li>
              <li>
                차수 : <InlineMath math="5" />
              </li>
              <li>
                계수 : <InlineMath math="5" />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">정리</h3>

          <p className="leading-8 text-gray-300">
            계수와 차수는 <strong>어떤 문자를 변수로 정하느냐</strong>에 따라
            달라질 수 있습니다. 따라서 수학 문제에서는 항상 “
            <InlineMath math="x" /> 에 대하여”, “<InlineMath math="y" /> 에
            대하여”, “<InlineMath math="x,y" /> 에 대하여”와 같은 조건을 먼저
            확인해야 합니다.
          </p>
        </div>

        <details className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
            용어 정리 : 계수와 차수
          </summary>

          <div className="mt-5 space-y-5 leading-8 text-gray-300">
            <div>
              <p className="font-semibold text-white">차수(Degree)</p>
              <p>변수로 지정된 문자의 거듭제곱을 말합니다.</p>
            </div>

            <div>
              <p className="font-semibold text-white">계수(Coefficient)</p>
              <p>
                물어보는 변수를 제외하고, 그 변수에 곱해진 나머지 부분을 말합니다.
              </p>
            </div>
          </div>
        </details>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.3 다항식의 정리
        </h2>

        <p className="mb-4 leading-8 text-gray-300">
          다항식은 보통 한 문자에 대하여 차수 순서대로 정리하여 사용합니다.
        </p>

        <ul className="mb-8 ml-6 list-disc space-y-2 text-gray-300">
          <li>내림차순 : 차수가 높은 항 → 낮은 항</li>
          <li>오름차순 : 차수가 낮은 항 → 높은 항</li>
        </ul>

        <p className="mb-8 leading-8 text-gray-300">
          일반적으로는 <strong className="text-white">내림차순 정리</strong>를 가장 많이 사용합니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            예시
          </h3>

          <BlockMath math="5xy^2 + 2x^3 - 3x^2y + 7" />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <div className="rounded-xl border border-white/20 p-5">
            <h3 className="mb-4 text-xl font-bold">
              <InlineMath math="x" />에 대하여 내림차순
            </h3>

            <BlockMath math="2x^3 - 3x^2y + 5xy^2 + 7" />
          </div>

          <div className="rounded-xl border border-white/20 p-5">
            <h3 className="mb-4 text-xl font-bold">
              <InlineMath math="x" />에 대하여 오름차순
            </h3>

            <BlockMath math="7 + 5xy^2 - 3x^2y + 2x^3" />
          </div>

          <div className="rounded-xl border border-white/20 p-5">
            <h3 className="mb-4 text-xl font-bold">
              <InlineMath math="y" />에 대하여 내림차순
            </h3>

            <BlockMath math="5xy^2 - 3x^2y + 2x^3 + 7" />
          </div>

          <div className="rounded-xl border border-white/20 p-5">
            <h3 className="mb-4 text-xl font-bold">
              <InlineMath math="y" />에 대하여 오름차순
            </h3>

            <BlockMath math="7 + 2x^3 - 3x^2y + 5xy^2" />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            정리
          </h3>

          <ul className="ml-6 list-disc space-y-3 text-gray-300">
            <li>어떤 문자에 대하여 정리하는지 먼저 확인합니다.</li>
            <li>내림차순 정리는 차수가 높은 항부터 나열합니다.</li>
            <li>오름차순 정리는 차수가 낮은 항부터 나열합니다.</li>
            <li>일반적으로는 내림차순 정리를 사용합니다.</li>
          </ul>
        </div>
        <details className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
            심화 : 수의 내림차순 정리
          </summary>

          <div className="mt-5 space-y-4 leading-8 text-gray-300">
            <p>
              우리가 사용하는 자연수도 사실은 내림차순 정리의 한 예입니다.
            </p>

            <BlockMath math={String.raw`1234 = 1\cdot10^3 + 2\cdot10^2 + 3\cdot10 + 4`} />
            <p>
              즉 1234는 10에 대하여 내림차순으로 정리된 식이라고 볼 수 있습니다.
            </p>
          </div>
        </details>

      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.4 곱셈의 원칙
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          식의 곱셈은 항상 다음 순서로 계산합니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <ol className="ml-6 list-decimal space-y-3 text-lg">
            <li>
              <strong>부호</strong>
            </li>
            <li>
              <strong>숫자</strong>
            </li>
            <li>
              <strong>문자</strong>
            </li>
          </ol>
        </div>

        <p className="mt-6 leading-8 text-gray-300">
          복잡한 식이라도 부호, 숫자, 문자를 따로 계산하면 쉽게 정리할 수 있습니다.
        </p>

        <div className="mt-8 rounded-xl border border-white/20 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            예시 1
          </h3>

          <BlockMath math="(-2x^2)(3x^3)" />

          <div className="mt-6 space-y-5">

            <div>
              <p className="font-semibold text-white">
                ① 부호 계산
              </p>

              <BlockMath math="(-)(+)=-" />
            </div>

            <div>
              <p className="font-semibold text-white">
                ② 숫자 계산
              </p>

              <BlockMath math="2\times3=6" />
            </div>

            <div>
              <p className="font-semibold text-white">
                ③ 문자 계산
              </p>

              <BlockMath math="x^2\times x^3=x^5" />
            </div>

            <div className="rounded-lg bg-green-500/10 p-4">
              <p className="font-semibold text-green-300">
                결과
              </p>

              <BlockMath math="-6x^5" />
            </div>

          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/20 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            예시 2
          </h3>

          <BlockMath math="\left(-\frac{2x^2}{3y^3}\right)^3" />

          <div className="mt-6 space-y-5">

            <div>
              <p className="font-semibold text-white">
                ① 부호 계산
              </p>

              <BlockMath math="(-)^3=-" />
            </div>

            <div>
              <p className="font-semibold text-white">
                ② 숫자 계산
              </p>

              <BlockMath math="\left(\frac{2}{3}\right)^3=\frac{8}{27}" />
            </div>

            <div>
              <p className="font-semibold text-white">
                ③ 문자 계산
              </p>

              <BlockMath math="(x^2)^3=x^6" />

              <BlockMath math="(y^3)^3=y^9" />
            </div>

            <div className="rounded-lg bg-green-500/10 p-4">
              <p className="font-semibold text-green-300">
                결과
              </p>

              <BlockMath math="-\frac{8x^6}{27y^9}" />
            </div>

          </div>
        </div>
        <PowerFractionAnimation />
        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            정리
          </h3>

          <ul className="ml-6 list-disc space-y-3 text-gray-300">
            <li>곱셈은 항상 부호 → 숫자 → 문자 순서로 계산한다.</li>
            <li>문자는 같은 문자끼리 계산한다.</li>
            <li>복잡한 식도 세 부분으로 나누어 생각하면 쉽게 계산할 수 있다.</li>
          </ul>
        </div>

        <details className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
            생각해보기
          </summary>

          <div className="mt-5 space-y-4 leading-8 text-gray-300">
            <p>
              학생들은 종종 식 전체를 한 번에 계산하려고 합니다.
            </p>

            <p>
              하지만 대부분의 곱셈은 부호, 숫자, 문자를 각각 계산한 뒤
              결과를 합치는 방식으로 처리할 수 있습니다.
            </p>

            <p>
              다음 단원에서 배우는 지수법칙도 이러한 곱셈의 원칙에서
              자연스럽게 만들어집니다.
            </p>
          </div>
        </details>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.5 지수법칙
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          지수는 같은 문자가 몇 번 곱해졌는지를 나타냅니다.
          따라서 지수법칙은 외워야 할 공식이 아니라,
          곱해진 문자의 개수를 세는 방법입니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            생각해보기 1
          </h3>

          <BlockMath math="x^2 \cdot x^3" />

          <p className="mt-4 leading-8 text-gray-300">
            이 식은 왜 <InlineMath math="x^5" /> 가 될까요?
          </p>

          <div className="mt-5 space-y-3">
            <BlockMath math="x^2 = x \cdot x" />
            <BlockMath math="x^3 = x \cdot x \cdot x" />
            <BlockMath math="x^2 \cdot x^3 = (x \cdot x)(x \cdot x \cdot x)" />
            <BlockMath math="= x \cdot x \cdot x \cdot x \cdot x" />
            <BlockMath math="= x^5" />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            지수법칙 ①
          </h3>

          <BlockMath math="a^m \cdot a^n = a^{m+n}" />

          <p className="mt-4 leading-8 text-gray-300">
            같은 밑끼리 곱하면 지수끼리 더합니다.
            지수는 곱해진 개수를 의미하므로,
            두 묶음의 개수를 합치는 것입니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            생각해보기 2
          </h3>

          <BlockMath math="x^5 \div x^3" />

          <p className="mt-4 leading-8 text-gray-300">
            이 식은 왜 <InlineMath math="x^2" /> 가 될까요?
          </p>

          <div className="mt-5 space-y-3">
            <BlockMath math="x^5 \div x^3 = \frac{x^5}{x^3}" />
            <BlockMath math="= \frac{x \cdot x \cdot x \cdot x \cdot x}{x \cdot x \cdot x}" />
            <BlockMath math="= x^2" />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            지수법칙 ②
          </h3>

          <BlockMath math="a^m \div a^n = a^{m-n}" />

          <p className="mt-4 leading-8 text-gray-300">
            같은 밑끼리 나누면 지수끼리 뺍니다.
            분자와 분모에서 같은 문자를 약분하면 남는 개수를 세는 것입니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            생각해보기 3
          </h3>

          <BlockMath math="(x^2)^3" />

          <p className="mt-4 leading-8 text-gray-300">
            이 식은 <InlineMath math="x^2" /> 이 3번 곱해진 것입니다.
          </p>

          <div className="mt-5 space-y-3">
            <BlockMath math="(x^2)^3 = x^2 \cdot x^2 \cdot x^2" />
            <BlockMath math="= x^{2+2+2}" />
            <BlockMath math="= x^6" />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            지수법칙 ③
          </h3>

          <BlockMath math="(a^m)^n = a^{mn}" />

          <p className="mt-4 leading-8 text-gray-300">
            거듭제곱을 다시 거듭제곱하면 지수끼리 곱합니다.
            이는 <InlineMath math="m" /> 개씩 있는 묶음이{" "}
            <InlineMath math="n" /> 번 반복되기 때문입니다.
          </p>
        </div>

        <details className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
            심화 : 곱 전체에 지수가 붙는 경우
          </summary>

          <div className="mt-5 space-y-5 leading-8 text-gray-300">
            <p>
              괄호 안에 여러 요소가 곱해져 있고, 괄호 전체에 지수가 붙으면
              각각에 지수가 적용됩니다.
            </p>

            <BlockMath math="(ab)^n = a^n b^n" />

            <BlockMath math="\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}" />

            <p>
              예를 들어 다음 식을 생각해봅시다.
            </p>

            <BlockMath math="\left(-\frac{2x^2}{3y^3}\right)^3" />

            <p>
              이 식은 1.4에서 배운 것처럼 부호, 숫자, 문자로 나누어 계산할 수 있습니다.
            </p>

            <div className="rounded-xl bg-black/40 p-5">
              <ul className="space-y-3">
                <li>
                  부호 : <InlineMath math="(-)^3 = -" />
                </li>
                <li>
                  숫자 : <InlineMath math="\left(\frac{2}{3}\right)^3 = \frac{8}{27}" />
                </li>
                <li>
                  문자 : <InlineMath math="(x^2)^3=x^6,\quad (y^3)^3=y^9" />
                </li>
              </ul>
            </div>

            <p>
              따라서
            </p>

            <BlockMath math="\left(-\frac{2x^2}{3y^3}\right)^3 = -\frac{8x^6}{27y^9}" />
          </div>
        </details>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            정리
          </h3>

          <ul className="ml-6 list-disc space-y-3 text-gray-300">
            <li>지수는 같은 문자가 곱해진 개수를 나타냅니다.</li>
            <li>같은 밑끼리 곱하면 지수를 더합니다.</li>
            <li>같은 밑끼리 나누면 지수를 뺍니다.</li>
            <li>거듭제곱을 다시 거듭제곱하면 지수를 곱합니다.</li>
            <li>복잡한 식도 부호, 숫자, 문자로 나누어 계산하면 됩니다.</li>
          </ul>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.6 다항식의 덧셈과 뺄셈
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          다항식의 덧셈과 뺄셈은 동류항끼리 계산합니다.
          이때 실제로 계산하는 것은 문자가 아니라 <strong>계수</strong>입니다.
        </p>

        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            계산의 원칙
          </h3>

          <ul className="ml-6 list-disc space-y-3 text-gray-300">
            <li>
              <strong>동류항</strong>은 주어진 변수에 대하여 같은 문자와 같은 차수를 가진 항입니다.
            </li>
            <li>
              가장 높은 차수부터 차례대로 봅니다.
            </li>
            <li>
              같은 차수의 항끼리 계수만 계산합니다.
            </li>
            <li>
              계산한 결과를 바로 써 내려갑니다.
            </li>
            <li>
              식을 여러 번 다시 쓸 필요는 없습니다.
            </li>
          </ul>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            예시 1 : 숫자 계수의 계산
          </h3>

          <BlockMath math="(3x^2+5x+7)+(2x^2-3x+1)" />

          <p className="mt-4 leading-8 text-gray-300">
            같은 차수의 항끼리 계수만 계산합니다.
          </p>

          <div className="mt-5 space-y-3">
            <BlockMath math="(3+2)x^2+(5-3)x+(7+1)" />
            <BlockMath math="=5x^2+2x+8" />
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            예시 2 : 문자 계수의 계산
          </h3>

          <BlockMath math="(3x^2+5x+7)-(2x^2+3yx-5)+(2x^2-3x+5)" />

          <p className="mt-4 leading-8 text-gray-300">
            이 식을 <InlineMath math="x" />에 대하여 보면, <InlineMath math="3yx" />는 <InlineMath math="(3y)x" />입니다.
            따라서 <InlineMath math="x" />항의 계수에는 문자도 포함될 수 있습니다.
          </p>

          <div className="mt-5 space-y-3">
            <BlockMath math="(3-2+2)x^2+(5-3y-3)x+(7+5+5)" />
            <BlockMath math="=3x^2+(2-3y)x+17" />
          </div>
        </div>

        <LikeTermsAnimation />

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            예시 3 : 필요한 항만 보면서 계산하기
          </h3>

          <BlockMath math="(2x^2+x+1)-(5-3x-x^2+3x^3)" />

          <p className="mt-4 leading-8 text-gray-300">
            식 전체를 여러 번 다시 쓰지 않고, 필요한 차수의 항만 보면서 계산합니다.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-white/15 p-5">
              <p className="mb-3 font-semibold text-white">3차항만 봅니다.</p>
              <BlockMath math="(\quad)-(\quad 3x^3)" />
              <BlockMath math="0-3=-3" />
              <BlockMath math="-3x^3" />
            </div>

            <div className="rounded-xl border border-white/15 p-5">
              <p className="mb-3 font-semibold text-white">2차항만 봅니다.</p>
              <BlockMath math="(2x^2)-(-x^2)" />
              <BlockMath math="2-(-1)=3" />
              <BlockMath math="+3x^2" />
            </div>

            <div className="rounded-xl border border-white/15 p-5">
              <p className="mb-3 font-semibold text-white">1차항만 봅니다.</p>
              <BlockMath math="(x)-(-3x)" />
              <BlockMath math="1-(-3)=4" />
              <BlockMath math="+4x" />
            </div>

            <div className="rounded-xl border border-white/15 p-5">
              <p className="mb-3 font-semibold text-white">상수항만 봅니다.</p>
              <BlockMath math="(1)-(5)" />
              <BlockMath math="1-5=-4" />
              <BlockMath math="-4" />
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-green-500/10 p-4">
            <p className="font-semibold text-green-300">
              따라서
            </p>
            <BlockMath math="-3x^3+3x^2+4x-4" />
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            예시 4 : 괄호를 모두 풀지 않고 계산하기
          </h3>

          <p className="mb-4 leading-8 text-gray-300">
            각 항이 받는 부호만 확인하여 식을 한 줄로 정리합니다.
          </p>

          <BlockMath math="2x-[x^2-\{4x^3+(2x-6+x^2)\}-4x]" />

          <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
            <h4 className="mb-4 text-lg font-bold text-yellow-300">
              부호 추적
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>
                <InlineMath math="4x^3" /> :
                중괄호와 대괄호의 영향을 받아 <InlineMath math="+4x^3" />가 됩니다.
              </li>

              <li>
                첫 번째 <InlineMath math="-x^2" /> :
                대괄호의 영향을 받아 <InlineMath math="-x^2" />가 됩니다.
              </li>

              <li>
                중괄호 안의 <InlineMath math="+x^2" /> :
                중괄호와 대괄호의 영향을 받아 <InlineMath math="+x^2" />가 됩니다.
              </li>

              <li>
                <InlineMath math="+2x" /> :
                중괄호와 대괄호의 영향을 받아 <InlineMath math="+2x" />가 됩니다.
              </li>

              <li>
                <InlineMath math="-6" /> :
                중괄호와 대괄호의 영향을 받아 <InlineMath math="-6" />이 됩니다.
              </li>

              <li>
                <InlineMath math="-4x" /> :
                대괄호의 영향을 받아 <InlineMath math="+4x" />가 됩니다.
              </li>

              <li>
                맨 앞의 <InlineMath math="2x" />는 그대로 유지됩니다.
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="mb-3 font-semibold text-white">
              따라서 한 줄로 정리하면
            </p>

            <BlockMath math="4x^3-x^2+x^2+2x+4x+2x-6" />

            <p className="mt-5 mb-3 font-semibold text-white">
              동류항끼리 계산하면
            </p>

            <BlockMath math="4x^3+8x-6" />
          </div>

          <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
            <h4 className="mb-3 text-lg font-bold text-green-300">
              핵심
            </h4>

            <p className="leading-8 text-gray-300">
              전개는 괄호를 순서대로 푸는 과정이 아닙니다.
              각 항이 받는 부호만 확인하면 식을 여러 번 다시 쓰지 않고도
              한 줄로 정리할 수 있습니다.
            </p>
          </div>
        </div>

        <details className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
            심화 : 객관식에서는 필요한 항만 계산합니다
          </summary>

          <div className="mt-5 space-y-5 leading-8 text-gray-300">
            <p>
              객관식 문제에서는 모든 항을 계산할 필요가 없는 경우가 많습니다.
              보기의 차이점을 먼저 확인하고, 답을 구분할 수 있는 항만 계산합니다.
            </p>

            <BlockMath math="A=3x^2-x+5,\quad B=x^2-2x-3" />

            <p>
              <InlineMath math="A-B" />를 구할 때, 이차항의 계수만 먼저 보면 <InlineMath math="3-1=2" />입니다.
            </p>

            <p>
              일차항의 계수는 <InlineMath math="-1-(-2)=1" />입니다.
            </p>

            <p>
              따라서 보기에서 이차항의 계수가 <InlineMath math="2" />이고,
              일차항의 계수가 <InlineMath math="1" />인 것을 찾으면 됩니다.
              이 경우 상수항까지 계산하지 않아도 답이 결정될 수 있습니다.
            </p>
          </div>
        </details>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            정리
          </h3>

          <ul className="ml-6 list-disc space-y-3 text-gray-300">
            <li>다항식의 덧셈과 뺄셈은 동류항의 계수를 계산하는 과정입니다.</li>
            <li>계수에는 숫자뿐만 아니라 문자가 포함될 수도 있습니다.</li>
            <li>주어진 변수에 대하여 가장 높은 차수부터 차례대로 봅니다.</li>
            <li>필요한 항만 보면 식을 여러 번 다시 쓰지 않고 계산할 수 있습니다.</li>
            <li>객관식에서는 보기의 특징을 보고 필요한 항만 계산할 수 있습니다.</li>
          </ul>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.7 2항의 거듭제곱
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          다항식의 곱셈은 새로운 계산이 아닙니다. 초등학교에서 배운 자연수의 곱셈을
          문자로 표현한 것입니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            초등수학에서 문자로
          </h3>

          <BlockMath math="12 \times 34=(10+2)(30+4)" />

          <p className="mt-4 leading-8 text-gray-300">
            자연수의 곱셈도 각 자리의 수를 나누어 곱한 뒤 더하는 계산입니다.
            다항식의 곱셈도 같은 원리입니다.
          </p>

          <BlockMath math="(x+y)(x+y)" />
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            곱셈의 횟수
          </h3>

          <p className="mb-4 leading-8 text-gray-300">
            2항의 거듭제곱은 각 괄호에서 하나씩 선택하여 곱하는 과정입니다.
          </p>

          <div className="space-y-4">
            <BlockMath math="(x+y)^2=(x+y)(x+y)" />
            <p className="text-gray-300">
              곱셈 결과는 <InlineMath math="2\times2=4" />개입니다.
            </p>

            <BlockMath math="(x+y)^3=(x+y)(x+y)(x+y)" />
            <p className="text-gray-300">
              곱셈 결과는 <InlineMath math="2\times2\times2=8" />개입니다.
            </p>

            <BlockMath math="(x+y)^4=(x+y)(x+y)(x+y)(x+y)" />
            <p className="text-gray-300">
              곱셈 결과는 <InlineMath math="2^4=16" />개입니다.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/20 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            실제 전개되는 항
          </h3>

          <p className="mb-5 leading-8 text-gray-300">
            <InlineMath math="(x+y)^2" />는 4개의 곱셈 결과가 만들어집니다.
          </p>

          <div className="rounded-xl bg-black/40 p-5">
            <BlockMath math="xx+xy+yx+yy" />
            <BlockMath math="=x^2+2xy+y^2" />
          </div>

          <p className="mt-6 mb-5 leading-8 text-gray-300">
            <InlineMath math="(x+y)^3" />는 8개의 곱셈 결과가 만들어집니다.
          </p>

          <div className="rounded-xl bg-black/40 p-5">
            <BlockMath math="xxx+xxy+xyx+xyy+yxx+yxy+yyx+yyy" />
            <BlockMath math="=x^3+3x^2y+3xy^2+y^3" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            여기서 <InlineMath math="xxy, xyx, yxx" />는 모두 같은 동류항입니다.
            따라서 <InlineMath math="3x^2y" />가 됩니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            공식 암기 요령
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="mb-3 text-lg font-bold text-white">
                2항의 제곱
              </h4>

              <BlockMath math="(a+b)^2=a^2+2ab+b^2" />

              <ul className="ml-6 mt-4 list-disc space-y-2 text-gray-300">
                <li>앞항의 제곱입니다.</li>
                <li>뒤항의 제곱입니다.</li>
                <li>눈에 보이는 것을 모두 곱하여 더합니다.</li>
              </ul>

              <BlockMath math="\text{앞}^2+\text{뒤}^2+2\cdot\text{앞}\cdot\text{뒤}" />
            </div>

            <div>
              <h4 className="mb-3 text-lg font-bold text-white">
                2항의 세제곱
              </h4>

              <BlockMath math="(a+b)^3=a^3+b^3+3ab(a+b)" />

              <ul className="ml-6 mt-4 list-disc space-y-2 text-gray-300">
                <li>앞항의 세제곱입니다.</li>
                <li>뒤항의 세제곱입니다.</li>
                <li>눈에 보이는 것을 모두 곱합니다.</li>
                <li>괄호를 한 번 더 복사합니다.</li>
              </ul>

              <BlockMath math="\text{앞}^3+\text{뒤}^3+3\cdot\text{앞}\cdot\text{뒤}\cdot(\text{앞}+\text{뒤})" />
            </div>
          </div>
        </div>

        <details className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
            주요유형 : 3개 중 2개를 알려주고 1개를 찾습니다
          </summary>

          <div className="mt-5 space-y-8 leading-8 text-gray-300">
            <p>
              수학 문제에서는 세 개의 정보 중 두 개를 알려주고 나머지 하나를
              묻는 경우가 많습니다.
            </p>

            <div className="rounded-xl bg-black/40 p-5">
              <h4 className="mb-3 font-bold text-white">
                제곱의 합, 합, 곱
              </h4>

              <BlockMath math="x^2+y^2,\quad x+y,\quad xy" />

              <BlockMath math="(x+y)^2=x^2+y^2+2xy" />

              <p>
                세 식 중 두 개를 알면 나머지 하나를 구할 수 있습니다.
              </p>
            </div>

            <div className="rounded-xl bg-black/40 p-5">
              <h4 className="mb-3 font-bold text-white">
                세제곱의 합, 합, 곱
              </h4>

              <BlockMath math="x^3+y^3,\quad x+y,\quad xy" />

              <BlockMath math="x^3+y^3=(x+y)^3-3xy(x+y)" />

              <p>
                이 식도 세 개 중 두 개를 알면 나머지 하나를 구할 수 있습니다.
              </p>
            </div>

            <div className="rounded-xl bg-black/40 p-5">
              <h4 className="mb-3 font-bold text-white">
                합과 차는 제곱으로 연결됩니다
              </h4>

              <BlockMath math="x+y,\quad x-y,\quad xy" />

              <BlockMath math="(x+y)^2-(x-y)^2=4xy" />

              <p>
                합과 차를 알고 있으면 제곱을 이용하여 곱을 구할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
            <h3 className="mb-4 text-xl font-bold text-yellow-300">
              예제 : 3개 중 2개를 이용하여 나머지 1개를 찾습니다
            </h3>

            <div className="rounded-xl bg-black/40 p-5">
              <h4 className="mb-4 text-lg font-bold text-white">
                예제 1
              </h4>

              <BlockMath math="x+y=5,\quad x^2+y^2=21" />
              <p className="mb-4 text-gray-300">
                일 때, <InlineMath math="x^3+y^3" />의 값을 구합니다.
              </p>

              <details className="rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  풀이 보기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">
                  <p>
                    구하려는 대상은 세제곱의 합입니다.
                    주어진 조건은 합과 제곱의 합이므로, 직접 관련이 있는 식부터 조작합니다.
                  </p>

                  <p>
                    세제곱의 합을 구하려면 <InlineMath math="x+y" />와 <InlineMath math="xy" />가 필요합니다.
                    따라서 먼저 <InlineMath math="xy" />를 구합니다.
                  </p>

                  <BlockMath math="(x+y)^2=x^2+y^2+2xy" />
                  <BlockMath math="5^2=21+2xy" />
                  <BlockMath math="25=21+2xy" />
                  <BlockMath math="xy=2" />

                  <p>
                    이제 <InlineMath math="x+y=5" />, <InlineMath math="xy=2" />를 알게 되었습니다.
                  </p>

                  <BlockMath math="x^3+y^3=(x+y)^3-3xy(x+y)" />
                  <BlockMath math="=5^3-3\cdot2\cdot5" />
                  <BlockMath math="=125-30" />
                  <BlockMath math="=95" />

                  <p className="font-semibold text-white">
                    따라서 답은 <InlineMath math="95" />입니다.
                  </p>
                </div>
              </details>

              <details className="mt-4 rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  별해 : 공식을 잊었을 때 조립하기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">
                  <p>
                    공식을 잊었을 때는 한 문자를 다른 문자로 정리하여 조립합니다.
                  </p>

                  <BlockMath math="x+y=5" />
                  <BlockMath math="y=5-x" />

                  <p>
                    이것을 제곱의 합에 대입합니다.
                  </p>

                  <BlockMath math="x^2+(5-x)^2=21" />
                  <BlockMath math="2x^2-10x+25=21" />
                  <BlockMath math="x^2-5x+2=0" />

                  <p>
                    따라서
                  </p>

                  <BlockMath math="x^2=5x-2" />

                  <p>
                    양변에 <InlineMath math="x" />를 곱하여 세제곱을 만듭니다.
                  </p>

                  <BlockMath math="x^3=5x^2-2x" />
                  <BlockMath math="=5(5x-2)-2x" />
                  <BlockMath math="=23x-10" />

                  <p>
                    같은 방법으로
                  </p>

                  <BlockMath math="y^3=23y-10" />

                  <p>
                    두 식을 더합니다.
                  </p>

                  <BlockMath math="x^3+y^3=23(x+y)-20" />
                  <BlockMath math="=23\cdot5-20" />
                  <BlockMath math="=95" />
                </div>
              </details>
            </div>

            <div className="mt-8 rounded-xl bg-black/40 p-5">
              <h4 className="mb-4 text-lg font-bold text-white">
                예제 2
              </h4>

              <BlockMath math="a+b=1,\quad a^3+b^3=3" />
              <p className="mb-4 text-gray-300">
                일 때, <InlineMath math="a^2+b^2" />의 값을 구합니다.
              </p>

              <details className="rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  풀이 보기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">
                  <p>
                    구하려는 대상은 제곱의 합입니다.
                    제곱의 합은 합과 곱으로 연결됩니다.
                  </p>

                  <BlockMath math="a^2+b^2=(a+b)^2-2ab" />

                  <p>
                    따라서 <InlineMath math="ab" />를 알아야 합니다.
                    두 번째 조건을 이용하기 위해 합을 세제곱합니다.
                  </p>

                  <BlockMath math="a^3+b^3=(a+b)^3-3ab(a+b)" />
                  <BlockMath math="3=1^3-3ab\cdot1" />
                  <BlockMath math="3=1-3ab" />
                  <BlockMath math="ab=-\frac{2}{3}" />

                  <p>
                    이제 제곱의 합을 구합니다.
                  </p>

                  <BlockMath math="a^2+b^2=(a+b)^2-2ab" />
                  <BlockMath math="=1^2-2\left(-\frac{2}{3}\right)" />
                  <BlockMath math="=1+\frac{4}{3}" />
                  <BlockMath math="=\frac{7}{3}" />

                  <p className="font-semibold text-white">
                    따라서 답은 <InlineMath math="\frac{7}{3}" />입니다.
                  </p>
                </div>
              </details>

              <details className="mt-4 rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  별해 : 공식을 잊었을 때 조립하기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">
                  <p>
                    합을 한 문자로 정리합니다.
                  </p>

                  <BlockMath math="a+b=1" />
                  <BlockMath math="b=1-a,\quad a=1-b" />

                  <p>
                    두 번째 식에 각각 대입합니다.
                  </p>

                  <BlockMath math="a^3+(1-a)^3=3" />
                  <BlockMath math="b^3+(1-b)^3=3" />

                  <p>
                    첫 번째 식을 정리합니다.
                  </p>

                  <BlockMath math="a^3+1-3a+3a^2-a^3=3" />
                  <BlockMath math="3a^2-3a-2=0" />

                  <p>
                    두 번째 식도 같은 형태가 됩니다.
                  </p>

                  <BlockMath math="3b^2-3b-2=0" />

                  <p>
                    두 식을 더합니다.
                  </p>

                  <BlockMath math="3(a^2+b^2)-3(a+b)-4=0" />
                  <BlockMath math="3(a^2+b^2)-3-4=0" />
                  <BlockMath math="3(a^2+b^2)=7" />
                  <BlockMath math="a^2+b^2=\frac{7}{3}" />
                </div>
              </details>
            </div>

            <div className="rounded-xl bg-black/40 p-5">
              <h4 className="mb-4 text-lg font-bold text-white">
                예제 3
              </h4>

              <BlockMath math="x+y=5,\quad x^3+y^3=65" />

              <p className="mb-4 text-gray-300">
                일 때, <InlineMath math="x^3-y^3" />
                의 값을 구하여라.
                (단, <InlineMath math="x>y" />)
              </p>

              <details className="rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  풀이 보기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">

                  <p>
                    구하려는 대상은 세제곱의 차입니다.
                    하지만 현재 차에 대한 정보가 없으므로 먼저 <InlineMath math="x-y" />
                    를 구해야 합니다.
                  </p>

                  <p>
                    합과 차는 제곱으로 연결됩니다.
                    따라서 차를 구하려면 먼저 <InlineMath math="xy" />
                    를 알아야 합니다.
                  </p>

                  <BlockMath math="(x+y)^2=(x-y)^2+4xy" />

                  <p>
                    주어진 조건에 세제곱의 합이 있으므로 이를 이용하여 <InlineMath math="xy" />
                    를 구합니다.
                  </p>

                  <BlockMath math="x^3+y^3=(x+y)^3-3xy(x+y)" />

                  <BlockMath math="65=5^3-3xy\cdot5" />

                  <BlockMath math="65=125-15xy" />

                  <BlockMath math="xy=4" />

                  <p>
                    이제 합과 곱을 이용하여 차를 구합니다.
                  </p>

                  <BlockMath math="(x-y)^2=(x+y)^2-4xy" />

                  <BlockMath math="=25-16" />

                  <BlockMath math="=9" />

                  <BlockMath math="x-y=3" />

                  <p>
                    (단, <InlineMath math="x>y" /> 이므로 양수)
                  </p>

                  <p>
                    세제곱의 차 공식을 이용합니다.
                  </p>

                  <BlockMath math="x^3-y^3=(x-y)(x^2+xy+y^2)" />

                  <BlockMath math="x^2+y^2=(x+y)^2-2xy" />

                  <BlockMath math="=25-8" />

                  <BlockMath math="=17" />

                  <BlockMath math="x^2+xy+y^2=17+4=21" />

                  <BlockMath math="x^3-y^3=3\times21" />

                  <BlockMath math="=63" />

                  <p className="font-semibold text-white">
                    따라서 답은 <InlineMath math="63" />
                    입니다.
                  </p>

                </div>
              </details>

              <details className="mt-4 rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  별해 : 합과 차를 이용한 연립방정식
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">

                  <p>
                    앞의 풀이에서
                  </p>

                  <BlockMath math="x+y=5" />

                  <BlockMath math="x-y=3" />

                  <p>
                    를 얻었습니다.
                  </p>

                  <p>
                    두 식을 더하면
                  </p>

                  <BlockMath math="2x=8" />

                  <BlockMath math="x=4" />

                  <p>
                    두 식을 빼면
                  </p>

                  <BlockMath math="2y=2" />

                  <BlockMath math="y=1" />

                  <p>
                    따라서
                  </p>

                  <BlockMath math="x^3-y^3=4^3-1^3" />

                  <BlockMath math="=64-1" />

                  <BlockMath math="=63" />

                  <p className="font-semibold text-white">
                    따라서 답은 <InlineMath math="63" />
                    입니다.
                  </p>

                </div>
              </details>
            </div>

            <div className="rounded-xl bg-black/40 p-5">
              <h4 className="mb-4 text-lg font-bold text-white">
                예제 4
              </h4>

              <BlockMath math="x+y-2=0,\quad x^3+y^3+10=0" />

              <p className="mb-4 text-gray-300">
                일 때, <InlineMath math="x^5+y^5" />의 값을 구하여라.
              </p>

              <details className="rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  풀이 보기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">
                  <p>
                    구하려는 대상은 다섯제곱의 합입니다.
                    하지만 <InlineMath math="(x+y)^5" />를 전개하여 32개의 항을 모두 계산할 필요는 없습니다.
                  </p>

                  <p>
                    <InlineMath math="5=3+2" />이므로 세제곱의 합과 제곱의 합을 곱해서
                    다섯제곱의 합을 만들 수 있습니다.
                  </p>

                  <BlockMath math="(x^3+y^3)(x^2+y^2)" />
                  <BlockMath math="=x^5+x^3y^2+x^2y^3+y^5" />
                  <BlockMath math="=x^5+y^5+x^2y^2(x+y)" />

                  <p>
                    따라서
                  </p>

                  <BlockMath math="x^5+y^5=(x^3+y^3)(x^2+y^2)-x^2y^2(x+y)" />

                  <p>
                    주어진 조건에서
                  </p>

                  <BlockMath math="x+y=2" />
                  <BlockMath math="x^3+y^3=-10" />

                  <p>
                    이제 <InlineMath math="x^2+y^2" />와 <InlineMath math="xy" />를 구해야 합니다.
                  </p>

                  <p>
                    먼저 세제곱의 합을 이용하여 곱을 구합니다.
                  </p>

                  <BlockMath math="x^3+y^3=(x+y)^3-3xy(x+y)" />
                  <BlockMath math="-10=2^3-3xy\cdot2" />
                  <BlockMath math="-10=8-6xy" />
                  <BlockMath math="xy=3" />

                  <p>
                    이제 제곱의 합을 구합니다.
                  </p>

                  <BlockMath math="x^2+y^2=(x+y)^2-2xy" />
                  <BlockMath math="=2^2-2\cdot3" />
                  <BlockMath math="=4-6" />
                  <BlockMath math="=-2" />

                  <p>
                    필요한 값을 모두 구했으므로 대입합니다.
                  </p>

                  <BlockMath math="x^5+y^5=(x^3+y^3)(x^2+y^2)-x^2y^2(x+y)" />
                  <BlockMath math="=(-10)(-2)-3^2\cdot2" />
                  <BlockMath math="=20-18" />
                  <BlockMath math="=2" />

                  <p className="font-semibold text-white">
                    따라서 답은 <InlineMath math="2" />입니다.
                  </p>
                </div>
              </details>
            </div>

            <div className="rounded-xl bg-black/40 p-5">
              <h4 className="mb-4 text-lg font-bold text-white">
                예제 5
              </h4>

              <BlockMath math="a+b=2,\quad ab=1" />
              <BlockMath math="x+y=-1,\quad xy=2" />

              <p className="mt-3 text-gray-300">
                그리고
              </p>

              <BlockMath math="m=ax+by,\quad n=bx+ay" />

              <p className="mb-4 text-gray-300">
                일 때, <InlineMath math="m^3+n^3" />
                의 값을 구하여라.
              </p>

              <details className="rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  풀이 보기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">

                  <p>
                    구하려는 대상은 세제곱의 합입니다.
                  </p>

                  <BlockMath math="m^3+n^3=(m+n)^3-3mn(m+n)" />

                  <p>
                    따라서 먼저 <InlineMath math="m+n" />
                    과 <InlineMath math="mn" />
                    을 구합니다.
                  </p>

                  <h5 className="font-semibold text-white">
                    ① 합 구하기
                  </h5>

                  <BlockMath math="m+n=(ax+by)+(bx+ay)" />

                  <BlockMath math="=(a+b)(x+y)" />

                  <BlockMath math="=2\cdot(-1)" />

                  <BlockMath math="=-2" />

                  <h5 className="font-semibold text-white">
                    ② 곱 구하기
                  </h5>

                  <BlockMath math="mn=(ax+by)(bx+ay)" />

                  <BlockMath math="=ab(x^2+y^2)+(a^2+b^2)xy" />

                  <p>
                    먼저 <InlineMath math="a^2+b^2" />
                    를 구합니다.
                  </p>

                  <BlockMath math="a^2+b^2=(a+b)^2-2ab" />

                  <BlockMath math="=2^2-2\cdot1" />

                  <BlockMath math="=2" />

                  <p>
                    다음으로 <InlineMath math="x^2+y^2" />
                    를 구합니다.
                  </p>

                  <BlockMath math="x^2+y^2=(x+y)^2-2xy" />

                  <BlockMath math="=(-1)^2-2\cdot2" />

                  <BlockMath math="=-3" />

                  <p>
                    이를 대입하면
                  </p>

                  <BlockMath math="mn=1\cdot(-3)+2\cdot2" />

                  <BlockMath math="=1" />

                  <h5 className="font-semibold text-white">
                    ③ 세제곱의 합 구하기
                  </h5>

                  <BlockMath math="m^3+n^3=(m+n)^3-3mn(m+n)" />

                  <BlockMath math="=(-2)^3-3\cdot1\cdot(-2)" />

                  <BlockMath math="=-8+6" />

                  <BlockMath math="=-2" />

                  <p className="font-semibold text-white">
                    따라서 답은 <InlineMath math="-2" />
                    입니다.
                  </p>

                </div>
              </details>

              <details className="mt-4 rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  별해 : 숫자 감각으로 보기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">

                  <p>
                    주어진 조건에서
                  </p>

                  <BlockMath math="a+b=2,\quad ab=1" />

                  <p>
                    두 수의 합이 2이고 곱이 1이므로
                  </p>

                  <BlockMath math="a=b=1" />

                  <p>
                    따라서
                  </p>

                  <BlockMath math="m=ax+by=x+y" />

                  <BlockMath math="n=bx+ay=x+y" />

                  <p>
                    또
                  </p>

                  <BlockMath math="x+y=-1" />

                  <p>
                    이므로
                  </p>

                  <BlockMath math="m=n=-1" />

                  <BlockMath math="m^3+n^3=(-1)^3+(-1)^3" />

                  <BlockMath math="=-2" />

                  <p className="font-semibold text-white">
                    따라서 답은 <InlineMath math="-2" />
                    입니다.
                  </p>

                </div>
              </details>

              <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                <h5 className="mb-2 font-semibold text-green-300">
                  수학적 사고
                </h5>

                <p className="text-gray-300">
                  복잡한 식을 보면 바로 전개하려고 하지 말고,
                  먼저 구하려는 대상이 무엇인지 확인합니다.
                </p>

                <BlockMath math="m^3+n^3" />

                <p className="text-gray-300">
                  세제곱의 합은 합과 곱으로 연결되므로
                </p>

                <BlockMath math="m+n,\quad mn" />

                <p className="text-gray-300">
                  을 먼저 찾는 것이 효율적인 방법입니다.
                </p>
              </div>
            </div>
          </div>
        </details>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            정리
          </h3>

          <ul className="ml-6 list-disc space-y-3 text-gray-300">
            <li>2항의 거듭제곱은 각 괄호에서 하나씩 선택하여 곱하는 과정입니다.</li>
            <li>곱셈 결과를 동류항끼리 정리하면 전개공식이 됩니다.</li>
            <li>공식은 암기해야 하지만, 잊어버렸을 때 다시 조립할 수 있어야 합니다.</li>
            <li>수학은 이해한 후에 익숙해져야 합니다.</li>
            <li>이해만 하고 익숙해지지 않으면 계산이 느려지고, 암기만 하고 이해하지 못하면 쉽게 잊어버립니다.</li>
          </ul>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.8 다항의 제곱
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          다항의 제곱도 새로운 계산이 아닙니다. 초등학교에서 배운
          두 자리 수 곱셈, 세 자리 수 곱셈, 네 자리 수 곱셈을
          문자로 확장한 것입니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            곱셈의 횟수
          </h3>

          <p className="leading-8 text-gray-300">
            항이 2개인 식의 제곱은 <InlineMath math="2\times2=4" />번,
            항이 3개인 식의 제곱은 <InlineMath math="3\times3=9" />번,
            항이 4개인 식의 제곱은 <InlineMath math="4\times4=16" />번의
            곱셈을 합니다.
          </p>

          <div className="mt-5 space-y-3">
            <BlockMath math="(a+b)^2 \rightarrow 4\text{번}" />
            <BlockMath math="(a+b+c)^2 \rightarrow 9\text{번}" />
            <BlockMath math="(a+b+c+d)^2 \rightarrow 16\text{번}" />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            표로 보는 다항의 제곱
          </h3>

          <p className="mb-5 leading-8 text-gray-300">
            <InlineMath math="(a+b+c+d)^2" />는 <InlineMath math="(a+b+c+d)(a+b+c+d)" />입니다.
            이를 표로 나타내면 다음과 같습니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-center text-gray-200">
              <thead>
                <tr>
                  <th className="border border-white/30 p-3"><InlineMath math="\times" /></th>
                  <th className="border border-white/30 p-3"><InlineMath math="a" /></th>
                  <th className="border border-white/30 p-3"><InlineMath math="b" /></th>
                  <th className="border border-white/30 p-3"><InlineMath math="c" /></th>
                  <th className="border border-white/30 p-3"><InlineMath math="d" /></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-white/30 p-3"><InlineMath math="a" /></th>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="a^2" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="ab" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="ac" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="ad" />
                  </td>
                </tr>
                <tr>
                  <th className="border border-white/30 p-3"><InlineMath math="b" /></th>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="ab" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="b^2" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="bc" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="bd" />
                  </td>
                </tr>
                <tr>
                  <th className="border border-white/30 p-3"><InlineMath math="c" /></th>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="ac" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="bc" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="c^2" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="cd" />
                  </td>
                </tr>
                <tr>
                  <th className="border border-white/30 p-3"><InlineMath math="d" /></th>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="ad" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="bd" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="cd" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="d^2" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            표를 보면 주대각선에는 각 항의 제곱이 놓이고,
            나머지 항들은 서로 대칭으로 두 번씩 나타납니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            3항의 제곱
          </h3>

          <p className="mb-5 leading-8 text-gray-300">
            <InlineMath math="(a+b+c)^2" />에서는 <InlineMath math="a^2,b^2,c^2" />가 한 번씩 나오고, <InlineMath math="ab,bc,ca" />가 두 번씩 나옵니다.
          </p>

          <BlockMath math="(a+b+c)^2" />
          <BlockMath math="=a^2+b^2+c^2+2(ab+bc+ca)" />
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            4항의 제곱
          </h3>

          <p className="mb-5 leading-8 text-gray-300">
            <InlineMath math="(a+b+c+d)^2" />에서도 구조는 같습니다.
            각 항의 제곱은 한 번씩 나오고, 서로 다른 두 항의 곱은 두 번씩 나옵니다.
          </p>

          <BlockMath math="(a+b+c+d)^2" />
          <BlockMath math="=a^2+b^2+c^2+d^2+2(ab+ac+ad+bc+bd+cd)" />
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            구조
          </h3>

          <p className="leading-8 text-gray-300">
            다항의 제곱은 항상 다음 구조를 가집니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <p className="leading-8 text-gray-300">
              각 항의 제곱을 모두 더합니다.
            </p>
            <p className="leading-8 text-gray-300">
              서로 다른 두 항의 곱을 모두 구한 뒤 2배하여 더합니다.
            </p>
          </div>

          <BlockMath math="\text{다항의 제곱}=\text{각 항의 제곱의 합}+2\times\text{서로 다른 두 항의 곱의 합}" />
        </div>

        <details className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
            심화 : 세 수의 합, 제곱의 합, 두 수씩 곱한 값의 합
          </summary>

          <div className="mt-5 space-y-5 text-gray-300">

            <p className="leading-8">
              다음 세 식은 하나의 묶음으로 생각합니다.
            </p>

            <div className="rounded-xl bg-black/40 p-5">
              <BlockMath math="x+y+z" />
              <BlockMath math="x^2+y^2+z^2" />
              <BlockMath math="xy+yz+zx" />
            </div>

            <p className="leading-8">
              이 세 식은 삼항의 제곱을 이용하여 연결됩니다.
            </p>

            <BlockMath math="(x+y+z)^2=x^2+y^2+z^2+2(xy+yz+zx)" />

            <p className="leading-8">
              따라서 세 식 중 두 개를 알면 나머지 하나를 구할 수 있습니다.
            </p>

            <div className="rounded-xl border border-white/15 p-5">
              <h4 className="mb-3 text-lg font-bold text-white">
                예제 1
              </h4>

              <BlockMath math="x+y+z=6" />
              <BlockMath math="xy+yz+zx=11" />

              <p className="mt-3">
                일 때, <InlineMath math="x^2+y^2+z^2" />
                의 값을 구하여라.
              </p>

              <details className="mt-4 rounded-xl border border-white/15 p-5">
                <summary className="cursor-pointer font-semibold text-yellow-300">
                  풀이 보기
                </summary>

                <div className="mt-5 space-y-5">

                  <p>
                    주어진 식은 세 수의 합과 두 수씩 곱한 값의 합입니다.
                  </p>

                  <p>
                    구하려는 대상은 제곱의 합이므로 삼항의 제곱을 이용합니다.
                  </p>

                  <BlockMath math="(x+y+z)^2=x^2+y^2+z^2+2(xy+yz+zx)" />

                  <BlockMath math="6^2=x^2+y^2+z^2+2\cdot11" />

                  <BlockMath math="36=x^2+y^2+z^2+22" />

                  <BlockMath math="x^2+y^2+z^2=14" />

                  <p className="font-semibold text-white">
                    따라서 답은
                    <InlineMath math="14" />
                    입니다.
                  </p>

                </div>
              </details>
            </div>

            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
              <h4 className="mb-3 text-lg font-bold text-green-300">
                수학적 사고
              </h4>

              <p className="leading-8">
                다음 세 식은 하나의 묶음입니다.
              </p>

              <BlockMath math="x+y+z" />
              <BlockMath math="x^2+y^2+z^2" />
              <BlockMath math="xy+yz+zx" />

              <p className="leading-8">
                세 식 중 두 개를 알면 나머지 하나를 구할 수 있습니다.
              </p>

              <p className="leading-8">
                이 묶음은 이후에 배우는 세제곱의 합, 대칭식, <InlineMath math="x+y+z,\;xy+yz+zx,\;xyz" />
                와도 연결됩니다.
              </p>

            </div>

          </div>
        </details>

        <div className="mt-8 rounded-xl border border-white/20 p-5">
          <h3 className="mb-4 text-xl font-bold">
            정리
          </h3>

          <ul className="ml-6 list-disc space-y-3 text-gray-300">
            <li>다항의 제곱은 초등학교에서 배운 곱셈을 문자로 확장한 것입니다.</li>
            <li>항이 3개이면 9번, 항이 4개이면 16번의 곱셈이 생깁니다.</li>
            <li>표로 나타내면 같은 항이 대칭으로 두 번씩 나타나는 것을 볼 수 있습니다.</li>
            <li>각 항의 제곱은 한 번씩, 서로 다른 두 항의 곱은 두 번씩 더합니다.</li>
            <li>계수가 모두 1인 경우 계수의 합은 곱셈의 횟수와 같습니다.</li>
          </ul>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-2 text-3xl font-bold">
          1.9 세 수의 합과 제곱의 합의 변형
        </h2>

        <div className="text-center text-3xl">
          <BlockMath math="a+b+c,\ a^2+b^2+c^2,\ ab+bc+ca" />
        </div>

        <p className="mb-6 leading-8 text-gray-300">
          세 문자에서 자주 등장하는 식은 세 수의 합, 제곱의 합, 두 수씩 곱한 값의 합입니다.
          이 세 식은 하나의 묶음으로 생각할 수 있습니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">삼항제곱의 전개식</h3>

          <BlockMath math="(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서 다음 세 식 중 두 개를 알면 나머지 하나를 구할 수 있습니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="a+b+c" />
            <BlockMath math="a^2+b^2+c^2" />
            <BlockMath math="ab+bc+ca" />
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            삼항제곱식의 변형
          </h3>

          <BlockMath math="a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)" />

          <BlockMath math="ab+bc+ca=\frac{(a+b+c)^2-(a^2+b^2+c^2)}{2}" />
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            중요한 구조
          </h3>

          <p className="mb-5 leading-8 text-gray-300">
            다음 식은 세 개의 완전제곱식의 합으로 바꿀 수 있습니다.
          </p>

          <BlockMath math="a^2+b^2+c^2-ab-bc-ca" />

          <BlockMath math="=\frac12\left\{(a-b)^2+(b-c)^2+(c-a)^2\right\}" />

          <p className="mt-5 leading-8 text-gray-300">
            제곱은 항상 0 이상이므로 이 식은 항상 0 이상입니다.
          </p>

          <BlockMath math="a^2+b^2+c^2-ab-bc-ca\ge 0" />
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            0이 되는 경우
          </h3>

          <p className="mb-5 leading-8 text-gray-300">
            특히 다음 식이 0이면 세 개의 완전제곱식이 모두 0이어야 합니다.
          </p>

          <BlockMath math="a^2+b^2+c^2-ab-bc-ca=0" />

          <BlockMath math="\frac12\left\{(a-b)^2+(b-c)^2+(c-a)^2\right\}=0" />

          <BlockMath math="a-b=0,\quad b-c=0,\quad c-a=0" />

          <BlockMath math="a=b=c" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서 다음 세 조건은 서로 동치입니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="a^2+b^2+c^2-ab-bc-ca=0" />
            <BlockMath math="a^2+b^2+c^2=ab+bc+ca" />
            <BlockMath math="a=b=c" />
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">
            예제 1
          </h3>

          <p className="mb-4 leading-8 text-gray-300">
            모서리의 길이의 합이 88이고, 대각선의 길이가 14인 직육면체의 겉넓이를 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                직육면체의 가로, 세로, 높이를 각각 <InlineMath math="a,b,c" />라 합니다.
              </p>

              <BlockMath math="4(a+b+c)=88" />
              <BlockMath math="a+b+c=22" />

              <p>대각선의 길이가 14이므로</p>

              <BlockMath math="a^2+b^2+c^2=14^2=196" />

              <p>삼항제곱식을 이용합니다.</p>

              <BlockMath math="(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)" />

              <BlockMath math="22^2=196+2(ab+bc+ca)" />
              <BlockMath math="484=196+2(ab+bc+ca)" />
              <BlockMath math="ab+bc+ca=144" />

              <p>직육면체의 겉넓이는</p>

              <BlockMath math="2(ab+bc+ca)=288" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="288" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">
            예제 2
          </h3>

          <BlockMath math="a+b+c=4,\quad ab+bc+ca=9,\quad abc=3" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="a^2b^2+b^2c^2+c^2a^2" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                구하려는 식은 두 수씩 곱한 값들의 제곱의 합입니다.
                따라서 <InlineMath math="ab+bc+ca" />를 제곱합니다.
              </p>

              <BlockMath math="(ab+bc+ca)^2" />
              <BlockMath math="=a^2b^2+b^2c^2+c^2a^2+2abc(a+b+c)" />

              <p>주어진 값을 대입합니다.</p>

              <BlockMath math="9^2=a^2b^2+b^2c^2+c^2a^2+2\cdot3\cdot4" />

              <BlockMath math="81=a^2b^2+b^2c^2+c^2a^2+24" />

              <BlockMath math="a^2b^2+b^2c^2+c^2a^2=57" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="57" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">
            예제 3
          </h3>

          <BlockMath math="a-b=2+\sqrt3,\quad b-c=2-\sqrt3" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="a^2+b^2+c^2-ab-bc-ca" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>중요한 구조를 이용합니다.</p>

              <BlockMath math="a^2+b^2+c^2-ab-bc-ca" />
              <BlockMath math="=\frac12\left\{(a-b)^2+(b-c)^2+(c-a)^2\right\}" />

              <p>먼저</p>

              <BlockMath math="c-a=-(a-c)=-\{(a-b)+(b-c)\}" />

              <BlockMath math="=-(2+\sqrt3+2-\sqrt3)" />

              <BlockMath math="-4" />

              <p>따라서</p>

              <BlockMath math="a^2+b^2+c^2-ab-bc-ca" />
              <BlockMath math="=\frac12\left\{(2+\sqrt3)^2+(2-\sqrt3)^2+(-4)^2\right\}" />

              <BlockMath math="=\frac12\{(7+4\sqrt3)+(7-4\sqrt3)+16\}" />

              <BlockMath math="=\frac12\cdot30" />

              <BlockMath math="=15" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="15" />입니다.
              </p>
            </div>
          </details>

          <details className="mt-4 rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              별해 : 식의 개수와 문자의 개수 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                주어진 식은 2개이고 문자는 3개입니다.
                따라서 한 문자를 편하게 정할 수 있습니다.
              </p>

              <p>
                <InlineMath math="b=0" />으로 두면
              </p>

              <BlockMath math="a=2+\sqrt3,\quad c=-2+\sqrt3" />

              <p>이를 대입하여 계산해도 같은 값을 얻습니다.</p>

              <BlockMath math="a^2+b^2+c^2-ab-bc-ca" />
              <BlockMath math="=(2+\sqrt3)^2+0+(-2+\sqrt3)^2" />

              <BlockMath math="=(7+4\sqrt3)+(7-4\sqrt3)" />

              <BlockMath math="=14" />

              <p className="text-red-300">
                여기서 주의해야 합니다. 별해에서 단순 대입만 하면 원래 식의 모든 항을 정확히 확인해야 합니다.
                이 문제는 완전제곱식 구조로 푸는 풀이가 더 안전합니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">
            예제 4
          </h3>

          <BlockMath math="a^2+b^2+c^2=ab+bc+ca,\quad abc=2" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="ab^2c^3" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                주어진 조건 <InlineMath math="a^2+b^2+c^2=ab+bc+ca" />
                는 세 수가 모두 같다는 뜻입니다.
              </p>

              <BlockMath math="a=b=c" />

              <p>
                하지만 이 문제에서는 실제로 각각의 값을 구할 필요가 없습니다.
              </p>

              <BlockMath math="ab^2c^3=a^6" />

              <BlockMath math="=2^2" />

              <BlockMath math="=4" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="4" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">
            예제 5
          </h3>

          <BlockMath math="a^2+b^2+c^2=1,\quad a+b+c=\sqrt3" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="abc" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                합을 제곱하여 두 수씩 곱한 값의 합을 구합니다.
              </p>

              <BlockMath math="(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)" />

              <BlockMath math="(\sqrt3)^2=1+2(ab+bc+ca)" />

              <BlockMath math="3=1+2(ab+bc+ca)" />

              <BlockMath math="ab+bc+ca=1" />

              <p>
                따라서
              </p>

              <BlockMath math="a^2+b^2+c^2=ab+bc+ca" />

              <p>
                이므로
              </p>

              <BlockMath math="a=b=c" />

              <p>
                <InlineMath math="a=b=c=t" />라고 두면
              </p>

              <BlockMath math="3t^2=1" />

              <BlockMath math="t=\frac1{\sqrt3}" />

              <p>
                따라서
              </p>

              <BlockMath math="abc=t^3=\left(\frac1{\sqrt3}\right)^3" />

              <BlockMath math="=\frac{\sqrt3}{9}" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="\frac{\sqrt3}{9}" />입니다.
              </p>
            </div>
          </details>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.10 세 수의 세제곱의 합과 전개구조
        </h2>

        <BlockMath math="(a+b+c)(a^2+b^2+c^2-ab-bc-ca)" />

        <p className="mb-6 leading-8 text-gray-300">
          1.9에서 우리는 세 수의 합, 제곱의 합, 두 수씩 곱한 값의 합을 하나의 묶음으로 보았습니다.
          이번에는 이 묶음이 세제곱의 합과 어떻게 연결되는지 살펴봅니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            핵심 전개식
          </h3>

          <BlockMath math="(a+b+c)(a^2+b^2+c^2-ab-bc-ca)" />
          <BlockMath math="=a^3+b^3+c^3-3abc" />

          <p className="mt-5 leading-8 text-gray-300">
            좌변에는 <InlineMath math="a+b+c" />, <InlineMath math="a^2+b^2+c^2" />, <InlineMath math="ab+bc+ca" />
            가 들어 있습니다.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            우변에는 <InlineMath math="a^3+b^3+c^3" />
            와 <InlineMath math="abc" />
            가 들어 있습니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            구조의 이해
          </h3>

          <p className="leading-8 text-gray-300">
            이 식은 다섯 개의 대상으로 이루어진 것처럼 보입니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="a+b+c" />
            <BlockMath math="a^2+b^2+c^2" />
            <BlockMath math="ab+bc+ca" />
            <BlockMath math="a^3+b^3+c^3" />
            <BlockMath math="abc" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            하지만 좌변의 세 대상은 1.9에서 배운 것처럼 세 개 중 두 개만 알면 나머지 하나를 구할 수 있습니다.
            따라서 실제 문제에서는 네 개를 모두 주지 않고, 보통 세 개의 조건만 주어도 나머지를 찾을 수 있습니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            0이 되는 경우
          </h3>

          <BlockMath math="a^3+b^3+c^3-3abc=0" />

          <p className="mt-5 leading-8 text-gray-300">
            위 식은 다음과 같이 인수분해됩니다.
          </p>

          <BlockMath math="a^3+b^3+c^3-3abc" />
          <BlockMath math="=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서 이 식이 0이 되려면 다음 둘 중 하나가 성립해야 합니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="a+b+c=0" />
            <BlockMath math="\text{또는}" />
            <BlockMath math="a^2+b^2+c^2-ab-bc-ca=0" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            그런데 1.9에서 <InlineMath math="a^2+b^2+c^2-ab-bc-ca=0" />
            은 <InlineMath math="a=b=c" />
            와 동치임을 배웠습니다.
          </p>

          <BlockMath math="a^3+b^3+c^3=3abc" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서 <InlineMath math="a^3+b^3+c^3=3abc" />
            는 <InlineMath math="a+b+c=0" />
            이거나 <InlineMath math="a=b=c" />
            일 때 성립합니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            자주 사용하는 형태
          </h3>

          <p className="leading-8 text-gray-300">
            특히 세제곱의 밑의 합이 0이면 다음 식을 바로 사용할 수 있습니다.
          </p>

          <BlockMath math="a+b+c=0" />
          <BlockMath math="\Rightarrow a^3+b^3+c^3=3abc" />
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

          <BlockMath math="a+b+c=5,\quad ab+bc+ca=2,\quad abc=-8" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="a^3+b^3+c^3" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                구하려는 대상은 세제곱의 합입니다.
                핵심 전개식을 이용합니다.
              </p>

              <BlockMath math="a^3+b^3+c^3-3abc" />
              <BlockMath math="=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)" />

              <p>
                먼저 <InlineMath math="a^2+b^2+c^2" />
                를 구하기 위해 합을 제곱합니다.
              </p>

              <BlockMath math="(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)" />
              <BlockMath math="5^2=a^2+b^2+c^2+2\cdot2" />
              <BlockMath math="a^2+b^2+c^2=21" />

              <p>
                따라서
              </p>

              <BlockMath math="a^2+b^2+c^2-ab-bc-ca=21-2=19" />

              <BlockMath math="a^3+b^3+c^3-3abc=5\cdot19=95" />

              <BlockMath math="abc=-8" />
              <BlockMath math="3abc=-24" />

              <BlockMath math="a^3+b^3+c^3=95+3abc" />
              <BlockMath math="=95-24" />
              <BlockMath math="=71" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="71" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

          <BlockMath math="a+b+c=\sqrt6,\quad a^2+b^2+c^2=ab+bc+ca" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="a^3+b^3+c^3" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                주어진 조건 <InlineMath math="a^2+b^2+c^2=ab+bc+ca" />
                는 세 수가 모두 같다는 뜻입니다. 1.9에서 배운 결과를 사용합니다.
              </p>

              <BlockMath math="a=b=c" />

              <p>
                <InlineMath math="a=b=c=t" />라고 두면
              </p>

              <BlockMath math="3t=\sqrt6" />
              <BlockMath math="t=\frac{\sqrt6}{3}" />

              <p>
                따라서
              </p>

              <BlockMath math="a^3+b^3+c^3=3t^3" />
              <BlockMath math="=3\left(\frac{\sqrt6}{3}\right)^3" />
              <BlockMath math="=\frac{2\sqrt6}{3}" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="\frac{2\sqrt6}{3}" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

          <BlockMath math="x+y+z=0,\quad xy+yz+zx=1,\quad xyz=2" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="x^3+y^3+z^3" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                세제곱의 밑의 합이 0입니다.
              </p>

              <BlockMath math="x+y+z=0" />

              <p>
                따라서 다음 식을 바로 사용할 수 있습니다.
              </p>

              <BlockMath math="x^3+y^3+z^3=3xyz" />

              <BlockMath math="=3\cdot2" />
              <BlockMath math="=6" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="6" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

          <BlockMath math="a+b+c=0" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="\frac{a^3+b^3+c^3}{abc}" />
            의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                세제곱의 밑의 합이 0이므로
              </p>

              <BlockMath math="a^3+b^3+c^3=3abc" />

              <p>
                따라서
              </p>

              <BlockMath math="\frac{a^3+b^3+c^3}{abc}" />
              <BlockMath math="=\frac{3abc}{abc}" />
              <BlockMath math="=3" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="3" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

          <p className="mb-4 text-gray-300">
            세 변의 길이가 <InlineMath math="a,b,c" />인 삼각형에 대하여
          </p>

          <BlockMath math="a^3+b^3+c^3=3abc" />

          <p className="mb-4 text-gray-300">
            가 성립할 때, 삼각형의 모양을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                주어진 식은 다음과 같습니다.
              </p>

              <BlockMath math="a^3+b^3+c^3-3abc=0" />

              <BlockMath math="(a+b+c)(a^2+b^2+c^2-ab-bc-ca)=0" />

              <p>
                삼각형의 세 변의 길이는 양수이므로 <InlineMath math="a+b+c=0" />
                은 될 수 없습니다.
              </p>

              <p>
                따라서
              </p>

              <BlockMath math="a^2+b^2+c^2-ab-bc-ca=0" />

              <p>
                이고, 1.9에서 배운 것처럼
              </p>

              <BlockMath math="a=b=c" />

              <p className="font-semibold text-white">
                따라서 삼각형은 정삼각형입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

          <p className="mb-4 text-gray-300">
            0이 아닌 서로 다른 세 실수 <InlineMath math="a,b,c" />
            에 대하여
          </p>

          <BlockMath math="a^3+b^3+c^3-3abc=0" />

          <p className="mb-4 text-gray-300">
            이 성립할 때, <InlineMath math="\frac{(a+b)(b+c)(c+a)}{abc}" />
            의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                주어진 식은 다음과 같이 인수분해됩니다.
              </p>

              <BlockMath math="a^3+b^3+c^3-3abc" />
              <BlockMath math="=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)" />

              <p>
                그런데 <InlineMath math="a,b,c" />
                는 서로 다른 세 실수이므로 <InlineMath math="a=b=c" />
                는 될 수 없습니다.
              </p>

              <p>
                따라서
              </p>

              <BlockMath math="a+b+c=0" />

              <p>
                그러면
              </p>

              <BlockMath math="a+b=-c,\quad b+c=-a,\quad c+a=-b" />

              <p>
                따라서
              </p>

              <BlockMath math="(a+b)(b+c)(c+a)" />
              <BlockMath math="=(-c)(-a)(-b)" />
              <BlockMath math="-abc" />

              <BlockMath math="\frac{(a+b)(b+c)(c+a)}{abc}" />
              <BlockMath math="=\frac{-abc}{abc}" />
              <BlockMath math="-1" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="-1" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

          <p className="mb-4 text-gray-300">
            0이 아닌 세 수의 합이 0이고, 역수의 합이 <InlineMath math="\frac32" />
            이며, 제곱의 합이 <InlineMath math="10" />
            일 때, 세 수의 세제곱의 합을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                세 수를 <InlineMath math="a,b,c" />
                라고 합니다.
              </p>

              <BlockMath math="a+b+c=0" />

              <p>
                구하려는 대상은 <InlineMath math="a^3+b^3+c^3" />
                입니다.
              </p>

              <p>
                세제곱의 밑의 합이 0이므로
              </p>

              <BlockMath math="a^3+b^3+c^3=3abc" />

              <p>
                따라서 <InlineMath math="abc" />
                를 구하면 됩니다.
              </p>

              <p>
                역수의 합을 정리하면
              </p>

              <BlockMath math="\frac1a+\frac1b+\frac1c=\frac{ab+bc+ca}{abc}" />

              <BlockMath math="\frac{ab+bc+ca}{abc}=\frac32" />

              <p>
                이제 <InlineMath math="ab+bc+ca" />
                를 구합니다.
              </p>

              <BlockMath math="(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)" />

              <BlockMath math="0^2=10+2(ab+bc+ca)" />

              <BlockMath math="ab+bc+ca=-5" />

              <p>
                따라서
              </p>

              <BlockMath math="\frac{-5}{abc}=\frac32" />

              <BlockMath math="abc=-\frac{10}{3}" />

              <p>
                그러므로
              </p>

              <BlockMath math="a^3+b^3+c^3=3abc" />

              <BlockMath math="=3\left(-\frac{10}{3}\right)" />

              <BlockMath math="-10" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="-10" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="(a-b-1)^3+(b-c-2)^3+(c-a+3)^3" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">

              <p>
                세 개의 세제곱의 밑을 각각
              </p>

              <BlockMath math="A=a-b-1" />
              <BlockMath math="B=b-c-2" />
              <BlockMath math="C=c-a+3" />

              <p>
                라고 두자.
              </p>

              <p>
                먼저 세 수의 합을 확인하면
              </p>

              <BlockMath math="A+B+C" />

              <BlockMath math="=(a-b-1)+(b-c-2)+(c-a+3)" />

              <BlockMath math="=0" />

              <p>
                따라서
              </p>

              <BlockMath math="A^3+B^3+C^3=3ABC" />

              <p>
                이므로
              </p>

              <BlockMath math="(a-b-1)^3+(b-c-2)^3+(c-a+3)^3" />

              <BlockMath math="=3(a-b-1)(b-c-2)(c-a+3)" />

              <p className="font-semibold text-white">
                따라서
              </p>

              <BlockMath math="3(a-b-1)(b-c-2)(c-a+3)" />

              <p className="font-semibold text-white">
                로 인수분해된다.
              </p>

            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 9</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="(x-1)^3+(x-2)^3-(2x-3)^3" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">

              <p>
                세 개의 세제곱의 밑을 각각
              </p>

              <BlockMath math="A=x-1" />
              <BlockMath math="B=x-2" />
              <BlockMath math="C=-(2x-3)" />

              <p>
                라고 두자.
              </p>

              <p>
                주의할 점은
              </p>

              <BlockMath math="-(2x-3)^3=[-(2x-3)]^3" />

              <p>
                이므로 세 번째 밑은
              </p>

              <BlockMath math="2x-3" />

              <p>
                이 아니라
              </p>

              <BlockMath math="-(2x-3)" />

              <p>
                라는 것이다.
              </p>

              <p>
                세 수의 합을 계산하면
              </p>

              <BlockMath math="A+B+C" />

              <BlockMath math="=(x-1)+(x-2)-(2x-3)" />

              <BlockMath math="=0" />

              <p>
                따라서
              </p>

              <BlockMath math="A^3+B^3+C^3=3ABC" />

              <p>
                이므로
              </p>

              <BlockMath math="(x-1)^3+(x-2)^3-(2x-3)^3" />

              <BlockMath math="=3(x-1)(x-2)\{-(2x-3)\}" />

              <BlockMath math="-3(x-1)(x-2)(2x-3)" />

              <p className="font-semibold text-white">
                따라서
              </p>

              <BlockMath math="-3(x-1)(x-2)(2x-3)" />

              <p className="font-semibold text-white">
                로 인수분해된다.
              </p>

            </div>
          </details>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.11 2항×다항식의 전개
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          2항과 다항식의 곱에서는 항들이 일정한 순서로 만들어집니다.
          이 단원에서는 전개 결과를 외우는 것이 아니라, 계수가 만들어지는 순서를 확인합니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            일차식과 이차식의 곱
          </h3>

          <BlockMath math="(x+2)(3x^2+5x+7)" />

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[460px] border-collapse text-center text-gray-200">
              <thead>
                <tr>
                  <th className="border border-white/30 p-3">×</th>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="3x^2" />
                  </th>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="5x" />
                  </th>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="7" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="x" />
                  </th>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="3x^3" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="5x^2" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="7x" />
                  </td>
                </tr>
                <tr>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="2" />
                  </th>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="6x^2" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="10x" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="14" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            같은 차수끼리 모으면 다음과 같습니다.
          </p>

          <BlockMath math="3x^3+(5+6)x^2+(7+10)x+14" />
          <BlockMath math="=3x^3+11x^2+17x+14" />
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            계수가 만들어지는 순서
          </h3>

          <p className="mb-5 leading-8 text-gray-300">
            위의 전개에서 계수는 다음 순서로 만들어집니다.
          </p>

          <div className="rounded-xl bg-black/40 p-5">
            <BlockMath math="3" />
            <BlockMath math="5+6" />
            <BlockMath math="7+10" />
            <BlockMath math="14" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            최고차항과 상수항은 한 가지 방법으로만 만들어집니다.
            가운데 항들은 두 개의 곱이 합쳐져 만들어집니다.
          </p>

          <BlockMath math="1,\;2,\;2,\;1" />
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            일차식과 삼차식의 곱
          </h3>

          <BlockMath math="(x+2)(3x^3+5x^2+7x+11)" />

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-center text-gray-200">
              <thead>
                <tr>
                  <th className="border border-white/30 p-3">×</th>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="3x^3" />
                  </th>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="5x^2" />
                  </th>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="7x" />
                  </th>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="11" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="x" />
                  </th>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="3x^4" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="5x^3" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="7x^2" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="11x" />
                  </td>
                </tr>
                <tr>
                  <th className="border border-white/30 p-3">
                    <InlineMath math="2" />
                  </th>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="6x^3" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="10x^2" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="14x" />
                  </td>
                  <td className="border border-white/30 p-3">
                    <InlineMath math="22" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            같은 차수끼리 모으면 다음과 같습니다.
          </p>

          <BlockMath math="3x^4+(5+6)x^3+(7+10)x^2+(11+14)x+22" />
          <BlockMath math="=3x^4+11x^3+17x^2+25x+22" />
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            계수가 만들어지는 순서
          </h3>

          <div className="rounded-xl bg-black/40 p-5">
            <BlockMath math="3" />
            <BlockMath math="5+6" />
            <BlockMath math="7+10" />
            <BlockMath math="11+14" />
            <BlockMath math="22" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            이번에는 계수가 <InlineMath math="1,\;2,\;2,\;2,\;1" />
            의 구조로 만들어집니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            관찰
          </h3>

          <p className="leading-8 text-gray-300">
            2항과 다항식의 곱에서는 최고차항과 최저차항이 한 가지 방법으로만 만들어집니다.
            그 사이의 항들은 두 개의 곱이 합쳐져 만들어집니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <p className="leading-8 text-gray-300">
              최고차항 : 한 가지 방법
            </p>
            <p className="leading-8 text-gray-300">
              가운데 항들 : 두 가지 방법의 합
            </p>
            <p className="leading-8 text-gray-300">
              최저차항 : 한 가지 방법
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            수학적 사고
          </h3>

          <p className="leading-8 text-gray-300">
            처음에는 단순히 전개하는 것이 더 쉬워 보일 수 있습니다.
            하지만 전개되는 순서를 익히면 계수가 어떻게 만들어지는지 볼 수 있습니다.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            이 구조는 나중에 인수분해와 다항식의 나눗셈을 배울 때
            전개의 역과정으로 다시 사용됩니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-white/20 p-5">
          <h3 className="mb-4 text-xl font-bold">
            정리
          </h3>

          <ul className="ml-6 list-disc space-y-3 text-gray-300">
            <li>2항과 다항식의 곱은 일정한 순서로 전개됩니다.</li>
            <li>최고차항과 최저차항은 한 가지 방법으로만 만들어집니다.</li>
            <li>가운데 항들은 두 개의 곱이 합쳐져 만들어집니다.</li>
            <li>전개 결과보다 계수가 만들어지는 순서를 보는 것이 중요합니다.</li>
          </ul>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.12 일차식곱의 전개와 1차꼴·2차꼴·3차꼴
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          일차식의 곱은 단순한 전개 계산이 아닙니다.
          각 계수가 어떤 상수들의 조합으로 만들어지는지 살펴보면,
          앞에서 배운 묶음 구조를 다시 확인할 수 있습니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">일차식 두 개의 곱</h3>

          <BlockMath math="(x+a)(x+b)=x^2+ax+bx+ab" />
          <BlockMath math="=x^2+(a+b)x+ab" />

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="\text{상수항의 1차꼴}=a+b" />
            <BlockMath math="\text{상수항의 2차꼴}=ab" />
          </div>

          <BlockMath math="(x-a)(x-b)=x^2-(a+b)x+ab" />
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">일차식 세 개의 곱</h3>

          <BlockMath math="(x+a)(x+b)(x+c)" />

          <p className="mt-5 leading-8 text-gray-300">
            상수항을 하나 선택하면 1차꼴, 두 개 선택하면 2차꼴, 세 개 모두 선택하면 3차꼴이 됩니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="1차꼴=a+b+c" />
            <BlockMath math="2차꼴=ab+bc+ca" />
            <BlockMath math="3차꼴=abc" />
          </div>

          <BlockMath math="(x+a)(x+b)(x+c)" />
          <BlockMath math="=x^3+(a+b+c)x^2+(ab+bc+ca)x+abc" />

          <BlockMath math="(x-a)(x-b)(x-c)" />
          <BlockMath math="=x^3-(a+b+c)x^2+(ab+bc+ca)x-abc" />
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">정리</h3>

          <BlockMath math="(x+a)(x+b)=x^2+(1차꼴)x+(2차꼴)" />
          <BlockMath math="(x+a)(x+b)(x+c)=x^3+(1차꼴)x^2+(2차꼴)x+(3차꼴)" />

          <p className="mt-5 leading-8 text-gray-300">
            이 구조는 방정식 단원의 근과 계수의 관계에서 다시 등장합니다.
            지금은 일차식의 곱에서 1차꼴, 2차꼴, 3차꼴이 어떻게 만들어지는지 이해하는 데 집중합니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            심화 : 두 수의 합의 곱
          </h3>

          <p className="leading-8 text-gray-300">
            다음 식을 생각해 봅니다.
          </p>

          <BlockMath math="(a+b)(b+c)(c+a)" />

          <p className="mt-5 leading-8 text-gray-300">
            <InlineMath math="S=a+b+c" />라고 하면
          </p>

          <BlockMath math="a+b=S-c,\quad b+c=S-a,\quad c+a=S-b" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서 두 수의 합의 곱은 다음과 같이 일차식 세 개의 곱으로 바뀝니다.
          </p>

          <BlockMath math="(a+b)(b+c)(c+a)=(S-a)(S-b)(S-c)" />

          <p className="mt-5 leading-8 text-gray-300">
            이제 일차식 세 개의 곱의 전개 구조를 이용합니다.
          </p>

          <BlockMath math="(S-a)(S-b)(S-c)" />
          <BlockMath math="=S^3-S^2(a+b+c)+S(ab+bc+ca)-abc" />

          <p className="mt-5 leading-8 text-gray-300">
            여기서 <InlineMath math="S=a+b+c" />이므로
          </p>

          <BlockMath math="S^3-S^2(a+b+c)=S^3-S^3=0" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서 다음 식을 얻습니다.
          </p>

          <BlockMath math="(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)-abc" />
        </div>

        <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-purple-300">별해 : 대칭식으로 보기</h3>

          <p className="leading-8 text-gray-300">
            위 식은 직접 전개하여 비교할 수도 있습니다.
          </p>

          <BlockMath math="(a+b)(b+c)(c+a)" />
          <BlockMath math="=a^2b+ab^2+b^2c+bc^2+c^2a+ca^2+2abc" />

          <BlockMath math="(a+b+c)(ab+bc+ca)" />
          <BlockMath math="=a^2b+ab^2+b^2c+bc^2+c^2a+ca^2+3abc" />

          <p className="mt-5 leading-8 text-gray-300">
            두 식을 비교하면 아래 식이 성립합니다.
          </p>

          <BlockMath math="(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)-abc" />
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

          <p className="mb-4 text-gray-300">
            0이 아닌 세 실수 <InlineMath math="a,b,c" />에 대하여
          </p>

          <BlockMath math="a+b+c=-1,\quad \frac1a+\frac1b+\frac1c=1" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="(1-a)(1-b)(1-c)" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">풀이 보기</summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                먼저 <InlineMath math="a+b+c=-1" />이므로
              </p>

              <BlockMath math="1-a=-(a+b+c)-a=-(2a+b+c)" />

              <p>
                이 방식은 복잡합니다. 이 문제에서는 일차식 세 개의 곱으로 바로 전개하는 것이 좋습니다.
              </p>

              <BlockMath math="(1-a)(1-b)(1-c)" />
              <BlockMath math="=1-(a+b+c)+(ab+bc+ca)-abc" />

              <p>
                역수의 합에서
              </p>

              <BlockMath math="\frac1a+\frac1b+\frac1c=\frac{ab+bc+ca}{abc}=1" />

              <BlockMath math="ab+bc+ca=abc" />

              <p>
                따라서
              </p>

              <BlockMath math="(1-a)(1-b)(1-c)" />
              <BlockMath math="=1-(-1)+(ab+bc+ca)-abc" />
              <BlockMath math="=2" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="2" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

          <BlockMath math="x+y+z=4,\quad xy+yz+zx=2,\quad xyz=7" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="(x+y)(y+z)(z+x)" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">풀이 보기</summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                심화 공식에 바로 대입합니다.
              </p>

              <BlockMath math="(x+y)(y+z)(z+x)" />
              <BlockMath math="=(x+y+z)(xy+yz+zx)-xyz" />

              <BlockMath math="=4\cdot2-7" />
              <BlockMath math="=1" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="1" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

          <BlockMath math="a+b+c=1,\quad a^2+b^2+c^2=3,\quad a^3+b^3+c^3=-2" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="(a+b)(b+c)(c+a)" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">풀이 보기</summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                구하려는 대상은 두 수의 합의 곱입니다.
                따라서 <InlineMath math="a+b+c" />, <InlineMath math="ab+bc+ca" />, <InlineMath math="abc" />
                를 찾아야 합니다.
              </p>

              <BlockMath math="(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)" />
              <BlockMath math="1^2=3+2(ab+bc+ca)" />
              <BlockMath math="ab+bc+ca=-1" />

              <p>
                이제 세제곱의 합 구조를 이용하여 <InlineMath math="abc" />를 구합니다.
              </p>

              <BlockMath math="a^3+b^3+c^3-3abc" />
              <BlockMath math="=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)" />

              <BlockMath math="-2-3abc=1\cdot(3-(-1))" />
              <BlockMath math="-2-3abc=4" />
              <BlockMath math="abc=-2" />

              <p>
                따라서
              </p>

              <BlockMath math="(a+b)(b+c)(c+a)" />
              <BlockMath math="=(a+b+c)(ab+bc+ca)-abc" />
              <BlockMath math="=1\cdot(-1)-(-2)" />
              <BlockMath math="=1" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="1" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

          <BlockMath math="x+y+z=3,\quad xy+yz+zx=1,\quad xyz=2" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="(xy+yz)(yz+zx)(zx+xy)" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">풀이 보기</summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                새로운 문자를 둡니다.
              </p>

              <BlockMath math="A=xy,\quad B=yz,\quad C=zx" />

              <p>
                그러면 구하려는 식은
              </p>

              <BlockMath math="(A+B)(B+C)(C+A)" />

              <p>
                입니다.
              </p>

              <BlockMath math="A+B+C=xy+yz+zx=1" />
              <BlockMath math="ABC=(xy)(yz)(zx)=x^2y^2z^2=(xyz)^2=4" />

              <p>
                또한
              </p>

              <BlockMath math="AB+BC+CA" />
              <BlockMath math="=xy\cdot yz+yz\cdot zx+zx\cdot xy" />
              <BlockMath math="=xyz(x+y+z)" />
              <BlockMath math="=2\cdot3=6" />

              <p>
                따라서
              </p>

              <BlockMath math="(A+B)(B+C)(C+A)" />
              <BlockMath math="=(A+B+C)(AB+BC+CA)-ABC" />
              <BlockMath math="=1\cdot6-4" />
              <BlockMath math="=2" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="2" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

          <p className="mb-4 text-gray-300">
            다음 각 식을 인수분해하여라.
          </p>

          <BlockMath math="(a+b)(b+c)(c+a)+abc" />
          <BlockMath math="(a+b+c)(ab+bc+ca)-abc" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">풀이 보기</summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                첫 번째 식은 심화 공식을 이용합니다.
              </p>

              <BlockMath math="(a+b)(b+c)(c+a)" />
              <BlockMath math="=(a+b+c)(ab+bc+ca)-abc" />

              <p>
                따라서
              </p>

              <BlockMath math="(a+b)(b+c)(c+a)+abc" />
              <BlockMath math="=(a+b+c)(ab+bc+ca)" />

              <p>
                두 번째 식은 심화 공식을 거꾸로 사용합니다.
              </p>

              <BlockMath math="(a+b+c)(ab+bc+ca)-abc" />
              <BlockMath math="=(a+b)(b+c)(c+a)" />
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">참고</h3>

          <p className="leading-8 text-gray-300">
            다음 식은 반드시 기억해 두는 것이 좋습니다.
          </p>

          <BlockMath math="(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)-abc" />

          <p className="mt-5 leading-8 text-gray-300">
            이 식은 세 수의 합, 두 수씩 곱한 값의 합, 세 수의 곱을 연결합니다.
            앞으로 대칭식, 인수분해, 방정식 문제에서 자주 사용됩니다.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.13 합과 차의 곱의 전개
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          합과 차의 곱은 두 식에서 같은 부분과 부호만 다른 부분을 찾아서 전개합니다.
          같은 부분을 먼저 보고, 다른 부분을 구분할 수 있으면 항을 옮기거나 문자를 치환하지 않고도 바로 식을 정리할 수 있습니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">기본형</h3>

          <BlockMath math="(x+y)(x-y)" />

          <p className="mt-5 leading-8 text-gray-300">
            두 괄호에서 같은 것은 <InlineMath math="x" />이고,
            부호만 다른 것은 <InlineMath math="y" />입니다.
          </p>

          <BlockMath math="(x+y)(x-y)=x^2-y^2" />

          <p className="mt-5 leading-8 text-gray-300">
            즉, 합과 차의 곱은 다음과 같이 생각할 수 있습니다.
          </p>

          <BlockMath math="(\text{같은 것}+\text{다른 것})(\text{같은 것}-\text{다른 것})" />
          <BlockMath math="=(\text{같은 것})^2-(\text{다른 것})^2" />
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            같은 것과 다른 것 찾기
          </h3>

          <BlockMath math="(a+b+c)(a-b+c)" />

          <p className="mt-5 leading-8 text-gray-300">
            두 괄호에서 부호가 같은 부분은 <InlineMath math="a+c" />이고,
            부호가 다른 부분은 <InlineMath math="b" />입니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="\text{같은 것}=a+c" />
            <BlockMath math="\text{다른 것}=b" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            따라서 항을 옮기거나 문자를 새로 두지 않아도 바로 정리할 수 있습니다.
          </p>

          <BlockMath math="(a+b+c)(a-b+c)" />
          <BlockMath math="=(a+c)^2-b^2" />
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            부호가 여러 개일 때
          </h3>

          <BlockMath math="(a+b-c+d)(a-b-c-d)" />

          <p className="mt-5 leading-8 text-gray-300">
            두 괄호에서 부호가 같은 부분은 <InlineMath math="a-c" />이고,
            부호가 다른 부분은 <InlineMath math="b+d" />입니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="\text{같은 것}=a-c" />
            <BlockMath math="\text{다른 것}=b+d" />
          </div>

          <BlockMath math="(a+b-c+d)(a-b-c-d)" />
          <BlockMath math="=(a-c)^2-(b+d)^2" />

          <p className="mt-5 leading-8 text-gray-300">
            문자나 항이 많아져도 원리는 같습니다.
            두 괄호에서 부호가 같은 부분과 다른 부분을 먼저 찾습니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            기억할 구조
          </h3>

          <BlockMath math="(\triangle+\square)(\triangle-\square)=\triangle^2-\square^2" />

          <p className="mt-5 leading-8 text-gray-300">
            여기서 <InlineMath math="\triangle" />은 두 식에서 부호가 같은 부분이고, <InlineMath math="\square" />은 부호만 다른 부분입니다.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            따라서 합과 차의 곱에서는 먼저 같은 것과 다른 것을 찾는 것이 중요합니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 전개하여라.
          </p>

          <BlockMath math="(x+y)(x-y)(x^2+xy+y^2)(x^2-xy+y^2)" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                앞의 두 괄호는 합과 차의 곱입니다.
              </p>

              <BlockMath math="(x+y)(x-y)=x^2-y^2" />

              <p>
                뒤의 두 괄호에서도 같은 것과 다른 것을 찾습니다.
              </p>

              <div className="rounded-xl bg-black/40 p-5">
                <BlockMath math="\text{같은 것}=x^2+y^2" />
                <BlockMath math="\text{다른 것}=xy" />
              </div>

              <BlockMath math="(x^2+xy+y^2)(x^2-xy+y^2)" />
              <BlockMath math="=(x^2+y^2)^2-(xy)^2" />

              <BlockMath math="=x^4+2x^2y^2+y^4-x^2y^2" />
              <BlockMath math="=x^4+x^2y^2+y^4" />

              <p>
                따라서 전체 식은
              </p>

              <BlockMath math="(x^2-y^2)(x^4+x^2y^2+y^4)" />

              <p>
                입니다. 이것은 세제곱의 차 구조입니다.
              </p>

              <BlockMath math="(x^2-y^2)(x^4+x^2y^2+y^4)=x^6-y^6" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="x^6-y^6" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 전개하여라.
          </p>

          <BlockMath math="(x+1)(x-1)(x^2+x+1)(x^2-x+1)" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                먼저 앞의 두 괄호를 전개합니다.
              </p>

              <BlockMath math="(x+1)(x-1)=x^2-1" />

              <p>
                뒤의 두 괄호에서는 같은 것과 다른 것을 찾습니다.
              </p>

              <div className="rounded-xl bg-black/40 p-5">
                <BlockMath math="\text{같은 것}=x^2+1" />
                <BlockMath math="\text{다른 것}=x" />
              </div>

              <BlockMath math="(x^2+x+1)(x^2-x+1)" />
              <BlockMath math="=(x^2+1)^2-x^2" />
              <BlockMath math="=x^4+x^2+1" />

              <p>
                따라서 전체 식은
              </p>

              <BlockMath math="(x^2-1)(x^4+x^2+1)" />

              <p>
                입니다.
              </p>

              <BlockMath math="(x^2-1)(x^4+x^2+1)=x^6-1" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="x^6-1" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 전개하여라.
          </p>

          <BlockMath math="(x^2+x+1)(x^2-x+1)" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                두 괄호에서 같은 것과 다른 것을 찾습니다.
              </p>

              <div className="rounded-xl bg-black/40 p-5">
                <BlockMath math="\text{같은 것}=x^2+1" />
                <BlockMath math="\text{다른 것}=x" />
              </div>

              <BlockMath math="(x^2+x+1)(x^2-x+1)" />
              <BlockMath math="=(x^2+1)^2-x^2" />
              <BlockMath math="=x^4+2x^2+1-x^2" />
              <BlockMath math="=x^4+x^2+1" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="x^4+x^2+1" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 전개하여라.
          </p>

          <BlockMath math="(1+x+x^2)(1-x+x^2)(1-x^2+x^4)(1-x^4+x^8)" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                처음 두 괄호에서 같은 것과 다른 것을 찾습니다.
              </p>

              <div className="rounded-xl bg-black/40 p-5">
                <BlockMath math="\text{같은 것}=1+x^2" />
                <BlockMath math="\text{다른 것}=x" />
              </div>

              <BlockMath math="(1+x+x^2)(1-x+x^2)" />
              <BlockMath math="=(1+x^2)^2-x^2" />
              <BlockMath math="=1+x^2+x^4" />

              <p>
                따라서 전체 식은
              </p>

              <BlockMath math="(1+x^2+x^4)(1-x^2+x^4)(1-x^4+x^8)" />

              <p>
                다시 앞의 두 괄호를 합과 차의 곱으로 봅니다.
              </p>

              <div className="rounded-xl bg-black/40 p-5">
                <BlockMath math="\text{같은 것}=1+x^4" />
                <BlockMath math="\text{다른 것}=x^2" />
              </div>

              <BlockMath math="(1+x^2+x^4)(1-x^2+x^4)" />
              <BlockMath math="=(1+x^4)^2-x^4" />
              <BlockMath math="=1+x^4+x^8" />

              <p>
                따라서 전체 식은
              </p>

              <BlockMath math="(1+x^4+x^8)(1-x^4+x^8)" />

              <p>
                한 번 더 같은 구조를 사용합니다.
              </p>

              <div className="rounded-xl bg-black/40 p-5">
                <BlockMath math="\text{같은 것}=1+x^8" />
                <BlockMath math="\text{다른 것}=x^4" />
              </div>

              <BlockMath math="(1+x^4+x^8)(1-x^4+x^8)" />
              <BlockMath math="=(1+x^8)^2-x^8" />
              <BlockMath math="=1+x^8+x^{16}" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="1+x^8+x^{16}" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            수학적 사고
          </h3>

          <p className="leading-8 text-gray-300">
            합과 차의 곱에서는 먼저 같은 것과 다른 것을 판정합니다.
            이 과정을 익히면 항을 옮기거나 문자를 치환하는 과정을 줄일 수 있습니다.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            식을 전개하기 전에 구조를 먼저 보는 습관은 이후 인수분해와 복잡한 식의 변형에서도 매우 중요합니다.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.14 복이차식 인수분해
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          복이차식은 문자의 차수가 짝수로만 이루어진 식입니다.
          복이차식은 먼저 치환할 수 있는지 확인하고, 치환만으로 어려울 때는
          완전제곱식을 조립하여 인수분해합니다.
        </p>

        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            먼저 익혀 두면 좋은 제곱수
          </h3>

          <p className="leading-8 text-gray-300">
            다음 제곱수들은 완전제곱식의 계수 구조를 읽는 데 도움이 됩니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="11^2=121" />
            <BlockMath math="12^2=144" />
            <BlockMath math="13^2=169" />
            <BlockMath math="21^2=441" />
            <BlockMath math="31^2=961" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            예를 들어 <InlineMath math="144" />는 단순한 숫자가 아니라 <InlineMath math="1,\;4,\;4" />의 구조로 볼 수 있습니다.
            이는 다음 완전제곱식의 계수 구조와 같습니다.
          </p>

          <BlockMath math="(x+2)^2=x^2+4x+4" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서 <InlineMath math="1,\;4,\;4" />가 보이면
            완전제곱식의 흔적을 먼저 생각해 볼 수 있습니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            복이차식의 기본형
          </h3>

          <p className="leading-8 text-gray-300">
            다음 식을 생각해 봅시다.
          </p>

          <BlockMath math="x^4-5x^2+4" />

          <p className="mt-5 leading-8 text-gray-300">
            이 식은 <InlineMath math="x^2" />를 하나의 문자처럼 볼 수 있습니다.
          </p>

          <BlockMath math="X=x^2" />

          <p className="mt-5 leading-8 text-gray-300">
            그러면 식은 다음과 같이 바뀝니다.
          </p>

          <BlockMath math="X^2-5X+4" />

          <BlockMath math="=(X-1)(X-4)" />

          <p className="mt-5 leading-8 text-gray-300">
            다시 <InlineMath math="X=x^2" />를 대입하면
          </p>

          <BlockMath math="x^4-5x^2+4=(x^2-1)(x^2-4)" />

          <BlockMath math="=(x-1)(x+1)(x-2)(x+2)" />
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            치환이 먼저다
          </h3>

          <p className="leading-8 text-gray-300">
            복이차식에서는 먼저 <InlineMath math="x^2" />를 하나의 문자로 볼 수 있는지 확인합니다.
          </p>

          <BlockMath math="x^4+px^2+q" />

          <p className="mt-5 leading-8 text-gray-300">
            는
          </p>

          <BlockMath math="X^2+pX+q" />

          <p className="mt-5 leading-8 text-gray-300">
            로 바꿀 수 있습니다.
            따라서 일반적인 이차식처럼 인수분해할 수 있는지 먼저 확인합니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            완전제곱식으로 조립하기
          </h3>

          <p className="leading-8 text-gray-300">
            다음 식은 <InlineMath math="x^2" />로 치환해도 바로 인수분해되지 않습니다.
          </p>

          <BlockMath math="x^4+4" />

          <p className="mt-5 leading-8 text-gray-300">
            이때 양 끝항을 이용해 완전제곱식을 조립합니다.
          </p>

          <BlockMath math="x^4+4x^2+4=(x^2+2)^2" />

          <p className="mt-5 leading-8 text-gray-300">
            원래 식에는 <InlineMath math="4x^2" />가 없으므로,
            더한 만큼 다시 빼 줍니다.
          </p>

          <BlockMath math="x^4+4=x^4+4x^2+4-4x^2" />

          <BlockMath math="=x^4+4x^2+4-(2x)^2" />

          <BlockMath math="=(x^2+2)^2-(2x)^2" />

          <p className="mt-5 leading-8 text-gray-300">
            이제 합과 차의 곱을 사용합니다.
          </p>

          <BlockMath math="(x^2+2)^2-(2x)^2" />

          <BlockMath math="=(x^2+2-2x)(x^2+2+2x)" />

          <BlockMath math="=(x^2-2x+2)(x^2+2x+2)" />
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            조립의 순서
          </h3>

          <ol className="ml-6 list-decimal space-y-3 text-gray-300">
            <li>
              먼저 <InlineMath math="x^2" />를 하나의 문자로 볼 수 있는지 확인한다.
            </li>
            <li>
              치환으로 인수분해되지 않으면 양 끝항을 보고 완전제곱식을 만든다.
            </li>
            <li>
              부족한 가운데 항을 더하고, 더한 만큼 다시 뺀다.
            </li>
            <li>
              완전제곱식의 차로 바꾸어 합과 차의 곱을 사용한다.
            </li>
          </ol>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="x^4-13x^2+36" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                <InlineMath math="X=x^2" />로 치환합니다.
              </p>

              <BlockMath math="x^4-13x^2+36=X^2-13X+36" />

              <BlockMath math="X^2-13X+36=(X-4)(X-9)" />

              <p>
                다시 <InlineMath math="X=x^2" />를 대입합니다.
              </p>

              <BlockMath math="(x^2-4)(x^2-9)" />

              <BlockMath math="=(x-2)(x+2)(x-3)(x+3)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="(x-2)(x+2)(x-3)(x+3)" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="x^4+4" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                양 끝항 <InlineMath math="x^4" />와 <InlineMath math="4" />를 이용하여
                완전제곱식을 조립합니다.
              </p>

              <BlockMath math="x^4+4x^2+4=(x^2+2)^2" />

              <p>
                원래 식에 <InlineMath math="4x^2" />를 더하고 다시 빼 줍니다.
              </p>

              <BlockMath math="x^4+4=x^4+4x^2+4-4x^2" />

              <BlockMath math="=(x^2+2)^2-(2x)^2" />

              <BlockMath math="=(x^2-2x+2)(x^2+2x+2)" />

              <p className="font-semibold text-white">
                따라서 답은
                <InlineMath math="(x^2-2x+2)(x^2+2x+2)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="a^4+a^2b^2+b^4" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                양 끝항 <InlineMath math="a^4" />와 <InlineMath math="b^4" />를 보고
                완전제곱식을 조립합니다.
              </p>

              <BlockMath math="a^4+2a^2b^2+b^4=(a^2+b^2)^2" />

              <p>
                원래 식에는 <InlineMath math="a^2b^2" />만 있으므로, <InlineMath math="a^2b^2" />를 하나 더 더하고 다시 빼 줍니다.
              </p>

              <BlockMath math="a^4+a^2b^2+b^4" />
              <BlockMath math="=a^4+2a^2b^2+b^4-a^2b^2" />
              <BlockMath math="=(a^2+b^2)^2-(ab)^2" />

              <p>
                이제 합과 차의 곱을 사용합니다.
              </p>

              <BlockMath math="(a^2+b^2)^2-(ab)^2" />
              <BlockMath math="=(a^2+b^2-ab)(a^2+b^2+ab)" />
              <BlockMath math="=(a^2-ab+b^2)(a^2+ab+b^2)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="(a^2-ab+b^2)(a^2+ab+b^2)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            참고
          </h3>

          <p className="leading-8 text-gray-300">
            복이차식 인수분해에서 중요한 것은 완전제곱식을 조립하는 감각입니다.
            양 끝항을 보고 어떤 완전제곱식을 만들 수 있는지 먼저 생각합니다.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            제곱수의 구조를 익혀 두면 복이차식뿐 아니라 이후의 완전제곱식 변형에서도
            식을 더 빠르고 정확하게 읽을 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.15 치환하는 인수분해
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          치환은 새로운 문자를 만드는 기술이 아니라, 식 안에서 공통인 부분을 발견하는 방법입니다.
          공통인 부분을 하나의 문자로 보면 복잡한 식도 간단한 이차식처럼 다룰 수 있습니다.
        </p>

        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            먼저 숫자로 생각해 보기
          </h3>

          <p className="leading-8 text-gray-300">
            먼저 <InlineMath math="1,\;2,\;3,\;4" />를 두 개씩 묶어 공통인 합이 나오도록 나누어 봅니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="1+4=5" />
            <BlockMath math="2+3=5" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            즉, <InlineMath math="(1,4)" />와 <InlineMath math="(2,3)" />으로 나누면
            공통인 합 <InlineMath math="5" />가 만들어집니다.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            이번에는 <InlineMath math="1,\;2,\;3,\;6" />을 두 개씩 묶어 봅니다.
            이 경우에는 합보다 곱을 보는 것이 좋습니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="1\cdot6=6" />
            <BlockMath math="2\cdot3=6" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            즉, <InlineMath math="(1,6)" />과 <InlineMath math="(2,3)" />으로 나누면
            공통인 곱 <InlineMath math="6" />이 만들어집니다.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            식을 묶을 때도 마찬가지입니다. 공통인 합이나 공통인 곱이 나오도록 묶으면
            치환할 대상을 찾을 수 있습니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            공통인 부분 찾기
          </h3>

          <p className="leading-8 text-gray-300">
            다음 식을 생각해 봅니다.
          </p>

          <BlockMath math="(x+1)(x+2)(x+3)(x+4)" />

          <p className="mt-5 leading-8 text-gray-300">
            네 괄호를 그대로 전개하면 계산이 복잡합니다.
            대신 공통인 부분이 나오도록 둘씩 묶습니다.
          </p>

          <BlockMath math="(x+1)(x+4)=x^2+5x+4" />
          <BlockMath math="(x+2)(x+3)=x^2+5x+6" />

          <p className="mt-5 leading-8 text-gray-300">
            두 식에는 <InlineMath math="x^2+5x" />라는 공통인 부분이 있습니다.
          </p>

          <BlockMath math="X=x^2+5x" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서 원래 식은 다음과 같이 바뀝니다.
          </p>

          <BlockMath math="(x+1)(x+2)(x+3)(x+4)" />
          <BlockMath math="=(X+4)(X+6)" />

          <p className="mt-5 leading-8 text-gray-300">
            이것이 치환의 기본 생각입니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            치환의 순서
          </h3>

          <ol className="ml-6 list-decimal space-y-3 text-gray-300">
            <li>공통인 부분이 나오도록 식을 묶는다.</li>
            <li>반복되는 부분을 하나의 문자로 둔다.</li>
            <li>간단한 식으로 바꾸어 계산하거나 인수분해한다.</li>
            <li>마지막에 원래 문자로 되돌린다.</li>
          </ol>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

          <BlockMath math="a^2+5a-1=0" />

          <p className="mb-4 text-gray-300">
            일 때, <InlineMath math="(a+1)(a+2)(a+3)(a+4)" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                네 개의 일차식을 공통인 부분이 나오도록 둘씩 묶습니다.
              </p>

              <BlockMath math="(a+1)(a+4)=a^2+5a+4" />
              <BlockMath math="(a+2)(a+3)=a^2+5a+6" />

              <p>
                여기서 공통인 부분은 <InlineMath math="a^2+5a" />입니다.
              </p>

              <BlockMath math="X=a^2+5a" />

              <p>
                주어진 조건 <InlineMath math="a^2+5a-1=0" />
                에서
              </p>

              <BlockMath math="a^2+5a=1" />
              <BlockMath math="X=1" />

              <p>
                따라서
              </p>

              <BlockMath math="(a+1)(a+2)(a+3)(a+4)" />
              <BlockMath math="=(X+4)(X+6)" />
              <BlockMath math="=(1+4)(1+6)" />
              <BlockMath math="=35" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="35" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="(x^2+2x-1)(x^2+2x-2)-2" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                공통인 부분은 <InlineMath math="x^2+2x" />입니다.
              </p>

              <BlockMath math="X=x^2+2x" />

              <p>
                그러면 주어진 식은 다음과 같이 바뀝니다.
              </p>

              <BlockMath math="(X-1)(X-2)-2" />

              <BlockMath math="=X^2-3X+2-2" />
              <BlockMath math="=X^2-3X" />
              <BlockMath math="=X(X-3)" />

              <p>
                다시 원래 문자로 바꾸면
              </p>

              <BlockMath math="X=x^2+2x=x(x+2)" />
              <BlockMath math="X-3=x^2+2x-3=(x-1)(x+3)" />

              <p>
                따라서
              </p>

              <BlockMath math="(x^2+2x-1)(x^2+2x-2)-2" />
              <BlockMath math="=x(x+2)(x-1)(x+3)" />

              <p className="font-semibold text-white">
                따라서 인수분해하면 <InlineMath math="x(x+2)(x-1)(x+3)" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="(x-1)(x+2)(x-3)(x+4)+24" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                공통인 부분이 나오도록 둘씩 묶습니다.
              </p>

              <BlockMath math="(x-1)(x+2)=x^2+x-2" />
              <BlockMath math="(x-3)(x+4)=x^2+x-12" />

              <p>
                공통인 부분은 <InlineMath math="x^2+x" />입니다.
              </p>

              <BlockMath math="X=x^2+x" />

              <p>
                그러면 원래 식은
              </p>

              <BlockMath math="(X-2)(X-12)+24" />

              <BlockMath math="=X^2-14X+24+24" />
              <BlockMath math="=X^2-14X+48" />
              <BlockMath math="=(X-6)(X-8)" />

              <p>
                다시 원래 문자로 바꾸면
              </p>

              <BlockMath math="(x^2+x-6)(x^2+x-8)" />

              <BlockMath math="=(x+3)(x-2)(x^2+x-8)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="(x+3)(x-2)(x^2+x-8)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

          <p className="mb-4 text-gray-300">
            다항식 <InlineMath math="(x+1)(x+2)(x+3)(x+4)+k" />
            가 완전제곱식이 되도록 하는 상수 <InlineMath math="k" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                앞에서 본 것처럼
              </p>

              <BlockMath math="(x+1)(x+4)=x^2+5x+4" />
              <BlockMath math="(x+2)(x+3)=x^2+5x+6" />

              <p>
                이므로 <InlineMath math="X=x^2+5x" />로 치환합니다.
              </p>

              <BlockMath math="(x+1)(x+2)(x+3)(x+4)+k" />
              <BlockMath math="=(X+4)(X+6)+k" />
              <BlockMath math="=X^2+10X+24+k" />

              <p>
                완전제곱식이 되려면
              </p>

              <BlockMath math="X^2+10X+25=(X+5)^2" />

              <p>
                의 형태가 되어야 합니다.
              </p>

              <BlockMath math="24+k=25" />
              <BlockMath math="k=1" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="1" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-purple-300">
            객관식에서의 관찰
          </h3>

          <p className="leading-8 text-gray-300">
            완전제곱식이 되려면 상수항도 제곱수가 되어야 합니다.
            따라서 객관식 문제에서는 모든 계산을 하기 전에 보기 중에서
            상수항을 제곱수로 만드는 값이 있는지 먼저 확인할 수 있습니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

          <p className="mb-4 text-gray-300">
            <InlineMath math="(x+1)(x+3)(x+5)(x+7)+k" />가 완전제곱식이 될 때,
            상수 <InlineMath math="k" />의 값을 구하여라.
          </p>

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                공통인 부분이 나오도록 둘씩 묶습니다.
              </p>

              <BlockMath math="(x+1)(x+7)=x^2+8x+7" />
              <BlockMath math="(x+3)(x+5)=x^2+8x+15" />

              <p>
                공통인 부분은 <InlineMath math="x^2+8x" />입니다.
              </p>

              <BlockMath math="X=x^2+8x" />

              <BlockMath math="(x+1)(x+3)(x+5)(x+7)+k" />
              <BlockMath math="=(X+7)(X+15)+k" />
              <BlockMath math="=X^2+22X+105+k" />

              <p>
                완전제곱식이 되려면
              </p>

              <BlockMath math="X^2+22X+121=(X+11)^2" />

              <p>
                의 형태가 되어야 합니다.
              </p>

              <BlockMath math="105+k=121" />
              <BlockMath math="k=16" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="16" />입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="(x-2)(x-6)(x-3)(x-4)-6x^2" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>공통인 부분이 나오도록 묶습니다.</p>

              <BlockMath math="(x-2)(x-6)=x^2-8x+12" />
              <BlockMath math="(x-3)(x-4)=x^2-7x+12" />

              <p>
                두 식에는 <InlineMath math="x^2+12" />가 공통으로 들어 있습니다.
              </p>

              <BlockMath math="X=x^2+12" />

              <p>그러면 원래 식은 다음과 같이 바뀝니다.</p>

              <BlockMath math="(x^2-8x+12)(x^2-7x+12)-6x^2" />
              <BlockMath math="=(X-8x)(X-7x)-6x^2" />

              <BlockMath math="=X^2-15xX+56x^2-6x^2" />
              <BlockMath math="=X^2-15xX+50x^2" />
              <BlockMath math="=(X-5x)(X-10x)" />

              <p>다시 <InlineMath math="X=x^2+12" />를 대입합니다.</p>

              <BlockMath math="=(x^2+12-5x)(x^2+12-10x)" />
              <BlockMath math="=(x^2-5x+12)(x^2-10x+12)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="(x^2-5x+12)(x^2-10x+12)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            참고
          </h3>

          <p className="leading-8 text-gray-300">
            치환의 핵심은 공통인 부분을 찾는 것입니다.
            새로운 문자를 먼저 정하는 것이 아니라, 반복되는 구조가 무엇인지 먼저 보아야 합니다.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            공통인 합, 공통인 곱, 반복되는 식을 찾으면 복잡한 식도 간단한 이차식으로 바뀔 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.16 역으로 조립하는 인수분해
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          인수분해가 바로 보이지 않을 때는 전체를 한 번에 보려고 하지 말고,
          일부 항만 먼저 인수분해해 봅니다. 부분 인수분해의 결과를 비교하면
          전체 인수의 모양을 역으로 조립할 수 있습니다.
        </p>

        <div className="rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            부분을 보고 전체를 조립하기
          </h3>

          <BlockMath math="x^2-xy-2y^2+4x-5y+3" />

          <p className="mt-5 leading-8 text-gray-300">
            먼저 문자항만 보면 다음과 같습니다.
          </p>

          <BlockMath math="x^2-xy-2y^2=(x-2y)(x+y)" />

          <p className="mt-5 leading-8 text-gray-300">
            이번에는 <InlineMath math="x" />만 있는 부분을 보면
          </p>

          <BlockMath math="x^2+4x+3=(x+1)(x+3)" />

          <p className="mt-5 leading-8 text-gray-300">
            또 <InlineMath math="y" />만 있는 부분을 보면
          </p>

          <BlockMath math="-2y^2-5y+3=(-2y+1)(y+3)" />

          <p className="mt-5 leading-8 text-gray-300">
            이 세 가지를 비교하면 전체 식은 다음과 같이 조립될 수 있음을 예상할 수 있습니다.
          </p>

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="x^2-xy-2y^2\quad\Rightarrow\quad (x-2y)(x+y)" />
            <BlockMath math="x^2+4x+3\quad\Rightarrow\quad (x+1)(x+3)" />
            <BlockMath math="-2y^2-5y+3\quad\Rightarrow\quad (-2y+1)(y+3)" />
          </div>

          <BlockMath math="x^2-xy-2y^2+4x-5y+3" />
          <BlockMath math="=(x-2y+1)(x+y+3)" />
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            잘 보이지 않을 때
          </h3>

          <p className="leading-8 text-gray-300">
            바로 조립하기 어렵다면 모르는 상수 부분을 문자로 둡니다.
          </p>

          <BlockMath math="(x-2y+A)(x+y+B)" />

          <p className="mt-5 leading-8 text-gray-300">
            전개하면
          </p>

          <BlockMath math="(x-2y+A)(x+y+B)" />
          <BlockMath math="=x^2-xy-2y^2+(A+B)x+(A-2B)y+AB" />

          <p className="mt-5 leading-8 text-gray-300">
            원래 식
            <InlineMath math="x^2-xy-2y^2+4x-5y+3" />
            과 계수를 비교합니다.
          </p>

          <BlockMath math="A+B=4" />
          <BlockMath math="A-2B=-5" />
          <BlockMath math="AB=3" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서
          </p>

          <BlockMath math="A=1,\quad B=3" />

          <BlockMath math="x^2-xy-2y^2+4x-5y+3=(x-2y+1)(x+y+3)" />
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="x^2-xy-2y^2+4x-5y+3" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <BlockMath math="x^2-xy-2y^2=(x-2y)(x+y)" />
              <BlockMath math="x^2+4x+3=(x+1)(x+3)" />
              <BlockMath math="-2y^2-5y+3=(-2y+1)(y+3)" />

              <p>
                세 부분의 인수분해를 비교하면 <InlineMath math="x-2y+1" />과 <InlineMath math="x+y+3" />이 보입니다.
              </p>

              <BlockMath math="x^2-xy-2y^2+4x-5y+3" />
              <BlockMath math="=(x-2y+1)(x+y+3)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="(x-2y+1)(x+y+3)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            상반식의 인수분해
          </h3>

          <p className="leading-8 text-gray-300">
            상반식에서는 양 끝의 <InlineMath math="x^4" />와 상수항이 인수의 모양을 결정합니다.
            그 다음 삼차항과 일차항의 계수를 보고 부호 구조를 정합니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            삼차항과 일차항의 계수가 같은 경우
          </h3>

          <BlockMath math="x^4+x^3-10x^2+x+1" />

          <p className="mt-5 leading-8 text-gray-300">
            양 끝이 <InlineMath math="x^4" />와 <InlineMath math="1" />이고,
            삼차항과 일차항의 계수가 같습니다.
            따라서 다음과 같이 둡니다.
          </p>

          <BlockMath math="(x^2+Ax+1)(x^2+Bx+1)" />

          <p className="mt-5 leading-8 text-gray-300">
            전개하면
          </p>

          <BlockMath math="(x^2+Ax+1)(x^2+Bx+1)" />
          <BlockMath math="=x^4+(A+B)x^3+(AB+2)x^2+(A+B)x+1" />

          <p className="mt-5 leading-8 text-gray-300">
            계수를 비교하면
          </p>

          <BlockMath math="A+B=1" />
          <BlockMath math="AB+2=-10" />
          <BlockMath math="AB=-12" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서
          </p>

          <BlockMath math="A=4,\quad B=-3" />

          <BlockMath math="x^4+x^3-10x^2+x+1" />
          <BlockMath math="=(x^2+4x+1)(x^2-3x+1)" />
        </div>

        <div className="mt-8 rounded-xl bg-white/10 p-6">
          <h3 className="mb-4 text-2xl font-bold">
            삼차항과 일차항의 부호가 반대인 경우
          </h3>

          <BlockMath math="x^4+x^3-14x^2-x+1" />

          <p className="mt-5 leading-8 text-gray-300">
            양 끝은 <InlineMath math="x^4" />와 <InlineMath math="1" />이지만,
            삼차항과 일차항의 부호가 반대입니다.
            이때는 다음과 같이 둡니다.
          </p>

          <BlockMath math="(x^2+Ax-1)(x^2+Bx-1)" />

          <p className="mt-5 leading-8 text-gray-300">
            전개하면
          </p>

          <BlockMath math="(x^2+Ax-1)(x^2+Bx-1)" />
          <BlockMath math="=x^4+(A+B)x^3+(AB-2)x^2-(A+B)x+1" />

          <p className="mt-5 leading-8 text-gray-300">
            계수를 비교하면
          </p>

          <BlockMath math="A+B=1" />
          <BlockMath math="AB-2=-14" />
          <BlockMath math="AB=-12" />

          <p className="mt-5 leading-8 text-gray-300">
            따라서
          </p>

          <BlockMath math="A=4,\quad B=-3" />

          <BlockMath math="x^4+x^3-14x^2-x+1" />
          <BlockMath math="=(x^2+4x-1)(x^2-3x-1)" />
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="x^4+x^3-10x^2+x+1" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                삼차항과 일차항의 계수가 같으므로
              </p>

              <BlockMath math="(x^2+Ax+1)(x^2+Bx+1)" />

              <p>
                로 둡니다.
              </p>

              <BlockMath math="A+B=1,\quad AB=-12" />
              <BlockMath math="A=4,\quad B=-3" />

              <BlockMath math="x^4+x^3-10x^2+x+1" />
              <BlockMath math="=(x^2+4x+1)(x^2-3x+1)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="(x^2+4x+1)(x^2-3x+1)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="x^4+x^3-14x^2-x+1" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                삼차항과 일차항의 부호가 반대이므로
              </p>

              <BlockMath math="(x^2+Ax-1)(x^2+Bx-1)" />

              <p>
                로 둡니다.
              </p>

              <BlockMath math="A+B=1,\quad AB=-12" />
              <BlockMath math="A=4,\quad B=-3" />

              <BlockMath math="x^4+x^3-14x^2-x+1" />
              <BlockMath math="=(x^2+4x-1)(x^2-3x-1)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="(x^2+4x-1)(x^2-3x-1)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-purple-300">
            참고 : 상반식의 일반적인 풀이
          </h3>

          <p className="leading-8 text-gray-300">
            일반적으로 상반식은 <InlineMath math="x^2" />으로 나누어 <InlineMath math="x+\frac1x" />를 치환하여 풀 수도 있습니다.
          </p>

          <BlockMath math="x^4+x^3-10x^2+x+1" />

          <p className="mt-5 leading-8 text-gray-300">
            양변을 <InlineMath math="x^2" />으로 나누면
          </p>

          <BlockMath math="x^2+x-10+\frac1x+\frac1{x^2}" />

          <p className="mt-5 leading-8 text-gray-300">
            이고, 이를 정리하면
          </p>

          <BlockMath math="\left(x^2+\frac1{x^2}\right)+\left(x+\frac1x\right)-10" />

          <p className="mt-5 leading-8 text-gray-300">
            여기서
          </p>

          <BlockMath math="x^2+\frac1{x^2}=\left(x+\frac1x\right)^2-2" />

          <p className="mt-5 leading-8 text-gray-300">
            이므로
          </p>

          <BlockMath math="\left(x+\frac1x\right)^2+\left(x+\frac1x\right)-12" />

          <p className="mt-5 leading-8 text-gray-300">
            <InlineMath math="t=x+\frac1x" />로 치환하면
          </p>

          <BlockMath math="t^2+t-12" />
          <BlockMath math="=(t+4)(t-3)" />

          <p className="mt-5 leading-8 text-gray-300">
            이것이 참고서에서 흔히 사용하는 일반적인 풀이입니다.
            이 단원에서는 먼저 인수의 모양을 역으로 조립하는 방법을 익히고,
            일반적인 치환 풀이와 비교해 봅니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            정리
          </h3>

          <p className="leading-8 text-gray-300">
            역으로 조립하는 인수분해에서는 먼저 전체를 전개하려고 하지 않습니다.
            일부 항을 먼저 인수분해해 보고, 인수의 모양을 예상한 뒤,
            필요하면 모르는 부분을 <InlineMath math="A,\;B" />로 두고 계수를 비교합니다.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/30 p-7">
        <h2 className="mb-6 text-3xl font-bold">
          1.17 그 외의 인수분해
        </h2>

        <p className="mb-6 leading-8 text-gray-300">
          인수분해가 바로 보이지 않을 때는 모든 문자를 한꺼번에 보려고 하지 않습니다.
          개수가 적거나 차수가 낮은 문자 하나를 선택하고, 그 문자에 대해 내림차순으로 정리합니다.
          그러면 문자가 없는 부분이나 계수 부분에서 인수분해의 단서를 찾을 수 있습니다.
        </p>

        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-blue-300">
            정리하는 순서
          </h3>

          <ol className="ml-6 list-decimal space-y-3 text-gray-300">
            <li>개수가 적거나 차수가 낮은 문자를 선택한다.</li>
            <li>그 문자에 대해 내림차순으로 정리한다.</li>
            <li>선택한 문자가 없는 부분을 먼저 인수분해한다.</li>
            <li>그 결과를 단서로 전체 식을 인수분해한다.</li>
          </ol>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="x^2y+y^2z-y^3-x^2z" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                먼저 항을 묶어 봅니다.
              </p>

              <BlockMath math="x^2y+y^2z-y^3-x^2z" />
              <BlockMath math="=x^2(y-z)+y^2(z-y)" />

              <p>
                여기서 <InlineMath math="z-y=-(y-z)" />이므로
              </p>

              <BlockMath math="=x^2(y-z)-y^2(y-z)" />
              <BlockMath math="=(y-z)(x^2-y^2)" />

              <p>
                이제 합과 차의 곱을 사용합니다.
              </p>

              <BlockMath math="=(y-z)(x-y)(x+y)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="(y-z)(x-y)(x+y)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="a^2(b-c)+b^2(c-a)+c^2(a-b)" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                <InlineMath math="a" />에 대해 내림차순으로 정리합니다.
              </p>

              <BlockMath math="a^2(b-c)+b^2(c-a)+c^2(a-b)" />
              <BlockMath math="=(b-c)a^2+(c^2-b^2)a+b^2c-bc^2" />

              <p>
                가운데 계수와 상수항을 인수분해합니다.
              </p>

              <BlockMath math="c^2-b^2=-(b-c)(b+c)" />
              <BlockMath math="b^2c-bc^2=bc(b-c)" />

              <p>
                따라서
              </p>

              <BlockMath math="=(b-c)a^2-(b-c)(b+c)a+bc(b-c)" />
              <BlockMath math="=(b-c)\{a^2-(b+c)a+bc\}" />

              <p>
                괄호 안을 인수분해하면
              </p>

              <BlockMath math="a^2-(b+c)a+bc=(a-b)(a-c)" />

              <BlockMath math="a^2(b-c)+b^2(c-a)+c^2(a-b)" />
              <BlockMath math="=(b-c)(a-b)(a-c)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="-(a-b)(b-c)(c-a)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl bg-black/40 p-5">
          <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

          <p className="mb-4 text-gray-300">
            다음 식을 인수분해하여라.
          </p>

          <BlockMath math="ab(a-b)+bc(b-c)+ca(c-a)" />

          <details className="rounded-xl border border-white/15 p-5">
            <summary className="cursor-pointer font-semibold text-yellow-300">
              풀이 보기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">
              <p>
                먼저 전개한 뒤 <InlineMath math="a" />에 대해 정리합니다.
              </p>

              <BlockMath math="ab(a-b)+bc(b-c)+ca(c-a)" />
              <BlockMath math="=a^2b-ab^2+b^2c-bc^2+ac^2-a^2c" />

              <BlockMath math="=(b-c)a^2+(c^2-b^2)a+bc(b-c)" />

              <p>
                예제 2와 같은 구조가 나타납니다.
              </p>

              <BlockMath math="c^2-b^2=-(b-c)(b+c)" />

              <BlockMath math="=(b-c)a^2-(b-c)(b+c)a+bc(b-c)" />
              <BlockMath math="=(b-c)\{a^2-(b+c)a+bc\}" />
              <BlockMath math="=(b-c)(a-b)(a-c)" />

              <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="-(a-b)(b-c)(c-a)" />
                입니다.
              </p>
            </div>
          </details>
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-green-300">
            참고 : 하나로 묶어 보는 인수분해
          </h3>

          <p className="leading-8 text-gray-300">
            다음 식 하나를 기억해 두면 여러 인수분해 공식을 한꺼번에 연결해서 볼 수 있습니다.
          </p>

          <BlockMath math="x^6-1=(x-1)(x+1)(x^2-x+1)(x^2+x+1)" />

          <div className="mt-5 rounded-xl bg-black/40 p-5">
            <BlockMath math="x^2-1=(x-1)(x+1)" />
            <BlockMath math="x^3-1=(x-1)(x^2+x+1)" />
            <BlockMath math="x^3+1=(x+1)(x^2-x+1)" />
            <BlockMath math="x^4+x^2+1=(x^2-x+1)(x^2+x+1)" />
          </div>

          <p className="mt-5 leading-8 text-gray-300">
            또한 <InlineMath math="x^6-1" />은 다음 두 가지 방식으로도 볼 수 있습니다.
          </p>

          <BlockMath math="x^6-1=(x^3-1)(x^3+1)" />
          <BlockMath math="x^6-1=(x^2-1)(x^4+x^2+1)" />

          <p className="mt-5 leading-8 text-gray-300">
            같은 식을 여러 방식으로 인수분해하면, 각각의 공식이 따로 떨어져 있는 것이 아니라
            하나의 구조 안에서 연결되어 있음을 알 수 있습니다.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h3 className="mb-4 text-xl font-bold text-yellow-300">
            정리
          </h3>

          <p className="leading-8 text-gray-300">
            인수분해가 바로 보이지 않으면 문자를 하나 선택해 내림차순으로 정리합니다.
            특히 선택한 문자가 없는 부분을 먼저 인수분해하면 전체 인수분해의 방향이 보이는 경우가 많습니다.
          </p>
        </div>
      </section>
    </>
  );
}