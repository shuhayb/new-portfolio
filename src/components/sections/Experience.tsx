"use client";

import { Reveal } from "@/components/Reveal";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="content-cap">
        <Reveal className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] accent">[ career ]</p>
          <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
            work experience
          </h2>
        </Reveal>

        <div className="relative border-l border-text-light/15 pl-8 dark:border-text-dark/15 sm:pl-10">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.05}>
              <article className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.35rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-main-light bg-gradient-to-br from-accent-dark to-[#38BDF8] dark:border-middle-colour dark:from-[#3B82F6] dark:to-accent-light sm:-left-[2.85rem]" />

                <p className="text-xs uppercase tracking-[0.18em] accent">{item.period}</p>
                <h3 className="mt-2 font-sans text-2xl font-medium tracking-tight">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm text-secondary-light dark:text-secondary-dark">
                  {item.role}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary-light dark:text-secondary-dark">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
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
