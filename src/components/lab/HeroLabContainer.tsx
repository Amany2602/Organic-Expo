"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { HeroTerrain } from "@/components/lab/HeroTerrain";
import { HeroOrganicJourney } from "@/components/lab/HeroOrganicJourney";
import { HeroGlobalSignal } from "@/components/lab/HeroGlobalSignal";
import { Compass, Layers, Globe2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroDirection = "terrain" | "journey" | "signal";

const EVALUATION_DATA: Record<
  HeroDirection,
  {
    title: string;
    concept: string;
    strength: string;
    risk: string;
    complexity: "Low" | "Medium" | "High";
    perfRisk: "Low" | "Medium" | "High";
    recommendedFor: string;
  }
> = {
  terrain: {
    title: "Direction A: The Terrain (Cartography & Terroir)",
    concept: "Treats Nepal's mountain topography, elevation gradients (60m-8,848m), and agricultural terraces as the interactive interface.",
    strength: "Deep sense of geological authenticity and Himalayan authority. Avoids generic green stock imagery while feeling intensely custom-designed.",
    risk: "If over-abstracted, could lean toward a geographic institute rather than an agro-business trade expo.",
    complexity: "Low",
    perfRisk: "Low",
    recommendedFor: "Brand-first storytelling emphasizing Himalayan biodiversity and terroir purity.",
  },
  journey: {
    title: "Direction B: The Organic Journey (Cinematic Continuum)",
    concept: "Transforms the hero into an active 5-chapter continuum: Soil → Farm → Process → Certification → Global Market.",
    strength: "Directly articulates the product constitution. Educates visitors on the entire value chain while providing an unforgettable interactive entry point.",
    risk: "Requires user interaction or scroll to see subsequent stages if they do not explore the scrubber.",
    complexity: "Medium",
    perfRisk: "Low",
    recommendedFor: "Narrative-driven visitor journey connecting farmers, certification standards, and market.",
  },
  signal: {
    title: "Direction C: The Global Signal (Trade Network Matrix)",
    concept: "Positions Nepal as an active origin node radiating organic products, export corridors, and investment pipelines into the international market.",
    strength: "Highest B2B credibility for global buyers, distributors, hotels, and institutional investors. Immediately dispels any 'local bazaar' impression.",
    risk: "Could feel more trade/corporate-skewed if consumer and smallholder farmer charm isn't balanced in lower sections.",
    complexity: "Low",
    perfRisk: "Low",
    recommendedFor: "B2B trade platform positioning, international buyer recruitment, and export matchmaking.",
  },
};

export function HeroLabContainer() {
  const [activeDirection, setActiveDirection] = useState<HeroDirection>("terrain");
  const currentEvaluation = EVALUATION_DATA[activeDirection];

  return (
    <div className="space-y-12">
      {/* Laboratory Control Bar */}
      <div className="bg-soil-100/90 border border-soil-300/70 p-6 rounded-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <Eyebrow step="LAB" withDot variant="forest">
              Prototype Evaluation Mode
            </Eyebrow>
            <Heading as="h2" size="h3" font="display">
              Hero Experience Laboratory
            </Heading>
            <Text size="body-small" tone="muted">
              Compare 3 radically different compositional philosophies for the 2026 flagship entry point.
            </Text>
          </div>

          {/* Direction Switcher Controls */}
          <div className="flex items-center gap-2 bg-soil-200/80 p-1.5 rounded-xs border border-soil-300/60">
            <button
              type="button"
              onClick={() => setActiveDirection("terrain")}
              className={cn(
                "px-3.5 py-2 text-xs font-mono font-medium rounded-xs flex items-center gap-2 transition-all cursor-pointer",
                activeDirection === "terrain"
                  ? "bg-forest-900 text-soil-50 shadow-xs"
                  : "text-soil-800 hover:text-soil-950 hover:bg-soil-100"
              )}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>A / TERRAIN</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDirection("journey")}
              className={cn(
                "px-3.5 py-2 text-xs font-mono font-medium rounded-xs flex items-center gap-2 transition-all cursor-pointer",
                activeDirection === "journey"
                  ? "bg-forest-900 text-soil-50 shadow-xs"
                  : "text-soil-800 hover:text-soil-950 hover:bg-soil-100"
              )}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>B / ORGANIC JOURNEY</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDirection("signal")}
              className={cn(
                "px-3.5 py-2 text-xs font-mono font-medium rounded-xs flex items-center gap-2 transition-all cursor-pointer",
                activeDirection === "signal"
                  ? "bg-forest-900 text-soil-50 shadow-xs"
                  : "text-soil-800 hover:text-soil-950 hover:bg-soil-100"
              )}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>C / GLOBAL SIGNAL</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Prototype Render Container */}
      <div className="w-full">
        {activeDirection === "terrain" && <HeroTerrain />}
        {activeDirection === "journey" && <HeroOrganicJourney />}
        {activeDirection === "signal" && <HeroGlobalSignal />}
      </div>

      {/* Developer & Architectural Evaluation Panel */}
      <div className="bg-surface border border-soil-300 p-6 sm:p-8 rounded-xs space-y-6 shadow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-soil-200">
          <div>
            <span className="font-mono text-xs text-forest-700 uppercase font-semibold">
              Evaluation Metrics
            </span>
            <h3 className="font-display text-2xl font-bold text-soil-950">
              {currentEvaluation.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="neutral">
              Complexity: <strong>{currentEvaluation.complexity}</strong>
            </Badge>
            <Badge variant="certified">
              Perf Risk: <strong>{currentEvaluation.perfRisk}</strong>
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
          <div className="space-y-1.5 p-4 bg-soil-50 border border-soil-200 rounded-xs">
            <span className="font-mono uppercase font-bold text-soil-900 block">
              Core Concept
            </span>
            <p className="text-soil-700">{currentEvaluation.concept}</p>
          </div>

          <div className="space-y-1.5 p-4 bg-soil-50 border border-soil-200 rounded-xs">
            <span className="font-mono uppercase font-bold text-forest-800 block">
              Distinctive Strength
            </span>
            <p className="text-soil-700">{currentEvaluation.strength}</p>
          </div>

          <div className="space-y-1.5 p-4 bg-soil-50 border border-soil-200 rounded-xs">
            <span className="font-mono uppercase font-bold text-gold-800 block">
              Identified Risk
            </span>
            <p className="text-soil-700">{currentEvaluation.risk}</p>
          </div>
        </div>

        <div className="pt-2 text-xs font-mono text-soil-600 flex items-center gap-2">
          <span className="font-bold text-soil-900 uppercase">Strategic Recommendation:</span>
          <span>{currentEvaluation.recommendedFor}</span>
        </div>
      </div>
    </div>
  );
}
