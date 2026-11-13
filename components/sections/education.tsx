import { Section } from "@/components/ui/section";
import { education } from "@/data/education";

export function Education({ index }: { index: string }) {
  return (
    <Section id="education" index={index} eyebrow="Education" title="Education">
      <div className="grid gap-4 lg:grid-cols-2">
        {education.map((school) => (
          <article
            key={school.school}
            className="flex flex-col gap-6 rounded-card border border-line bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <p className="font-mono text-eyebrow text-accent">
                <time>{school.start}</time> — <time>{school.end}</time>
              </p>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{school.school}</h3>
              <p className="text-lg">{school.credential}</p>
              {school.minor && <p className="text-lg text-muted">{school.minor}</p>}
              <p className="font-mono text-eyebrow text-muted">{school.location}</p>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label={`${school.school} details`}>
              {school.details.map((detail) => (
                <li key={detail} className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted">
                  {detail}
                </li>
              ))}
            </ul>

            {school.courses.length > 0 && (
              <div className="mt-auto border-t border-line pt-6">
                <h4 className="mb-4 font-mono text-eyebrow uppercase tracking-widest text-muted">Relevant courses</h4>
                <ul className="grid gap-x-6 gap-y-2 text-base sm:grid-cols-2">
                  {school.courses.map((course) => (
                    <li key={course} className="flex gap-3">
                      <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
