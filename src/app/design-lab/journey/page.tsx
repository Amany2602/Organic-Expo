import React from "react";
import { JourneyEngine } from "@/components/lab/journey/JourneyEngine";

export const metadata = {
  title: "The Organic Journey Engine | Organic Expo Nepal 2026",
  description:
    "Experimental spatial narrative prototype: From Nepal's Soil to the World across 5 continuous visual transformations.",
};

export default function JourneyLabPage() {
  return (
    <div className="min-h-screen bg-soil-950 text-soil-50">
      <JourneyEngine />
    </div>
  );
}
