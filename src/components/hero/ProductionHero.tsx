"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, ArrowRight, ShoppingBag, Image as ImageIcon, CreditCard, Sparkles, MapPin, Calendar } from "lucide-react";
import { RotatingStamp } from "@/components/ui/RotatingStamp";

const HERO_SLIDES = [

  {
    id: "tea-coffee",
    title: "Highland Orthodox White Needle Tea & Shade-Grown Arabica",
    sector: "Pavilion 01 · High Hills",
    tag: "Ilam & Nuwakot Estates · 2,150m Glacier-Fed Terroir",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=2400&q=85",
  },
  {
    id: "cliff-honey-herbs",
    title: "Wild Himalayan Cliff Honey & Rare Bio-Active Botanicals",
    sector: "Pavilion 02 · Alpine Himalayas",
    tag: "Annapurna & Karnali · Raw Cliff Harvest & Shilajit Purity",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=2400&q=85",
  },
  {
    id: "spices-oils",
    title: "Wild Timur Pepper, Black Cardamom & Essential Distillates",
    sector: "Pavilion 03 · Mid-Mountain Valleys",
    tag: "Mustang, Taplejung & Rolpa · High Citronellal & Cineole",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=2400&q=85",
  },
  {
    id: "grains-terai",
    title: "Jumla Marsi Red Rice, Tartary Buckwheat & Terai Aromatic Paddy",
    sector: "Pavilion 04 · Heritage Belts",
    tag: "High-Altitude 2,600m Grains & Organic Terai Moringa",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2400&q=85",
  },
];

export function ProductionHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[820px] max-h-[1020px] flex flex-col justify-end overflow-hidden bg-black text-white">
      
      {/* ==========================================================================
          1. DYNAMIC CINEMATIC MULTI-SLIDE BACKGROUND (Ken Burns & Cross-Fade)
          ========================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = activeSlide === index;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Multi-Stop Cinematic Scrim:
            - Top dark gradient for transparent navbar
            - Open middle to highlight perspective visual depth
            - Deep dark bottom scrim for high-contrast white typography */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 via-black/20 to-black/95 pointer-events-none" />
      </div>

      {/* ==========================================================================
          2. FLOATING RIGHT QUICK-ACTION DOCK (EcoGrow Style)
          ========================================================================== */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5 bg-gf-secondary/95 backdrop-blur-md rounded-l-2xl p-2 shadow-2xl border-l border-t border-b border-white/20">
        <a
          href="#pricing"
          title="Book Stall"
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-105"
        >
          <ShoppingBag className="w-4 h-4" />
        </a>
        <a
          href="#pavilions"
          title="View Pavilions"
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-105"
        >
          <ImageIcon className="w-4 h-4" />
        </a>
        <a
          href="#process"
          title="Trade Passes"
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-105"
        >
          <CreditCard className="w-4 h-4" />
        </a>
      </div>

      {/* ==========================================================================
          3. LOWER-THIRD DEDICATED CONTENT AREA
          ========================================================================== */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-12 pt-32">
        
        {/* Dynamic Sector Tag + Eyebrow */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-3 sm:mb-4">
          <a
            href="#export-catalog"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-700/90 hover:bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md border border-white/20 backdrop-blur-xs transition-all hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gf-peach animate-pulse" />
            <span>🌏 Global Sourcing & Export Desk Open</span>
          </a>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gf-secondary text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
            {HERO_SLIDES[activeSlide].sector}
          </span>

          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white/90 font-sans drop-shadow-md hidden sm:inline">
            1st National Trade Edition · 2026 | Kathmandu
          </span>
        </div>

        {/* 2-Line Headline & Action Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-10">
          
          <div className="space-y-4 max-w-3xl">
            {/* Proportionate Display Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[1.02] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
              Connecting Nepal Organic <br className="hidden sm:inline" />
              <span className="text-white">Products To World Markets</span>
            </h1>

            {/* Dynamic Active Sector Name */}
            <p className="text-xs sm:text-sm text-gf-peach font-semibold tracking-wide transition-all duration-500">
              Focus: {HERO_SLIDES[activeSlide].title} · {HERO_SLIDES[activeSlide].tag}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#export-catalog"
                className="gf-btn-primary py-3 px-7 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Explore B2B Export Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
              >
                <span>Book Exhibition Stall</span>
              </a>

              <a
                href="#trade-hub"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-black/40 hover:bg-black/60 text-gray-200 border border-white/15 text-xs font-semibold tracking-wide transition-all hover:text-white"
              >
                <span>Incoterms & Logistics ↗</span>
              </a>
            </div>
          </div>

          {/* Bottom Right: Rotating Stamp + Slide Progress Navigation + Scroll Down */}
          <div className="flex flex-col items-start lg:items-end gap-5 w-full lg:w-auto">
            
            {/* EcoGrow Style Rotating Stamp Floating Badge */}
            <div className="hidden sm:block">
              <RotatingStamp
                dark={true}
                size={120}
                text="• 100% CERTIFIED ORGANIC • HIMALAYAN EXPO • 2026 •"
              />
            </div>

            {/* 4-Sector Slide Progress Navigation Bars */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      isActive ? "w-8 bg-gf-accent-mint" : "w-3 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
                  />
                );
              })}
            </div>

            {/* Scroll Down Indicator */}
            <a
              href="#about"
              className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90 hover:text-white transition-colors cursor-pointer group shrink-0"
            >
              <span>Scroll Down</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gf-secondary transition-colors">
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform animate-bounce" />
              </div>
            </a>

          </div>


        </div>

      </div>

    </section>
  );
}
