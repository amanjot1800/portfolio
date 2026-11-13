export type School = {
  school: string;
  credential: string;
  /** Shown on its own line under the credential. */
  minor?: string;
  details: string[];
  location: string;
  start: string;
  end: string;
  /** Relevant courses, shown as a list under the school. Hidden when empty. */
  courses: string[];
};

export const education: School[] = [
  {
    school: "Carleton University",
    credential: "B.S. Computer Science, AI & ML stream",
    minor: "Mathematics minor",
    details: ["Third-year standing", "GPA 11.42 / 12"],
    location: "Ottawa, ON",
    start: "Sep 2024",
    end: "Apr 2028 (expected)",
    courses: [],
  },
  {
    school: "Algonquin College",
    credential: "Computer Programming diploma",
    details: ["GPA 3.92 / 4"],
    location: "Ottawa, ON",
    start: "May 2019",
    end: "Apr 2021",
    courses: [],
  },
];
