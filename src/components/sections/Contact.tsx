"use client";

import { Reveal } from "@/components/Reveal";
import { Scramble } from "@/components/Scramble";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { SOCIALS } from "@/lib/data";

const socials = [
  { label: "github", href: SOCIALS.github, Icon: GithubIcon },
  { label: "linkedin", href: SOCIALS.linkedin, Icon: LinkedinIcon },
  { label: "email", href: `mailto:${SOCIALS.email}`, Icon: MailIcon },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[80vh] items-center px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="content-cap w-full">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] accent">[ contact ]</p>
          <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            let&apos;s build
            <br />
            <span className="text-gradient">
              <Scramble text="something" hoverable />
            </span>
            .
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${SOCIALS.email}`}
            className="ul-link mt-10 inline-block text-lg text-secondary-light transition-colors hover:text-text-light dark:text-secondary-dark dark:hover:text-text-dark sm:text-xl"
          >
            {SOCIALS.email}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap gap-6">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="ul-link inline-flex items-center gap-2 text-sm text-secondary-light transition-colors hover:text-accent-dark dark:text-secondary-dark dark:hover:text-accent-light"
                >
                  <Icon size={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
