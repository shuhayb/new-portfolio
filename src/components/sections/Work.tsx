"use client";

import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import { PROJECTS } from "@/lib/data";

export function Work() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="content-cap">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] accent">[ work ]</p>
          <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
            featured projects
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-secondary-light dark:text-secondary-dark">
            From AI agents that automate complex workflows to full-stack platforms that
            scale — here&apos;s some of what I&apos;ve been building.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-text-light/10 bg-text-light/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-dark/40 hover:bg-text-light/[0.04] dark:border-text-dark/10 dark:bg-text-dark/[0.02] dark:hover:border-accent-light/40 dark:hover:bg-text-dark/[0.04]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-sm text-secondary-light dark:text-secondary-dark">
                    [ {project.index} ]
                  </span>
                  <div className="flex gap-3 text-xs">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="ul-link inline-flex items-center gap-1 transition-colors hover:text-accent-dark dark:hover:text-accent-light"
                      >
                        live <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        className="ul-link inline-flex items-center gap-1 transition-colors hover:text-accent-dark dark:hover:text-accent-light"
                      >
                        source <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-sans text-2xl font-medium tracking-tight transition-colors group-hover:text-accent-dark dark:group-hover:text-accent-light">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary-light dark:text-secondary-dark">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-text-light/10 px-3 py-1 text-xxs uppercase tracking-[0.1em] text-secondary-light dark:border-text-dark/10 dark:text-secondary-dark"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
