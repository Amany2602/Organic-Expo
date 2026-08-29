"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { JOURNEY_STAGES } from "./types";
import { JourneyCanvas } from "./JourneyCanvas";
import { JourneyNarrative } from "./JourneyNarrative";
import { JourneyStageIndicator } from "./JourneyStageIndicator";
import { JourneyControls } from "./JourneyControls";
import { JourneyAccessibility } from "./JourneyAccessibility";
import { Container } from "@/components/ui/Container";

export function JourneyEngine() {
  const [progress, setProgress] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });
  const [enableParallax, setEnableParallax] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Active Stage Index based on progress rounded
  const activeStageIndex = Math.min(
    Math.max(0, Math.floor(progress + 0.1)),
    JOURNEY_STAGES.length - 1
  );
  const currentStage = JOURNEY_STAGES[activeStageIndex];

  // Listen for system prefers-reduced-motion changes
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

  // Synchronize natural window scroll with progress when scroll mode is active
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTrackRef.current) return;
      const rect = scrollTrackRef.current.getBoundingClientRect();
      const totalScrollable = scrollTrackRef.current.scrollHeight - window.innerHeight;

      if (totalScrollable > 0) {
        const scrolled = -rect.top;
        const rawProgress = (scrolled / totalScrollable) * (JOURNEY_STAGES.length - 1);
        const clamped = Math.min(Math.max(0, rawProgress), JOURNEY_STAGES.length - 1);
        setProgress(clamped);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Stage Jump Handler
  const jumpToStage = useCallback((targetIndex: number) => {
    const clampedIndex = Math.min(Math.max(0, targetIndex), JOURNEY_STAGES.length - 1);
    setProgress(clampedIndex);

    if (scrollTrackRef.current) {
      const totalScrollable = scrollTrackRef.current.scrollHeight - window.innerHeight;
      const targetScroll = (clampedIndex / (JOURNEY_STAGES.length - 1)) * totalScrollable;
      const containerTop = scrollTrackRef.current.offsetTop;

      window.scrollTo({
        top: containerTop + targetScroll,
        behavior: isReducedMotion ? "auto" : "smooth",
      });
    }
  }, [isReducedMotion]);

  // Pointer Movement Handler for spatial depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!enableParallax || isReducedMotion || !containerRef.current) return;
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
  }, [enableParallax, isReducedMotion]);

  // Keyboard Navigation Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === "1") jumpToStage(0);
      else if (e.key === "2") jumpToStage(1);
      else if (e.key === "3") jumpToStage(2);
      else if (e.key === "4") jumpToStage(3);
      else if (e.key === "5") jumpToStage(4);
      else if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        jumpToStage(activeStageIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        jumpToStage(activeStageIndex - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        jumpToStage(0);
      } else if (e.key === "End") {
        e.preventDefault();
        jumpToStage(JOURNEY_STAGES.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStageIndex, jumpToStage]);

  return (
    <div
      ref={scrollTrackRef}
      className="relative w-full min-h-[420vh] bg-soil-950 text-soil-50 selection:bg-gold-500 selection:text-soil-950"
    >
      {/* Accessibility live announcements & landmarks */}
      <JourneyAccessibility
        currentStage={currentStage}
      />

      {/* Sticky Journey Viewport Frame */}
      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden border-b border-white/10"
      >
        {/* Editorial Top Bar */}
        <header className="w-full px-6 sm:px-10 py-5 flex items-center justify-between border-b border-white/10 z-30 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-gold-400 rotate-45" />
            <span className="font-mono text-xs text-gold-400 font-bold tracking-widest uppercase">
              [ THE ORGANIC JOURNEY ENGINE ]
            </span>
            <span className="font-display font-bold text-lg tracking-tight uppercase hidden md:inline text-soil-50">
              Organic Expo Nepal 2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/60 hidden sm:inline">
              Continuous Spatial Narrative
            </span>
            <span className="font-mono text-xs px-2.5 py-1 bg-white/10 border border-white/15 rounded-xs font-bold text-gold-300">
              {currentStage.number} / {currentStage.label}
            </span>
          </div>
        </header>

        {/* Main Spatial Stage Canvas Grid */}
        <main className="flex-grow relative flex items-center py-6 lg:py-10 z-10 overflow-y-auto lg:overflow-visible">
          <Container className="w-full h-full flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Spatial Narrative & Typographic Progression */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <JourneyNarrative
                  stage={currentStage}
                  progress={progress}
                  onAdvance={() => jumpToStage(activeStageIndex + 1)}
                  onPrevious={() => jumpToStage(activeStageIndex - 1)}
                  isFirstStage={activeStageIndex === 0}
                  isLastStage={activeStageIndex === JOURNEY_STAGES.length - 1}
                  isReducedMotion={isReducedMotion}
                />
              </div>

              {/* Right Column: Transforming Vector Landscape & Interactive Canvas */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center">
                <JourneyCanvas
                  progress={progress}
                  activeStageIndex={activeStageIndex}
                  mouseOffset={mouseOffset}
                  isReducedMotion={isReducedMotion}
                  className="rounded-xs border border-white/15 shadow-2xl w-full"
                />
              </div>

              {/* Right-most Vertical Milestone Indicator */}
              <div className="lg:col-span-1 order-3 hidden lg:flex flex-col justify-center">
                <JourneyStageIndicator
                  stages={JOURNEY_STAGES}
                  activeStageIndex={activeStageIndex}
                  progress={progress}
                  onSelectStage={jumpToStage}
                />
              </div>
            </div>
          </Container>
        </main>

        {/* Lab Inspector & Scrubbing Toolbar Footer */}
        <footer className="w-full px-6 sm:px-10 py-4 bg-black/70 backdrop-blur-md border-t border-white/10 z-30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-auto flex-grow max-w-2xl">
            <JourneyControls
              progress={progress}
              onProgressChange={(val) => {
                setProgress(val);
                if (scrollTrackRef.current) {
                  const totalScrollable = scrollTrackRef.current.scrollHeight - window.innerHeight;
                  const targetScroll = (val / (JOURNEY_STAGES.length - 1)) * totalScrollable;
                  window.scrollTo({ top: targetScroll, behavior: "auto" });
                }
              }}
              isReducedMotion={isReducedMotion}
              onToggleReducedMotion={() => setIsReducedMotion((prev) => !prev)}
              enableParallax={enableParallax}
              onToggleParallax={() => setEnableParallax((prev) => !prev)}
            />
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-white/50">
            <span className="hidden sm:inline">Scroll to transform</span>
            <span>{"//"}</span>
            <span>Nepal Agro-Ecological Platform</span>
          </div>
        </footer>
      </div>

      {/* Destination Expo Section at end of journey for smooth transition */}
      <section
        id="expo-directory-section"
        className="relative z-20 bg-soil-900 border-t border-white/10 py-24 text-soil-50"
      >
        <Container size="wide" className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="font-mono text-xs text-gold-400 uppercase tracking-widest">
              [ DESTINATION CORRIDOR ]
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-normal">
              From Nepal&apos;s High Mountain Terroir to International Commerce
            </h2>
            <p className="text-soil-300 font-light text-lg leading-relaxed">
              You have traversed the 5-stage transformation continuum. The inaugural Organic Nepal
              Expo 2026 unites certified producers, cold-press processors, verification auditors,
              and global trade delegations under one roof in Kathmandu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 bg-black/40 border border-white/10 rounded-xs space-y-3 font-mono">
              <span className="text-xs text-gold-400 block">EXPO EDITION</span>
              <h3 className="font-sans font-semibold text-lg text-white">Kathmandu 2026</h3>
              <p className="text-xs text-soil-300 font-light">
                Bhrikuti Mandap Exhibition Arena, Kathmandu, Nepal.
              </p>
            </div>

            <div className="p-6 bg-black/40 border border-white/10 rounded-xs space-y-3 font-mono">
              <span className="text-xs text-forest-300 block">VERIFIED EXHIBITORS</span>
              <h3 className="font-sans font-semibold text-lg text-white">120+ Organic Brands</h3>
              <p className="text-xs text-soil-300 font-light">
                Tea, specialty coffee, Himalayan herbs, medicinal honey, and essential oils.
              </p>
            </div>

            <div className="p-6 bg-black/40 border border-white/10 rounded-xs space-y-3 font-mono">
              <span className="text-xs text-mist-300 block">INTERNATIONAL BUYERS</span>
              <h3 className="font-sans font-semibold text-lg text-white">20+ Global Nations</h3>
              <p className="text-xs text-soil-300 font-light">
                Structured B2B matchmaking, export trade agreements, and direct source visits.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
