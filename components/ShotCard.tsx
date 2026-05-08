"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export interface Shot {
  name: string;
  emoji: string;
  price: string;
  description: string;
  theShow: string;
  category: string;
  color: string;
}

export default function ShotCard({ shot, delay = 0 }: { shot: Shot; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(ySpring, [-50, 50], [8, -8]);
  const rotateY = useTransform(xSpring, [-50, 50], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      style={{ rotateX, rotateY, perspective: 800, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-[#141414] border border-[#2A2A2A] p-6 hover:border-[#FF2D55]/50 transition-all duration-300 cursor-default"
    >
      {/* Color accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: shot.color }}
      />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${shot.color}15 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Emoji icon */}
        <div className="text-4xl mb-4 float-anim">{shot.emoji}</div>

        {/* Category tag */}
        <span
          className="font-[family-name:var(--font-bebas)] text-xs tracking-widest px-2 py-0.5 mb-3 inline-block"
          style={{ color: shot.color, border: `1px solid ${shot.color}40` }}
        >
          {shot.category}
        </span>

        {/* Name + price */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#F5F0E8] leading-tight tracking-wide">
            {shot.name}
          </h3>
          <span className="font-[family-name:var(--font-bebas)] text-xl text-[#D4AF37] whitespace-nowrap">
            {shot.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#8A8178] text-sm leading-relaxed mb-4">
          {shot.description}
        </p>

        {/* The show */}
        <div className="border-t border-[#2A2A2A] pt-4">
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] text-xs tracking-widest mb-1">
            THE SHOW
          </p>
          <p className="text-[#8A8178] text-xs leading-relaxed italic">
            {shot.theShow}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
