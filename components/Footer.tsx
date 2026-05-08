import Link from "next/link";
import { ExternalLink } from "lucide-react";

const nav = [
  { href: "/shots", label: "The Shots" },
  { href: "/about", label: "Our Story" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Find Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#F5F0E8] tracking-widest">
                BARCELONA BAR NYC
              </span>
            </Link>
            <p className="text-[#8A8178] text-sm leading-relaxed max-w-xs">
              Hell&apos;s Kitchen&apos;s home of 100+ theatrical themed shots.
              Since 2005.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.3em] text-[#8A8178] mb-4">
              NAVIGATE
            </p>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#8A8178] text-sm hover:text-[#FF2D55] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.3em] text-[#8A8178] mb-4">
              FIND US
            </p>
            <address className="not-italic text-[#8A8178] text-sm leading-relaxed space-y-1 mb-4">
              <p>923 8th Avenue</p>
              <p>Hell&apos;s Kitchen, NY 10019</p>
              <a
                href="tel:+12122453212"
                className="block hover:text-[#FF2D55] transition-colors"
              >
                (212) 245-3212
              </a>
            </address>
            <a
              href="https://www.instagram.com/barcelonabarnyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#8A8178] hover:text-[#FF2D55] transition-colors text-sm"
            >
              <ExternalLink size={16} />
              @barcelonabarnyc
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[#8A8178] text-xs">
            © {new Date().getFullYear()} Barcelona Bar NYC. All rights reserved.
          </p>
          <p className="text-[#8A8178] text-xs italic">
            &ldquo;There Is No I In Shot&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
