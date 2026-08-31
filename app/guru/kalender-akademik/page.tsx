import Image from "next/image";
import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import { kalenderAkademik } from "@/data/guru";

export const metadata = {
  title: "Kalender Akademik",
  description:
    "Kalender akademik SMP Taman Dewasa Jetis Yogyakarta tahun ajaran 2023-2024.",
};

export default function KalenderAkademikPage() {
  return (
    <>
      <PageHero
        title="Kalender Akademik"
        subtitle="Kalender akademik SMP Taman Dewasa Jetis Yogyakarta."
        breadcrumb="Guru › Kalender Akademik"
      />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Jadwal Tahun Ajaran"
          title={kalenderAkademik.judul}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {kalenderAkademik.gambar.map((g) => (
            <div
              key={g}
              className="overflow-hidden rounded-2xl border border-earth-100 shadow-sm"
            >
              <Image
                src={g}
                alt={kalenderAkademik.judul}
                width={900}
                height={1200}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={kalenderAkademik.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-800"
          >
            <span aria-hidden>⬇</span> Unduh Kalender Akademik (PDF)
          </a>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
