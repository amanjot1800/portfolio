import { Section } from "@/components/ui/section";
import { community } from "@/data/community";
import { education } from "@/data/education";

export function About({ index }: { index: string }) {
  return (
    <Section id="about" index={index} eyebrow="About" title="Learning & giving back">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="sr-only">Education</h3>
          {education.map((school) => (
            <article
              key={school.school}
              className="flex flex-1 flex-col gap-2 rounded-card border border-line bg-surface p-6 sm:p-8"
            >
              <p className="font-mono text-eyebrow text-accent">
                <time>{school.start}</time> — <time>{school.end}</time>
              </p>
              <h4 className="text-2xl font-bold tracking-tight sm:text-3xl">{school.school}</h4>
              <p className="text-lg">{school.credential}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {school.details.map((detail) => (
                  <li key={detail} className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted">
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="flex flex-col gap-8 rounded-card border border-line p-6 sm:p-8">
          <h3 className="font-mono text-eyebrow uppercase tracking-widest text-muted">Community</h3>
          {community.map((item, i) => (
            <div key={item.organization} className={`flex flex-col gap-2 ${i > 0 ? "border-t border-line pt-8" : ""}`}>
              <p className="font-mono text-eyebrow text-muted">{item.years}</p>
              {item.impact ? (
                <>
                  <p className="text-display-md font-bold text-accent">{item.impact}</p>
                  <p className="max-w-md text-lg leading-relaxed">
                    {item.description} with <span className="font-bold">{item.organization}</span>.
                  </p>
                </>
              ) : (
                <p className="max-w-md text-lg leading-relaxed text-muted">
                  <span className="font-bold text-fg">{item.organization}.</span> {item.description}
                </p>
              )}
            </div>
          ))}
        </article>
      </div>
    </Section>
  );
}
