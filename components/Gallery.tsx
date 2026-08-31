"use client";

import { useRef } from "react";
import Image from "next/image";
import { galeriUnggulan } from "@/data/home";

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Scroll track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {galeriUnggulan.map((g) => (
          <div
            key={g.src}
            className="group relative aspect-[4/3] w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl shadow-sm sm:w-[46vw] lg:w-[30vw] xl:w-[23vw]"
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* Arrows (desktop) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between lg:flex">
        <button
          onClick={() => scrollByDir(-1)}
          aria-label="Geser galeri ke kiri"
          className="pointer-events-auto -ml-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary-800 shadow-lg transition hover:bg-accent-500 hover:text-primary-950"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scrollByDir(1)}
          aria-label="Geser galeri ke kanan"
          className="pointer-events-auto -mr-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary-800 shadow-lg transition hover:bg-accent-500 hover:text-primary-950"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
