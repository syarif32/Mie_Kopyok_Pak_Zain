# Mie Kopyok Pak Zain

A premium landing page for an Indonesian UMKM ecosystem — built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui-style components, Lucide icons, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Map tiles

The flight map uses OpenStreetMap tiles and displays the required map attribution.
No CARTO API key is needed.

## Structure

```
src/
  app/
    (marketing)/page.tsx   → landing page composition
    layout.tsx             → fonts + metadata
    globals.css            → Tailwind v4 theme tokens (color, radius, type)
  components/
    navbar.tsx
    hero.tsx
    search-bar.tsx
    section-heading.tsx
    featured-categories.tsx
    featured-products.tsx
    story.tsx
    makers.tsx
    indonesia-map.tsx
    why-choose-us.tsx
    statistics.tsx
    testimonials.tsx
    cta.tsx
    footer.tsx
    ui/button.tsx
  lib/
    utils.ts   → cn() class helper
    data.ts    → categories, products, makers, provinces, testimonials, stats
```

## Design tokens

- Primary: `#C77732` · Cream: `#F8F6F2` · Dark: `#1D1D1D`
- Soft Brown: `#8B6B4D` · Green: `#5D7A55` · Gray: `#6B7280`
- Radius: `32px` base (`--radius-nk`), `48px` for large hero/CTA cards
- Type: Inter (body/UI) + Instrument Serif Italic (editorial emphasis, e.g. "Local Craftsmanship")

Images are sourced from Unsplash for placeholder purposes — swap in real product/maker photography before shipping.

## SEO and Google Search Console

Set these environment variables locally in .env.local and in your hosting settings before building/deploying:

- SITE_URL: your public canonical origin, including https:// (no path, query, or hash).
- GOOGLE_SITE_VERIFICATION: optional content value from Google's HTML verification meta tag. Not needed for DNS verification.

Redeploy after changing either value. Without SITE_URL, canonical URLs and social image URLs are omitted and the sitemap is empty to avoid publishing an invented domain.

Submit /sitemap.xml in Search Console, inspect the home URL, and request indexing. Verify /robots.txt and validate /contact with Google's Rich Results Test. Each of the five public pages has its own title, description, canonical URL, and social metadata. Restaurant JSON-LD on /contact mirrors the address, phone, and hours visible there; keep both updated together.

Metadata does not guarantee rankings. Replace remaining marketplace placeholder content in the footer, and keep business details consistent across the website and Google Business Profile.

## Strategi pencarian lokal

- Beranda menargetkan mie kopyok dan kuliner khas Semarang; halaman menu menjawab pilihan hidangan dan harga, sedangkan halaman kontak menjawab lokasi dan jam buka.
- SITE_URL wajib diisi domain publik sebenarnya sebelum deployment. Tanpanya sitemap kosong dan canonical tidak diterbitkan. Jangan menggunakan domain contoh sebagai konfigurasi produksi.
- Konfirmasi alamat administratif, lokasi Google Maps, dan harga sebelum menambahkan klaim Semarang Timur, dekat Masjid Agung Jawa Tengah (MAJT), atau tempat makan murah. Jangan mengarang jarak atau waktu perjalanan.
- Setelah terkonfirmasi, tambahkan petunjuk perjalanan dari MAJT yang berguna pada halaman kontak, dan kisaran harga aktual pada menu. Gunakan istilah mie lontong secara alami jika memang merupakan nama yang digunakan untuk sajian usaha ini.
- Lengkapi dan verifikasi Google Profil Bisnis: nama asli usaha, kategori yang sesuai, alamat, telepon, jam buka, menu, foto asli, serta tautan website. Minta ulasan jujur dari pelanggan tanpa insentif.
- Setelah deployment, kirim sitemap.xml melalui Google Search Console, inspeksi URL, dan validasi schema halaman kontak memakai Rich Results Test. Pantau kueri, tayangan, klik, serta halaman tujuan untuk menilai hasil; tidak ada jaminan peringkat pertama.
- Referensi: https://support.google.com/business/answer/7091?hl=id dan https://developers.google.com/search/docs/appearance/structured-data/local-business
