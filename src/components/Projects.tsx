import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've been building"
        description="From AI agents that automate real workflows to full-stack products that scale. Here's a selection of what I've shipped."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_24px_60px_-30px_rgba(20,19,15,0.35)]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source`}
                      className="rounded-full border border-line p-2 text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live`}
                      className="rounded-full border border-line p-2 text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="flex-1 text-[15px] leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
