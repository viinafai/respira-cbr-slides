# PertussisLens — CBR Pertussis (GitHub Pages)

Versi kedua website tugas Sistem Pendukung Keputusan. Dibuat statis dengan HTML, CSS, dan JavaScript sehingga dapat dipublikasikan langsung melalui GitHub Pages.

## Metode
- Case-Based Reasoning (CBR)
- Cosine Similarity tanpa bobot
- 9 atribut gejala biner (0/1)
- 3 kasus referensi: P01, P02, P03
- Contoh K01: G3, G4, G5, G8 → hasil P01 50%, P02 75%, P03 50%

## Struktur
- `index.html`
- `style.css`
- `data.js`
- `script.js`

## Repository baru
Agar berbeda dari versi pertama, buat repository baru, misalnya:
`pertussis-cbr-slides`

Upload seluruh file ini ke root repository.

## Aktifkan GitHub Pages
1. Buka **Settings → Pages**.
2. Pada **Source**, pilih **Deploy from a branch**.
3. Branch: **main**.
4. Folder: **/ (root)**.
5. Klik **Save**.

Alamatnya akan berbentuk:
`https://USERNAME.github.io/pertussis-cbr-slides/`

## Catatan
Website ini merupakan simulasi pembelajaran dan bukan alat diagnosis medis. Data relasi penyakit-gejala diadaptasi dari artikel Nofriansyah, Gunawan, & Elfitriani (2020), sedangkan perhitungan CBR/Cosine tanpa bobot merupakan adaptasi untuk tugas.
