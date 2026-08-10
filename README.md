# THREECORE — Crafted Roaster Website

Website resmi THREECORE Crafted Roaster, dibangun berdasarkan dokumen strategi pemasaran V4.0 dan Master Website Direction.

## Struktur Website

```
threecore-website/
├── index.html           # Homepage lengkap (Hero, Philosophy, Espresso, Origin, Business, Contact)
├── coffee.html          # Halaman Coffee Index (Espresso Series, Single Origin, Discovery/Gift)
├── business.html        # Halaman For Business (Espresso Program, Custom Blend, Wholesale, Business Sharing)
├── story.html           # Halaman Our Story (Why, Philosophy, Craft, Partnership, People, Future)
├── journal.html         # Halaman Journal (Artikel edukasi, business, origin, brewing)
├── contact.html         # Halaman Contact (3 jalur: Buy, Business, Help)
├── product-forge.html   # Template Product Detail (FORGE — The Kopi Susu Master)
├── css/
│   └── style.css        # Design System lengkap (warna, typography, komponen, responsive)
└── js/
    └── main.js          # Animasi scroll, mobile menu, coffee finder, interaksi
```

## Design System

- **Warna:** TCR Black (#0E0E0E), TCR Copper (#C15F2B), TCR Cream (#F4EFE6)
- **Typography:** Anton (display), Inter (body), Lora italic (accent)
- **Prinsip:** Modern + Crafted + Intelligent + Premium
- **No Shop Internal:** Website = Discovery + Education + Trust. Transaksi via WhatsApp / Marketplace.

## Data Produk (Dari Dokumen Strategi)

Semua data produk, harga, dan positioning diambil langsung dari TCR_Marketing_Strategy_V4.0:

| SKU | Komposisi | Body | Acidity | Harga/kg | Tagline |
|-----|-----------|------|---------|----------|---------|
| TITAN | 100% Robusta | 5/5 | 1/5 | Rp 145.000 | The Powerhouse |
| FORGE | 30/70 A/R | 4/5 | 2/5 | Rp 175.000 | The Kopi Susu Master |
| TORQUE | 50/50 A/R | 3.5/5 | 3/5 | Rp 195.000 | The Versatile Balance |
| VECTOR | 70/30 A/R | 3/5 | 4/5 | Rp 225.000 | The Upgrade Path |
| PRIME | 100% Arabica | 3/5 | 5/5 | Rp 255.000 | The Pure Elegance |
| SPECTRUM | Multi-Origin | 3.5/5 | 4/5 | Rp 275.000 | The Signature Showcase |

## Deploy ke GitHub + Vercel

### 1. Buat Repository GitHub

1. Login ke [github.com](https://github.com)
2. Klik "New Repository"
3. Nama repository: `threecore-website` (atau bebas)
4. Visibility: Public (atau Private)
5. Klik "Create repository"

### 2. Push Code ke GitHub

```bash
# Di folder threecore-website/
git init
git add .
git commit -m "Initial commit: THREECORE website v1.0"
git branch -M main
git remote add origin https://github.com/USERNAME/threecore-website.git
git push -u origin main
```

### 3. Deploy ke Vercel

1. Login ke [vercel.com](https://vercel.com) (bisa pakai akun GitHub)
2. Klik "Add New Project"
3. Import repository `threecore-website`
4. Framework Preset: **Other** (ini adalah static HTML)
5. Klik "Deploy"
6. Selesai! Website akan live di `https://threecore-website.vercel.app`

### 4. Custom Domain (Opsional)

1. Di dashboard Vercel, pilih project → Settings → Domains
2. Tambahkan domain custom (misal: `threecoreroaster.com`)
3. Ikuti instruksi DNS dari Vercel

## Catatan Penting

- **WhatsApp Number:** Ganti semua link `6281234567890` dengan nomor WhatsApp Business THREECORE yang sebenarnya.
- **Marketplace Links:** Ganti link placeholder `#` dengan link Tokopedia/Shopee THREECORE yang sebenarnya.
- **Gambar:** Semua placeholder visual (`.story-visual`, `.journal-card-image`, `.product-detail-visual`) perlu diganti dengan foto produk/team/lifestyle THREECORE yang asli.
- **Product Detail:** `product-forge.html` adalah template. Duplikat dan modifikasi untuk TITAN, TORQUE, VECTOR, PRIME, SPECTRUM.
- **SEO:** Meta description dan title sudah di-set per halaman. Tambahkan Open Graph tags dan structured data jika perlu.

## Fitur yang Sudah Dibangun

- [x] Responsive design (desktop + mobile)
- [x] Scroll reveal animations
- [x] Mobile navigation menu
- [x] Coffee Finder interaktif
- [x] Dual B2B/B2C positioning di setiap produk
- [x] Volume pricing display
- [x] Custom Blend process timeline
- [x] Business Problem Framework
- [x] Contact routing (3 jalur)
- [x] Semantic HTML + accessibility basics
- [x] Smooth scroll navigation
- [x] Performance-conscious CSS (no heavy frameworks)

## Roadmap Pengembangan

- [ ] Tambahkan foto produk asli THREECORE
- [ ] Implementasi GSAP ScrollTrigger untuk pinned sections (Hero, Philosophy)
- [ ] Halaman product detail untuk semua 6 SKU Espresso
- [ ] Integrasi form lead capture (bukan hanya WhatsApp)
- [ ] Blog/CMS untuk Journal (bisa pakai Vercel + MDX atau headless CMS)
- [ ] Analytics (Google Analytics 4, Facebook Pixel)
- [ ] SEO optimization (sitemap.xml, robots.txt, structured data)
