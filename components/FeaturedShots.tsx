"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ShotCard, { type Shot } from "./ShotCard";

export const FEATURED_SHOTS: Shot[] = [
  {
    name: "HARRY POTTER",
    emoji: "⚡",
    price: "$10",
    description:
      "The most popular shot in the house, inspired by The Boy Who Lived. A vodka-based butterscotch dream.",
    theShow:
      "The Sorting Hat assigns your Hogwarts house. You get a house scarf and a glowing magic wand while the theme song fills the bar.",
    category: "FANTASY",
    color: "#A084CF",
  },
  {
    name: "FULL METAL JACKET",
    emoji: "🪖",
    price: "$10",
    description:
      "A brutal shot for the brave. Named after Kubrick's masterpiece — this one puts hair on your chest.",
    theShow:
      "You strap on a 10-pound army helmet. A drill sergeant screams in your face. Only then may you drink.",
    category: "WAR FILM",
    color: "#6B8E6B",
  },
  {
    name: "POKEMON",
    emoji: "💧",
    price: "$10",
    description:
      "Gotta catch 'em all — starting with this pale pink beauty. Crisp, fun, and dangerously drinkable.",
    theShow:
      "The bartender clutches a Squirtle doll and blasts you with a bubble gun. The 8-bit soundtrack plays. You're ready.",
    category: "ANIMATION",
    color: "#60A5FA",
  },
  {
    name: "THE JEDIS",
    emoji: "⚔️",
    price: "$10",
    description:
      "The Force is strong in this one — two shots in two glasses. One for the light side, one for the dark.",
    theShow:
      "Luke Skywalker vs. Darth Vader. Two shots, two stories, one bar. May the best Jedi win.",
    category: "SCI-FI",
    color: "#FFD700",
  },
  {
    name: "TIDE POD",
    emoji: "🌊",
    price: "$10",
    description:
      "The shot that broke the internet. Blue Curacao + Bailey's + vodka + orange food coloring. Don't actually eat it.",
    theShow:
      "Served in the iconic blue-orange swirl. The bartender gives you the full safety warning before you drink. Went viral for a reason.",
    category: "VIRAL",
    color: "#FF8C00",
  },
  {
    name: "WHITE GORILLA",
    emoji: "🦍",
    price: "$10",
    description:
      "Our signature drink — a tribute to Copito de Nieve, the world's only albino gorilla and the original legend.",
    theShow:
      "In honor of Snowflake, the albino gorilla who partied at the Barcelona Zoo every night before joining us in spirit.",
    category: "SIGNATURE",
    color: "#FF2D55",
  },
];

export default function FeaturedShots() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0D0D0D] py-24 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-3">
              CROWD FAVORITES
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none">
              THE HALL OF FAME
            </h2>
          </div>
          <Link
            href="/shots"
            className="font-[family-name:var(--font-bebas)] text-sm tracking-widest text-[#8A8178] hover:text-[#FF2D55] transition-colors border-b border-[#2A2A2A] hover:border-[#FF2D55] pb-1 whitespace-nowrap"
          >
            VIEW ALL 100+ SHOTS →
          </Link>
        </motion.div>

        {/* Shot grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SHOTS.map((shot, i) => (
            <ShotCard key={shot.name} shot={shot} delay={i * 0.1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <Link
            href="/shots"
            className="font-[family-name:var(--font-bebas)] text-lg tracking-widest border border-[#FF2D55] text-[#FF2D55] px-12 py-4 hover:bg-[#FF2D55] hover:text-[#F5F0E8] transition-all duration-300 inline-block"
          >
            EXPLORE ALL SHOTS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
