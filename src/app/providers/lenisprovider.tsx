"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { NAV_LINKS } from "@/lib/data";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    let isSnapping = false;
    let wheelDelta = 0;
    let wheelTimeout: ReturnType<typeof setTimeout> | undefined;

    const getSections = () =>
      SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => Boolean(el)
      );

    const getCurrentIndex = () => {
      const sections = getSections();
      const scroll = lenis.scroll;
      let index = 0;
      let minDistance = Infinity;

      sections.forEach((section, i) => {
        const distance = Math.abs(section.offsetTop - scroll);
        if (distance < minDistance) {
          minDistance = distance;
          index = i;
        }
      });

      return index;
    };

    const snapToIndex = (index: number) => {
      const sections = getSections();
      const target = sections[index];
      if (!target || isSnapping) return;

      isSnapping = true;
      lenis.scrollTo(target, {
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        onComplete: () => {
          window.setTimeout(() => {
            isSnapping = false;
          }, 150);
        },
      });
    };

    const onWheel = (event: WheelEvent) => {
      if (isSnapping) {
        event.preventDefault();
        return;
      }

      wheelDelta += event.deltaY;

      if (wheelTimeout) clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        wheelDelta = 0;
      }, 120);

      if (Math.abs(wheelDelta) < 40) return;

      event.preventDefault();

      const direction = wheelDelta > 0 ? 1 : -1;
      wheelDelta = 0;

      const current = getCurrentIndex();
      const next = Math.max(0, Math.min(SECTION_IDS.length - 1, current + direction));

      if (next !== current) snapToIndex(next);
    };

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    };

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      window.setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) lenis.scrollTo(target, { immediate: true });
      }, 100);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      if (wheelTimeout) clearTimeout(wheelTimeout);
      window.removeEventListener("wheel", onWheel);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
