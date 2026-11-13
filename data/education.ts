export type Course = {
  code: string;
  name: string;
  /** e.g. "In progress" for current-term courses. */
  note?: string;
};

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
  courses: Course[];
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
    courses: [
      { code: "COMP 2406", name: "Fundamentals of Web Applications" },
      { code: "COMP 3005", name: "Database Management Systems" },
      { code: "COMP 3004", name: "Object-Oriented Software Engineering" },
      { code: "COMP 2402", name: "Abstract Data Types & Algorithms (Java)" },
      { code: "COMP 3000", name: "Operating Systems" },
      { code: "COMP 2804", name: "Discrete Structures II" },
      { code: "IRM 4002", name: "Network Technology" },
      { code: "MATH 1104", name: "Linear Algebra" },
    ],
  },
  {
    school: "Algonquin College",
    credential: "Computer Programming diploma",
    details: ["GPA 3.92 / 4"],
    location: "Ottawa, ON",
    start: "May 2019",
    end: "Apr 2021",
    courses: [
      { code: "CST8284", name: "Object-Oriented Programming (Java)" },
      { code: "CST8288", name: "OOP with Design Patterns" },
      { code: "CST8277", name: "Enterprise Application Programming" },
      { code: "CST8285", name: "Web Programming" },
      { code: "CST2355", name: "Database Systems" },
      { code: "CST8276", name: "Advanced Database Topics" },
      { code: "CST8102", name: "Operating Systems Fundamentals (GNU/Linux)" },
      { code: "CST8109", name: "Network Programming" },
      { code: "CST8390", name: "Business Intelligence & Data Analytics" },
    ],
  },
];
