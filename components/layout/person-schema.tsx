import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { coreSkills } from "@/data/skills";

/** Structured data so search engines understand who the site is about. */
export function PersonSchema() {
  const current = experience.find((job) => job.current);
  const [city, region] = profile.location.split(",").map((part) => part.trim());

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.siteUrl,
    jobTitle: profile.role,
    description: profile.tagline,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: city, addressRegion: region, addressCountry: "CA" },
    sameAs: [profile.links.github, profile.links.linkedin],
    ...(current && { worksFor: { "@type": "Organization", name: current.company } }),
    alumniOf: education.map((school) => ({ "@type": "CollegeOrUniversity", name: school.school })),
    knowsAbout: coreSkills,
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}
