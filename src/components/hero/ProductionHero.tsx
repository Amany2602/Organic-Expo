"use client";

import React from "react";
import { ArrowDown, ArrowRight, ShoppingBag, Image as ImageIcon, CreditCard, Sparkles, MapPin, Calendar } from "lucide-react";

export function ProductionHero() {
  return (
    <section className="relative w-full h-screen min-h-[650px] max-h-[950px] flex flex-col justify-end overflow-hidden bg-black text-white">
      
      {/* ==========================================================================
          1. FULL-BLEED HIGH-DEPTH PERSPECTIVE BACKGROUND (EcoGrow Style)
          ========================================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2600&q=85"
          alt="Himalayan Organic Agriculture & High-Tech Vertical Farm Perspective"
          className="w-full h-full object-cover object-center scale-100"
        />
        
        {/* Multi-Stop Cinematic Scrim:
            - Dark top for transparent navbar
            - Open middle to highlight perspective corridor (60% open space)
            - Heavy bottom scrim for lower-third typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/15 to-black/90" />
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
          3. LOWER-THIRD DEDICATED CONTENT AREA (EcoGrow Exact Proportions)
          ========================================================================== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-10 sm:pb-14 pt-32">
        
        {/* Overline Eyebrow with proper spacing */}
        <div className="mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/90 font-sans drop-shadow-md">
            <span className="w-2 h-2 rounded-full bg-gf-accent-mint inline-block" />
            1st National Trade Edition · 2026 | Bhrikuti Mandap, Kathmandu
          </span>
        </div>

        {/* 2-Line Headline & Action Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-10">
          
          <div className="space-y-4 max-w-3xl">
            {/* Proportionate Display Headline (2 Concise Lines) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[1.02] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
              Connecting Nepal Organic <br className="hidden sm:inline" />
              <span className="text-white">Products To World Markets</span>
            </h1>

            {/* Sub-copy & Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#pricing"
                className="gf-btn-primary py-3 px-7 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
              >
                <span>Book Exhibition Stall</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
              >
                <span>Buyer Pass Registration</span>
              </a>
            </div>
          </div>

          {/* Bottom Right Scroll Down Indicator */}
          <a
            href="#about"
            className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90 hover:text-white transition-colors pb-2 cursor-pointer group shrink-0"
          >
            <span>Scroll Down</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gf-secondary transition-colors">
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform animate-bounce" />
            </div>
          </a>

        </div>

      </div>

    </section>
  );
}
