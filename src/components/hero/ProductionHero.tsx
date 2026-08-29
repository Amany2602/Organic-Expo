"use client";

import React from "react";
import { ArrowRight, ArrowDown, Sparkles, MapPin, Calendar, CheckCircle2, Sprout, ShieldCheck } from "lucide-react";

export function ProductionHero() {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white">
      
      {/* ==========================================================================
          1. FULL-BLEED CINEMATIC PERSPECTIVE VISUAL BACKGROUND (EcoGrow Style)
          ========================================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2400&q=85"
          alt="Himalayan Organic Agriculture & High-Tech Vertical Farm Perspective"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-Stop Cinematic Scrim: Dark top for header + subtle middle + deep dark bottom for typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Spacer for top padding */}
      <div className="relative z-10 pt-6 sm:pt-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-gf-peach">
          <Sparkles className="w-3.5 h-3.5 text-gf-peach" />
          <span>1st National Trade Edition · 2026</span>
        </div>

        {/* Venue Badge */}
        <div className="hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/15 px-3.5 py-1 rounded-full text-xs font-medium text-gray-200">
          <MapPin className="w-3.5 h-3.5 text-gf-accent-mint" />
          <span>Bhrikuti Mandap, Kathmandu, Nepal</span>
        </div>
      </div>

      {/* ==========================================================================
          2. LOWER-THIRD MASSIVE DISPLAY HEADLINE & ACTION ENGINE
          ========================================================================== */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-20 flex flex-col justify-end flex-grow">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Typography Column */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            
            {/* Overline Eyebrow */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-bold tracking-widest text-gf-peach uppercase">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gf-accent-mint" />
                March 27 – 29, 2026
              </span>
              <span>•</span>
              <span className="text-gray-300">National B2B Trade Fair</span>
            </div>

            {/* Massive Condensed Headline (EcoGrow Style) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.92] text-white drop-shadow-2xl">
              Connecting Nepal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-gf-accent-mint">
                Organic Products
              </span> <br />
              To World Markets
            </h1>

            {/* Subtext Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light max-w-2xl leading-relaxed drop-shadow-md">
              Connecting certified Himalayan orthodox tea estates, specialty Arabica coffee, medicinal herbs,
              and heritage grains directly with international buyers, importers, and sustainable agribusiness partners.
            </p>

            {/* Dual CTA Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="gf-btn-primary py-3.5 px-8 text-sm sm:text-base font-bold shadow-xl hover:scale-105 transition-all"
              >
                <span>Book Exhibition Stall</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md text-sm sm:text-base font-semibold transition-all hover:scale-105"
              >
                <span>Register as Trade Buyer</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Proof Strip & Scroll Down */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end gap-6">
            
            {/* Quick Proof Card */}
            <div className="bg-black/60 backdrop-blur-md border border-white/15 p-5 rounded-2xl space-y-3 max-w-xs shadow-2xl">
              <div className="flex items-center gap-2 text-gf-accent-mint font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Sourcing Scale</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1 border-t border-white/10">
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-white block">150+</span>
                  <span className="text-[11px] text-gray-300">Certified Growers</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-white block">25+</span>
                  <span className="text-[11px] text-gray-300">Sourcing Nations</span>
                </div>
              </div>
            </div>

            {/* Scroll Down Indicator with Animation */}
            <a
              href="#about"
              className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors group cursor-pointer"
            >
              <span>Scroll To Explore</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gf-secondary transition-colors">
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
