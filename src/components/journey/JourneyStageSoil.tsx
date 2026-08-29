import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Layers, CheckCircle2 } from "lucide-react";

export function JourneyStageSoil() {
  return (
    <div className="w-full py-16 sm:py-24 relative overflow-hidden bg-[#18120D] text-soil-50 transition-colors duration-700">
      {/* Background Topographic Matrix */}
      <div className="absolute inset-0 dark-topographic-grid opacity-20 pointer-events-none" />

      {/* Ambient Soil Glow */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#856a4f]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge variant="inverse">
                  <Layers className="w-3.5 h-3.5 text-soil-300" />
                  STAGE 01 : UNTREATED EARTH
                </Badge>
                <span className="font-mono text-xs text-soil-400">
                  Origin Elevation: 1,200m – 3,500m
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight font-normal text-soil-50">
                Everything begins beneath our feet.
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-soil-300 font-light">
                Living Terroir &amp; Indigenous Microbial Earth
              </p>
            </div>

            <p className="text-base sm:text-lg text-soil-200/90 font-light leading-relaxed max-w-xl">
              High-altitude soils nourished by mineral-rich glacial runoffs, undisturbed humus,
              and ancient microbial biomes completely free from synthetic chemical fertilizers
              or industrial pesticides.
            </p>

            {/* Terroir Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 bg-soil-900/80 border border-soil-700/60 rounded-xs space-y-1">
                <span className="text-[10px] uppercase text-soil-400 block">
                  Organic Humus
                </span>
                <span className="text-lg font-bold text-soil-100">4.8%+</span>
                <span className="text-[10px] text-soil-400 block">
                  Bio-active fungal strata
                </span>
              </div>
              <div className="p-4 bg-soil-900/80 border border-soil-700/60 rounded-xs space-y-1">
                <span className="text-[10px] uppercase text-soil-400 block">
                  Synthetic Residue
                </span>
                <span className="text-lg font-bold text-forest-300">0.00%</span>
                <span className="text-[10px] text-soil-400 block">
                  Pristine mountain soil
                </span>
              </div>
              <div className="p-4 bg-soil-900/80 border border-soil-700/60 rounded-xs space-y-1">
                <span className="text-[10px] uppercase text-soil-400 block">
                  Glacial Minerals
                </span>
                <span className="text-lg font-bold text-gold-300">Rich Trace</span>
                <span className="text-[10px] text-soil-400 block">
                  Crystalline silt deposits
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Representation: Deep Earth Strata & Soil Contours */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md p-6 bg-soil-900/70 border border-soil-700/80 rounded-xs flex flex-col justify-between overflow-hidden shadow-dark-card">
              <div className="flex items-center justify-between font-mono text-[10px] text-soil-400 border-b border-soil-800 pb-3">
                <span>STRATA TRANSECT // NEPAL TERROIR</span>
                <span className="text-gold-400">DEPTH: 0m — 2.5m</span>
              </div>

              {/* SVG Strata & Contours */}
              <div className="my-4 w-full h-48 sm:h-56 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 400 240"
                  className="w-full h-full text-soil-400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Deep Humus Horizon */}
                  <path
                    d="M 10 30 Q 100 15, 200 35 T 390 25"
                    stroke="#cbba9f"
                    strokeWidth="1.5"
                    strokeDasharray="2 4"
                  />
                  <text x="15" y="22" fill="#cbba9f" fontSize="9" fontFamily="monospace">
                    HORIZON A: ORGANIC HUMUS
                  </text>

                  {/* Microbial Root Zone */}
                  <path
                    d="M 10 70 Q 90 90, 200 65 T 390 75"
                    stroke="#856a4f"
                    strokeWidth="1.75"
                  />
                  <path
                    d="M 10 110 Q 120 95, 220 120 T 390 105"
                    stroke="#856a4f"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
                  <text x="15" y="62" fill="#856a4f" fontSize="9" fontFamily="monospace">
                    HORIZON B: LIVING BIOMASS &amp; ROOTS
                  </text>

                  {/* Mineral Bedrock Strata */}
                  <path
                    d="M 10 150 Q 80 170, 190 145 T 390 160"
                    stroke="#614c37"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 10 190 Q 110 210, 210 185 T 390 200"
                    stroke="#423426"
                    strokeWidth="2"
                  />
                  <text x="15" y="142" fill="#614c37" fontSize="9" fontFamily="monospace">
                    HORIZON C: GLACIAL MINERAL STRATA
                  </text>

                  {/* Bio-active Sparkles / Indicators */}
                  <circle cx="120" cy="85" r="3" fill="#82cca5" />
                  <circle cx="260" cy="95" r="2.5" fill="#eed07d" />
                  <circle cx="310" cy="65" r="3" fill="#82cca5" />
                </svg>
              </div>

              <div className="pt-3 border-t border-soil-800 flex items-center justify-between text-xs font-mono text-soil-400">
                <span className="flex items-center gap-1.5 text-soil-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-400" />
                  Verified Pure Soil Sanctity
                </span>
                <span>Bio-Index: 9.4/10</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
