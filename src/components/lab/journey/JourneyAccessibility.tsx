"use client";

import React from "react";
import { JOURNEY_STAGES, JourneyStageData } from "./types";

interface JourneyAccessibilityProps {
  currentStage: JourneyStageData;
}

export function JourneyAccessibility({
  currentStage,
}: JourneyAccessibilityProps) {
  return (
    <>
      {/* ARIA Live Region for dynamic screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
      >
        {`Active Chapter ${currentStage.number}: ${currentStage.label}. ${currentStage.title}. ${currentStage.subtitle}. ${currentStage.description}`}
      </div>

      {/* Semantic Outline of all 5 stages for search engines and assistive tech */}
      <div className="sr-only">
        <h2>From Nepal&apos;s Soil to the World — The 5-Stage Organic Journey</h2>
        <ol>
          {JOURNEY_STAGES.map((stg) => (
            <li key={stg.id}>
              <h3>
                Chapter {stg.number}: {stg.label} — {stg.title}
              </h3>
              <p>{stg.subtitle}</p>
              <p>{stg.description}</p>
              <p>Elevation / Region: {stg.elevation}</p>
              <p>
                Transformation: {stg.transformationGrammar.from} to{" "}
                {stg.transformationGrammar.to}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
