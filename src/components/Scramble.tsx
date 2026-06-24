"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=-_<>/";

export function Scramble({
  text,
  className,
  hoverable = true,
  autoPlay = true,
}: {
  text: string;
  className?: string;
  hoverable?: boolean;
  autoPlay?: boolean;
}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const raf = useRef<number>();

  const run = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    const start = performance.now();
    const duration = 650;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const revealCount = Math.floor(progress * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          out += " ";
        } else if (i < revealCount) {
          out += text[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(out);
      frame.current++;
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    raf.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => {
    if (autoPlay) run();
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [autoPlay, run]);

  return (
    <span
      className={className}
      onMouseEnter={hoverable ? run : undefined}
      style={{ display: "inline-block" }}
    >
      {display}
    </span>
  );
}
