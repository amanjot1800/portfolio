import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/70 backdrop-blur-md">
      <Container className="flex h-(--nav-h) items-center justify-between gap-6 font-mono text-sm">
        <Link href="/" className="text-base font-medium" aria-label={`${profile.name}, home`}>
          AS<span className="text-accent">/</span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-6">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-colors hover:text-accent sm:inline"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-colors hover:text-accent sm:inline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center rounded-full border border-accent px-4 text-accent transition-colors hover:bg-accent hover:text-accent-fg"
          >
            Say hello ↗
          </a>
        </nav>
      </Container>
    </header>
  );
}
