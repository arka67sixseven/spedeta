import Image from "next/image";
import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import { ppdb } from "@/data/ppdb";
import { site } from "@/data/site";

export const metadata = {
  title: "PPDB Online",
  description:
    "PPDB Online SMP Taman Dewasa Jetis Yogyakarta Tahun Ajaran 2024/2025. Pendaftaran gratis!",
};

export default function PPDBPage() {
  return (
    <>
      <PageHero
        title={ppdb.judul}
        subtitle="Penerimaan Peserta Didik Baru Tahun Ajaran 2024/2025"
        breadcrumb="PPDB Online"
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
            {ppdb.gratisJudul}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-900">
            Segera Daftarkan Putra-Putri Anda
          </h2>
          {ppdb.intro.map((line, i) => (
            <p key={i} className="mt-3 leading-relaxed text-ink-soft">
              {line}
            </p>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={ppdb.banner}
            alt="Banner PPDB 2024-2025 SMP Taman Dewasa Jetis"
            width={1400}
            height={520}
            className="w-full object-cover"
          />
        </div>

        {/* Link & QR */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 text-center text-primary-50">
            <span className="text-4xl" aria-hidden>🖥️</span>
            <h3 className="mt-4 font-display text-xl font-bold text-white">
              {ppdb.linkLabel}
            </h3>
            <p className="mt-2 text-sm text-primary-200">
              Klik tombol di bawah untuk membuka formulir pendaftaran online.
            </p>
            <a
              href={ppdb.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-primary-950 transition-colors hover:bg-accent-400"
            >
              {ppdb.linkText} <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="rounded-3xl border border-earth-100 bg-earth-50 p-8 text-center">
            <span className="text-4xl" aria-hidden>📱</span>
            <h3 className="mt-4 font-display text-xl font-bold text-primary-900">
              {ppdb.qrLabel}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">{ppdb.qrDesc}</p>
            <div className="mx-auto mt-6 w-44 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md">
              <Image
                src={ppdb.qr}
                alt="QR Code PPDB Online"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Alamat */}
        <div className="mt-12 rounded-3xl border border-earth-100 p-8">
          <h3 className="font-display text-xl font-bold text-primary-900">
            📍 {ppdb.alamatLabel}
          </h3>
          <p className="mt-2 text-ink-soft">{ppdb.alamatDesc}</p>
          <p className="mt-2 font-semibold text-primary-800">{ppdb.alamat}</p>
          <p className="mt-1 text-sm text-ink-soft">
            Telp: {site.phone} | WhatsApp: {site.whatsapp}
          </p>
        </div>

        {/* Syarat */}
        <div className="mt-12">
          <SectionHeading
            eyebrow="Berikut"
            title={ppdb.syaratLabel}
            subtitle={ppdb.syaratIntro}
            align="left"
          />
          <ol className="space-y-3">
            {ppdb.syarat.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-earth-100 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-primary-950">
                  {i + 1}
                </span>
                <span className="text-ink-soft">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
