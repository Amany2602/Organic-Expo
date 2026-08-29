"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, MapPin, Calendar, Users, Sprout, Globe } from "lucide-react";

export function ProductionHero() {
  return (
    <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-20 bg-gradient-to-b from-white via-gf-bg-warm to-gf-bg-tint overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Engine */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Event Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="gf-badge">
                <Sparkles className="w-3.5 h-3.5" />
                1st National Trade Edition · 2026
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-gf-text-muted bg-white border border-gf-border px-3 py-1 rounded-full shadow-xs">
                <MapPin className="w-3 h-3 text-gf-secondary" />
                Bhrikuti Mandap, Kathmandu
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gf-primary leading-[1.06]">
              Connecting Nepal <br />
              Organic Products <br />
              <span className="gf-highlight">To World Markets</span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-gf-text-muted max-w-xl leading-relaxed">
              Nepal&apos;s premier B2B organic trade exhibition. Connecting certified Himalayan tea estates,
              essential oil distillers, spices, and heritage grain growers directly with international buyers,
              importers, and sustainable agribusiness partners.
            </p>

            {/* Dual Conversion CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="gf-btn-primary text-sm sm:text-base py-3.5 px-7">
                <span>Book Exhibition Stall</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#process" className="gf-btn-outline text-sm sm:text-base py-3.5 px-6">
                <span>Register as Trade Buyer</span>
              </a>
            </div>

            {/* Hairline Divider */}
            <div className="w-full h-px bg-gf-border my-6" />

            {/* Social Proof & Trust Metrics */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-gf-primary uppercase tracking-wider">
                  Trusted by 150+ Certified Farms & 50+ Global Buyers
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gf-text-muted">
                Proven B2B sourcing network spanning 7 Himalayan provinces and 25+ importing countries worldwide.
              </p>

              {/* Avatar Stack + Key Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="avatar-stack">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gf-primary text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    NP
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gf-secondary text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    EU
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gf-accent-mint text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    US
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gf-dark text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    JP
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-semibold text-gf-primary">
                  <span className="inline-flex items-center gap-1 bg-white border border-gf-border px-3 py-1 rounded-full shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gf-secondary" />
                    100% Certified Organic Provenance
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white border border-gf-border px-3 py-1 rounded-full shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gf-secondary" />
                    Direct B2B Matchmaking
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3-Image Staggered Mosaic Collage */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Photo 1 (Top Left): Tea Harvest */}
              <div className="relative rounded-[20px] overflow-hidden shadow-md group aspect-[4/5] bg-gf-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
                  alt="Himalayan Organic Tea Estate"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gf-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold text-gf-peach tracking-wider block">Specialty Pavilion</span>
                  <p className="text-xs font-semibold">Highland Orthodox Tea</p>
                </div>
              </div>

              {/* Photo 2 (Top Right): Specialty Coffee & Herbs */}
              <div className="relative rounded-[20px] overflow-hidden shadow-md group aspect-[4/5] bg-gf-primary/10 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80"
                  alt="Organic Coffee and Spices"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gf-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold text-gf-accent-mint tracking-wider block">Highland Terroir</span>
                  <p className="text-xs font-semibold">Medicinal Herbs & Oils</p>
                </div>
              </div>

              {/* Photo 3 (Bottom Full Width): Organic Harvest */}
              <div className="col-span-2 relative rounded-[20px] overflow-hidden shadow-md group aspect-[16/9] bg-gf-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6eb22513?auto=format&fit=crop&w=1200&q=80"
                  alt="Certified Himalayan Farmers"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gf-primary/90 via-gf-primary/20 to-transparent" />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gf-border shadow-md flex items-center gap-1.5 text-xs font-bold text-gf-primary">
                  <Sprout className="w-4 h-4 text-gf-secondary" />
                  <span>7 Provinces · 150+ Growers</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-gf-accent-sage tracking-wider block">National Event</span>
                    <p className="text-sm sm:text-base font-bold">March 27 – 29, 2026 · Kathmandu</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-xs text-gf-peach font-semibold">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Global Buyer Summit</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
