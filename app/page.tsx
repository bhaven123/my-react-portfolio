"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HomeSection from "@/components/sections/home";
import AboutSection from "@/components/sections/about";
import WorkSection from "@/components/sections/work";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-3 bg-slate-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" />
        <p className="text-xs text-slate-400">Loading portfolio…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
