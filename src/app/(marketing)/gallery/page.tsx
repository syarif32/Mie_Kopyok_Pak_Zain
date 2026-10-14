"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { MagicCursor } from "@/components/ui/cursor";
import { RollingGallery } from "@/components/ui/gallery";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const menuKateringData = [
  {
    title: 'Mie Kopyok Spesial',
    description: 'Sajian legendaris kami. Irisan tahu pong, tauge segar, dan kerupuk gendar yang disiram kuah kaldu bawang pekat. Pilihan favorit untuk setiap acara.',
    link: '/images/ko.png',
    color: '#7a461b',
  },
  {
    title: 'Tengkleng',
    description: 'Olahan tulang iga dan daging kambing dengan kuah rempah gurih khas yang kaya rasa, dimasak perlahan hingga daging empuk dan meresap sempurna.',
    link: 'https://www.dapurkobe.co.id/wp-content/uploads/gulai-daging.jpg',
    color: '#5C3A21', 
  },
  {
    title: 'Gulai Daging',
    description: 'Daging pilihan berbalut kuah santan kuning kental dengan paduan bumbu rempah tradisional yang hangat dan menggugah selera.',
    link: 'https://images.unsplash.com/photo-1743525700011-afac212694d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VsYWl8ZW58MHx8MHx8fDA%3D',
    color: '#261C14', 
  },
  {
    title: 'Bakso Sapi',
    description: 'Bakso urat dan halus dari daging sapi asli, disajikan dengan kuah kaldu sapi pekat yang gurih, lengkap dengan taburan seledri dan bawang goreng.',
    link: 'https://images.unsplash.com/photo-1687425973283-d0d266b73325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJha3NvfGVufDB8fDB8fHww',
    color: '#3B4D3A', 
  },
  {
    title: 'Sop Peco',
    description: 'Potongan daging dan tulang rawan yang dimasak perlahan hingga sangat empuk, disajikan dalam kuah kaldu bening yang menyegarkan.',
    link: '/images/sup.png',
    color: '#3D2B1F', 
  },
  {
    title: 'Soto Nusantara',
    description: 'Sajian soto berkuah kuning segar dengan suwiran ayam atau daging, soun, tauge, dan taburan koya khas yang melengkapi cita rasa.',
    link: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#5C3A21', 
  },
  {
    title: 'Es Kuwut',
    description: 'Pelepas dahaga paripurna! Minuman segar perpaduan melon serut, daging kelapa muda, biji selasih, dan perasan jeruk nipis yang menyegarkan.',
    link: 'https://images.unsplash.com/photo-1589581858172-7dcaf2f8a63d?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#1C2E1B',
  },{
    title: 'Menu Bisa Menyesuaikan Request Anda',
    description: 'Kami menerima pesanan sesuai permintaan Anda. Hubungi kami untuk mendiskusikan menu yang sesuai dengan kebutuhan acara Anda, termasuk pilihan hidangan, porsi, dan preferensi rasa.',
    link: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    color: '#1C2E1B',
  }
];

function KateringCard({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[100svh] flex items-start justify-center pt-[calc(5vh+1.5rem)] md:pt-[calc(5vh+2rem)] sticky top-24 xl:top-28">
      <motion.div
        style={{
          backgroundColor: color,
          scale: cardScale,
          top: `calc(-5vh + ${i * 30}px)` 
        }}
        // Teks di dalam kartu tetap putih karena warna kartunya gelap
        className="flex flex-col relative h-[450px] max-h-[70svh] md:max-h-[75svh] w-full md:w-[90%] max-w-5xl rounded-3xl p-5 md:p-10 overflow-y-auto origin-top shadow-[0_-15px_40px_rgba(0,0,0,0.1)] border border-white/20 text-white"
      >
        <h2 className="text-lg sm:text-2xl text-center font-bold uppercase tracking-wider">{title}</h2>
        <div className="flex flex-col md:flex-row min-h-0 flex-1 mt-4 gap-4 md:gap-10 items-center">
          <div className="w-full md:w-[40%] flex flex-col justify-center md:justify-start shrink-0 md:h-full md:pt-4">
            <p className="text-sm font-light text-white/90 leading-relaxed mb-3 md:mb-6">{description}</p>
            <span className="flex items-center gap-2 group mt-auto md:mt-0 pb-4 md:pb-0">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="underline cursor-pointer text-xs font-semibold tracking-widest uppercase transition-colors group-hover:text-white/70"
              >
                Pesan Sekarang
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-full md:w-[60%] h-36 sm:h-48 md:h-full shrink-0 rounded-2xl overflow-hidden shadow-xl">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image src={url} alt={title} fill sizes="(max-width: 767px) 100vw, 600px" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function GalleryPage() {
  const galleryImages = menuKateringData.map((item) => item.link);
  const scrollContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ['start start', 'end end']
  });

  return (
    <ReactLenis root>
      {/* Mengubah background utama menjadi cerah */}
      <main ref={scrollContainer} className="relative min-h-screen bg-[var(--color-cream)] text-[var(--color-dark)] flex flex-col">
         <MagicCursor colors={["139 107 77", "166 98 31"]} />
        <Navbar />

        <div className="relative pt-28 md:pt-40 pb-6 md:pb-8 w-full flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
            {/* Watermark diubah warnanya agar terlihat halus di atas warna terang */}
            <h1 className="text-[15vw] font-bold tracking-tighter whitespace-nowrap text-[var(--color-dark)] opacity-5">
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
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter uppercase">
                Menerima Pesanan <span className="emphasis text-[var(--color-primary)] lowercase">Sesuai Request Anda</span>
              </h3>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[var(--color-dark)]/60 tracking-widest uppercase text-xs sm:text-sm mb-10 md:mb-16 px-4 sm:px-6 text-center"
            >
              Geser untuk menjelajahi kelezatan
            </motion.p>

            <div className="w-full max-w-screen-2xl overflow-hidden">
              <RollingGallery images={galleryImages} autoplay={true} pauseOnHover={true} />
            </div>

            <div className="mt-6 md:mt-10 max-w-2xl text-center px-4 sm:px-6">
              <p className="text-lg text-[var(--color-dark)]/80 font-light leading-relaxed">
                Kelezatan warisan ini tidak hanya bisa dinikmati di tempat kami, tetapi juga siap menyempurnakan setiap momen berharga Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Latar belakang grid disesuaikan dengan warna cokelat lembut */}
        <section className='pt-6 md:pt-8 pb-0 w-full flex items-center justify-center relative shrink-0 z-10'>
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#8B6B4D20_1px,transparent_1px),linear-gradient(to_bottom,#8B6B4D20_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
          <h2 className='mx-auto flex max-w-5xl flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3 gap-y-1 px-4 sm:px-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center tracking-tight leading-tight relative z-10'>
            Menu <span className="emphasis text-[var(--color-primary)]">Pesanan</span>
          </h2>
        </section>

        {/* Latar belakang kartu sekarang transparan (mengikuti warna cream) */}
        <section className="w-full relative z-20 px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          {menuKateringData.map((project, i) => {
            const targetScale = 1 - (menuKateringData.length - i) * 0.02; 
            return (
              <KateringCard
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * (1 / menuKateringData.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        <div className="w-full relative z-30">
          <Footer />
        </div>
      </main>
    </ReactLenis>
  );
}