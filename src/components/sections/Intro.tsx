"use client";

import { motion } from "framer-motion";
import { Scramble } from "@/components/Scramble";
import { NAME, ROLE, INTRO_PARAGRAPHS } from "@/lib/data";

function Flower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {[0, 45, 90, 135].map((rot) => (
        <ellipse
          key={rot}
          cx="50"
          cy="50"
          rx="13"
          ry="44"
          transform={`rotate(${rot} 50 50)`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

export function Intro() {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-20 sm:px-8"
    >
      <motion.div
        className="pointer-events-none absolute -right-16 top-28 h-56 w-56 text-accent-dark/30 sm:h-80 sm:w-80 md:right-10 dark:text-accent-light/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        <Flower className="h-full w-full" />
      </motion.div>

      <div className="content-cap relative z-10 w-full">
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
