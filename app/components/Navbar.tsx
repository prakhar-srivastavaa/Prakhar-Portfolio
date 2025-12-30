"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#resume", label: "Resume" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur-xl md:px-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-lg font-semibold">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-amber-300 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-amber-300 hover:text-amber-400 transition-colors"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Coffee Button */}
      <div className="ml-auto">
        <Link href="/thanksfortreat" className="rounded-full border border-amber-300/60 px-3 py-1 text-xs md:text-sm md:px-4 font-semibold text-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.35)] hover:border-amber-300 hover:shadow-[0_0_24px_rgba(251,191,36,0.55)] transition-all">
          <span className="hidden sm:inline">Buy Me a Coffee</span>
          <span className="sm:hidden">☕</span>
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-slate-950 border-r border-white/10 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-xl font-bold text-amber-300">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold text-slate-200 hover:text-amber-300 transition-colors py-2 px-4 rounded-lg hover:bg-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}