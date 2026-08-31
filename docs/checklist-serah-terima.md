# Checklist Serah Terima Jasa Pembuatan Source Code Website
## SMP Taman Dewasa Jetis — Yogyakarta

Dokumen ini adalah daftar periksa (checklist) yang diisi bersama saat **serah terima source code** antara Developer (Pihak Pertama) dan Sekolah (Pihak Kedua). Centang setiap item yang telah dipenuhi sebelum serah terima dinyatakan selesai.

---

## A. Penyerahan Source Code

- [ ] Seluruh source code proyek diserahkan (folder proyek lengkap).
- [ ] File konfigurasi penting tersedia: `package.json`, `package-lock.json`, `next.config.*`, `tsconfig.json`, `.gitignore`.
- [ ] Folder `data/` berisi seluruh konten (teks, daftar guru/siswa/alumni, galeri).
- [ ] Folder `public/images/` berisi seluruh aset gambar.
- [ ] Tidak ada file rahasia terikut (`.env*` berisi kredensial tidak boleh disertakan ke publik).

## B. Dokumentasi

- [ ] **README** diserahkan berisi: cara install, `npm run build`, `npm run start`, cara edit konten, dan opsi deploy.
- [ ] Dijelaskan cara menambah/mengubah konten (melalui `data/`).
- [ ] Dijelaskan cara mengubah foto (letak file di `public/images/`).

## C. Cara Menjalankan / Deploy (bukan bagian jasa, tapi harus bisa dijalankan pihak sekolah)

- [ ] Sekolah memahami minimal salah satu cara menjalankan website (Vercel/Netlify/server).
- [ ] Daftar langkah deploy diserahkan di README.
- [ ] Ditegaskan bahwa **hosting & domain** adalah tanggung jawab sekolah (di luar jasa).

## D. Verifikasi Fungsional (opsional, sebelum serah terima)

- [ ] Halaman Beranda tampil.
- [ ] Menu navigasi & halaman-halaman utama dapat diakses.
- [ ] Tampilan responsif (desktop & mobile) normal.
- [ ] Form/kontak & tautan PPDB bekerja (diarahkan ke WhatsApp/email).

## E. Administrasi & Pembayaran

- [ ] SPK/MoU ditandatangani kedua pihak.
- [ ] Uang muka / pelunasan sesuai Pasal 4 SPK/MoU diterima.
- [ ] Kepemilikan source code berpindah ke sekolah setelah lunas (Pasal 2 SPK/MoU).
- [ ] Masa garansi bug dicatat (Pasal 5 SPK/MoU).

---

### Pernyataan

Dengan menandatangani dokumen ini, kedua belah pihak menyatakan seluruh item yang dicentang telah dipenuhi dan serah terima source code dinyatakan **selesai**.

&nbsp;

| | |
|---|---|
| **Developer (Pihak Pertama)** | **Sekolah (Pihak Kedua)** |
| &nbsp; | &nbsp; |
| &nbsp; | &nbsp; |
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| Nama: \_\_\_\_\_\_\_\_\_\_\_\_ | Nama: \_\_\_\_\_\_\_\_\_\_\_\_ |
| Tanggal: \_\_\_\_\_\_\_\_\_\_\_\_ | Tanggal: \_\_\_\_\_\_\_\_\_\_\_\_ |
