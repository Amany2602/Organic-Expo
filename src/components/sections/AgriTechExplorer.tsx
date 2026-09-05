"use client";

import React, { useState } from "react";
import { Mountain, Droplets, SunMedium, ShieldCheck, Sprout, CheckCircle2, ArrowRight, BarChart3, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { RotatingStamp } from "@/components/ui/RotatingStamp";

interface TechPillar {
  id: string;
  tabLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge: string;
  description: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  image: string;
}

const TECH_PILLARS: TechPillar[] = [
  {
    id: "glacier-fed",
    tabLabel: "Glacier-Fed High Altitude",
    icon: Mountain,
    title: "Pure Mountain Terroir & Glacier Irrigation (1,800m – 3,800m)",
    badge: "100% Non-Contaminated Ecosystem",
    description:
      "Nepal's alpine tea gardens and wild botanical zones are fed exclusively by pure Himalayan snowmelt and glacier runoff. The extreme diurnal temperature variation (warm sunny days, frosty alpine nights) triggers high polyphenol and bio-active density in all crops.",
    metrics: [
      { label: "Bioactive Potency", value: "+34% vs Plains" },
      { label: "Chemical Residuals", value: "0.00% (Zero)" },
      { label: "Glacier Melt Water pH", value: "7.8 Alkaline" },
    ],
    bulletPoints: [
      "Naturally isolated from urban smog and lowland chemical runoff",
      "Rich volcanic and humus-laden sub-Himalayan topsoils",
      "Traditional multi-century terracing with zero synthetic fertilizers",
    ],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "permaculture",
    tabLabel: "Regenerative Agro-Forestry",
    icon: Sprout,
    title: "Biodiverse Shade Canopy & Indigenous Companion Planting",
    badge: "Carbon Negative Cultivation",
    description:
      "Unlike monoculture corporate plantations, Himalayan Arabica coffee, Large Cardamom, and wild botanicals thrive under native shade-tree canopies (Alder, Walnut, and Oak). This preserves biodiversity, prevents soil erosion, and enriches nitrogen naturally.",
    metrics: [
      { label: "Native Tree Canopy", value: "65%+ Shade" },
      { label: "Soil Carbon Retention", value: "4.8x Higher" },
      { label: "Pollinator Diversity", value: "140+ Species" },
    ],
    bulletPoints: [
      "Natural pest suppression through aromatic botanical borders",
      "On-farm compost and cow dung bio-digester nutrient cycles",
      "Preservation of ancient indigenous seed varieties & wild strains",
    ],
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "distillation",
    tabLabel: "Lab Testing & Steam Distillation",
    icon: Droplets,
    title: "GC/MS Certified Purity & High-Efficiency Low-Emission Stills",
    badge: "ISO 22000 & Export Validated",
    description:
      "Modern stainless steel steam-distillation units installed right at the mountain collection points ensure essential oils and herbal oleoresins (Timur, Lemongrass, Sugandhamantri) retain their delicate volatile notes without thermal degradation or solvent traces.",
    metrics: [
      { label: "Volatile Extraction Purity", value: "99.85%" },
      { label: "Batch Traceability", value: "QR Code Verified" },
      { label: "Lab Turnaround", value: "< 24 Hours" },
    ],
    bulletPoints: [
      "Comprehensive Gas Chromatography-Mass Spectrometry (GC/MS) profiling",
      "Heavy metal, micro-toxin, and pesticide residue negative guarantee",
      "Pre-shipment phytosanitary quarantine compliance for EU, US & Japan",
    ],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fair-trade",
    tabLabel: "Direct Cooperative Equity",
    icon: Award,
    title: "Empowering 12,000+ Smallholder Mountain Families",
    badge: "Fair-Trade 100% Direct",
    description:
      "The Nepal Organic Expo bypasses extractive middle-layer brokerages. International buyers purchase directly from certified farmer cooperatives, ensuring over 70% of the export FOB price returns directly to rural farming communities.",
    metrics: [
      { label: "Direct Farmer Revenue", value: "+45% Uplift" },
      { label: "Women-Led Cooperatives", value: "58% Share" },
      { label: "Long-Term Trade Contracts", value: "3+ Years Term" },
    ],
    bulletPoints: [
      "Transparent digital contract signing and escrow-backed payments",
      "Cooperative reinvestment funds for organic certification renewal",
      "Youth agricultural retention and Himalayan rural livelihood security",
    ],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80",
  },
];

export function AgriTechExplorer() {
  const [activePillar, setActivePillar] = useState(0);
  const current = TECH_PILLARS[activePillar];
  const Icon = current.icon;

  return (
    <section className="py-20 lg:py-24 bg-gf-bg-warm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="gf-badge">EcoGrow Agritech & Terroir</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary">
              The Science & Heritage Behind <br className="hidden sm:inline" />
              <span className="text-gf-secondary">Himalayan Organic Purity</span>
            </h2>
            <p className="text-sm sm:text-base text-gf-text-muted">
              Discover how pristine glacier waters, regenerative forest permaculture, and cutting-edge laboratory testing create uncompromised export quality.
            </p>
          </div>

          {/* Rotating Organic Seal Stamp from EcoGrow */}
          <div className="hidden md:block shrink-0">
            <RotatingStamp
              size={130}
              text="• HIMALAYAN AGRI-ECOLOGY • GLACIER PURITY • CERTIFIED 2026 •"
            />
          </div>
        </div>

        {/* Tab Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-2 rounded-2xl border border-gf-border shadow-xs">
          {TECH_PILLARS.map((pillar, idx) => {
            const TabIcon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={cn(
                  "flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer text-left",
                  isActive
                    ? "bg-gf-primary text-white shadow-md"
                    : "text-gf-primary hover:bg-gf-bg-tint"
                )}
              >
                <TabIcon className={cn("w-4 h-4 shrink-0", isActive ? "text-gf-accent-mint" : "text-gf-secondary")} />
                <span className="truncate">{pillar.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Display */}
        <div className="gf-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-lg border border-gf-border">
          
          {/* Left Column: Visual with Badge Overlay */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[440px] bg-gf-dark">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Top Badge */}
            <div className="absolute top-4 left-4 bg-gf-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {current.badge}
            </div>

            {/* Bottom Metrics Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white grid grid-cols-3 gap-2 text-center">
              {current.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="font-mono text-sm sm:text-base font-extrabold text-gf-accent-mint block">
                    {metric.value}
                  </span>
                  <span className="text-[10px] text-gray-300 leading-tight block">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Breakdown */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gf-secondary text-xs font-bold uppercase tracking-wider">
                <Icon className="w-4 h-4" />
                <span>Pillar 0{activePillar + 1} Sourcing Standard</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gf-primary leading-tight">
                {current.title}
              </h3>

              <p className="text-sm text-gf-text-muted leading-relaxed">
                {current.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {current.bulletPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-gf-primary font-medium">
                    <CheckCircle2 className="w-4 h-4 text-gf-secondary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-gf-border flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-gf-text-muted">
                <strong>Certified for:</strong> EU Bio, USDA NOP, JAS & ISO 22000
              </div>

              <a
                href="#pricing"
                className="gf-btn-primary py-2.5 px-6 text-xs sm:text-sm"
              >
                <span>Book B2B Sourcing Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
