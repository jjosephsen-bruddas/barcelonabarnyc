import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FloquetSection from "@/components/FloquetSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Barcelona Bar NYC",
  description: "The story of Barcelona Bar NYC — founded in 2005, inspired by Espit Chupitos in Barcelona, and dedicated to the legend of Copito de Nieve, the world's only albino gorilla.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-[#0A0A0A] border-b border-[#2A2A2A] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-bebas)] text-[#D4AF37] tracking-[0.4em] text-sm mb-4">
            EST. 2005 · HELL&apos;S KITCHEN
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] leading-none text-[#F5F0E8] mb-6">
            OUR STORY
          </h1>
          <p className="text-[#8A8178] text-xl leading-relaxed max-w-2xl">
            A bar born in Barcelona, built in New York, and dedicated to the
            greatest party animal the world has ever known.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#FF2D55] mb-4 tracking-wide">
              IT STARTED IN BARCELONA
            </h2>
            <p className="text-[#8A8178] leading-relaxed text-base">
              Every great bar has an origin story. Ours begins at Espit Chupitos —
              a legendary shots bar in Barcelona&apos;s Esquerra de l&apos;Eixample
              district where &ldquo;chupitos&rdquo; (Spanish for &ldquo;shots&rdquo;)
              became an art form. The bartenders there didn&apos;t just pour drinks.
              They performed. Each shot was a mini-production with props, costumes,
              and sound effects.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#FF2D55] mb-4 tracking-wide">
              HELL&apos;S KITCHEN GETS ITS BAR
            </h2>
            <p className="text-[#8A8178] leading-relaxed text-base">
              In 2005, that concept landed in Hell&apos;s Kitchen, NYC. We opened
              at 923 8th Avenue — a tiny, one-room spot with a dart board, a
              great jukebox, and a menu of shots unlike anything else in the city.
              The neon shot glass in the window became our calling card.
            </p>
            <p className="text-[#8A8178] leading-relaxed text-base mt-4">
              Twenty years later, we&apos;re still here. Still pouring. Still
              performing. The shots list has grown to 100+, but the philosophy
              hasn&apos;t changed: every shot is a show, and the bar is the stage.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#FF2D55] mb-4 tracking-wide">
              THE PHILOSOPHY
            </h2>
            <p className="text-[#8A8178] leading-relaxed text-base">
              We believe drinking alone is fine. But drinking together — with a
              bartender in a Hogwarts scarf sorting you into your house while the
              theme song plays — is something else entirely. That&apos;s what we
              built Barcelona Bar for. Not a place to get a drink. A place to
              have a moment.
            </p>
            <p className="text-[#8A8178] leading-relaxed text-base mt-4 font-[Georgia,serif] italic text-lg text-[#D4AF37]">
              &ldquo;There Is No I In Shot.&rdquo;
            </p>
          </div>

          <div className="mt-6">
            <Link
              href="/shots"
              className="font-[family-name:var(--font-bebas)] text-sm tracking-widest bg-[#FF2D55] text-[#F5F0E8] px-10 py-4 hover:bg-[#FF2D55]/80 transition-all duration-200 inline-block"
            >
              EXPLORE THE SHOTS
            </Link>
          </div>
        </div>
      </section>

      {/* Floquet section reused */}
      <FloquetSection />

      <Footer />
    </>
  );
}
