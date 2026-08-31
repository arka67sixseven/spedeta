# Website SMP Taman Dewasa Jetis — Yogyakarta

Website resmi **SMP Taman Dewasa Jetis** (`smptdjetis.sch.id`) dibangun dengan **Next.js (App Router) + React + TypeScript + Tailwind CSS v4**.

Website ini bersifat **statis** (konten ditaruh dalam folder `data/`), tanpa backend/database publik. Form PPDB diarahkan ke WhatsApp/email eksternal, dan video profil memakai embed YouTube.

---

## Persyaratan Sistem

- [Node.js](https://nodejs.org) versi **18.18+** (disarankan 20.x atau lebih baru)
- npm (biasanya sudah terpasang bersama Node.js)

## Instalasi Dependency

Jalankan sekali di folder proyek:

```bash
npm install
```

## Menjalankan Mode Pengembangan (Development)

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Halaman auto-reload saat file diubah.

## Build Produksi

```bash
npm run build
```

Hasil build disimpan di folder `.next`.

## Menjalankan Server Produksi

```bash
npm run start
```

Server berjalan di [http://localhost:3000](http://localhost:3000). Untuk port lain:

```bash
npm run start -- -p 3001
```

## Pengetesan Kode (Lint & TypeScript)

```bash
npm run lint     # ESLint
npx tsc --noEmit # type check TypeScript
```

---

## Daftar Halaman / Rute

| URL | Keterangan |
| --- | --- |
| `/` | Beranda |
| `/profil-sekolah` | Profil sekolah (sambutan, visi misi, fasilitas, dll.) |
| `/guru/direktori-guru` | Direktori pamong & tenaga kependidikan |
| `/guru/kalender-akademik` | Kalender akademik |
| `/guru/materi-ajar`, `/guru/materi-uji`, `/guru/silabus` | Materi guru |
| `/siswa/*` | Direktori siswa, ekstrakurikuler, beasiswa, ppts |
| `/alumni/*` | Direktori & info alumni |
| `/kemitraan` | Kemitraan |
| `/ppdb` | Pendaftaran PPDB |
| `/kontak` | Kontak sekolah |

## Struktur Folder Penting

```
app/            # Halaman (routing Next.js App Router)
components/     # Komponen UI (Navbar, Footer, HeroSlider, UI, dll.)
data/           # SELURUH konten website (teks, daftar guru/siswa, galeri)
public/images/  # Aset gambar (logo, slider, galeri, foto guru, dll.)
```

> **Cara mengubah konten:** hampir semua teks dan data tersimpan sebagai TypeScript di folder `data/`. Edit file di sana, lalu jalankan ulang build. Foto diletakkan di `public/images/...`.

---

## Cara Deploy

Karena situs ini statis, dapat di-deploy ke berbagai platform. Berikut opsi paling umum.

### Opsi 1 — Vercel (paling sederhana)
1. Buat akun di [vercel.com](https://vercel.com).
2. Hubungkan repository (GitHub/GitLab/Bitbucket) proyek ini.
3. Vercel mendeteksi Next.js secara otomatis → klik **Deploy**.
4. Setiap `git push` ke branch utama otomatis ter-deploy.

Deploy manual tanpa repo, via [Vercel CLI](https://vercel.com/docs/cli):
```bash
npm i -g vercel
vercel
```

### Opsi 2 — Netlify
1. Import project di [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next`

### Opsi 3 — Server/node (self-host)
```bash
npm ci
npm run build
npm run start   # jalankan dengan PM2/systemd bila perlu
```
Arahkan domain ke server dan pasang reverse-proxy (mis. Nginx/Caddy) ke port 3000.

> **Catatan domain & hosting:** pengelolaan domain (`smptdjetis.sch.id`) dan hosting berada di luar lingkup jasa pembuatan source code (lihat SPK/MoU).

---

## Lisensi

Source code diserahkan berdasarkan ketentuan dalam Surat Perjanjian Kerja/Nota Kesepahaman (SPK/MoU) yang disepakati antara pihak pengembang dan sekolah.
