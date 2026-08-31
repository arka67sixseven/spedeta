"use client";

import { useEffect, useRef, useState } from "react";

type SubLink = { label: string; href: string };

export default function StickySubNav({ links }: { links: SubLink[] }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 100) {
        setHidden(false);
      } else if (delta > 2) {
        setHidden(true);
      } else if (delta < -2) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-[64px] z-30 border-b border-earth-100 bg-white/95 backdrop-blur transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {links.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="whitespace-nowrap rounded-full bg-earth-50 px-4 py-1.5 text-sm font-medium text-primary-800 transition-colors hover:bg-primary-700 hover:text-white"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
