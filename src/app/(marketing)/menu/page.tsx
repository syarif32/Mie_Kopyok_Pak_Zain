"use client";

import { motion } from "framer-motion";

const menuItems = [
  { name: "Mie Kopyok Spesial", price: "Rp 25.000", desc: "Sajian autentik dengan ekstra krupuk gendar dan tahu pong." },
  { name: "Mie Kopyok Biasa", price: "Rp 20.000", desc: "Resep klasik warisan keluarga sejak 1970." },
  { name: "Es Teh Kampul", price: "Rp 8.000", desc: "Teh legit dengan irisan jeruk peras segar." },
  { name: "Es Jeruk", price: "Rp 10.000", desc: "Perasan jeruk murni menyegarkan." },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-black pt-40 pb-20 px-6 md:px-20 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase"
        >
          Menu Pilihan
        </motion.h1>

        <div className="flex flex-col gap-12">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-white/50 transition-colors"
            >
              <div>
                <h2 className="text-2xl font-light tracking-wide">{item.name}</h2>
                <p className="text-white/50 mt-2 font-light">{item.desc}</p>
              </div>
              <span className="text-xl font-medium tracking-widest">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}