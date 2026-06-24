// Edit this file to update the content across the site.

export const SOCIALS = {
  email: "shuhaybmiah@gmail.com",
  github: "https://github.com/shuhayb",
  linkedin: "https://www.linkedin.com/in/shuhaybmiah/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Content I Like", href: "#content" },
  { label: "Contact", href: "#contact" },
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
  "Framer Motion",
  "Vercel",
  "LLM Integration",
  "Prisma",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  source?: string;
};

// TODO: swap these for your real projects — just edit the fields below.
export const PROJECTS: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "This site. A fast, animated single-page portfolio built from scratch with the App Router, server components, and motion — designed in a clean light theme and deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    source: "https://github.com/shuhayb/new-portfolio",
  },
  {
    title: "Harry Potter App",
    description:
      "An interactive app exploring the Harry Potter universe — characters, houses and spells — wired up to a public API with a responsive, component-driven UI.",
    tags: ["TypeScript", "React", "REST API"],
    source: "https://github.com/shuhayb/harrypotter",
  },
  {
    title: "AI Agent Workflow",
    description:
      "An experiment in autonomous agents that chain LLM calls and tools to complete multi-step tasks end-to-end with minimal human input.",
    tags: ["AI Agents", "Python", "LLM Integration"],
  },
  {
    title: "Full-Stack Product",
    description:
      "A production-grade web application with authentication, a typed API layer and a Postgres database — shipped and iterated on in an agile loop.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
];

export type ContentItem = {
  title: string;
  by: string;
  note: string;
  href?: string;
  kind: "Reading" | "Watching" | "Listening" | "Following";
};

// TODO: fill these with the content you actually love.
export const CONTENT: ContentItem[] = [
  {
    kind: "Reading",
    title: "Engineering & AI essays",
    by: "Blogs and newsletters",
    note: "Long-form writing on building software, shipping fast, and where AI is heading.",
  },
  {
    kind: "Watching",
    title: "Build-in-public & deep dives",
    by: "YouTube creators",
    note: "Technical walkthroughs, system design breakdowns, and people building real things.",
  },
  {
    kind: "Listening",
    title: "Tech & founder podcasts",
    by: "Conversations with builders",
    note: "Stories from engineers and founders on the craft and the grind behind products.",
  },
  {
    kind: "Following",
    title: "Developers worth your time",
    by: "Folks on the timeline",
    note: "Engineers and AI researchers who share genuinely useful, no-fluff insights.",
  },
];

export const EXPERIENCE_INTRO =
  "I'm a full-stack developer and AI engineer. I've been building for the web for a while now, and recently I've been building much more with AI — from intelligent automation to production-grade products. I'm documenting the journey here.";
