"use client";

import React, { useState } from "react";
import { USER_JOURNEYS } from "./data";
import { User, Briefcase, ShoppingBag, Globe, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ROLE_ICONS: Record<string, React.ElementType> = {
  "General Visitor / Attendee": User,
  "Exhibitor / Organic Producer": Briefcase,
  "Trade Buyer / Importer": ShoppingBag,
  "International Delegate / Media": Globe,
};

export function UserJourneyMatrix() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);
  const activeJourney = USER_JOURNEYS[selectedRoleIndex];
  const Icon = ROLE_ICONS[activeJourney.role] || User;

  return (
    <div className="space-y-6 font-mono select-none">
      {/* Role Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {USER_JOURNEYS.map((journey, idx) => {
          const TabIcon = ROLE_ICONS[journey.role] || User;
          const isSelected = idx === selectedRoleIndex;

          return (
            <button
              key={journey.role}
              type="button"
              onClick={() => setSelectedRoleIndex(idx)}
              className={cn(
                "p-4 text-left rounded-xs border transition-all cursor-pointer flex flex-col justify-between gap-3",
                isSelected
                  ? "bg-forest-950/80 border-gold-400 text-white shadow-md ring-1 ring-gold-400/30"
                  : "bg-soil-950/60 border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center justify-between w-full">
                <TabIcon
                  className={cn("w-5 h-5", isSelected ? "text-gold-300" : "opacity-60")}
                />
                <span className="text-[10px] text-white/40 font-bold">
                  AUDIENCE 0{idx + 1}
                </span>
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-soil-50 leading-snug">
                  {journey.role.split(" / ")[0]}
                </h4>
                <p className="text-[10px] text-white/50 truncate font-light font-sans">
                  {journey.role.split(" / ")[1] || ""}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Journey Funnel Detail Canvas */}
      <div className="p-6 bg-soil-900/90 border border-white/15 rounded-xs space-y-6 text-xs text-soil-50">
        {/* Journey Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gold-300" />
              <h3 className="font-sans text-xl font-bold text-white tracking-tight">
                {activeJourney.role}
              </h3>
            </div>
            <p className="font-sans text-xs text-white/70">
              <strong className="text-gold-200 font-mono">Target Profile:</strong>{" "}
              {activeJourney.audience}
            </p>
          </div>

          <div className="p-3 bg-black/40 border border-white/10 rounded-xs max-w-md">
            <span className="text-[10px] text-white/40 uppercase block">Primary Conversion Goal:</span>
            <p className="font-sans text-xs font-medium text-forest-200">
              {activeJourney.primaryGoal}
            </p>
          </div>
        </div>

        {/* Step-by-Step Funnel Flow */}
        <div className="space-y-3">
          <span className="text-[10px] text-white/40 uppercase tracking-widest block font-bold">
            Four-Stage Conversion Sequence
          </span>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {activeJourney.funnelSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="relative p-4 bg-black/50 border border-white/10 rounded-xs space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="px-1.5 py-0.5 bg-white/10 text-[9px] font-bold text-gold-300 rounded-xs">
                      {step.step.split(" ")[0]}
                    </span>
                    <span className="text-[9px] text-white/40 font-mono">
                      {step.sectionTarget.split(" ")[1] || ""}
                    </span>
                  </div>
                  <h5 className="font-sans font-bold text-xs text-white">
                    {step.step.substring(3)}
                  </h5>
                  <p className="font-sans text-[11px] text-white/70 font-light leading-relaxed">
                    {step.keyAction}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-[10px] text-forest-300 font-mono">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{step.conversionSuccess}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Experience Requirements */}
        <div className="pt-2 border-t border-white/10">
          <span className="text-[10px] text-white/40 uppercase tracking-widest block font-bold mb-2">
            Critical UI / Functional Requirements for this Audience
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeJourney.criticalRequirements.map((req, rIdx) => (
              <div
                key={rIdx}
                className="p-3 bg-white/5 border border-white/10 rounded-xs flex items-start gap-2 text-[11px] font-sans"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                <span className="text-white/80">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
