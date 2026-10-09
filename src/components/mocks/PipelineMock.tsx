import type { ComponentType } from "react";

type Step = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  status?: { label: string; tone: "green" | "amber" | "blue" };
  rows?: string[];
};

export function PipelineMock({
  steps,
  className = "",
}: {
  steps: Step[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {steps.map((step, i) => (
        <div key={step.title} className="flex w-full max-w-xs flex-col items-center">
          <div className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <step.icon className="h-4 w-4 text-[var(--fg-muted)]" />
                <span className="text-sm font-medium text-[var(--fg)]">
                  {step.title}
                </span>
              </div>
              {step.status && (
                <span className={`pill pill-${step.status.tone}`}>
                  {step.status.label}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs leading-5 text-[var(--fg-muted)]">
              {step.description}
            </p>
            {step.rows && (
              <div className="mt-3 flex flex-col gap-1.5">
                {step.rows.map((row) => (
                  <div
                    key={row}
                    className="rounded-md border border-[var(--border)] bg-[var(--bg-alt)] px-2.5 py-1.5 text-xs text-[var(--fg-muted)]"
                  >
                    {row}
                  </div>
                ))}
              </div>
            )}
          </div>
          {i < steps.length - 1 && (
            <div className="h-7 w-px border-l border-dashed border-[var(--border-strong)]" />
          )}
        </div>
      ))}
    </div>
  );
}
