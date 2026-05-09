import type { Metadata } from "next";
import Footer from "@/components/Footer";
import EventsCalendar from "@/components/EventsCalendar";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Calendar | Barcelona Bar NYC",
  description:
    "Trivia nights, dart league, happy hour and private events at Barcelona Bar NYC in Hell's Kitchen. Check the calendar for what's on.",
};

const RECURRING = [
  {
    color: "#FF2D55",
    dot: "●",
    name: "TRIVIA NIGHT",
    schedule: "Every Wednesday · 8 PM",
    description:
      "Test your knowledge — or come to drink themed shots while smarter people compete. Either way, everyone wins.",
  },
  {
    color: "#D4AF37",
    dot: "●",
    name: "HAPPY HOUR",
    schedule: "Mon – Fri · 4 PM – 7 PM",
    description:
      "$5 drafts, $8 well drinks, $12 beer + shot combo all day, every day.",
  },
  {
    color: "#A084CF",
    dot: "●",
    name: "DART LEAGUE NIGHT",
    schedule: "Every Thursday · 7 PM",
    description:
      "We compete in the New York Dart League. Walk in and watch — or join the team. We&apos;re called &lsquo;There Is No I In Shot.&rsquo;",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-6 bg-[#0A0A0A] border-b border-[#2A2A2A] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 70% 50%, rgba(255,45,85,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-4">
            WHAT&apos;S GOING ON
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] leading-none text-[#F5F0E8] mb-4">
            EVENTS &amp; CALENDAR
          </h1>
          <p className="text-[#8A8178] text-xl leading-relaxed max-w-lg">
            From weekly trivia to private parties — there&apos;s always something
            going on at Barcelona Bar.
          </p>
        </div>
      </section>

      {/* ── Interactive Calendar ── */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="font-[family-name:var(--font-bebas)] text-[#8A8178] tracking-[0.4em] text-xs mb-2">
              MONTHLY VIEW
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#F5F0E8] leading-none">
              CLICK ANY DATE TO SEE WHAT&apos;S ON
            </h2>
          </div>
          <EventsCalendar />
        </div>
      </section>

      {/* ── Recurring Events Cards ── */}
      <section className="py-16 px-6 bg-[#0D0D0D] border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="font-[family-name:var(--font-bebas)] text-[#8A8178] tracking-[0.4em] text-xs mb-2">
              EVERY WEEK
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#F5F0E8] leading-none">
              RECURRING EVENTS
            </h2>
          </div>

          <div className="space-y-4">
            {RECURRING.map((ev) => (
              <div
                key={ev.name}
                className="bg-[#141414] border border-[#2A2A2A] p-6 hover:border-opacity-60 transition-all duration-300 flex gap-5 items-start"
                style={{ borderColor: `${ev.color}30` }}
              >
                {/* Color indicator */}
                <div
                  className="w-1 self-stretch rounded-full shrink-0 mt-0.5"
                  style={{ backgroundColor: ev.color }}
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3
                      className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide"
                      style={{ color: ev.color }}
                    >
                      {ev.name}
                    </h3>
                    <span className="font-[family-name:var(--font-bebas)] text-xs tracking-widest text-[#8A8178] border border-[#2A2A2A] px-2 py-0.5">
                      {ev.schedule}
                    </span>
                  </div>
                  <p className="text-[#8A8178] text-sm leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Private Events CTA ── */}
      <section className="py-16 px-6 bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto">
          <div className="border border-[#D4AF37]/30 p-10 text-center">
            <p className="font-[family-name:var(--font-bebas)] text-[#D4AF37] tracking-[0.3em] text-sm mb-3">
              BOOK THE WHOLE BAR
            </p>
            <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,4rem)] text-[#F5F0E8] leading-none mb-4">
              PRIVATE EVENTS
            </h3>
            <p className="text-[#8A8178] text-base mb-8 max-w-md mx-auto leading-relaxed">
              Birthdays, bachelorettes, team outings — if you want the full
              Barcelona Bar experience for your group, we&apos;ve got you.
            </p>
            <Link
              href="/contact"
              className="font-[family-name:var(--font-bebas)] text-lg tracking-widest border border-[#D4AF37] text-[#D4AF37] px-10 py-4 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 inline-block"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section className="py-16 px-6 bg-[#0D0D0D] border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-[family-name:var(--font-bebas)] text-[#8A8178] tracking-[0.3em] text-sm mb-3">
            STAY IN THE LOOP
          </p>
          <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#F5F0E8] mb-4">
            FOLLOW US FOR THE LATEST
          </h3>
          <p className="text-[#8A8178] text-sm mb-6 max-w-sm mx-auto">
            Event dates, last-minute specials, and shots that will make your
            night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/barcelonabarnyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-bebas)] text-base tracking-widest bg-[#FF2D55] text-[#F5F0E8] px-8 py-4 hover:bg-[#FF2D55]/80 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} />
              @BARCELONABARNYC ON INSTAGRAM
            </a>
            <Link
              href="/social"
              className="font-[family-name:var(--font-bebas)] text-base tracking-widest border border-[#2A2A2A] text-[#8A8178] px-8 py-4 hover:border-[#FF2D55] hover:text-[#F5F0E8] transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              VIEW SOCIAL PAGE →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
