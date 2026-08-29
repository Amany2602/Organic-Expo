"use client";

import React from "react";
import { JOURNEY_STAGES } from "./types";
import { cn } from "@/lib/utils";

interface JourneyCanvasProps {
  progress: number; // Float between 0.0 and 4.0
  activeStageIndex: number;
  mouseOffset: { x: number; y: number };
  isReducedMotion?: boolean;
  className?: string;
}

export function JourneyCanvas({
  progress,
  activeStageIndex,
  mouseOffset,
  isReducedMotion = false,
  className,
}: JourneyCanvasProps) {
  const currentStage = JOURNEY_STAGES[activeStageIndex] || JOURNEY_STAGES[0];

  // Calculate interpolation values
  const soilWeight = Math.max(0, 1 - Math.abs(progress - 0));
  const farmWeight = Math.max(0, 1 - Math.abs(progress - 1));
  const processWeight = Math.max(0, 1 - Math.abs(progress - 2));
  const certWeight = Math.max(0, 1 - Math.abs(progress - 3));
  const marketWeight = Math.max(0, 1 - Math.abs(progress - 4));

  // Parallax offsets (disabled or dampened if reduced motion)
  const px = isReducedMotion ? 0 : mouseOffset.x;
  const py = isReducedMotion ? 0 : mouseOffset.y;

  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[420px] lg:min-h-[640px] flex items-center justify-center overflow-hidden transition-colors duration-1000 select-none",
        className
      )}
      style={{
        backgroundColor: currentStage.palette.bgHex,
      }}
    >
      {/* Dynamic Background Atmosphere Glow */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + px * 20}% ${50 + py * 20}%, ${currentStage.palette.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Topographic and Material Texture Overlays */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          transform: `translate3d(${px * 8}px, ${py * 8}px, 0)`,
        }}
      />

      {/* Main Continuous Vector Transformation Engine (SVG) */}
      <div
        className="relative w-full max-w-[540px] aspect-square flex items-center justify-center p-4 lg:p-8"
        style={{
          transform: `translate3d(${px * 16}px, ${py * 16}px, 0) scale(${1 + (progress % 1) * 0.02})`,
          transition: isReducedMotion ? "none" : "transform 0.25s ease-out",
        }}
      >
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="centralCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#eed07d" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#35835f" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#18120d" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="tradeRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eed07d" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#82cca5" stopOpacity="0.2" />
            </linearGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* =================================================================
              STAGE 01: SOIL — Subterranean Strata & Organic Topographic Contours
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: soilWeight + farmWeight * 0.4,
              transform: `scale(${1 - progress * 0.08}) rotate(${progress * 12}deg)`,
              transformOrigin: "300px 300px",
            }}
          >
            {/* Outer Deep Earth Contours */}
            <path
              d="M 120 300 C 140 160, 240 100, 380 120 C 500 140, 520 280, 480 400 C 430 510, 290 520, 190 480 C 110 440, 90 380, 120 300 Z"
              stroke="#856a4f"
              strokeWidth="1.2"
              strokeDasharray="6 4"
              opacity="0.35"
            />
            <path
              d="M 160 300 C 180 190, 260 140, 360 160 C 450 180, 470 270, 440 370 C 400 450, 300 460, 220 430 C 150 400, 130 350, 160 300 Z"
              stroke="#ac8f71"
              strokeWidth="1.5"
              opacity="0.55"
            />
            <path
              d="M 200 300 C 220 220, 280 180, 340 200 C 410 220, 420 280, 390 340 C 360 400, 290 410, 240 390 C 190 360, 180 330, 200 300 Z"
              stroke="#cbba9f"
              strokeWidth="1.8"
              opacity="0.75"
            />
            {/* Organic Mineral Strata Flecks */}
            <circle cx="210" cy="240" r="2.5" fill="#ac8f71" opacity="0.6" />
            <circle cx="390" cy="220" r="3" fill="#cbba9f" opacity="0.7" />
            <circle cx="260" cy="410" r="2" fill="#856a4f" opacity="0.5" />
            <circle cx="420" cy="360" r="2.5" fill="#cbba9f" opacity="0.6" />
          </g>

          {/* =================================================================
              STAGE 02: FARM — Stepped Mountain Terraces & Agro-Ecological Geometry
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: farmWeight + soilWeight * 0.3 + processWeight * 0.3,
              transform: `scale(${0.9 + progress * 0.05}) rotate(${-progress * 15}deg)`,
              transformOrigin: "300px 300px",
            }}
          >
            {/* Stepped Himalayan Agricultural Terraces */}
            <path
              d="M 140 260 C 170 190, 270 160, 350 180 C 430 200, 480 260, 460 350 C 430 430, 350 470, 260 450 C 170 420, 120 330, 140 260 Z"
              stroke="#35835f"
              strokeWidth="2"
              fill="rgba(53, 131, 95, 0.06)"
              opacity="0.8"
            />
            <path
              d="M 180 270 C 200 220, 270 190, 330 210 C 390 230, 430 280, 410 340 C 390 400, 330 430, 260 410 C 200 390, 170 320, 180 270 Z"
              stroke="#51a77d"
              strokeWidth="2.2"
              fill="rgba(81, 167, 125, 0.08)"
              opacity="0.9"
            />
            <path
              d="M 220 280 C 230 240, 280 220, 320 230 C 360 250, 380 280, 370 320 C 350 360, 310 380, 265 370 C 230 355, 210 310, 220 280 Z"
              stroke="#82cca5"
              strokeWidth="2.5"
              fill="rgba(130, 204, 165, 0.12)"
              opacity="1"
            />

            {/* Altitude Contour Ridge Cross-sections */}
            <line x1="300" y1="120" x2="300" y2="180" stroke="#51a77d" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
            <line x1="300" y1="420" x2="300" y2="480" stroke="#51a77d" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
            <line x1="120" y1="300" x2="180" y2="300" stroke="#51a77d" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
            <line x1="420" y1="300" x2="480" y2="300" stroke="#51a77d" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          </g>

          {/* =================================================================
              STAGE 03: PROCESS — Structural Grids, Packaging Modules & Refinement
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: processWeight + farmWeight * 0.3 + certWeight * 0.4,
              transform: `scale(${0.95 + (progress - 2) * 0.06})`,
              transformOrigin: "300px 300px",
            }}
          >
            {/* Precision Orthogonal Module Grids */}
            <rect
              x="170"
              y="170"
              width="260"
              height="260"
              stroke="#4d7ea6"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            <rect
              x="210"
              y="210"
              width="180"
              height="180"
              stroke="#76a3c7"
              strokeWidth="1.8"
              fill="rgba(77, 126, 166, 0.05)"
              opacity="0.8"
            />
            <rect
              x="250"
              y="250"
              width="100"
              height="100"
              stroke="#a7c6df"
              strokeWidth="2"
              fill="rgba(167, 198, 223, 0.1)"
            />

            {/* Modular Refinement Reticle Lines */}
            <line x1="300" y1="140" x2="300" y2="460" stroke="#4d7ea6" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
            <line x1="140" y1="300" x2="460" y2="300" stroke="#4d7ea6" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />

            {/* Corner Registration Markers */}
            <path d="M 160 170 L 170 170 L 170 160" stroke="#a7c6df" strokeWidth="1.5" />
            <path d="M 440 170 L 430 170 L 430 160" stroke="#a7c6df" strokeWidth="1.5" />
            <path d="M 160 430 L 170 430 L 170 440" stroke="#a7c6df" strokeWidth="1.5" />
            <path d="M 440 430 L 430 430 L 430 440" stroke="#a7c6df" strokeWidth="1.5" />

            {/* Batch Module Coordinate Nodes */}
            <rect x="206" y="206" width="8" height="8" fill="#4d7ea6" opacity="0.8" />
            <rect x="386" y="206" width="8" height="8" fill="#4d7ea6" opacity="0.8" />
            <rect x="206" y="386" width="8" height="8" fill="#4d7ea6" opacity="0.8" />
            <rect x="386" y="386" width="8" height="8" fill="#4d7ea6" opacity="0.8" />
          </g>

          {/* =================================================================
              STAGE 04: CERTIFICATION — Concentric Seal of Trust & Protocol Rings
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: certWeight + processWeight * 0.2 + marketWeight * 0.3,
              transform: `scale(${0.9 + (progress - 3) * 0.1}) rotate(${progress * 25}deg)`,
              transformOrigin: "300px 300px",
            }}
          >
            {/* Concentric Verification Rings */}
            <circle
              cx="300"
              cy="300"
              r="170"
              stroke="#c9991e"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              opacity="0.5"
            />
            <circle
              cx="300"
              cy="300"
              r="140"
              stroke="#e2b640"
              strokeWidth="2"
              fill="rgba(201, 153, 30, 0.05)"
              opacity="0.75"
            />
            <circle
              cx="300"
              cy="300"
              r="105"
              stroke="#eed07d"
              strokeWidth="2.5"
              fill="rgba(238, 208, 125, 0.12)"
              opacity="0.9"
            />

            {/* Authoritative Diamond Star / Geometric Compass Seal */}
            <polygon
              points="300,165 335,265 435,300 335,335 300,435 265,335 165,300 265,265"
              stroke="#eed07d"
              strokeWidth="1.5"
              fill="rgba(238, 208, 125, 0.08)"
            />

            {/* Standard Security Notch Marks around perimeter */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="300"
                y1="125"
                x2="300"
                y2="135"
                stroke="#e2b640"
                strokeWidth="1.5"
                transform={`rotate(${deg} 300 300)`}
                opacity="0.7"
              />
            ))}
          </g>

          {/* =================================================================
              STAGE 05: GLOBAL MARKET — Expanding Routes, Trade Nodes & World Network
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: marketWeight + certWeight * 0.3,
              transform: `scale(${0.9 + (progress - 4) * 0.08})`,
              transformOrigin: "300px 300px",
            }}
          >
            {/* Planetary Longitude / Latitude Arc Trajectories */}
            <ellipse
              cx="300"
              cy="300"
              rx="230"
              ry="110"
              stroke="#e2b640"
              strokeWidth="1.2"
              strokeDasharray="6 4"
              opacity="0.4"
              transform="rotate(-25 300 300)"
            />
            <ellipse
              cx="300"
              cy="300"
              rx="230"
              ry="110"
              stroke="#82cca5"
              strokeWidth="1.2"
              strokeDasharray="6 4"
              opacity="0.4"
              transform="rotate(35 300 300)"
            />

            {/* Direct Radiating Trade Corridors (Kathmandu Nexus -> World Markets) */}
            {/* To Tokyo / East Asia */}
            <path
              d="M 300 300 Q 400 200 480 180"
              stroke="url(#tradeRouteGrad)"
              strokeWidth="2"
              strokeDasharray="8 4"
              className={isReducedMotion ? "" : "animate-pulse"}
            />
            {/* To London / Western Europe */}
            <path
              d="M 300 300 Q 220 180 120 190"
              stroke="url(#tradeRouteGrad)"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            {/* To Berlin / Central Europe */}
            <path
              d="M 300 300 Q 240 220 150 250"
              stroke="url(#tradeRouteGrad)"
              strokeWidth="1.8"
              strokeDasharray="6 3"
            />
            {/* To Dubai / Middle East */}
            <path
              d="M 300 300 Q 240 360 170 380"
              stroke="url(#tradeRouteGrad)"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            {/* To Singapore / SE Asia */}
            <path
              d="M 300 300 Q 400 380 470 410"
              stroke="url(#tradeRouteGrad)"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            {/* To New York / Americas */}
            <path
              d="M 300 300 Q 320 140 330 90"
              stroke="url(#tradeRouteGrad)"
              strokeWidth="2.2"
              strokeDasharray="10 5"
            />

            {/* Destination Market Anchor Nodes */}
            <g transform="translate(480, 180)">
              <circle r="4" fill="#eed07d" />
              <circle r="9" stroke="#eed07d" strokeWidth="1" opacity="0.6" />
              <text x="12" y="4" fill="#edefe7" fontSize="10" fontFamily="monospace" opacity="0.8">
                TYO [Tokyo]
              </text>
            </g>

            <g transform="translate(120, 190)">
              <circle r="4" fill="#82cca5" />
              <circle r="9" stroke="#82cca5" strokeWidth="1" opacity="0.6" />
              <text x="-70" y="4" fill="#edefe7" fontSize="10" fontFamily="monospace" opacity="0.8">
                LON [London]
              </text>
            </g>

            <g transform="translate(170, 380)">
              <circle r="4" fill="#eed07d" />
              <circle r="9" stroke="#eed07d" strokeWidth="1" opacity="0.6" />
              <text x="-65" y="4" fill="#edefe7" fontSize="10" fontFamily="monospace" opacity="0.8">
                DXB [Dubai]
              </text>
            </g>

            <g transform="translate(470, 410)">
              <circle r="4" fill="#82cca5" />
              <circle r="9" stroke="#82cca5" strokeWidth="1" opacity="0.6" />
              <text x="12" y="4" fill="#edefe7" fontSize="10" fontFamily="monospace" opacity="0.8">
                SIN [Singapore]
              </text>
            </g>

            <g transform="translate(330, 90)">
              <circle r="4" fill="#eed07d" />
              <circle r="9" stroke="#eed07d" strokeWidth="1" opacity="0.6" />
              <text x="12" y="4" fill="#edefe7" fontSize="10" fontFamily="monospace" opacity="0.8">
                NYC [New York]
              </text>
            </g>
          </g>

          {/* =================================================================
              PERSISTENT CORE NEXUS — Evolves Function Across All 5 Stages
              (Soil Core -> Mountain Peak -> Batch Center -> Seal Core -> World Origin)
              ================================================================= */}
          <g transform="translate(300, 300)">
            {/* Core Halo */}
            <circle
              r={30 + Math.sin(progress * Math.PI) * 12}
              fill="url(#centralCoreGlow)"
              className={isReducedMotion ? "" : "transition-all duration-500"}
            />

            {/* Central Terroir / Verified Nexus Point */}
            <circle
              r="8"
              fill={currentStage.palette.contourStroke}
              stroke="#eed07d"
              strokeWidth="2"
              filter="url(#glowFilter)"
            />
            <circle
              r={16 + (progress % 1) * 6}
              stroke={currentStage.palette.contourStroke}
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.75"
            />

            {/* Central Origin Label */}
            <text
              y="32"
              textAnchor="middle"
              fill={currentStage.palette.accentHex}
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.15em"
              opacity="0.9"
            >
              {progress < 1
                ? "TERROIR: 01"
                : progress < 2
                ? "TERRACE: 02"
                : progress < 3
                ? "BATCH: 03"
                : progress < 4
                ? "VERIFIED: 04"
                : "ORIGIN: NEPAL"}
            </text>
          </g>
        </svg>
      </div>

      {/* Floating Spatial Micro-Coordinates Overlay */}
      <div
        className="absolute top-6 right-6 px-3 py-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-xs font-mono text-[10px] space-y-0.5 text-right pointer-events-none hidden sm:block"
        style={{
          transform: `translate3d(${px * -10}px, ${py * -10}px, 0)`,
        }}
      >
        <span className="text-white/40 block uppercase">Spatial Coordinate</span>
        <span className={cn("font-bold tracking-wider", currentStage.palette.accent)}>
          {currentStage.coordinates}
        </span>
        <span className="text-white/60 block text-[9px]">{currentStage.elevation}</span>
      </div>

      {/* Dynamic Transformation Grammar Rule Display */}
      <div
        className="absolute bottom-6 left-6 max-w-xs px-3.5 py-2.5 bg-black/40 backdrop-blur-md border border-white/15 rounded-xs font-mono text-[10px] space-y-1 pointer-events-none hidden md:block"
        style={{
          transform: `translate3d(${px * -14}px, ${py * -14}px, 0)`,
        }}
      >
        <div className="flex items-center gap-1.5 text-white/40 text-[9px] uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          Transformation Grammar
        </div>
        <p className="text-white/80 leading-snug">
          <span className="text-white/50">{currentStage.transformationGrammar.from}</span>
          <span className="text-gold-300 mx-1">→</span>
          <span className="text-white font-medium">{currentStage.transformationGrammar.to}</span>
        </p>
      </div>
    </div>
  );
}
