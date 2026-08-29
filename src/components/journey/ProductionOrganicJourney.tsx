"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { PRODUCTION_JOURNEY_STAGES } from "@/lib/data/journey";
import { JourneyEnvironment } from "./JourneyEnvironment";
import { JourneyNarrativeStage } from "./JourneyNarrativeStage";
import { SubtleStageIndicator } from "./SubtleStageIndicator";
import { JourneyEcosystemIntro } from "./JourneyEcosystemIntro";
import { Container } from "@/components/ui/Container";

export function ProductionOrganicJourney() {
  const [progress, setProgress] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Active Stage Index based on progress float
  const activeStageIndex = Math.min(
    Math.max(0, Math.floor(progress + 0.1)),
    PRODUCTION_JOURNEY_STAGES.length - 1
  );
  const currentStage = PRODUCTION_JOURNEY_STAGES[activeStageIndex];

  // Listen for system prefers-reduced-motion setting
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Synchronize natural browser scroll with continuous progress
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (scrollTrackRef.current) {
            const rect = scrollTrackRef.current.getBoundingClientRect();
            const totalScrollable = scrollTrackRef.current.scrollHeight - window.innerHeight;

            if (totalScrollable > 0) {
              const scrolled = -rect.top;
              const rawProgress = (scrolled / totalScrollable) * (PRODUCTION_JOURNEY_STAGES.length - 1);
              const clamped = Math.min(Math.max(0, rawProgress), PRODUCTION_JOURNEY_STAGES.length - 1);
              setProgress(clamped);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Stage Jump Handler
  const jumpToStage = useCallback((targetIndex: number) => {
    const clampedIndex = Math.min(Math.max(0, targetIndex), PRODUCTION_JOURNEY_STAGES.length - 1);
    setProgress(clampedIndex);

    if (scrollTrackRef.current) {
      const totalScrollable = scrollTrackRef.current.scrollHeight - window.innerHeight;
      const targetScroll = (clampedIndex / (PRODUCTION_JOURNEY_STAGES.length - 1)) * totalScrollable;
      const containerTop = scrollTrackRef.current.offsetTop;

      window.scrollTo({
        top: containerTop + targetScroll,
        behavior: isReducedMotion ? "auto" : "smooth",
      });
    }
  }, [isReducedMotion]);

  // Pointer Movement Handler for spatial depth on desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isReducedMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x, y });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isReducedMotion]);

  // Keyboard Navigation Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === "1") jumpToStage(0);
      else if (e.key === "2") jumpToStage(1);
      else if (e.key === "3") jumpToStage(2);
      else if (e.key === "4") jumpToStage(3);
      else if (e.key === "5") jumpToStage(4);
      else if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        if (activeStageIndex < PRODUCTION_JOURNEY_STAGES.length - 1) {
          e.preventDefault();
          jumpToStage(activeStageIndex + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        if (activeStageIndex > 0) {
          e.preventDefault();
          jumpToStage(activeStageIndex - 1);
        }
      } else if (e.key === "Home") {
        e.preventDefault();
        jumpToStage(0);
      } else if (e.key === "End") {
        e.preventDefault();
        jumpToStage(PRODUCTION_JOURNEY_STAGES.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStageIndex, jumpToStage]);

  return (
    <div id="journey" className="relative w-full bg-forest-950 text-cream-50 selection:bg-leaf-600 selection:text-white">
      {/* Accessibility Announcement for Screen Readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Current Journey Stage: {currentStage.number} - {currentStage.label}: {currentStage.title}. {currentStage.statement}
      </div>

      {/* Multi-screen Scroll Track */}
      <div
        ref={scrollTrackRef}
        id="journey-narrative"
        aria-label="The 5-Stage Organic Journey Narrative"
        className="relative w-full min-h-[380vh] sm:min-h-[420vh]"
      >
        {/* Sticky Viewport Container */}
        <div
          ref={containerRef}
          className="sticky top-0 min-h-screen w-full flex flex-col justify-between overflow-hidden border-b border-forest-800/80 bg-forest-950"
        >
          {/* Narrative Navigation Bar */}
          <header className="w-full px-4 sm:px-8 py-4 border-b border-forest-800/80 bg-forest-950/95 sticky top-[57px] sm:top-[65px] z-30 backdrop-blur-md">
            <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-leaf-400" />
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase tracking-widest text-leaf-300 font-semibold">
                    The Organic Journey
                  </span>
                  <span className="font-sans text-[11px] text-cream-300/80 hidden md:inline font-light">
                    From Nepal&apos;s Soil to the World (5 Continuous Transformations)
                  </span>
                </div>
              </div>

              <SubtleStageIndicator
                activeStageIndex={activeStageIndex}
                onSelectStage={jumpToStage}
              />
            </Container>
          </header>

          {/* Main Stage Grid Viewport */}
          <main className="flex-grow relative flex items-center py-6 sm:py-8 lg:py-12 z-10 overflow-y-auto lg:overflow-visible">
            <Container className="w-full">
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left Column: Semantic Narrative & Typographic Progression */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <JourneyNarrativeStage
                    stage={currentStage}
                    activeStageIndex={activeStageIndex}
                    onAdvance={() => jumpToStage(activeStageIndex + 1)}
                    onPrevious={() => jumpToStage(activeStageIndex - 1)}
                    isFirstStage={activeStageIndex === 0}
                    isLastStage={activeStageIndex === PRODUCTION_JOURNEY_STAGES.length - 1}
                  />
                </div>

                {/* Right Column: Transforming Vector Environment Engine */}
                <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center">
                  <JourneyEnvironment
                    progress={progress}
                    activeStageIndex={activeStageIndex}
                    mouseOffset={mouseOffset}
                    isReducedMotion={isReducedMotion}
                    className="w-full"
                  />
                </div>
              </div>
            </Container>
          </main>

          {/* Footer Continuum Indicator */}
          <footer className="w-full px-4 sm:px-8 py-3.5 bg-forest-950/95 backdrop-blur-md border-t border-forest-800/80 z-20 flex items-center justify-between font-mono text-[11px] text-cream-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf-400" />
              <span className="hidden sm:inline font-sans">Scroll naturally to evolve stage</span>
              <span className="sm:hidden font-sans">Stage {currentStage.number} of 05</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-leaf-300 font-bold uppercase font-sans">{currentStage.label}</span>
              <span className="text-forest-600">{"//"}</span>
              <span className="text-cream-200">{currentStage.elevation}</span>
            </div>
          </footer>
        </div>
      </div>

      {/* Decelerating Section 02 Transition: The Organic Ecosystem Intro */}
      <JourneyEcosystemIntro />
    </div>
  );
}
