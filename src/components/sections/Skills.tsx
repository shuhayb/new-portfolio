"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SKILLS } from "@/lib/data";

function SkillMarquee({ items, active }: { items: string[]; active: boolean }) {
  const track = [...items, ...items];

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="skill-marquee-track flex w-max gap-16 whitespace-nowrap py-4">
            {track.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="skill-ghost font-sans text-[clamp(3rem,11vw,7rem)] font-bold uppercase tracking-tight"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function useCanHover() {
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  return canHover;
}

export function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);
  const canHover = useCanHover();

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
          {SKILLS.map((group, i) => {
            const isActive = hovered === i;
            const showPills = !canHover || isActive;

            return (
              <Reveal key={group.title} delay={i * 0.05}>
                <article
                  className="relative overflow-hidden border-t border-text-light/10 py-10 dark:border-text-dark/10 md:py-14"
                  onMouseEnter={() => canHover && setHovered(i)}
                  onMouseLeave={() => canHover && setHovered(null)}
                >
                  {canHover && <SkillMarquee items={group.items} active={isActive} />}

                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <h3
                      className={`font-sans text-2xl font-semibold uppercase tracking-tight transition-colors duration-300 sm:text-3xl md:text-4xl ${
                        showPills && canHover
                          ? "text-accent-dark dark:text-accent-light"
                          : !canHover
                            ? "text-text-light dark:text-text-dark"
                            : "text-secondary-light dark:text-secondary-dark"
                      }`}
                    >
                      {group.title}
                    </h3>

                    <AnimatePresence>
                      {showPills && (
                        <motion.ul
                          key={`pills-${group.title}`}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 16 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="flex max-w-xl flex-wrap gap-2 md:justify-end"
                        >
                          {group.items.map((item, j) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25, delay: j * 0.04 }}
                            >
                              <span className="inline-block rounded-full border border-text-light/15 px-3 py-1.5 text-xs text-text-light dark:border-text-dark/20 dark:text-text-dark">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              </Reveal>
            );
          })}
          <div className="border-t border-text-light/10 dark:border-text-dark/10" />
        </div>
      </div>
    </section>
  );
}
