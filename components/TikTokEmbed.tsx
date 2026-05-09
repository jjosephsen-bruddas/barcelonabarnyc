"use client";

import Script from "next/script";

interface TikTokEmbedProps {
  videoId: string;   // numeric ID from TikTok video URL
  username: string;  // e.g. "barcelonabarnyc"
  caption?: string;
}

// How to find a TikTok video ID:
// 1. Open the TikTok video in a browser
// 2. The URL looks like: https://www.tiktok.com/@barcelonabarnyc/video/1234567890123456789
// 3. The long number at the end is the videoId
// 4. Replace the placeholder IDs in /app/social/page.tsx with your real video IDs

export default function TikTokEmbed({ videoId, username, caption }: TikTokEmbedProps) {
  const videoUrl = `https://www.tiktok.com/@${username}/video/${videoId}`;

  return (
    <div className="group flex flex-col gap-3">
      <div className="relative bg-[#141414] border border-[#2A2A2A] hover:border-[#FF2D55]/40 transition-all duration-300 overflow-hidden">
        <blockquote
          className="tiktok-embed"
          cite={videoUrl}
          data-video-id={videoId}
          style={{ maxWidth: "100%", minWidth: "100%" }}
        >
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={videoUrl}
              className="text-[#8A8178] text-sm hover:text-[#FF2D55] transition-colors"
            >
              Watch on TikTok @{username}
            </a>
          </section>
        </blockquote>
      </div>
      {caption && (
        <p className="text-[#8A8178] text-xs italic px-1">{caption}</p>
      )}
      {/* TikTok embed script — loaded once, lazyOnload so it doesn't block page render */}
      <Script
        id="tiktok-embed-script"
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
