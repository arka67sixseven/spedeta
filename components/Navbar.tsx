"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setSubmenu(null);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/#.*$/, ""));

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-900 text-primary-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <span className="hidden sm:inline">Sekolah Berwawasan Budaya —</span>
            <span className="font-medium">{site.tagline}</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-1 hover:text-accent-300"
            >
              <span aria-hidden>☎</span>
              <span className="hidden sm:inline">{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1 hover:text-accent-300"
            >
              <span aria-hidden>✉</span>
              <span className="hidden sm:inline">{site.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-earth-100 bg-white/95 shadow-sm backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Navigasi utama"
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={site.logo}
              alt="Logo SMP Taman Dewasa Jetis"
              width={48}
              height={48}
              className="h-11 w-auto object-contain"
            />
            <div className="leading-tight">
              <p className="font-display text-base font-bold text-primary-800 sm:text-lg">
                SMP Taman Dewasa Jetis
              </p>
              <p className="text-[11px] font-medium uppercase tracking-wide text-accent-600">
                Yogyakarta
              </p>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => setSubmenu(item.label)}
                  onMouseLeave={() => setSubmenu(null)}
                >
                  <button
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary-700"
                        : "text-ink-soft hover:text-primary-700"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={submenu === item.label}
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform group-hover:rotate-180"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 top-full w-64 overflow-hidden rounded-xl border border-earth-100 bg-white shadow-xl transition-all duration-200 ${
                      submenu === item.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenus}
                        className="block px-4 py-2.5 text-sm text-ink-soft transition-colors hover:bg-primary-50 hover:text-primary-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenus}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary-700"
                      : "text-ink-soft hover:text-primary-700"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/ppdb"
              onClick={closeMenus}
              className="ml-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-800"
            >
              PPDB Online
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl p-2 text-primary-800 transition-all duration-200 hover:bg-primary-50 hover:text-primary-900 active:scale-90 lg:hidden"
          >
            <span className="relative block h-5 w-6" aria-hidden>
              <span
                className={`absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
                  open ? "top-[9px] rotate-45" : "group-hover:w-4"
                }`}
              />
              <span
                className={`absolute left-0 top-[10px] block h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                  open ? "w-0 opacity-0" : "group-hover:w-5"
                }`}
              />
              <span
                className={`absolute left-0 top-5 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
                  open ? "top-[9px] -rotate-45" : "group-hover:w-6"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-earth-100 p-4">
            <span className="font-display font-bold text-primary-800">Menu</span>
            <button
              className="rounded-lg p-1.5 text-ink"
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="p-3">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-earth-50">
                  <button
                    className="flex w-full items-center justify-between px-3 py-3 text-left font-medium text-ink-soft"
                    onClick={() =>
                      setSubmenu(submenu === item.label ? null : item.label)
                    }
                    aria-expanded={submenu === item.label}
                  >
                    {item.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform ${
                        submenu === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {submenu === item.label && (
                    <div className="bg-primary-50/50 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenus}
                          className="block px-6 py-2.5 text-sm text-ink-soft hover:text-primary-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenus}
                  className="block border-b border-earth-50 px-3 py-3 font-medium text-ink-soft hover:text-primary-700"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/ppdb"
              onClick={closeMenus}
              className="mt-4 block rounded-full bg-primary-700 px-5 py-3 text-center font-semibold text-white"
            >
              PPDB Online
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
