"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { provinces, type Province } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function IndonesiaMap() {
  const [active, setActive] = useState<Province | null>(null);

  return (
    <section className="bg-dark py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="From Sabang to Merauke"
          title="One Archipelago, Thousands of Makers"
          emphasisWord="Thousands"
          description="Hover a marker to see how many UMKM call that province home, and what they're known for."
          light
        />

        <div className="relative mt-16 w-full overflow-x-auto">
          <svg
            viewBox="0 0 860 460"
            className="h-auto w-full min-w-[720px]"
            role="img"
            aria-label="Stylized map of Indonesia's islands"
          >
            {/* Stylized island silhouettes — abstract, not geographically precise */}
            <g fill="#2A2A2A">
              <ellipse cx="90" cy="140" rx="90" ry="34" transform="rotate(-18 90 140)" />
              <ellipse cx="280" cy="260" rx="130" ry="30" transform="rotate(-8 280 260)" />
              <ellipse cx="410" cy="340" rx="220" ry="26" transform="rotate(-2 410 340)" />
              <ellipse cx="470" cy="230" rx="110" ry="60" />
              <ellipse cx="600" cy="255" rx="70" ry="90" transform="rotate(20 600 255)" />
              <ellipse cx="720" cy="240" rx="90" ry="40" />
              <ellipse cx="800" cy="255" rx="90" ry="46" />
            </g>

            {provinces.map((p) => (
              <g
                key={p.id}
                onMouseEnter={() => setActive(p)}
                onMouseLeave={() => setActive((cur) => (cur?.id === p.id ? null : cur))}
                onFocus={() => setActive(p)}
                onBlur={() => setActive((cur) => (cur?.id === p.id ? null : cur))}
                tabIndex={0}
                className="cursor-pointer outline-none"
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={active?.id === p.id ? 9 : 6}
                  className="fill-primary transition-all duration-300"
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={active?.id === p.id ? 18 : 12}
                  className="fill-primary/20 transition-all duration-300"
                />
              </g>
            ))}
          </svg>

          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                style={{
                  left: `${(active.x / 860) * 100}%`,
                  top: `${(active.y / 460) * 100}%`,
                }}
                className="pointer-events-none absolute z-10 w-56 -translate-x-1/2 -translate-y-[130%] rounded-2xl border border-white/10 bg-[#242424] p-4 shadow-nk-soft"
              >
                <p className="text-sm font-medium text-white">{active.name}</p>
                <p className="mt-1 text-xs text-white/60">
                  {active.umkm} UMKM registered
                </p>
                <p className="mt-1 text-xs text-primary">
                  Popular: {active.popular}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Map is a stylized representation. Hover or focus a marker to explore each province.
        </p>
      </div>
    </section>
  );
}
