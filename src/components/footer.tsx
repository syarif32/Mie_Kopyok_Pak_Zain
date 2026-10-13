import Link from "next/link";

const columns = [
  {
    title: "Jelajahi",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Menu Makanan & Minuman", href: "/menu" },
      { label: "Cerita Kami", href: "/story" },
      { label: "Galeri & Katering", href: "/gallery" },
    ],
  },
  {
    title: "Pemesanan",
    links: [
      { label: "Pesan via WhatsApp", href: "https://wa.me/6289524570682" },
      { label: "Pilihan Menu Katering", href: "/gallery" },
      { label: "Hubungi Kami", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark px-4 sm:px-6 lg:px-8 pb-[calc(8rem+env(safe-area-inset-bottom))] xl:pb-10 pt-16 md:pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:gap-14 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" className="visible-focus flex flex-wrap items-baseline gap-x-2 gap-y-1 w-fit">
              <span className="font-sans text-2xl italic">Mie Kopyok</span>
              <span className="text-xl font-semibold">Pak Zain</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Mie kopyok khas Semarang dengan kuah bawang gurih, lontong,
              tahu, tauge, dan kerupuk gendar. Nikmati sajian kami di warung
              atau hubungi kami untuk kebutuhan katering acara Anda.
            </p>
            <div className="text-sm leading-relaxed text-white/60">
              <p className="font-medium text-white">Jam Buka</p>
              <p>Senin-Minggu, 09.00-16.00 WIB</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-[1fr_1fr_1.4fr]">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0 flex flex-col gap-4">
                <h4 className="text-sm font-medium text-white">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="visible-focus text-sm leading-relaxed text-white/60 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1 min-w-0 flex flex-col gap-4">
              <h4 className="text-sm font-medium text-white">Lokasi & Kontak</h4>
              <address className="flex flex-col gap-3 text-sm not-italic leading-relaxed text-white/60">
                <a href="https://maps.app.goo.gl/p4JRFFu8T9vofXqE7" target="_blank" rel="noopener noreferrer" className="visible-focus transition-colors hover:text-white">
                  Jl. Badak V No.31, Pandean Lamper, Kec. Gayamsari,
                  Kota Semarang, Jawa Tengah 50249
                </a>
                <a href="tel:+6289524570682" className="visible-focus transition-colors hover:text-white">+62 895-2457-0682</a>
                <a href="tel:+6289646753644" className="visible-focus transition-colors hover:text-white">+62 896-4675-3644</a>
                <a href="mailto:miekopyokpakzain@gmail.com" className="visible-focus break-words transition-colors hover:text-white">miekopyokpakzain@gmail.com</a>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 text-center sm:text-left sm:flex-row">
          <p>© 2026 MIE KOPYOK PAK ZAIN. Created by <a href="https://zaeeon-site.vercel.app" target="_blank" rel="noopener noreferrer" className="visible-focus hover:text-white/100">Muhammad Najwa Syarif</a></p>
          <Link href="/contact" className="visible-focus shrink-0 hover:text-white/70">Kontak Kami</Link>
        </div>
      </div>
    </footer>
  );
}
