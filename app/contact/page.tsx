import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FindUsSection from "@/components/FindUsSection";

export const metadata: Metadata = {
  title: "Contact & Hours | Barcelona Bar NYC",
  description: "Find Barcelona Bar NYC at 923 8th Ave, Hell's Kitchen. Hours, phone, map, and contact form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-[#0A0A0A] border-b border-[#2A2A2A] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,45,85,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-4">
            HELL&apos;S KITCHEN · NEW YORK CITY
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] leading-none text-[#F5F0E8] mb-6">
            FIND US
          </h1>
          <p className="text-[#8A8178] text-xl max-w-lg">
            We&apos;re at 923 8th Ave — look for the neon shot glass in the window.
          </p>
        </div>
      </section>

      <FindUsSection />

      {/* Contact form */}
      <section className="py-20 px-6 bg-[#0D0D0D] border-t border-[#2A2A2A]">
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-3">
            GET IN TOUCH
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,4rem)] text-[#F5F0E8] mb-10 leading-none">
            SEND US A MESSAGE
          </h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.3em] text-[#8A8178] block mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-[#141414] border border-[#2A2A2A] text-[#F5F0E8] placeholder-[#8A8178] px-4 py-3 focus:outline-none focus:border-[#FF2D55] transition-colors"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.3em] text-[#8A8178] block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-[#141414] border border-[#2A2A2A] text-[#F5F0E8] placeholder-[#8A8178] px-4 py-3 focus:outline-none focus:border-[#FF2D55] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.3em] text-[#8A8178] block mb-2">
                SUBJECT
              </label>
              <select
                name="subject"
                className="w-full bg-[#141414] border border-[#2A2A2A] text-[#F5F0E8] px-4 py-3 focus:outline-none focus:border-[#FF2D55] transition-colors appearance-none"
              >
                <option value="general">General Inquiry</option>
                <option value="private">Private Event Booking</option>
                <option value="press">Press</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.3em] text-[#8A8178] block mb-2">
                MESSAGE
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full bg-[#141414] border border-[#2A2A2A] text-[#F5F0E8] placeholder-[#8A8178] px-4 py-3 focus:outline-none focus:border-[#FF2D55] transition-colors resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              className="w-full font-[family-name:var(--font-bebas)] text-lg tracking-widest bg-[#FF2D55] text-[#F5F0E8] py-4 hover:bg-[#FF2D55]/80 transition-all duration-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
