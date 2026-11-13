import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { NowPanel } from "@/components/ui/now-panel";
import { profile } from "@/data/profile";

export function Hero() {
  const [first, last] = profile.name.split(" ");

  return (
    <section aria-labelledby="hero-title">
      <Container className="grid min-h-[calc(100svh-var(--nav-h))] content-center gap-10 py-12 xl:grid-cols-12 xl:gap-x-10 xl:py-10">
        <div className="xl:col-span-8 xl:row-start-1">
          {profile.openToWork && (
            <p className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="size-2 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
              Open to full-time roles
            </p>
          )}
          <h1 id="hero-title" className="text-display-xl font-bold uppercase">
            {first}
            <br />
            <span className="text-accent">{last}.</span>
          </h1>
        </div>

        <div className="xl:col-span-7 xl:row-start-2">
          <p className="max-w-xl text-lg text-muted sm:text-xl">
            <span className="text-fg">{profile.role}.</span> {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#work">View my work ↓</ButtonLink>
            <ButtonLink href={profile.resume} variant="outline" download>
              Download resume
            </ButtonLink>
          </div>
        </div>

        <div className="xl:col-span-4 xl:col-start-9 xl:row-span-2 xl:row-start-1 xl:self-end">
          <NowPanel />
        </div>
      </Container>
    </section>
  );
}
