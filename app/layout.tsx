import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smptdjetis.sch.id"),
  title: {
    default: "SMP Taman Dewasa Jetis Yogyakarta",
    template: "%s | SMP Taman Dewasa Jetis Yogyakarta",
  },
  description:
    "Website resmi SMP Taman Dewasa Jetis Yogyakarta. Sekolah berwawasan budaya, religius, cerdas, terampil, nasionalis, dan berwawasan lingkungan. Alamat di Jl. AM. Sangaji No.39, Cokrodiningratan, Jetis, Kota Yogyakarta.",
  keywords: [
    "SMP Taman Dewasa Jetis",
    "SMP Taman Dewasa Yogyakarta",
    "SMP Jetis Yogyakarta",
    "Sekolah Tamansiswa",
    "PPDB SMP Yogyakarta",
  ],
  openGraph: {
    title: "SMP Taman Dewasa Jetis Yogyakarta",
    description:
      "Website resmi SMP Taman Dewasa Jetis Yogyakarta - Sekolah Berwawasan Budaya.",
    locale: "id_ID",
    type: "website",
    siteName: "SMP Taman Dewasa Jetis Yogyakarta",
    images: ["/images/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
