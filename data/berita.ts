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

function formatTanggal(iso: string) {
  const d = new Date(iso + 'T00:00:00')
  return `${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}`
}

export const berita: Berita[] = [
  {
    slug: 'spedeta-art-fest-2026',
    tanggal: '2026-09-28',
    tanggalLabel: formatTanggal('2026-09-28'),
    judul: 'Spedeta Art Fest 2026, Lomba Kreativitas untuk Murid SD',
    ringkasan:
      'SMP Taman Dewasa Jetis mengundang murid kelas 4, 5, dan 6 SD se-Yogyakarta untuk mengikuti Spedeta Art Fest 2026 pada Sabtu, 14 November 2026. Lomba meliputi menggambar, vokal, dan tarik kreasi dengan hadiah menarik.',
    kategori: 'Prestasi',
    gambar: 'berita-01.jpg',
    alt: 'Poster Spedeta Art Fest 2026',
    sumber: 'https://www.instagram.com/p/Dd0WN8BSlKj/',
  },
  {
    slug: 'pengumuman-pengurus-ppts-2026-2027',
    tanggal: '2026-09-27',
    tanggalLabel: formatTanggal('2026-09-27'),
    judul: 'Pengumuman Pengurus PPTS Periode 2026–2027',
    ringkasan:
      'Pengumuman resmi pengurus PPTS periode 2026–2027. Temu pertama akan dilaksanakan pada Senin, 28 September 2026 di Ruang AVA SMP Taman Dewasa Jetis.',
    kategori: 'Pengumuman',
    gambar: 'berita-02.jpg',
    alt: 'Pengumuman pengurus PPTS periode 2026-2027',
    sumber: 'https://www.instagram.com/p/DdyVlGEEjNo/',
  },
  {
    slug: 'kokurikuler-aku-cinta-indonesia',
    tanggal: '2026-09-22',
    tanggalLabel: formatTanggal('2026-09-22'),
    judul: 'Kokurikuler Kelas 7 dan 8: Aku Cinta Indonesia dalam Keberagaman',
    ringkasan:
      'Kegiatan kokurikuler kelas 7 dan 8 mengangkat tema "Aku Cinta Indonesia dalam Keberagaman". Peserta didik belajar menghargai perbedaan sebagai kekayaan bangsa sesuai semboyan Bhinneka Tunggal Ika.',
    kategori: 'Kegiatan',
    gambar: 'berita-03.jpg',
    alt: 'Kegiatan kokurikuler kelas 7 dan 8',
    sumber: 'https://www.instagram.com/p/DdlKpP5y87f/',
  },
  {
    slug: 'pelatihan-media-pembelajaran-3-dimensi',
    tanggal: '2026-09-17',
    tanggalLabel: formatTanggal('2026-09-17'),
    judul: 'Pelatihan Media Pembelajaran 3 Dimensi untuk Tingkatkan Minat Belajar',
    ringkasan:
      'SMP Taman Dewasa Jetis menggelar pelatihan media pembelajaran 3 dimensi untuk meningkatkan minat belajar siswa. Media interaktif diterapkan untuk mendukung proses pembelajaran yang lebih bermakna.',
    kategori: 'Akademik',
    gambar: 'berita-04.jpg',
    alt: 'Pelatihan media pembelajaran 3 dimensi',
    sumber: 'https://www.instagram.com/p/DdZEnB1y7oL/',
  },
  {
    slug: 'komunitas-belajar-bersama-orang-tua',
    tanggal: '2026-09-17',
    tanggalLabel: formatTanggal('2026-09-17'),
    judul: 'Komunitas Belajar Bersama Orang Tua Siswa',
    ringkasan:
      'Komunitas belajar bersama orang tua siswa dilaksanakan dengan pemateri Bunda Rini. Kegiatan ini menumbuhkan semangat untuk menjadi pembelajar sepanjang hayat.',
    kategori: 'Akademik',
    gambar: 'berita-05.jpg',
    alt: 'Komunitas belajar bersama orang tua',
    sumber: 'https://www.instagram.com/p/DdXwqTbSUAF/',
  },
  {
    slug: 'asts-ganjil-aplikasi-geschool',
    tanggal: '2026-09-16',
    tanggalLabel: formatTanggal('2026-09-16'),
    judul: 'Asesmen Sumatif Tengah Semester Ganjil Melalui Aplikasi Geschool',
    ringkasan:
      'SMP Taman Dewasa Jetis melaksanakan Asesmen Sumatif Tengah Semester Ganjil dengan memanfaatkan aplikasi Geschool sebagai sarana penilaian berbasis teknologi digital.',
    kategori: 'Akademik',
    gambar: 'berita-06.jpg',
    alt: 'Pelaksanaan ASTS menggunakan aplikasi Geschool',
    sumber: 'https://www.instagram.com/p/DdV7qkPtoSL/',
  },
  {
    slug: 'semangat-belajar-siswa',
    tanggal: '2026-09-14',
    tanggalLabel: formatTanggal('2026-09-14'),
    judul: 'Semangat Belajar Siswa SMP Taman Dewasa Jetis',
    ringkasan:
      'Semangat belajar siswa terus dibangun untuk menumbuhkan pribadi yang religius, cerdas, dan berkarakter. Apresiasi atas usaha dan kerja keras dalam menuntut ilmu.',
    kategori: 'Kegiatan',
    gambar: 'berita-07.jpg',
    alt: 'Dokumentasi semangat belajar siswa',
    sumber: 'https://www.instagram.com/p/DdP0TyOSe_9/',
  },
  {
    slug: 'good-job-for-today',
    tanggal: '2026-09-02',
    tanggalLabel: formatTanggal('2026-09-02'),
    judul: 'Good Job for Today',
    ringkasan:
      'Apresiasi diberikan kepada seluruh siswa atas semangat dan kerja kerasnya hari ini. Teruslah berjuang dan bertumbuh untuk meraih prestasi terbaik.',
    kategori: 'Kegiatan',
    gambar: 'berita-08.jpg',
    alt: 'Apresiasi siswa SMP Taman Dewasa Jetis',
    sumber: 'https://www.instagram.com/p/DcyVRiAJ310/',
  },
  {
    slug: 'pengajian-maulid-nabi-saw',
    tanggal: '2026-08-24',
    tanggalLabel: formatTanggal('2026-08-24'),
    judul: 'Pengajian Maulid Nabi Muhammad SAW',
    ringkasan:
      'SMP Taman Dewasa Jetis menyelenggarakan pengajian Maulid Nabi Muhammad SAW sebagai bagian dari pembiasaan nilai keagamaan dan menumbuhkan kecintaan kepada Rasulullah SAW.',
    kategori: 'Kegiatan',
    gambar: 'berita-09.jpg',
    alt: 'Dokumentasi pengajian Maulid Nabi SAW',
    sumber: 'https://www.instagram.com/p/DccP6gTyz6O/',
  },
  {
    slug: 'fkub-goes-to-school',
    tanggal: '2026-08-24',
    tanggalLabel: formatTanggal('2026-08-24'),
    judul: 'FKUB Goes to School',
    ringkasan:
      'Program FKUB Goes to School berlangsung di SMP Taman Dewasa Jetis dengan diikuti tiga siswa yaitu Kak Rafa, Kak Kevin, dan Kak Ajeng, serta didampingi Nyi Yuni Mutiarani Prastiwi.',
    kategori: 'Kegiatan',
    gambar: 'berita-10.jpg',
    alt: 'Kegiatan FKUB Goes to School',
    sumber: 'https://www.instagram.com/p/DcbF2u7zSo_/',
  },
  {
    slug: 'jembatan-persahabatan-balai-kota',
    tanggal: '2026-08-24',
    tanggalLabel: formatTanggal('2026-08-24'),
    judul: 'Jembatan Persahabatan di Balai Kota Yogyakarta',
    ringkasan:
      'Siswa SMP Taman Dewasa Jetis mengikuti kegiatan Jembatan Persahabatan di Balai Kota Yogyakarta, yaitu Kak Fatih dan Kak Tathit kelas 9A yang didampingi oleh Ki Ripsky Aji.',
    kategori: 'Kegiatan',
    gambar: 'berita-11.jpg',
    alt: 'Kegiatan Jembatan Persahabatan di Balai Kota',
    sumber: 'https://www.instagram.com/p/DcbFYOcTalL/',
  },
  {
    slug: 'lomba-17-agustus-hut-ri-ke-81',
    tanggal: '2026-08-24',
    tanggalLabel: formatTanggal('2026-08-24'),
    judul: 'Keseruan Lomba 17 Agustus HUT RI ke-81',
    ringkasan:
      'Siswa-siswa SMP Taman Dewasa Jetis meramaikan lomba dalam rangka HUT Republik Indonesia ke-81 dengan semangat kebersamaan dan penuh keceriaan.',
    kategori: 'Prestasi',
    gambar: 'berita-12.jpg',
    alt: 'Keseruan lomba 17 Agustus HUT RI ke-81',
    sumber: 'https://www.instagram.com/p/DcaTqfjS156/',
  },
  {
    slug: 'juara-2-cokraodiningratan-culture-carnival-2026',
    tanggal: '2026-08-18',
    tanggalLabel: formatTanggal('2026-08-18'),
    judul: 'Juara 2 Cokraodiningratan Culture Carnival 2026',
    ringkasan:
      'Siswa-siswi SMP Taman Dewasa Jetis bersama PPTS berhasil meraih Juara 2 pada Cokraodiningratan Culture Carnival tahun 2026. Prestasi ini menjadi kebanggaan sekolah.',
    kategori: 'Prestasi',
    gambar: 'berita-13.jpg',
    alt: 'Prestasi Juara 2 Cokraodiningratan Culture Carnival 2026',
    sumber: 'https://www.instagram.com/p/DcKv3jQS2UN/',
  },
  {
    slug: 'karnaval-eco-futurism-hut-kota-jogja-270',
    tanggal: '2026-09-28',
    tanggalLabel: formatTanggal('2026-09-28'),
    judul: 'Karnaval Eco Futurism of Jogja HUT ke-270 Kota Yogyakarta',
    ringkasan:
      'Dalam rangka HUT Kota Yogyakarta ke-270, SMP Taman Dewasa Jetis menyiapkan karnaval bertema Eco Futurism of Jogja melalui program MANTEP Sampah bersama Universitas Sarjanawiyata Tamansiswa. Karnaval dilaksanakan pada 1 Oktober 2026.',
    kategori: 'Kegiatan',
    gambar: 'berita-14.jpg',
    alt: 'Banner karnaval Eco Futurism of Jogja',
    sumber: null,
  },
]
