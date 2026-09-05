"use client";

import React, { useState } from "react";
import { 
  Plane, 
  Ship, 
  FileCheck2, 
  PackageCheck, 
  CreditCard, 
  ArrowRight, 
  Globe2, 
  Sparkles, 
  Clock, 
  BadgeCheck 
} from "lucide-react";
import { B2BRfqModal } from "@/components/ui/B2BRfqModal";

const LOGISTICS_LANES = [
  {
    id: "air-cargo",
    title: "Air Cargo Express",
    hub: "Tribhuvan Int'l Airport (KTM)",
    transit: "3 – 5 Days Door/Port",
    icon: Plane,
    idealFor: "Essential Oils, Pure Shilajit Resin, First-Flush White Teas, High-Pungency Timur, Sample Kits",
    destinations: ["Frankfurt (FRA)", "Dubai (DXB)", "London (LHR)", "Tokyo (NRT)", "Los Angeles (LAX)", "Singapore (SIN)"],
    temperatureControl: "Active Temperature-Monitored Cargo Holds (15°C - 25°C)",
    inclusions: "Direct Customs Clearance, Air Waybill (AWB), Phytosanitary Endorsement, DG Packaging"
  },
  {
    id: "ocean-fcl",
    title: "Ocean Container Freight",
    hub: "Kolkata / Haldia Dry Port (Transit Protocol)",
    transit: "18 – 32 Days Port to Port",
    icon: Ship,
    idealFor: "Industrial Hempcrete Hurd, Large Black Cardamom, Grains & Rice, Degummed Bast Fibers",
    destinations: ["Hamburg (DE)", "Rotterdam (NL)", "New York / NJ (US)", "Jebel Ali (UAE)", "Sydney (AU)"],
    temperatureControl: "Hermetic & Desiccant Protected 20ft & 40ft High Cube Containers",
    inclusions: "Bonded Indo-Nepal Transit Seal, Bill of Lading (B/L), Fumigation Certificate, Port Escort"
  }
];

const CERT_STANDARDS = [
  { name: "Eurofins Scientific", assay: "GC/MS & 500+ Pesticide Screen", validity: "Lot Specific COA" },
  { name: "SGS Inspection", assay: "Weight, Moisture & DNA Authenticity", validity: "Pre-Shipment Inspection" },
  { name: "Ministry of Agriculture Nepal", assay: "Official National Phytosanitary Certificate", validity: "Export Clearance" },
  { name: "USDA NOP & EU Bio", assay: "Certified Organic Equivalent Standards", validity: "Global Compliance" }
];

const PACKAGING_MODELS = [
  {
    name: "Bulk Industrial & Raw Supply",
    desc: "200L food-grade drums, 20kg compressed bales, 25kg multi-wall kraft bags, 1,000L IBC totes.",
    moq: "From 100 kg to 50 MT",
    leadTime: "3 - 7 Business Days"
  },
  {
    name: "OEM White-Label Formulations",
    desc: "Custom dropper bottles, retail stand-up pouches, nitrogen-flushed tins, private labeling.",
    moq: "From 500 Units",
    leadTime: "10 - 15 Business Days"
  },
  {
    name: "Artisanal Luxury Eco-Packaging",
    desc: "Handcrafted tree-free Lokta paper boxes, botanical-dyed cloth wrapping, wooden gift chests.",
    moq: "From 250 Units",
    leadTime: "12 - 18 Business Days"
  }
];

export function GlobalTradeHub() {
  const [activeLane, setActiveLane] = useState("air-cargo");
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqTopic, setRfqTopic] = useState("Export Freight & Logistics Proforma");

  const handleOpenConsultation = (topic: string) => {
    setRfqTopic(topic);
    setIsRfqOpen(true);
  };

  const currentLane = LOGISTICS_LANES.find((l) => l.id === activeLane) || LOGISTICS_LANES[0];

  return (
    <section id="trade-hub" className="py-24 lg:py-32 bg-white border-t border-gf-border relative overflow-hidden">
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20 relative z-10">
        
        {/* =========================================================================
            1. SECTION HEADER
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-[#1B4D36] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Globe2 className="w-3.5 h-3.5 text-gf-secondary" />
              Turnkey Export Logistics & Incoterms Trust Matrix
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-[3.2rem] font-extrabold tracking-tight text-[#183B2B] leading-tight">
            Connecting Himalayan Valleys to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D4F] via-[#386641] to-[#183B2B]">
              Global Trade Ports
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-gf-text-muted leading-relaxed font-normal">
            Eliminate customs complexity, long lead times, and freight uncertainty. The Nepal Organic Export Secretariat provides end-to-end bonded freight, accredited third-party assays, custom white-label packaging, and institutional trade finance.
          </p>
        </div>

        {/* =========================================================================
            2. INTERACTIVE MULTI-MODAL LOGISTICS VISUALIZER
            ========================================================================= */}
        <div className="rounded-3xl bg-[#F4F9F5] border border-emerald-200/80 p-6 sm:p-10 shadow-xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-emerald-200/70 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                Logistics Module 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#183B2B]">
                Multi-Modal Dual Freight Routing
              </h3>
            </div>

            {/* Freight Lane Toggle Buttons */}
            <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-gray-200 shadow-sm shrink-0">
              {LOGISTICS_LANES.map((lane) => {
                const isSelected = activeLane === lane.id;
                const IconComponent = lane.icon;
                return (
                  <button
                    key={lane.id}
                    type="button"
                    onClick={() => setActiveLane(lane.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? "bg-[#183B2B] text-white shadow-md"
                        : "text-gray-700 hover:text-[#183B2B] hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{lane.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Lane Visual Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Lane Details (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#183B2B] text-white flex items-center justify-center shadow-md">
                  <currentLane.icon className="w-6 h-6 text-gf-peach" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#183B2B]">{currentLane.title}</h4>
                  <p className="text-xs text-gf-text-muted font-mono">Origin Hub: {currentLane.hub}</p>
                </div>
              </div>

              {/* Transit Time & Climate Control Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Typical Transit Duration</span>
                  <span className="font-mono font-extrabold text-[#2E7D4F] text-base block">{currentLane.transit}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Climate & Quality Assurance</span>
                  <span className="font-sans font-semibold text-[#183B2B] text-xs leading-tight block">{currentLane.temperatureControl}</span>
                </div>
              </div>

              {/* Ideal Commodities */}
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-1.5">
                <span className="text-xs font-bold text-[#183B2B] block">Optimal Sourcing Commodities:</span>
                <p className="text-xs text-gf-text leading-relaxed font-light">{currentLane.idealFor}</p>
              </div>

              {/* Included Documentation */}
              <div className="flex items-center gap-2 text-xs text-gf-text-muted">
                <BadgeCheck className="w-4 h-4 text-gf-secondary shrink-0" />
                <span><strong>Included Documentation:</strong> {currentLane.inclusions}</span>
              </div>
            </div>

            {/* Right Destination Port Network (5 Cols) */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#183B2B] uppercase tracking-wider">
                  Direct Global Dispatches
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md font-bold">
                  Scheduled Departures
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {currentLane.destinations.map((dest, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-mono font-semibold text-[#183B2B] flex items-center gap-2 hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="truncate">{dest}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenConsultation(`Freight Schedule for ${currentLane.title}`)}
                  className="gf-btn-primary w-full justify-center text-xs py-2.5 shadow-sm cursor-pointer"
                >
                  <span>Request Specific Port Rate Proforma</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            3. 3-COLUMN CAPABILITY BENTO (QA ASSAYS + OEM PACKAGING + TRADE FINANCING)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Third-Party Lab Testing */}
          <div className="gf-card p-6 sm:p-8 bg-white border border-gray-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1B4D36] flex items-center justify-center shadow-sm">
                <FileCheck2 className="w-6 h-6 text-gf-secondary" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Quality Assurance</span>
                <h3 className="text-xl font-bold text-[#183B2B]">Eurofins & SGS Lab COA</h3>
                <p className="text-xs text-gf-text-muted leading-relaxed font-light">
                  Every commercial export lot is accompanied by certified third-party gas chromatography, pesticide screenings, and heavy metal assays.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {CERT_STANDARDS.map((cert, cIdx) => (
                  <div key={cIdx} className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-xs space-y-0.5">
                    <span className="font-bold text-[#183B2B] block">{cert.name}</span>
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span>{cert.assay}</span>
                      <span className="font-mono text-emerald-700 font-semibold">{cert.validity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleOpenConsultation("Sample Lab Reports & COA Archives")}
              className="gf-btn-outline w-full justify-center text-xs py-2.5 cursor-pointer"
            >
              <span>Download Sample COA Reports</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: OEM White Labeling */}
          <div className="gf-card p-6 sm:p-8 bg-white border border-gray-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shadow-sm">
                <PackageCheck className="w-6 h-6 text-amber-700" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">Contract Manufacturing</span>
                <h3 className="text-xl font-bold text-[#183B2B]">OEM & Custom White-Label</h3>
                <p className="text-xs text-gf-text-muted leading-relaxed font-light">
                  Turnkey formulation, blending, and retail packaging for international luxury wellness brands, tea blenders, and cosmetic lines.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {PACKAGING_MODELS.map((pkg, pIdx) => (
                  <div key={pIdx} className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#183B2B]">
                      <span>{pkg.name}</span>
                      <span className="text-[10px] text-emerald-700 font-mono">{pkg.moq}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-tight">{pkg.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleOpenConsultation("OEM Custom Packaging Consultation")}
              className="gf-btn-outline w-full justify-center text-xs py-2.5 cursor-pointer"
            >
              <span>Inquire Private Labeling</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Trade Finance & Escrow */}
          <div className="gf-card p-6 sm:p-8 bg-white border border-gray-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1B4D36] flex items-center justify-center shadow-sm">
                <CreditCard className="w-6 h-6 text-gf-secondary" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Trade Finance</span>
                <h3 className="text-xl font-bold text-[#183B2B]">Secure Commercial Terms</h3>
                <p className="text-xs text-gf-text-muted leading-relaxed font-light">
                  Institutional security with international banking partners (Standard Chartered, Nabil Bank) supporting standard international Incoterms.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs space-y-1">
                  <span className="font-bold text-[#183B2B] block">Irrevocable L/C at Sight</span>
                  <span className="text-[11px] text-gray-500 block">For containerized ocean FCL and large annual contracts.</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs space-y-1">
                  <span className="font-bold text-[#183B2B] block">Telegraphic Transfer (T/T Wire)</span>
                  <span className="text-[11px] text-gray-500 block">Milestone terms (30% advance, 70% upon B/L and COA dispatch).</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs space-y-1">
                  <span className="font-bold text-[#183B2B] block">Trade Escrow & Sample Air Mail</span>
                  <span className="text-[11px] text-gray-500 block">Low-risk trial orders for new international importers.</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleOpenConsultation("Commercial Banking & Escrow Terms")}
              className="gf-btn-outline w-full justify-center text-xs py-2.5 cursor-pointer"
            >
              <span>View Banking Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* =========================================================================
            4. VIP BUYER DELEGATION ACCREDITATION AT THE EXPO (MARCH 2026)
            ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-[#183B2B] via-[#1F4332] to-[#2E7D4F] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-emerald-600/30">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-gf-peach text-xs font-bold uppercase tracking-wider border border-white/15 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                VIP International Buyer Delegation · Kathmandu 2026
              </span>
              
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Visiting Kathmandu for the Expo? <br className="hidden sm:inline" />
                Access the Private Bilateral Deal Lounge & Farm Tours
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100 font-light max-w-2xl leading-relaxed">
                Registered international trade buyers receive complimentary airport VIP protocol, access to private sampling cupping suites, on-demand translators, and organized post-expo helicopter and overland terroir visits to industrial hemp processing plants, organic tea estates, and wild spice reserves.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 items-stretch lg:items-end justify-center">
              <button
                type="button"
                onClick={() => handleOpenConsultation("VIP International Buyer Delegation Pass")}
                className="gf-btn-white w-full text-center justify-center text-xs sm:text-sm py-4 shadow-2xl hover:scale-105 transition-all font-bold cursor-pointer"
              >
                <span>Accredit as VIP Buyer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleOpenConsultation("Virtual Bilateral Sourcing Deal Room")}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold tracking-wide transition-all cursor-pointer text-center"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Schedule Virtual Deal Room</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* RFQ Modal */}
      <B2BRfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        initialProduct={rfqTopic}
      />
    </section>
  );
}
