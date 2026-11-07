import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export default function Home() {
  const [first, last] = profile.name.split(" ");

  return (
    <main className="flex flex-1 flex-col">
      <Container className="flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-center py-16">
        {profile.openToWork && (
          <p className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="size-2 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
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
      </Container>
    </main>
  );
}
