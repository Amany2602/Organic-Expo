"use client";

import React from "react";
import { ArrowRight, ShieldCheck, DollarSign, Mountain, FileCheck2 } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "100% Certified Origin Guarantee",
    desc: "Every single lot is backed by rigorous third-party organic certification, pesticide-free lab testing, and complete provenance documentation.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Direct Sourcing at Source Pricing",
    desc: "Connect directly with estate owners and smallholder cooperatives, eliminating intermediaries to ensure transparent, fair-trade commercial contracts.",
    icon: DollarSign,
  },
  {
    number: "03",
    title: "High-Altitude Bioactive Potency",
    desc: "Pristine Himalayan soils, cold night cycles, and high UV microclimates generate measurably superior essential oil and polyphenol concentrations.",
    icon: Mountain,
  },
  {
    number: "04",
    title: "Dedicated Export & Quarantine Desks",
    desc: "On-site government phytosanitary inspectors, customs documentation specialists, and international air/sea freight logistics partners.",
    icon: FileCheck2,
  },
];

export function ValuePillars() {
  return (
    <section id="why-attend" className="py-20 lg:py-24 bg-white border-t border-gf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-5 space-y-6">
            <span className="gf-badge">Why Attend & Sourcing Advantage</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary leading-[1.1]">
              Practical Trade Advantage for <span className="text-gf-secondary">Global Buyers & Growers</span>
            </h2>

            <p className="text-base text-gf-text-muted leading-relaxed">
              We focus on measurable, high-value outcomes for commercial buyers and local producers.
              Every pavilion, workshop, and networking session is built around actionable trade execution,
              quality verification, and sustainable mountain value chains.
            </p>

            <div className="pt-2">
              <a href="#process" className="gf-btn-primary">
                <span>Register for B2B Matchmaking</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of 4 Structured White Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="gf-card p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-gf-secondary/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-gf-accent-mint">
                      {pillar.number}.
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-gf-bg-tint flex items-center justify-center text-gf-secondary">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gf-primary leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gf-text-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
