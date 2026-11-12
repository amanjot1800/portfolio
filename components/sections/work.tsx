import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { projects, type Project } from "@/data/projects";

function ChartVisual() {
  return (
    <div aria-hidden="true" className="flex flex-1 flex-col gap-4 rounded-2xl border border-line bg-bg p-5 sm:p-6">
      <div className="flex justify-between font-mono text-eyebrow text-muted">
        <span>Portfolio performance</span>
        <span>Daily P/L</span>
      </div>
      <svg viewBox="0 0 600 160" preserveAspectRatio="none" className="min-h-36 w-full flex-1 sm:min-h-44">
        <polyline
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="2"
          strokeDasharray="6 6"
          vectorEffect="non-scaling-stroke"
          points="0,122 100,116 200,108 300,100 400,92 500,86 600,78"
        />
        <polyline
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          points="0,132 50,118 100,124 150,96 200,104 250,80 300,88 350,62 400,70 450,44 500,52 550,30 600,22"
        />
      </svg>
      <div className="rounded-xl border border-dashed border-line-strong px-4 py-3 text-sm leading-relaxed text-muted">
        <span className="font-mono text-xs text-accent">✳ Claude insight</span>
        <br />
        Prices, fundamentals and technical indicators, summarised every day.
      </div>
    </div>
  );
}

function FlowVisual({ steps }: { steps: string[] }) {
  return (
    <ol aria-label="How it works" className="grid grid-cols-2 gap-2 font-mono text-sm">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2 rounded-xl border border-current/25 px-3 py-2">
          <span className="text-xs opacity-60">{String(i + 1).padStart(2, "0")}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const accent = project.tone === "accent";
  const muted = accent ? "text-accent-fg/75" : "text-muted";

  return (
    <article
      className={`flex h-full flex-col gap-6 rounded-card border p-6 sm:p-8 ${
        accent ? "border-transparent bg-accent text-accent-fg" : "border-line bg-surface"
      } ${project.featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      <p className={`font-mono text-eyebrow uppercase tracking-widest ${muted}`}>{project.eyebrow}</p>

      {project.visual === "chart" && <ChartVisual />}

      <div className="flex flex-col gap-3">
        <h3 className={`font-bold ${project.featured ? "text-display-md" : "text-3xl leading-tight tracking-tight"}`}>
          {project.title}
        </h3>
        {project.outcome && <p className="text-xl font-bold leading-snug sm:text-2xl">{project.outcome}</p>}
        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${muted}`}>{project.summary}</p>
      </div>

      {project.visual === "flow" && project.flow && <FlowVisual steps={project.flow} />}

      <ul className="mt-auto flex flex-wrap gap-2" aria-label={`Built with`}>
        {project.stack.map((tech) => (
          <li
            key={tech}
            className={`rounded-full border px-3 py-1 font-mono text-xs ${
              accent ? "border-accent-fg/30" : "border-line-strong text-muted"
            }`}
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-5 font-mono text-sm">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function Work({ index }: { index: string }) {
  return (
    <Section
      id="work"
      index={index}
      eyebrow="Selected work"
      title="Things I've built"
      action={
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm transition-colors hover:text-accent"
        >
          All repos on GitHub ↗
        </a>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
