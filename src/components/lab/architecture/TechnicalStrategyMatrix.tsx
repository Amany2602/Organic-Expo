"use client";

import React from "react";
import { TECHNICAL_BLUEPRINT } from "./data";
import { Cpu, Box, Camera, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function TechnicalStrategyMatrix() {
  const { performanceArchitecture, progressive3DMatrix, animationStrategy } =
    TECHNICAL_BLUEPRINT;

  return (
    <div className="space-y-8 font-mono text-xs select-none text-soil-50">
      {/* 1. Island Architecture & Performance Budgets */}
      <div className="p-6 bg-soil-900/90 border border-white/15 rounded-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Cpu className="w-4 h-4 text-forest-300" />
          <h3 className="font-sans text-base font-bold text-white tracking-tight">
            1. Performance & Island Rendering Architecture
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px]">
          {/* SSR Scope */}
          <div className="p-4 bg-black/40 border border-white/10 rounded-xs space-y-2">
            <span className="text-[10px] text-forest-300 font-bold uppercase tracking-wider block">
              Static Server Components (SSR / SSG)
            </span>
            <ul className="space-y-1 text-white/70 font-sans list-disc list-inside">
              {performanceArchitecture.ssrScope.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Client Island Scope */}
          <div className="p-4 bg-black/40 border border-white/10 rounded-xs space-y-2">
            <span className="text-[10px] text-gold-300 font-bold uppercase tracking-wider block">
              Hydrated Client Islands (&quot;use client&quot;)
            </span>
            <ul className="space-y-1 text-white/70 font-sans list-disc list-inside">
              {performanceArchitecture.clientIslandScope.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Budgets */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 bg-white/5 border border-white/10 rounded-xs space-y-1">
            <span className="text-[9px] text-white/40 uppercase block">Initial JS (Gzip)</span>
            <span className="text-sm font-bold text-forest-300 block">{performanceArchitecture.budgets.initialJsGzip}</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xs space-y-1">
            <span className="text-[9px] text-white/40 uppercase block">Target LCP</span>
            <span className="text-sm font-bold text-forest-300 block">{performanceArchitecture.budgets.maxLcp}</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xs space-y-1">
            <span className="text-[9px] text-white/40 uppercase block">Target CLS</span>
            <span className="text-sm font-bold text-forest-300 block">{performanceArchitecture.budgets.maxCls}</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xs space-y-1">
            <span className="text-[9px] text-white/40 uppercase block">Input Latency (INP)</span>
            <span className="text-sm font-bold text-forest-300 block">{performanceArchitecture.budgets.targetInp}</span>
          </div>
        </div>
      </div>

      {/* 2. 4-Layer Progressive 3D Strategy */}
      <div className="p-6 bg-soil-900/90 border border-white/15 rounded-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Box className="w-4 h-4 text-gold-300" />
          <h3 className="font-sans text-base font-bold text-white tracking-tight">
            2. Progressive 3D & Spatial Strategy (No Wasteful WebGL)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {progressive3DMatrix.map((layer, idx) => (
            <div
              key={idx}
              className="p-4 bg-black/40 border border-white/10 rounded-xs space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gold-400 font-bold">
                    {layer.layer}
                  </span>
                  <span
                    className={cn(
                      "text-[9px] px-2 py-0.5 rounded-xs font-bold",
                      layer.status === "Implemented"
                        ? "bg-forest-950 text-forest-200 border border-forest-600/40"
                        : layer.status === "Next Phase"
                        ? "bg-gold-950 text-gold-300 border border-gold-600/40"
                        : "bg-white/10 text-white/50"
                    )}
                  >
                    {layer.status}
                  </span>
                </div>
                <h4 className="font-sans font-bold text-xs text-white">
                  {layer.title}
                </h4>
                <p className="text-[11px] font-sans text-white/70 font-light leading-relaxed">
                  {layer.technology}
                </p>
              </div>

              <p className="text-[10px] font-sans text-white/50 pt-2 border-t border-white/10">
                <strong className="text-soil-50 font-mono">Rationale:</strong> {layer.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Animation Strategy & Motion Pacing */}
      <div className="p-6 bg-soil-900/90 border border-white/15 rounded-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Sparkles className="w-4 h-4 text-gold-300" />
          <h3 className="font-sans text-base font-bold text-white tracking-tight">
            3. Animation Philosophy & Visual Rhythm
          </h3>
        </div>

        <p className="text-xs font-sans text-white/80 leading-relaxed">
          {animationStrategy.philosophy}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[11px] font-sans">
          <div className="p-3 bg-black/40 border border-white/10 rounded-xs space-y-1">
            <strong className="font-mono text-gold-300 uppercase text-[10px] block">
              Motion Pacing Rules:
            </strong>
            <ul className="space-y-1 text-white/70 list-disc list-inside">
              {animationStrategy.rules.map((rule, rIdx) => (
                <li key={rIdx}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-black/40 border border-white/10 rounded-xs space-y-1">
            <strong className="font-mono text-forest-300 uppercase text-[10px] block">
              Reduced-Motion Fallback:
            </strong>
            <p className="text-white/70 leading-relaxed">
              {animationStrategy.reducedMotionFallback}
            </p>
          </div>
        </div>
      </div>

      {/* 4. Image Art Direction & Photography Principles */}
      <div className="p-6 bg-soil-900/90 border border-white/15 rounded-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Camera className="w-4 h-4 text-mist-300" />
          <h3 className="font-sans text-base font-bold text-white tracking-tight">
            4. Photography Art Direction (Documentary Authenticity)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 bg-forest-950/40 border border-forest-600/30 rounded-xs space-y-2">
            <span className="font-mono text-[10px] font-bold text-forest-300 uppercase block">
              ✓ MANDATORY ART DIRECTION
            </span>
            <ul className="space-y-1.5 text-white/80 text-[11px] list-disc list-inside">
              <li>Documentary editorial style capturing real Nepali mountain farmers and producers</li>
              <li>Natural daylight, authentic Himalayan terrain, micro-climates, and bio-diverse polyculture</li>
              <li>Macro detail on authentic processing: cold-press oils, orthodox tea rolling, sun drying</li>
              <li>Respectful, dignified representation of traditional wildcrafting cooperatives</li>
            </ul>
          </div>

          <div className="p-4 bg-soil-950/60 border border-soil-700/40 rounded-xs space-y-2">
            <span className="font-mono text-[10px] font-bold text-soil-300 uppercase block">
              ✕ STRICTLY PROHIBITED
            </span>
            <ul className="space-y-1.5 text-white/70 text-[11px] list-disc list-inside">
              <li>Generic Western smiling stock farmer models</li>
              <li>Fake over-saturated AI hallucinations and synthetic plastic leaves</li>
              <li>Cliché spinning earth globes or generic green sustainability badges</li>
              <li>Advertising-heavy commercial gloss that masks genuine terroir</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
