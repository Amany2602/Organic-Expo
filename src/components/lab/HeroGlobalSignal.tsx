"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { InteractiveLink } from "@/components/ui/InteractiveLink";
import { Badge } from "@/components/ui/Badge";
import { Globe, ArrowUpRight, Activity, Zap, Compass, Building2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTORS = [
  { id: "tea", label: "Orthodox Tea & Coffee", code: "EXP-TEA-01", target: "EU / North America / Japan", activeDemand: "High Bio-Grade" },
  { id: "herbs", label: "Medicinal Herbs & Spices", code: "EXP-HRB-02", target: "Global Wellness / Pharma", activeDemand: "Certified Organic" },
  { id: "honey", label: "Highland & Cliff Honey", code: "EXP-HNY-03", target: "Middle East / East Asia", activeDemand: "Raw / Unfiltered" },
  { id: "dairy", label: "Churpi & Himalayan Dairy", code: "EXP-DRY-04", target: "North America / Regional", activeDemand: "Sustainable Living" },
];

export function HeroGlobalSignal() {
  const [selectedSector, setSelectedSector] = useState(SECTORS[0]);

  return (
    <div className="relative min-h-[92vh] w-full bg-forest-950 text-soil-50 flex flex-col justify-between overflow-hidden border border-forest-800 rounded-xs select-none dark-topographic-grid">
      {/* Editorial Minimal Navigation */}
      <nav className="w-full px-6 sm:px-10 py-6 flex items-center justify-between border-b border-forest-800/80 z-20">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          <span className="font-display font-bold text-lg tracking-tight uppercase text-soil-50">
            Organic Expo Nepal 2026
          </span>
          <span className="font-mono text-[10px] bg-forest-900 border border-forest-700/60 px-2 py-0.5 text-forest-200">
            GLOBAL TRADE HUB
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-mono text-xs text-forest-200/80 uppercase tracking-widest">
          <span>ORIGIN: KATHMANDU (NPL)</span>
          <span>{"//"}</span>
          <span>B2B MATCHMAKING PORTAL</span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="gold" size="sm">
            Buyer Registration
          </Button>
        </div>
      </nav>

      {/* Main Signal Canvas */}
      <div className="flex-grow relative flex items-center py-12 lg:py-16 z-10">
        <Container className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Col: High-Authority Trade Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <Eyebrow variant="inverse" step="GLOBAL" withDot>
                  Trade & Investment Platform
                </Eyebrow>

                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.03em] font-normal text-soil-50">
                  Nepal to the{" "}
                  <span className="block italic font-light text-gold-300">
                    Global Market.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-forest-100/80 font-light max-w-xl leading-relaxed">
                Positioning Nepal’s verified organic products at the center of international
                commerce. A dedicated trade pipeline connecting mountain producers directly to
                importers, distributors, retail networks, and ethical investment capital.
              </p>

              {/* Action Cluster */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button variant="gold" size="lg" className="gap-2">
                  Access Buyer Network <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button variant="inverse" size="lg">
                  Exhibitor Opportunities
                </Button>
              </div>

              {/* Trade Indicators */}
              <div className="pt-6 border-t border-forest-800/80 grid grid-cols-3 gap-4 max-w-lg font-mono text-xs text-forest-200/90">
                <div>
                  <span className="text-forest-400 block text-[10px] uppercase">Buyers Targeted</span>
                  <span className="font-semibold text-gold-300 text-sm">20–30 Int&apos;l</span>
                </div>
                <div>
                  <span className="text-forest-400 block text-[10px] uppercase">Exhibitor Goal</span>
                  <span className="font-semibold text-soil-50 text-sm">50–100 Brands</span>
                </div>
                <div>
                  <span className="text-forest-400 block text-[10px] uppercase">Verification</span>
                  <span className="font-semibold text-forest-300 text-sm">Certified Only</span>
                </div>
              </div>
            </div>

            {/* Right Col: Global Signal Network Matrix */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="p-6 bg-forest-900/80 border border-forest-700/60 rounded-xs space-y-6 shadow-dark-card">
                <div className="flex items-center justify-between border-b border-forest-800 pb-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-gold-300">
                    <Activity className="w-4 h-4" />
                    <span>EXPORT SECTOR CHANNELS</span>
                  </div>
                  <span className="text-forest-400 text-[10px]">LIVE MATRIX</span>
                </div>

                {/* Sector Selector Buttons */}
                <div className="grid grid-cols-1 gap-2">
                  {SECTORS.map((sector) => {
                    const isSelected = selectedSector.id === sector.id;
                    return (
                      <button
                        key={sector.id}
                        type="button"
                        onClick={() => setSelectedSector(sector)}
                        className={cn(
                          "w-full px-4 py-3 rounded-xs text-left font-mono text-xs flex items-center justify-between transition-all cursor-pointer border",
                          isSelected
                            ? "bg-gold-500/20 border-gold-400 text-gold-200"
                            : "bg-forest-950/60 border-forest-800 text-forest-200/70 hover:bg-forest-950 hover:text-forest-100"
                        )}
                      >
                        <div className="space-y-0.5">
                          <p className="font-sans font-semibold text-sm text-soil-50">{sector.label}</p>
                          <p className="text-[10px] text-forest-400 font-mono">{sector.code} → {sector.target}</p>
                        </div>
                        <span className="font-mono text-[10px] uppercase bg-forest-800 px-2 py-0.5 rounded-xs text-forest-200">
                          {sector.activeDemand}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Live Channel Detail Card */}
                <div className="p-4 bg-forest-950 border border-gold-500/30 rounded-xs space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-[10px] text-forest-400">
                    <span>ACTIVE MATCHMAKING CORRIDOR</span>
                    <span className="text-gold-300">READY FOR 2026</span>
                  </div>
                  <p className="text-sm font-sans font-medium text-soil-50">
                    Connecting Nepalese {selectedSector.label} producers with verified international purchasing delegations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Signal Footer Bar */}
      <div className="px-6 sm:px-10 py-4 bg-forest-950/90 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-forest-300/70 gap-2 z-20">
        <div className="flex items-center gap-3">
          <span>KATHMANDU ORIGIN NODE</span>
          <span>{"//"}</span>
          <span>GLOBAL DISTRIBUTION CORRIDORS</span>
        </div>
        <div className="flex items-center gap-6">
          <InteractiveLink href="#business" variant="inverse">
            Explore Buyer Matchmaking
          </InteractiveLink>
        </div>
      </div>
    </div>
  );
}
