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
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export const HERO_TAGLINE =
  "I build AI agents and full-stack products that solve real problems. From intelligent automation to production-grade web experiences — I ship things that actually work.";

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
      "This site. A fast, animated portfolio built from scratch with the Next.js App Router, server components and motion — designed with a blue gradient light/dark theme and deployed on Vercel.",
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

export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "AI & Agents",
    items: [
      "AI Agent Architecture",
      "LLM Integration",
      "Prompt Engineering",
      "Computer Vision",
      "Google Gemini",
      "Vertex AI",
      "OpenAI API",
      "LangChain",
    ],
  },
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "Flutter", "Astro", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Systems",
    items: ["Node.js", "Python", "FastAPI", "Java", "Spring Boot", "PostgreSQL", "Firebase", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Google Cloud", "AWS", "Docker", "CI/CD", "Turborepo", "Git/GitHub", "Vercel", "Agile/Scrum"],
  },
];

export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Deloitte Digital",
    period: "2021 — Present",
    role: "Software Engineer",
    description:
      "Building enterprise-grade solutions and AI-driven tools for global clients. Developing intelligent automation pipelines, AI agents, and cloud-native applications in an agile environment.",
    tags: ["AI Agents & Automation", "Enterprise clients", "Cloud-native apps", "Agile delivery"],
  },
];
