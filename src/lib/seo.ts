import type { Metadata } from "next";

export const siteName = "Mie Kopyok Pak Zain";
// Set the verified public origin before building the production deployment.
const configuredUrl = process.env.SITE_URL?.trim();
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
export const absoluteUrl = (path: string) => siteUrl ? new URL(path, siteUrl).href : undefined;

export const seoPages = {
  "/": {
    title: "Mie Kopyok Pak Zain | Kuliner Khas Semarang",
    description: "Kuliner khas Semarang di Gayamsari: Mie Kopyok Pak Zain dengan lontong, tauge, dan kerupuk gendar. Lihat menu, harga, jam buka, dan lokasi warung.",
  },
  "/menu": {
    title: "Menu dan Harga Mie Kopyok di Semarang",
    description: "Lihat pilihan menu makanan dan minuman Mie Kopyok Pak Zain di Semarang, lengkap dengan harga dan deskripsi untuk membantu memilih pesanan Anda.",
  },
  "/story": {
    title: "Cerita Kami",
    description: "Kenali kisah keluarga di balik Mie Kopyok Pak Zain dan semangat menjaga cita rasa mie kopyok khas Semarang melalui resep turun-temurun.",
  },
  "/gallery": {
    title: "Galeri dan Pilihan Menu Katering",
    description: "Jelajahi galeri dan pilihan menu katering Mie Kopyok Pak Zain. Temukan inspirasi hidangan untuk acara Anda dan hubungi kami untuk pemesanan.",
  },
  "/contact": {
    title: "Lokasi di Gayamsari Semarang, Jam Buka dan Kontak",
    description: "Kunjungi Mie Kopyok Pak Zain di Jl. Badak V No.31, Gayamsari, Semarang. Buka setiap hari 10.00-16.00 WIB. Hubungi kami untuk pesanan dan katering.",
  },
} as const;

export function pageMetadata(path: keyof typeof seoPages): Metadata {
  const { title, description } = seoPages[path];
  const fullTitle = path === "/" ? title : title + " | " + siteName;
  const url = absoluteUrl(path);
  const image = absoluteUrl("/images/ko.png");
  const images = image ? [{ url: image, alt: "Mie Kopyok Pak Zain, kuliner khas Semarang" }] : undefined;
  return {
    title: { absolute: fullTitle },
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: { type: "website", locale: "id_ID", siteName, title: fullTitle, description, ...(url ? { url } : {}), ...(images ? { images } : {}) },
    twitter: { card: "summary_large_image", title: fullTitle, description, ...(images ? { images } : {}) },
  };
}

// Business facts mirror the visible contact page; no invented ratings or reviews.
export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteName,
  ...(siteUrl ? { "@id": absoluteUrl("/#restaurant"), url: siteUrl, image: absoluteUrl("/images/ko.png"), hasMenu: absoluteUrl("/menu") } : {}),
  description: "Mie kopyok khas Semarang dengan irisan lontong, tauge, kerupuk gendar, dan kuah kaldu bawang di Gayamsari.",
  servesCuisine: ["Masakan Indonesia", "Kuliner khas Semarang"],
  telephone: "+62-895-2457-0682",
  email: "miekopyokpakzain@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Badak V No.31, Pandean Lamper, Gayamsari",
    addressLocality: "Semarang",
    addressRegion: "Jawa Tengah",
    postalCode: "50249",
    addressCountry: "ID",
  },
  hasMap: "https://maps.app.goo.gl/p4JRFFu8T9vofXqE7",
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "16:00",
  }],
};
