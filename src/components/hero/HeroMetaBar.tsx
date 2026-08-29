import React from "react";

export function HeroMetaBar() {
  return (
    <div className="pt-8 border-t border-soil-200/80 grid grid-cols-3 gap-4 max-w-lg font-mono text-xs">
      <div>
        <span className="text-soil-500 block text-[10px] uppercase tracking-wider">
          Terrain Span
        </span>
        <span className="font-semibold text-soil-950">60m — 8,848m</span>
      </div>
      <div>
        <span className="text-soil-500 block text-[10px] uppercase tracking-wider">
          Agro-Climates
        </span>
        <span className="font-semibold text-soil-950">5 Distinct Zones</span>
      </div>
      <div>
        <span className="text-soil-500 block text-[10px] uppercase tracking-wider">
          Flagship Edition
        </span>
        <span className="font-semibold text-forest-800">Kathmandu · 2026</span>
      </div>
    </div>
  );
}
