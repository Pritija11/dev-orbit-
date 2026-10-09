import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { OrbitDiagram } from "@/components/OrbitDiagram";
import { LogoStrip } from "@/components/LogoStrip";
import { StatBand } from "@/components/StatBand";
import { GradientCTA } from "@/components/GradientCTA";
import { PipelineMock } from "@/components/mocks/PipelineMock";
import { EnvironmentTableMock } from "@/components/mocks/EnvironmentTableMock";
import { ProvidersMock } from "@/components/mocks/ProvidersMock";
import { AuditMock } from "@/components/mocks/AuditMock";
import {
  IconPipeline,
  IconLayers,
  IconShieldCheck,
  IconLog,
  IconGrid,
  IconPlug,
  IconArrowRight,
} from "@/components/icons";

const faqs = [
  {
    q: "Do we need to migrate our CI/CD pipelines to use DevOrbit?",
    a: "No. DevOrbit connects to the CI/CD providers, cloud accounts, and clusters you already run — it sits on top of your existing stack rather than replacing it.",
  },
  {
    q: "Does DevOrbit replace our cloud provider or Kubernetes setup?",
    a: "No. DevOrbit is the control layer on top — it orchestrates and visualizes what's already running in AWS, Azure, GCP, or your clusters, not a replacement for any of them.",
  },
  {
    q: "Is this only useful for large platform teams?",
    a: "No. Small teams running a handful of services benefit just as much — often more, since there's no dedicated platform engineer keeping track of what's deployed where.",
  },
  {
    q: "When can we get access?",
    a: "DevOrbit is currently in early access. Join the waitlist and we'll reach out as we bring on new teams.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--border)]">
        <Container className="grid grid-cols-1 items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow>Internal Developer Platform</Eyebrow>
            <h1 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-[var(--fg)] md:text-5xl">
              The control center for everything your team ships.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              DevOrbit centralizes your deployments, environments, and
              pipelines into one dashboard — so your team stops switching
              between six different tools to answer one simple question:
              what&apos;s actually running right now?
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact">
                Join the waitlist
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/platform" variant="ghost">
                See the platform
              </Button>
            </div>
          </div>

          <Reveal>
            <OrbitDiagram className="aspect-[5/4] w-full" />
          </Reveal>
        </Container>
      </section>

      <StatBand />
      <LogoStrip />

      {/* Feature 1 — Deployment Orchestration */}
      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Ship confidently</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Deployment Orchestration
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Stop stitching scripts together. Trigger, promote, and roll
              back deployments across every environment from one place —
              instead of logging into each CI provider separately.
            </p>

            <div className="mt-8 flex flex-col divide-y divide-[var(--border)]">
              <div className="flex items-start gap-3 py-4 first:pt-0">
                <IconPipeline className="mt-0.5 h-4 w-4 flex-none text-[var(--fg-faint)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    One-click promotion
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    Dev to staging to production, with every step visible
                    to the whole team.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-4">
                <IconArrowRight className="mt-0.5 h-4 w-4 flex-none text-[var(--fg-faint)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    Rollback in one click
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    No need to touch the CI console when something needs
                    to come back.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Deployments", "Promotions", "Rollbacks", "Environments"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg-muted)]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <PipelineMock
              steps={[
                {
                  icon: IconPipeline,
                  title: "Review",
                  description: "Checks policy, risk, and standards before merge.",
                  status: { label: "Passed", tone: "green" },
                },
                {
                  icon: IconGrid,
                  title: "Build",
                  description: "Compiles and packages the release artifact.",
                  rows: ["Cache restore", "+2 more"],
                },
                {
                  icon: IconPlug,
                  title: "Deploy",
                  description: "Rolls out to the target environment.",
                  status: { label: "Running", tone: "amber" },
                  rows: ["Canary rollout", "+1 more"],
                },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* Feature 2 — Environment Visibility */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <Eyebrow>See everything</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Environment Visibility
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              See every environment — dev, staging, production — and
              exactly what&apos;s running in each, in real time. No more
              pinging three people on Slack to find out.
            </p>

            <div className="mt-8 flex flex-col divide-y divide-[var(--border)]">
              <div className="flex items-start gap-3 py-4 first:pt-0">
                <IconLayers className="mt-0.5 h-4 w-4 flex-none text-[var(--fg-faint)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    Live status per environment
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    Version, commit, and health — always current, not a
                    stale wiki page.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-4">
                <IconGrid className="mt-0.5 h-4 w-4 flex-none text-[var(--fg-faint)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    Drift detection
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    Know the moment an environment stops matching what it
                    should be running.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:order-1">
            <EnvironmentTableMock />
          </Reveal>
        </Container>
      </section>

      {/* Feature 3 — Pipeline Automation */}
      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Connect what you have</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Pipeline Automation
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Connect the CI/CD pipelines you already run and get one
              unified status view, instead of five browser tabs open to
              five different dashboards.
            </p>

            <div className="mt-8 flex flex-col divide-y divide-[var(--border)]">
              <div className="flex items-start gap-3 py-4 first:pt-0">
                <IconPlug className="mt-0.5 h-4 w-4 flex-none text-[var(--fg-faint)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    No pipeline rewrites
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    DevOrbit reads status from your existing providers, it
                    doesn&apos;t replace them.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-4">
                <IconLog className="mt-0.5 h-4 w-4 flex-none text-[var(--fg-faint)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    Unified build status
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    A failed build in any provider shows up the same way,
                    immediately.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ProvidersMock />
          </Reveal>
        </Container>
      </section>

      {/* Feature 4 — Access & Audit Trail */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <Eyebrow>Know who did what</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Access &amp; Audit Trail
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Role-based access control and a full audit log of who
              deployed what, when, and to where — answered in seconds, not
              an afternoon of digging through logs.
            </p>

            <div className="mt-8 flex flex-col divide-y divide-[var(--border)]">
              <div className="flex items-start gap-3 py-4 first:pt-0">
                <IconShieldCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--fg-faint)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    Per-environment permissions
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    Staging access doesn&apos;t have to mean a path to
                    production.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-4">
                <IconLog className="mt-0.5 h-4 w-4 flex-none text-[var(--fg-faint)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    On by default
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    Audit logging isn&apos;t an add-on you configure later.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:order-1">
            <AuditMock />
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Things people usually ask before signing up
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <div className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[1.1fr_1.4fr] md:gap-10">
                  <h3 className="text-base font-medium text-[var(--fg)]">
                    {item.q}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Get started with DevOrbit"
        description="Join the waitlist and we'll reach out as we bring on new teams during early access."
        buttonLabel="Join the waitlist"
        buttonHref="/contact"
      />
    </>
  );
}
