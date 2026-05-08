import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Barcelona Bar NYC",
  description: "Quiz nights, private events, and more at Barcelona Bar NYC in Hell's Kitchen.",
};

const events = [
  {
    day: "EVERY WEEK",
    name: "TRIVIA NIGHT",
    description: "Test your knowledge — or just come to drink themed shots while smarter people compete. Either way, everyone wins.",
    detail: "Check our Instagram @barcelonabarnyc for the latest schedule.",
    color: "#FF2D55",
  },
  {
    day: "ANYTIME",
    name: "PRIVATE EVENTS",
    description: "Book Barcelona Bar for your next birthday, bachelorette, corporate outing, or anything that deserves 100+ themed shots.",
    detail: "Contact us below to discuss availability and packages.",
    color: "#D4AF37",
  },
  {
    day: "DAILY",
    name: "DART LEAGUE NIGHTS",
    description: "We're proud members of the New York Dart League. Come throw darts, drink shots, and represent.",
    detail: "Walk in and play, or check our schedule for league nights.",
    color: "#A084CF",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-[#0A0A0A] border-b border-[#2A2A2A] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 70% 50%, rgba(255,45,85,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-4">
            WHAT&apos;S GOING ON
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] leading-none text-[#F5F0E8] mb-6">
            EVENTS
          </h1>
          <p className="text-[#8A8178] text-xl leading-relaxed max-w-lg">
            From quiz nights to private parties — there&apos;s always a reason to
            come to Barcelona Bar.
          </p>
        </div>
      </section>

      {/* Events grid */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto space-y-6">
          {events.map((event, i) => (
            <div
              key={event.name}
              className="bg-[#141414] border border-[#2A2A2A] p-8 hover:border-[#FF2D55]/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div
                  className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.3em] px-3 py-1.5 whitespace-nowrap h-fit"
                  style={{ color: event.color, border: `1px solid ${event.color}40` }}
                >
                  {event.day}
                </div>
                <div className="flex-1">
                  <h2
                    className="font-[family-name:var(--font-bebas)] text-3xl mb-3 tracking-wide"
                    style={{ color: event.color }}
                  >
                    {event.name}
                  </h2>
                  <p className="text-[#8A8178] text-base leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <p className="text-[#8A8178] text-sm italic">{event.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="max-w-5xl mx-auto mt-12 text-center border border-[#2A2A2A] p-10">
          <p className="font-[family-name:var(--font-bebas)] text-[#8A8178] tracking-[0.3em] text-sm mb-3">
            STAY IN THE LOOP
          </p>
          <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#F5F0E8] mb-4">
            FOLLOW US FOR THE LATEST
          </h3>
          <a
            href="https://www.instagram.com/barcelonabarnyc/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-bebas)] text-lg tracking-widest bg-[#FF2D55] text-[#F5F0E8] px-10 py-4 hover:bg-[#FF2D55]/80 transition-all duration-200 inline-block"
          >
            @BARCELONABARNYC
          </a>
        </div>

        {/* Private event contact */}
        <div className="max-w-5xl mx-auto mt-8 text-center border border-[#D4AF37]/30 p-10">
          <p className="font-[family-name:var(--font-bebas)] text-[#D4AF37] tracking-[0.3em] text-sm mb-3">
            BOOK THE WHOLE BAR
          </p>
          <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#F5F0E8] mb-4">
            PRIVATE EVENTS
          </h3>
          <p className="text-[#8A8178] text-sm mb-6 max-w-md mx-auto">
            Birthdays, bachelorettes, team outings — if you want the full
            Barcelona Bar experience for your group, reach out.
          </p>
          <Link
            href="/contact"
            className="font-[family-name:var(--font-bebas)] text-lg tracking-widest border border-[#D4AF37] text-[#D4AF37] px-10 py-4 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 inline-block"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
