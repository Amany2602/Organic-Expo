"use client";

import React from "react";
import { ArrowRight, MapPin, Award, CheckCircle2 } from "lucide-react";

const EXHIBITORS = [
  {
    name: "Ilam High-Altitude Orthodox Tea Collective",
    region: "Ilam, Eastern Nepal · 2,150m Altitude",
    category: "Specialty Orthodox & White Tea",
    certifications: ["EU Organic", "USDA NOP", "JAS Japan"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mustang Wild Himalayan Herbal Distillers",
    region: "Mustang & Manang · 3,400m Altitude",
    category: "Essential Oils & Medicinal Botanicals",
    certifications: ["Wild-Crafted Certified", "ISO 22000"],
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Karnali Organic Superfoods & Jumla Bean Co-op",
    region: "Jumla, Karnali Province · 2,600m Altitude",
    category: "Heritage Grains & Wild Cliff Honey",
    certifications: ["Nepal Organic Verified", "Fair Trade"],
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22513?auto=format&fit=crop&w=800&q=80",
  },
];

export function ExhibitorShowcase() {
  return (
    <section id="exhibitors" className="py-16 sm:py-24 bg-gf-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Title and Right Pill Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-gf-border pb-6">
          <div className="space-y-2">
            <span className="gf-badge">Featured Sourcing Showcase</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary">
              Producers That Speak For Themselves
            </h2>
            <p className="text-sm sm:text-base text-gf-text-muted">
              Pre-vetted Himalayan growers, cooperatives, and estates ready for global export contracts.
            </p>
          </div>

          <a href="#pricing" className="gf-btn-primary shrink-0">
            <span>See All 150+ Exhibitors</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Dark Green Card Grid (Greenflow Exact Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXHIBITORS.map((exhibitor) => (
            <div
              key={exhibitor.name}
              className="gf-card-dark overflow-hidden flex flex-col justify-between group"
            >
              {/* Top Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gf-dark">
                <img
                  src={exhibitor.image}
                  alt={exhibitor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-gf-primary/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gf-accent-mint border border-gf-border-dark">
                  {exhibitor.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-gf-accent-sage">
                    <MapPin className="w-3.5 h-3.5 text-gf-accent-mint shrink-0" />
                    <span>{exhibitor.region}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {exhibitor.name}
                  </h3>
                </div>

                <div className="pt-3 border-t border-gf-border-dark flex flex-wrap gap-1.5">
                  {exhibitor.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-[10px] bg-white/10 text-gray-200 px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
