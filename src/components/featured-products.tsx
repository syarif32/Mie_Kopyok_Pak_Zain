"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Eye, ShoppingBag, X } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
}

export interface DatabaseMenu {
  id: string;
  name: string;
  current_price: number;
  image_url: string | null;
  description: string | null;
  menu_categories?: {
    name: string;
    slug: string;
  };
}

function MenuCard({ menu, index, onViewDetail }: { menu: DatabaseMenu; index: number; onViewDetail: (menu: DatabaseMenu) => void }) {
  const [saved, setSaved] = useState(false);

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(menu.current_price);

  const imageUrl = menu.image_url || "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=600&auto=format&fit=crop";
  const categoryName = menu.menu_categories?.name || "Lainnya";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
      className="group w-full flex flex-col overflow-hidden rounded-[32px] bg-white shadow-nk-card"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={menu.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <button
          onClick={() => setSaved((v) => !v)}
          aria-label="Simpan ke favorit"
          className="visible-focus absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 backdrop-blur-md transition-colors hover:bg-white z-10"
        >
          <Heart
            size={17}
            className={saved ? "fill-[var(--color-primary)] text-[var(--color-primary)]" : "text-[var(--color-dark)]"}
          />
        </button>

        {/* Tombol Lihat Detail */}
        <div className="absolute inset-x-4 bottom-4 flex md:translate-y-3 justify-center opacity-100 md:opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-10">
          <button 
            onClick={() => onViewDetail(menu)}
            className="visible-focus flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-xs font-medium text-[var(--color-dark)] backdrop-blur-md hover:bg-white shadow-sm"
          >
            <Eye size={14} />
            Lihat Detail
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
        <span className="text-xs tracking-wide text-gray-500 uppercase">{categoryName}</span>
        <h3 className="text-base font-medium leading-snug text-[var(--color-dark)]">
          {menu.name}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-xs text-soft-brown">
          <Star size={13} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
          5.0
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-[var(--color-dark)]">{formattedPrice}</span>
          <button
            aria-label="Tambah ke pesanan"
            className="visible-focus flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-transform hover:scale-105 shadow-md"
          >
            <ShoppingBag size={17} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function MenuGrid({ menus, categories }: { menus: DatabaseMenu[], categories: MenuCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedMenu, setSelectedMenu] = useState<DatabaseMenu | null>(null);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (selectedMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMenu]);

  const displayMenus = useMemo(() => {
    let filtered = menus;
    if (activeCategory !== "all") {
      filtered = menus.filter(menu => menu.menu_categories?.slug === activeCategory);
    }

    return filtered.sort((a, b) => {
      const getWeight = (name: string) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('mie kopyok')) return 1;
        if (lowerName.includes('bakso ikan')) return 2;
        if (lowerName.includes('es gempol') || lowerName.includes('es gempo')) return 3;
        return 4; 
      };

      const weightA = getWeight(a.name);
      const weightB = getWeight(b.name);

      if (weightA === weightB) {
        return a.name.localeCompare(b.name);
      }
      return weightA - weightB;
    });
  }, [menus, activeCategory]);

  return (
    <>
      <section id="menu-list" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="flex flex-col items-center text-center gap-5 mb-10 md:mb-14">
          <SectionHeading
            eyebrow="Sajian Utama"
            title="Warisan Rasa Dalam Semangkuk Cerita"
            emphasisWord="Cerita"
            description=""
          />

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[var(--color-primary)] text-white shadow-md"
                  : "bg-white/10 text-[var(--color-dark)] hover:bg-white/50 border border-black/5"
              }`}
            >
              Semua
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === category.slug
                    ? "bg-[var(--color-primary)] text-white shadow-md"
                    : "bg-white text-[var(--color-dark)] hover:bg-gray-50 border border-black/5"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 items-start">
          <AnimatePresence>
            {displayMenus.map((menu, index) => (
              <MenuCard 
                key={menu.id} 
                menu={menu} 
                index={index} 
                onViewDetail={setSelectedMenu} 
              />
            ))}
          </AnimatePresence>
        </div>

        {displayMenus.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full text-center py-20 text-[var(--color-dark)] opacity-70"
          >
            Maaf, belum ada menu di kategori ini.
          </motion.div>
        )}
      </section>

      {/* Modal Detail Menu */}
      <AnimatePresence>
        {selectedMenu && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Latar Belakang Gelap Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMenu(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Kotak Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-[32px] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90dvh] overflow-y-auto md:overflow-y-hidden"
            >
              {/* Tombol Tutup Silang (X) */}
              <button
                onClick={() => setSelectedMenu(null)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[var(--color-dark)] hover:bg-black/20 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Area Gambar Kiri (Rasio Kotak) */}
              <div className="relative w-full md:w-1/2 h-48 sm:h-64 md:aspect-auto md:h-auto bg-gray-100 shrink-0">
                <Image
                  src={selectedMenu.image_url || "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop"}
                  alt={selectedMenu.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Area Konten Kanan */}
              <div className="flex flex-col w-full md:w-1/2 min-h-0 p-5 sm:p-8 md:p-10 md:overflow-y-auto">
                <span className="text-xs tracking-widest text-[var(--color-primary)] uppercase font-semibold mb-2">
                  {selectedMenu.menu_categories?.name || "Lainnya"}
                </span>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4 leading-tight">
                  {selectedMenu.name}
                </h2>

                <div className="flex items-center gap-1 text-sm text-soft-brown mb-6">
                  <Star size={15} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  <Star size={15} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  <Star size={15} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  <Star size={15} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  <Star size={15} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  <span className="ml-2 text-gray-500">(Ulasan Teratas)</span>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3 border-b pb-2">Deskripsi</h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {selectedMenu.description || "Sebuah sajian istimewa yang dibuat dengan dedikasi dan bahan-bahan pilihan terbaik. Nikmati kelezatan warisan rasa yang autentik dalam setiap suapannya."}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex flex-col sm:flex-row items-center gap-6 justify-between border-t border-gray-100">
                  <span className="text-3xl font-bold text-[var(--color-dark)]">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(selectedMenu.current_price)}
                  </span>
                  
                  <Button className="w-full sm:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full px-8 py-6 tracking-widest uppercase text-xs font-bold transition-colors">
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}