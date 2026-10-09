const providers = [
  { name: "GitHub Actions", detail: "12 workflows", status: { label: "Synced", tone: "green" as const } },
  { name: "GitLab CI", detail: "4 pipelines", status: { label: "Synced", tone: "green" as const } },
  { name: "Jenkins", detail: "2 jobs", status: { label: "Syncing", tone: "amber" as const } },
];

export function ProvidersMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm ${className}`}
    >
      <div className="border-b border-[var(--border)] px-4 py-3">
        <span className="text-xs font-medium text-[var(--fg-muted)]">
          Connected pipelines
        </span>
      </div>
      <div className="flex flex-col">
        {providers.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3 text-xs last:border-b-0"
          >
            <div className="flex flex-col">
              <span className="font-medium text-[var(--fg)]">{p.name}</span>
              <span className="text-[var(--fg-faint)]">{p.detail}</span>
            </div>
            <span className={`pill pill-${p.status.tone}`}>{p.status.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-4 py-3 text-xs text-[var(--fg-faint)]">
        <span className="h-1.5 w-1.5 rounded-full border border-dashed border-[var(--border-strong)]" />
        Add another provider
      </div>
    </div>
  );
}
