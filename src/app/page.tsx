import { Intro } from "@/components/sections/Intro";
import { Work } from "@/components/sections/Work";
import { Content } from "@/components/sections/Content";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Intro />
      <Work />
      <Content />
      <Contact />
    </main>
  );
}
