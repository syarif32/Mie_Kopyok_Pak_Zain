"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  emphasisWord,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  emphasisWord?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-medium tracking-[0.2em]",
            light ? "text-white/60" : "text-primary"
          )}
        >
          {eyebrow.toUpperCase()}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-medium leading-[1.1] lg:text-5xl",
          light ? "text-white" : "text-dark"
        )}
      >
        {emphasisWord ? (
          <>
            {title.split(emphasisWord)[0]}
            <span className="emphasis text-primary">{emphasisWord}</span>
            {title.split(emphasisWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-gray"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
