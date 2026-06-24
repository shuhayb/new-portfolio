"use client";

import { Reveal } from "@/components/Reveal";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="content-cap">
        <Reveal className="mb-14 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] accent">[ career ]</p>
            <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
              work experience
            </h2>
          </div>
          <span className="hidden shrink-0 text-xs text-secondary-light dark:text-secondary-dark sm:block">
            ({String(EXPERIENCE.length).padStart(2, "0")})
          </span>
        </Reveal>

        <div className="flex flex-col">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.05}>
              <article className="group grid gap-4 border-t border-text-light/10 py-8 dark:border-text-dark/10 md:grid-cols-[auto_1fr] md:gap-8">
                <span className="font-mono text-sm text-secondary-light dark:text-secondary-dark">
                  [ {item.index} ]
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] accent">{item.period}</p>
                  <h3 className="mt-2 font-sans text-2xl font-medium tracking-tight transition-colors group-hover:text-accent-dark dark:group-hover:text-accent-light">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-secondary-light dark:text-secondary-dark">
                    {item.role}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary-light dark:text-secondary-dark">
                    {item.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.1em] text-secondary-light dark:text-secondary-dark">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
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
