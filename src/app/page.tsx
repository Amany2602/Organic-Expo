import React from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductionHero } from "@/components/hero/ProductionHero";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { EditorialIntro } from "@/components/hero/EditorialIntro";
import { PavilionsGrid } from "@/components/sections/PavilionsGrid";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { CorePrinciples } from "@/components/sections/CorePrinciples";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ExhibitorShowcase } from "@/components/sections/ExhibitorShowcase";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSpeakers } from "@/components/sections/TestimonialsSpeakers";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadCtaSection } from "@/components/sections/LeadCtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gf-text">
      {/* 01. Top Announcement & Utility Bar */}
      <TopBar />

      {/* 02. Sticky Clean Header Navigation */}
      <Header />

      {/* 03. Main Page Stream */}
      <main id="main-content" className="flex-grow flex flex-col">
        {/* Hero Section: Dynamic Highlight Headline + 3-Photo Staggered Mosaic */}
        <ProductionHero />

        {/* Certified Standards & Trust Marquee */}
        <StatsCounter />

        {/* About Section: 2-Photo Split + Floating 7-Province Experience Badge */}
        <EditorialIntro />

        {/* 4 Flagship Commodity Pavilions (Asymmetric Bento Grid) */}
        <PavilionsGrid />

        {/* Why Attend: 4 Numbered Trade & Sourcing Pillars (01–04) */}
        <ValuePillars />

        {/* 4-Block Bento Stats Banner + Core Principles */}
        <CorePrinciples />

        {/* 4-Step Sourcing & Participation Workflow */}
        <ProcessTimeline />

        {/* Featured Himalayan Growers & Producers Showcase (Dark Cards) */}
        <ExhibitorShowcase />

        {/* Stall & Delegate Pricing Packages (3-Tier Engine) */}
        <PricingSection />

        {/* International Buyer Testimonials & Endorsements */}
        <TestimonialsSpeakers />

        {/* Educational Market Intelligence & Trade Reports */}
        <InsightsGrid />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* High-Impact Emerald CTA Banner & Secretariat Inquiry Form */}
        <LeadCtaSection />
      </main>

      {/* 04. 4-Column Corporate Footer */}
      <Footer />
    </div>
  );
}
