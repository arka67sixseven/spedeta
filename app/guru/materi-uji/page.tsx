import { PageHero, ContactStrip } from "@/components/UI";

export const metadata = {
  title: "Materi Uji",
  description: "Materi uji/penilaian SMP Taman Dewasa Jetis Yogyakarta.",
};

export default function MateriUjiPage() {
  return (
    <>
      <PageHero
        title="Materi Uji"
        subtitle="Kumpulan materi uji dan penilaian di SMP Taman Dewasa Jetis Yogyakarta."
        breadcrumb="Guru › Materi Uji"
      />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-3xl border-2 border-dashed border-primary-200 bg-earth-50 p-12 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-4xl">
            🗂️
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold text-primary-900">
            Materi Uji
          </h2>
          <p className="mt-3 max-w-md text-ink-soft">
            Materi uji akan di update di halaman ini oleh pihak sekolah. Pantau
            terus atau hubungi sekolah untuk informasi terbaru.
          </p>
          <a
            href="mailto:info@smptdjetis.sch.id"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            Hubungi Sekolah
          </a>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
