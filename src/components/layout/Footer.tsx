"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Building2, Sprout, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gf-dark text-white pt-16 sm:pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-gf-secondary flex items-center justify-center text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold tracking-tight text-white leading-tight">
                  Organic<span className="text-gf-accent-mint">Expo</span>
                </span>
                <span className="text-[10px] tracking-wider text-gray-400 font-medium uppercase">
                  Nepal 2026 · 1st Edition
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Nepal&apos;s premier national B2B organic trade exhibition connecting verified Himalayan single-estate
              tea growers, herbal distillers, and organic cooperatives with global commercial buyers.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs">
              <div className="flex items-center gap-2 font-bold text-white">
                <Building2 className="w-4 h-4 text-gf-peach" />
                <span>Organized by Shah Importer and Suppliers</span>
              </div>
              <p className="text-gray-400 text-[11px]">
                Lalitpur, Nepal · Official Secretariat
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gf-peach">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Exposition
                </a>
              </li>
              <li>
                <a href="#pavilions" className="hover:text-white transition-colors">
                  Exhibition Pavilions
                </a>
              </li>
              <li>
                <a href="#why-attend" className="hover:text-white transition-colors">
                  Why Attend
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Trade Workflow
                </a>
              </li>
              <li>
                <a href="#exhibitors" className="hover:text-white transition-colors">
                  Featured Growers
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Stall Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Pavilions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gf-peach">
              Commodity Pavilions
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <a href="#pavilions" className="hover:text-white transition-colors">
                  Orthodox Tea & Specialty Coffee
                </a>
              </li>
              <li>
                <a href="#pavilions" className="hover:text-white transition-colors">
                  Medicinal Herbs & Essential Oils
                </a>
              </li>
              <li>
                <a href="#pavilions" className="hover:text-white transition-colors">
                  Himalayan Superfoods & Grains
                </a>
              </li>
              <li>
                <a href="#pavilions" className="hover:text-white transition-colors">
                  Large Cardamom & Spices
                </a>
              </li>
              <li>
                <a href="#pavilions" className="hover:text-white transition-colors">
                  Raw Forest & Cliff Honey
                </a>
              </li>
              <li>
                <a href="#pavilions" className="hover:text-white transition-colors">
                  AgriTech & Bio-Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Venue (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gf-peach">
              Venue & Secretariat
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gf-secondary shrink-0 mt-0.5" />
                <span>Bhrikuti Mandap Exhibition Hall, Pradarshani Marg, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gf-secondary shrink-0" />
                <a href="tel:+9779708618779" className="hover:text-white font-mono">
                  +977 970-8618779 / 01-4220000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gf-secondary shrink-0" />
                <a href="mailto:secretariat@organicexponepal.com" className="hover:text-white">
                  secretariat@organicexponepal.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a href="#pricing" className="gf-btn-primary w-full justify-center text-xs py-2.5">
                <span>Book Exhibition Stall</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Organic Expo Nepal. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-gray-200 transition-colors">Exhibitor Terms</a>
            <a href="#contact" className="hover:text-gray-200 transition-colors">Secretariat Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
