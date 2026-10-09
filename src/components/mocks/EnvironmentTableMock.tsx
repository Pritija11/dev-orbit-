const rows = [
  { env: "production", version: "v2.14.0", status: { label: "Healthy", tone: "green" as const } },
  { env: "staging", version: "v2.15.0-rc1", status: { label: "Deploying", tone: "amber" as const } },
  { env: "dev", version: "v2.16.0-dev", status: { label: "Healthy", tone: "green" as const } },
  { env: "qa", version: "v2.14.0", status: { label: "Drift", tone: "rose" as const } },
];

export function EnvironmentTableMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[#e0a0a0]" />
        <span className="h-2 w-2 rounded-full bg-[#e8cf9a]" />
        <span className="h-2 w-2 rounded-full bg-[#a8d4af]" />
        <span className="ml-2 text-xs font-medium text-[var(--fg-muted)]">
          Environments
        </span>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr_0.9fr] gap-2 border-b border-[var(--border)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
        <span>Environment</span>
        <span>Version</span>
        <span>Status</span>
      </div>
      <div className="flex flex-col">
        {rows.map((r) => (
          <div
            key={r.env}
            className="grid grid-cols-[1.2fr_1fr_0.9fr] items-center gap-2 border-b border-[var(--border)] px-4 py-2.5 text-xs last:border-b-0"
          >
            <span className="font-medium text-[var(--fg)]">{r.env}</span>
            <span className="font-mono text-[var(--fg-muted)]">{r.version}</span>
            <span className={`pill pill-${r.status.tone} w-fit`}>
              {r.status.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
