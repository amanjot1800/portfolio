export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Small label above the title, e.g. "Personal project · In progress". */
  eyebrow: string;
  summary: string;
  /** Optional one-line result, shown large. */
  outcome?: string;
  stack: string[];
  /** Decorative illustration shown on the card. */
  visual?: "chart" | "flow";
  /** Steps for the "flow" visual. */
  flow?: string[];
  /** The flagship card takes the large slot in the grid. */
  featured?: boolean;
  /** Card style: "accent" fills the card with the accent colour. */
  tone?: "default" | "accent";
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "wealthy",
    title: "Wealthy",
    eyebrow: "Personal project · In progress",
    summary:
      "A portfolio intelligence platform. Scheduled Python pipelines pull real-time market data into SQLite, track performance and produce daily profit and loss summaries, while Claude API features turn prices, fundamentals and technical indicators into investment insights.",
    stack: ["Python", "React", "TypeScript", "SQLite", "Claude API"],
    visual: "chart",
    featured: true,
  },
  {
    slug: "hintonmarket",
    title: "HintonMarket",
    eyebrow: "Desktop app",
    summary:
      "A management system for a farmers market, with inventory, sales, customer and reporting modules. Object-oriented C++ with a Qt interface on a relational SQLite backend.",
    stack: ["C++", "Qt", "SQLite"],
  },
  {
    slug: "e-signature-automation",
    title: "Agreement signing, automated",
    eyebrow: "Work · National Judicial Institute",
    summary:
      "Replaced a manual download, email, track and file routine with one flow inside the app: generated agreements go out through Adobe Sign, webhooks report status live, and signed copies file themselves in SharePoint.",
    outcome: "25 hours a week, back to the team.",
    stack: ["Adobe Sign API", "Webhooks", "SharePoint API", "REST"],
    visual: "flow",
    flow: ["Generate", "Send", "Track", "File"],
    tone: "accent",
  },
];
