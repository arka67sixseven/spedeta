import { berita } from "@/data/berita";
import { SectionHeading, CtaButton } from "@/components/UI";
import BeritaCarousel from "@/components/BeritaCarousel";

export default function BeritaSection() {
  const utama = berita.slice(0, 5);

  return (
    <section id="berita" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <SectionHeading
          eyebrow="Kabar Terbaru"
          title="Berita &amp; Kegiatan"
          subtitle="Jejak kegiatan, prestasi, dan pengumuman resmi SMP Taman Dewasa Jetis Yogyakarta. Geser ke samping untuk melihat berita lainnya."
        />

        <BeritaCarousel items={utama} />

        <div className="mt-8 flex justify-center">
          <CtaButton href="/berita" variant="outline">
            Lihat Semua Berita
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
