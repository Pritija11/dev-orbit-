const entries = [
  { actor: "m.santos", action: "Deployed production", target: "api-gateway", time: "2m ago" },
  { actor: "r.khadka", action: "Promoted staging → production", target: "billing-svc", time: "41m ago" },
  { actor: "a.ferreira", action: "Rolled back", target: "auth-svc", time: "1h ago" },
  { actor: "j.lindqvist", action: "Granted staging access", target: "data-pipeline", time: "3h ago" },
];

export function AuditMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <span className="text-xs font-medium text-[var(--fg-muted)]">
          Audit log
        </span>
        <span className="pill pill-neutral">Live</span>
      </div>
      <div className="flex flex-col">
        {entries.map((e) => (
          <div
            key={`${e.actor}-${e.time}`}
            className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-2.5 text-xs last:border-b-0"
          >
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-[var(--fg)]">
                <span className="font-medium">{e.actor}</span>{" "}
                <span className="text-[var(--fg-muted)]">{e.action}</span>
              </span>
              <span className="font-mono text-[11px] text-[var(--fg-faint)]">
                {e.target}
              </span>
            </div>
            <span className="flex-none font-mono text-[11px] text-[var(--fg-faint)]">
              {e.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
