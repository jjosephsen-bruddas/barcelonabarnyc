"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const quotes = [
  {
    text: "Some of the most fun you can have per dollar in town.",
    source: "The Infatuation",
    year: "2023",
  },
  {
    text: "Spontaneous bar-top boogying happens on a nightly basis.",
    source: "GAYOT",
    year: "2022",
  },
  {
    text: "A Hell's Kitchen institution — 100+ shots and a bartender who becomes your favorite character.",
    source: "amNewYork",
    year: "2022",
  },
  {
    text: "The Harry Potter shot is a trip you have to take at least once.",
    source: "BroBible",
    year: "2021",
  },
];

export default function PressSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-[#0D0D0D] border-t border-[#2A2A2A]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-3">
            AS SEEN IN
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,4rem)] text-[#F5F0E8] leading-none">
            THEY SAID IT, NOT US
          </h2>
        </motion.div>

        {/* Quote grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#141414] border border-[#2A2A2A] p-8 hover:border-[#D4AF37]/30 transition-all duration-300 group"
            >
              {/* Quote mark */}
              <div
                className="font-[family-name:var(--font-bebas)] text-7xl leading-none text-[#D4AF37]/20 mb-4 group-hover:text-[#D4AF37]/30 transition-colors duration-300"
              >
                &ldquo;
              </div>

              <p className="text-[#F5F0E8] text-base leading-relaxed font-[Georgia,serif] italic mb-6">
                {q.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-[#2A2A2A]" />
                <div className="text-right">
                  <p className="font-[family-name:var(--font-bebas)] text-[#D4AF37] text-sm tracking-widest">
                    {q.source}
                  </p>
                  <p className="text-[#8A8178] text-xs">{q.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
