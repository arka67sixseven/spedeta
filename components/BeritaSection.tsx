import Image from "next/image";
import { berita } from "@/data/berita";
import { SectionHeading } from "@/components/UI";

function Inisial({ kategori }: { kategori: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-700">
      {kategori}
    </span>
  );
}

export default function BeritaSection() {
  return (
    <section id="berita" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kabar Terbaru"
          title="Berita &amp; Kegiatan"
          subtitle="Jejak kegiatan, prestasi, dan pengumuman resmi SMP Taman Dewasa Jetis Yogyakarta."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {berita.map((b) => {
            const Wrapper = b.sumber ? "a" : "div"
            return (
              <Wrapper
                key={b.slug}
                {...(b.sumber
                  ? { href: b.sumber, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/images/berita/${b.gambar}`}
                    alt={b.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Inisial kategori={b.kategori} />
                    <time
                      dateTime={b.tanggal}
                      className="text-xs font-medium text-ink-soft"
                    >
                      {b.tanggalLabel}
                    </time>
                  </div>

                  <h3 className="font-display text-lg font-bold leading-snug text-primary-900">
                    {b.judul}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                    {b.ringkasan}
                  </p>

                  {b.sumber && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                      Lihat di Instagram
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M9 7h8v8"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
