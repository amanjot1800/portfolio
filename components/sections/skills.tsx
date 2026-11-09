import { Section } from "@/components/ui/section";
import { coreSkills, skillGroups } from "@/data/skills";

const core = new Set(coreSkills);

export function Skills({ index }: { index: string }) {
  return (
    <Section
      id="skills"
      index={index}
      eyebrow="Skills"
      title="The toolbox"
      action={
        <p className="flex items-center gap-2 font-mono text-eyebrow text-muted">
          <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
          Core stack
        </p>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <li
            key={group.title}
            className="flex flex-col gap-5 rounded-card border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-7"
          >
            <h3 className="font-mono text-eyebrow uppercase tracking-widest text-muted">{group.title}</h3>
            <ul className="flex flex-wrap gap-2" aria-label={group.title}>
              {group.skills.map((skill) => {
                const isCore = core.has(skill);
                return (
                  <li
                    key={skill}
                    className={`rounded-full border px-3.5 py-1.5 text-[0.9375rem] ${
                      isCore ? "border-accent bg-accent text-accent-fg font-medium" : "border-line-strong"
                    }`}
                  >
                    {skill}
                    {isCore && <span className="sr-only"> (core stack)</span>}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
