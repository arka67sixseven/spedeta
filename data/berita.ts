export type Berita = {
  slug: string
  tanggal: string // ISO YYYY-MM-DD
  tanggalLabel: string
  judul: string
  ringkasan: string
  kategori: string
  gambar: string
  alt: string
  sumber: string | null
}

const BULAN = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

function fmtTanggal(iso: string) {
  const d = new Date(iso + 'T00:00:00')
  return `${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}`
}

export const berita: Berita[] = [
  {
    slug: "harmony-of-spedeta-kenangan-budaya-dalam-gerak-dd-mtbqsgxy",
    tanggal: '2026-10-02',
    tanggalLabel: fmtTanggal('2026-10-02'),
    judul: "Harmony of Spedeta: Kenangan, Budaya, dalam Gerak",
    ringkasan:
      "Yuk, isi akhir pekanmu dengan menyaksikan dan mengapresiasi pertunjukan seni tari \"Memories\" persembahan dari Harmony Of Spedeta! Kolaborasi vokal, dance, dan drummer dari siswa-siswi SMP Taman Dewasa Jetis Yogyakarta. Bertempat di Jogja City Mall, Minggu 4 Oktober 2026 pukul 16.30 WIB.",
    kategori: "Prestasi",
    gambar: 'berita-01.jpg',
    alt: "Harmony of Spedeta: Kenangan, Budaya, dalam Gerak",
    sumber: 'https://www.instagram.com/p/Dd-mTbQSgxy/',
  },
  {
    slug: "karnaval-menyambut-hut-jogja-ke-270-dd-iwjby71y",
    tanggal: '2026-10-02',
    tanggalLabel: fmtTanggal('2026-10-02'),
    judul: "Karnaval Menyambut HUT Jogja ke-270",
    ringkasan:
      "SMP Taman Dewasa Jetis Yogyakarta turut memeriahkan karnaval dalam rangka menyambut HUT Jogja ke-270 dengan mengusung tema \"Eco Futurism of Jogja\", melangkah bersama menyambut Jogja masa depan.",
    kategori: "Kegiatan",
    gambar: 'berita-02.jpg',
    alt: "Karnaval Menyambut HUT Jogja ke-270",
    sumber: 'https://www.instagram.com/p/Dd-iwJBy71Y/',
  },
  {
    slug: "penampilan-istimewa-siswa-pada-karnaval-hut-jogja-270-dd2n",
    tanggal: '2026-09-29',
    tanggalLabel: fmtTanggal('2026-09-29'),
    judul: "Penampilan Istimewa Siswa pada Karnaval HUT Jogja 270",
    ringkasan:
      "Yuk datang dan saksikan penampilan istimewa siswa berbakat SMP Taman Dewasa Jetis pada Karnaval HUT Jogja 270, memeriahkan ulang tahun Kota Yogyakarta yang ke-270.",
    kategori: "Kegiatan",
    gambar: 'berita-03.jpg',
    alt: "Penampilan Istimewa Siswa pada Karnaval HUT Jogja 270",
    sumber: 'https://www.instagram.com/p/Dd2n2sgSUFV/',
  },
  {
    slug: "juara-3-taekwondo-pelajar-kota-yogyakarta-2026-dd2b281sv0a",
    tanggal: '2026-09-29',
    tanggalLabel: fmtTanggal('2026-09-29'),
    judul: "Juara 3 Taekwondo Pelajar Kota Yogyakarta 2026",
    ringkasan:
      "Selamat dan sukses atas prestasi Juara ke-3 untuk ananda Evelin Sukmaningwilujeng dalam Kejuaraan Taekwondo Pelajar Kota Yogyakarta 2026. Prestasi ini membanggakan keluarga besar SMP Taman Dewasa Jetis.",
    kategori: "Prestasi",
    gambar: 'berita-04.jpg',
    alt: "Juara 3 Taekwondo Pelajar Kota Yogyakarta 2026",
    sumber: 'https://www.instagram.com/p/Dd2b281Sv0A/',
  },
  {
    slug: "spedeta-art-fest-2026-dd0wn8bslkj",
    tanggal: '2026-09-28',
    tanggalLabel: fmtTanggal('2026-09-28'),
    judul: "Spedeta Art Fest 2026",
    ringkasan:
      "Spedeta Art Fest 2026 mengundang putra-putri terbaik dari murid kelas 4, 5, dan 6 SD se-Yogyakarta untuk berpartisipasi dalam ajang kreativitas dan prestasi SMP Taman Dewasa Jetis. Lomba menggambar, vokal, dan tari kreasi, gratis tanpa dipungut biaya dengan hadiah menarik.",
    kategori: "Prestasi",
    gambar: 'berita-05.jpg',
    alt: "Spedeta Art Fest 2026",
    sumber: 'https://www.instagram.com/p/Dd0WN8BSlKj/',
  },
  {
    slug: "kokurikuler-kelas-7-dan-8-aku-cinta-indonesia-dalam-kebera",
    tanggal: '2026-09-22',
    tanggalLabel: fmtTanggal('2026-09-22'),
    judul: "Kokurikuler Kelas 7 dan 8: Aku Cinta Indonesia dalam Keberagaman",
    ringkasan:
      "Kegiatan kokurikuler kelas 7 dan 8 bertema \"Aku Cinta Indonesia dalam Keberagaman\" menjadi ruang bagi peserta didik untuk belajar bahwa setiap perbedaan adalah kekayaan yang patut dihargai. Beragam budaya, karakter, kebiasaan, dan latar belakang tetap satu dalam semangat Indonesia: Bhinneka Tunggal Ika.",
    kategori: "Kegiatan",
    gambar: 'berita-06.jpg',
    alt: "Kokurikuler Kelas 7 dan 8: Aku Cinta Indonesia dalam Keberag",
    sumber: 'https://www.instagram.com/p/DdlKpP5y87f/',
  },
  {
    slug: "smp-taman-dewasa-jetis-gelar-pelatihan-media-pembelajaran",
    tanggal: '2026-09-17',
    tanggalLabel: fmtTanggal('2026-09-17'),
    judul: "SMP Taman Dewasa Jetis Gelar Pelatihan Media Pembelajaran 3 Dimensi",
    ringkasan:
      "SMP Taman Dewasa Jetis menggelar pelatihan media pembelajaran 3 dimensi untuk meningkatkan minat belajar siswa dalam proses pembelajaran di kelas.",
    kategori: "Akademik",
    gambar: 'berita-07.jpg',
    alt: "SMP Taman Dewasa Jetis Gelar Pelatihan Media Pembelajaran 3 ",
    sumber: 'https://www.instagram.com/p/DdZEnB1y7oL/',
  },
  {
    slug: "komunitas-belajar-bersama-bunda-rini-ddxwqtbsuaf",
    tanggal: '2026-09-17',
    tanggalLabel: fmtTanggal('2026-09-17'),
    judul: "Komunitas Belajar Bersama Bunda Rini",
    ringkasan:
      "Yuk terus jadi pembelajar sepanjang hayat! Hari ini pamong SMP Taman Dewasa Jetis akan belajar bersama pemateri hebat dari orang tua siswa, Bunda Rini, dalam kegiatan komunitas belajar.",
    kategori: "Akademik",
    gambar: 'berita-08.jpg',
    alt: "Komunitas Belajar Bersama Bunda Rini",
    sumber: 'https://www.instagram.com/p/DdXwqTbSUAF/',
  },
  {
    slug: "asesmen-sumatif-tengah-semester-ganjil-ddv7qkptosl",
    tanggal: '2026-09-16',
    tanggalLabel: fmtTanggal('2026-09-16'),
    judul: "Asesmen Sumatif Tengah Semester Ganjil",
    ringkasan:
      "SMP Taman Dewasa Jetis Yogyakarta melaksanakan Asesmen Sumatif Tengah Semester (ASTS) Ganjil dengan memanfaatkan teknologi digital melalui aplikasi Geschool.",
    kategori: "Akademik",
    gambar: 'berita-09.jpg',
    alt: "Asesmen Sumatif Tengah Semester Ganjil",
    sumber: 'https://www.instagram.com/p/DdV7qkPtoSL/',
  },
  {
    slug: "semangat-belajar-siswa-ddp0tyose-9",
    tanggal: '2026-09-14',
    tanggalLabel: fmtTanggal('2026-09-14'),
    judul: "Semangat Belajar Siswa",
    ringkasan:
      "Salam dan Bahagia! Tetap semangat untuk hari ini, anak-anak hebat. Selamat berjuang untuk terus bertumbuh menjadi pribadi yang religius dan berkarakter.",
    kategori: "Kegiatan",
    gambar: 'berita-10.jpg',
    alt: "Semangat Belajar Siswa",
    sumber: 'https://www.instagram.com/p/DdP0TyOSe_9/',
  },
  {
    slug: "good-job-for-today-dcyvriaj310",
    tanggal: '2026-09-02',
    tanggalLabel: fmtTanggal('2026-09-02'),
    judul: "Good Job for Today",
    ringkasan:
      "Good job for today, guys! Apresiasi atas semangat dan kerja keras siswa dalam mengikuti kegiatan belajar hari ini.",
    kategori: "Kegiatan",
    gambar: 'berita-11.jpg',
    alt: "Good Job for Today",
    sumber: 'https://www.instagram.com/p/DcyVRiAJ310/',
  },
  {
    slug: "dokumentasi-pengajian-maulid-nabi-saw-dccp6gtyz6o",
    tanggal: '2026-08-24',
    tanggalLabel: fmtTanggal('2026-08-24'),
    judul: "Dokumentasi Pengajian Maulid Nabi SAW",
    ringkasan:
      "Salam dan Bahagia. Berikut dokumentasi kegiatan Pengajian Maulid Nabi SAW di SMP Taman Dewasa Jetis sebagai bagian dari pembiasaan kecintaan kepada Nabi Muhammad SAW.",
    kategori: "Kegiatan",
    gambar: 'berita-12.jpg',
    alt: "Dokumentasi Pengajian Maulid Nabi SAW",
    sumber: 'https://www.instagram.com/p/DccP6gTyz6O/',
  },
]
