"use client";

import React, { useState } from "react";
import { Layers, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPONENT_INVENTORY = [
  {
    category: "Layout & Primitives (Existing / Solid)",
    items: [
      { name: "Container", path: "@/components/ui/Container", status: "Production Ready", role: "Page max-width and structural padding boundaries." },
      { name: "Heading / Text / Eyebrow", path: "@/components/ui/*", status: "Production Ready", role: "Design token typographic hierarchy." },
      { name: "Button / InteractiveLink", path: "@/components/ui/*", status: "Production Ready", role: "Primary, gold, outline, and subtle interaction triggers." },
      { name: "Badge / Cluster / Stack / Grid", path: "@/components/ui/*", status: "Production Ready", role: "Flexbox and grid composition primitives." },
      { name: "OrganicNepalVerified", path: "@/components/ui/OrganicNepalVerified", status: "Production Ready", role: "Authoritative multi-tier stamp badge." },
    ],
  },
  {
    category: "New Production Modules Required (Next Phase)",
    items: [
      { name: "EventMetaBlock", path: "@/components/home/EventMetaBlock", status: "To Be Built", role: "Structured venue, dates, opening hours and map preview." },
      { name: "CategoryTaxonomyGrid", path: "@/components/home/CategoryTaxonomyGrid", status: "To Be Built", role: "Asymmetric editorial taxonomy for Himalayan sectors." },
      { name: "GlobalSignalMatrix", path: "@/components/home/GlobalSignalMatrix", status: "To Be Built", role: "B2B export metrics and trade corridor visualization." },
      { name: "AudiencePathwayGrid", path: "@/components/home/AudiencePathwayGrid", status: "To Be Built", role: "Segmented conversion funnels (Exhibit/Visit/Buy/Partner)." },
      { name: "ScheduleTimeline", path: "@/components/home/ScheduleTimeline", status: "To Be Built", role: "Interactive agenda for summit & public expo days." },
      { name: "StoryCardGrid", path: "@/components/home/StoryCardGrid", status: "To Be Built", role: "Editorial article previews with reading time and author tag." },
      { name: "ProductionJourneyIsland", path: "@/components/home/ProductionJourneyIsland", status: "To Be Built", role: "Refined client-only Journey Engine wrapper for Section 02." },
    ],
  },
];

const DATA_SCHEMAS_CODE = `// ============================================================================
// PRODUCTION DATA SCHEMAS FOR ORGANIC EXPO NEPAL 2026
// ============================================================================

export interface EventMetadataSchema {
  edition: string;               // "2026"
  officialTitle: string;         // "Organic Expo Nepal 2026"
  tagline: string;               // "From Nepal's Soil to the World"
  venue: {
    name: string;                // "Bhrikuti Mandap Exhibition Arena"
    city: string;                // "Kathmandu"
    country: string;             // "Nepal"
    coordinates: [number, number]; // [27.7017, 85.3186]
    googleMapsUrl?: string;
  };
  dates: {
    startDate: string;           // ISO format "2026-03-20"
    endDate: string;             // ISO format "2026-03-24"
    isConfirmed: boolean;        // true | false placeholder
  };
  stats: {
    expectedExhibitors: number;  // 120+
    participatingCountries: number; // 20+
    projectedTradeVolumeUSD: number; // 40000000
  };
}

export interface ProductCategorySchema {
  id: string;                    // "tea-specialty"
  slug: string;
  name: string;                  // "High-Altitude Orthodox Tea"
  nepaliName?: string;           // "उच्च पहाडी चिया"
  elevationRange: string;        // "1,200m - 2,200m"
  regions: string[];             // ["Ilam", "Panchthar", "Dhankuta"]
  description: string;
  featuredProductsCount: number;
  heroImage?: string;
}

export interface VerificationAuditSchema {
  registryCode: string;          // "OEN-2026-T01-0842"
  entityName: string;            // "Ilam Mountain Tea Cooperative"
  tier: "certified-organic" | "certification-in-progress" | "verified-natural";
  standardsAligned: string[];    // ["IFOAM Basic Standards", "Nepal Organic Standard"]
  labTestReport: {
    status: "PASS";
    pesticideResidue: "Non-Detect (<0.01 ppm)";
    heavyMetals: "Within Pure Terroir Limits";
    testedDate: string;
  };
}

export interface AudiencePathwaySchema {
  id: "exhibit" | "visit" | "source" | "partner";
  title: string;
  targetAudience: string;
  keyBenefits: string[];
  ctaLabel: string;
  destinationRoute: string;
}

export interface EditorialStorySchema {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Terroir Study" | "Producer Spotlight" | "Export Corridor" | "Policy";
  author: string;
  readTimeMinutes: number;
  publishedAt: string;
  coverImage: string;
}`;

export function ComponentDataBlueprint() {
  const [activeTab, setActiveTab] = useState<"components" | "schemas">("components");

  return (
    <div className="space-y-6 font-mono text-xs select-none">
      {/* Sub-tabs */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("components")}
          className={cn(
            "px-4 py-2 rounded-xs border transition-all cursor-pointer flex items-center gap-2",
            activeTab === "components"
              ? "bg-forest-950 border-gold-400 text-white font-bold"
              : "bg-soil-950/60 border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
          )}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Component Inventory & Status</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("schemas")}
          className={cn(
            "px-4 py-2 rounded-xs border transition-all cursor-pointer flex items-center gap-2",
            activeTab === "schemas"
              ? "bg-forest-950 border-gold-400 text-white font-bold"
              : "bg-soil-950/60 border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
          )}
        >
          <Code className="w-3.5 h-3.5" />
          <span>TypeScript Content Schemas</span>
        </button>
      </div>

      {/* Tab 1: Component Inventory */}
      {activeTab === "components" && (
        <div className="space-y-6">
          {COMPONENT_INVENTORY.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-bold text-xs text-gold-400 uppercase tracking-wider">
                  {group.category}
                </span>
                <span className="text-[10px] text-white/40">{group.items.length} Modules</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-3.5 bg-soil-900/80 border border-white/10 rounded-xs space-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans font-bold text-sm text-white">
                          {item.name}
                        </span>
                        <span
                          className={cn(
                            "text-[9px] px-2 py-0.5 rounded-xs font-bold",
                            item.status === "Production Ready"
                              ? "bg-forest-950 text-forest-200 border border-forest-600/40"
                              : "bg-gold-950 text-gold-300 border border-gold-600/40"
                          )}
                        >
                          {item.status}
                        </span>
                      </div>
                      <span className="text-[10px] text-white/40 block font-mono">
                        {item.path}
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-white/70 font-light leading-relaxed pt-1">
                      {item.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: TypeScript Data Schemas */}
      {activeTab === "schemas" && (
        <div className="p-4 sm:p-6 bg-black/70 border border-white/15 rounded-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">
              Type-Safe Production Data Contracts
            </span>
            <span className="text-[9px] text-white/50">TypeScript v5.x Schema</span>
          </div>

          <pre className="p-4 bg-soil-950 rounded-xs overflow-x-auto text-[11px] text-soil-100 font-mono leading-relaxed border border-white/10">
            <code>{DATA_SCHEMAS_CODE}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
