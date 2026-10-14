"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";

const IMGS: string[] = [
  "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626804475297-41609ea004eb?q=80&w=3456&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=3264&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=3869&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=3774&auto=format&fit=crop",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

export const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsScreenSizeSm(window.innerWidth <= 640);
      const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 2000 : 3000;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = cylinderWidth / faceCount; 
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 25, 
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, controls, rotation]);

  const handleUpdate = (latest: any) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: any, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden">
      {/* Warna gelap telah diganti ke cream agar menyatu sempurna dengan latar halaman */}
      <div className="absolute top-0 left-0 h-full w-8 sm:w-[100px] z-10 pointer-events-none bg-gradient-to-l from-transparent to-[var(--color-cream)]" />
      <div className="absolute top-0 right-0 h-full w-8 sm:w-[100px] z-10 pointer-events-none bg-gradient-to-r from-transparent to-[var(--color-cream)]" />
      
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            z: -radius, 
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="group absolute flex items-center justify-center [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <Image
                src={url}
                width={260}
                height={260}
                sizes="(max-width: 639px) 160px, 260px"
                alt={`Gambar Galeri ${i + 1}`}
                // Bingkai diubah menjadi sedikit gelap (black/10) agar terlihat di latar cream
                className="pointer-events-none w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] aspect-square shrink-0 rounded-[24px] border-[1px] border-black/10 object-cover transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-[var(--color-primary)] group-hover:shadow-2xl group-hover:shadow-black/15"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};