"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const deals = [
  {
    name: "DRAFT BEER",
    price: "$5",
    detail: "Miller Lite · Coors Light · Tecate",
  },
  {
    name: "WELL DRINKS",
    price: "$8",
    detail: "All your classics",
  },
  {
    name: "BEER + SHOT",
    price: "$12",
    detail: "All day, every day special",
  },
];

export default function HappyHourBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden bg-[#FF2D55]"
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.5) 10px, rgba(0,0,0,0.5) 11px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] text-[#F5F0E8] leading-none tracking-wide">
            HAPPY HOUR
          </h2>
          <p className="font-[family-name:var(--font-bebas)] text-xl text-[#F5F0E8]/70 tracking-[0.3em] mt-2">
            WEEKDAYS · 4PM – 7PM
          </p>
        </motion.div>

        {/* Deals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F5F0E8]/20">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-[#FF2D55] p-8 text-center"
            >
              <div className="font-[family-name:var(--font-bebas)] text-[5rem] leading-none text-[#F5F0E8]">
                {deal.price}
              </div>
              <div className="font-[family-name:var(--font-bebas)] text-xl text-[#F5F0E8] tracking-widest mt-1 mb-2">
                {deal.name}
              </div>
              <div className="text-[#F5F0E8]/60 text-sm">{deal.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
