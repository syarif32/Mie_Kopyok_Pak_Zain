import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Marketplace",
    links: ["Explore Products", "Categories", "Featured Stores", "Become Partner"],
  },
  {
    title: "Products",
    links: ["Coffee", "Fashion", "Craft", "Organic"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Story", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Seller Guide", "Shipping", "Returns"],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-dark px-4 sm:px-6 lg:px-8 pb-[calc(8rem+env(safe-area-inset-bottom))] xl:pb-10 pt-16 md:pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="font-sans text-2xl italic">Mie Kopyok </span>
              <span className="text-xl font-semibold">Pak Zain</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              A home for Indonesian UMKM — connecting authentic, handmade
              products with people who value where things come from.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* <input
                type="email"
                placeholder="Your email address"
                className="visible-focus w-full max-w-xs rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none sm:w-auto"
              />
              <Button variant="primary" size="sm">
                Subscribe
              </Button> */}
            </div>

            <div className="mt-2 flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="visible-focus flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h4 className="text-sm font-medium text-white">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="visible-focus text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 text-center sm:text-left sm:flex-row">
          <p>© 2026 MIE KOPYOK PAK ZAIN. Created by <a href="https://zaeeon-site.vercel.app" target="_blank" rel="noopener noreferrer" className="visible-focus hover:text-white/100">Muhammad Najwa Syarif</a></p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <a href="#" className="visible-focus hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#" className="visible-focus hover:text-white/70">
              Terms of Service
            </a>
            <a href="#" className="visible-focus hover:text-white/70">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
