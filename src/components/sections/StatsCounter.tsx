"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle2, Globe2, Sparkles } from "lucide-react";

const CERTIFICATIONS = [
  { name: "Nepal Organic Verified", tag: "National Standard", icon: ShieldCheck },
  { name: "EU Organic Equivalent", tag: "Regulation (EU) 2018/848", icon: Award },
  { name: "USDA Organic (NOP)", tag: "7 CFR Part 205", icon: CheckCircle2 },
  { name: "JAS Organic Japan", tag: "MAFF Standard", icon: Globe2 },
  { name: "National Tea & Coffee Board", tag: "Nepal Government", icon: Sparkles },
  { name: "Himalayan Herbal Guild", tag: "Phytosanitary Verified", icon: ShieldCheck },
];

export function StatsCounter() {
  return (
    <section className="bg-white border-y border-gf-border py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-gf-text-muted mb-8">
          Recognized & Certified by Leading National & Global Standards
        </p>

        {/* Logo / Badge Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {CERTIFICATIONS.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gf-bg-warm border border-gf-border hover:border-gf-secondary/40 hover:bg-gf-bg-tint transition-all duration-300 group text-center min-h-[108px] h-full shadow-2xs hover:shadow-sm"
              >
                <Icon className="w-5 h-5 text-gf-text-muted group-hover:text-gf-secondary transition-colors mb-2 shrink-0" />
                <span className="text-xs font-bold text-gf-primary group-hover:text-gf-secondary transition-colors leading-tight">
                  {cert.name}
                </span>
                <span className="text-[10px] text-gf-text-muted mt-1 font-medium leading-tight">
                  {cert.tag}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
