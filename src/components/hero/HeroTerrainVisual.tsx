"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { Mountain, Compass } from "lucide-react";

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function HeroTerrainVisual() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  useEffect(() => {
    if (isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setOffset({ x, y });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative w-full aspect-square max-w-[440px] sm:max-w-[500px] lg:max-w-[540px] mx-auto flex items-center justify-center select-none"
    >
      {/* Ambient Contour Glow Background */}
      <div
        className="absolute inset-4 rounded-full bg-radial from-forest-600/10 via-gold-500/5 to-transparent blur-2xl pointer-events-none transition-transform duration-700 ease-out"
        style={
          isReducedMotion
            ? {}
            : {
                transform: `translate3d(${offset.x * 12}px, ${offset.y * 12}px, 0)`,
              }
        }
      />

      {/* Main Topographic Vector Graphic Canvas */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
        style={
          isReducedMotion
            ? {}
            : {
                transform: `translate3d(${offset.x * 10}px, ${offset.y * 10}px, 0)`,
              }
        }
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-soil-900 drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="summitGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c9991e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c9991e" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="terraceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#256347" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#18120d" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Grid Reference Coordinate Ring */}
          <circle
            cx="250"
            cy="250"
            r="235"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="3 6"
            className="opacity-20 text-soil-600"
          />

          {/* Elevation Strata 01 - Macro Foothills */}
          <path
            d="M 55 250 C 70 120, 190 55, 325 75 C 445 95, 475 215, 445 340 C 415 445, 280 475, 155 435 C 70 405, 35 330, 55 250 Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="opacity-25 text-soil-700"
          />

          {/* Elevation Strata 02 - Mid-Hills */}
          <path
            d="M 95 250 C 115 145, 205 95, 305 115 C 405 135, 425 230, 395 320 C 365 400, 265 425, 175 395 C 115 375, 75 315, 95 250 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-40 text-soil-800"
          />

          {/* Elevation Strata 03 - High-Altitude Terraced Contours */}
          <path
            d="M 135 250 C 150 175, 225 135, 285 155 C 355 175, 375 235, 345 295 C 315 355, 245 365, 185 345 C 140 325, 120 285, 135 250 Z"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="url(#terraceGradient)"
            className="opacity-60 text-soil-900"
          />

          {/* Elevation Strata 04 - Agricultural Valley Contours */}
          <path
            d="M 175 250 C 185 195, 235 175, 275 185 C 315 195, 325 235, 305 275 C 285 315, 235 325, 200 310 C 170 295, 165 270, 175 250 Z"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="rgba(37, 99, 71, 0.06)"
            className="text-forest-800"
          />

          {/* Elevation Strata 05 - Summit Core */}
          <path
            d="M 215 250 C 225 215, 248 205, 268 210 C 288 215, 292 240, 282 260 C 272 280, 248 285, 228 275 C 215 265, 210 255, 215 250 Z"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="rgba(201, 153, 30, 0.08)"
            className="text-forest-700"
          />

          {/* Core Summit Marker */}
          <circle cx="250" cy="250" r="32" fill="url(#summitGlow)" />
          <circle cx="250" cy="250" r="3.5" fill="#194632" />
          <circle
            cx="250"
            cy="250"
            r="14"
            stroke="#c9991e"
            strokeWidth="1.2"
            strokeDasharray="2 3"
          />

          {/* Elevation Crosshairs */}
          <line
            x1="250"
            y1="230"
            x2="250"
            y2="220"
            stroke="#856a4f"
            strokeWidth="1"
            className="opacity-70"
          />
          <line
            x1="250"
            y1="270"
            x2="250"
            y2="280"
            stroke="#856a4f"
            strokeWidth="1"
            className="opacity-70"
          />
          <line
            x1="230"
            y1="250"
            x2="220"
            y2="250"
            stroke="#856a4f"
            strokeWidth="1"
            className="opacity-70"
          />
          <line
            x1="270"
            y1="250"
            x2="280"
            y2="250"
            stroke="#856a4f"
            strokeWidth="1"
            className="opacity-70"
          />
        </svg>
      </div>

      {/* Floating Terroir Badges with Inverted Parallax */}
      <div
        className="absolute top-4 right-2 sm:right-6 bg-soil-50/95 border border-soil-300/90 px-3.5 py-2.5 rounded-xs shadow-subtle font-mono text-[10px] space-y-0.5 transition-transform duration-500 ease-out"
        style={
          isReducedMotion
            ? {}
            : {
                transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)`,
              }
        }
      >
        <div className="flex items-center gap-1.5 text-forest-800 font-semibold">
          <Mountain className="w-3.5 h-3.5 text-forest-700" />
          <span>ANNAPURNA TRANSECT</span>
        </div>
        <p className="text-soil-600 font-medium">Elev: 2,850m · Wild Herbs</p>
      </div>

      <div
        className="absolute bottom-4 left-2 sm:left-6 bg-soil-50/95 border border-soil-300/90 px-3.5 py-2.5 rounded-xs shadow-subtle font-mono text-[10px] space-y-0.5 transition-transform duration-500 ease-out"
        style={
          isReducedMotion
            ? {}
            : {
                transform: `translate3d(${offset.x * -14}px, ${offset.y * -14}px, 0)`,
              }
        }
      >
        <div className="flex items-center gap-1.5 text-gold-700 font-semibold">
          <Compass className="w-3.5 h-3.5 text-gold-600" />
          <span>ILAM BASIN</span>
        </div>
        <p className="text-soil-600 font-medium">Terroir: High-Altitude Tea</p>
      </div>
    </div>
  );
}
