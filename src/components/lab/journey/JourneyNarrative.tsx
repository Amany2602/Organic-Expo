"use client";

import React from "react";
import { JOURNEY_STAGES, JourneyStageData } from "./types";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneyNarrativeProps {
  stage: JourneyStageData;
  progress: number;
  onAdvance: () => void;
  onPrevious: () => void;
  isFirstStage: boolean;
  isLastStage: boolean;
  isReducedMotion?: boolean;
}

export function JourneyNarrative({
  stage,
  progress,
  onAdvance,
  onPrevious,
  isFirstStage,
  isLastStage,
  isReducedMotion = false,
}: JourneyNarrativeProps) {
  const nextStage = !isLastStage ? JOURNEY_STAGES[stage.index + 1] : null;

  return (
    <div
      className="relative w-full space-y-6 lg:space-y-8 z-10 select-none"
      style={{
        opacity: isReducedMotion ? 1 : 0.85 + (1 - (progress % 1)) * 0.15,
      }}
    >
      {/* Anchor Statement: "FROM NEPAL'S SOIL TO THE WORLD"
          Unfolds spatially according to current stage */}
      <div className="border-b border-white/10 pb-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="text-gold-400 font-bold">FROM NEPAL&apos;S</span>
          <span
            className={cn(
              "px-1.5 py-0.5 rounded-xs transition-all duration-500",
              stage.id === "soil"
                ? "bg-soil-500/30 text-soil-200 border border-soil-400/40 font-bold"
                : "text-white/40"
            )}
          >
            SOIL
          </span>
          <span className="text-white/30">→</span>
          <span
            className={cn(
              "px-1.5 py-0.5 rounded-xs transition-all duration-500",
              stage.id === "farm"
                ? "bg-forest-600/30 text-forest-200 border border-forest-400/40 font-bold"
                : "text-white/40"
            )}
          >
            CULTIVATION
          </span>
          <span className="text-white/30">→</span>
          <span
            className={cn(
              "px-1.5 py-0.5 rounded-xs transition-all duration-500",
              stage.id === "process"
                ? "bg-mist-600/30 text-mist-200 border border-mist-400/40 font-bold"
                : "text-white/40"
            )}
          >
            REFINEMENT
          </span>
          <span className="text-white/30">→</span>
          <span
            className={cn(
              "px-1.5 py-0.5 rounded-xs transition-all duration-500",
              stage.id === "certification"
                ? "bg-gold-600/30 text-gold-200 border border-gold-400/40 font-bold"
                : "text-white/40"
            )}
          >
            STANDARDS
          </span>
          <span className="text-white/30">→</span>
          <span
            className={cn(
              "px-1.5 py-0.5 rounded-xs transition-all duration-500",
              stage.id === "market"
                ? "bg-paper-200/20 text-paper-50 border border-paper-200/40 font-bold"
                : "text-white/40"
            )}
          >
            THE WORLD
          </span>
        </div>
      </div>

      {/* Stage Eyebrow & Kicker */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest border rounded-xs",
              stage.palette.badgeBorder
            )}
          >
            CHAPTER {stage.number} : {stage.label}
          </span>
          <span className="font-mono text-xs text-white/50">{stage.kicker}</span>
        </div>

        {/* Spatial Transformative Headline */}
        <h1
          key={stage.id}
          className={cn(
            "font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-normal text-soil-50 transition-all duration-700",
            !isReducedMotion && "animate-in fade-in slide-in-from-bottom-3 duration-500"
          )}
        >
          {stage.title}
        </h1>

        {/* Subtitle */}
        <p className="font-display italic text-lg sm:text-xl text-white/70">
          {stage.subtitle}
        </p>
      </div>

      {/* Narrative Body Copy */}
      <p className="text-base sm:text-lg font-light text-white/80 max-w-2xl leading-relaxed">
        {stage.description}
      </p>

      {/* Scientific Terroir & Value Metadata Cluster */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-black/35 backdrop-blur-sm border border-white/10 rounded-xs font-mono">
        {stage.metrics.map((metric, i) => (
          <div key={i} className="space-y-0.5 border-l border-white/15 pl-3 first:border-l-0 first:pl-0 sm:first:pl-0">
            <span className="text-[10px] uppercase text-white/50 block tracking-wider">
              {metric.label}
            </span>
            <span className={cn("text-sm font-bold block", stage.palette.accent)}>
              {metric.value}
            </span>
            {metric.subtext && (
              <span className="text-[9px] text-white/40 block leading-tight">
                {metric.subtext}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Interactive Controls & Navigation */}
      <div className="pt-2 flex flex-wrap items-center gap-4">
        {!isFirstStage && (
          <Button
            variant="outline"
            size="md"
            onClick={onPrevious}
            className="border-white/20 text-white hover:bg-white/10 gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </Button>
        )}

        {!isLastStage ? (
          <Button
            variant="gold"
            size="lg"
            onClick={onAdvance}
            className="gap-2 font-semibold shadow-lg shadow-gold-900/20"
          >
            Transform to {nextStage?.label} ({nextStage?.number})
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            variant="gold"
            size="lg"
            onClick={() => {
              const el = document.getElementById("expo-directory-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="gap-2 font-semibold shadow-lg shadow-gold-900/20"
          >
            Enter Global Expo 2026 Directory
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
