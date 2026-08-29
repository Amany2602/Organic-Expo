"use client";

import React from "react";
import { PRODUCTION_JOURNEY_STAGES } from "@/lib/data/journey";
import { cn } from "@/lib/utils";

interface JourneyEnvironmentProps {
  progress: number; // Float between 0.0 and 4.0
  activeStageIndex: number;
  mouseOffset: { x: number; y: number };
  isReducedMotion?: boolean;
  className?: string;
}

export function JourneyEnvironment({
  progress,
  activeStageIndex,
  mouseOffset,
  isReducedMotion = false,
  className,
}: JourneyEnvironmentProps) {
  const currentStage = PRODUCTION_JOURNEY_STAGES[activeStageIndex] || PRODUCTION_JOURNEY_STAGES[0];

  // Stage interpolation weights (smooth continuous morphing)
  const soilWeight = Math.max(0, 1 - Math.abs(progress - 0));
  const farmWeight = Math.max(0, 1 - Math.abs(progress - 1));
  const processWeight = Math.max(0, 1 - Math.abs(progress - 2));
  const certWeight = Math.max(0, 1 - Math.abs(progress - 3));
  const marketWeight = Math.max(0, 1 - Math.abs(progress - 4));

  // Parallax multipliers (subtle spatial depth)
  const px = isReducedMotion ? 0 : mouseOffset.x;
  const py = isReducedMotion ? 0 : mouseOffset.y;

  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[540px] flex items-center justify-center overflow-hidden transition-colors duration-700 select-none rounded-3xl border border-white/10 shadow-2xl bg-forest-950",
        className
      )}
    >
      {/* Ambient Radial Atmosphere Glow */}
      <div
        className="absolute inset-0 opacity-50 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + px * 12}% ${50 + py * 12}%, ${currentStage.palette.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Tactile Subterranean Grid Texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          transform: `translate3d(${px * 6}px, ${py * 6}px, 0)`,
        }}
      />

      {/* Main Continuous Vector Narrative Canvas */}
      <div
        className="relative w-full max-w-[460px] lg:max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-6"
        style={{
          transform: `translate3d(${px * 10}px, ${py * 10}px, 0) scale(${1 + (progress % 1) * 0.02})`,
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
            <radialGradient id="envCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93DDB0" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#388662" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06150E" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="envRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DEB04B" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#62C389" stopOpacity="0.3" />
            </linearGradient>

            <filter id="envGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* =================================================================
              STAGE 01: SOIL — Subterranean Strata & Himalayan Mineral Contours
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: soilWeight + farmWeight * 0.3,
              transform: `scale(${1 - progress * 0.05}) rotate(${progress * 8}deg)`,
              transformOrigin: "300px 300px",
            }}
          >
            <path
              d="M 110 300 C 130 150, 240 90, 390 110 C 510 130, 530 270, 490 400 C 440 520, 290 530, 180 480 C 100 440, 80 370, 110 300 Z"
              stroke="#D67254"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.4"
            />
            <path
              d="M 150 300 C 170 180, 260 130, 370 150 C 460 170, 480 270, 450 370 C 410 460, 300 470, 210 430 C 140 400, 120 340, 150 300 Z"
              stroke="#AEA188"
              strokeWidth="1.8"
              opacity="0.6"
            />
            <path
              d="M 190 300 C 210 210, 280 170, 350 190 C 420 210, 430 280, 400 340 C 370 410, 290 420, 230 390 C 180 360, 170 320, 190 300 Z"
              stroke="#E6DFCE"
              strokeWidth="2.2"
              opacity="0.8"
            />
            {/* Living Soil Mineral & Microbial Nodes */}
            <circle cx="210" cy="230" r="3.5" fill="#DEB04B" opacity="0.8" />
            <circle cx="400" cy="210" r="4" fill="#62C389" opacity="0.85" />
            <circle cx="250" cy="420" r="3" fill="#D67254" opacity="0.75" />
            <circle cx="430" cy="370" r="3.5" fill="#E6DFCE" opacity="0.8" />
          </g>

          {/* =================================================================
              STAGE 02: FARM — Stepped Mountain Terraces & Agro-Ecological Slope
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: farmWeight + soilWeight * 0.25 + processWeight * 0.25,
              transform: `scale(${0.92 + progress * 0.04}) rotate(${-progress * 10}deg)`,
              transformOrigin: "300px 300px",
            }}
          >
            <path
              d="M 130 260 C 160 180, 270 150, 360 170 C 440 190, 490 260, 470 360 C 440 440, 350 480, 250 460 C 160 430, 110 330, 130 260 Z"
              stroke="#2E8350"
              strokeWidth="2.2"
              fill="rgba(46, 131, 80, 0.08)"
              opacity="0.85"
            />
            <path
              d="M 170 270 C 190 210, 270 180, 340 200 C 400 220, 440 280, 420 340 C 400 410, 330 440, 250 420 C 190 400, 160 320, 170 270 Z"
              stroke="#3EA568"
              strokeWidth="2.5"
              fill="rgba(62, 165, 104, 0.12)"
              opacity="0.9"
            />
            <path
              d="M 210 280 C 220 230, 280 210, 330 220 C 370 240, 390 280, 380 320 C 360 370, 310 390, 260 380 C 220 360, 200 310, 210 280 Z"
              stroke="#93DDB0"
              strokeWidth="2.8"
              fill="rgba(147, 221, 176, 0.16)"
              opacity="1"
            />
          </g>

          {/* =================================================================
              STAGE 03: PROCESS — Artisanal Care, Solar Curing & Purity Geometry
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: processWeight + farmWeight * 0.25 + certWeight * 0.3,
              transform: `scale(${0.95 + (progress - 2) * 0.04})`,
              transformOrigin: "300px 300px",
            }}
          >
            <rect
              x="160"
              y="160"
              width="280"
              height="280"
              rx="32"
              stroke="#4D7EA6"
              strokeWidth="1.8"
              strokeDasharray="6 4"
              opacity="0.6"
            />
            <rect
              x="200"
              y="200"
              width="200"
              height="200"
              rx="24"
              stroke="#76A3C7"
              strokeWidth="2"
              fill="rgba(77, 126, 166, 0.08)"
              opacity="0.8"
            />
            <rect
              x="240"
              y="240"
              width="120"
              height="120"
              rx="16"
              stroke="#A7C6DF"
              strokeWidth="2.2"
              fill="rgba(167, 198, 223, 0.14)"
            />
          </g>

          {/* =================================================================
              STAGE 04: CERTIFICATION — Concentric ORGANIC NEPAL VERIFIED™ Seal
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: certWeight + processWeight * 0.2 + marketWeight * 0.3,
              transform: `scale(${0.92 + (progress - 3) * 0.06}) rotate(${progress * 15}deg)`,
              transformOrigin: "300px 300px",
            }}
          >
            <circle
              cx="300"
              cy="300"
              r="180"
              stroke="#C69426"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              opacity="0.5"
            />
            <circle
              cx="300"
              cy="300"
              r="145"
              stroke="#DEB04B"
              strokeWidth="2.2"
              fill="rgba(222, 176, 75, 0.06)"
              opacity="0.8"
            />
            <circle
              cx="300"
              cy="300"
              r="110"
              stroke="#F1D38E"
              strokeWidth="2.6"
              fill="rgba(241, 211, 142, 0.14)"
              opacity="0.95"
            />
            {/* Purity Verification Diamond */}
            <polygon
              points="300,160 340,265 440,300 340,335 300,440 260,335 160,300 260,265"
              stroke="#F1D38E"
              strokeWidth="1.8"
              fill="rgba(241, 211, 142, 0.1)"
            />
          </g>

          {/* =================================================================
              STAGE 05: GLOBAL MARKET — Radiating Trade Corridors & Global Network
              ================================================================= */}
          <g
            className="transition-opacity duration-700"
            style={{
              opacity: marketWeight + certWeight * 0.25,
              transform: `scale(${0.92 + (progress - 4) * 0.05})`,
              transformOrigin: "300px 300px",
            }}
          >
            <ellipse
              cx="300"
              cy="300"
              rx="230"
              ry="115"
              stroke="#DEB04B"
              strokeWidth="1.4"
              strokeDasharray="6 4"
              opacity="0.45"
              transform="rotate(-25 300 300)"
            />
            <ellipse
              cx="300"
              cy="300"
              rx="230"
              ry="115"
              stroke="#62C389"
              strokeWidth="1.4"
              strokeDasharray="6 4"
              opacity="0.45"
              transform="rotate(35 300 300)"
            />
            {/* Radiating Export Corridors */}
            <path
              d="M 300 300 Q 400 200 480 180"
              stroke="url(#envRouteGrad)"
              strokeWidth="2.2"
              strokeDasharray="8 4"
            />
            <path
              d="M 300 300 Q 220 180 120 190"
              stroke="url(#envRouteGrad)"
              strokeWidth="2.2"
              strokeDasharray="8 4"
            />
            <path
              d="M 300 300 Q 240 360 170 380"
              stroke="url(#envRouteGrad)"
              strokeWidth="2.2"
              strokeDasharray="8 4"
            />
            <path
              d="M 300 300 Q 400 380 470 410"
              stroke="url(#envRouteGrad)"
              strokeWidth="2.2"
              strokeDasharray="8 4"
            />
            <path
              d="M 300 300 Q 320 140 330 90"
              stroke="url(#envRouteGrad)"
              strokeWidth="2.4"
              strokeDasharray="10 5"
            />

            {/* Global Node Anchors */}
            <g transform="translate(480, 180)">
              <circle r="4.5" fill="#DEB04B" />
              <circle r="9" stroke="#DEB04B" strokeWidth="1" opacity="0.6" />
              <text x="14" y="4" fill="#FAF8F3" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                TOKYO
              </text>
            </g>
            <g transform="translate(120, 190)">
              <circle r="4.5" fill="#62C389" />
              <circle r="9" stroke="#62C389" strokeWidth="1" opacity="0.6" />
              <text x="-48" y="4" fill="#FAF8F3" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                LONDON
              </text>
            </g>
            <g transform="translate(170, 380)">
              <circle r="4.5" fill="#DEB04B" />
              <circle r="9" stroke="#DEB04B" strokeWidth="1" opacity="0.6" />
              <text x="-44" y="4" fill="#FAF8F3" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                DUBAI
              </text>
            </g>
            <g transform="translate(470, 410)">
              <circle r="4.5" fill="#62C389" />
              <circle r="9" stroke="#62C389" strokeWidth="1" opacity="0.6" />
              <text x="14" y="4" fill="#FAF8F3" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                SINGAPORE
              </text>
            </g>
            <g transform="translate(330, 90)">
              <circle r="4.5" fill="#DEB04B" />
              <circle r="9" stroke="#DEB04B" strokeWidth="1" opacity="0.6" />
              <text x="14" y="4" fill="#FAF8F3" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                NEW YORK
              </text>
            </g>
          </g>

          {/* =================================================================
              PERSISTENT CORE NEXUS — Smoothly reflects active stage
              ================================================================= */}
          <g transform="translate(300, 300)">
            <circle
              r={30 + Math.sin(progress * Math.PI) * 8}
              fill="url(#envCoreGlow)"
              className={isReducedMotion ? "" : "transition-all duration-300"}
            />
            <circle
              r="9"
              fill="#06150E"
              stroke="#62C389"
              strokeWidth="2.5"
              filter="url(#envGlowFilter)"
            />
            <circle
              r={18 + (progress % 1) * 4}
              stroke="#62C389"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.8"
            />
            <text
              y="36"
              textAnchor="middle"
              fill="#DEB04B"
              fontSize="10"
              fontFamily="sans-serif"
              fontWeight="bold"
              letterSpacing="0.15em"
              opacity="0.95"
            >
              {progress < 1
                ? "STAGE 01 // SOIL"
                : progress < 2
                ? "STAGE 02 // FARM"
                : progress < 3
                ? "STAGE 03 // PROCESS"
                : progress < 4
                ? "STAGE 04 // VERIFIED"
                : "STAGE 05 // WORLD"}
            </text>
          </g>
        </svg>
      </div>

      {/* Floating Spatial Location Overlay */}
      <div
        className="absolute top-5 right-5 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/15 rounded-pill font-mono text-[11px] space-y-0.5 text-right pointer-events-none hidden sm:block"
        style={{
          transform: `translate3d(${px * -6}px, ${py * -6}px, 0)`,
        }}
      >
        <span className="text-white/50 block uppercase text-[9px] font-sans">Terroir Altitude</span>
        <span className="font-bold tracking-wider text-leaf-300 font-mono">
          {currentStage.elevation}
        </span>
      </div>
    </div>
  );
}
