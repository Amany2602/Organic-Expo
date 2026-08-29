"use client";

import React, { useState } from "react";
import { HOMEPAGE_SECTIONS } from "./data";
import { SectionWireframeCard } from "./SectionWireframeCard";
import { UserJourneyMatrix } from "./UserJourneyMatrix";
import { NavigationModelViewer } from "./NavigationModelViewer";
import { ComponentDataBlueprint } from "./ComponentDataBlueprint";
import { TechnicalStrategyMatrix } from "./TechnicalStrategyMatrix";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import {
  LayoutList,
  Users,
  Compass,
  Database,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ArchitectureTab =
  | "homepage-stack"
  | "user-journeys"
  | "navigation-model"
  | "component-data"
  | "technical-strategy";

const TABS = [
  { id: "homepage-stack" as const, label: "10-Section Homepage Stack", icon: LayoutList },
  { id: "user-journeys" as const, label: "User Journeys & Funnels", icon: Users },
  { id: "navigation-model" as const, label: "Navigation & Mobile Model", icon: Compass },
  { id: "component-data" as const, label: "Component & Data Schemas", icon: Database },
  { id: "technical-strategy" as const, label: "Technical, 3D & Art Direction", icon: Cpu },
];

export function ArchitectureLabContainer() {
  const [activeTab, setActiveTab] = useState<ArchitectureTab>("homepage-stack");
  const [expandedSectionId, setExpandedSectionId] = useState<string>("hero");

  return (
    <div className="space-y-8 select-none">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-soil-900/90 border border-soil-700/60 p-6 sm:p-8 rounded-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Eyebrow step="PROMPT 05" withDot variant="forest">
                PRODUCTION EXPERIENCE ARCHITECTURE
              </Eyebrow>
              <span className="font-mono text-[10px] text-gold-400 bg-gold-950/80 px-2 py-0.5 border border-gold-600/30 rounded-xs">
                MASTER BLUEPRINT
              </span>
            </div>
            <Heading as="h1" size="h2" font="display" className="text-soil-50">
              From Experimental Narrative to Real Website Structure
            </Heading>
            <Text size="body" className="text-soil-300 max-w-3xl leading-relaxed">
              Bridging the visual breakthroughs from the Hero Laboratory and Organic Journey Engine into a balanced, high-converting digital ecosystem connecting Nepal&apos;s sustainable bio-economy with global opportunity.
            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/design-lab/journey"
              className="px-3 py-2 bg-white/5 border border-white/15 text-white/80 hover:bg-white/10 hover:text-white rounded-xs font-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>View Journey Engine</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/design-lab/hero"
              className="px-3 py-2 bg-white/5 border border-white/15 text-white/80 hover:bg-white/10 hover:text-white rounded-xs font-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>View Hero Lab</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Master Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-soil-800">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-3.5 py-2 rounded-xs font-mono text-xs flex items-center gap-2 transition-all cursor-pointer border",
                  isActive
                    ? "bg-forest-950 border-gold-400 text-gold-200 font-bold shadow-xs"
                    : "bg-soil-950/60 border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-gold-300" : "opacity-60")} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Content View */}
      <div className="w-full">
        {/* Tab 1: 10-Section Homepage Stack */}
        {activeTab === "homepage-stack" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-soil-950/80 border border-white/10 rounded-xs font-mono text-xs">
              <div>
                <span className="font-bold text-soil-50 uppercase block">
                  Production Homepage Sequence (10 Sections)
                </span>
                <p className="text-white/60 font-sans text-xs">
                  Alternating visual rhythm: Immersive → Editorial → Functional → Trust → Immersive.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setExpandedSectionId("all")}
                  className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-xs text-[10px] cursor-pointer"
                >
                  Expand All
                </button>
                <button
                  type="button"
                  onClick={() => setExpandedSectionId("")}
                  className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-xs text-[10px] cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {HOMEPAGE_SECTIONS.map((section) => (
                <SectionWireframeCard
                  key={section.id}
                  section={section}
                  isExpanded={
                    expandedSectionId === "all" ||
                    expandedSectionId === section.id
                  }
                  onToggle={() =>
                    setExpandedSectionId((prev) =>
                      prev === section.id ? "" : section.id
                    )
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: User Journeys & Funnels */}
        {activeTab === "user-journeys" && <UserJourneyMatrix />}

        {/* Tab 3: Navigation & Mobile Model */}
        {activeTab === "navigation-model" && <NavigationModelViewer />}

        {/* Tab 4: Component & Data Schemas */}
        {activeTab === "component-data" && <ComponentDataBlueprint />}

        {/* Tab 5: Technical, 3D & Art Direction */}
        {activeTab === "technical-strategy" && <TechnicalStrategyMatrix />}
      </div>
    </div>
  );
}
