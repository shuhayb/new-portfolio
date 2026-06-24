import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { SOCIALS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-5 py-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-foreground px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />

          <p className="relative mb-4 text-sm font-medium uppercase tracking-[0.18em] text-background/60">
            Get in touch
          </p>
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-background sm:text-5xl">
            Let&apos;s work together.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-background/70">
            I&apos;m always open to new projects, collaborations, or just a chat.
            Whether you have a question or want to build something — my inbox is
            open.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Send email
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>

          <a
            href={`mailto:${SOCIALS.email}`}
            className="relative mt-8 inline-flex items-center gap-1.5 text-sm text-background/60 transition-colors hover:text-background"
          >
            {SOCIALS.email}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
