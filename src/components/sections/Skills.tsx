"use client";

import { Reveal } from "@/components/Reveal";
import { SKILLS } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="content-cap">
        <Reveal className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] accent">[ capabilities ]</p>
          <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
            skills
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {SKILLS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <article className="border-t border-text-light/10 py-8 dark:border-text-dark/10">
                <h3 className="font-sans text-xl font-medium tracking-tight">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.1em] text-secondary-light dark:text-secondary-dark">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-text-light/10 dark:border-text-dark/10" />
        </div>
      </div>
    </section>
  );
}
