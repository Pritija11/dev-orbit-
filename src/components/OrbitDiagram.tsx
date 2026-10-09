export function OrbitDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 420 380" className="h-full w-full" fill="none">
        <g transform="rotate(-10 210 190)" stroke="var(--border-strong)">
          <ellipse cx="210" cy="190" rx="170" ry="66" />
          <circle cx="380" cy="190" r="5" fill="var(--surface)" stroke="var(--border-strong)" />
          <circle
            cx="210"
            cy="256"
            r="6"
            fill="var(--accent)"
            stroke="var(--accent)"
          />
        </g>

        <g transform="rotate(22 210 190)" stroke="var(--border)">
          <ellipse cx="210" cy="190" rx="138" ry="98" />
          <circle cx="72" cy="190" r="4.5" fill="var(--surface)" stroke="var(--border-strong)" />
          <circle cx="277" cy="259" r="5" fill="var(--surface)" stroke="var(--border-strong)" />
        </g>

        <g transform="rotate(50 210 190)" stroke="var(--border-strong)">
          <ellipse cx="210" cy="190" rx="104" ry="46" />
          <circle
            cx="306"
            cy="190"
            r="5.5"
            fill="var(--accent-violet)"
            stroke="var(--accent-violet)"
          />
          <circle cx="114" cy="190" r="4" fill="var(--surface)" stroke="var(--border-strong)" />
        </g>

        <circle cx="210" cy="190" r="7" fill="var(--fg)" />
        <circle
          cx="210"
          cy="190"
          r="13"
          stroke="var(--border-strong)"
          strokeDasharray="2 4"
        />
      </svg>

      <div className="absolute left-[8%] top-[18%] flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-green)]" />
        <span className="text-xs font-medium text-[var(--fg)]">
          Connected
        </span>
      </div>

      <div className="absolute bottom-[14%] right-[6%] rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 shadow-sm">
        <span className="text-xs font-medium text-[var(--fg)]">
          3 environments
        </span>
      </div>
    </div>
  );
}
