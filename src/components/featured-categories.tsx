"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

// Data lokal khusus untuk kategori menu warung Anda
const kategoriMenu = [
  {
    id: "berkuah",
    title: "Sajian Berkuah",
    description: "Nikmati kehangatan kuah kaldu kaya rempah yang meresap sempurna dalam setiap suapan.",
    count: "Tersedia",
    image: "/images/ko.png", 
  },
  {
    id: "daging",
    title: "Olahan Daging",
    description: "Potongan daging pilihan yang dimasak perlahan hingga sangat empuk dan kaya cita rasa.",
    count: "Tersedia",
    image: "https://images.unsplash.com/photo-1597345637412-9fd611e758f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: "minuman",
    title: "Penyegar Dahaga",
    description: "Paduan buah segar dan racikan manis yang cocok untuk meredakan dahaga Anda.",
    count: "Tersedia",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: "katering",
    title: "Paket Katering",
    description: "Sajian porsi besar yang dikemas secara profesional untuk menyempurnakan hari istimewa Anda.",
    count: "Tersedia",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop", 
  }
];

// Menggunakan tipe data langsung di dalam komponen
type Kategori = typeof kategoriMenu[0];

function KartuKategori({ category, index }: { category: Kategori; index: number }) {
  return (
    <motion.a
      href="/menu"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="group relative flex h-[320px] sm:h-[380px] flex-col justify-end overflow-hidden rounded-[32px] shadow-2xl"
    >
      <Image
        src={category.image}
        alt={category.title}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 296px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="relative z-10 flex items-end justify-between gap-3 p-5 xl:p-7">
        <div>
          <h3 className="text-2xl font-medium text-white">{category.title}</h3>
          <p className="mt-2 max-w-[240px] text-sm text-white/80 leading-relaxed">
            {category.description}
          </p>
          <span className="mt-4 inline-block text-xs font-bold tracking-widest text-[var(--color-primary)] uppercase">
            {category.count}
          </span>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-500 group-hover:bg-[var(--color-primary)] group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </motion.a>
  );
}

export function FeaturedCategories() {
  return (
    <section id="kategori" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 w-full relative z-20">
      <SectionHeading
        eyebrow="Jelajahi Selera"
        title="Ragam Rasa Istimewa"
        emphasisWord="Istimewa"
        description="Dari kehangatan kuah kaldu legendaris hingga kesegaran buah alami, temukan hidangan yang paling sesuai dengan suasana hati Anda hari ini."
      />
      
      {/* Grid disesuaikan menjadi 2 kolom untuk tablet dan 4 kolom untuk layar besar */}
      <div className="mt-10 md:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {kategoriMenu.map((kategori, index) => (
          <KartuKategori key={kategori.id} category={kategori} index={index} />
        ))}
      </div>
    </section>
  );
}