import Image from "next/image";
import Link from "next/link";
import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import StickySubNav from "@/components/StickySubNav";
import {
  visi,
  misi,
  tujuan,
  sejarah,
  saranaKelas,
  saranaRuang,
  saranaLain,
  kepalaSekolah,
  strategi,
  kondisiSiswa,
  komite,
  prestasi,
} from "@/data/profil";
import { nav } from "@/data/site";

const subNav = nav.find((n) => n.label === "Profil Sekolah")?.children ?? [];

export const metadata = {
  title: "Profil Sekolah",
  description:
    "Profil SMP Taman Dewasa Jetis Yogyakarta: Visi Misi, Sejarah Singkat, Sarana Prasarana, Struktur Organisasi, Kepala Sekolah, Strategi Pencapaian, Kondisi Siswa, Komite Sekolah, dan Prestasi Siswa.",
};

export default function ProfilPage() {
  return (
    <>
      <PageHero
        title="Profil Sekolah"
        subtitle="Mengenal lebih dekat SMP Taman Dewasa Jetis Yogyakarta — sekolah berwawasan budaya dalam semangat Taman Siswa."
        breadcrumb="Profil Sekolah"
      />

      <StickySubNav links={subNav} />

      <div className="divide-y divide-earth-100 bg-white">
        {/* Visi Misi */}
        <section id="visimisi" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Arah & Tujuan"
            title="Visi, Misi & Tujuan"
            align="left"
          />
          <div className="rounded-3xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 text-primary-50 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">
              Visi Sekolah
            </p>
            <p className="mt-3 font-display text-2xl font-bold leading-snug text-white text-balance sm:text-3xl">
              “{visi}”
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-earth-100 bg-earth-50 p-7">
              <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-primary-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-700 text-white" aria-hidden>1</span>
                Misi
              </h3>
              <ol className="space-y-3">
                {misi.map((m, i) => (
                  <li key={i} className="flex gap-3 text-ink-soft">
                    <span className="font-bold text-accent-600">{i + 1}.</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-earth-100 bg-earth-50 p-7">
              <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-primary-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-primary-950" aria-hidden>2</span>
                Tujuan
              </h3>
              <ol className="space-y-3">
                {tujuan.map((t, i) => (
                  <li key={i} className="flex gap-3 text-ink-soft">
                    <span className="font-bold text-accent-600">{i + 1}.</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Sejarah */}
        <section id="sejarahsingkat" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Perjalanan Kami"
            title="Sejarah Singkat"
            align="left"
          />
          <div className="grid gap-10 lg:grid-cols-2">
            <ol className="relative space-y-6 border-l-2 border-accent-200 pl-6">
              {sejarah.map((s, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-accent-500" aria-hidden>
                    <span className="h-2 w-2 rounded-full bg-primary-950" />
                  </span>
                  <p className="leading-relaxed text-ink-soft">{s}</p>
                </li>
              ))}
            </ol>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/slider/slide1.jpg"
                alt="Suasana SMP Taman Dewasa Jetis"
                width={960}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Sarana & Prasarana */}
        <section id="saranaprasarana" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Fasilitas"
            title="Sarana & Prasarana"
            subtitle="Berikut ini adalah sarana dan prasarana yang ada di sekolah."
            align="left"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-earth-100 bg-earth-50 p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-primary-900">🏫 Kelas</h3>
              <ul className="grid grid-cols-2 gap-2">
                {saranaKelas.map((s) => (
                  <li key={s} className="rounded-lg bg-white px-3 py-2 text-sm text-ink-soft shadow-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-earth-100 bg-earth-50 p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-primary-900">🏛 Ruang</h3>
              <ul className="space-y-2">
                {saranaRuang.map((s) => (
                  <li key={s} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-ink-soft shadow-sm">
                    <span aria-hidden>•</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-earth-100 bg-earth-50 p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-primary-900">🧪 Fasilitas</h3>
              <ul className="space-y-2">
                {saranaLain.map((s) => (
                  <li key={s} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-ink-soft shadow-sm">
                    <span aria-hidden>•</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section id="strukturorganisasi" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Organisasi"
            title="Struktur Organisasi"
            align="left"
          />
          <div className="flex flex-col items-center rounded-3xl border-2 border-dashed border-primary-200 bg-earth-50 p-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-4xl" aria-hidden>
              🏛
            </div>
            <p className="mt-4 max-w-md font-medium text-primary-900">
              Struktur organisasi sekolah akan kami update disini.
            </p>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Pihak sekolah dapat mengunggah bagan struktur organisasi di sini.
            </p>
            <Link
              href="/kontak"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            >
              Hubungi kami untuk update
            </Link>
          </div>
        </section>

        {/* Kepala Sekolah */}
        <section id="kepalasekolah" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pimpinan"
            title="Kepala Sekolah"
            align="left"
          />
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-earth-50 p-8 sm:flex-row sm:p-10">
            <div className="relative shrink-0">
              <Image
                src={kepalaSekolah.foto}
                alt={`Foto ${kepalaSekolah.nama}`}
                width={400}
                height={400}
                className="aspect-square w-56 rounded-3xl object-cover shadow-xl sm:w-64"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
                Pemimpin Kami
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-primary-900">
                {kepalaSekolah.nama}
              </h3>
              <p className="mt-1 text-accent-700">{kepalaSekolah.jabatan}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
                Mendorong setiap peserta didik dan segenap pamong untuk berkembang
                dalam semangat Among, berprestasi, dan berkarakter budaya dalam
                menghadapi kecakapan abad 21.
              </p>
            </div>
          </div>
        </section>

        {/* Strategi Pencapaian */}
        <section id="programkerja" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Program"
            title="Strategi Pencapaian Tujuan"
            align="left"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strategi.map((s, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-earth-100 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kondisi Siswa */}
        <section id="kondisisiswa" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Keadaan Peserta Didik"
            title="Kondisi Siswa"
            align="left"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="prose-school">
              <p>{kondisiSiswa.intro}</p>
              <p>{kondisiSiswa.jumlah}</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {kondisiSiswa.rincian.map((r) => (
                  <div key={r.kelas} className="rounded-2xl bg-primary-800 p-5 text-center text-white">
                    <p className="font-display text-3xl font-bold text-accent-400">{r.jumlah}</p>
                    <p className="mt-1 text-sm font-medium">{r.kelas}</p>
                    <p className="text-xs text-primary-200">{r.info}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-earth-50 p-5">
                <p className="text-sm text-ink-soft">
                  Total {kondisiSiswa.rincian.reduce((a, b) => a + b.jumlah, 0)} siswa, terdiri dari 12 kelas.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-earth-100 bg-earth-50 p-7">
              <h3 className="font-display text-lg font-bold text-primary-900">Kondisi Pembelajaran</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{kondisiSiswa.pembelajaran}</p>
            </div>
          </div>
        </section>

        {/* Komite Sekolah */}
        <section id="komitesekolah" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mitra Sekolah"
            title="Komite Sekolah"
            align="left"
          />
          <p className="mx-auto max-w-4xl text-center leading-relaxed text-ink-soft">
            {komite.intro}
          </p>
          <p className="mx-auto max-w-4xl text-center leading-relaxed text-ink-soft">
            {komite.intro2}
          </p>
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-earth-100 shadow-sm">
            {komite.pengurus.map(([jabatan, nama], i) => (
              <div
                key={jabatan}
                className={`grid grid-cols-2 items-center gap-4 px-6 py-3 ${
                  i % 2 === 0 ? "bg-white" : "bg-earth-50"
                }`}
              >
                <span className="font-medium text-primary-800">{jabatan}</span>
                <span className="text-right text-ink-soft">
                  {nama || "—"}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Prestasi Siswa */}
        <section id="prestasisiswa" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kebanggaan"
            title="Prestasi Siswa"
            subtitle="Berikut data prestasi siswa SMP Taman Dewasa Jetis Yogyakarta."
            align="left"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {prestasi.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-earth-100 p-5 transition-all hover:border-accent-200 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-100 font-display text-sm font-bold text-accent-700">
                  {p.juara}
                </span>
                <div>
                  <p className="font-semibold text-primary-900">{p.event}</p>
                  <p className="mt-1 text-sm text-ink-soft">{p.nama}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ContactStrip />
    </>
  );
}
