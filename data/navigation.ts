export type NavLink = {
  label: string;
  href: string;
};

/** Page sections shown in the nav, in page order. */
export const sectionLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
