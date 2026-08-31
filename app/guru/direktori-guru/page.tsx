import Image from "next/image";
import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import { guruList } from "@/data/guru";

export const metadata = {
  title: "Direktori Guru",
  description:
    "Direktori pamong (guru) dan tenaga kependidikan SMP Taman Dewasa Jetis Yogyakarta.",
};

export default function DirektoriGuruPage() {
  const pamong = guruList.filter(
    (g) => g.jabatan.includes("Pamong") || g.jabatan.includes("Kepala Sekolah")
  );
  const tendik = guruList.filter(
    (g) => !g.jabatan.includes("Pamong") && !g.jabatan.includes("Kepala Sekolah")
  );

  const Card = ({ g }: { g: (typeof guruList)[number] }) => (
    <div className="group overflow-hidden rounded-2xl border border-earth-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-earth-50">
        <Image
          src={g.foto}
          alt={`Foto ${g.nama}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-bold text-primary-900">
          {g.nama}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent-700">{g.jabatan}</p>
        <p className="mt-2 text-xs text-ink-soft">Pendidikan: {g.pendidikan}</p>
        <p className="mt-1 text-xs text-ink-soft">TTL: {g.tempatLahir}</p>
      </div>
    </div>
  );

  return (
    <>
      <PageHero
        title="Direktori Guru"
        subtitle="Pamong (guru) dan tenaga kependidikan SMP Taman Dewasa Jetis Yogyakarta."
        breadcrumb="Guru › Direktori Guru"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pamong"
          title="Pamong & Kepala Sekolah"
          subtitle="Guru-guru yang mendampingi proses pembelajaran dengan semangat Among."
        />
        <div className="grid grid-cols-4 gap-6">
          {pamong.map((g) => (
            <Card key={g.nama} g={g} />
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Tenaga Kependidikan"
            title="Staf & Administrasi"
            subtitle="Tenaga kependidikan yang mendukung operasional sekolah."
          />
          <div className="grid grid-cols-4 gap-6">
            {tendik.map((g) => (
              <Card key={g.nama} g={g} />
            ))}
          </div>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
