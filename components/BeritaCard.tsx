import Image from "next/image";
import Link from "next/link";
import type { Berita } from "@/data/berita";

export const kategoriKelas: Record<string, string> = {
  Prestasi: "bg-accent-100 text-accent-700",
  Kegiatan: "bg-primary-100 text-primary-700",
  Akademik: "bg-emerald-100 text-emerald-700",
};

export default function BeritaCard({
  item,
  sizes = "(min-width: 640px) 33vw, 50vw",
  priority = false,
}: {
  item: Berita;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/berita/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-primary-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl sm:rounded-2xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={`/images/berita/${item.gambar}`}
          alt={item.alt}
          fill
          priority={priority}
          {...(priority ? {} : { loading: "lazy" as const })}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={sizes}
        />
      </div>

      <div className="flex flex-1 flex-col p-3 lg:p-4">
        <span
          className={`inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide sm:px-2.5 sm:py-1 sm:text-[11px] ${
            kategoriKelas[item.kategori] ?? "bg-primary-100 text-primary-700"
          }`}
        >
          {item.kategori}
        </span>
        <h3 className="mt-2 font-display text-sm font-bold leading-snug text-primary-900 line-clamp-2 lg:text-base">
          {item.judul}
        </h3>
      </div>
    </Link>
  );
}
