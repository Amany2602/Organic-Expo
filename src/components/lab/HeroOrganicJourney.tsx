"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { InteractiveLink } from "@/components/ui/InteractiveLink";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ChevronRight, Layers, Sprout, Factory, CheckCircle2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    id: "soil",
    step: "01",
    label: "SOIL",
    title: "Living Terroir & Indigenous Microbial Soil",
    tagline: "Where the ecosystem begins — untouched Himalayan humus and regenerative earth.",
    metrics: "Altitude: 1,200m - 3,500m // Organic Matter: 4.8% // Bio-Active",
    bgClass: "bg-[#18120D] text-soil-50",
    accentClass: "text-soil-300",
    badge: "STAGE 01 : UNTREATED EARTH",
    icon: Layers,
  },
  {
    id: "farm",
    step: "02",
    label: "FARM",
    title: "High-Altitude Poly-Cultivation & Wildcrafting",
    tagline: "Smallholder mountain terraces practicing chemical-free, traditional farming.",
    metrics: "Agro-Regions: 77 Districts // Traditional Heirlooms: 140+ Varieties",
    bgClass: "bg-[#081A12] text-soil-50",
    accentClass: "text-forest-300",
    badge: "STAGE 02 : BOTANICAL CROPS",
    icon: Sprout,
  },
  {
    id: "process",
    step: "03",
    label: "PROCESS",
    title: "Clean Artisanal & Modern Processing",
    tagline: "Cold-pressing, solar drying, and precision packaging preserving bio-potency.",
    metrics: "Traceability: Batch-Level // Zero Additives",
    bgClass: "bg-[#172938] text-soil-50",
    accentClass: "text-mist-300",
    badge: "STAGE 03 : HARVEST & REFINEMENT",
    icon: Factory,
  },
  {
    id: "cert",
    step: "04",
    label: "CERTIFY",
    title: "Organic Nepal Verified™ Protocol",
    tagline: "Rigorous standards confirming purity, chemical absence, and ethical sourcing.",
    metrics: "Standards: IFOAM Aligned // 3 Verification Tiers",
    bgClass: "bg-[#2B2005] text-soil-50",
    accentClass: "text-gold-300",
    badge: "STAGE 04 : AUTHENTICATION",
    icon: CheckCircle2,
  },
  {
    id: "market",
    step: "05",
    label: "WORLD",
    title: "Global Ethical Commerce & Trade",
    tagline: "Exporting high-value Himalayan tea, coffee, honey, and herbs to international buyers.",
    metrics: "Target Buyers: 20+ Global Markets // B2B Platform",
    bgClass: "bg-[#0C0907] text-soil-50",
    accentClass: "text-paper-200",
    badge: "STAGE 05 : GLOBAL DESTINATION",
    icon: Globe,
  },
];

export function HeroOrganicJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = STAGES[activeStageIndex];

  return (
    <div
      className={cn(
        "relative min-h-[92vh] w-full transition-colors duration-700 flex flex-col justify-between overflow-hidden border border-soil-800 rounded-xs select-none",
        currentStage.bgClass
      )}
    >
      {/* Editorial Header Navigation */}
      <nav className="w-full px-6 sm:px-10 py-6 flex items-center justify-between border-b border-white/10 z-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-gold-400 font-bold tracking-widest uppercase">
            [ JOURNEY ARCHITECTURE ]
          </span>
          <span className="font-display font-bold text-lg tracking-tight uppercase text-soil-50">
            Organic Expo Nepal 2026
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="opacity-60 hidden sm:inline">Active Chapter:</span>
          <span className="font-bold text-gold-300 uppercase">
            {currentStage.step} / {currentStage.label}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="gold" size="sm">
            Enter Expo 2026
          </Button>
        </div>
      </nav>

      {/* Narrative Interactive Hero Canvas */}
      <div className="flex-grow relative flex items-center py-12 lg:py-16 z-10">
        <Container className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative Block */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="inverse">{currentStage.badge}</Badge>
                  <span className="font-mono text-xs opacity-60">Interactive Journey Prototype</span>
                </div>

                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-normal text-soil-50">
                  {currentStage.title}
                </h1>
              </div>

              <p className="text-base sm:text-xl font-light opacity-90 max-w-2xl leading-relaxed">
                {currentStage.tagline}
              </p>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xs font-mono text-xs space-y-1 max-w-xl">
                <span className="text-[10px] uppercase opacity-50 block">Scientific & Regional Metadata</span>
                <p className="text-gold-200">{currentStage.metrics}</p>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() =>
                    setActiveStageIndex((prev) => (prev + 1) % STAGES.length)
                  }
                  className="gap-2"
                >
                  Advance to Next Stage ({STAGES[(activeStageIndex + 1) % STAGES.length].label}){" "}
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <InteractiveLink href="#expo" variant="inverse">
                  Skip to Event Directory
                </InteractiveLink>
              </div>
            </div>

            {/* Right Interactive Scrubber Stage Visualizer */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 bg-black/40 border border-white/15 rounded-xs space-y-6">
                <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-3">
                  <span className="uppercase text-gold-300 font-semibold">Narrative Timeline</span>
                  <span className="opacity-60">{activeStageIndex + 1} of 5 Chapters</span>
                </div>

                <div className="space-y-2">
                  {STAGES.map((stage, idx) => {
                    const Icon = stage.icon;
                    const isActive = idx === activeStageIndex;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setActiveStageIndex(idx)}
                        className={cn(
                          "w-full px-4 py-3 rounded-xs text-left font-mono text-xs flex items-center justify-between transition-all cursor-pointer border",
                          isActive
                            ? "bg-white/15 border-gold-400 text-soil-50 shadow-sm"
                            : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={cn("w-4 h-4", isActive ? "text-gold-300" : "opacity-60")} />
                          <span>
                            {stage.step} — {stage.label}
                          </span>
                        </div>
                        {isActive && <ChevronRight className="w-4 h-4 text-gold-300 animate-pulse" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Scrubber Bar */}
      <div className="px-6 sm:px-10 py-4 bg-black/30 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/70 gap-3 z-20">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-soil-50">FROM NEPAL&apos;S SOIL TO THE WORLD</span>
          <span>{"//"}</span>
          <span>5-STAGE ECOSYSTEM CONTINUUM</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Click stages to preview narrative transitions</span>
        </div>
      </div>
    </div>
  );
}
