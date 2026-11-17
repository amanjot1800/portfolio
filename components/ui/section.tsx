import type { ReactNode } from "react";
import { Container } from "./container";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
  children: ReactNode;
};

export function Section({ id, index, eyebrow, title, action, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-12 sm:py-16">
      <Container>
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
          <div>
            <p className="mb-3 font-mono text-eyebrow text-accent">
              {index} / {eyebrow}
            </p>
            <h2 id={`${id}-title`} className="text-display-lg font-bold uppercase">
              {title}
            </h2>
          </div>
          {action}
        </Reveal>
        <Reveal delay={0.1}>{children}</Reveal>
      </Container>
    </section>
  );
}
