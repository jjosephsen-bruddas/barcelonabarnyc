"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/shots", label: "THE SHOTS" },
  { href: "/about", label: "OUR STORY" },
  { href: "/events", label: "EVENTS" },
  { href: "/social", label: "SOCIAL" },
  { href: "/contact", label: "FIND US" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <ShotGlassIcon className="w-7 h-7 text-[#FF2D55] group-hover:drop-shadow-[0_0_8px_#FF2D55] transition-all duration-300" />
          <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-[#F5F0E8]">
            BARCELONA BAR
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-[family-name:var(--font-bebas)] text-sm tracking-widest text-[#8A8178] hover:text-[#FF2D55] transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/shots"
              className="font-[family-name:var(--font-bebas)] text-sm tracking-widest bg-[#FF2D55] text-[#F5F0E8] px-5 py-2 hover:bg-[#FF2D55]/80 transition-all duration-200 glow-box"
            >
              ORDER YOUR SHOT
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#F5F0E8]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-bebas)] text-xl tracking-widest text-[#8A8178] hover:text-[#FF2D55] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/shots"
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-bebas)] text-xl tracking-widest bg-[#FF2D55] text-[#F5F0E8] px-5 py-3 text-center"
          >
            ORDER YOUR SHOT
          </Link>
        </div>
      )}
    </header>
  );
}

function ShotGlassIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 2L7 18H17L19 2H5ZM12 20C10.9 20 10 20.9 10 22H14C14 20.9 13.1 20 12 20ZM9.5 18.5C9.5 19.3 10.2 20 11 20H13C13.8 20 14.5 19.3 14.5 18.5H9.5Z" />
    </svg>
  );
}
