"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function FloquetSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 bg-[#0A0A0A] border-t border-[#2A2A2A] overflow-hidden"
    >
      {/* Background faint gorilla silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
        <GorillaIcon />
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 20% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Gorilla graphic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div
                className="w-64 h-64 border border-[#D4AF37]/30 flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)",
                }}
              >
                <GorillaIconSmall />
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-[family-name:var(--font-bebas)] text-[#D4AF37] tracking-[0.4em] text-sm mb-4">
              THE LEGEND
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,4.5rem)] text-[#F5F0E8] leading-none mb-6">
              MEET COPITO DE NIEVE
            </h2>
            <p className="text-[#8A8178] text-base leading-relaxed mb-4">
              Born in Western Africa, Copito de Nieve — Snowflake — was the
              world&apos;s only known albino gorilla. He called the Barcelona Zoo
              home for 37 years.
            </p>
            <p className="text-[#8A8178] text-base leading-relaxed mb-4">
              By day: a zoo attraction. By night: the most legendary party animal
              in Barcelona&apos;s Esquerra de l&apos;Eixample district, where he
              honed his shot-drinking skills at Espit Chupitos.
            </p>
            <p className="text-[#8A8178] text-base leading-relaxed mb-8">
              He was the original shot drinker. We drink in his honor. Every
              shot. Every night.
            </p>

            <Link
              href="/about"
              className="font-[family-name:var(--font-bebas)] text-sm tracking-widest text-[#D4AF37] border border-[#D4AF37]/40 px-8 py-3 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 inline-block"
            >
              READ THE FULL STORY
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GorillaIcon() {
  return (
    <svg
      width="600"
      height="700"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="100" cy="80" rx="50" ry="55" fill="#D4AF37" />
      <ellipse cx="100" cy="85" rx="35" ry="38" fill="#D4AF37" opacity="0.6" />
      <ellipse cx="100" cy="105" rx="60" ry="80" fill="#D4AF37" />
      <ellipse cx="55" cy="90" rx="20" ry="25" fill="#D4AF37" />
      <ellipse cx="145" cy="90" rx="20" ry="25" fill="#D4AF37" />
      <ellipse cx="78" cy="60" rx="12" ry="14" fill="#D4AF37" />
      <ellipse cx="122" cy="60" rx="12" ry="14" fill="#D4AF37" />
    </svg>
  );
}

function GorillaIconSmall() {
  return (
    <svg
      width="140"
      height="160"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="100" cy="160" rx="60" ry="70" fill="#D4AF37" opacity="0.7" />
      {/* Head */}
      <ellipse cx="100" cy="80" rx="50" ry="50" fill="#D4AF37" opacity="0.8" />
      {/* Ears */}
      <ellipse cx="52" cy="80" rx="18" ry="20" fill="#D4AF37" opacity="0.7" />
      <ellipse cx="148" cy="80" rx="18" ry="20" fill="#D4AF37" opacity="0.7" />
      {/* Face */}
      <ellipse cx="100" cy="90" rx="32" ry="28" fill="#D4AF37" opacity="0.4" />
      {/* Eyes */}
      <circle cx="84" cy="74" r="7" fill="#0A0A0A" opacity="0.9" />
      <circle cx="116" cy="74" r="7" fill="#0A0A0A" opacity="0.9" />
      <circle cx="82" cy="72" r="2" fill="white" opacity="0.6" />
      <circle cx="114" cy="72" r="2" fill="white" opacity="0.6" />
      {/* Nose */}
      <ellipse cx="100" cy="87" rx="10" ry="8" fill="#0A0A0A" opacity="0.5" />
      {/* Arms */}
      <ellipse cx="38" cy="150" rx="22" ry="55" fill="#D4AF37" opacity="0.7" transform="rotate(-15 38 150)" />
      <ellipse cx="162" cy="150" rx="22" ry="55" fill="#D4AF37" opacity="0.7" transform="rotate(15 162 150)" />
      {/* Shot glass in hand */}
      <rect x="28" y="190" width="20" height="28" rx="2" fill="#FF2D55" opacity="0.9" />
      <rect x="24" y="188" width="28" height="4" rx="2" fill="#FF2D55" opacity="0.9" />
    </svg>
  );
}
