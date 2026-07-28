"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-40 pb-20 px-6 md:px-20 text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">
            Sapa Kami
          </h1>
          <p className="text-xl font-light text-white/60 mb-12">
            Kami selalu terbuka untuk kolaborasi, pesanan jumlah besar, atau sekadar berbincang tentang kecintaan pada kuliner lokal.
          </p>
          
          <div className="space-y-4 font-light tracking-wider">
            <p>Email: halo@miekopyokzain.id</p>
            <p>Telepon: +62 812 3456 7890</p>
            <p>Lokasi: Jl. Pemuda No. 10, Semarang</p>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-8 bg-white/5 p-10 rounded-3xl border border-white/10"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm tracking-widest text-white/50 uppercase">Nama Lengkap</label>
            <input type="text" id="name" className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm tracking-widest text-white/50 uppercase">Alamat Email</label>
            <input type="email" id="email" className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm tracking-widest text-white/50 uppercase">Pesan Anda</label>
            <textarea id="message" rows={4} className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
          </div>

          <Button type="button" className="mt-4 bg-white text-black hover:bg-gray-200 rounded-full py-6 tracking-widest uppercase text-sm font-medium">
            Kirim Pesan
          </Button>
        </motion.form>

      </div>
    </main>
  );
}