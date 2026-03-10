"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/program", label: "The Program" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/gbpanalyzer", label: "GBP Analyzer" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl md:text-2xl font-extrabold tracking-tight font-[family-name:var(--font-heading)]">
            <span className="text-brand-blue">School</span>
            <span className="text-brand-charcoal"> of </span>
            <span className="text-brand-red">Home Service</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-brand-charcoal hover:text-brand-red transition-colors rounded-md"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-lg hover:bg-brand-red-dark transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-charcoal"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-brand-charcoal hover:bg-brand-gray rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-brand-red text-white text-sm font-semibold rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
