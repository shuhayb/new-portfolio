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

        <div className="grid gap-5 sm:grid-cols-2">
          {SKILLS.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-2xl border border-text-light/10 bg-text-light/[0.02] p-7 dark:border-text-dark/10 dark:bg-text-dark/[0.02]">
                <h3 className="mb-5 flex items-center gap-3 font-sans text-xl font-medium tracking-tight">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent-dark to-[#38BDF8] dark:from-[#3B82F6] dark:to-accent-light" />
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-text-light/10 px-3 py-1.5 text-xs text-secondary-light transition-colors hover:border-accent-dark/40 hover:text-text-light dark:border-text-dark/10 dark:text-secondary-dark dark:hover:border-accent-light/40 dark:hover:text-text-dark"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
