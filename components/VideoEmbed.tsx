"use client";

import { useState } from "react";
import Image from "next/image";
import { video } from "@/data/home";

export default function VideoEmbed() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-lg">
        <iframe
          src={`${video.youtubeEmbed}?autoplay=1&rel=0`}
          title={video.judul}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl shadow-lg">
      <div className="relative aspect-video w-full cursor-pointer overflow-hidden bg-primary-900">
        <Image
          src={video.thumbnail}
          alt={video.judul}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-primary-950/25" />
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Putar video profil sekolah"
          className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-primary-950 shadow-xl transition-transform hover:scale-110"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-950/80 to-transparent p-4">
          <p className="font-semibold text-white">{video.judul}</p>
        </div>
      </div>
    </div>
  );
}
