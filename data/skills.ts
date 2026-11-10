export type SkillGroup = {
  title: string;
  skills: string[];
};

/** The stack I reach for first. Highlighted in the skills grid and shown in the marquee. */
export const coreSkills = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Python",
  "SQL",
  "Azure",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Claude API",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Bash", "C++", "C", "ColdFusion"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express", "REST APIs", "Microservices", "API Authentication", "Webhooks"],
  },
  {
    title: "Front-end",
    skills: ["React", "TypeScript", "HTML & CSS", "Responsive Design", "Bootstrap", "jQuery", "Qt"],
  },
  {
    title: "Databases",
    skills: ["MSSQL", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Elasticsearch", "Query Optimization"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Azure Automation", "Power Automate", "AWS"],
  },
  {
    title: "AI & ML",
    skills: ["Claude API", "Claude Agent SDK", "PyTorch", "LLM Applications", "GitHub Copilot", "Cursor"],
  },
  {
    title: "Testing & Practices",
    skills: ["Unit Testing", "Integration Testing", "Code Review", "Agile", "Object-Oriented Design", "Documentation"],
  },
  {
    title: "Linux & Debugging",
    skills: ["Linux", "WSL", "systemctl", "gdb", "valgrind", "perf", "vim"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Tableau", "Power BI"],
  },
];
