import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { GradientCTA } from "@/components/GradientCTA";
import {
  IconPlug,
  IconShieldCheck,
  IconGrid,
  IconGlobe,
  IconUser,
  IconLayers,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "DevOrbit is an early-stage developer tools startup building the control center for deployments, environments, and pipelines.",
};

const quickFacts = [
  { icon: IconGlobe, label: "Remote-first" },
  { icon: IconUser, label: "Small team" },
  { icon: IconLayers, label: "Early access" },
];

const values = [
  {
    icon: IconPlug,
    title: "Connect, don't replace",
    description:
      "We built DevOrbit to sit on top of the tools teams already run, not to force a migration. If it requires ripping out your CI/CD to adopt, we consider that a failure.",
  },
  {
    icon: IconGrid,
    title: "One view, not another tab",
    description:
      "Every feature we build has to make the dashboard more complete, not add a seventh tool to the pile. If it doesn't reduce tab-switching, it doesn't ship.",
  },
  {
    icon: IconShieldCheck,
    title: "Audit by default",
    description:
      "Access control and audit logging aren't a premium tier bolted on later — they're part of the first deployment you make through DevOrbit.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>About DevOrbit</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-[var(--fg)] md:text-5xl">
              Built by people tired of their own tool sprawl.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              DevOrbit is an early-stage developer tools startup that
              started from a simple, recurring annoyance: knowing
              what&apos;s actually running in production shouldn&apos;t
              require five browser tabs and a Slack search. We&apos;re a
              remote-first team building the dashboard we wished existed.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--border)] pt-8">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <f.icon className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
                  <span className="text-sm text-[var(--fg-muted)]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="max-w-3xl font-serif text-3xl font-medium leading-[1.3] tracking-tight text-[var(--fg)] md:text-4xl">
              &ldquo;Tracking a deployment shouldn&apos;t take longer than
              shipping it.&rdquo;
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
              The idea we keep building around
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <IconPlug className="h-5 w-5 text-[var(--fg-faint)]" />
            <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[var(--fg)]">
              Why we started DevOrbit
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              Every growing engineering team hits the same wall: deployments
              that used to be simple start spanning multiple environments,
              multiple clouds, sometimes multiple clusters. The tools don&apos;t
              grow with you — they just multiply. A CI dashboard here, a
              cloud console there, a spreadsheet nobody trusts tracking
              what&apos;s actually live.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              We kept hitting that wall ourselves, on different teams, in
              different jobs, and kept reaching for the same missing piece:
              one place that actually shows what&apos;s running, where, and
              who touched it last. DevOrbit is that piece.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <IconLayers className="h-5 w-5 text-[var(--fg-faint)]" />
            <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[var(--fg)]">
              Where we are right now
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              DevOrbit is early — we&apos;re in active development and
              bringing on a small number of teams during early access
              rather than opening up broadly from day one. That&apos;s
              deliberate: we&apos;d rather get the core experience right
              for a handful of teams than ship something half-finished to
              everyone at once.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              If you join the waitlist, you&apos;re not signing up for a
              finished product — you&apos;re signing up to help shape one
              that&apos;s still being built around real usage, not
              guesses.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)]">
              Principles we build with
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              These shape what we say yes to building, and — more often —
              what we say no to.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <v.icon className="h-6 w-6 text-[var(--fg)]" />
                <h3 className="mt-4 text-lg font-medium text-[var(--fg)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                  {v.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Want early access?"
        description="Tell us what you're running and what's slowing your team down — we'll reach out as we bring on new teams."
        buttonLabel="Join the waitlist"
        buttonHref="/contact"
      />
    </>
  );
}
