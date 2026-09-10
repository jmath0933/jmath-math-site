"use client";

import { useMemo, useState } from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import PolynomialOperationsPage
  from "../components/commonMath1/polynomial/PolynomialOperationsPage";
import RemainderAndFactorizationPage
  from "../components/commonMath1/polynomial/RemainderAndFactorizationPage";
import ComplexNumbersPage
  from "../components/commonMath1/equation/ComplexNumbersPage";
import QuadraticEquationPage
  from "../components/commonMath1/equation/QuadraticEquationPage";
import QuadraticEquationAndFunctionPage
  from "../components/commonMath1/equation/QuadraticEquationAndFunctionPage";
import VariousEquationsPage
  from "../components/commonMath1/equation/VariousEquationsPage";
import InequalityPropertiesPage
  from "../components/commonMath1/inequality/InequalityPropertiesPage";
import LinearInequalityPage
  from "../components/commonMath1/inequality/LinearInequalityPage";
import QuadraticInequalityPage
  from "../components/commonMath1/inequality/QuadraticInequalityPage";
import CountingPage
  from "../components/commonMath1/counting/CountingPage";
import PermutationPage
  from "../components/commonMath1/counting/PermutationPage";
import CombinationPage
  from "../components/commonMath1/counting/CombinationPage";
import MatrixPage
  from "../components/commonMath1/matrix/MatrixPage";
import CoordinatePlanePage
  from "../components/commonMath2/coordinateGeometry/CoordinatePlanePage";
import LineEquationPage
  from "../components/commonMath2/coordinateGeometry/LineEquationPage";
import CircleEquationPage
  from "../components/commonMath2/coordinateGeometry/CircleEquationPage";
 import TransformationPage
  from "../components/commonMath2/coordinateGeometry/TransformationPage";
import SetAndSubsetPage
  from "../components/commonMath2/setsAndLogic/SetAndSubsetPage";
import SetOperationsPage
  from "../components/commonMath2/setsAndLogic/SetOperationsPage";
import PropositionPage
  from "../components/commonMath2/setsAndLogic/PropositionPage";
import AbsoluteInequalityPage
  from "../components/commonMath2/setsAndLogic/AbsoluteInequalityPage";
import FunctionBasicsPage
  from "../components/commonMath2/function/FunctionBasicsPage";  
import CompositeAndInverseFunctionPage
  from "../components/commonMath2/function/CompositeAndInverseFunctionPage";  
const curriculum = {
  중1: {
    "준비 중": ["준비 중"],
  },
  중2: {
    "준비 중": ["준비 중"],
  },
  중3: {
    "준비 중": ["준비 중"],
  },
  공통수학1: {
    다항식: ["다항식의 연산", "나머지정리와 인수분해"],
    방정식: ["복소수", "이차방정식", "이차방정식과 이차함수", "여러 가지 방정식",],
    부등식: ["부등식의 성질", "일차부등식", "이차부등식"],
    "순열과 조합": ["경우의 수", "순열", "조합"],
    행렬: ["행렬의 뜻과 연산"],
  },
  공통수학2: {
    "도형의 방정식": ["평면좌표", "직선의 방정식", "원의 방정식", "도형의 이동"],
    "집합과 명제": ["집합의 뜻과 포함관계", "집합의 연산", "명제", "절대부등식"],
    함수: ["함수", "합성함수와 역함수", "유리함수", "무리함수"],
  },
  대수: {
    "준비 중": ["준비 중"],
  },
  "확률과 통계": {
    "준비 중": ["준비 중"],
  },
  미적분1: {
    "준비 중": ["준비 중"],
  },
  미적분2: {
    "준비 중": ["준비 중"],
  },
  기하: {
    "준비 중": ["준비 중"],
  },
};

type Subject = keyof typeof curriculum;
type BigUnit<S extends Subject = Subject> = keyof (typeof curriculum)[S];

export default function Home() {
  const [subject, setSubject] = useState<Subject>("공통수학1");
  const [bigUnit, setBigUnit] = useState<string>("다항식");
  const [smallUnit, setSmallUnit] = useState<string>("다항식의 연산");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bigUnits = useMemo(() => {
    return Object.keys(curriculum[subject]);
  }, [subject]);

  const smallUnits = useMemo(() => {
    const units = curriculum[subject] as Record<string, string[]>;
    return units[bigUnit] ?? ["준비 중"];
  }, [subject, bigUnit]);

  function changeSubject(nextSubject: Subject) {
    const nextBigUnits = Object.keys(curriculum[nextSubject]);
    const nextBigUnit = nextBigUnits[0];
    const nextSmallUnit =
      (curriculum[nextSubject] as Record<string, string[]>)[nextBigUnit][0];

    setSubject(nextSubject);
    setBigUnit(nextBigUnit);
    setSmallUnit(nextSmallUnit);
  }

  function changeBigUnit(nextBigUnit: string) {
    const nextSmallUnit =
      (curriculum[subject] as Record<string, string[]>)[nextBigUnit][0];

    setBigUnit(nextBigUnit);
    setSmallUnit(nextSmallUnit);
  }

  function renderPage() {
    if (
      subject === "공통수학1" &&
      bigUnit === "다항식" &&
      smallUnit === "다항식의 연산"
    ) {
      return <PolynomialOperationsPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "다항식" &&
      smallUnit === "나머지정리와 인수분해"
    ) {
      return <RemainderAndFactorizationPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "방정식" &&
      smallUnit === "복소수"
    ) {
      return <ComplexNumbersPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "방정식" &&
      smallUnit === "이차방정식"
    ) {
      return <QuadraticEquationPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "방정식" &&
      smallUnit === "이차방정식과 이차함수"
    ) {
      return <QuadraticEquationAndFunctionPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "방정식" &&
      smallUnit === "여러 가지 방정식"
    ) {
      return <VariousEquationsPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "부등식" &&
      smallUnit === "부등식의 성질"
    ) {
      return <InequalityPropertiesPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "부등식" &&
      smallUnit === "일차부등식"
    ) {
      return <LinearInequalityPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "부등식" &&
      smallUnit === "이차부등식"
    ) {
      return <QuadraticInequalityPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "순열과 조합" &&
      smallUnit === "경우의 수"
    ) {
      return <CountingPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "순열과 조합" &&
      smallUnit === "순열"
    ) {
      return <PermutationPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "순열과 조합" &&
      smallUnit === "조합"
    ) {
      return <CombinationPage />;
    }

    if (
      subject === "공통수학1" &&
      bigUnit === "행렬" &&
      smallUnit === "행렬의 뜻과 연산"
    ) {
      return <MatrixPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "도형의 방정식" &&
      smallUnit === "평면좌표"
    ) {
      return <CoordinatePlanePage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "도형의 방정식" &&
      smallUnit === "직선의 방정식"
    ) {
      return <LineEquationPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "도형의 방정식" &&
      smallUnit === "원의 방정식"
    ) {
      return <CircleEquationPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "도형의 방정식" &&
      smallUnit === "도형의 이동"
    ) {
      return <TransformationPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "집합과 명제" &&
      smallUnit === "집합의 뜻과 포함관계"
    ) {
      return <SetAndSubsetPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "집합과 명제" &&
      smallUnit === "집합의 연산"
    ) {
      return <SetOperationsPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "집합과 명제" &&
      smallUnit === "명제"
    ) {
      return <PropositionPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "집합과 명제" &&
      smallUnit === "절대부등식"
    ) {
      return <AbsoluteInequalityPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "함수" &&
      smallUnit === "함수"
    ) {
      return <FunctionBasicsPage />;
    }

    if (
      subject === "공통수학2" &&
      bigUnit === "함수" &&
      smallUnit === "합성함수와 역함수"
    ) {
      return <CompositeAndInverseFunctionPage />;
    }

    return (
      <ComingSoonPage
        subject={subject}
        bigUnit={bigUnit}
        smallUnit={smallUnit}
      />
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg border border-white/20 px-3 py-2 text-xl md:hidden"
            aria-label="메뉴 열기"
          >
            ☰
          </button>

          <div className="mr-2 hidden text-lg font-bold md:block">
            Jmath Studio
          </div>

          <select
            value={subject}
            onChange={(e) => changeSubject(e.target.value as Subject)}
            className="min-w-32 rounded-lg border border-white/25 bg-black px-3 py-2 text-sm"
          >
            {Object.keys(curriculum).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={bigUnit}
            onChange={(e) => changeBigUnit(e.target.value)}
            className="min-w-32 rounded-lg border border-white/25 bg-black px-3 py-2 text-sm"
          >
            {bigUnits.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={smallUnit}
            onChange={(e) => setSmallUnit(e.target.value)}
            className="min-w-40 flex-1 rounded-lg border border-white/25 bg-black px-3 py-2 text-sm"
          >
            {smallUnits.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-zinc-950 px-5 py-4 md:hidden">
            <p className="text-sm text-gray-400">현재 위치</p>
            <p className="mt-1 font-semibold">
              {subject} / {bigUnit} / {smallUnit}
            </p>
          </div>
        )}
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">

        {renderPage()}

        <footer className="mt-16 flex items-center justify-between border-t border-white/15 pt-6 text-sm text-gray-400">
          <button className="rounded-lg border border-white/20 px-4 py-2">
            ◀ 이전 단원
          </button>
          <button className="rounded-lg border border-white/20 px-4 py-2">
            목차
          </button>
          <button className="rounded-lg border border-white/20 px-4 py-2">
            다음 단원 ▶
          </button>
        </footer>
      </div>
    </main>
  );
}

function ComingSoonPage({
  subject,
  bigUnit,
  smallUnit,
}: {
  subject: string;
  bigUnit: string;
  smallUnit: string;
}) {
  return (
    <section className="rounded-2xl border border-white/30 p-7">
      <p className="mb-3 text-sm text-gray-400">{subject}</p>
      <h1 className="text-4xl font-bold">{smallUnit}</h1>
      <p className="mt-4 text-gray-300">
        {bigUnit} 단원의 이 페이지는 아직 준비 중입니다.
      </p>
    </section>
  );
}


