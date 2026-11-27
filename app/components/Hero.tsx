"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  { image: "/wits-bus.jpg", title: "Campus Dawah", location: "Wits University, Johannesburg" },
  { image: "/masjid-saffiyatun.jpg", title: "Friday Khutbah", location: "Cape Town, South Africa" },
  { image: "/duma-fm.jpg", title: "Radio Interview", location: "Duma FM, Botswana" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentSlide((n) => (n + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="w-full px-2 pt-2 sm:px-4 sm:pt-4">
      <div className="relative isolate h-[calc(100svh-1rem)] min-h-[600px] max-h-[900px] overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] bg-brand-navy">
        
        {slides.map((slide, i) => (
          <div key={slide.image} className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === currentSlide ? "opacity-100" : "opacity-0"}`} aria-hidden={i !== currentSlide}>
            <Image src={slide.image} alt={slide.title} fill priority={i === 0} sizes="100vw" className="object-cover object-center" />
          </div>
        ))}
        
        {/* Dark overlay focused on the bottom for the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a33]/90 via-[#041a33]/30 to-black/20" />

        {/* Main Content - Centered at the bottom */}
        <div className="absolute bottom-24 left-0 right-0 z-10 flex flex-col items-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-[800px]">
            <h1 className="text-[clamp(1.8rem,3vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              Sharing the message.<br />Building understanding.
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#live-projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-slate-100">
                Explore our work
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-navy text-white text-xs">→</span>
              </a>
              <a href="#support" className="inline-flex items-center rounded-full border border-white/50 bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Support our mission
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between sm:bottom-8 sm:left-10 sm:right-10">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-xs font-bold text-white/90">{slides[currentSlide].title}</p>
              <p className="mt-0.5 text-[10px] text-white/60">{slides[currentSlide].location}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button key={slide.image} onClick={() => setCurrentSlide(i)} className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-white" : "w-3 bg-white/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}