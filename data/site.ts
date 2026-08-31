export const site = {
  name: "SMP Taman Dewasa Jetis Yogyakarta",
  shortName: "SMP Taman Dewasa Jetis",
  tagline: "Sekolah Berwawasan Budaya",
  visa_frase: "Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani",
  address: "Jl. AM. Sangaji No.39, Cokrodiningratan, Jetis, Kota Yogyakarta",
  addressShort: "Jl. AM. Sangaji No.39, Cokrodiningratan, Jetis, Yogyakarta",
  postalCode: "55573",
  phone: "(0274) 587022",
  phoneTel: "+622518486667",
  whatsapp: "+6281390252587",
  email: "info@smptdjetis.sch.id",
  website: "www.smptdjetis.sch.id",
  mapsQuery: "SMP Taman Dewasa jetis",
  logo: "/images/logo/logo.png",
  akreditasi: "/images/logo/akreditasi.png",
};

export const nav = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil Sekolah",
    href: "/profil-sekolah",
    children: [
      { label: "Visi dan Misi", href: "/profil-sekolah#visimisi" },
      { label: "Sejarah Singkat", href: "/profil-sekolah#sejarahsingkat" },
      { label: "Sarana & Prasarana", href: "/profil-sekolah#saranaprasarana" },
      { label: "Struktur Organisasi", href: "/profil-sekolah#strukturorganisasi" },
      { label: "Kepala Sekolah", href: "/profil-sekolah#kepalasekolah" },
      { label: "Strategi Pencapaian", href: "/profil-sekolah#programkerja" },
      { label: "Kondisi Siswa", href: "/profil-sekolah#kondisisiswa" },
      { label: "Komite Sekolah", href: "/profil-sekolah#komitesekolah" },
      { label: "Prestasi Siswa", href: "/profil-sekolah#prestasisiswa" },
    ],
  },
  {
    label: "Guru",
    href: "/guru",
    children: [
      { label: "Direktori Guru", href: "/guru/direktori-guru" },
      { label: "Silabus", href: "/guru/silabus" },
      { label: "Materi Ajar", href: "/guru/materi-ajar" },
      { label: "Materi Uji", href: "/guru/materi-uji" },
      { label: "Kalender Akademik", href: "/guru/kalender-akademik" },
    ],
  },
  {
    label: "Siswa",
    href: "/siswa",
    children: [
      { label: "Direktori Siswa", href: "/siswa/direktori-siswa" },
      { label: "Ekstrakurikuler", href: "/siswa/ekstrakurikuler" },
      { label: "PPTS", href: "/siswa/ppts" },
      { label: "Beasiswa", href: "/siswa/beasiswa" },
    ],
  },
  {
    label: "Alumni",
    href: "/alumni",
    children: [
      { label: "Direktori Alumni", href: "/alumni/direktori-alumni" },
      { label: "Info Alumni", href: "/alumni/info-alumni" },
    ],
  },
  { label: "Kemitraan", href: "/kemitraan" },
  { label: "Kontak", href: "/kontak" },
];
