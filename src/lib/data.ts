// Edit this file to update the content across the site.

export const NAME = "Shuhayb Miah";
export const ROLE = "Full-Stack Developer & AI Engineer";
export const LOCATION = "United Kingdom";

export const SOCIALS = {
  email: "shuhaybmiah@gmail.com",
  github: "https://github.com/shuhayb",
  linkedin: "https://www.linkedin.com/in/shuhaybmiah/",
};

export const NAV_LINKS = [
  { label: "intro", href: "#intro" },
  { label: "work", href: "#work" },
  { label: "content", href: "#content" },
  { label: "contact", href: "#contact" },
];

export const INTRO_PARAGRAPHS = [
  "Hi, I'm Shuhayb — a full-stack developer and AI engineer based in the UK. I've been building for the web for a while now, and lately I've been building much more with AI: from intelligent automation to production-grade products that actually ship.",
  "I love taking an idea from a blank page to something people can actually use — clean interfaces, solid systems, and the AI glue in between.",
];

export const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AI Agents",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "LLM Integration",
  "Vercel",
];

export type Project = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  live?: string;
  source?: string;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "personal portfolio",
    description:
      "This site. A fast, animated portfolio built from scratch with the Next.js App Router, server components and motion — designed with a warm light/dark theme and deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    source: "https://github.com/shuhayb/new-portfolio",
  },
  {
    index: "02",
    title: "harry potter app",
    description:
      "An interactive app exploring the Harry Potter universe — characters, houses and spells — wired up to a public API with a responsive, component-driven UI.",
    tags: ["TypeScript", "React", "REST API"],
    source: "https://github.com/shuhayb/harrypotter",
  },
  {
    index: "03",
    title: "ai agent workflow",
    description:
      "An experiment in autonomous agents that chain LLM calls and tools together to complete multi-step tasks end-to-end with minimal human input.",
    tags: ["AI Agents", "Python", "LLM Integration"],
  },
  {
    index: "04",
    title: "full-stack product",
    description:
      "A production-grade web application with authentication, a typed API layer and a Postgres database — shipped and iterated on in a tight agile loop.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
];

export type ContentItem = {
  title: string;
  href: string;
};

export const CONTENT: ContentItem[] = [
  {
    title: "interstellar",
    href: "https://en.wikipedia.org/wiki/Interstellar_(film)",
  },
  {
    title: "jk rowling: a year in the life",
    href: "https://www.youtube.com/watch?v=Ij97LWo0I7s",
  },
  {
    title: "the pixar story",
    href: "https://en.wikipedia.org/wiki/The_Pixar_Story",
  },
];
