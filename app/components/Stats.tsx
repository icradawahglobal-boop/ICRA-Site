"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const copy = "Across Africa, we share the message of Islam through learning, outreach and meaningful community engagement. We train du'at, distribute books, visit mosques and engage with universities. Whoever you are, you are welcome to learn.";

function FadingWord({ word, index, total, progress }: { word: string; index: number; total: number; progress: any }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.2, 1]);
  const clean = word.toLowerCase().replace(/[^a-z']/g, "");
  const highlighted = ["islam", "du'at", "books", "mosques", "universities"].includes(clean);
  
  return (
    <motion.span 
      style={{ opacity }} 
      className={highlighted ? "bg-[#f5f6f8] px-2 py-0.5 rounded-md border border-slate-200/50 shadow-sm" : undefined}
    >
      {word}
    </motion.span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 80%", "end 60%"] });
  const words = copy.split(" ");
  
  return (
    <section ref={sectionRef} className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
        
        <div className="max-w-[700px] lg:pr-10">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">Our purpose</p>
          <p className="flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] text-[clamp(1.8rem,3.2vw,3rem)] font-medium leading-[1.25] tracking-[-0.03em] text-brand-navy">
            {words.map((word, i) => (
              <FadingWord key={`${i}-${word}`} word={word} index={i} total={words.length} progress={scrollYProgress} />
            ))}
          </p>
        </div>

        {/* Image overlaps slightly on large screens for a modern look */}
        <div className="relative mx-auto h-[380px] w-full max-w-[600px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_25px_60px_rgba(8,48,90,0.15)] sm:h-[450px] lg:-ml-12 lg:h-[550px]">
          <Image src="/outdoor-meeting.jpg" alt="ICRA community engagement" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-24">
            <div className="max-w-[350px] rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md">
              <p className="text-[15px] font-bold text-brand-navy">Community engagement</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">Building relationships and creating opportunities for meaningful dialogue.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 border-t border-slate-200 px-6 pt-12 text-center sm:px-8 md:grid-cols-4 lg:mt-32 lg:px-10">
        <div><p className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">20+</p><p className="mt-3 text-sm font-medium text-slate-500">Countries reached</p></div>
        <div><p className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">50,000+</p><p className="mt-3 text-sm font-medium text-slate-500">Books distributed</p></div>
        <div><p className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">1,000+</p><p className="mt-3 text-sm font-medium text-slate-500">Du'at trained</p></div>
        <div><p className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">600+</p><p className="mt-3 text-sm font-medium text-slate-500">Mosques visited</p></div>
      </div>
    </section>
  );
}