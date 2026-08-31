import { PageHero, ContactStrip } from "@/components/UI";
import { direktoriSiswa } from "@/data/siswa";

export const metadata = {
  title: "Direktori Siswa",
  description:
    "Direktori siswa SMP Taman Dewasa Jetis Yogyakarta tahun ajaran 2023/2024.",
};

export default function DirektoriSiswaPage() {
  const total = direktoriSiswa.kelompok.reduce((a, k) => a + k.total, 0);
  return (
    <>
      <PageHero
        title="Direktori Siswa"
        subtitle="Data jumlah peserta didik SMP Taman Dewasa Jetis Yogyakarta."
        breadcrumb="Siswa › Direktori Siswa"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-ink-soft">
          {direktoriSiswa.intro}
        </p>
        <div className="mt-12 space-y-8">
          {direktoriSiswa.kelompok.map((k) => (
            <div
              key={k.nama}
              className="overflow-hidden rounded-3xl border border-earth-100 shadow-sm"
            >
              <div className="flex items-center justify-between bg-primary-800 px-6 py-4">
                <h2 className="font-display text-lg font-bold text-white">
                  {k.nama}
                </h2>
                <span className="rounded-full bg-accent-500 px-3 py-1 text-sm font-bold text-primary-950">
                  {k.total} siswa
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-earth-100 sm:grid-cols-4">
                {k.kelas.map((c) => (
                  <div
                    key={c.label}
                    className="bg-white px-6 py-5 text-center first:border-l-0"
                  >
                    <p className="font-semibold text-primary-900">{c.label}</p>
                    <p className="mt-1 text-sm text-ink-soft">{c.jumlah} siswa</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="font-display text-2xl font-bold text-primary-900">
            Total {total} siswa
          </p>
          <p className="text-sm text-ink-soft">
            terdiri dari 12 kelas, pada tahun ajaran 2023/2024
          </p>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
