// Edit this file to update the content across the site.

export const NAME = "Shuhayb Miah";
export const ROLE = "Full Stack Developer & AI Agent Builder";
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

export const INTRO_PARAGRAPHS = [
  "I build AI agents and full-stack products that solve real problems. From intelligent automation to production-grade web experiences — I ship things that work.",
];

export const PROJECTS_INTRO =
  "From AI agents that automate complex workflows to full-stack platforms that scale. Here's what I've been building.";

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
    title: "visqa",
    description:
      "An AI-driven testing platform that automatically tests Android and iOS apps without writing test scripts. It uses vision capabilities to \"see\" the app screen, identify UI elements, and decide what actions to take — mimicking a human tester autonomously.",
    tags: ["Python", "FastAPI", "Appium", "Selenium", "Google Cloud Run", "Docker"],
  },
  {
    index: "02",
    title: "quickcook",
    description:
      "Transforms recipe videos from YouTube, TikTok, and Instagram into structured, actionable recipes using AI — then helps users match recipes to their pantry, generate shopping lists, and engage with a cooking community.",
    tags: ["Flutter", "Firebase", "AI Agents", "Provider", "Material 3"],
  },
  {
    index: "03",
    title: "insync fitness",
    description:
      "A women's fitness and wellness app that syncs workouts with menstrual cycle phases, helping users optimize exercise performance with cycle-aware recommendations and tracking.",
    tags: ["Flutter", "Provider", "Supabase", "PostgreSQL", "FL Chart"],
  },
  {
    index: "04",
    title: "resourceriq",
    description:
      "An automated voice-calling platform that screens job candidates via AI-powered phone calls, assessing their availability and interest in new opportunities. Recruiters upload candidates via CSV, configure campaigns for job openings, and the system autonomously contacts candidates using natural-sounding AI voice agents — capturing transcripts, dispositions, and lead temperature scores.",
    tags: ["React 19", "TypeScript", "Fastify", "Prisma ORM", "PostgreSQL"],
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
  index: string;
  company: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    index: "01",
    company: "Deloitte Digital",
    period: "2021 — Present",
    role: "Software Engineer",
    description:
      "Building enterprise-grade solutions and AI-driven tools for global clients. Developing intelligent automation pipelines, AI agents, and cloud-native applications in an agile environment.",
    tags: ["AI Agents & Automation", "Enterprise clients", "Cloud-native apps", "Agile delivery"],
  },
  {
    index: "02",
    company: "BMW",
    period: "2018 — 2019",
    role: "Software Engineer (Placement)",
    description:
      "Year-long industrial placement developing internal tools and systems. Gained hands-on experience in automotive software engineering within a global corporation.",
    tags: ["Internal tooling", "Automotive tech", "Global team"],
  },
];

export const CONTACT_INTRO =
  "I'm always open to discussing new projects, collaborations, or opportunities. Whether you have a question or just want to say hi — my inbox is always open.";
