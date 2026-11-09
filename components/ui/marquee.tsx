type MarqueeProps = {
  items: string[];
  label: string;
};

function Track({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10">
          <span>{item}</span>
          <span aria-hidden="true">✳</span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee({ items, label }: MarqueeProps) {
  return (
    <div className="-mx-[5%] my-16 w-[110%] -rotate-2 overflow-hidden bg-accent py-5 text-accent-fg sm:my-24">
      <p className="sr-only">
        {label}: {items.join(", ")}
      </p>
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee text-3xl font-bold uppercase tracking-tight hover:[animation-play-state:paused] motion-reduce:animate-none sm:text-5xl"
      >
        <Track items={items} hidden />
        <Track items={items} hidden />
      </div>
    </div>
  );
}
