export type Volunteering = {
  organization: string;
  years: string;
  /** Optional headline figure, shown large. */
  impact?: string;
  description: string;
};

export const community: Volunteering[] = [
  {
    organization: "Khalsa Aid",
    years: "2024 – 2026",
    impact: "100,000+ lbs",
    description:
      "of food packed and delivered to more than 20 food banks and housing communities through annual food drives.",
  },
  {
    organization: "Bluesfest",
    years: "2019 – 2023",
    description: "Festival operations, event logistics, customer service and fundraising.",
  },
];
