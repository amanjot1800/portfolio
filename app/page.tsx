import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
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
      <About index="04" />
    </main>
  );
}
