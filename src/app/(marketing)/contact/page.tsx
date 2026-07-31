"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { MagicCursor } from "@/components/ui/cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const contactDetails = [
  {
    icon: MapPin,
    title: "Lokasi Kami",
    content: "Jl. Badak V No.31, Pandean Lamper, Kec. Gayamsari, Kota Semarang, Jawa Tengah 50249",
    actionText: "Buka di Google Maps",
    link: "https://maps.app.goo.gl/p4JRFFu8T9vofXqE7",
  },
  {
    icon: Phone,
    title: "Telepon & WhatsApp",
    content: "+62 895-2457-0682\n+62 896-4675-3644",
    actionText: "Hubungi Kami",
    link: "https://wa.me/6289524570682",
  },
  {
    icon: Mail,
    title: "Alamat Email",
    content: "miekopyokpakzain@gmail.com",
    actionText: "Kirim Pesan",
    link: "miekopyokpakzain@gmail.com",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Minggu\n09.00 - 16.00 WIB",
    actionText: null,
    link: null,
  }
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[var(--color-cream)] flex flex-col overflow-x-hidden selection:bg-[var(--color-primary)] selection:text-white">
      <MagicCursor colors={["139 107 77", "166 98 31"]} />
      <Navbar />

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto w-full flex-grow flex flex-col">
        
        {/* --- BAGIAN JUDUL --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mb-16 md:mb-24"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase mb-4 block">
            Mari Berbincang
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-[var(--color-dark)] leading-tight max-w-3xl">
            Hubungi <span className="text-[var(--color-primary)] lowercase emphasis">Kami</span>
          </h1>
          <p className="mt-6 text-[var(--color-dark)]/70 text-lg font-light max-w-xl leading-relaxed">
            Baik untuk pesanan katering, reservasi tempat, atau sekadar menyapa, kami selalu siap melayani Anda dengan kehangatan khas keluarga kami.
          </p>
        </motion.div>

        {/* --- BAGIAN KONTEN (GRID 2 KOLOM) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Kolom Kiri: Informasi Kontak */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8 md:gap-12 pr-0 lg:pr-8"
          >
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-dark)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-dark)]/70 font-light leading-relaxed whitespace-pre-line mb-3">
                      {item.content}
                    </p>
                    
                    {item.actionText && item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors w-fit"
                      >
                        {item.actionText}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Kolom Kanan: Peta (Google Maps Iframe) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 w-full h-[500px] lg:h-full min-h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-black/5 relative"
          >
            {/* Latar belakang loading palsu sebelum iframe dimuat */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1332183244203!2d110.44030097499719!3d-6.99358699300751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d9dcb85a5cb%3A0x455ffdad1d4fadd8!2sMie%20Kopyok%20Pak%20Zain%20Badak!5e0!3m2!1sid!2sid!4v1785367901338!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            
            {/* Elemen desain kecil melayang di atas peta */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
              <span className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
                </span>
                <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-dark)]">
                  Lokasi Kami 
                </span>
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      <div className="w-full relative z-30">
        <Footer />
      </div>
    </main>
  );
}