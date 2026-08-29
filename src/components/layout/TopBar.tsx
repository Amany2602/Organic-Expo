"use client";

import React from "react";
import { Phone, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-gf-primary text-white text-xs py-2 border-b border-gf-border-dark hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left: Date & Venue */}
        <div className="flex items-center gap-6 text-gray-200 text-[12px]">
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-gf-accent-mint" />
            <span>March 27 – 29, 2026</span>
          </div>
          <span className="text-gray-500">|</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gf-accent-mint" />
            <span>Bhrikuti Mandap, Kathmandu, Nepal</span>
          </div>
        </div>

        {/* Right: Direct Secretariat Hotline & Buyer Registration */}
        <div className="flex items-center gap-6 text-[12px]">
          <a
            href="mailto:secretariat@organicexponepal.com"
            className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gf-accent-mint" />
            <span>secretariat@organicexponepal.com</span>
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="#pricing"
            className="flex items-center gap-1 text-gf-peach font-semibold hover:underline"
          >
            <span>Buyer Pass Registration</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
