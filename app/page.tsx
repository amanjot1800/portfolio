import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { GivingBack } from "@/components/sections/giving-back";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { Marquee } from "@/components/ui/marquee";
import { coreSkills } from "@/data/skills";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <Hero />
      <Marquee items={coreSkills} label="Core stack" />
      <Work index="01" />
      <Experience index="02" />
      <Skills index="03" />
      <Education index="04" />
      <GivingBack index="05" />
      <Contact index="06" />
    </main>
  );
}
