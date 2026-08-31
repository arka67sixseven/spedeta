import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import { ppts } from "@/data/siswa";

export const metadata = {
  title: "PPTS",
  description:
    "Organisasi Siswa Intra Sekolah (PPTS) SMP Taman Dewasa Jetis Yogyakarta.",
};

export default function PptsPage() {
  return (
    <>
      <PageHero
        title="PPTS"
        subtitle="Organisasi Siswa Intra Sekolah (PPTS) SMP Taman Dewasa Jetis Yogyakarta."
        breadcrumb="Siswa › PPTS"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-4xl leading-relaxed text-ink-soft">
          {ppts.intro}
        </p>

        {/* Pengertian */}
        <div className="mt-12">
          <SectionHeading
            eyebrow="Pengertian"
            title="Apa itu PPTS?"
            align="left"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {ppts.pengertian.map((p) => (
              <div
                key={p.judul}
                className="rounded-2xl border border-earth-100 bg-earth-50 p-6"
              >
                <h3 className="font-display text-lg font-bold text-primary-900">
                  {p.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {p.teks}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fungsi */}
        <div className="mt-16">
          <SectionHeading eyebrow="Peranan" title="Fungsi PPTS" align="left" />
          <div className="grid gap-5 md:grid-cols-3">
            {ppts.fungsi.map((f) => (
              <div
                key={f.judul}
                className="rounded-2xl bg-primary-800 p-6 text-primary-50"
              >
                <h3 className="font-display text-lg font-bold text-accent-300">
                  {f.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-100">
                  {f.teks}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tujuan */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Arah"
            title="Tujuan PPTS"
            align="left"
          />
          <ol className="space-y-3">
            {ppts.tujuan.map((t, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-earth-100 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-primary-950">
                  {i + 1}
                </span>
                <span className="text-ink-soft">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
