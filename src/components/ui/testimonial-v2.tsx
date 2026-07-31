"use client";

import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data Ulasan Kuliner / UMKM ---
const testimonials: Testimonial[] = [
  {
    text: "Kuah kaldu bawangnya benar-benar juara! Mengembalikan kenangan masa kecil di Semarang setiap kali disuap.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Siti Rahma",
    role: "Pecinta Kuliner Tradisional",
  },
  {
    text: "Tekstur mie yang kenyal berpadu sempurna dengan kerupuk gendar yang gurih. Sangat otentik!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Budi Santoso",
    role: "Food Blogger Semarang",
  },
  {
    text: "Pelayanannya cepat dan rasanya konsisten enak sejak dulu. Mie Kopyok Pak Zain memang tidak ada duanya.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Dewi Lestari",
    role: "Pelanggan Setia",
  },
  {
    text: "Porsi pas, tauge segar, dan irisan lontongnya empuk banget. Wajib coba kalau berkunjung ke Semarang!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ahmad Fauzi",
    role: "Wisatawan Kuliner",
  },
  {
    text: "Rasa gurih kaldunya sangat khas, menggunakan bawang putih melimpah yang bikin nagih.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rina Wati",
    role: "Pegiat Kuliner Nusantara",
  },
  {
    text: "Suasana tempatnya nyaman, bersih, dan rasanya benar-benar membawa nuansa rumahan yang hangat.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Intan Permata",
    role: "Mahasiswa & Foodie",
  },
  {
    text: "Kombinasi unik antara lontong, mie, tahu, dan kerupuk gendar. Sungguh mahakarya kuliner lokal!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Yoga Pratama",
    role: "Chef Lokal",
  },
  {
    text: "Setiap pulkam ke Semarang, menyantap Mie Kopyok ini adalah agenda wajib yang tidak boleh terlewat.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Maya Anggraini",
    role: "Perantau Asal Semarang",
  },
  {
    text: "Mantap pol! Kuahnya segar dan hangat di badan. Sangat cocok dinikmati saat siang maupun sore hari.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Eko Prasetyo",
    role: "Warga Lokal",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components untuk Kolom Bergerak ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(29, 29, 29, 0.12)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-[24px] border border-[var(--color-primary)]/15 shadow-nk-card max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-[var(--color-dark)]/80 leading-relaxed font-normal m-0 text-sm">
                      &ldquo;{text}&rdquo;
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-[var(--color-primary)]/20 transition-all duration-300"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-[var(--color-dark)] text-sm">
                          {name}
                        </cite>
                        <span className="text-xs leading-4 tracking-tight text-[var(--color-gray)] mt-0.5">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export function TestimonialsV2() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="py-28 relative overflow-hidden bg-[var(--color-cream)]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl px-6 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Testimonials
          </span>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-medium tracking-tight text-[var(--color-dark)]">
            What Our <span className="emphasis text-[var(--color-primary)]">Customers</span> Say
          </h2>
          <p className="mt-4 text-[var(--color-dark)]/70 text-base md:text-lg leading-relaxed">
            Discover how thousands of food lovers and local foodies enjoy the authentic taste of our heritage cuisine.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[650px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
}