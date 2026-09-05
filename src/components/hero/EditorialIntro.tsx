"use client";

import React from "react";
import { ArrowRight, Phone, Award, ShieldCheck, CheckCircle2, Sprout } from "lucide-react";
import { RotatingStamp } from "@/components/ui/RotatingStamp";

export function EditorialIntro() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-6 space-y-6">
            <span className="gf-badge">About The Exposition</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary leading-[1.1]">
              Unlocking the World-Class Potential of <span className="text-gf-secondary">Himalayan Organic Terroir</span>
            </h2>

            <p className="text-base text-gf-text-muted leading-relaxed">
              Nepal holds a unique competitive advantage in the global organic economy. With pristine mountain soils,
              glacier-fed watersheds, and traditional non-chemical farming practices across 7 diverse ecological zones,
              our high-altitude produce yields exceptional bioactive density and aroma.
            </p>

            <p className="text-base text-gf-text-muted leading-relaxed">
              The <strong>Nepal Organic Exposition 2026</strong> bridges the gap between rural Himalayan grower cooperatives
              and international procurement directors. We offer full export documentation, phytosanitary verification desks,
              and pre-vetted B2B match-making on site.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gf-primary">
                <CheckCircle2 className="w-4 h-4 text-gf-secondary shrink-0" />
                <span>100% Traceable Single-Estate & Cooperative Lots</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gf-primary">
                <CheckCircle2 className="w-4 h-4 text-gf-secondary shrink-0" />
                <span>On-Site Phytosanitary & Export Quarantine Liaison</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gf-primary">
                <CheckCircle2 className="w-4 h-4 text-gf-secondary shrink-0" />
                <span>Direct Farmer Equity & Fair-Trade Pricing Models</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="#pavilions" className="gf-btn-primary">
                <span>Explore Sourcing Pavilions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 2-Photo Composition with Floating Badge & Secretariat Card */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Left Big Photo with Floating Experience Pill & Rotating Stamp */}
            <div className="relative rounded-[20px] overflow-hidden shadow-md group aspect-[3/4] sm:aspect-auto bg-gf-primary/10">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
                alt="Certified Organic Farmer in Nepal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gf-primary/80 via-transparent to-transparent" />
              
              {/* Floating Rotating Seal on Photo */}
              <div className="absolute top-4 right-4 z-20">
                <RotatingStamp
                  dark={true}
                  size={100}
                  text="• DIRECT SOURCING • 100% ORGANIC • NEPAL •"
                />
              </div>
              
              {/* Floating Dark Green Experience Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-gf-primary/95 backdrop-blur-md text-white p-4 rounded-2xl border border-gf-border-dark shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gf-secondary flex items-center justify-center text-white shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">1st National Edition</p>
                    <p className="text-[11px] text-gf-accent-sage">7 Mountain Provinces</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Top Smaller Photo + Bottom Contact Card */}
            <div className="flex flex-col gap-4">
              
              {/* Top Photo: Quality Lab / Inspection */}
              <div className="relative rounded-[20px] overflow-hidden shadow-md group aspect-[4/3] bg-gf-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80"
                  alt="High-Altitude Organic Crop Quality Inspection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Secretariat Contact Card (Dark Green) */}
              <div className="rounded-[20px] bg-gf-primary text-white p-6 border border-gf-border-dark flex flex-col justify-between space-y-4 shadow-md flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gf-secondary flex items-center justify-center text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gf-accent-sage tracking-wider block">Direct Desk</span>
                    <h3 className="text-sm font-bold text-white">Secretariat Helpline</h3>
                  </div>
                </div>

                <div>
                  <a
                    href="tel:+977014220000"
                    className="font-mono text-base font-bold text-gf-peach hover:underline block"
                  >
                    +977 01-4220000
                  </a>
                  <p className="text-xs text-gray-300 mt-1 leading-snug">
                    Assistance with stall booking, booth logistics, or buyer delegation visas.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
