"use client";

import React, { useState } from "react";
import { NAVIGATION_MODEL } from "./data";
import { Button } from "@/components/ui/Button";
import { Smartphone, Monitor, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavigationModelViewer() {
  const [activePreview, setActivePreview] = useState<"desktop-initial" | "desktop-scrolled" | "mobile-sheet">("desktop-initial");
  const [lang, setLang] = useState<"EN" | "NE">("EN");

  return (
    <div className="space-y-6 font-mono text-xs select-none">
      {/* State Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActivePreview("desktop-initial")}
          className={cn(
            "px-4 py-2 rounded-xs border transition-all cursor-pointer flex items-center gap-2",
            activePreview === "desktop-initial"
              ? "bg-forest-950 border-gold-400 text-white font-bold"
              : "bg-soil-950/60 border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
          )}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Desktop (Initial / Transparent)</span>
        </button>

        <button
          type="button"
          onClick={() => setActivePreview("desktop-scrolled")}
          className={cn(
            "px-4 py-2 rounded-xs border transition-all cursor-pointer flex items-center gap-2",
            activePreview === "desktop-scrolled"
              ? "bg-forest-950 border-gold-400 text-white font-bold"
              : "bg-soil-950/60 border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
          )}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Desktop (Scrolled / Glassmorphic)</span>
        </button>

        <button
          type="button"
          onClick={() => setActivePreview("mobile-sheet")}
          className={cn(
            "px-4 py-2 rounded-xs border transition-all cursor-pointer flex items-center gap-2",
            activePreview === "mobile-sheet"
              ? "bg-forest-950 border-gold-400 text-white font-bold"
              : "bg-soil-950/60 border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
          )}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile (Editorial Command Sheet)</span>
        </button>
      </div>

      {/* Interactive Simulation Frame */}
      <div className="p-6 bg-soil-900/80 border border-white/15 rounded-xs space-y-6">
        <div className="flex items-center justify-between text-[10px] text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
          <span>Live Navigation Simulator</span>
          <span>State: {activePreview.toUpperCase()}</span>
        </div>

        {/* 1. Desktop Initial State Preview */}
        {activePreview === "desktop-initial" && (
          <div className="relative rounded-xs border border-white/10 overflow-hidden bg-gradient-to-r from-soil-950 via-forest-950 to-soil-950 p-6 space-y-12">
            <header className="w-full flex items-center justify-between py-2 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-forest-400 rotate-45" />
                <span className="font-display text-lg font-bold tracking-tight text-white uppercase">
                  Organic Expo Nepal
                </span>
                <span className="font-mono text-[9px] bg-white/10 px-1.5 py-0.5 text-gold-300">
                  2026
                </span>
              </div>

              <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-wider text-white/70">
                {NAVIGATION_MODEL.destinations.slice(0, 5).map((dest) => (
                  <span key={dest.label} className="hover:text-white cursor-pointer transition-colors">
                    {dest.label}
                  </span>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <span className="text-[10px] px-2 py-1 border border-white/15 rounded-xs text-white/70">
                  EN / NE
                </span>
                <Button variant="gold" size="sm">
                  Participate
                </Button>
              </div>
            </header>

            <div className="text-center space-y-2 py-8 opacity-60">
              <span className="text-[10px] uppercase tracking-widest text-gold-300">[ HERO VIEWPORT CONTENT ]</span>
              <p className="font-display text-2xl text-white font-light">From Nepal&apos;s Soil to the World</p>
            </div>
          </div>
        )}

        {/* 2. Desktop Scrolled State Preview */}
        {activePreview === "desktop-scrolled" && (
          <div className="relative rounded-xs border border-white/10 overflow-hidden bg-soil-950 p-6 space-y-12">
            <header className="w-full flex items-center justify-between py-3 px-4 bg-soil-900/90 backdrop-blur-md border border-white/15 rounded-xs shadow-lg">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="font-display text-base font-bold tracking-tight text-white uppercase">
                  Organic Expo Nepal
                </span>
              </div>

              <nav className="hidden md:flex items-center gap-5 text-[10px] uppercase tracking-widest text-white/80 font-medium">
                {NAVIGATION_MODEL.destinations.map((dest) => (
                  <span
                    key={dest.label}
                    className={cn(
                      "hover:text-gold-300 cursor-pointer transition-colors",
                      dest.category === "action" && "text-gold-400 font-bold"
                    )}
                  >
                    {dest.label}
                  </span>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <Button variant="gold" size="sm" className="text-xs">
                  Register 2026
                </Button>
              </div>
            </header>

            <div className="text-center space-y-2 py-8 opacity-60">
              <span className="text-[10px] uppercase tracking-widest text-forest-300">[ SCROLLED EDITORIAL SECTION ]</span>
              <p className="font-sans text-xs text-white">Header remains elevated and compact with high contrast.</p>
            </div>
          </div>
        )}

        {/* 3. Mobile Command Sheet Preview */}
        {activePreview === "mobile-sheet" && (
          <div className="max-w-sm mx-auto rounded-xs border border-white/20 overflow-hidden bg-soil-950 shadow-2xl p-5 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold-400 rotate-45" />
                <span className="font-display font-bold text-sm uppercase text-white">
                  Organic Expo 2026
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/10 text-white rounded-xs">
                [ ESC / CLOSE ]
              </span>
            </div>

            {/* Audience Segmented Navigation */}
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-widest text-gold-400 font-bold block">
                Primary Directories
              </span>
              <div className="space-y-1.5 font-sans">
                {NAVIGATION_MODEL.destinations.map((dest, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-white/5 border border-white/10 rounded-xs flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <span className="font-bold text-xs text-white block">
                        {dest.label}
                      </span>
                      <span className="text-[10px] text-white/50 block font-light font-mono">
                        {dest.description}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Action Group */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <Button variant="gold" size="md" className="w-full justify-center">
                Register / Participate
              </Button>
              <div className="flex items-center justify-between text-[10px] text-white/60 font-mono pt-1">
                <span>Secretariat: Kathmandu</span>
                <button
                  type="button"
                  onClick={() => setLang(lang === "EN" ? "NE" : "EN")}
                  className="text-gold-300 font-bold underline"
                >
                  Language: {lang === "EN" ? "English" : "Nepali"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Accessibility & Keyboard Specifications */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] font-sans text-white/80">
          <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
            <strong className="font-mono text-soil-50 block mb-1">Keyboard Navigation:</strong>
            <p>{NAVIGATION_MODEL.accessibility.keyboard}</p>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
            <strong className="font-mono text-soil-50 block mb-1">Semantic Landmarks:</strong>
            <p>{NAVIGATION_MODEL.accessibility.landmarks}</p>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
            <strong className="font-mono text-soil-50 block mb-1">Focus Indicators:</strong>
            <p>{NAVIGATION_MODEL.accessibility.focusVisible}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
