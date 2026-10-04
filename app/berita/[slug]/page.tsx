import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/UI";
import { berita } from "@/data/berita";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return berita.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = berita.find((item) => item.slug === slug);

  if (!b) {
    return { title: "Berita tidak ditemukan" };
  }

  return {
    title: b.judul,
    description: b.ringkasan,
    openGraph: {
      title: b.judul,
      description: b.ringkasan,
      images: [`/images/berita/${b.gambar}`],
    },
  };
}

export default async function BeritaDetailPage({ params }: Props) {
  const { slug } = await params;
  const b = berita.find((item) => item.slug === slug);
  if (!b) notFound();

  const kategoriKode: Record<string, string> = {
    Prestasi: "bg-accent-100 text-accent-700",
    Kegiatan: "bg-primary-100 text-primary-700",
    Akademik: "bg-emerald-100 text-emerald-700",
  };

  return (
    <>
      <PageHero title={b.judul} subtitle={b.ringkasan} breadcrumb="Berita" />

      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Link
          href="/#berita"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-accent-600"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M19 12H5M12 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Kembali ke Berita &amp; Kegiatan
        </Link>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                kategoriKode[b.kategori] ?? "bg-primary-100 text-primary-700"
              }`}
            >
              {b.kategori}
            </span>
            <time
              dateTime={b.tanggal}
              className="text-sm font-medium text-ink-soft"
            >
              {b.tanggalLabel}
            </time>
          </div>
          <h1 className="mt-4 font-display text-2xl font-bold leading-snug text-primary-900 sm:text-3xl">
            {b.judul}
          </h1>
        </header>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary-100 shadow-sm">
          <Image
            src={`/images/berita/${b.gambar}`}
            alt={b.alt}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-base leading-relaxed text-ink sm:text-lg">
            {b.ringkasan}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {b.sumber && (
              <a
                href={b.sumber}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
              >
                Tonton / Lihat Sumber di Instagram
                <svg
                  width="16"
                  height="16"
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
              </a>
            )}
          </div>
        </div>
      </article>
    </>
  );
}