"use client";

import { motion } from "framer-motion";

// Placeholder angka untuk menghasilkan kotak galeri
const galleryItems = Array.from({ length: 9 }, (_, i) => i + 1);

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black pt-40 pb-20 px-6 md:px-10 text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-center uppercase"
      >
        Galeri Visual
      </motion.h1>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className={`w-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden ${
              index % 2 === 0 ? "h-64" : "h-96"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center text-white/20 hover:bg-white/10 transition-colors cursor-pointer">
              <span>Gambar {item}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}