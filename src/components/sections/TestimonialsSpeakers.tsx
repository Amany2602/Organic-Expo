"use client";

import React from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Sourcing high-altitude orthodox black and white teas directly from Ilam estates through this platform was seamless. The on-site cupping labs and phytosanitary clearance desks saved our Hamburg import firm weeks of logistics.",
    author: "Klaus Von Bergmann",
    role: "Head of Specialty Sourcing",
    company: "Hanseatic Tea Importers (Hamburg, Germany)",
    rating: 5,
    country: "Germany",
  },
  {
    quote:
      "The wild-crafted medicinal herbs and steam-distilled essential oils from Karnali Province demonstrated bio-active purity levels that far exceeded our Japanese cosmetic grade benchmarks. Highly professional trade setup.",
    author: "Kenji Takahashi",
    role: "Managing Director",
    company: "Nippon Botanical Therapeutics (Tokyo, Japan)",
    rating: 5,
    country: "Japan",
  },
  {
    quote:
      "As an organic wholesaler in North America, direct provenance and pesticide-free guarantees are paramount. Nepal Organic Expo connected us directly with heritage grain cooperatives with full USDA-equivalent auditing.",
    author: "Elena Rostova",
    role: "Procurement Director",
    company: "Organic Valley Gateway (San Francisco, USA)",
    rating: 5,
    country: "United States",
  },
];

export function TestimonialsSpeakers() {
  return (
    <section className="py-20 lg:py-24 bg-gf-bg-warm border-t border-gf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="gf-badge">Global Buyer Endorsements</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary">
            Proven Trust, Measurable Results in <br className="hidden sm:block" />
            <span className="text-gf-secondary">Himalayan Organic Sourcing</span>
          </h2>
          <p className="text-sm sm:text-base text-gf-text-muted">
            All testimonials come directly from verified international organic importers and trade procurement leaders.
          </p>
        </div>

        {/* 3 Testimonial Cards (Greenflow Exact Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.author}
              className="gf-card p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-gf-secondary/50 bg-white h-full shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gf-accent-mint text-gf-accent-mint" />
                  ))}
                </div>

                {/* Quoted Feedback */}
                <p className="text-xs sm:text-sm text-gf-text leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Credential */}
              <div className="pt-4 border-t border-gf-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gf-bg-tint border border-gf-secondary/20 flex items-center justify-center font-bold text-xs text-gf-secondary shrink-0">
                  {item.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gf-primary leading-tight">
                    {item.author}
                  </h3>
                  <p className="text-[11px] text-gf-text-muted mt-0.5">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
