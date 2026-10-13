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
