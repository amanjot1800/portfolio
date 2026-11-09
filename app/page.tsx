import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/ui/marquee";
import { coreSkills } from "@/data/skills";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <Hero />
      <Marquee items={coreSkills} label="Core stack" />
    </main>
  );
}
