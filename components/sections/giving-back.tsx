import { Section } from "@/components/ui/section";
import { givingBack, type Volunteering } from "@/data/giving-back";

function VolunteerCard({ item }: { item: Volunteering }) {
  return (
    <article
      className={`flex flex-col gap-5 rounded-card border border-line p-6 sm:p-8 ${
        item.highlight ? "bg-surface lg:col-span-2" : ""
      }`}
    >
      <header className="flex flex-col gap-1">
        {item.years && <p className="font-mono text-eyebrow text-accent">{item.years}</p>}
        <h3 className="text-2xl font-bold tracking-tight">{item.organization}</h3>
        <p className="font-mono text-eyebrow uppercase tracking-widest text-muted">{item.role}</p>
      </header>

      {item.impact && (
        <div className="flex flex-col gap-2">
          <p className="text-display-md font-bold text-accent">{item.impact}</p>
          {item.description && <p className="max-w-md text-lg leading-relaxed">{item.description}</p>}
        </div>
      )}

      {!item.impact && item.description && <p className="text-lg leading-relaxed text-muted">{item.description}</p>}

      {item.stats && (
        <div className="flex flex-col gap-4">
          {item.statsLabel && <p className="text-base text-muted">{item.statsLabel}</p>}
          <ul className="grid gap-6 sm:grid-cols-2">
            {item.stats.map((stat) => (
              <li key={stat.value} className="flex flex-col gap-1">
                <span className="text-display-md font-bold text-accent">{stat.value}</span>
                <span className="max-w-xs text-base leading-relaxed">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.supported && (
        <div className="mt-auto flex flex-col gap-3 border-t border-line pt-5">
          <p className="font-mono text-eyebrow uppercase tracking-widest text-muted">Supported</p>
          <ul className="flex flex-wrap gap-2">
            {item.supported.map((name) => (
              <li key={name} className="rounded-full border border-line-strong px-3 py-1 text-sm">
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.activities && (
        <ul className="flex flex-col gap-2 text-lg">
          {item.activities.map((activity) => (
            <li key={activity} className="flex gap-3">
              <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {activity}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function GivingBack({ index }: { index: string }) {
  return (
    <Section id="giving-back" index={index} eyebrow="Giving back" title="Giving back">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {givingBack.map((item) => (
          <VolunteerCard key={`${item.organization}-${item.role}`} item={item} />
        ))}
      </div>
    </Section>
  );
}
