"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { SOCIALS, EXPERIENCE_INTRO, HELP_WITH } from "@/lib/data";

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-32 pb-20 sm:pt-40 sm:pb-24"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[44rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl opacity-70" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="relative mb-7"
        >
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-line shadow-[0_12px_40px_-12px_rgba(20,19,15,0.3)]">
            <Image
              src="/shuhayb.png"
              alt="Shuhayb Miah"
              fill
              priority
              sizes="112px"
              className="object-cover object-[center_20%]"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-lg shadow-sm">
            👋
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Hello, I&apos;m Shuhayb.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-3 text-base font-medium text-accent"
        >
          Full Stack Developer &amp; AI Engineer
        </motion.p>

        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
        >
          {EXPERIENCE_INTRO}
        </motion.p>

        <motion.ul
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-7 flex flex-wrap items-center justify-center gap-2"
        >
          {HELP_WITH.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted"
            >
              <Check size={14} className="text-accent" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
          >
            <Mail size={16} />
            Contact me
          </a>
        </motion.div>

        <motion.div
          custom={6}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex items-center gap-5"
        >
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
