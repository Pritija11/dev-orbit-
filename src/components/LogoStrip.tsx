import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

const tools = [
  "GitHub",
  "GitLab",
  "AWS",
  "Azure",
  "Google Cloud",
  "Kubernetes",
  "Docker",
  "Terraform",
];

export function LogoStrip() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-serif text-2xl font-medium tracking-tight text-[var(--fg)] md:text-3xl">
            Works with the tools you already use
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
            DevOrbit doesn&apos;t replace your stack — it sits on top of it,
            pulling your pipelines, environments, and services into one
            view.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {tools.map((t) => (
              <span
                key={t}
                className="font-mono text-sm text-[var(--fg-muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <Button href="/platform" variant="ghost" className="mt-10">
            See how it connects
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
