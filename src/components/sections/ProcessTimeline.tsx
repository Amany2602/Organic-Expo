"use client";

import React from "react";
import { UserCheck, CalendarCheck, Coffee, Truck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Registration & Profiling",
    desc: "Exhibitors register stall packages; international buyers submit specific sourcing briefs and commodity volume requirements.",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "B2B Matchmaking & Pre-Scheduling",
    desc: "Our automated trade portal matches buyer criteria with verified producers to pre-arrange bilateral meetings before the expo.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "On-Site Sourcing & Cupping",
    desc: "Evaluate live product lots, attend specialty tea/coffee cupping labs, and negotiate terms directly at Bhrikuti Mandap.",
    icon: Coffee,
  },
  {
    step: "04",
    title: "Export Logistics & Delivery",
    desc: "Finalize contracts on-site with immediate phytosanitary clearances, customs facilitation, and international freight booking.",
    icon: Truck,
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-20 lg:py-24 bg-white border-t border-gf-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-14">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="gf-badge">Our Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary">
            A Simple Process, <br className="hidden sm:block" />
            <span className="text-gf-secondary">Meaningful Commercial Impact</span>
          </h2>
          <p className="text-sm sm:text-base text-gf-text-muted">
            From initial registration to international export delivery, our structured workflow
            guarantees transparency, compliance, and direct trade success.
          </p>
        </div>

        {/* 4-Step Horizontal Process Grid with Connector Line */}
        <div className="relative">
          {/* Subtle Desktop Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-gf-secondary/20 via-gf-secondary/40 to-gf-secondary/20 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="gf-card p-6 sm:p-7 flex flex-col justify-between space-y-6 text-center items-center hover:border-gf-secondary/50 relative bg-white h-full shadow-xs hover:shadow-md"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-full bg-gf-bg-tint flex items-center justify-center text-gf-secondary mx-auto shadow-xs border border-gf-secondary/15">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2 flex-grow">
                    <h3 className="text-lg font-bold text-gf-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gf-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Step Pill Badge at Bottom */}
                  <div className="pt-2">
                    <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-gf-bg-warm border border-gf-border font-mono text-xs font-bold text-gf-secondary shadow-2xs">
                      Step {item.step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Hook */}
        <div className="text-center pt-2">
          <a href="#pricing" className="gf-btn-primary">
            <span>Start Your Trade Registration</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

