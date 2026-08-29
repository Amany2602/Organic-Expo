"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

const FAQS = [
  {
    question: "Where is Nepal Organic Expo 2026 located and what are the dates?",
    answer:
      "The exposition takes place at the Bhrikuti Mandap Exhibition Hall in Kathmandu, Nepal from March 27 to 29, 2026. Exhibition doors open daily from 09:00 AM to 06:00 PM for trade buyers and visitors.",
  },
  {
    question: "Who qualifies for the complimentary Trade Buyer Pass?",
    answer:
      "Commercial buyers, food importers, tea/coffee roasters, herbal extract wholesalers, supermarket category managers, and hotel F&B directors are eligible for complimentary Buyer passes upon verification of company credentials.",
  },
  {
    question: "What is included with a Standard 9m² Exhibitor Stall?",
    answer:
      "The Standard 9m² Shell Scheme includes Octanorm walls, spotlights, company name fascia board branding, display counters, 2 chairs, power outlet, 2 exhibitor badges, official catalog directory listing, and pre-scheduled B2B buyer matchmaking.",
  },
  {
    question: "How are products verified as certified organic for the exposition?",
    answer:
      "All exhibitors must submit valid organic certification documentation (EU Organic, USDA NOP, JAS, Nepal Organic, or accredited PGS certificates). Our technical committee reviews all lab and residue testing documentation prior to stall allocation.",
  },
  {
    question: "How does the B2B Matchmaking service operate?",
    answer:
      "Prior to the event, registered buyers and exhibitors access our digital scheduling portal to review product catalogs and confirm 30-minute bilateral meetings in the dedicated B2B Trade Lounge at Bhrikuti Mandap.",
  },
  {
    question: "Can international trade delegations receive official visa assistance?",
    answer:
      "Yes. Upon completing Trade Delegate registration, the Expo Secretariat issues an official Visa Invitation Letter for submission to the Department of Immigration and Nepal Embassies worldwide.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gf-bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="gf-badge">Frequently Asked Questions</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gf-primary">
            Essential Details for Exhibitors & Buyers
          </h2>
          <p className="text-sm sm:text-base text-gf-text-muted">
            Everything you need to know regarding booth amenities, registration, and logistics.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="gf-card bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="text-base font-bold text-gf-primary leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-gf-secondary text-white rotate-180" : "bg-gf-bg-tint text-gf-secondary"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gf-text-muted leading-relaxed border-t border-gf-border/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
