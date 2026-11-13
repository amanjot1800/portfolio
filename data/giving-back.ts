export type ImpactStat = {
  value: string;
  label: string;
};

export type Volunteering = {
  organization: string;
  role: string;
  years?: string;
  /** Headline figure shown large, followed by `description`. */
  impact?: string;
  description?: string;
  /** Team results, shown as big numbers. */
  stats?: ImpactStat[];
  statsLabel?: string;
  /** Charities or groups the work supported. */
  supported?: string[];
  /** Separate events or programs, shown as a list. */
  activities?: string[];
  /** Highlight cards take a wider slot in the grid. */
  highlight?: boolean;
};

export const givingBack: Volunteering[] = [
  {
    organization: "Khalsa Aid",
    role: "Food drives",
    years: "2024 – 2026",
    impact: "100,000+ lbs",
    description:
      "of food packed and delivered to more than 20 food banks and housing communities through annual food drives.",
  },
  {
    organization: "Bluesfest",
    role: "Green Team",
    years: "2022",
    statsLabel: "Our team's 2022 results",
    stats: [
      { value: "163,330", label: "beer cans collected, plus 2,194 other refundable items" },
      { value: "$19,887.80", label: "raised for local charities" },
    ],
    supported: [
      "Catholic Centre for Immigrants",
      "Laroche Park After-School Program",
      "SAEFTY Ottawa",
      "Blues In the Schools",
    ],
    highlight: true,
  },
  {
    organization: "Bluesfest",
    role: "Beer Tent Team",
    years: "2019",
    description: "Served beer and beverages to festival-goers.",
  },
  {
    organization: "Canadian Tulip Festival",
    role: "Event volunteer",
    years: "2019",
    description: "Directed traffic and guided visitors around the festival.",
  },
  {
    organization: "Algonquin College",
    role: "Student volunteer",
    years: "2019 – 2021",
    activities: ["Residence move-in", "AC Day 1", "Orientation Day", "Student Leadership Program"],
  },
];
