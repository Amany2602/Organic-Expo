"use client";

import React from "react";
import { JourneyStageData } from "./types";
import { cn } from "@/lib/utils";

interface JourneyStageIndicatorProps {
  stages: JourneyStageData[];
  activeStageIndex: number;
  progress: number;
  onSelectStage: (index: number) => void;
  className?: string;
}

export function JourneyStageIndicator({
  stages,
  activeStageIndex,
  progress,
  onSelectStage,
  className,
}: JourneyStageIndicatorProps) {
  return (
    <aside
      aria-label="Journey Stage Navigation"
      className={cn(
        "flex flex-col gap-3 font-mono text-xs select-none",
        className
      )}
    >
      {/* Indicator Header */}
      <div className="flex items-center justify-between text-[10px] text-white/40 uppercase tracking-widest pb-1 border-b border-white/10">
        <span>Timeline Index</span>
        <span>{activeStageIndex + 1} / 5</span>
      </div>

      {/* Vertical Track and Markers */}
      <div className="relative flex flex-col gap-1">
        {/* Continuous Progress Line */}
        <div className="absolute left-[13px] top-3 bottom-3 w-[1px] bg-white/15 -z-0">
          <div
            className="w-full bg-gold-400 transition-all duration-300"
            style={{
              height: `${(progress / 4) * 100}%`,
            }}
          />
        </div>

        {stages.map((stg, idx) => {
          const isActive = idx === activeStageIndex;
          const isPassed = idx < activeStageIndex;

          return (
            <button
              key={stg.id}
              type="button"
              onClick={() => onSelectStage(idx)}
              aria-current={isActive ? "step" : undefined}
              className={cn(
                "group relative z-10 w-full px-2.5 py-2 rounded-xs text-left transition-all duration-200 flex items-center justify-between cursor-pointer border",
                isActive
                  ? "bg-white/15 border-gold-400 text-white shadow-sm"
                  : isPassed
                  ? "bg-black/30 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                  : "bg-transparent border-transparent text-white/40 hover:bg-white/5 hover:text-white/80"
              )}
            >
              <div className="flex items-center gap-2.5">
                {/* Custom Node Point */}
                <div
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300 flex items-center justify-center",
                    isActive
                      ? "bg-gold-400 scale-125 ring-2 ring-gold-400/40"
                      : isPassed
                      ? "bg-forest-400"
                      : "bg-white/30 group-hover:bg-white/60"
                  )}
                />

                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider opacity-60">
                    {stg.number}
                  </span>
                  <span
                    className={cn(
                      "font-semibold tracking-wide text-xs",
                      isActive ? "text-gold-300" : "text-inherit"
                    )}
                  >
                    {stg.label}
                  </span>
                </div>
              </div>

              {/* Elevation Altitude Tag */}
              <span className="text-[9px] opacity-40 font-light hidden lg:inline">
                {stg.elevation.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Keyboard Shortcut Hint */}
      <div className="pt-2 text-[9px] text-white/30 hidden lg:flex items-center gap-1 font-mono">
        <span className="px-1 py-0.5 bg-white/10 rounded-xs text-white/60 font-bold">1-5</span>
        <span>or</span>
        <span className="px-1 py-0.5 bg-white/10 rounded-xs text-white/60 font-bold">↑↓</span>
        <span>to navigate stages</span>
      </div>
    </aside>
  );
}
