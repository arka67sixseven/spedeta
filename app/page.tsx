import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { SectionHeading, CtaButton } from "@/components/UI";
import { sambutan, testimoni } from "@/data/home";
import Gallery from "@/components/Gallery";
import VideoEmbed from "@/components/VideoEmbed";
import { prestasi, kepalaSekolah } from "@/data/profil";

export const metadata = {
  title: "Beranda",
  description:
    "Website resmi SMP Taman Dewasa Jetis Yogyakarta - Sekolah Berwawasan Budaya. Terwujudnya Kepribadian yang Religius, Cerdas, Terampil, Berbudaya, Nasionalis, Berwawasan Lingkungan dan Global.",
};

export default function HomePage() {
  return (
    <>
      <div id="top" />
      <HeroSlider />

      {/* Sambutan Kepala Sekolah */}
      <section id="sambutan" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-accent-100" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={sambutan.foto}
                alt={`Foto ${kepalaSekolah.nama}`}
                width={720}
                height={720}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-950/90 to-transparent p-5">
                <p className="font-display text-lg font-bold text-white">
                  {kepalaSekolah.nama}
                </p>
                <p className="text-sm text-accent-300">Kepala Sekolah</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600">
              {sambutan.judul}
            </p>
            <h2 className="font-display text-3xl font-bold text-primary-900 text-balance sm:text-4xl">
              {sambutan.nama}
            </h2>
            <p className="mt-1 text-sm font-medium text-accent-700">
              {sambutan.jabatan}
            </p>
            <div className="mt-4 border-l-4 border-accent-500 bg-earth-50 p-4">
              <p className="text-sm italic text-primary-800">{sambutan.pembuka} — {sambutan.salam}</p>
            </div>
            <div className="prose-school mt-4">
              {sambutan.isi.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
              <p className="mb-1">{sambutan.penutup1}</p>
              <p className="mb-1">{sambutan.penutup2} {sambutan.penutup3}</p>
            </div>
            <div className="mt-6">
              <CtaButton href="/profil-sekolah" variant="outline">
                Profil Sekolah
                <span aria-hidden>→</span>
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik singkat */}
      <section className="bg-primary-900 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { angka: "1948", label: "Berdiri Sejak" },
            { angka: "307", label: "Siswa Aktif" },
            { angka: "12", label: "Kelas" },
            { angka: "35+", label: "Pamong & Staff" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-extrabold text-accent-400 sm:text-4xl">
                {s.angka}
              </p>
              <p className="mt-1 text-sm text-primary-200">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video sekoloh + welcome strip */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sekolah Berwawasan Budaya"
            title="Kegiatan & Suasana Sekolah"
            subtitle="Mengembangkan potensi, bakat, minat, dan kemandirian peserta didik dalam suasana Among yang menyenangkan."
          />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <VideoEmbed />
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-900">
                Mari Berkembang Bersama Kami
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Melalui pembelajaran Among Metode dan Kurikulum Merdeka, kami
                mendampingi setiap peserta didik mengenali potensinya, berprestasi
                akademik dan non-akademik, serta berkarakter budaya Indonesia.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Pembelajaran berpusat pada peserta didik",
                  "Kegiatan ekstrakurikuler yang beragam",
                  "Budaya Tamansiswa: Among, ngemong, dan ngasuh",
                  "Sarana & prasarana yang lengkap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-soft">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaButton href="/siswa/ekstrakurikuler">Ekstrakurikuler</CtaButton>
                <CtaButton href="/profil-sekolah#saranaprasarana" variant="outline">
                  Sarana &amp; Prasarana
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestasi */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kebanggaan Kami"
            title="Prestasi Siswa"
            subtitle="Berbagai prestasi akademik dan non-akademik yang diraih oleh siswa-siswi SMP Taman Dewasa Jetis Yogyakarta."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {prestasi.slice(0, 8).map((p, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-earth-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg"
              >
                <span className="inline-block rounded-full bg-accent-100 px-3 py-1 text-sm font-bold text-accent-700">
                  {p.juara}
                </span>
                <p className="mt-3 font-semibold text-primary-900">{p.event}</p>
                <p className="mt-1 text-sm text-ink-soft">{p.nama}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaButton href="/profil-sekolah#prestasisiswa" variant="outline">
              Lihat Semua Prestasi
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="relative overflow-hidden bg-primary-950 py-20">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #ecc24a 0, transparent 40%), radial-gradient(circle at 80% 60%, #3d8c5d 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kata Mereka"
            title="Testimoni Siswa & Alumni"
            subtitle="Cerita pengalaman belajar di SMP Taman Dewasa Jetis Yogyakarta."
            light
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimoni.map((t, i) => (
              <figure
                key={i}
                className="flex h-full flex-col rounded-2xl bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
              >
                <div className="mb-3 text-accent-400" aria-hidden>★★★★★</div>
                <blockquote className="flex-1 text-sm leading-relaxed text-primary-100">
                  “{t.pesan}”
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{t.nama}</p>
                  <p className="text-xs text-accent-300">{t.status}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Dokumentasi"
            title="Galeri Unggulan"
            subtitle="Momen kegiatan belajar dan bermain di lingkungan sekolah. Geser ke kiri atau kanan untuk melihat dokumentasi."
          />
          <Gallery />
        </div>
      </section>

      {/* PPDB CTA */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-700 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-300">
              Buka Pendaftaran
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">
              PPDB Online Tahun Ajaran 2024/2025
            </h2>
            <p className="mt-2 text-primary-100">
              Pendaftaran <strong className="text-accent-300">Gratis!</strong>{" "}
              Segera daftarkan putra-putri Anda di sekolah berwawasan budaya Kota Yogyakarta.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaButton href="/ppdb" variant="accent">
              Daftar PPDB Online
            </CtaButton>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
