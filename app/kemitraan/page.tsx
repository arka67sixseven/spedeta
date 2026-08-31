import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import { kemitraan } from "@/data/kemitraan";

export const metadata = {
  title: "Kemitraan",
  description:
    "Kemitraan dan kerjasama SMP Taman Dewasa Jetis Yogyakarta dengan berbagai instansi.",
};

export default function KemitraanPage() {
  return (
    <>
      <PageHero
        title="Kemitraan"
        subtitle="Jalinan kerjasama SMP Taman Dewasa Jetis Yogyakarta dengan berbagai institusi."
        breadcrumb="Kemitraan"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mitra Kerja Sama"
          title="Institusi Mitra Sekolah"
          subtitle="Kerjasama yang terjalin untuk meningkatkan mutu pendidikan."
        />
        <div className="space-y-5">
          {kemitraan.map((k) => (
            <div
              key={k.instansi}
              className="rounded-2xl border border-earth-100 bg-white p-7 shadow-sm transition-all hover:border-accent-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-800 text-white"
                  aria-hidden
                >
                  🏛
                </span>
                <h3 className="font-display text-lg font-bold text-primary-900">
                  {k.instansi}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-ink-soft">{k.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
