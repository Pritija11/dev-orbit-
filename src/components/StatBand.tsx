import { Container } from "./Container";
import { Reveal } from "./Reveal";

const stats = [
  { label: "CLOUDS SUPPORTED", value: "AWS · Azure · GCP" },
  { label: "DEPLOY EVENTS LOGGED", value: "100%" },
  { label: "ACCESS MODEL", value: "Role-based" },
];

export function StatBand() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-alt)]">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <p className="font-serif text-xl text-[var(--fg)] md:text-2xl">
            Built for platform teams
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                {s.label}
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--fg)]">
                {s.value}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
