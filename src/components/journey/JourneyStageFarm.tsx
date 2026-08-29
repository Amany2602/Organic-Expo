import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Sprout, Mountain, ShieldCheck } from "lucide-react";

export function JourneyStageFarm() {
  return (
    <div className="w-full py-16 sm:py-24 relative overflow-hidden bg-[#081A12] text-soil-50 transition-colors duration-700">
      {/* Background Topographic Matrix */}
      <div className="absolute inset-0 dark-topographic-grid opacity-20 pointer-events-none" />

      {/* Ambient Forest Glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#256347]/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge variant="inverse">
                  <Sprout className="w-3.5 h-3.5 text-forest-300" />
                  STAGE 02 : BOTANICAL CROPS
                </Badge>
                <span className="font-mono text-xs text-forest-300/80">
                  Elevation Span: 800m – 3,800m
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight font-normal text-soil-50">
                Where natural abundance becomes cultivation.
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-forest-300 font-light">
                High-Altitude Terraced Polyculture &amp; Wildcrafting
              </p>
            </div>

            <p className="text-base sm:text-lg text-soil-200/90 font-light leading-relaxed max-w-xl">
              The organic contours elevate into stepped mountain terraces. Multi-generational
              farming communities preserve 140+ heirloom crops, medicinal herbs, and sacred tea
              gardens in intimate symbiosis with the natural landscape.
            </p>

            {/* Farm Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 bg-forest-950/80 border border-forest-800/80 rounded-xs space-y-1">
                <span className="text-[10px] uppercase text-forest-300/70 block">
                  Agro-Climates
                </span>
                <span className="text-lg font-bold text-forest-100">5 Zones</span>
                <span className="text-[10px] text-forest-300/60 block">
                  Terai to High Alpine
                </span>
              </div>
              <div className="p-4 bg-forest-950/80 border border-forest-800/80 rounded-xs space-y-1">
                <span className="text-[10px] uppercase text-forest-300/70 block">
                  Heirloom Genetics
                </span>
                <span className="text-lg font-bold text-gold-300">140+ Varieties</span>
                <span className="text-[10px] text-forest-300/60 block">
                  Non-GMO landraces
                </span>
              </div>
              <div className="p-4 bg-forest-950/80 border border-forest-800/80 rounded-xs space-y-1">
                <span className="text-[10px] uppercase text-forest-300/70 block">
                  Mountain Guilds
                </span>
                <span className="text-lg font-bold text-forest-200">30,000+</span>
                <span className="text-[10px] text-forest-300/60 block">
                  Smallholder farming units
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Representation: Stepped Mountain Terraces */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md p-6 bg-forest-950/70 border border-forest-800/90 rounded-xs flex flex-col justify-between overflow-hidden shadow-dark-card">
              <div className="flex items-center justify-between font-mono text-[10px] text-forest-300/80 border-b border-forest-900 pb-3">
                <span className="flex items-center gap-1.5 text-forest-200">
                  <Mountain className="w-3.5 h-3.5 text-forest-400" />
                  TERRACED ELEVATION GEOMETRY
                </span>
                <span className="text-gold-400">77 DISTRICTS</span>
              </div>

              {/* SVG Terraced Contours */}
              <div className="my-4 w-full h-48 sm:h-56 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 400 240"
                  className="w-full h-full text-forest-400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="terraceStep1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#35835f" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#102e21" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="terraceStep2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#51a77d" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#102e21" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  {/* High Terrace Tier 1 */}
                  <path
                    d="M 20 40 C 90 25, 210 50, 380 30 L 380 75 C 260 90, 120 70, 20 85 Z"
                    fill="url(#terraceStep1)"
                    stroke="#51a77d"
                    strokeWidth="1.5"
                  />
                  <text x="30" y="58" fill="#82cca5" fontSize="9" fontFamily="monospace">
                    TIER 01: HIGH ALPINE HERBS &amp; TEA (2,400m)
                  </text>

                  {/* Mid Terrace Tier 2 */}
                  <path
                    d="M 20 95 C 110 80, 230 105, 380 90 L 380 145 C 240 160, 110 135, 20 150 Z"
                    fill="url(#terraceStep2)"
                    stroke="#35835f"
                    strokeWidth="1.5"
                  />
                  <text x="30" y="118" fill="#51a77d" fontSize="9" fontFamily="monospace">
                    TIER 02: HEIRLOOM GRAINS &amp; CARDAMOM (1,600m)
                  </text>

                  {/* Lower Valley Terrace Tier 3 */}
                  <path
                    d="M 20 160 C 130 145, 250 170, 380 155 L 380 215 C 250 230, 90 205, 20 220 Z"
                    fill="rgba(37, 99, 71, 0.12)"
                    stroke="#256347"
                    strokeWidth="1.5"
                  />
                  <text x="30" y="188" fill="#35835f" fontSize="9" fontFamily="monospace">
                    TIER 03: SUB-TROPICAL BOTANICALS &amp; COFFEE (900m)
                  </text>

                  {/* Seed & Crop Markers */}
                  <circle cx="90" cy="62" r="2.5" fill="#eed07d" />
                  <circle cx="280" cy="122" r="2.5" fill="#82cca5" />
                  <circle cx="160" cy="192" r="2.5" fill="#eed07d" />
                </svg>
              </div>

              <div className="pt-3 border-t border-forest-900 flex items-center justify-between text-xs font-mono text-forest-300/80">
                <span className="flex items-center gap-1.5 text-forest-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  Traditional Chemical-Free Cultivation
                </span>
                <span>Biodiversity: High</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
