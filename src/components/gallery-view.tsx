"use client";

import { motion } from "framer-motion";
import { RollingGallery } from "@/components/ui/gallery";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { CateringPackages } from "@/components/ui/catering-packages";

// Data statis untuk menu katering
const menuKateringData = [
  {
    title: 'Mie Kopyok Spesial',
    description: 'Sajian legendaris kami. Irisan tahu pong, tauge segar, dan kerupuk gendar yang disiram kuah kaldu bawang pekat. Pilihan favorit untuk setiap acara.',
    link: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop',
    color: '#8B6B4D',
  },
  {
    title: 'Tengkleng',
    description: 'Olahan tulang iga dan daging kambing dengan kuah rempah gurih khas yang kaya rasa, dimasak perlahan hingga daging empuk dan meresap sempurna.',
    link: 'https://images.unsplash.com/photo-1626804475297-41609ea004eb?q=80&w=800&auto=format&fit=crop',
    color: '#A6621F', 
  },
  {
    title: 'Gulai Daging',
    description: 'Daging pilihan berbalut kuah santan kuning kental dengan paduan bumbu rempah tradisional yang hangat dan menggugah selera.',
    link: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop',
    color: '#1D1D1D', 
  },
  {
    title: 'Bakso Sapi',
    description: 'Bakso urat dan halus dari daging sapi asli, disajikan dengan kuah kaldu sapi pekat yang gurih, lengkap dengan taburan seledri dan bawang goreng.',
    link: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    color: '#5D7A55', 
  },
  {
    title: 'Sop Peco',
    description: 'Potongan daging dan tulang rawan yang dimasak perlahan hingga sangat empuk, disajikan dalam kuah kaldu bening yang menyegarkan.',
    link: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    color: '#8B6B4D', 
  },
  {
    title: 'Soto Nusantara',
    description: 'Sajian soto berkuah kuning segar dengan suwiran ayam atau daging, soun, tauge, dan taburan koya khas yang melengkapi cita rasa.',
    link: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=800&auto=format&fit=crop',
    color: '#A6621F', 
  },
  {
    title: 'Es Kuwut',
    description: 'Pelepas dahaga paripurna! Minuman segar perpaduan melon serut, daging kelapa muda, biji selasih, dan perasan jeruk nipis yang menyegarkan.',
    link: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    color: '#5D7A55', 
  }
];

// Menghapus parameter props, karena kita menggunakan data statis
export function GalleryView() {
  // Mengambil link gambar dari data katering di atas untuk digunakan di galeri 3D
  const galleryImages = menuKateringData.map((item) => item.link);

  return (
    <main className="relative min-h-screen bg-[var(--color-dark)] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* --- BAGIAN ATAS: GALERI VISUAL --- */}
      <div className="relative pt-40 pb-20 text-white w-full flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02] z-0">
          <h1 className="text-[15vw] font-bold tracking-tighter whitespace-nowrap text-white">
            Pak Zain 
          </h1>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6 px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
              Galeri <span className="emphasis text-[var(--color-primary)] lowercase">Visual</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/50 tracking-widest uppercase text-sm mb-16 px-6 text-center"
          >
            Geser untuk menjelajahi kelezatan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-screen-2xl overflow-hidden"
          >
            {/* Memasukkan gambar katering statis ke dalam komponen galeri */}
            <RollingGallery images={galleryImages} autoplay={true} pauseOnHover={true} />
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-24 max-w-2xl text-center px-6 flex flex-col items-center gap-8"
          >
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Kelezatan warisan ini tidak hanya bisa dinikmati di tempat kami, tetapi juga siap menyempurnakan setiap momen berharga Anda.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- BAGIAN BAWAH: MENU KATERING (KARTU BERTUMPUK) --- */}
      <div className="w-full relative z-20">
        <CateringPackages packages={menuKateringData} />
      </div>

      <div className="w-full mt-auto relative z-30">
        <Footer />
      </div>
    </main>
  );
}