"use client";

import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="section-wrap flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-8 w-8 rounded-full border border-slate-600"
          />
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            Bhaven Naik
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-slate-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/assets/Bhaven-Naik-Resume.pdf"
            className="rounded-full border border-emerald-400 px-4 py-1.5 text-xs font-medium text-emerald-300 hover:bg-emerald-400/10 transition"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="section-wrap flex flex-col gap-2 py-3 text-sm text-slate-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/assets/Bhaven-Naik-Resume.pdf"
              className="mt-2 inline-flex w-fit rounded-full border border-emerald-400 px-4 py-1.5 text-xs font-medium text-emerald-300 hover:bg-emerald-400/10 transition"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
