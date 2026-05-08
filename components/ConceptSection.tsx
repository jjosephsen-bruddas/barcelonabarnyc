"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "CHOOSE YOUR SHOT",
    description:
      "Browse 100+ themed shots. From Harry Potter to Full Metal Jacket — there's a story for everyone.",
    icon: "📋",
  },
  {
    number: "02",
    title: "WATCH THE SHOW",
    description:
      "Our bartenders transform into performers. Costumes, props, music, sound effects — the full production.",
    icon: "🎭",
  },
  {
    number: "03",
    title: "TAKE THE SHOT",
    description:
      "The grand finale. Down it, embrace your inner character, and let the night unfold.",
    icon: "🥃",
  },
];

export default function ConceptSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0A0A0A] py-24 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-4">
            THE EXPERIENCE
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none">
            NOT YOUR AVERAGE BAR
          </h2>
          <p className="text-[#8A8178] text-base mt-4 max-w-lg mx-auto">
            We&apos;ve been turning Hell&apos;s Kitchen into a theater since 2005.
            Every shot is a performance. Every night is unpredictable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative bg-[#141414] border border-[#2A2A2A] p-8 hover:border-[#FF2D55]/40 transition-all duration-300 group"
            >
              {/* Step number */}
              <span className="font-[family-name:var(--font-bebas)] text-6xl text-[#1E1E1E] absolute top-4 right-6 select-none group-hover:text-[#FF2D55]/10 transition-colors duration-300">
                {step.number}
              </span>

              <div className="text-3xl mb-4">{step.icon}</div>

              <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#F5F0E8] mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-[#8A8178] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF2D55] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 border-l-2 border-[#FF2D55] pl-6 max-w-2xl mx-auto"
        >
          <p className="text-[#D4AF37] italic text-lg font-[Georgia,serif] leading-relaxed">
            &ldquo;Some of the most fun you can have per dollar in town.&rdquo;
          </p>
          <cite className="font-[family-name:var(--font-bebas)] text-[#8A8178] text-sm tracking-widest mt-2 block not-italic">
            — THE INFATUATION
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
