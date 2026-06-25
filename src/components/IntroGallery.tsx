"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INTRO_PHOTOS, type IntroPhoto } from "@/lib/data";

function PhotoCard({
  photo,
  priority = false,
}: {
  photo: IntroPhoto;
  priority?: boolean;
}) {
  return (
    <article className="group border-corner overflow-hidden border border-text-light/10 bg-main-light/80 shadow-lg shadow-accent-dark/10 backdrop-blur-sm dark:border-text-dark/15 dark:bg-middle-colour/80 dark:shadow-black/30">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 70vw, 280px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {photo.badge ? (
        <div className="border-t border-text-light/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-secondary-light dark:border-text-dark/15 dark:text-secondary-dark">
          {photo.badge}
        </div>
      ) : null}

      {photo.index ? (
        <div className="border-t border-text-light/10 px-3 py-3 dark:border-text-dark/15">
          <p className="mb-1 font-sans text-lg font-medium tracking-tight">
            <span className="accent">{photo.index}</span>
            {photo.title ? (
              <span className="ml-2 text-text-light dark:text-text-dark">{photo.title}</span>
            ) : null}
          </p>
          {photo.caption ? (
            <p className="text-xs leading-relaxed text-secondary-light transition-opacity duration-300 group-hover:opacity-100 dark:text-secondary-dark md:opacity-70">
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
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto mt-12 h-[440px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[400px] lg:mt-0"
    >
      <div className="absolute right-0 top-0 z-10 w-[74%] rotate-[3deg] transition-transform duration-500 hover:z-30 hover:rotate-0">
        <PhotoCard photo={INTRO_PHOTOS.primary} priority />
      </div>

      {first ? (
        <div className="absolute left-0 top-[36%] z-20 w-[58%] -rotate-[2deg] transition-transform duration-500 hover:z-30 hover:rotate-0">
          <PhotoCard photo={first} />
        </div>
      ) : null}

      {second ? (
        <div className="absolute right-0 top-[58%] z-30 w-[58%] rotate-[2deg] transition-transform duration-500 hover:z-40 hover:rotate-0">
          <PhotoCard photo={second} />
        </div>
      ) : null}
    </motion.div>
  );
}
