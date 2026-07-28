# NUSAKARYA

A premium landing page for an Indonesian UMKM ecosystem — built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui-style components, Lucide icons, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

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
