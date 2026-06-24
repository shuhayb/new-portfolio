import { Intro } from "@/components/sections/Intro";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Intro />
      <Work />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
