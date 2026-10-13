"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Milestone {
  id: number;
  name: string;
  status: "complete" | "in-progress" | "pending";
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

interface AnimatedRoadmapProps extends React.HTMLAttributes<HTMLDivElement> {
  milestones: Milestone[];
  mapImageSrc: string; 
}

const MilestoneMarker = ({ milestone }: { milestone: Milestone }) => {
  const statusClasses = {
    complete: "bg-[var(--color-primary)] border-white",
    "in-progress": "bg-[var(--color-dark)] border-[var(--color-primary)] animate-pulse",
    pending: "bg-white border-gray-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: milestone.id * 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
      className="absolute flex items-center gap-1.5 sm:gap-4 z-20"
      style={milestone.position}
    >
      <div className="relative flex h-8 w-8 items-center justify-center">
        <div
          className={cn(
            "absolute h-4 w-4 rounded-full border-2 shadow-lg",
            statusClasses[milestone.status]
          )}
        />
        <div className="absolute h-full w-full rounded-full bg-[var(--color-primary)]/20" />
      </div>
      <div className="rounded-full border border-white/20 bg-black/60 backdrop-blur-md max-w-[120px] sm:max-w-none px-2 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-sm font-bold tracking-wider uppercase text-white shadow-xl">
        {milestone.name}
      </div>
    </motion.div>
  );
};

const AnimatedRoadmap = React.forwardRef<HTMLDivElement, AnimatedRoadmapProps>(
  ({ className, milestones, mapImageSrc, ...props }, ref) => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

    return (
      <div
        ref={targetRef}
        // UBAHAN UTAMA: Menambahkan 'aspect-square' untuk rasio 1:1
        // dan mengubah 'max-w-5xl' menjadi 'max-w-3xl' agar kotaknya proporsional di desktop
        className={cn("relative w-full max-w-3xl mx-auto my-4 md:my-10 aspect-square", className)}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          // Mengubah sudut lengkung menjadi lebih membulat (rounded-[2.5rem]) agar estetik
          className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <img
            src={mapImageSrc}
            alt="Anatomi Mie Kopyok"
            className="h-full w-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </motion.div>

        {/* UBAHAN KEDUA: Mengubah h-[450px] menjadi h-full agar mengikuti kotak induknya */}
        <div className="relative h-full w-full">
          <svg
            width="100%"
            height="100%"
            // ViewBox diubah menjadi 800x800 agar garis putus-putus tergambar proporsional di kotak
            viewBox="0 0 800 800"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 z-10"
          >
            <motion.path
              // Kurva garis (path) juga saya atur ulang agar meliuk cantik menyesuaikan bentuk kotak 1:1
              d="M 100 600 Q 300 200 450 450 T 700 250"
              fill="none"
              stroke="var(--color-primary)" 
              strokeWidth="5"
              strokeDasharray="14 7"
              strokeLinecap="round"
              style={{ pathLength }}
              className="drop-shadow-lg"
            />
          </svg>

          {milestones.map((milestone) => (
            <MilestoneMarker key={milestone.id} milestone={milestone} />
          ))}
        </div>
      </div>
    );
  }
);

AnimatedRoadmap.displayName = "AnimatedRoadmap";

export { AnimatedRoadmap };