import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedCategories } from "@/components/featured-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { Story } from "@/components/story";
import { Makers } from "@/components/makers";
import { IndonesiaMap } from "@/components/indonesia-map";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Statistics } from "@/components/statistics";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Story />
      <Makers />
      <IndonesiaMap />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}
