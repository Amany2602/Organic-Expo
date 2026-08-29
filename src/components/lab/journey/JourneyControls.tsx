"use client";

import { Sliders, Eye, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneyControlsProps {
  progress: number;
  onProgressChange: (progress: number) => void;
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
  enableParallax: boolean;
  onToggleParallax: () => void;
  className?: string;
}

export function JourneyControls({
  progress,
  onProgressChange,
  isReducedMotion,
  onToggleReducedMotion,
  enableParallax,
  onToggleParallax,
  className,
}: JourneyControlsProps) {
  return (
    <div
      className={cn(
        "p-4 bg-black/60 backdrop-blur-md border border-white/15 rounded-xs font-mono text-xs text-white/90 space-y-4 select-none",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <Sliders className="w-3.5 h-3.5 text-gold-400" />
          <span className="font-bold text-[11px] uppercase tracking-wider text-soil-50">
            Spatial Journey Engine Lab Inspector
          </span>
        </div>
        <span className="text-[10px] text-gold-300 font-bold px-1.5 py-0.5 bg-gold-950/80 border border-gold-600/30 rounded-xs">
          PROGRESS: {progress.toFixed(2)} / 4.00
        </span>
      </div>

      {/* Scrubber Slider */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[10px] text-white/60">
          <span>01 SOIL (0.0)</span>
          <span>03 PROCESS (2.0)</span>
          <span>05 WORLD (4.0)</span>
        </div>
        <input
          type="range"
          min="0"
          max="4"
          step="0.01"
          value={progress}
          onChange={(e) => onProgressChange(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-white/20 rounded-xs appearance-none cursor-pointer accent-gold-400"
          aria-label="Fractional Progress Scrubber"
        />
      </div>

      {/* Lab Toggles */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          type="button"
          onClick={onToggleReducedMotion}
          className={cn(
            "px-2.5 py-2 rounded-xs border text-[11px] font-mono flex items-center justify-center gap-1.5 cursor-pointer transition-all",
            isReducedMotion
              ? "bg-gold-500/20 border-gold-400 text-gold-200 font-bold"
              : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
          )}
        >
          <ShieldAlert className="w-3 h-3" />
          <span>Reduced Motion: {isReducedMotion ? "ON" : "OFF"}</span>
        </button>

        <button
          type="button"
          onClick={onToggleParallax}
          className={cn(
            "px-2.5 py-2 rounded-xs border text-[11px] font-mono flex items-center justify-center gap-1.5 cursor-pointer transition-all",
            enableParallax
              ? "bg-forest-500/20 border-forest-400 text-forest-200 font-bold"
              : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
          )}
        >
          <Eye className="w-3 h-3" />
          <span>Pointer Parallax: {enableParallax ? "ACTIVE" : "OFF"}</span>
        </button>
      </div>
    </div>
  );
}
