"use client";

import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import { PROJECTS, PROJECTS_INTRO } from "@/lib/data";

export function Work() {
  return (
    <section id="projects" className="snap-section flex min-h-dvh flex-col justify-center px-5 py-24 sm:px-8 md:py-32">
      <div className="content-cap">
        <Reveal className="mb-14 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] accent">[ work ]</p>
            <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
              featured projects
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary-light dark:text-secondary-dark">
              {PROJECTS_INTRO}
            </p>
          </div>
          <span className="hidden shrink-0 text-xs text-secondary-light dark:text-secondary-dark sm:block">
            ({String(PROJECTS.length).padStart(2, "0")})
          </span>
        </Reveal>

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <article className="group grid gap-4 border-t border-text-light/10 py-8 transition-colors dark:border-text-dark/10 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-8">
                <span className="font-mono text-sm text-secondary-light dark:text-secondary-dark">
                  [ {project.index} ]
                </span>

                <div>
                  <h3 className="font-sans text-2xl font-medium tracking-tight transition-colors group-hover:text-accent-dark dark:group-hover:text-accent-light">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary-light dark:text-secondary-dark">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.1em] text-secondary-light dark:text-secondary-dark">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0 gap-5 text-sm md:flex-col md:items-end md:gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="ul-link inline-flex items-center gap-1 transition-colors hover:text-accent-dark dark:hover:text-accent-light"
                    >
                      live <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="ul-link inline-flex items-center gap-1 transition-colors hover:text-accent-dark dark:hover:text-accent-light"
                    >
                      source <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-text-light/10 dark:border-text-dark/10" />
        </div>
      </div>
    </section>
  );
}
