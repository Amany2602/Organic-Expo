"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SubtleStageIndicator } from "./SubtleStageIndicator";
import { JourneyStageSoil } from "./JourneyStageSoil";
import { JourneyStageFarm } from "./JourneyStageFarm";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Compass } from "lucide-react";

export function ProductionJourneyIntro() {
  const [activeStage, setActiveStage] = useState<"soil" | "farm">("soil");

  return (
    <section
      id="journey"
      aria-label="Organic Journey Ecosystem Introduction"
      className="relative w-full border-t border-soil-800/80 bg-soil-950 text-soil-50"
    >
      {/* Narrative Transition Header Bar */}
      <div className="w-full py-6 px-4 sm:px-8 border-b border-soil-800/80 bg-soil-950/95 sticky top-[57px] sm:top-[65px] z-30 backdrop-blur-md">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold-400" />
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-300 font-semibold">
                The Organic Journey
              </span>
              <span className="font-mono text-[10px] text-soil-400 hidden sm:inline">
                A 5-Stage Living Continuum from Nepal to the World
              </span>
            </div>
          </div>

          <SubtleStageIndicator
            activeStageIndex={activeStage === "soil" ? 0 : 1}
            onSelectStage={(idx) => setActiveStage(idx === 0 ? "soil" : "farm")}
          />
        </Container>
      </div>

      {/* Dynamic Active Chapter Render */}
      <div className="w-full relative min-h-[500px]">
        {activeStage === "soil" ? (
          <div className="animate-in fade-in duration-300">
            <JourneyStageSoil />
          </div>
        ) : (
          <div className="animate-in fade-in duration-300">
            <JourneyStageFarm />
          </div>
        )}
      </div>

      {/* Narrative Stage Advance Footer Banner */}
      <div className="w-full py-8 border-t border-soil-800/80 bg-soil-950">
        <Container>
          <div className="p-6 sm:p-8 bg-soil-900/60 border border-soil-800 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-xs text-gold-400">
                <Compass className="w-3.5 h-3.5" />
                <span>CONTINUOUS ECOSYSTEM TRANSFORMATION</span>
              </div>
              <p className="text-sm sm:text-base text-soil-200 font-light max-w-xl">
                {activeStage === "soil"
                  ? "Soil purity feeds high-altitude crop cultivation. Experience the terraced polyculture of mountain communities."
                  : "From terraced farming, the harvest flows to clean artisanal processing, verified certification, and global trade."}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {activeStage === "soil" ? (
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => setActiveStage("farm")}
                  className="gap-2 font-mono text-xs uppercase tracking-wider"
                >
                  <span>Advance to Stage 02 (Farm)</span>
                  <ArrowRight className="w-4 h-4 text-forest-950" />
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setActiveStage("soil")}
                  className="gap-2 font-mono text-xs uppercase tracking-wider"
                >
                  <span>Return to Stage 01 (Soil)</span>
                </Button>
              )}

              <Button
                variant="inverse"
                size="md"
                href="#participate"
                className="font-mono text-xs uppercase tracking-wider"
              >
                Join As Partner
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
