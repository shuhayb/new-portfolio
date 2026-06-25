"use client";

import { motion } from "framer-motion";
import { Scramble } from "@/components/Scramble";
import { IntroGallery } from "@/components/IntroGallery";
import { NAME, ROLE, INTRO_PARAGRAPHS } from "@/lib/data";

export function Intro() {
  return (
    <section
      id="intro"
      className="snap-section relative flex min-h-dvh items-center px-5 pt-28 pb-20 sm:px-8"
    >
      <div className="content-cap relative z-10 grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs uppercase tracking-[0.25em] accent sm:text-sm"
          >
            [ {ROLE} ]
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-sans text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-xl space-y-4 text-md leading-relaxed text-secondary-light dark:text-secondary-dark"
          >
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 12)}>{p}</p>
            ))}
          </motion.div>
        </div>

        <IntroGallery />
      </div>

      <motion.a
        href="#projects"
        aria-label={`${NAME} — scroll to explore`}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.18em] text-secondary-light dark:text-secondary-dark"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
      >
        [ scroll to explore ]
      </motion.a>
    </section>
  );
}
