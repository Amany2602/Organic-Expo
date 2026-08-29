import React from "react";
import { Container } from "@/components/ui/Container";
import { HeroLabContainer } from "@/components/lab/HeroLabContainer";

export const metadata = {
  title: "Hero Experience Laboratory | Organic Expo Nepal 2026",
  description:
    "Experimental laboratory prototyping three distinct compositional philosophies for Organic Expo Nepal 2026.",
};

export default function HeroLabPage() {
  return (
    <main className="min-h-screen bg-soil-50 py-10 selection:bg-forest-800 selection:text-paper-50">
      <Container size="wide">
        <HeroLabContainer />
      </Container>
    </main>
  );
}
