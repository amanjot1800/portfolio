export type Highlight = {
  /** Short, verb-first outcome. Shown as a bold headline. */
  headline: string;
  detail: string;
};

export type Job = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: Highlight[];
  responsibilities: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "National Judicial Institute",
    role: "Web Application Developer",
    location: "Ottawa, ON",
    start: "Oct 2021",
    end: "Present",
    current: true,
    summary:
      "I build and run the learning platforms used by thousands of Canadian judges. It's a small team, so I own work end to end, from requirements and design to production fixes.",
    highlights: [
      {
        headline: "Automated agreement signing end to end.",
        detail:
          "Replaced a manual download-email-track-file process with the Adobe Sign API, webhooks for live status and automatic filing to SharePoint, giving staff back about 25 hours a week.",
      },
      {
        headline: "Made a slow app fast.",
        detail:
          "Traced a 10-second page load to repeated and redundant database queries, then added query caching, indexes and lazy loading to bring it under 3 seconds.",
      },
      {
        headline: "Upgraded a legacy platform without downtime.",
        detail:
          "Refactored about 400 ColdFusion files to make a major version upgrade possible, testing in phases so day-to-day work was never disrupted.",
      },
    ],
    responsibilities: [
      "Build full-stack applications and reusable Spring Boot services behind REST APIs, with React and TypeScript front ends.",
      "Integrate with Adobe, Microsoft and Asana using secure authentication and data integration patterns.",
      "Run CI/CD with GitHub Actions and automate workflows with Azure Automation, Power Automate and Python/Bash, saving 5+ hours of manual work a week.",
      "Build Tableau dashboards and the data pipelines that feed them.",
      "Build AI agents with the Claude Agent SDK.",
      "Write unit and integration tests, review code and document systems in an Agile team.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "ColdFusion",
      "MSSQL",
      "Azure",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Python",
      "Tableau",
    ],
  },
  {
    company: "Invest Ottawa",
    role: "Web Designer (Co-op)",
    location: "Ottawa, ON",
    start: "Sep 2020",
    end: "Dec 2020",
    summary: "Helped small businesses build their online presence and start selling online.",
    highlights: [
      {
        headline: "Launched three e-commerce sites.",
        detail:
          "Designed, built, tested and launched online stores for three small businesses, giving each a way to sell online.",
      },
    ],
    responsibilities: [
      "Worked with designers, business owners and marketing teams to turn business needs into working sites.",
      "Fixed front-end issues and tuned responsive layouts across browsers and screen sizes.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "E-commerce"],
  },
];
