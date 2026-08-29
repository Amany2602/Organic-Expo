"use client";

import React from "react";
import { ArrowRight, Leaf, Sparkles, Droplets, Mountain, Cpu } from "lucide-react";

export function PavilionsGrid() {
  return (
    <section id="pavilions" className="py-16 sm:py-24 bg-gf-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
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
          <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[300px] sm:min-h-[340px] flex items-end p-6 sm:p-10 bg-gf-primary">
            <img
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1600&q=80"
              alt="Highland Orthodox Tea and Specialty Coffee"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gf-primary via-gf-primary/60 to-transparent" />
            
            <div className="relative z-10 max-w-2xl text-white space-y-3">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gf-secondary text-white font-mono font-bold text-xs">
                01
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Highland Orthodox Tea & Specialty Arabica Coffee Pavilion
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                Single-estate orthodox black, green, and white teas from Ilam and Dhankuta, alongside shade-grown
                specialty Arabica coffees from Nuwakot, Gulmi, and Lalitpur. Features daily live cupping sessions.
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
            <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[320px] flex items-end p-6 sm:p-8 bg-gf-primary">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80"
                alt="Medicinal Himalayan Herbs & Essential Oils"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gf-primary via-gf-primary/70 to-transparent" />
              
              <div className="relative z-10 text-white space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gf-secondary text-white font-mono font-bold text-xs">
                  02
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Medicinal Himalayan Herbs & Essential Oils Hub
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                  Wild-crafted and certified cultivated botanicals: Timur pepper, Lemongrass, Chamomile,
                  and steam-distilled essential oils from Karnali, Humla, and Mustang.
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
            <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[320px] flex items-end p-6 sm:p-8 bg-gf-primary">
              <img
                src="https://images.unsplash.com/photo-1592417817098-8f3d6eb22513?auto=format&fit=crop&w=1000&q=80"
                alt="Himalayan Superfoods & Heritage Grains"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gf-primary via-gf-primary/70 to-transparent" />
              
              <div className="relative z-10 text-white space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gf-secondary text-white font-mono font-bold text-xs">
                  03
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Himalayan Superfoods & Heritage Grains Pavilion
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                  Nutrient-rich Jumla red beans, high-altitude tartary buckwheat, finger millet, large cardamom,
                  and raw cliff honey certified with complete farm-to-jar traceability.
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
          <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[280px] sm:min-h-[300px] flex items-end p-6 sm:p-10 bg-gf-primary">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
              alt="AgriTech, Bio-Fertilizers and Global Certification"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gf-primary via-gf-primary/60 to-transparent" />
            
            <div className="relative z-10 max-w-2xl text-white space-y-3">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gf-secondary text-white font-mono font-bold text-xs">
                04
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                AgriTech, Bio-Fertilizers & International Certification Hub
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                Smart solar cold-chain systems, organic bio-inputs, precision soil testing IoT, and accredited
                auditing bodies providing immediate phytosanitary and export compliance guidance.
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
