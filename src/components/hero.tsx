// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SearchBar } from "@/components/search-bar";

// export function Hero() {
//   return (
//     <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
//       <div className="absolute inset-0">
//         <Image
//           src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?q=80&w=2400&auto=format&fit=crop"
//           alt="Indonesian coffee farmer harvesting cherries at sunrise"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/85" />
//       </div>

//       <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
//         <motion.span
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-6 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs tracking-[0.2em] text-white/80 backdrop-blur-md"
//         >
//           NUSAKARYA · A HOME FOR INDONESIAN UMKM
//         </motion.span>

//         <motion.h1
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.15 }}
//           className="text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl"
//         >
//           Discover Indonesia
//           <br />
//           Through <span className="emphasis text-primary">Local Craftsmanship</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="mt-7 max-w-xl text-balance text-base text-white/80 sm:text-lg"
//         >
//           Support local businesses by discovering authentic handmade products
//           from every corner of Indonesia.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.45 }}
//           className="mt-9 flex flex-col gap-4 sm:flex-row"
//         >
//           <Button variant="primary" size="lg">
//             Explore Products
//           </Button>
//           <Button variant="outlineLight" size="lg">
//             Become Partner
//           </Button>
//         </motion.div>

//         <div className="mt-10 flex w-full justify-center">
//           <SearchBar />
//         </div>
//       </div>

//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
//       >
//         <ArrowDown size={22} />
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedRoadmap } from "@/components/ui/animated-roadmap"; 
import { Button } from "@/components/ui/button";

const bahanMieKopyok = [
  { id: 1, name: "Irisan Lontong", status: "complete" as const, position: { top: "65%", left: "10%" } },
  { id: 2, name: "Toge Segar", status: "complete" as const, position: { top: "25%", left: "25%" } },
  { id: 3, name: "Mie Kuning Kenyal", status: "in-progress" as const, position: { top: "55%", left: "50%" } },
  { id: 4, name: "Kerupuk Gendar", status: "pending" as const, position: { top: "20%", right: "15%" } },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay },
  });

  return (
    <section className="relative flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pt-40 md:pb-20">
      <div className="text-center max-w-3xl z-10 relative">
        <motion.span {...entrance(0)} className="mb-6 inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase">
          Warisan Kuliner Autentik
        </motion.span>
        
        {/* PERUBAHAN ADA DI SINI: Menambahkan pemanggilan font dan menghapus font-bold & uppercase */}
        <motion.h2 {...entrance(0.12)} className="text-3xl sm:text-4xl md:text-5xl font-sans tracking-tight text-[var(--color-dark)] leading-tight">
          Kenali Lebih Dekat <br />
          <span className="text-[var(--color-primary)] italic">Kelezatan</span> Kami
        </motion.h2>
        
        <motion.p {...entrance(0.24)} className="mt-5 text-base sm:text-lg text-[var(--color-dark)]/70 md:text-xl font-light">
          Bedah setiap lapis kelezatan legendaris kami. Terbuat dari bahan-bahan pilihan yang diracik sempurna dengan kuah kaldu bawang yang menghangatkan jiwa.
        </motion.p>
        
        <motion.div {...entrance(0.36)} className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Button className="rounded-full bg-[var(--color-primary)] px-8 py-6 text-xs font-bold tracking-widest uppercase text-white shadow-lg transition-all hover:bg-[var(--color-primary)]/90 hover:scale-105">
            Pesan Sekarang
          </Button>
          <Button variant="secondary" className="rounded-full border-[var(--color-primary)] px-8 py-6 text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)]/10">
            Lihat Menu Lengkap
          </Button>
        </motion.div>
      </div>

      <div className="w-full mt-10 md:mt-16 z-10">
        <AnimatedRoadmap
          milestones={bahanMieKopyok}
          mapImageSrc="/images/ko.png" 
        />
      </div>
    </section>
  );
}