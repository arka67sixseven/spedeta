import Image from "next/image";
import Link from "next/link";
import { berita } from "@/data/berita";
import { SectionHeading } from "@/components/UI";

export default function BeritaSection() {
  return (
    <section id="berita" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <SectionHeading
          eyebrow="Kabar Terbaru"
          title="Berita &amp; Kegiatan"
          subtitle="Jejak kegiatan, prestasi, dan pengumuman resmi SMP Taman Dewasa Jetis Yogyakarta."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-6">
          {berita.map((b) => (
            <Link
              key={b.slug}
              href={`/berita/${b.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-primary-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl sm:rounded-2xl"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={`/images/berita/${b.gambar}`}
                  alt={b.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-3 lg:p-4">
                <span className="inline-flex w-fit rounded-full bg-accent-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-700 sm:px-2.5 sm:py-1 sm:text-[11px]">
                  {b.kategori}
                </span>
                <h3 className="mt-2 font-display text-sm font-bold leading-snug text-primary-900 line-clamp-2 sm:text-sm lg:text-base">
                  {b.judul}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}