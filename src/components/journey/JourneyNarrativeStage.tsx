"use client";

import React from "react";
import { ProductionJourneyStage } from "./types";
import { PRODUCTION_JOURNEY_STAGES } from "@/lib/data/journey";
import { ArrowRight, Globe2, Compass, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface JourneyNarrativeStageProps {
  stage: ProductionJourneyStage;
  activeStageIndex: number;
  onAdvance: () => void;
  onPrevious: () => void;
  isFirstStage: boolean;
  isLastStage: boolean;
}

export function JourneyNarrativeStage({
  stage,
  activeStageIndex,
  onAdvance,
  onPrevious,
  isFirstStage,
  isLastStage,
}: JourneyNarrativeStageProps) {
  return (
    <article className="space-y-6 lg:space-y-8 animate-in fade-in duration-300">
      {/* Kicker & Number Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-3 py-1 rounded-pill font-bold tracking-wider text-leaf-300 border border-leaf-500/40 bg-forest-900">
            {stage.number}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-cream-300/80 font-medium">
            {stage.kicker}
          </span>
        </div>

        {/* Semantic H2 Stage Title */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-cream-50 leading-[1.08]">
          {stage.title}
        </h2>

        {/* Stage Subtitle */}
        <p className="font-sans text-xs sm:text-sm text-leaf-300 font-medium tracking-wide uppercase">
          {stage.subtitle}
        </p>
      </div>

      {/* Signature Narrative Statement */}
      <div className="pl-5 border-l-2 border-leaf-400 py-2 bg-forest-900/60 rounded-r-2xl">
        <blockquote className="font-display text-lg sm:text-xl text-cream-100 italic font-light leading-relaxed">
          &ldquo;{stage.statement}&rdquo;
        </blockquote>
      </div>

      {/* Narrative Description */}
      <p className="text-cream-200/90 font-light text-base sm:text-lg leading-relaxed max-w-xl">
        {stage.description}
      </p>

      {/* Key Verification & Terroir Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {stage.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-3.5 bg-forest-900/80 border border-forest-800 rounded-xl space-y-1"
          >
            <span className="font-mono text-[10px] text-cream-400 uppercase tracking-wider block">
              {metric.label}
            </span>
            <span className="font-mono text-base font-bold text-cream-50 block">
              {metric.value}
            </span>
            {metric.subtext && (
              <span className="font-sans text-[11px] text-cream-300/80 font-light block">
                {metric.subtext}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Stage Navigation & Advance Actions */}
      <div className="flex flex-wrap items-center gap-3 pt-3">
        {!isFirstStage && (
          <Button
            variant="outline"
            size="md"
            onClick={onPrevious}
            className="text-cream-100 border-forest-700 hover:bg-forest-800 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Previous Stage</span>
          </Button>
        )}

        {!isLastStage ? (
          <Button
            variant="leaf"
            size="md"
            onClick={onAdvance}
            className="gap-2"
          >
            <span>Advance to {PRODUCTION_JOURNEY_STAGES[activeStageIndex + 1]?.label}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Button>
        ) : (
          <Button
            variant="leaf"
            size="md"
            href="#ecosystem-intro"
            className="gap-2"
          >
            <span>Explore Ecosystem Architecture</span>
            <Globe2 className="w-4 h-4 text-white" />
          </Button>
        )}

        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-cream-400 pl-2">
          <Compass className="w-3.5 h-3.5 text-leaf-400" />
          <span>Keys: 1–5 or arrows</span>
        </div>
      </div>
    </article>
  );
}
