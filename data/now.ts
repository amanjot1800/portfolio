export type NowItem = {
  label: string;
  text: string;
};

export const now = {
  updated: "November 2026",
  items: [
    { label: "Shipping", text: "Enterprise web apps at the National Judicial Institute" },
    { label: "Building", text: "AI agents with the Claude Agent SDK" },
    { label: "Studying", text: "Computer Science (AI & ML) at Carleton University" },
  ] satisfies NowItem[],
};
