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
  "I like to build things for people, stay creative, and have a passion for code quality and shipping products that are useful to others.",
];

export type IntroPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const INTRO_PHOTOS = {
  primary: {
    src: "/photos/headshot.png",
    alt: `${NAME} professional headshot`,
    width: 978,
    height: 1024,
  },
  secondary: [
    {
      src: "/photos/graduation.png",
      alt: `${NAME} at graduation`,
      width: 768,
      height: 1024,
    },
    {
      src: "/photos/outdoor.png",
      alt: `${NAME} portrait outdoors`,
      width: 768,
      height: 1024,
    },
  ] satisfies IntroPhoto[],
};

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
    title: "project 1",
    description:
      "A placeholder project description. Replace this with a short summary of what you built, the problem it solves, and the tech you used.",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    index: "02",
    title: "project 2",
    description:
      "A placeholder project description. Replace this with a short summary of what you built, the problem it solves, and the tech you used.",
    tags: ["Node.js", "PostgreSQL", "API"],
  },
  {
    index: "03",
    title: "project 3",
    description:
      "A placeholder project description. Replace this with a short summary of what you built, the problem it solves, and the tech you used.",
    tags: ["Python", "AI", "Automation"],
  },
  {
    index: "04",
    title: "project 4",
    description:
      "A placeholder project description. Replace this with a short summary of what you built, the problem it solves, and the tech you used.",
    tags: ["Flutter", "Firebase", "Mobile"],
  },
];

export type SkillGroup = {
  title: string;
  titleLines?: [string, string];
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
    titleLines: ["Frontend", "Development"],
    items: ["React", "Next.js", "Flutter", "Astro", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Systems",
    titleLines: ["Backend", "Systems"],
    items: ["Node.js", "Python", "FastAPI", "Java", "Spring Boot", "PostgreSQL", "Firebase", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    titleLines: ["Cloud &", "DevOps"],
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
    company: "ServiceNow",
    period: "Year in Industry",
    role: "Technical Support Engineer — Platform Technologies",
    description:
      "A year in industry supporting the ServiceNow platform on the backend — diagnosing client issues and resolving critical, high-priority incidents under tight deadlines so businesses could keep operating. Used MySQL to patch databases and Unix commands to trace logs and track down root causes.",
    tags: ["ServiceNow Platform", "MySQL", "Unix", "Technical Support", "Backend troubleshooting"],
  },
];

export const CONTACT_INTRO =
  "I'm always open to discussing new projects, collaborations, or opportunities. Whether you have a question or just want to say hi — my inbox is always open.";
