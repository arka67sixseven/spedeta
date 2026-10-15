import type { Metadata } from "next";
import { PageHero } from "@/components/UI";
import BeritaCard from "@/components/BeritaCard";
import { berita } from "@/data/berita";

export const metadata: Metadata = {
  title: "Berita & Kegiatan",
  description:
    "Kumpulan berita, kegiatan, prestasi, dan pengumuman resmi SMP Taman Dewasa Jetis Yogyakarta.",
};

export default function BeritaPage() {
  return (
    <>
      <PageHero
        title="Berita & Kegiatan"
        subtitle="Kumpulan kabar terbaru, kegiatan, prestasi, dan pengumuman resmi SMP Taman Dewasa Jetis Yogyakarta."
        breadcrumb="Berita"
      />

      <section className="bg-mist py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-6">
            {berita.map((b) => (
              <BeritaCard key={b.slug} item={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
