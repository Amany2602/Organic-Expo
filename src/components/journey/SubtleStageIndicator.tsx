"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PRODUCTION_JOURNEY_STAGES } from "@/lib/data/journey";

interface SubtleStageIndicatorProps {
  activeStageIndex: number;
  onSelectStage?: (index: number) => void;
  className?: string;
}

export function SubtleStageIndicator({
  activeStageIndex,
  onSelectStage,
  className,
}: SubtleStageIndicatorProps) {
  return (
    <nav
      aria-label="Organic Journey Navigation"
      className={cn(
        "inline-flex items-center gap-1.5 p-1.5 bg-forest-900/90 border border-forest-800 rounded-pill text-xs backdrop-blur-md overflow-x-auto max-w-full scrollbar-none",
        className
      )}
    >
      {PRODUCTION_JOURNEY_STAGES.map((stage, idx) => {
        const isActive = activeStageIndex === idx;
        return (
          <React.Fragment key={stage.id}>
            <button
              type="button"
              onClick={() => onSelectStage?.(idx)}
              aria-pressed={isActive}
              aria-label={`Jump to Stage ${stage.number}: ${stage.label}`}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-pill transition-all cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-leaf-400 font-sans",
                isActive
                  ? "bg-leaf-600 text-white font-semibold shadow-xs"
                  : "text-cream-300 hover:text-white hover:bg-forest-800/80"
              )}
            >
              <span className="font-mono text-[10px] opacity-85">{stage.number}</span>
              <span className="text-xs tracking-wide">{stage.label}</span>
            </button>
            {idx < PRODUCTION_JOURNEY_STAGES.length - 1 && (
              <span className="text-forest-700 select-none text-[10px] hidden sm:inline">
                →
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
