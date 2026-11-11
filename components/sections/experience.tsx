import { Section } from "@/components/ui/section";
import { experience, type Job } from "@/data/experience";

function JobEntry({ job }: { job: Job }) {
  return (
    <li className="grid gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-10 lg:py-16">
      <header className="flex flex-col gap-2 lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:col-span-4 lg:self-start">
        <p className="flex items-center gap-2 font-mono text-eyebrow text-accent">
          {job.current && (
            <span className="size-2 animate-pulse rounded-full bg-accent motion-reduce:animate-none" aria-hidden="true" />
          )}
          <time>{job.start}</time> — <time>{job.end}</time>
          {job.current && <span className="sr-only">(current role)</span>}
        </p>
        <h3 className="text-display-md font-bold">{job.company}</h3>
        <p className="text-lg">{job.role}</p>
        <p className="font-mono text-eyebrow text-muted">{job.location}</p>
      </header>

      <div className="flex flex-col gap-10 lg:col-span-8">
        <p className="max-w-2xl text-lg text-muted sm:text-xl">{job.summary}</p>

        <ul className="flex flex-col gap-6">
          {job.highlights.map((h) => (
            <li key={h.headline} className="border-l-2 border-accent pl-5">
              <p className="text-xl font-bold leading-snug sm:text-2xl">{h.headline}</p>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{h.detail}</p>
            </li>
          ))}
        </ul>

        <div>
          <h4 className="mb-4 font-mono text-eyebrow uppercase tracking-widest text-muted">Day to day</h4>
          <ul className="flex max-w-2xl flex-col gap-3 text-base leading-relaxed">
            {job.responsibilities.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-line-strong" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={`Tech used at ${job.company}`}>
          {job.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function Experience({ index }: { index: string }) {
  return (
    <Section id="experience" index={index} eyebrow="Experience" title="Where I've worked">
      <ol>
        {experience.map((job) => (
          <JobEntry key={`${job.company}-${job.start}`} job={job} />
        ))}
      </ol>
    </Section>
  );
}
