"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Map, FlightMultiRoute, FlightAirport } from "@/components/ui/flightcn-flight-multi-route";
import Image from "next/image";

// Data kota dunia dengan delay untuk sinkronisasi popup
const destinasiDunia = [
  { id: "CDG", city: "Paris", lng: 2.3522, lat: 48.8566, makanan: "Croissant", desc: "Renyah dan buttery khas Eropa.", delay: 0, labelPosition: "top" as const },
  { id: "DXB", city: "Dubai", lng: 55.2708, lat: 25.2048, makanan: "Shawarma", desc: "Kaya rempah khas Timur Tengah.", delay: 3500, labelPosition: "bottom" as const },
  { id: "DEL", city: "New Delhi", lng: 77.2090, lat: 28.6139, makanan: "Tikka Masala", desc: "Kari kental pedas berempah dari India.", delay: 5000, labelPosition: "top" as const },
  { id: "TYO", city: "Tokyo", lng: 139.6917, lat: 35.6895, makanan: "Sushi & Ramen", desc: "Kesempurnaan rasa umami dari Jepang.", delay: 9000, labelPosition: "top" as const },
  { id: "SYD", city: "Sydney", lng: 151.2093, lat: -33.8688, makanan: "Meat Pie", desc: "Sajian hangat dari negeri kangguru.", delay: 14300, labelPosition: "bottom" as const },
  { 
    id: "SRG", 
    city: "Semarang", 
    lng: 110.4225, 
    lat: -6.9697, 
    makanan: "🌟 MIE KOPYOK 🌟", 
    desc: "Pesawat tiba! Saatnya menikmati kaldu pekat dan kerupuk gendar khas Pak Zain.", 
    delay: 18000,
    isSpesial: true,
    image: "/images/ko.png", 
    labelPosition: "top" as const
  }
];

const ruteTurDunia: [number, number][] = destinasiDunia.map(dest => [dest.lng, dest.lat]);
const DURASI_TERBANG = 18000; // Total 18 detik perjalanan
const JEDA_SEMARANG = 4000;   // 4 detik diam di Semarang sebelum muter ulang
const MAP_OVERVIEW = { center: [95.0, 15.0] as [number, number], zoom: 1.6 };

export function IndonesiaMap() {
  const [followPlane, setFollowPlane] = useState(true);
  const [active, setActive] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0); // Pemicu restart animasi tanpa error TypeScript
  
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const shouldLoadMap = useInView(mapContainerRef, { once: true, margin: "400px" });
  const isInView = useInView(mapContainerRef, { once: true, margin: "-100px" });

  const restartTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (restartTimer.current) clearTimeout(restartTimer.current);
  }, []);


  return (
    <section className="bg-[var(--color-dark)] py-16 md:py-24 lg:py-28 relative z-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Rasa Yang Mendunia"
          title="Tur Kuliner Menuju Semarang"
          emphasisWord="Semarang"
          description="Ikuti perjalanan ini. Kenali cita rasa dari berbagai benua, hingga akhirnya Anda menyadari bahwa kehangatan semangkuk Mie Kopyok adalah yang paling dirindukan."
          light
        />

        <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-end gap-3 text-sm text-white">
          <span id="flight-camera-label">Ikuti pesawat</span>
          <button
            type="button"
            role="switch"
            aria-checked={followPlane}
            aria-labelledby="flight-camera-label"
            onClick={() => setFollowPlane((previous) => !previous)}
            className={`visible-focus inline-flex min-h-11 items-center gap-3 rounded-full border px-4 py-2 transition-colors ${followPlane ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-white/30 bg-white/10 text-white"}`}
          >
            <span aria-hidden="true" className="relative h-5 w-9 rounded-full bg-black/25">
              <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${followPlane ? "translate-x-[18px]" : "translate-x-0.5"} left-0`} />
            </span>
            {followPlane ? "Aktif" : "Nonaktif"}
          </button>
        </div>

        <div 
          ref={mapContainerRef} 
          className="relative mt-10 md:mt-14 w-full max-w-6xl mx-auto h-[400px] sm:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
        >
          {shouldLoadMap && <Map
            theme="dark"
            center={MAP_OVERVIEW.center}
            zoom={MAP_OVERVIEW.zoom}
            interactive={true}
          >
            {/* Menggunakan key={animationKey} agar rute ter-reset total saat waktunya looping */}
            <FlightMultiRoute
              key={animationKey}
              followPlane={followPlane}
              overview={MAP_OVERVIEW}
              onDestinationChange={(index) => setActive(index === null ? null : destinasiDunia[index].id)}
              onComplete={() => {
                restartTimer.current = setTimeout(() => {
                  setActive(null);
                  setAnimationKey((previous) => previous + 1);
                }, JEDA_SEMARANG);
              }}
              waypoints={ruteTurDunia}
              color="#e11d48"
              width={2}
              opacity={0.8}
              lineStyle="dash"
              animate={isInView ? { 
                duration: DURASI_TERBANG, 
                loop: false, 
              } : false}
            />

            {destinasiDunia.map((dest) => {
              const isActive = active === dest.id;

              return (
                <FlightAirport
                  key={dest.id}
                  longitude={dest.lng}
                  latitude={dest.lat}
                  markerContent={
                    <div 
                      className="relative flex items-center justify-center cursor-pointer group z-50"
                      onMouseEnter={() => setActive(dest.id)}
                    >
                      <div className="absolute w-16 h-16 rounded-full z-10" />

                      <div 
                        className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                          dest.isSpesial ? "w-8 h-8 bg-[var(--color-primary)]/40 z-20" : "w-5 h-5 bg-white/30"
                        } ${isActive ? "scale-125" : "scale-100"}`}
                      >
                        <div 
                          className={`rounded-full shadow-lg ${
                            dest.isSpesial ? "bg-[var(--color-primary)] w-5 h-5 border-2 border-white" : "bg-white w-2.5 h-2.5 border border-black/20"
                          }`}
                        />
                        {dest.isSpesial && (
                          <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-70" />
                        )}
                      </div>

                      {/* Label Teks Kota */}
                      <div 
                        className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none whitespace-nowrap transition-all duration-300 ${
                          dest.labelPosition === "top" ? "bottom-6" : "top-6"
                        } ${isActive ? "opacity-0" : "opacity-100"}`}
                      >
                        <span className={`text-[10px] font-bold tracking-widest uppercase bg-black/60 px-3 py-1 rounded-full shadow-sm text-white backdrop-blur-sm ${dest.isSpesial ? "text-[var(--color-primary)]" : ""}`}>
                          {dest.city}
                        </span>
                      </div>

                      {/* Tooltip / Popup Spesial */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.5 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                            className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-[280px] rounded-2xl border p-4 shadow-2xl backdrop-blur-xl pointer-events-none z-50 ${
                              dest.isSpesial 
                                ? "bg-[var(--color-dark)]/95 border-[var(--color-primary)] text-white" 
                                : "bg-black/95 border-white/20 text-white"
                            }`}
                          >
                            <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b ${
                              dest.isSpesial ? "bg-[var(--color-dark)] border-[var(--color-primary)]" : "bg-black/95 border-white/20"
                            }`} />
                            
                            <div className="relative z-10 text-center">
                              <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${dest.isSpesial ? "text-[var(--color-primary)]" : "text-white/60"}`}>
                                {dest.city}
                              </p>
                              <p className={`font-bold leading-tight ${dest.isSpesial ? "text-2xl text-white drop-shadow-md" : "text-lg text-white"}`}>
                                {dest.makanan}
                              </p>
                              <p className={`mt-2 text-xs leading-relaxed ${dest.isSpesial ? "text-white/90 font-medium" : "text-white/70"}`}>
                                {dest.desc}
                              </p>

                              {dest.image && (
                                <motion.div 
                                  initial={{ opacity: 0, marginTop: 0, height: 0 }}
                                  animate={{ opacity: 1, marginTop: 12, height: "120px" }}
                                  transition={{ delay: 0.2 }}
                                  className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-inner"
                                >
                                  <Image 
                                    src={dest.image} 
                                    alt="Mie Kopyok Pak Zain" 
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                    sizes="250px"
                                  />
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  }
                />
              );
            })}
          </Map>}
        </div>
      </div>
    </section>
  );
}
