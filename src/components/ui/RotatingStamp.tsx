"use client";

import React from "react";
import { Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

interface RotatingStampProps {
  text?: string;
  size?: number;
  className?: string;
  dark?: boolean;
}

export function RotatingStamp({
  text = "• 100% CERTIFIED ORGANIC • HIMALAYAN SOURCING • EXPO 2026",
  size = 140,
  className,
  dark = false,
}: RotatingStampProps) {
  const pathId = React.useId();
  const radius = size * 0.38;
  const center = size / 2;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center select-none cursor-pointer group",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* Outer Decorative Ring */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border transition-all duration-500",
          dark
            ? "border-white/20 bg-black/40 backdrop-blur-md group-hover:border-gf-accent-mint/60"
            : "border-gf-secondary/20 bg-white/90 backdrop-blur-md group-hover:border-gf-secondary shadow-lg"
        )}
      />

      {/* Rotating SVG Text Container */}
      <svg
        className="w-full h-full animate-spin-slow group-hover:[animation-duration:8s] transition-all"
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <path
            id={pathId}
            d={`M ${center - radius} ${center} A ${radius} ${radius} 0 1 1 ${
              center + radius
            } ${center} A ${radius} ${radius} 0 1 1 ${center - radius} ${center}`}
          />
        </defs>
        <text
          className={cn(
            "text-[9.5px] font-extrabold uppercase tracking-[0.22em] transition-colors",
            dark
              ? "fill-white/90 group-hover:fill-gf-accent-mint"
              : "fill-gf-primary group-hover:fill-gf-secondary"
          )}
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Inner Center Badge Icon with Pulse */}
      <div
        className={cn(
          "absolute rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm",
          dark
            ? "bg-gf-secondary text-white border border-white/30"
            : "bg-gf-secondary text-white"
        )}
        style={{ width: size * 0.38, height: size * 0.38 }}
      >
        <Sprout className="w-5 h-5 animate-pulse" />
      </div>
    </div>
  );
}
