import { now } from "@/data/now";

export function NowPanel() {
  return (
    <aside
      aria-labelledby="now-title"
      className="rounded-card border border-line bg-surface/80 p-6 backdrop-blur-sm sm:p-7"
    >
      <div className="mb-5 flex items-center justify-between gap-4 font-mono text-eyebrow">
        <h2 id="now-title" className="flex items-center gap-2 uppercase tracking-widest text-accent">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          Now
        </h2>
        <p className="text-muted">Updated {now.updated}</p>
      </div>
      <dl className="divide-y divide-line">
        {now.items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-4">
            <dt className="w-24 shrink-0 font-mono text-eyebrow uppercase tracking-wider text-muted sm:pt-0.5">
              {item.label}
            </dt>
            <dd className="text-base leading-snug">{item.text}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
