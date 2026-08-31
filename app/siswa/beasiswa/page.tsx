import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import { beasiswa } from "@/data/siswa";

export const metadata = {
  title: "Beasiswa",
  description:
    "Informasi beasiswa bagi siswa SMP Taman Dewasa Jetis Yogyakarta.",
};

export default function BeasiswaPage() {
  return (
    <>
      <PageHero
        title="Beasiswa"
        subtitle="Informasi program beasiswa bagi siswa SMP Taman Dewasa Jetis Yogyakarta."
        breadcrumb="Siswa › Beasiswa"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bantuan Pendidikan"
          title="Program Beasiswa"
          subtitle="Berikut informasi program beasiswa yang tersedia."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {beasiswa.map((b) => (
            <div
              key={b.judul}
              className="flex flex-col rounded-2xl border border-earth-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-2xl"
                aria-hidden
              >
                🎓
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-primary-900">
                {b.judul}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {b.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-earth-50 p-6 text-center">
          <p className="text-sm text-ink-soft">
            Untuk informasi lebih lanjut mengenai beasiswa, silakan hubungi
            pihak sekolah.
          </p>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
