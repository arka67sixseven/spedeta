import { PageHero, ContactStrip } from "@/components/UI";
import { ekskulWajib, ekskulPilihan, ekskulIntro } from "@/data/siswa";

export const metadata = {
  title: "Ekstrakurikuler",
  description:
    "Daftar kegiatan ekstrakurikuler SMP Taman Dewasa Jetis Yogyakarta.",
};

export default function EkstrakurikulerPage() {
  return (
    <>
      <PageHero
        title="Ekstrakurikuler"
        subtitle="Pengembangan potensi, bakat, minat, dan kemandirian peserta didik."
        breadcrumb="Siswa › Ekstrakurikuler"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {ekskulIntro.map((p, i) => (
          <p
            key={i}
            className="mx-auto max-w-4xl leading-relaxed text-ink-soft"
          >
            {p}
          </p>
        ))}

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 text-primary-50">
            <span className="mb-3 inline-block rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-950">
              Wajib
            </span>
            <h2 className="font-display text-2xl font-bold text-white">
              Ekstrakurikuler Wajib
            </h2>
            <p className="mt-2 text-sm text-primary-200">
              Diikuti oleh seluruh peserta didik.
            </p>
            <ul className="mt-6 space-y-3">
              {ekskulWajib.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-primary-50"
                >
                  <span className="text-accent-400" aria-hidden>✦</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-earth-100 bg-earth-50 p-8">
            <span className="mb-3 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-700">
              Pilihan
            </span>
            <h2 className="font-display text-2xl font-bold text-primary-900">
              Ekstrakurikuler Pilihan
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Dipilih sesuai minat dan bakat peserta didik.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {ekskulPilihan.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-ink-soft shadow-sm"
                >
                  <span className="text-accent-600" aria-hidden>✦</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
