import { PageHero, SectionHeading, ContactStrip } from "@/components/UI";
import { site } from "@/data/site";

export const metadata = {
  title: "Kontak Kami",
  description:
    "Hubungi SMP Taman Dewasa Jetis Yogyakarta: alamat, telepon, email, WhatsApp, dan lokasi.",
};

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery
)}&output=embed`;

export default function KontakPage() {
  return (
    <>
      <PageHero
        title="Kontak Kami"
        subtitle="Hubungi kami untuk informasi seputar sekolah dan pendaftaran siswa baru."
        breadcrumb="Kontak"
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info kontak */}
          <div>
            <SectionHeading
              eyebrow="Hubungi Kami"
              title="Lokasi & Kontak"
              align="left"
            />
            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-earth-100 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-800 text-xl text-white" aria-hidden>
                  📍
                </span>
                <div>
                  <h3 className="font-semibold text-primary-900">Alamat</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {site.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-earth-100 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-800 text-xl text-white" aria-hidden>
                  ☎
                </span>
                <div>
                  <h3 className="font-semibold text-primary-900">Telepon</h3>
                  <a href={`tel:${site.phoneTel}`} className="mt-1 block text-sm text-primary-700 hover:text-primary-900">
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-earth-100 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-800 text-xl text-white" aria-hidden>
                  ✉
                </span>
                <div>
                  <h3 className="font-semibold text-primary-900">Email</h3>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-primary-700 hover:text-primary-900">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-earth-100 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-800 text-xl text-white" aria-hidden>
                  🖥
                </span>
                <div>
                  <h3 className="font-semibold text-primary-900">Website</h3>
                  <p className="mt-1 text-sm text-ink-soft">{site.website}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-primary-950 transition-colors hover:bg-accent-400"
            >
              Chat WhatsApp {site.whatsapp}
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-earth-100 shadow-sm">
            <iframe
              src={mapEmbed}
              title="Lokasi SMP Taman Dewasa Jetis Yogyakarta"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
