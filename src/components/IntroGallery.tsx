"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INTRO_PHOTOS, type IntroPhoto } from "@/lib/data";

function PhotoCard({
  photo,
  priority = false,
  compact = false,
}: {
  photo: IntroPhoto;
  priority?: boolean;
  compact?: boolean;
}) {
  return (
    <article className="group border-corner overflow-hidden border border-text-light/10 bg-main-light/80 shadow-lg shadow-accent-dark/10 backdrop-blur-sm dark:border-text-dark/15 dark:bg-middle-colour/80 dark:shadow-black/30">
      <div className={`relative overflow-hidden ${compact ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 240px, 280px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {photo.badge ? (
        <div className="border-t border-text-light/10 px-2 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-secondary-light sm:px-3 sm:py-2 sm:text-xs sm:tracking-[0.18em] dark:border-text-dark/15 dark:text-secondary-dark">
          {photo.badge}
        </div>
      ) : null}

      {photo.index ? (
        <div className="border-t border-text-light/10 px-2 py-2 sm:px-3 sm:py-3 dark:border-text-dark/15">
          <p className="mb-0.5 font-sans text-sm font-medium tracking-tight sm:mb-1 sm:text-lg">
            <span className="accent">{photo.index}</span>
            {photo.title ? (
              <span className="ml-1.5 text-text-light dark:text-text-dark sm:ml-2">{photo.title}</span>
            ) : null}
          </p>
          {photo.caption ? (
            <p className="hidden text-xs leading-relaxed text-secondary-light group-hover:opacity-100 dark:text-secondary-dark sm:block sm:opacity-70">
              {photo.caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function IntroGallery() {
  const [first, second] = INTRO_PHOTOS.secondary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto h-[240px] w-full min-w-0 max-w-[320px] overflow-visible sm:h-[300px] sm:max-w-[360px] md:h-[420px] md:max-w-[380px] lg:h-[480px] lg:max-w-[400px]"
    >
      <div className="absolute right-0 top-0 z-10 w-[74%] rotate-[2deg] transition-transform duration-500 hover:z-30 hover:rotate-0">
        <PhotoCard photo={INTRO_PHOTOS.primary} priority />
      </div>

      {first ? (
        <div className="absolute left-0 top-[34%] z-20 w-[58%] -rotate-[2deg] transition-transform duration-500 hover:z-30 hover:rotate-0">
          <PhotoCard photo={first} compact />
        </div>
      ) : null}

      {second ? (
        <div className="absolute right-0 top-[56%] z-30 w-[58%] rotate-[2deg] transition-transform duration-500 hover:z-40 hover:rotate-0">
          <PhotoCard photo={second} compact />
        </div>
      ) : null}
    </motion.div>
  );
}
