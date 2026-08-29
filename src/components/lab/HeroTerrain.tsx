"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { InteractiveLink } from "@/components/ui/InteractiveLink";
import { Globe, Compass, Mountain, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroTerrain() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[92vh] w-full bg-soil-50 text-soil-950 flex flex-col justify-between overflow-hidden border border-soil-300/50 rounded-xs select-none"
    >
      {/* Restrained Integrated Navigation */}
      <nav className="w-full px-6 sm:px-10 py-6 flex items-center justify-between border-b border-soil-200/60 z-20">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-forest-800 rounded-none transform rotate-45" />
          <span className="font-display font-bold text-lg tracking-tight uppercase">
            Organic Expo Nepal
          </span>
          <span className="font-mono text-[10px] bg-soil-200/80 px-2 py-0.5 font-semibold text-soil-800">
            2026
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-soil-700">
          <a href="#explore" className="hover:text-forest-900 transition-colors">
            01 / Explore
          </a>
          <a href="#expo" className="hover:text-forest-900 transition-colors">
            02 / Expo 2026
          </a>
          <a href="#business" className="hover:text-forest-900 transition-colors">
            03 / Trade Hub
          </a>
          <a href="#about" className="hover:text-forest-900 transition-colors">
            04 / About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-soil-600 hidden sm:inline-block">
            KTM [27°42′N]
          </span>
          <Button variant="primary" size="sm">
            Inquire
          </Button>
        </div>
      </nav>

      {/* Main Hero Spatial Canvas */}
      <div className="flex-grow relative flex items-center py-12 lg:py-20 z-10">
        <Container className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Col: Asymmetric Editorial Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <Eyebrow variant="forest" step="01" withDot>
                  Himalayan Agro-Ecological Platform
                </Eyebrow>

                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.03em] font-normal text-soil-950">
                  From Nepal&apos;s Soil{" "}
                  <span className="block font-light italic text-forest-800">
                    to the World.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-soil-700 font-light max-w-xl leading-relaxed">
                A living bridge between Nepal’s indigenous mountain terroir and the global
                sustainable economy. Connecting certified organic growers, traditional wildcrafters,
                and innovative producers with international ethical buyers.
              </p>

              {/* Action Cluster */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" className="gap-2">
                  Explore The Expo <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Become an Exhibitor
                </Button>
              </div>

              {/* Terroir Elevation Indicator Bar */}
              <div className="pt-8 border-t border-soil-200/80 grid grid-cols-3 gap-4 max-w-lg font-mono text-xs">
                <div>
                  <span className="text-soil-500 block text-[10px] uppercase">Terrain Span</span>
                  <span className="font-semibold text-soil-900">60m — 8,848m</span>
                </div>
                <div>
                  <span className="text-soil-500 block text-[10px] uppercase">Agro-Climates</span>
                  <span className="font-semibold text-soil-900">5 Distinct Zones</span>
                </div>
                <div>
                  <span className="text-soil-500 block text-[10px] uppercase">Edition</span>
                  <span className="font-semibold text-forest-700">Kathmandu 2026</span>
                </div>
              </div>
            </div>

            {/* Right Col: Mathematical Topographic Contour Landscape (SVG / CSS Parallax) */}
            <div className="lg:col-span-5 relative w-full aspect-[4/4] max-w-lg mx-auto flex items-center justify-center">
              {/* Layered Topographic Contours */}
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out flex items-center justify-center"
                style={{
                  transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 0)`,
                }}
              >
                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full text-soil-800 opacity-80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Elevation Contours */}
                  <path
                    d="M 50 250 C 70 120, 200 60, 320 80 C 440 100, 470 220, 440 340 C 410 440, 280 470, 160 430 C 70 400, 30 330, 50 250 Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-25"
                  />
                  <path
                    d="M 90 250 C 110 150, 210 100, 300 120 C 400 140, 420 230, 390 320 C 360 400, 260 420, 170 390 C 110 370, 70 310, 90 250 Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="opacity-40"
                  />
                  <path
                    d="M 130 250 C 145 180, 220 140, 280 160 C 350 180, 370 240, 340 300 C 310 360, 240 370, 180 350 C 135 330, 115 290, 130 250 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="opacity-60"
                  />
                  {/* Terraced Agricultural Contours */}
                  <path
                    d="M 170 250 C 180 200, 230 180, 270 190 C 310 200, 320 240, 300 280 C 280 320, 230 330, 195 315 C 165 300, 160 275, 170 250 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="rgba(42, 105, 78, 0.04)"
                    className="text-forest-800"
                  />
                  <path
                    d="M 210 250 C 220 220, 245 210, 265 215 C 285 220, 290 245, 280 265 C 270 285, 245 290, 225 280 C 210 270, 205 260, 210 250 Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="rgba(42, 105, 78, 0.08)"
                    className="text-forest-700"
                  />
                  {/* Peak Summit Vector */}
                  <circle cx="250" cy="250" r="3" fill="#1D4D38" />
                  <circle cx="250" cy="250" r="12" stroke="#BA8E26" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* Floating Topographic Badges / Coordinates */}
              <div
                className="absolute top-6 right-4 bg-soil-50/95 border border-soil-300 p-3 rounded-xs shadow-subtle font-mono text-[10px] space-y-1 transition-transform duration-500"
                style={{
                  transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, 0)`,
                }}
              >
                <div className="flex items-center gap-1.5 text-forest-800 font-semibold">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>ANNAPURNA TRANSECT</span>
                </div>
                <p className="text-soil-600">Elev: 2,850m // Wild Herbs</p>
              </div>

              <div
                className="absolute bottom-6 left-4 bg-soil-50/95 border border-soil-300 p-3 rounded-xs shadow-subtle font-mono text-[10px] space-y-1 transition-transform duration-500"
                style={{
                  transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0)`,
                }}
              >
                <div className="flex items-center gap-1.5 text-gold-700 font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>ILAM ORGANIC BASIN</span>
                </div>
                <p className="text-soil-600">Terroir: High-Altitude Tea</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero Base Meta Banner */}
      <div className="px-6 sm:px-10 py-4 bg-soil-100/70 border-t border-soil-200/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-soil-600 gap-2 z-20">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-forest-600" />
            ORGANIC NEPAL EXPO 2026
          </span>
          <span>{"//"}</span>
          <span>FLAGSHIP INAUGURAL EDITION</span>
        </div>
        <div className="flex items-center gap-6">
          <span>KATHMANDU · NEPAL</span>
          <InteractiveLink href="#journey" variant="arrow">
            Scroll to Journey
          </InteractiveLink>
        </div>
      </div>
    </div>
  );
}
