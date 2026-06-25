"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { NAV_LINKS } from "@/lib/data";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));
const HEADER_OFFSET = -72;
const SCROLL_EASING = (t: number) => 1 - Math.pow(1 - t, 4);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let currentIndex = 0;
    let isAnimating = false;

    const getSections = () =>
      SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => Boolean(el)
      );

    const getSectionTop = (section: HTMLElement, scroll: number) =>
      section.getBoundingClientRect().top + scroll;

    const syncCurrentIndex = (scroll: number) => {
      const sections = getSections();
      let closest = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const distance = Math.abs(getSectionTop(section, scroll) + HEADER_OFFSET - scroll);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      currentIndex = closest;
    };

    const scrollToSection = (index: number) => {
      const sections = getSections();
      const section = sections[index];
      if (!section) return;

      currentIndex = index;
      isAnimating = true;

      lenis.scrollTo(section, {
        offset: HEADER_OFFSET,
        duration: 1.1,
        easing: SCROLL_EASING,
        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: false,
      anchors: {
        offset: HEADER_OFFSET,
        duration: 1.1,
        easing: SCROLL_EASING,
      },
      virtualScroll: ({ deltaY, event }) => {
        if (isAnimating) {
          event.preventDefault();
          return false;
        }

        event.preventDefault();

        if (Math.abs(deltaY) < 20) return false;

        const sections = getSections();
        if (sections.length === 0) return false;

        const direction = deltaY > 0 ? 1 : -1;
        const nextIndex = Math.max(
          0,
          Math.min(sections.length - 1, currentIndex + direction)
        );

        if (nextIndex !== currentIndex) {
          scrollToSection(nextIndex);
        }

        return false;
      },
    });

    const onScroll = () => {
      if (!isAnimating) syncCurrentIndex(lenis.scroll);
    };

    lenis.on("scroll", onScroll);
    syncCurrentIndex(lenis.scroll);

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const index = SECTION_IDS.indexOf(hash);
      if (index >= 0) {
        window.setTimeout(() => scrollToSection(index), 50);
      }
    }

    return () => {
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
