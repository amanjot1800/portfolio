import { profile } from "@/data/profile";

export default function Home() {
  const [first, last] = profile.name.split(" ");

  return (
    <main className="flex flex-1 flex-col justify-between px-4 py-8 sm:px-10 sm:py-10">
      <header className="flex items-center justify-between font-mono text-sm text-muted">
        <span className="text-fg">AS/</span>
        <span>{profile.location}</span>
      </header>

      <section className="py-16">
        {profile.openToWork && (
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            Open to full-time roles
          </p>
        )}
        <h1 className="text-display-xl font-bold uppercase">
          {first}
          <br />
          <span className="text-accent">{last}.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg text-muted sm:text-xl">
          <span className="text-fg">{profile.role}.</span> {profile.tagline}
        </p>
      </section>

      <footer className="flex flex-col gap-4 font-mono text-sm sm:flex-row sm:items-end sm:justify-between">
        <nav className="flex gap-6">
          <a className="hover:text-accent" href={profile.links.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="hover:text-accent" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="hover:text-accent" href={`mailto:${profile.email}`}>
            Email ↗
          </a>
        </nav>
        <p className="text-muted">Portfolio under construction. New sections shipping soon.</p>
      </footer>
    </main>
  );
}
