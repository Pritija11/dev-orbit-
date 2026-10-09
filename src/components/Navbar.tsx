"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { IconClose, IconMenu, IconOrbit } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm tracking-tight text-[var(--fg)]"
        >
          <IconOrbit className="h-6 w-6 text-[var(--primary)]" />
          devorbit
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-0.5 text-sm transition-colors ${
                  active
                    ? "border-[var(--primary)] font-medium text-[var(--primary)]"
                    : "border-transparent text-[var(--fg-muted)] hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-dark)] md:inline-flex"
        >
          Join waitlist
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-[var(--fg)] md:hidden"
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--border)] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-2 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-[var(--surface-tint)] font-medium text-[var(--fg)]"
                      : "text-[var(--fg-muted)] hover:bg-[var(--surface-tint)] hover:text-[var(--fg)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-[var(--border-strong)] px-4 py-2.5 text-center text-sm text-[var(--fg)]"
            >
              Join waitlist
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
