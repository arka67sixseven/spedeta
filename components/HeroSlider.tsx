"use client";

import Image from "next/image";
import { welcome } from "@/data/home";
import { site } from "@/data/site";

const particles = [
  { x: 38, y: 12, s: 3, o: 0.25, d: 0 },
  { x: 44, y: 26, s: 4, o: 0.3, d: 1.2 },
  { x: 52, y: 8, s: 2, o: 0.2, d: 0.4 },
  { x: 39, y: 44, s: 3, o: 0.3, d: 1.8 },
  { x: 47, y: 58, s: 5, o: 0.28, d: 0.2 },
  { x: 56, y: 33, s: 3, o: 0.24, d: 2.4 },
  { x: 61, y: 18, s: 2, o: 0.2, d: 0.9 },
  { x: 50, y: 70, s: 3, o: 0.26, d: 1.5 },
  { x: 66, y: 48, s: 4, o: 0.22, d: 0.6 },
  { x: 43, y: 84, s: 3, o: 0.28, d: 2.8 },
  { x: 58, y: 62, s: 2, o: 0.2, d: 1.0 },
  { x: 72, y: 28, s: 3, o: 0.2, d: 0.3 },
  { x: 55, y: 44, s: 2, o: 0.24, d: 2.0 },
  { x: 64, y: 72, s: 3, o: 0.22, d: 1.3 },
  { x: 70, y: 58, s: 2, o: 0.2, d: 0.8 },
  { x: 47, y: 20, s: 2, o: 0.22, d: 1.7 },
  { x: 63, y: 10, s: 3, o: 0.2, d: 0.5 },
  { x: 77, y: 40, s: 3, o: 0.18, d: 2.2 },
  { x: 42, y: 66, s: 4, o: 0.26, d: 1.1 },
  { x: 68, y: 22, s: 2, o: 0.18, d: 0.7 },
  { x: 59, y: 78, s: 3, o: 0.22, d: 2.6 },
  { x: 75, y: 62, s: 2, o: 0.16, d: 0.1 },
  { x: 49, y: 90, s: 3, o: 0.22, d: 1.4 },
  { x: 80, y: 30, s: 2, o: 0.16, d: 0.4 },
  { x: 62, y: 50, s: 3, o: 0.2, d: 2.1 },
  { x: 45, y: 34, s: 2, o: 0.24, d: 0.9 },
  { x: 71, y: 12, s: 2, o: 0.16, d: 1.6 },
  { x: 54, y: 82, s: 4, o: 0.24, d: 0.3 },
  { x: 82, y: 50, s: 2, o: 0.14, d: 2.3 },
  { x: 66, y: 64, s: 3, o: 0.18, d: 1.0 },
];

export default function HeroSlider() {
  return (
    <section className="relative min-h-[56svh] w-full overflow-hidden bg-primary-900 sm:min-h-[66svh] lg:min-h-[calc(100svh-64px)]">
      {/* Foto g4 */}
      <Image
        src="/images/galeri/g4.jpeg"
        alt="Kegiatan sekolah SMP Taman Dewasa Jetis"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Green gradient from left, fading right (luntur) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-800/70 to-primary-900/0" />

      {/* Particles — denser where the green fades (toward the right) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.s}px`,
              height: `${p.s}px`,
              opacity: p.o,
              animation: `float ${6 + p.d}s ease-in-out ${p.d * -1}s infinite`,
              boxShadow: "0 0 6px rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full min-h-[56svh] max-w-7xl flex-col justify-center px-4 py-16 sm:min-h-[66svh] sm:px-6 lg:min-h-[calc(100svh-64px)] lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-1.5 text-sm font-semibold text-primary-950 shadow-sm">
            <span aria-hidden>🏛</span> {welcome.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {welcome.title}
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-accent-300">
            {site.tagline} — Yogyakarta
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-100 sm:text-lg">
            {welcome.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#sambutan"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-primary-500"
            >
              Selengkapnya
              <span aria-hidden>→</span>
            </a>
            <a
              href="/ppdb"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-primary-950 shadow-lg transition-colors hover:bg-accent-400"
            >
              Pendaftaran (PPDB)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
