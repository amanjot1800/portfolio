import { ContactForm } from "@/components/ui/contact-form";
import { Section } from "@/components/ui/section";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export function Contact({ index }: { index: string }) {
  const hasForm = contact.formspreeId.length > 0;

  return (
    <Section
      id="contact"
      index={index}
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build
          <br />
          <span className="text-accent">something.</span>
        </>
      }
    >
      <div className={`grid gap-12 ${hasForm ? "lg:grid-cols-2" : ""}`}>
        <div className="flex flex-col gap-6">
          <p className="max-w-md text-lg text-muted">
            {contact.blurb}
            {hasForm && ` ${contact.formPrompt}`}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="w-fit break-all text-2xl font-bold text-accent underline-offset-8 hover:underline sm:text-3xl"
          >
            {profile.email}
          </a>
          <ul className="flex flex-wrap gap-6 font-mono text-sm">
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={profile.resume} download className="hover:text-accent">
                Resume PDF ↓
              </a>
            </li>
          </ul>
        </div>

        {hasForm && <ContactForm formId={contact.formspreeId} email={profile.email} />}
      </div>
    </Section>
  );
}
