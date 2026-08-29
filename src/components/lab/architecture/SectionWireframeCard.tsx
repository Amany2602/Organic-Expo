"use client";

import React from "react";
import { SectionSpec, VisualRhythm } from "./data";
import { Monitor, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const RHYTHM_BADGE_STYLE: Record<
  VisualRhythm,
  { label: string; bg: string; text: string; border: string }
> = {
  immersive: {
    label: "IMMERSIVE (SPATIAL)",
    bg: "bg-forest-950/60",
    text: "text-forest-300",
    border: "border-forest-700/40",
  },
  editorial: {
    label: "EDITORIAL (CALM / TEXT)",
    bg: "bg-soil-900/60",
    text: "text-soil-200",
    border: "border-soil-600/40",
  },
  functional: {
    label: "FUNCTIONAL (DISCOVERY / B2B)",
    bg: "bg-mist-950/60",
    text: "text-mist-300",
    border: "border-mist-700/40",
  },
  trust: {
    label: "TRUST (VERIFICATION / DATA)",
    bg: "bg-gold-950/60",
    text: "text-gold-300",
    border: "border-gold-700/40",
  },
};

interface SectionWireframeCardProps {
  section: SectionSpec;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function SectionWireframeCard({
  section,
  isExpanded = false,
  onToggle,
}: SectionWireframeCardProps) {
  const rhythmStyle = RHYTHM_BADGE_STYLE[section.rhythm];

  return (
    <div
      className={cn(
        "border rounded-xs transition-all duration-200 font-mono text-xs select-none",
        isExpanded
          ? "bg-soil-900/90 border-gold-400 shadow-xl"
          : "bg-soil-950/70 border-white/10 hover:border-white/20"
      )}
    >
      {/* Header Bar */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-xs bg-white/10 border border-white/15 flex items-center justify-center font-bold text-soil-50">
            {section.number}
          </span>
          <div>
            <span className="text-[10px] text-white/50 uppercase tracking-widest block">
              SECTION {section.number}
            </span>
            <h3 className="font-sans text-base sm:text-lg font-bold text-soil-50 tracking-tight">
              {section.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={cn(
              "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider border rounded-xs",
              rhythmStyle.bg,
              rhythmStyle.text,
              rhythmStyle.border
            )}
          >
            {rhythmStyle.label}
          </span>
          <span className="text-white/40 text-xs">{isExpanded ? "▲" : "▼"}</span>
        </div>
      </button>

      {/* Summary Line */}
      <div className="px-4 sm:px-5 pb-4 text-white/70 font-sans text-xs sm:text-sm font-light border-b border-white/10">
        <p className="leading-relaxed">{section.purpose}</p>
      </div>

      {/* Expanded Blueprint Details */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-6 bg-black/40 text-soil-50 text-xs">
          {/* Content Hierarchy Blueprint */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-gold-400 tracking-widest block">
              Content Hierarchy Schema
            </span>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xs space-y-3 font-sans">
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block">01. Eyebrow</span>
                <p className="text-xs text-forest-300 font-mono font-medium">
                  {section.contentHierarchy.eyebrow}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block">02. Headline</span>
                <p className="font-display text-lg text-white font-normal">
                  {section.contentHierarchy.headline}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block">03. Supporting Statement</span>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  {section.contentHierarchy.supportingCopy}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
                <span className="px-2 py-1 bg-gold-400 text-soil-950 font-bold rounded-xs">
                  Primary CTA: {section.contentHierarchy.primaryAction}
                </span>
                {section.contentHierarchy.secondaryAction && (
                  <span className="px-2 py-1 bg-white/10 border border-white/20 text-white rounded-xs">
                    Secondary: {section.contentHierarchy.secondaryAction}
                  </span>
                )}
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                  Associated Metadata Fields
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {section.contentHierarchy.metadataFields.map((field, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-black/40 border border-white/10 text-white/70 rounded-xs"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Grid Layout: Responsive Behavior & Technical Spec */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            {/* Responsive Strategy */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xs space-y-2">
              <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase font-bold tracking-wider">
                <Monitor className="w-3.5 h-3.5 text-forest-300" />
                <span>Responsive Adaptation</span>
              </div>
              <div className="space-y-1.5 text-[11px] font-sans text-white/80">
                <p>
                  <strong className="text-soil-50 font-mono">Desktop:</strong>{" "}
                  {section.responsiveBehavior.desktop}
                </p>
                <p>
                  <strong className="text-soil-50 font-mono">Mobile (375px):</strong>{" "}
                  {section.responsiveBehavior.mobile}
                </p>
              </div>
            </div>

            {/* Component & Data Requirements */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xs space-y-2">
              <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase font-bold tracking-wider">
                <Database className="w-3.5 h-3.5 text-gold-300" />
                <span>Component & Data Bindings</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div>
                  <span className="text-[9px] text-white/40 uppercase block">Components:</span>
                  <p className="text-white/80">
                    {section.componentsRequired.join(" · ")}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] text-white/40 uppercase block">Data Schemas:</span>
                  <p className="text-gold-200">
                    {section.dataBindings.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Animation & Visual Transition */}
          <div className="p-3 bg-white/5 border border-white/10 rounded-xs font-mono text-[11px] space-y-1">
            <span className="text-[10px] text-white/40 uppercase tracking-widest block">
              Transition & Scroll Boundary
            </span>
            <p className="text-white/80">
              <span className="text-white/50">Entry:</span> {section.animationTransition.entry}
              <br />
              <span className="text-white/50">Exit:</span> {section.animationTransition.exit}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
