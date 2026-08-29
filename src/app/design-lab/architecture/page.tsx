import React from "react";
import { Container } from "@/components/ui/Container";
import { ArchitectureLabContainer } from "@/components/lab/architecture/ArchitectureLabContainer";

export const metadata = {
  title: "Production Experience Architecture | Organic Expo Nepal 2026",
  description:
    "Production Information Architecture, 10-Section Homepage Composition, Navigation Model, User Journeys, and Technical Strategy for Organic Expo Nepal 2026.",
};

export default function ArchitectureLabPage() {
  return (
    <main className="min-h-screen bg-soil-950 py-10 text-soil-50 selection:bg-gold-500 selection:text-soil-950">
      <Container size="wide">
        <ArchitectureLabContainer />
      </Container>
    </main>
  );
}
