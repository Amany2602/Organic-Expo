"use client";

import React from "react";
import { Mountain, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export function HeroEditorialVisual() {
  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] mx-auto select-none">
      {/* Ambient Botanical Glow */}
      <div className="absolute -inset-4 rounded-full bg-leaf-500/15 blur-3xl pointer-events-none -z-10" />

      {/* Floating 1st Edition Agrigo Badge */}
      <div className="relative z-20 mb-3 -ml-1 sm:-ml-2 inline-flex items-center gap-1.5 rounded-full border border-forest-800/20 bg-white/95 px-4 py-1.5 text-xs font-bold tracking-wide text-forest-950 shadow-md">
        <span className="w-2.5 h-2.5 rounded-full bg-harvest-500 animate-pulse" />
        <span className="text-forest-950 font-display text-sm font-bold">1st Edition</span>
        <span className="text-leaf-700 italic font-normal">· National Landmark Expo</span>
      </div>

      {/* Agrigo Layered Grid Box */}
      <div className="relative rounded-3xl border-2 border-cream-300 bg-white/90 p-3 sm:p-4 shadow-floating overflow-hidden">
        {/* SVG Mountain & Organic Terroir Graphic */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-forest-950 border border-cream-200 shadow-inner">
          <svg
            viewBox="0 0 500 360"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="agrigoSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0D2E1F" />
                <stop offset="50%" stopColor="#1B4D3E" />
                <stop offset="85%" stopColor="#E8A217" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FAF7F0" />
              </linearGradient>

              <radialGradient id="agrigoSun" cx="70%" cy="30%" r="35%">
                <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#F5B82E" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#E8A217" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="agrigoPeak" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#C9E0D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1A4A35" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="agrigoTerrace1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3EA568" />
                <stop offset="100%" stopColor="#143D2B" />
              </linearGradient>

              <linearGradient id="agrigoTerrace2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2D7A4D" />
                <stop offset="100%" stopColor="#0B261A" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="500" height="360" fill="url(#agrigoSky)" />

            {/* Morning Sun */}
            <circle cx="350" cy="110" r="90" fill="url(#agrigoSun)" />

            {/* Himalayan Peaks */}
            <polygon points="90,160 170,80 250,160" fill="url(#agrigoPeak)" />
            <polygon points="210,160 300,60 390,160" fill="url(#agrigoPeak)" />
            <polygon points="350,160 420,100 490,160" fill="url(#agrigoPeak)" />

            {/* Lush Terraced Hills */}
            <path
              d="M -20 180 Q 120 140 260 180 T 520 160 L 520 270 L -20 270 Z"
              fill="url(#agrigoTerrace1)"
            />
            <path
              d="M -20 230 C 100 200, 240 260, 380 220 C 440 210, 480 230, 520 225 L 520 380 L -20 380 Z"
              fill="url(#agrigoTerrace2)"
            />

            {/* Tea Rows Silhouette */}
            <path
              d="M -10 260 C 110 240, 230 280, 370 250 C 450 230, 490 260, 520 255"
              stroke="#62C389"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M -10 300 C 130 270, 270 330, 410 290 C 470 275, 500 295, 520 290"
              stroke="#A3DDB9"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.75"
            />
          </svg>

          {/* Location Badge */}
          <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-cream-300">
            <MapPin className="w-3.5 h-3.5 text-harvest-600" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-forest-950 font-bold">
              Bhrikuti Mandap, Kathmandu
            </span>
          </div>

          {/* Elevation Badge */}
          <div className="absolute top-3.5 right-3.5 bg-forest-950/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-forest-700 text-cream-50">
            <Mountain className="w-3 h-3 text-leaf-400" />
            <span className="font-mono text-[10px] font-bold text-leaf-300">
              7 Provinces
            </span>
          </div>
        </div>

        {/* 2-Column Agrigo Bottom Highlights */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-300 space-y-1">
            <div className="flex items-center gap-1.5 text-forest-950">
              <Sparkles className="w-4 h-4 text-harvest-500" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-forest-900 font-bold">
                150+ Exhibitors
              </span>
            </div>
            <p className="text-[11px] text-charcoal-600 font-light leading-snug">
              Orthodox teas, herbs, Arabica coffee, honey, and superfoods.
            </p>
          </div>

          <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-300 space-y-1">
            <div className="flex items-center gap-1.5 text-forest-950">
              <CheckCircle2 className="w-4 h-4 text-leaf-600" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-forest-900 font-bold">
                100% Certified
              </span>
            </div>
            <p className="text-[11px] text-charcoal-600 font-light leading-snug">
              EU Bio, USDA Organic, and Organic Nepal Verified™.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
