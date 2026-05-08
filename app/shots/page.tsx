import type { Metadata } from "next";
import ShotsMenu from "@/components/ShotsMenu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Shots | Barcelona Bar NYC",
  description: "Browse 100+ theatrical themed shots at Barcelona Bar NYC in Hell's Kitchen. Harry Potter, Full Metal Jacket, Pokemon, Tide Pod and more.",
};

export default function ShotsPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-16 px-6 bg-[#0A0A0A] overflow-hidden border-b border-[#2A2A2A]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,45,85,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-4">
            BARCELONA BAR NYC
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,12vw,9rem)] leading-none text-[#F5F0E8]">
            THE SHOT MENU
          </h1>
          <p className="text-[#8A8178] text-lg mt-4 max-w-lg">
            100+ theatrical shots. Every one comes with a story, a performance,
            and a reason to come back.
          </p>
        </div>
      </section>

      <ShotsMenu />
      <Footer />
    </>
  );
}
