"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Sprout, HeartHandshake, Globe } from "lucide-react";

export function CorePrinciples() {
  return (
    <section className="py-20 lg:py-24 bg-gf-bg-warm border-t border-gf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* ==========================================================================
            1. 4-BLOCK BENTO STATS & PHOTO BANNER (Greenflow Exact Layout)
            ========================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          
          {/* Block 1: Dark Green Stats Card */}
          <div className="gf-card-dark p-7 flex flex-col justify-between space-y-6 h-full min-h-[240px] shadow-md">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white block">150+</span>
              <p className="text-xs sm:text-sm text-gf-accent-sage font-medium mt-1">Certified Exhibiting Growers</p>
            </div>
            <div className="pt-4 border-t border-gf-border-dark">
              <span className="text-3xl sm:text-4xl font-extrabold text-white block">5,000+</span>
              <p className="text-xs sm:text-sm text-gf-accent-sage font-medium mt-1">Trade Visitors & Buyers</p>
            </div>
          </div>

          {/* Block 2: Image Card 1 */}
          <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[240px] h-full bg-gf-primary/10">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
              alt="Himalayan Mountain Agricultural Terraces"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gf-primary/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-4 text-xs font-semibold text-white">
              Pristine Mountain Soils
            </span>
          </div>

          {/* Block 3: Dark Green Stats Card */}
          <div className="gf-card-dark p-7 flex flex-col justify-between space-y-6 h-full min-h-[240px] shadow-md">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white block">25+</span>
              <p className="text-xs sm:text-sm text-gf-accent-sage font-medium mt-1">Sourcing Nations Represented</p>
            </div>
            <div className="pt-4 border-t border-gf-border-dark">
              <span className="text-3xl sm:text-4xl font-extrabold text-white block">7</span>
              <p className="text-xs sm:text-sm text-gf-accent-sage font-medium mt-1">Himalayan Agro-Ecological Zones</p>
            </div>
          </div>

          {/* Block 4: Image Card 2 */}
          <div className="relative rounded-[20px] overflow-hidden shadow-md group min-h-[240px] h-full bg-gf-primary/10">
            <img
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
              alt="Himalayan Organic Mountain Grower"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gf-primary/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-4 text-xs font-semibold text-white">
              Farmer-First Partnerships
            </span>
          </div>

        </div>


        {/* ==========================================================================
            2. PRINCIPLES & VALUES SECTION (Greenflow Exact Layout)
            ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center pt-8">
          
          {/* Left: 3-Photo Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 relative rounded-[20px] overflow-hidden shadow-md aspect-[16/9] bg-gf-primary/10">
              <img
                src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1200&q=80"
                alt="High-Altitude Misty Orthodox Tea Terraces"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-md aspect-[4/3] bg-gf-primary/10">
              <img
                src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80"
                alt="Wild Himalayan Timur Spices and Botanicals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-md aspect-[4/3] bg-gf-primary/10">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                alt="Shade-Grown Himalayan Arabica Coffee Harvest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Narrative & 3 Feature Rows */}
          <div className="lg:col-span-6 space-y-6">
            <span className="gf-badge">Our Principles</span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gf-primary leading-[1.15]">
              The Principles Driving <span className="text-gf-secondary">Nepal&apos;s Organic Revolution</span>
            </h2>

            <p className="text-base text-gf-text-muted leading-relaxed">
              Our commitments define how we foster ethical trade, protect fragile Himalayan ecosystems,
              and empower smallholder growers through authentic, certified global market access.
            </p>

            {/* 3 Structured Rows */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gf-border shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-gf-bg-tint text-gf-secondary flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-base font-bold text-gf-primary">Complete Traceability & Integrity</h3>
                  <p className="text-xs sm:text-sm text-gf-text-muted mt-1 leading-relaxed">
                    Every lot showcased at the expo carries verified documentation linking back to its specific farm, altitude, and harvest batch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gf-border shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-gf-bg-tint text-gf-secondary flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-base font-bold text-gf-primary">Biodiversity & Regenerative Ecology</h3>
                  <p className="text-xs sm:text-sm text-gf-text-muted mt-1 leading-relaxed">
                    Supporting organic polycultures, indigenous seed preservation, and carbon-negative mountain agricultural practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gf-border shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-gf-secondary text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-base font-bold text-gf-primary">Farmer Prosperity & Fair Value Chains</h3>
                  <p className="text-xs sm:text-sm text-gf-text-muted mt-1 leading-relaxed">
                    Ensuring equitable profit distribution that directly rewards the rural Himalayan farming families who safeguard our soil.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
