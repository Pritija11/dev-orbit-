import Link from "next/link";
import { Container } from "./Container";
import { IconMail, IconOrbit, IconPhone, IconMapPin } from "./icons";

const platformLinks = [
  "Deployment Orchestration",
  "Environment Visibility",
  "Pipeline Automation",
  "Access & Audit Trail",
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-[#0d0e10] text-white/55">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2 font-mono text-sm text-white">
            <IconOrbit className="h-5 w-5" />
            devorbit
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            One control center for every deployment, environment, and
            pipeline your team runs — instead of six different dashboards.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/35">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/platform" className="hover:text-white">Platform</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/35">
            Platform
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {platformLinks.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/35">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 flex-none" />
              <a href="mailto:hello@devorbit.ltd" className="hover:text-white">
                hello@devorbit.ltd
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 flex-none" />
              <a href="tel:+9779812345678" className="hover:text-white">
                +977 981-2345678
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>Baneshwor, Kathmandu 44600, Nepal</span>
            </li>
            <li>Remote-first team</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} DevOrbit. All rights reserved.</p>
          <p>Built for teams tired of tool sprawl.</p>
        </Container>
      </div>
    </footer>
  );
}
