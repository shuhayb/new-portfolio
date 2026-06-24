"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Background from "./Background";
import ProjectsCarousel from "./ProjectsCarousel";
import { SOCIALS, EXPERIENCE_INTRO, CONTENT } from "@/lib/data";

const SECTIONS = [
  { id: "tjs-home", label: "home" },
  { id: "tjs-projects", label: "projects" },
  { id: "tjs-content", label: "content" },
  { id: "tjs-contact", label: "contact" },
];

export default function ThreeExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onScroll = () => {
      const max = root.scrollHeight - root.clientHeight;
      progress.current = max > 0 ? root.scrollTop / max : 0;
    };
    root.addEventListener("scroll", onScroll, { passive: true });

    const onMouse = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMouse);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("tjs-in");
        });
      },
      { root, threshold: 0.25 }
    );
    root
      .querySelectorAll(".tjs-reveal")
      .forEach((el) => observer.observe(el));

    return () => {
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMouse);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="tjs-root" ref={rootRef}>
      <Background progress={progress} mouse={mouse} />

      <header className="tjs-bar">
        <Link href="/" className="tjs-brand">
          <span className="tjs-star">✦</span> shuhayb
        </Link>
        <nav className="tjs-bar-nav">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
          <Link href="/" className="tjs-exit">
            ← standard site
          </Link>
        </nav>
      </header>

      <div className="tjs-content">
        <section id="tjs-home" className="tjs-section">
          <div className="tjs-reveal">
            <p className="tjs-eyebrow">Full Stack Developer &amp; AI Engineer</p>
            <h1 className="tjs-h1">
              hi, i&apos;m <span className="tjs-grad">shuhayb</span>.
            </h1>
            <p className="tjs-lead">{EXPERIENCE_INTRO}</p>
            <a href="#tjs-projects" className="tjs-cta">
              explore my work
            </a>
          </div>
          <span className="tjs-scroll-hint">scroll ↓</span>
        </section>

        <section id="tjs-projects" className="tjs-section">
          <div className="tjs-reveal tjs-wide">
            <p className="tjs-eyebrow">Projects</p>
            <h2 className="tjs-h2">things i&apos;ve been building</h2>
          </div>
          <ProjectsCarousel />
        </section>

        <section id="tjs-content" className="tjs-section">
          <div className="tjs-reveal">
            <p className="tjs-eyebrow">Content I Like</p>
            <h2 className="tjs-h2">stuff that keeps me curious</h2>
            <ul className="tjs-links">
              {CONTENT.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="tjs-contact" className="tjs-section">
          <div className="tjs-reveal">
            <p className="tjs-eyebrow">Contact</p>
            <h2 className="tjs-h2">let&apos;s work together</h2>
            <p className="tjs-lead">
              got a project, a question, or just want to say hi? my inbox is
              always open.
            </p>
            <div className="tjs-contact-links">
              <a href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a>
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
                github
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
