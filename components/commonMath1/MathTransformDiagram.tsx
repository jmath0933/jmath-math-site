import { ReactNode } from "react";
import { InlineMath } from "react-katex";

type MathTransformStep = {
  title: string;
  math?: string;
  description?: string;
  content?: ReactNode;
  arrowLabel?: string;
};

type MathTransformDiagramProps = {
  steps: MathTransformStep[];
};

export default function MathTransformDiagram({
  steps,
}: MathTransformDiagramProps) {
  return (
    <div className="my-8 rounded-2xl border border-white/15 bg-white/5 p-5">
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={`${step.title}-${index}`}>
            <div className="rounded-xl border border-white/15 bg-black/30 p-5">
              <h4 className="mb-3 font-bold text-blue-300">
                {step.title}
              </h4>

              {step.math && (
                <p className="text-center text-xl text-white">
                  <InlineMath math={step.math} />
                </p>
              )}

              {step.description && (
                <p className="mt-3 leading-7 text-gray-300">
                  {step.description}
                </p>
              )}

              {step.content && <div className="mt-3">{step.content}</div>}
            </div>

            {index < steps.length - 1 && (
              <div className="flex flex-col items-center py-2 text-gray-400">
                {step.arrowLabel && (
                  <span className="mb-1 text-sm text-gray-300">
                    {step.arrowLabel}
                  </span>
                )}
                <span className="text-2xl leading-none">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};