"use client";

import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import { CONTENT } from "@/lib/data";

export function Content() {
  return (
    <section id="content" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="content-cap">
        <Reveal className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] accent">[ content i like ]</p>
          <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
            things worth your time
          </h2>
        </Reveal>

        <ul className="flex flex-col">
          {CONTENT.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.05}>
              <li>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-t border-text-light/10 py-5 text-secondary-light transition-colors hover:text-text-light dark:border-text-dark/10 dark:text-secondary-dark dark:hover:text-text-dark"
                >
                  <span className="font-sans text-xl tracking-tight md:text-2xl">
                    {item.title}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </li>
            </Reveal>
          ))}
          <li className="border-t border-text-light/10 dark:border-text-dark/10" />
        </ul>
      </div>
    </section>
  );
}
