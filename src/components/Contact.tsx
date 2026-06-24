import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { SOCIALS } from "@/lib/data";
import Reveal from "./Reveal";

const LINKS = [
  {
    label: "Email",
    value: SOCIALS.email,
    href: `mailto:${SOCIALS.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@shuhayb",
    href: SOCIALS.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "shuhaybmiah",
    href: SOCIALS.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-5 py-24 text-center">
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s work together.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
          Got a project, a question, or just want to say hi? My inbox is always
          open.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 space-y-3">
        {LINKS.map(({ label, value, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_16px_40px_-24px_rgba(20,19,15,0.35)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon size={18} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs uppercase tracking-wider text-muted">
                {label}
              </span>
              <span className="block truncate font-medium">{value}</span>
            </span>
            <ArrowUpRight
              size={18}
              className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            />
          </a>
        ))}
      </Reveal>
    </section>
  );
}
