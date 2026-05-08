"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShotCard, { type Shot } from "./ShotCard";

const ALL_SHOTS: Shot[] = [
  // Fantasy / Film
  { name: "HARRY POTTER", emoji: "⚡", price: "$10", description: "The most popular shot in the house. Vodka-based butterscotch dream.", theShow: "Sorting Hat picks your Hogwarts house. House scarf, glowing wand, theme song playing.", category: "FANTASY", color: "#A084CF" },
  { name: "THE JEDIS", emoji: "⚔️", price: "$10", description: "Two shots. Luke Skywalker vs. Darth Vader. One for the light side, one for the dark.", theShow: "Two shots, two stories, one bar. May the best Jedi win.", category: "SCI-FI", color: "#FFD700" },
  { name: "RETURN OF THE KING", emoji: "👑", price: "$10", description: "Inspired by Tolkien's masterpiece. Epic as the final chapter itself.", theShow: "The One Shot to rule them all. Served with the proper gravitas.", category: "FANTASY", color: "#A084CF" },
  { name: "INDIANA JONES", emoji: "🪖", price: "$10", description: "Adventure in a glass. Bold, daring, and worth the risk.", theShow: "The bartender cracks the whip. A fedora may be involved.", category: "ADVENTURE", color: "#D4AF37" },
  // War / Action
  { name: "FULL METAL JACKET", emoji: "🎖️", price: "$10", description: "A brutal shot for the brave. Kubrick would approve.", theShow: "10-pound army helmet. Drill sergeant in your face. Only then may you drink.", category: "WAR FILM", color: "#6B8E6B" },
  { name: "TOP GUN", emoji: "✈️", price: "$10", description: "Feel the need. The need for speed — and this shot.", theShow: "Highway to the Danger Zone plays. Aviators optional but encouraged.", category: "ACTION", color: "#4AA8D4" },
  // Animation / Pop
  { name: "POKEMON", emoji: "💧", price: "$10", description: "Pale pink, crisp, and dangerously drinkable. Gotta catch 'em all.", theShow: "Squirtle doll. Bubble gun. 8-bit music. You're ready.", category: "ANIMATION", color: "#60A5FA" },
  { name: "SPONGEBOB", emoji: "🧽", price: "$10", description: "Are you ready, kids? This one's for the Krabby Patty crowd.", theShow: "Are ya ready kids? Bartender leads the full theme song singalong.", category: "ANIMATION", color: "#FBBF24" },
  { name: "HAMILTON", emoji: "🎭", price: "$10", description: "The room where it happens — and where this shot gets poured.", theShow: "History has its eyes on you. The bartender performs. You drink.", category: "MUSICAL", color: "#A78BFA" },
  // Viral / Originals
  { name: "TIDE POD", emoji: "🌊", price: "$10", description: "The shot that broke the internet. Blue Curacao + Bailey's + vodka + orange food coloring.", theShow: "Served in the iconic blue-orange swirl. Full safety warning included.", category: "VIRAL", color: "#FF8C00" },
  { name: "WHITE GORILLA", emoji: "🦍", price: "$10", description: "Our signature. A tribute to Copito de Nieve — the world's only albino gorilla.", theShow: "In honor of Snowflake, the original shot drinker. The whole bar raises a glass.", category: "SIGNATURE", color: "#FF2D55" },
  { name: "GIRL ON FIRE", emoji: "🔥", price: "$10", description: "This girl is on fire. The Katniss Everdeen of shots — fierce and unforgettable.", theShow: "The bar dims. A spotlight. The flames metaphorically rise.", category: "ACTION", color: "#EF4444" },
  // Food-inspired
  { name: "WAFFLE", emoji: "🧇", price: "$10", description: "Tastes exactly like waffles with syrup. Breakfast has never been more irresponsible.", theShow: "No performance needed — the flavor does all the work.", category: "FOOD", color: "#D4AF37" },
  { name: "CHOCOLATE PRETZEL", emoji: "🥨", price: "$10", description: "Sweet and salty perfection in shot form. The snack shot.", theShow: "Just close your eyes and let the chocolate pretzel magic happen.", category: "FOOD", color: "#92400E" },
  // More
  { name: "MONICA LEWINSKY", emoji: "🎤", price: "$10", description: "Historically significant. Don't worry — we left out the cigars.", theShow: "The bartender leans in. History is made. You take the shot.", category: "ICONIC", color: "#EC4899" },
  { name: "JOSE CANSECO", emoji: "⚾", price: "$10", description: "A grand slam in shot form. Step up to the plate.", theShow: "Batter up. The bartender winds up. The crowd goes wild.", category: "SPORTS", color: "#6B8E6B" },
];

const CATEGORIES = ["ALL", "FANTASY", "SCI-FI", "WAR FILM", "ACTION", "ADVENTURE", "ANIMATION", "MUSICAL", "VIRAL", "SIGNATURE", "FOOD", "ICONIC", "SPORTS"];

export default function ShotsMenu() {
  const [active, setActive] = useState("ALL");
  const [search, setSearch] = useState("");

  const filtered = ALL_SHOTS.filter((s) => {
    const matchCat = active === "ALL" || s.category === active;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Search + filter bar */}
      <div className="sticky top-16 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A] px-6 py-4">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Search */}
          <input
            type="search"
            placeholder="Search shots..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 bg-[#141414] border border-[#2A2A2A] text-[#F5F0E8] placeholder-[#8A8178] px-4 py-2 text-sm focus:outline-none focus:border-[#FF2D55] transition-colors"
          />

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-[family-name:var(--font-bebas)] text-xs tracking-widest px-3 py-1.5 transition-all duration-200 ${
                  active === cat
                    ? "bg-[#FF2D55] text-[#F5F0E8]"
                    : "border border-[#2A2A2A] text-[#8A8178] hover:border-[#FF2D55] hover:text-[#F5F0E8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="font-[family-name:var(--font-bebas)] text-[#8A8178] text-sm tracking-widest mb-8">
          {filtered.length} SHOTS {active !== "ALL" ? `IN ${active}` : "TOTAL"}
        </p>

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((shot, i) => (
              <ShotCard key={shot.name} shot={shot} delay={i * 0.04} />
            ))}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-[#8A8178]">
            <p className="font-[family-name:var(--font-bebas)] text-3xl mb-2">NO SHOTS FOUND</p>
            <p className="text-sm">Try a different search or category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 border border-[#2A2A2A] p-8">
          <p className="font-[family-name:var(--font-bebas)] text-2xl text-[#F5F0E8] mb-2">
            CAN&apos;T DECIDE?
          </p>
          <p className="text-[#8A8178] text-sm mb-4">
            Tell your bartender your vibe — they&apos;ll find you the perfect shot.
          </p>
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] text-lg tracking-widest">
            THERE IS NO I IN SHOT
          </p>
        </div>
      </div>
    </div>
  );
}
