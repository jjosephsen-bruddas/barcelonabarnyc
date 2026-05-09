import type { Metadata } from "next";
import Footer from "@/components/Footer";
import TikTokEmbed from "@/components/TikTokEmbed";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Social | Barcelona Bar NYC",
  description:
    "Follow @barcelonabarnyc on Instagram and TikTok for themed shots, bartender performances, and pure Hell's Kitchen chaos.",
};

// ─────────────────────────────────────────────────────────────────────────────
// INSTAGRAM PHOTOS
// Replace each `src` with a real image URL or local public/ path.
// To get images: download from @barcelonabarnyc on Instagram and put them in /public/social/
// ─────────────────────────────────────────────────────────────────────────────
const INSTAGRAM_POSTS = [
  { id: 1, src: null, alt: "Harry Potter shot at Barcelona Bar NYC" },
  { id: 2, src: null, alt: "Full Metal Jacket shot performance" },
  { id: 3, src: null, alt: "Bartender performing themed shot" },
  { id: 4, src: null, alt: "Packed bar at Barcelona Bar NYC" },
  { id: 5, src: null, alt: "Pokemon shot with Squirtle" },
  { id: 6, src: null, alt: "Group taking themed shots" },
  { id: 7, src: null, alt: "The neon shot glass sign in the window" },
  { id: 8, src: null, alt: "White Gorilla signature shot" },
  { id: 9, src: null, alt: "Tide Pod shot blue and orange" },
  { id: 10, src: null, alt: "Bartender in costume" },
  { id: 11, src: null, alt: "Happy Hour at the bar" },
  { id: 12, src: null, alt: "The Jedis two-shot performance" },
];

// ─────────────────────────────────────────────────────────────────────────────
// TIKTOK VIDEOS
// Replace each `videoId` with a real TikTok video ID from @barcelonabarnyc.
// How: Open a TikTok video → copy the number at the end of the URL
// e.g. tiktok.com/@barcelonabarnyc/video/7123456789012345678 → videoId = "7123456789012345678"
// ─────────────────────────────────────────────────────────────────────────────
const TIKTOK_VIDEOS = [
  {
    videoId: "REPLACE_WITH_REAL_VIDEO_ID_1", // e.g. Harry Potter shot video
    username: "barcelonabarnyc",
    caption: "The Harry Potter shot — Sorting Hat included 🪄",
  },
  {
    videoId: "REPLACE_WITH_REAL_VIDEO_ID_2", // e.g. Full Metal Jacket video
    username: "barcelonabarnyc",
    caption: "Full Metal Jacket — the drill sergeant doesn't hold back 🪖",
  },
  {
    videoId: "REPLACE_WITH_REAL_VIDEO_ID_3", // e.g. Pokemon shot
    username: "barcelonabarnyc",
    caption: "Squirtle used bubble gun — it was super effective 💧",
  },
  {
    videoId: "REPLACE_WITH_REAL_VIDEO_ID_4", // e.g. Tide Pod
    username: "barcelonabarnyc",
    caption: "The Tide Pod shot that broke the internet 🌊",
  },
];

// Placeholder gradient colors for unfilled Instagram grid slots
const GRID_COLORS = [
  "from-[#FF2D55]/20 to-[#141414]",
  "from-[#D4AF37]/20 to-[#141414]",
  "from-[#A084CF]/20 to-[#141414]",
  "from-[#60A5FA]/20 to-[#141414]",
  "from-[#FF8C00]/20 to-[#141414]",
  "from-[#FF2D55]/10 to-[#141414]",
  "from-[#D4AF37]/10 to-[#141414]",
  "from-[#A084CF]/10 to-[#141414]",
  "from-[#6B8E6B]/20 to-[#141414]",
  "from-[#FF2D55]/15 to-[#141414]",
  "from-[#D4AF37]/15 to-[#141414]",
  "from-[#60A5FA]/15 to-[#141414]",
];

export default function SocialPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-6 bg-[#0A0A0A] border-b border-[#2A2A2A] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,45,85,0.1) 0%, rgba(212,175,55,0.04) 50%, transparent 75%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-bebas)] text-[#FF2D55] tracking-[0.4em] text-sm mb-4">
            HELL&apos;S KITCHEN · NYC
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] leading-none text-[#F5F0E8] mb-4">
            CATCH US ON SOCIAL
          </h1>
          <p className="text-[#8A8178] text-xl max-w-lg leading-relaxed">
            Every night is a performance. Follow along.
          </p>
        </div>
      </section>

      {/* ── Instagram Section ── */}
      <section className="py-20 px-6 bg-[#0A0A0A] border-b border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-[family-name:var(--font-bebas)] text-[#8A8178] tracking-[0.4em] text-xs mb-2">
                INSTAGRAM
              </p>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,4rem)] text-[#F5F0E8] leading-none">
                FOLLOW{" "}
                <span className="text-[#FF2D55]">@BARCELONABARNYC</span>
              </h2>
            </div>
            <a
              href="https://www.instagram.com/barcelonabarnyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-bebas)] text-sm tracking-widest border border-[#FF2D55] text-[#FF2D55] px-6 py-3 hover:bg-[#FF2D55] hover:text-[#F5F0E8] transition-all duration-300 whitespace-nowrap"
            >
              <ExternalLink size={14} />
              OPEN INSTAGRAM
            </a>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-1.5 mb-8">
            {INSTAGRAM_POSTS.map((post, i) => (
              <a
                key={post.id}
                href="https://www.instagram.com/barcelonabarnyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-[#141414] border border-[#1E1E1E] hover:border-[#FF2D55]/50 transition-all duration-300"
              >
                {post.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.src}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Placeholder tile — replace post.src to populate */
                  <div
                    className={`w-full h-full bg-gradient-to-br ${GRID_COLORS[i % GRID_COLORS.length]} flex items-center justify-center`}
                  >
                    <span className="text-2xl opacity-40 group-hover:opacity-70 transition-opacity">
                      📷
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#FF2D55]/0 group-hover:bg-[#FF2D55]/10 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink
                    size={18}
                    className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center">
            <a
              href="https://www.instagram.com/barcelonabarnyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-bebas)] text-lg tracking-widest bg-[#FF2D55] text-[#F5F0E8] px-12 py-4 hover:bg-[#FF2D55]/80 transition-all duration-200 inline-flex items-center gap-3"
            >
              <ExternalLink size={16} />
              VIEW ALL 469+ POSTS ON INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* ── TikTok Section ── */}
      <section className="py-20 px-6 bg-[#0D0D0D] border-b border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-[family-name:var(--font-bebas)] text-[#8A8178] tracking-[0.4em] text-xs mb-2">
                TIKTOK
              </p>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,4rem)] text-[#F5F0E8] leading-none">
                WATCH ON TIKTOK
              </h2>
              <p className="text-[#8A8178] text-base mt-3 max-w-md">
                Themed shots you have to see to believe.
              </p>
            </div>
            <a
              href="https://www.tiktok.com/@barcelonabarnyc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-bebas)] text-sm tracking-widest border border-[#D4AF37] text-[#D4AF37] px-6 py-3 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 whitespace-nowrap"
            >
              <ExternalLink size={14} />
              OPEN TIKTOK
            </a>
          </div>

          {/* TikTok embed grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {TIKTOK_VIDEOS.map((video) => (
              <TikTokEmbed
                key={video.videoId}
                videoId={video.videoId}
                username={video.username}
                caption={video.caption}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.tiktok.com/@barcelonabarnyc"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-bebas)] text-lg tracking-widest border border-[#D4AF37] text-[#D4AF37] px-12 py-4 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 inline-flex items-center gap-3"
            >
              <ExternalLink size={16} />
              FOLLOW US ON TIKTOK
            </a>
          </div>
        </div>
      </section>

      {/* ── Tag Us CTA ── */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-bebas)] text-[#8A8178] tracking-[0.4em] text-sm mb-4">
            JOIN THE CHAOS
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,5.5rem)] text-[#F5F0E8] leading-none mb-4">
            SHARE YOUR SHOT
          </h2>
          <p className="text-[#8A8178] text-base leading-relaxed mb-6 max-w-md mx-auto">
            Snap your shot, tag us, and join 20+ years of Hell&apos;s Kitchen
            chaos. We might just repost you.
          </p>

          {/* Hashtag */}
          <div className="inline-block mb-8">
            <span
              className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl text-[#D4AF37]"
              style={{
                textShadow: "0 0 20px rgba(212,175,55,0.4), 0 0 40px rgba(212,175,55,0.2)",
              }}
            >
              #BARCELONABARNYC
            </span>
          </div>

          {/* Social handle buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/barcelonabarnyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-bebas)] text-base tracking-widest border border-[#FF2D55] text-[#FF2D55] px-8 py-3 hover:bg-[#FF2D55] hover:text-[#F5F0E8] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} />
              INSTAGRAM @BARCELONABARNYC
            </a>
            <a
              href="https://www.tiktok.com/@barcelonabarnyc"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-bebas)] text-base tracking-widest border border-[#D4AF37] text-[#D4AF37] px-8 py-3 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} />
              TIKTOK @BARCELONABARNYC
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
