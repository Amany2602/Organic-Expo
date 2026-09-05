"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function PavilionsGrid() {
  return (
    <section id="pavilions" className="py-20 lg:py-24 bg-gf-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="gf-badge">Flagship Exhibition Pavilions</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary">
            Curated Sourcing Zones for <br className="hidden sm:block" />
            <span className="text-gf-secondary">Himalayan Organic Excellence</span>
          </h2>
          <p className="text-base text-gf-text-muted">
            Explore 4 distinct, fully-equipped commodity pavilions featuring certified producers,
            live cupping labs, and dedicated B2B negotiation lounges.
          </p>
        </div>

        {/* 4-Card Asymmetric Bento Grid (Greenflow Layout) */}
        <div className="space-y-6">
          
          {/* Card 1 (Full-Width Top Hero Card) */}
          <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[340px] sm:min-h-[380px] flex items-end p-6 sm:p-10 bg-gf-primary">
            <img
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1600&q=80"
              alt="Highland Orthodox White Needle Tea and Shade-Grown Arabica Coffee"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gf-primary via-gf-primary/65 to-transparent" />
            
            <div className="relative z-10 max-w-2xl text-white space-y-3.5">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gf-secondary text-white font-mono font-bold text-xs">
                  01
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gf-accent-mint bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  Specialty High Altitude
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                High-Altitude Orthodox Tea & Single-Estate Arabica Pavilion
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                First-flush white needle teas and organic orthodox leaf from Ilam and Dhankuta estates (2,150m),
                alongside micro-lot shade-grown specialty Arabica coffees from Nuwakot and Lalitpur. Daily live cupping sessions.
              </p>
              <div className="pt-2">
                <a href="#pricing" className="gf-btn-white text-xs sm:text-sm">
                  <span>Explore Pavilion Exhibitors</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 2-Column Split Cards (Card 2 & Card 3) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Card 2 (Left) */}
            <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[350px] sm:min-h-[360px] flex items-end p-6 sm:p-8 bg-gf-primary">
              <img
                src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1000&q=80"
                alt="Wild Himalayan Botanicals, Timur Pepper and Essential Distillates"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gf-primary via-gf-primary/70 to-transparent" />
              
              <div className="relative z-10 text-white space-y-3.5">
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gf-secondary text-white font-mono font-bold text-xs">
                    02
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gf-accent-mint bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Bio-Active Botanicals
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Medicinal Himalayan Botanicals & Steam Distillation Hub
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                  Wild-harvested high-pungency Timur pepper, pure Shilajit extract, Chiraito, Lemongrass,
                  and GC/MS certified steam-distilled essential oils from Karnali, Humla, and Mustang.
                </p>
                <div className="pt-2">
                  <a href="#pricing" className="gf-btn-white text-xs">
                    <span>View Sourcing Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 (Right) */}
            <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[350px] sm:min-h-[360px] flex items-end p-6 sm:p-8 bg-gf-primary">
              <img
                src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1000&q=80"
                alt="Wild Himalayan Cliff Honey & Ancient Superfoods"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gf-primary via-gf-primary/70 to-transparent" />
              
              <div className="relative z-10 text-white space-y-3.5">
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gf-secondary text-white font-mono font-bold text-xs">
                    03
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gf-accent-mint bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Alpine Superfoods
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Rare Cliff Honey, Jumla Marsi & Alpine Superfoods
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                  Raw Annapurna cliff honey, mineral-dense Jumla Marsi red rice, Tartary buckwheat flour,
                  and high-altitude mountain beans certified with full DNA and pesticide-free testing.
                </p>
                <div className="pt-2">
                  <a href="#pricing" className="gf-btn-white text-xs">
                    <span>View Sourcing Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Card 4 (Full-Width Bottom Card) */}
          <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[320px] sm:min-h-[340px] flex items-end p-6 sm:p-10 bg-gf-primary">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80"
              alt="Terai Heritage Agriculture, Black Cardamom and Global Bio-Certification"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gf-primary via-gf-primary/65 to-transparent" />
            
            <div className="relative z-10 max-w-2xl text-white space-y-3.5">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gf-secondary text-white font-mono font-bold text-xs">
                  04
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gf-accent-mint bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  Agro-Ecology & Export Desks
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Terai Agro-Ecology, Large Cardamom & Global Bio-Certification
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                Smoked & unsmoked Taplejung Large Black Cardamom (Alaichi), Terai organic Moringa & aromatic paddy,
                alongside accredited EU Bio and USDA NOP quarantine and export readiness desks.
              </p>
              <div className="pt-2">
                <a href="#pricing" className="gf-btn-white text-xs sm:text-sm">
                  <span>Explore AgriTech Exhibitors</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
}
