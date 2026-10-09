import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { IconArrowRight } from "./icons";

export function GradientCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="bg-[#0d0e10]">
      <Container className="flex flex-col items-center gap-6 py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/60">
            {description}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <Link
            href={buttonHref}
            className="mt-2 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[#0d0e10] transition-colors hover:bg-white/90"
          >
            {buttonLabel}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
