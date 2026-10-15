"use client";

import { useRef } from "react";
import BeritaCard from "@/components/BeritaCard";
import type { Berita } from "@/data/berita";

export default function BeritaCarousel({ items }: { items: Berita[] }) {
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
        {items.map((b) => (
          <div
            key={b.slug}
            className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] xl:w-[23vw]"
          >
            <BeritaCard
              item={b}
              sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
            />
          </div>
        ))}
      </div>

      {/* Arrows (desktop) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between lg:flex">
        <button
          onClick={() => scrollByDir(-1)}
          aria-label="Geser berita ke kiri"
          className="pointer-events-auto -ml-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary-800 shadow-lg transition hover:bg-accent-500 hover:text-primary-950"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scrollByDir(1)}
          aria-label="Geser berita ke kanan"
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
