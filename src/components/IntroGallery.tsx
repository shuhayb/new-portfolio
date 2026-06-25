"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { INTRO_PHOTOS, type IntroPhoto } from "@/lib/data";

export const introEase = [0.22, 1, 0.36, 1] as const;

export const introReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: introEase },
});

function PhotoTile({
  photo,
  className = "",
  sizes,
  objectPosition = "center",
  cropBleed = false,
}: {
  photo: IntroPhoto;
  className?: string;
  sizes: string;
  objectPosition?: string;
  cropBleed?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`group relative h-full w-full overflow-hidden rounded-2xl border border-text-light/10 bg-text-light/5 shadow-lg shadow-accent-dark/10 dark:border-text-dark/15 dark:bg-text-dark/5 dark:shadow-black/30 [&>span]:relative [&>span]:block [&>span]:h-full [&>span]:w-full ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        loading="lazy"
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-110 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${cropBleed && loaded ? "scale-[1.04]" : ""}`}
        style={{ objectPosition }}
      />
    </div>
  );
}

export function IntroGallery() {
  const [first, second] = INTRO_PHOTOS.secondary;

  return (
    <motion.div
      {...introReveal(0.15)}
      className="grid h-[260px] w-full grid-cols-[1.05fr_0.95fr] items-stretch gap-2.5 sm:h-[300px] sm:gap-3 md:h-[380px] lg:h-[420px]"
    >
      <PhotoTile
        photo={INTRO_PHOTOS.primary}
        sizes="(max-width: 768px) 45vw, 240px"
        objectPosition="center 38%"
        cropBleed
        className="-rotate-2 transition-transform duration-500 hover:rotate-0"
      />

      <div className="grid h-full min-h-0 grid-rows-2 gap-2.5 sm:gap-3">
        {first ? (
          <PhotoTile
            photo={first}
            sizes="(max-width: 768px) 40vw, 200px"
            objectPosition="center 22%"
            className="rotate-2 transition-transform duration-500 hover:rotate-0"
          />
        ) : null}
        {second ? (
          <PhotoTile
            photo={second}
            sizes="(max-width: 768px) 40vw, 200px"
            className="-rotate-1 transition-transform duration-500 hover:rotate-0"
          />
        ) : null}
      </div>
    </motion.div>
  );
}
