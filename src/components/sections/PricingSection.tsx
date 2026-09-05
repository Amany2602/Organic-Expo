"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

const TIERS = [
  {
    id: "trade-visitor",
    name: "Trade Buyer & Delegate Pass",
    badge: "For Importers & Wholesalers",
    price: "Free",
    period: "Pre-Qualified Commercial Pass",
    description: "Complimentary access for verified international and domestic procurement directors, distributors, and retailers.",
    features: [
      "Access to all 4 Commodity Pavilions at Bhrikuti Mandap",
      "Dedicated B2B Buyer Matchmaking Lounge & Meeting Rooms",
      "Specialty Tea & Arabica Coffee Cupping Labs Entry",
      "Official Verified Producer Directory & Contact Book",
      "Assistance with Visa Facilitation & Export Documentation",
    ],
    ctaText: "Register as Trade Buyer",
    popular: false,
  },
  {
    id: "standard-booth",
    name: "Standard Exhibitor Stall",
    badge: "9m² Shell Scheme · Recommended",
    price: "NPR 85,000",
    period: "$650 USD (All 3 Days)",
    description: "Complete turnkey 9m² exhibition booth with fascia branding, display counters, electrical power, and buyer meetings.",
    features: [
      "9m² Octanorm Shell with Spotlight & Power Outlets",
      "Company Name Fascia Board & Product Display Counter",
      "2 Exhibitor Badges + 2 Full Trade Delegate Passes",
      "Listing in Official Print & Digital Organic Expo Catalog",
      "Pre-Scheduled Bilateral B2B Matchmaking Sessions",
      "On-Site Phytosanitary & Export Compliance Guidance",
    ],
    ctaText: "Book 9m² Exhibitor Stall",
    popular: true,
  },
  {
    id: "prime-pavilion",
    name: "Pavilion Anchor Partner",
    badge: "18m² – 36m² Prime Island",
    price: "Custom",
    period: "Platinum / Sector Lead Partner",
    description: "Prime corner or island placement with speaking opportunities, VIP lounge privileges, and headline sponsorship.",
    features: [
      "18m² – 36m² Custom Island Space in Main Hallway",
      "Keynote Speaking Slot at Organic Summit & Cupping Host",
      "Exclusive Logo Branding Across All Main Stage Backdrops",
      "Dedicated Private B2B Negotiation Room & 8 Badges",
      "Direct Consultation with Secretariat Trade Directors",
    ],
    ctaText: "Inquire for Anchor Booth",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-24 bg-white border-t border-gf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="gf-badge">Stall Packages & Registration</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary">
            Transparent Participation Packages for <br className="hidden sm:block" />
            <span className="text-gf-secondary">Growers & Global Buyers</span>
          </h2>
          <p className="text-base text-gf-text-muted">
            Choose the right exhibition stall or delegate pass to maximize your commercial outreach at Nepal Organic Expo 2026.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`rounded-[20px] p-8 flex flex-col justify-between transition-all duration-300 relative h-full ${
                  isPopular
                    ? "bg-gf-primary text-white border-2 border-gf-secondary shadow-xl lg:-translate-y-2"
                    : "bg-white text-gf-text border border-gf-border shadow-xs hover:border-gf-secondary/40 hover:shadow-md"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gf-secondary text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider block ${
                        isPopular ? "text-gf-peach" : "text-gf-secondary"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <h3
                      className={`text-2xl font-bold mt-1 ${
                        isPopular ? "text-white" : "text-gf-primary"
                      }`}
                    >
                      {tier.name}
                    </h3>
                  </div>

                  <div className="pb-4 border-b border-gray-200/20">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold ${
                        isPopular ? "text-white" : "text-gf-primary"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <p
                      className={`text-xs mt-1 ${
                        isPopular ? "text-gf-accent-sage" : "text-gf-text-muted"
                      }`}
                    >
                      {tier.period}
                    </p>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isPopular ? "text-gray-200" : "text-gf-text-muted"
                    }`}
                  >
                    {tier.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isPopular ? "text-gf-accent-sage" : "text-gf-primary"
                      }`}
                    >
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPopular ? "text-gf-accent-mint" : "text-gf-secondary"
                            }`}
                          />
                          <span className={isPopular ? "text-gray-200" : "text-gf-text"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="#contact"
                    className={`w-full justify-center ${
                      isPopular ? "gf-btn-white" : "gf-btn-primary"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
