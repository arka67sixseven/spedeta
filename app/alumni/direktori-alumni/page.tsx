import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import { alumniList } from "@/data/alumni";

export const metadata = {
  title: "Direktori Alumni",
  description:
    "Direktori alumni SMP Taman Dewasa Jetis Yogyakarta.",
};

export default function DirektoriAlumniPage() {
  const angkatan = [...new Set(alumniList.map((a) => a.angkatan))].sort(
    (a, b) => a.localeCompare(b)
  );

  return (
    <>
      <PageHero
        title="Direktori Alumni"
        subtitle="Daftar alumni SMP Taman Dewasa Jetis Yogyakarta."
        breadcrumb="Alumni › Direktori Alumni"
      />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Jejaring"
          title="Alumni Taman Dewasa Jetis"
          subtitle="Terhubung kembali dengan rekan seangkatan Anda."
        />
        <div className="space-y-8">
          {angkatan.map((thn) => {
            const list = alumniList.filter((a) => a.angkatan === thn);
            return (
              <div key={thn} className="rounded-2xl border border-earth-100 overflow-hidden">
                <div className="flex items-center justify-between bg-primary-800 px-6 py-3">
                  <h3 className="font-display font-bold text-white">
                    Angkatan {thn}
                  </h3>
                  <span className="text-sm text-accent-300">
                    {list.length} alumni
                  </span>
                </div>
                <ul className="divide-y divide-earth-100 bg-white">
                  {list.map((a, i) => (
                    <li key={i} className="flex flex-wrap items-center justify-between gap-2 px-6 py-3">
                      <div>
                        <p className="font-medium text-primary-900">{a.nama}</p>
                      </div>
                      <a
                        href={`mailto:${a.email}`}
                        className="text-sm text-primary-600 hover:text-primary-800"
                      >
                        {a.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
