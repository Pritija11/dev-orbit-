import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IconBadge } from "@/components/IconBadge";
import { GradientCTA } from "@/components/GradientCTA";
import {
  IconPipeline,
  IconLayers,
  IconShieldCheck,
  IconLog,
  IconPlug,
  IconGrid,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Deployment orchestration, environment visibility, pipeline automation, and access control — the DevOrbit platform explained.",
};

const features = [
  {
    icon: IconPipeline,
    variant: "cyan" as const,
    title: "Deployment Orchestration",
    description:
      "Trigger, promote, and roll back deployments across every environment from one place — instead of logging into each CI provider separately to find the right button.",
    extra:
      "Promotions follow the path you define — dev to staging to production — with each step visible to the whole team, not buried in a Slack thread asking who pushed what.",
    items: [
      "Trigger deploys across environments",
      "One-click promotion between stages",
      "Rollback without touching the CI console",
    ],
  },
  {
    icon: IconGrid,
    variant: "blue" as const,
    title: "Environment Visibility",
    description:
      "See every environment — dev, staging, production, and anything in between — and exactly what version is running in each, updated in real time.",
    extra:
      "No more asking three people on Slack whether staging is actually on the latest build. One view, always current, for every environment your team runs.",
    items: [
      "Live status per environment",
      "Version and commit tracking",
      "Drift detection between environments",
    ],
  },
  {
    icon: IconPlug,
    variant: "violet" as const,
    title: "Pipeline Automation",
    description:
      "Connect the CI/CD pipelines you already run — GitHub Actions, GitLab CI, or others — and get one unified status view instead of five open browser tabs.",
    extra:
      "DevOrbit doesn't replace your pipelines. It reads their status and exposes it in one place, so a failed build in any provider shows up the same way, immediately.",
    items: [
      "Connects to existing CI/CD providers",
      "Unified build and deploy status",
      "No pipeline rewrites required",
    ],
  },
  {
    icon: IconLayers,
    variant: "green" as const,
    title: "Environment & Cluster Awareness",
    description:
      "DevOrbit understands Kubernetes clusters, namespaces, and workloads natively — not just a raw stream of deploy events with no context behind them.",
    extra:
      "When something changes in a cluster, DevOrbit knows which service, which namespace, and which environment it belongs to — so the dashboard means something.",
    items: [
      "Native Kubernetes cluster awareness",
      "Namespace and workload mapping",
      "Multi-cloud, not locked to one provider",
    ],
  },
  {
    icon: IconShieldCheck,
    variant: "amber" as const,
    title: "Role-Based Access Control",
    description:
      "Decide exactly who can view, deploy, or roll back in each environment — production access doesn't have to mean the same thing as staging access.",
    extra:
      "Permissions are set per environment, not globally, so a contractor with staging access never has a path to touch production by accident.",
    items: [
      "Per-environment permissions",
      "Granular roles, not all-or-nothing access",
      "Changes take effect immediately",
    ],
  },
  {
    icon: IconLog,
    variant: "rose" as const,
    title: "Audit Trail",
    description:
      "Every deploy, rollback, and access change is logged automatically — searchable later, so answering \"who deployed this\" takes seconds, not an afternoon.",
    extra:
      "The audit log isn't an add-on you configure later. It's on by default from the first deployment you make through DevOrbit.",
    items: [
      "Every action logged automatically",
      "Searchable deploy and access history",
      "On by default, not an optional add-on",
    ],
  },
];

const useCases = [
  {
    title: "Small teams without a dedicated platform engineer",
    description:
      "When nobody's full-time job is keeping track of what's deployed where, DevOrbit becomes the shared source of truth instead of a tribal-knowledge problem.",
  },
  {
    title: "Teams running multiple clouds or clusters",
    description:
      "If your services are split across AWS, Azure, GCP, or several Kubernetes clusters, DevOrbit is the one view that doesn't care which provider a given service happens to run on.",
  },
  {
    title: "Teams tired of incident response via Slack archaeology",
    description:
      "When something breaks, DevOrbit shows what changed, where, and by whom — without scrolling through a week of deploy notifications across different channels.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Platform</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-serif text-4xl font-medium tracking-tight text-[var(--fg)] md:text-5xl">
              Everything your deployments need, in one dashboard.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              DevOrbit connects to the CI/CD, cloud, and Kubernetes setup
              you already run, then gives your team one place to see,
              trigger, and audit everything that happens after code is
              merged.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="flex flex-col divide-y divide-[var(--border)]">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 60}>
                <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-[3rem_1.4fr_1fr] md:gap-10">
                  <IconBadge icon={feature.icon} variant={feature.variant} />
                  <div>
                    <h2 className="font-serif text-xl font-medium text-[var(--fg)]">
                      {feature.title}
                    </h2>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
                      {feature.description}
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
                      {feature.extra}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2.5 self-start">
                    {feature.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2 text-sm text-[var(--fg-muted)]"
                      >
                        <span className="h-1 w-1 flex-none translate-y-[-2px] rounded-full bg-[var(--fg)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)]">
              Where DevOrbit fits best
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              It&apos;s not built for one specific team size — it&apos;s
              built for the moment your deployments outgrow what one
              person can track in their head.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7">
                  <h3 className="text-lg font-medium text-[var(--fg)]">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {u.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Want to see it on your own stack?"
        description="Join the waitlist and tell us what you're running — we'll reach out as we bring on new teams."
        buttonLabel="Join the waitlist"
        buttonHref="/contact"
      />
    </>
  );
}
