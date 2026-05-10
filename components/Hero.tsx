"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,45,85,0.12) 0%, rgba(212,175,55,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Neon shot glass — large decorative */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <NeonShotGlass />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-6"
        >
          HELL&apos;S KITCHEN · NEW YORK CITY · EST. 2005
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,14vw,12rem)] leading-none tracking-wide text-[#F5F0E8] mb-4"
        >
          THERE IS NO{" "}
          <span
            className="text-[#FF2D55] neon-text"
            style={{
              textShadow:
                "0 0 20px #FF2D55, 0 0 40px #FF2D55, 0 0 80px rgba(255,45,85,0.4)",
            }}
          >
            I
          </span>{" "}
          IN SHOT
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[#8A8178] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          100+ themed shots. Props, costumes, and soundtracks included.
          <br />
          Not your average bar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/shots"
            className="font-[family-name:var(--font-bebas)] text-lg tracking-widest bg-[#FF2D55] text-[#F5F0E8] px-10 py-4 hover:bg-[#FF2D55]/80 transition-all duration-200 glow-box"
          >
            SEE THE SHOTS
          </Link>
          <Link
            href="/contact"
            className="font-[family-name:var(--font-bebas)] text-lg tracking-widest border border-[#2A2A2A] text-[#8A8178] px-10 py-4 hover:border-[#FF2D55] hover:text-[#F5F0E8] transition-all duration-200"
          >
            FIND US
          </Link>
        </motion.div>

      </div>

      {/* Scroll nudge — outside content div so it anchors to the section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#FF2D55] to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}

function NeonShotGlass() {
  return (
    <svg
      width="200"
      height="300"
      viewBox="0 0 100 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="neon-shot-glass opacity-60"
    >
      {/* Shot glass outline */}
      <path
        d="M20 10 L80 10 L65 120 H35 Z"
        stroke="#FF2D55"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="rgba(255,45,85,0.05)"
      />
      {/* Liquid fill */}
      <path
        d="M37 80 L63 80 L65 120 H35 Z"
        fill="rgba(255,45,85,0.15)"
        stroke="#FF2D55"
        strokeWidth="1"
      />
      {/* Base */}
      <rect x="30" y="120" width="40" height="6" rx="3" fill="#FF2D55" />
      {/* Shine */}
      <line x1="28" y1="20" x2="35" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
    </svg>
  );
}
