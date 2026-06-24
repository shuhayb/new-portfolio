import { Logo } from "@/components/Logo";
import { LocalTime } from "@/components/LocalTime";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { NAME, SOCIALS } from "@/lib/data";

const socials = [
  { label: "github", href: SOCIALS.github, Icon: GithubIcon },
  { label: "linkedin", href: SOCIALS.linkedin, Icon: LinkedinIcon },
  { label: "email", href: `mailto:${SOCIALS.email}`, Icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-text-light/10 dark:border-text-dark/10">
      <div className="content-cap flex flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between md:py-16">
        <div className="flex flex-col gap-4">
          <a href="#intro" aria-label={NAME} className="w-fit transition-opacity hover:opacity-80">
            <Logo className="text-3xl" />
          </a>
          <p className="font-sans text-lg tracking-tight">{NAME}</p>
          <p className="text-xs text-secondary-light dark:text-secondary-dark">
            <span className="accent">[ local time ]</span> <LocalTime />
          </p>
          <p className="text-xs text-secondary-light dark:text-secondary-dark">
            © {new Date().getFullYear()} — all rights reserved
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <p className="text-xs uppercase tracking-[0.2em] accent">[ my socials ]</p>
          <ul className="flex flex-col gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm text-secondary-light transition-colors hover:text-accent-dark dark:text-secondary-dark dark:hover:text-accent-light"
                >
                  <span className="flex w-5 shrink-0 justify-center">
                    <Icon size={18} />
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
