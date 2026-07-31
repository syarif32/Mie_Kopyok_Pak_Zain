"use client";

import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, forwardRef } from 'react';
import Image from 'next/image';

interface PackageData {
  title: string;
  description: string;
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[15%] h-[500px] w-[90%] md:w-[70%] rounded-[var(--radius-nk)] p-8 md:p-12 origin-top text-white shadow-nk-card border border-white/10"
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold uppercase tracking-widest mb-2">{title}</h2>
        <div className="flex flex-col md:flex-row h-full mt-6 gap-8">
          
          <div className="w-full md:w-[40%] flex flex-col justify-center">
            <p className="text-base font-light leading-relaxed text-white/90 mb-8">{description}</p>
            <span className="flex items-center gap-3 w-fit group cursor-pointer">
              <a
                href="https://wa.me/6281234567890" 
                target="_blank"
                rel="noreferrer"
                className="font-medium tracking-widest uppercase text-sm border-b border-white pb-1 group-hover:text-[var(--color-cream)] group-hover:border-[var(--color-cream)] transition-colors"
              >
                Pesan Sekarang
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-2 transition-transform duration-300"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-full md:w-[60%] h-48 md:h-full rounded-3xl overflow-hidden shadow-inner">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image 
                src={url} 
                alt={title} 
                fill 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  packages: PackageData[];
}

export const CateringPackages = forwardRef<HTMLElement, ComponentRootProps>(({ packages }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <div className="bg-[var(--color-cream)] w-full" ref={container}>
        <section className="h-[60vh] w-full grid place-content-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B6B4D1a_1px,transparent_1px),linear-gradient(to_bottom,#8B6B4D1a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase mb-6">
              Layanan Spesial
            </span>
            <h1 className="text-5xl md:text-7xl px-8 font-bold text-center tracking-tighter uppercase text-[var(--color-dark)] leading-[1.1]">
              Paket <span className="emphasis text-[var(--color-primary)] lowercase">Katering</span> <br /> Acara Anda
            </h1>
            <p className="mt-6 text-gray-500 max-w-lg text-center font-light">
              Gulir ke bawah untuk melihat pilihan paket pesanan dalam jumlah besar. Sempurna untuk pernikahan, syukuran, dan acara keluarga.
            </p>
          </div>
        </section>

        <section className="w-full pb-20">
          {packages.map((pkg, i) => {
            const targetScale = 1 - (packages.length - i) * 0.05;
            return (
              <Card
                key={`pkg_${i}`}
                i={i}
                url={pkg.link}
                title={pkg.title}
                color={pkg.color}
                description={pkg.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </div>
    </ReactLenis>
  );
});

CateringPackages.displayName = 'CateringPackages';