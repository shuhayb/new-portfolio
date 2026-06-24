import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { SOCIALS, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="text-accent">✦</span>
          Shuhayb Miah
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-content px-5 py-5 text-center text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} Shuhayb Miah. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
