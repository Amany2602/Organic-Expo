"use client";

import React, { useState } from "react";
import { Calendar, Mountain, Droplets, CheckCircle2, ArrowRight, Sparkles, Filter, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface HarvestItem {
  id: string;
  name: string;
  season: string;
  seasonCategory: "spring" | "monsoon" | "autumn" | "winter";
  origin: string;
  elevation: string;
  harvestWindow: string;
  certifications: string[];
  volume: string;
  moisture: string;
  keyCompounds: string;
  image: string;
}

const HARVEST_DATA: HarvestItem[] = [
  {
    id: "white-needle-tea",
    name: "Ilam First Flush White Needle Tea",
    season: "Spring First Flush",
    seasonCategory: "spring",
    origin: "Ilam & Dhankuta, Sandakphu Slopes",
    elevation: "2,150m – 2,400m",
    harvestWindow: "March 15 – April 30",
    certifications: ["EU Organic", "USDA NOP", "JAS Bio"],
    volume: "18.5 Metric Tons",
    moisture: "< 4.8% Moisture",
    keyCompounds: "High EGCG Antioxidants & Floral Theanine",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "arabica-coffee",
    name: "Specialty Shade-Grown Arabica",
    season: "Winter Alpine Harvest",
    seasonCategory: "winter",
    origin: "Nuwakot & Lalitpur High Hills",
    elevation: "1,450m – 1,850m",
    harvestWindow: "December 1 – February 28",
    certifications: ["Fair Trade", "EU Bio Equivalent", "Rainforest"],
    volume: "35.0 Metric Tons",
    moisture: "10.5% - 11.2%",
    keyCompounds: "Cupping Score 87.5+ · Citrus & Honey Notes",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cliff-honey",
    name: "Raw Himalayan Wild Cliff Honey",
    season: "Spring First Flush",
    seasonCategory: "spring",
    origin: "Annapurna & Manaslu High Cliffs",
    elevation: "2,800m – 3,600m",
    harvestWindow: "May 1 – June 15",
    certifications: ["100% Raw Wild", "Phytosanitary Verified"],
    volume: "8.2 Metric Tons",
    moisture: "< 17.5% Natural Moisture",
    keyCompounds: "High Bioactive Enzymes & Grayanotoxin Purity",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "timur-pepper",
    name: "Mustang Wild Timur Pepper",
    season: "Autumn High Harvest",
    seasonCategory: "autumn",
    origin: "Mustang, Karnali & Myagdi",
    elevation: "2,200m – 3,100m",
    harvestWindow: "September 20 – November 10",
    certifications: ["Wild-Crafted Bio", "ISO 22000", "EU Organic"],
    volume: "42.0 Metric Tons",
    moisture: "< 9.0% Sun-Dried",
    keyCompounds: "5.8% Volatile Essential Oil · High Citronellal",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "black-cardamom",
    name: "Taplejung Jumbo Black Cardamom (Alaichi)",
    season: "Autumn High Harvest",
    seasonCategory: "autumn",
    origin: "Taplejung & Panchthar Valleys",
    elevation: "1,200m – 2,000m",
    harvestWindow: "October 1 – December 15",
    certifications: ["Smokeless Kiln Dried", "USDA NOP", "EU Organic"],
    volume: "85.0 Metric Tons",
    moisture: "< 11.0% Moisture",
    keyCompounds: "3.2% 1,8-Cineole Oil · Bold 22mm+ Pods",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "marsi-rice",
    name: "Jumla Heritage Marsi Red Rice",
    season: "Autumn High Harvest",
    seasonCategory: "autumn",
    origin: "Jumla High Mountain Terraces",
    elevation: "2,600m Glacier-Fed",
    harvestWindow: "October 10 – November 25",
    certifications: ["Geographical Indication", "Zero Chemical"],
    volume: "60.0 Metric Tons",
    moisture: "12.0% Equilibrium",
    keyCompounds: "Rich in Anthocyanin, Iron & Dietary Fiber",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
  },
];

const SEASONS = [
  { id: "all", label: "All Seasons", count: 6 },
  { id: "spring", label: "Spring First Flush (Mar - May)", count: 2 },
  { id: "autumn", label: "Autumn High Harvest (Sep - Nov)", count: 3 },
  { id: "winter", label: "Winter Alpine Extractions (Dec - Feb)", count: 1 },
];

export function HarvestCalendar() {
  const [selectedSeason, setSelectedSeason] = useState<string>("all");
  const [reservedItem, setReservedItem] = useState<string | null>(null);

  const filteredItems =
    selectedSeason === "all"
      ? HARVEST_DATA
      : HARVEST_DATA.filter((item) => item.seasonCategory === selectedSeason);

  return (
    <section id="harvest-calendar" className="py-20 lg:py-24 bg-white border-t border-gf-border relative overflow-hidden">
      {/* Background Subtle Organic Watermark */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gf-bg-tint/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gf-bg-tint/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-14 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="gf-badge">
              <Calendar className="w-3.5 h-3.5 text-gf-secondary" />
              Interactive Sourcing Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary">
              Himalayan Seasonal Yield & <br className="hidden sm:inline" />
              <span className="text-gf-secondary">Harvest Calendar 2026</span>
            </h2>
            <p className="text-sm sm:text-base text-gf-text-muted">
              Explore harvest cycles, altitude micro-climates, and verified export batch availability directly from mountain grower cooperatives.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gf-bg-warm border border-gf-border flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gf-secondary/15 flex items-center justify-center text-gf-secondary font-bold">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-gf-primary">Live Batch Availability</p>
              <p className="text-[11px] text-gf-text-muted">240+ Metric Tons Verified</p>
            </div>
          </div>
        </div>

        {/* Season Filter Tabs (EcoGrow Signature Style with Horizontal Swipe on Mobile) */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2 pt-1 border-b border-gf-border">
          {SEASONS.map((season) => {
            const isActive = selectedSeason === season.id;
            return (
              <button
                key={season.id}
                type="button"
                onClick={() => setSelectedSeason(season.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 whitespace-nowrap",
                  isActive
                    ? "bg-gf-primary text-white shadow-md"
                    : "bg-gf-bg-warm text-gf-primary hover:bg-gf-bg-tint border border-gf-border"
                )}
              >
                <span>{season.label}</span>
                <span
                  className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-mono font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-gf-border text-gf-text-muted"
                  )}
                >
                  {season.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Grid of Harvest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gf-card overflow-hidden flex flex-col justify-between group border border-gf-border hover:border-gf-secondary/40 transition-all duration-300"
            >
              {/* Image & Elevation Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gf-bg-tint">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white flex items-center gap-1.5 border border-white/20">
                  <Mountain className="w-3.5 h-3.5 text-gf-accent-mint" />
                  <span>{item.elevation}</span>
                </div>

                <div className="absolute top-3 right-3 bg-gf-secondary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {item.volume}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-gf-secondary uppercase tracking-wider">
                    {item.season} · {item.harvestWindow}
                  </span>
                  <h3 className="text-lg font-bold text-gf-primary leading-snug group-hover:text-gf-secondary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gf-text-muted flex items-center gap-1">
                    <span>Origin:</span>
                    <strong className="text-gf-primary font-medium">{item.origin}</strong>
                  </p>
                </div>

                {/* Specs Box */}
                <div className="p-3 rounded-xl bg-gf-bg-warm border border-gf-border space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gf-text-muted">Moisture / Purity:</span>
                    <span className="font-mono font-bold text-gf-primary">{item.moisture}</span>
                  </div>
                  <div className="text-[11px] text-gf-text-muted leading-tight">
                    <strong className="text-gf-primary">Profile:</strong> {item.keyCompounds}
                  </div>
                </div>

                {/* Certifications & Action */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-[10px] bg-gf-bg-tint text-gf-secondary px-2.5 py-0.5 rounded-full font-semibold border border-gf-secondary/20"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="w-full gf-btn-outline py-2.5 text-xs flex items-center justify-center gap-2 group-hover:bg-gf-secondary group-hover:text-white group-hover:border-gf-secondary transition-all"
                  >
                    <span>Request Evaluation Sample</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gf-primary text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">Need Custom Micro-Lot or Contract Farming?</h4>
            <p className="text-xs sm:text-sm text-gf-accent-sage">
              Meet directly with cooperative chairpersons at Pavilion 01 & 04 to lock seasonal allocations before international dispatch.
            </p>
          </div>

          <a
            href="#pricing"
            className="gf-btn-white text-xs sm:text-sm shrink-0 uppercase tracking-wider font-bold"
          >
            <span>Schedule Sourcing Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
