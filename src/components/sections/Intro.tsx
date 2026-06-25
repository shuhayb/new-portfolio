"use client";

import { motion } from "framer-motion";
import { Scramble } from "@/components/Scramble";
import { IntroGallery, introEase, introReveal } from "@/components/IntroGallery";
import { NAME, ROLE, INTRO_PARAGRAPHS } from "@/lib/data";

export function Intro() {
  return (
    <section
      id="intro"
      className="snap-section relative flex min-h-dvh items-start overflow-visible px-5 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20 md:items-center"
    >
      <div className="content-cap relative z-10 grid w-full min-w-0 grid-cols-1 items-center gap-y-8 overflow-visible md:grid-cols-[minmax(0,1fr)_420px] md:gap-x-12 md:gap-y-0 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-x-16">
        <div className="min-w-0 w-full">
          <motion.h1
            {...introReveal(0)}
            className="mb-5 w-full font-sans text-[2.35rem] font-semibold leading-[0.92] tracking-tight min-[380px]:text-4xl sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">
              <Scramble text="Shuhayb" />
            </span>
            <br />
            <span className="text-gradient">
              <Scramble text="Miah" />
            </span>
            <span className="caret accent">_</span>
          </motion.h1>

          <motion.p
            {...introReveal(0.05)}
            className="mb-5 max-w-full text-[0.65rem] uppercase leading-snug tracking-[0.14em] accent sm:mb-6 sm:text-xs sm:tracking-[0.2em] md:text-sm md:tracking-[0.25em]"
          >
            [ {ROLE} ]
          </motion.p>

          <motion.div
            {...introReveal(0.1)}
            className="max-w-xl space-y-4 text-md leading-relaxed text-secondary-light dark:text-secondary-dark"
          >
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 12)}>{p}</p>
            ))}
          </motion.div>
        </div>

        <div className="mx-auto w-full max-w-[360px] shrink-0 md:mx-0 md:max-w-none md:w-[420px] lg:w-[460px]">
          <IntroGallery />
        </div>

        <motion.a
          href="#projects"
          aria-label={`${NAME} — scroll to explore`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: introEase }}
          className="col-span-full mt-[100px] w-full text-center text-xs tracking-[0.18em] text-secondary-light dark:text-secondary-dark"
        >
          [ scroll to explore ]
        </motion.a>
      </div>
    </section>
  );
}
