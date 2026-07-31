import { Navbar } from "@/components/navbar";
// 1. IMPORT HERO, BUKAN ANIMATED ROADMAP
import { Hero } from "@/components/hero"; 
// 2. Pastikan path import Magic Cursor sesuai dengan nama file Anda (misal: magic-cursor.tsx)
import { MagicCursor } from "@/components/ui/cursor"; 
import { FeaturedCategories } from "@/components/featured-categories";
import { MenuGrid, type DatabaseMenu, type MenuCategory } from "@/components/featured-products";
import { Story } from "@/components/story";
import { Makers } from "@/components/makers";
import { IndonesiaMap } from "@/components/indonesia-map";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Statistics } from "@/components/statistics";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { TestimonialsV2 } from "@/components/ui/testimonial-v2";

export default function Home() {
  return (
    // Tambahkan bg-[var(--color-cream)] di main agar latarnya tidak hitam/putih polos
    <main className="overflow-x-hidden bg-[var(--color-cream)]">
      <MagicCursor colors={["139 107 77", "166 98 31"]} />
      <Navbar />
      
      {/* 
        3. PANGGIL KOMPONEN HERO 
        Semua data roadmap, gambar Mie Kopyok, judul, dan tombol 
        sudah terbungkus rapi di dalam komponen Hero ini.
      */}
      <Hero />
      
      <FeaturedCategories />
      {/* <MenuGrid menus={[]} categories={[{ id: "all", name: "Semua", slug: "all" }]} /> */}
      <Story />
      {/* <Makers /> */}
      <IndonesiaMap />
      <WhyChooseUs />
      <Statistics />
      <TestimonialsV2 />
      <Cta />
      <Footer />
    </main>
  );
}