import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={site.logo}
                alt="Logo SMP Taman Dewasa Jetis"
                width={48}
                height={48}
                className="h-11 w-auto rounded bg-white object-contain p-1"
              />
              <div className="leading-tight">
                <p className="font-display text-base font-bold text-white">
                  SMP Taman Dewasa
                </p>
                <p className="text-xs text-accent-300">Jetis Yogyakarta</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-200">
              {site.visa_frase}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-500 hover:text-primary-950"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-500 hover:text-primary-950"
              >
                t
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-500 hover:text-primary-950"
              >
                y
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-500 hover:text-primary-950"
              >
                i
              </a>
              <a
                href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-500 hover:text-primary-950"
              >
                w
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/profil-sekolah" className="hover:text-accent-300">
                  Profil Sekolah
                </Link>
              </li>
              <li>
                <Link href="/guru/direktori-guru" className="hover:text-accent-300">
                  Guru &amp; Tenaga Kependidikan
                </Link>
              </li>
              <li>
                <Link href="/siswa/ekstrakurikuler" className="hover:text-accent-300">
                  Siswa &amp; Ekstrakurikuler
                </Link>
              </li>
              <li>
                <Link href="/alumni/direktori-alumni" className="hover:text-accent-300">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/kemitraan" className="hover:text-accent-300">
                  Kemitraan
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Layanan
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/guru/kalender-akademik" className="hover:text-accent-300">
                  Kalender Akademik
                </Link>
              </li>
              <li>
                <Link href="/guru/materi-ajar" className="hover:text-accent-300">
                  Materi Ajar
                </Link>
              </li>
              <li>
                <Link href="/guru/materi-uji" className="hover:text-accent-300">
                  Materi Uji
                </Link>
              </li>
              <li>
                <Link href="/siswa/beasiswa" className="hover:text-accent-300">
                  Beasiswa
                </Link>
              </li>
              <li>
                <Link href="/ppdb" className="hover:text-accent-300">
                  PPDB Online
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-accent-300">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hubungi Kami
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-200">
              <li className="flex gap-2">
                <span aria-hidden>📍</span>
                <span>
                  {site.address}, {site.postalCode}
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden>☎</span>
                <a href={`tel:${site.phoneTel}`} className="hover:text-accent-300">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <span aria-hidden>✉</span>
                <a href={`mailto:${site.email}`} className="hover:text-accent-300">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2">
                <span aria-hidden>🌐</span>
                <span>{site.website}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Hak cipta dilindungi.
          </p>
          <p className="flex items-center gap-1">
            <span aria-hidden>🏛</span> Diselenggarakan dalam semangat Among
            Taman Siswa.
          </p>
        </div>
      </div>
    </footer>
  );
}
