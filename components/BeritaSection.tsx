import Image from "next/image";
import Link from "next/link";
import { berita } from "@/data/berita";
import { SectionHeading } from "@/components/UI";

export default function BeritaSection() {
  return (
    <section id="berita" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kabar Terbaru"
          title="Berita &amp; Kegiatan"
          subtitle="Jejak kegiatan, prestasi, dan pengumuman resmi SMP Taman Dewasa Jetis Yogyakarta."
        />

        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {berita.map((b) => (
            <Link
              key={b.slug}
              href={`/berita/${b.slug}`}
              className="group relative block overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={`/images/berita/${b.gambar}`}
                  alt={b.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1152px) 33vw, (min-width: 640px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/20 to-transparent" />
              </div>

              <span className="absolute left-2 top-2 inline-flex rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-700 backdrop-blur sm:text-xs">
                {b.kategori}
              </span>

              <h3 className="absolute inset-x-0 bottom-0 px-3 pb-3 font-display text-xs font-bold leading-snug text-white sm:text-base sm:pb-4 sm:px-4 sm:leading-snug line-clamp-2">
                {b.judul}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}