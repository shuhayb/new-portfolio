"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INTRO_PHOTOS } from "@/lib/data";

function PhotoTile({
  src,
  alt,
  priority = false,
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes: string;
}) {
  return (
    <div
      className={`group relative min-h-0 overflow-hidden rounded-2xl border border-text-light/10 shadow-lg shadow-accent-dark/10 dark:border-text-dark/15 dark:shadow-black/30 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
  );
}

export function IntroGallery() {
  const [first, second] = INTRO_PHOTOS.secondary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="grid h-[260px] w-full grid-cols-[1.05fr_0.95fr] gap-2.5 sm:h-[300px] sm:gap-3 md:h-[380px] lg:h-[420px]"
    >
      <PhotoTile
        src={INTRO_PHOTOS.primary.src}
        alt={INTRO_PHOTOS.primary.alt}
        priority
        sizes="(max-width: 768px) 45vw, 240px"
        className="-rotate-2 transition-transform duration-500 hover:rotate-0"
      />

      <div className="grid min-h-0 grid-rows-2 gap-2.5 sm:gap-3">
        {first ? (
          <PhotoTile
            src={first.src}
            alt={first.alt}
            sizes="(max-width: 768px) 40vw, 200px"
            className="rotate-2 transition-transform duration-500 hover:rotate-0"
          />
        ) : null}
        {second ? (
          <PhotoTile
            src={second.src}
            alt={second.alt}
            sizes="(max-width: 768px) 40vw, 200px"
            className="-rotate-1 transition-transform duration-500 hover:rotate-0"
          />
        ) : null}
      </div>
    </motion.div>
  );
}
