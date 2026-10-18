"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Eye, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const elements = [
  {
    title: "Siluet Tugu Muda",
    meaning: "Identitas dan akar budaya",
    description: "Terinspirasi dari ikon Kota Semarang, siluet yang tegak melambangkan keteguhan menjaga identitas, nilai keluarga, dan kekhasan kuliner lokal. Bentuk sederhananya menjadi penghormatan bagi kota tempat Mie Kopyok Pak Zain tumbuh.",
  },
  {
    title: "Lengkungan Mie",
    meaning: "Gerakan kopyok dan keterbukaan",
    description: "Lengkungan yang mengitari monumen menggambarkan gerakan mengaduk atau mengocok mie dalam proses kopyok. Bentuknya yang terbuka menyiratkan kebebasan dan semangat berkembang, sekaligus membentuk kesan mangkuk sebagai simbol sajian mie khas Semarang.",
  },
  {
    title: "Aksen Alas Monumen",
    meaning: "Kesederhanaan dan keseimbangan",
    description: "Garis krem pada alas monumen memberi keseimbangan pada keseluruhan simbol. Detail kecil ini mencerminkan kualitas yang lahir dari kesederhanaan, ketelitian, dan perhatian pada setiap hal yang kami sajikan.",
  },
];

const colors = [
  { name: "Merah Marun", value: "#74243E", meaning: "Tradisi dan keteguhan", description: "Kehangatan keluarga, karakter yang kuat, dan komitmen menjaga identitas kuliner Semarang." },
  { name: "Karamel", value: "#BF8964", meaning: "Kehangatan dan keakraban", description: "Keramahan, kedekatan dengan pelanggan, dan kehangatan hidangan yang disajikan." },
  { name: "Krem", value: "#F3E7D7", meaning: "Kesederhanaan dan keanggunan", description: "Kesan tenang, bersih, dan seimbang dalam tampilan yang sederhana serta elegan." },
];

export function LogoPhilosophy() {
  const reduceMotion = useReducedMotion();
  // Reveal each block once; only opacity and transform change during animation.
  const reveal = {
    initial: reduceMotion ? false as const : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" as const },
  };
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef<string | null>(null);

  function restoreScroll() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  useEffect(() => () => restoreScroll(), []);

  function openPreview() {
    if (!dialogRef.current || dialogRef.current.open) return;
    previousOverflow.current = document.body.style.overflow;
    dialogRef.current.showModal();
    document.body.style.overflow = "hidden";
  }

  return (
    <section aria-labelledby="logo-philosophy-title" className="mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 md:pt-40 md:pb-24 lg:px-8">
      <div>
        <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">Makna di Balik Identitas</span>
          <h1 id="logo-philosophy-title" className="text-3xl font-semibold uppercase leading-tight tracking-tighter text-[var(--color-dark)] sm:text-5xl lg:text-6xl">
            Sebuah Logo,<br />Sejuta <span className="emphasis lowercase text-[var(--color-primary)]">Cerita</span>
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed text-[var(--color-dark)]/70 sm:text-lg">Identitas budaya Semarang, gerak kuliner tradisional, dan semangat usaha keluarga berpadu dalam satu simbol yang hangat dan terus tumbuh bersama zaman.</p>
        </motion.div>

        <motion.figure {...reveal} className="mt-10 overflow-hidden rounded-[32px] bg-[#FCF8F1] md:mt-14">
          <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Diagram elemen logo, geser horizontal untuk membaca label pada layar kecil">
            <Image src="/icon/diagram_logo_editable.svg" alt="Diagram logo Mie Kopyok Pak Zain: siluet Tugu Muda, lengkungan mie, gerakan kopyok, aksen alas, dan bentuk mangkuk." width={1200} height={690} sizes="(max-width: 767px) 720px, (max-width: 1280px) 100vw, 1216px" className="h-auto w-full min-w-[720px]" />
          </div>
          <figcaption className="px-6 pb-5 text-center text-xs leading-relaxed text-[var(--color-soft-brown)] sm:hidden">Geser diagram ke samping untuk melihat seluruh elemen logo.</figcaption>
        </motion.figure>

        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          <p className="mb-10 text-center text-lg font-medium leading-relaxed text-[var(--color-primary)] sm:text-xl">Berakar di Semarang, bergerak bersama cita rasa.</p>
          <ol className="divide-y divide-black/10">
            {elements.map((element, index) => (
              <motion.li {...reveal} key={element.title} className="flex gap-4 py-8 sm:gap-6">
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-semibold text-[var(--color-primary)]">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--color-dark)] sm:text-2xl">{element.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">{element.meaning}</p>
                  <p className="mt-4 font-light leading-relaxed text-[var(--color-dark)]/75">{element.description}</p>
                </div>
              </motion.li>
            ))}
            <motion.li {...reveal} className="flex gap-4 py-8 sm:gap-6">
              <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-semibold text-[var(--color-primary)]">04</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Filosofi Warna</h3>
                <div className="mt-5 space-y-6">
                  {colors.map((color) => (
                    <div key={color.name} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 rounded-full border border-black/10" style={{ backgroundColor: color.value }} />
                      <div>
                        <h4 className="text-sm font-semibold">{color.name} <span className="font-normal text-[var(--color-soft-brown)]">— {color.meaning}</span></h4>
                        <p className="mt-2 font-light leading-relaxed text-[var(--color-dark)]/75">{color.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.li>
            <motion.li {...reveal} className="flex gap-4 py-8 sm:gap-6">
              <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-semibold text-[var(--color-primary)]">05</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Tipografi</h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">Tradisi yang berjalan bersama zaman</p>
                <p className="mt-4 font-light leading-relaxed text-[var(--color-dark)]/75">Perpaduan huruf modern dan serif klasik menyeimbangkan perkembangan zaman dengan penghormatan pada tradisi. Nama Mie Kopyok menegaskan identitas kuliner, sementara Pak Zain menghadirkan kedekatan personal dan akar usaha keluarga.</p>
              </div>
            </motion.li>
          </ol>

          <motion.div {...reveal} className="mt-6 rounded-[32px] bg-[var(--color-primary)]/5 p-6 sm:p-10">
            <h3 className="text-xl font-semibold tracking-tight">Makna Keseluruhan</h3>
            <p className="mt-4 font-light leading-relaxed text-[var(--color-dark)]/75">Logo ini merangkum perjalanan Mie Kopyok Pak Zain: berakar pada budaya Semarang, merawat kehangatan tradisi keluarga, dan terus bergerak mengikuti perkembangan zaman.</p>
            <button ref={triggerRef} type="button" onClick={openPreview} aria-haspopup="dialog" aria-controls="philosophy-preview" className="visible-focus mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--color-primary-dark)]">
              <Eye size={18} aria-hidden="true" /> Preview Filosofi
            </button>
          </motion.div>
        </div>
      </div>

      <dialog id="philosophy-preview" ref={dialogRef} aria-labelledby="philosophy-preview-title" onClose={() => { restoreScroll(); triggerRef.current?.focus(); }} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-[24px] border-0 bg-[var(--color-cream)] p-0 text-[var(--color-dark)] shadow-2xl backdrop:bg-black/65">
        <div className="flex items-center justify-between gap-4 border-b border-black/10 px-5 py-4 sm:px-7">
          <h2 id="philosophy-preview-title" className="text-sm font-semibold sm:text-lg">Filosofi Logo Mie Kopyok Pak Zain</h2>
          <button type="button" autoFocus aria-label="Tutup preview filosofi" onClick={() => dialogRef.current?.close()} className="visible-focus flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/5 transition-colors hover:bg-black/10"><X size={20} aria-hidden="true" /></button>
        </div>
        <div data-lenis-prevent className="max-h-[calc(90dvh-80px)] overflow-auto overscroll-contain p-3 sm:p-6" tabIndex={0} role="region" aria-label="Poster filosofi lengkap, dapat digulir">
          <Image src="/icon/poster_filosofi_logo_editable.svg" alt="Poster lengkap filosofi logo Mie Kopyok Pak Zain, menjelaskan Tugu Muda, lengkungan mie, aksen alas, warna, tipografi, dan makna keseluruhan." width={1200} height={2165} sizes="(max-width: 768px) 768px, 1024px" className="h-auto w-full min-w-[768px]" />
        </div>
      </dialog>
    </section>
  );
}
