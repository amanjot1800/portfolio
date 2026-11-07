import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.links.github, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
];

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 font-mono text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name} · {profile.location}
        </p>
        <ul className="flex flex-wrap gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-fg transition-colors hover:text-accent"
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.label} ↗
              </a>
            </li>
          ))}
          <li>
            <a href="#top" className="text-fg transition-colors hover:text-accent">
              Back to top ↑
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
