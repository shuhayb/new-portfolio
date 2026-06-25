"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { NAV_LINKS, NAME } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-main-light/70 dark:bg-middle-colour/70 border-b border-text-light/5 dark:border-text-dark/10"
            : "border-b border-transparent"
        }`}
      >
        <div className="content-cap flex items-center justify-between px-5 py-3 sm:px-8">
          <a
            href="#intro"
            aria-label={NAME}
            className="transition-opacity hover:opacity-80"
          >
            <Logo className="text-2xl" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="ul-link text-xs uppercase tracking-[0.18em] text-secondary-light transition-colors hover:text-text-light dark:text-secondary-dark dark:hover:text-text-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeSwitch />
            <button
              className="flex h-9 w-9 items-center justify-center md:hidden"
              aria-label="open menu"
              onClick={() => setOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-main-light px-5 py-3 dark:bg-middle-colour md:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo className="text-2xl" />
              <div className="flex items-center gap-1">
                <ThemeSwitch />
                <button
                  className="flex h-9 w-9 touch-manipulation items-center justify-center"
                  aria-label="close menu"
                  onClick={() => setOpen(false)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-sans text-3xl lowercase tracking-tight text-text-light transition-colors hover:text-accent-dark dark:text-text-dark dark:hover:text-accent-light"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
