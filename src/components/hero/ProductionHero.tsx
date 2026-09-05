"use client";

import React from "react";
import { ArrowDown, ArrowRight, ShieldCheck, Sparkles, MapPin, Globe2, FileCheck2, Layers, CheckCircle2 } from "lucide-react";
import { RotatingStamp } from "@/components/ui/RotatingStamp";

export function ProductionHero() {
  return (
    <section className="relative w-full min-h-[750px] lg:min-h-[880px] flex flex-col justify-center overflow-hidden bg-[#0A1610] text-white pt-24 pb-16 lg:pt-28 lg:pb-20">
      
      {/* ==========================================================================
          1. CINEMATIC HIMALAYAN BACKGROUND WITH MULTI-STOP SCRIM
          ========================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=2400&q=85"
          alt="Wild Himalayan Timur Pepper, Black Cardamom & Essential Distillates"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Ambient Radial & Linear Scrim for Contrast & Elegance */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-transparent to-black/80" />
      </div>

      {/* Subtle Ambient Decorative Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none z-10" />

      {/* ==========================================================================
          2. MAIN CONTENT CONTAINER (Balanced 2-Column Professional Layout)
          ========================================================================== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* --------------------------------------------------------------------
              LEFT COLUMN (Col-Span 7): Headline, Badges, Terroir Focus & CTAs
              -------------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Eyebrow Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>1st National Trade Edition · 2026</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-medium backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kathmandu, Nepal</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gf-secondary/80 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Pavilion 03 · Mid-Mountain Valleys
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-lg">
              Connecting Nepal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
                Organic Commodities
              </span> <br />
              To World Markets
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl font-normal">
              Direct procurement gateway connecting international buyers with certified Himalayan grower cooperatives.
              Source single-estate orthodox teas, wild timur pepper, cold-pressed seed oils, raw cliff honey, and industrial hemp.
            </p>

            {/* Featured Sourcing Spotlight Capsule */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-xl space-y-1.5 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-gf-peach uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gf-peach" />
                  <span>Featured Sourcing Focus</span>
                </span>
                <span className="text-emerald-300 font-mono text-[11px]">Mustang · Taplejung · Rolpa</span>
              </div>
              <p className="text-xs text-gray-200 leading-snug">
                Wild Timur Pepper, Large Black Cardamom & Steam-Distilled Essential Oils · <strong className="text-white">High Citronellal & Cineole GC/MS Assays</strong>
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#export-catalog"
                className="gf-btn-primary py-3.5 px-7 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Explore B2B Export Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-md"
              >
                <span>Book Exhibition Stall</span>
              </a>

              <a
                href="#trade-hub"
                className="inline-flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-full bg-black/40 hover:bg-black/60 text-gray-300 border border-white/15 text-xs font-semibold tracking-wide transition-all hover:text-white"
              >
                <span>Incoterms & Freight ↗</span>
              </a>
            </div>

            {/* Trust Assurances Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-gray-300 border-t border-white/15">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>EU Bio & USDA NOP Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Eurofins / SGS Lab Assays</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Cooperative FOB Pricing</span>
              </div>
            </div>

          </div>


          {/* --------------------------------------------------------------------
              RIGHT COLUMN (Col-Span 5): Frosted Live Trade Intelligence Card
              -------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Glassmorphic Live Trade & Sourcing Matrix Card */}
            <div className="rounded-3xl bg-black/55 backdrop-blur-xl border border-white/20 p-6 sm:p-7 shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gf-secondary/90 flex items-center justify-center text-white font-bold shadow-sm">
                    <Globe2 className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      Global Sourcing Desk
                    </h3>
                    <p className="text-[11px] text-gf-accent-sage">
                      Nepal Organic Expo Secretariat
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full">
                  2026 Trade Desk
                </span>
              </div>

              {/* 3 Live Stats Grid */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-mono text-lg sm:text-xl font-extrabold text-emerald-400 block">
                    150+
                  </span>
                  <span className="text-[10px] text-gray-300 leading-tight block mt-0.5">
                    Verified Estates
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-mono text-lg sm:text-xl font-extrabold text-white block">
                    25+
                  </span>
                  <span className="text-[10px] text-gray-300 leading-tight block mt-0.5">
                    Buyer Nations
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-mono text-lg sm:text-xl font-extrabold text-gf-peach block">
                    240 MT
                  </span>
                  <span className="text-[10px] text-gray-300 leading-tight block mt-0.5">
                    Verified Lots
                  </span>
                </div>
              </div>

              {/* Sourcing Categories Highlights */}
              <div className="space-y-2.5">
                <span className="text-[11px] uppercase tracking-wider font-bold text-gf-accent-sage block">
                  Featured Himalayan Trade Sectors
                </span>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-gray-200 font-medium">🌿 Industrial Hemp & Eco-Materials</span>
                    <span className="font-mono font-bold text-emerald-300 text-[11px]">Bast Fiber / Hurds</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-gray-200 font-medium">💧 Cold-Pressed Oils & Botanicals</span>
                    <span className="font-mono font-bold text-emerald-300 text-[11px]">GC/MS Pure</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-gray-200 font-medium">⛰️ Single-Estate Teas & Cliff Honey</span>
                    <span className="font-mono font-bold text-emerald-300 text-[11px]">First-Flush Lots</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-2">
                <a
                  href="#export-catalog"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gf-secondary to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all"
                >
                  <FileCheck2 className="w-4 h-4 text-emerald-200" />
                  <span>Request 5-Item Sample Kit & RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Quick Helper Subtext */}
            <div className="flex items-center justify-between px-3 text-[11px] text-gray-300">
              <span>✈️ Air Express & Kolkata Sea Freight</span>
              <a href="#about" className="text-emerald-300 hover:underline flex items-center gap-1 font-medium">
                <span>Learn More</span>
                <ArrowDown className="w-3 h-3 animate-bounce" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
