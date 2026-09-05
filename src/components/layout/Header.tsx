"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown, ArrowUpRight, Menu, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-100"
          : "bg-transparent py-5 sm:py-6 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* ==========================================================================
              1. GREENFLOW BRAND LOGO (Scroll Adaptive)
              ========================================================================== */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            {/* Custom GreenFlow Dual-Leaf Sprout Icon */}
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "w-10 h-10 transition-all duration-300 group-hover:scale-105",
                  isScrolled ? "text-[#183B2B]" : "text-white"
                )}
              >
                {/* Sprout base & soil */}
                <rect x="3" y="24" width="34" height="13" rx="6.5" fill="currentColor" />
                <circle cx="20" cy="30.5" r="2.5" fill={isScrolled ? "white" : "#183B2B"} />
                {/* Left Leaf */}
                <path
                  d="M19.5 24C19.5 24 10 22 8.5 13C7 4 19 6 19.5 24Z"
                  fill="currentColor"
                />
                {/* Right Leaf */}
                <path
                  d="M20.5 24C20.5 24 30 22 31.5 13C33 4 21 6 20.5 24Z"
                  fill="currentColor"
                />
                {/* Center Stem */}
                <path
                  d="M20 24V11"
                  stroke={isScrolled ? "white" : "#183B2B"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Logo Text Hierarchy */}
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-sans text-xl sm:text-2xl font-bold tracking-tight leading-none transition-colors",
                  isScrolled ? "text-[#183B2B]" : "text-white drop-shadow-md"
                )}
              >
                Organic
                <span className={isScrolled ? "text-[#386641]" : "text-gf-accent-mint"}>
                  Expo
                </span>
              </span>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-normal mt-0.5 transition-colors",
                  isScrolled ? "text-[#4A7C59]" : "text-white/80"
                )}
              >
                Agriculture & Trade Expo
              </span>
            </div>
          </Link>

          {/* ==========================================================================
              2. DESKTOP NAVIGATION LINKS (Scroll Adaptive)
              ========================================================================== */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            
            {/* Home */}
            <Link
              href="/"
              onClick={() => setActiveTab("Home")}
              className={cn(
                "relative py-1 text-[15px] font-semibold transition-colors",
                isScrolled
                  ? "text-[#183B2B]"
                  : "text-white drop-shadow-sm"
              )}
            >
              Home
              {activeTab === "Home" && (
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full transition-colors",
                    isScrolled ? "bg-[#183B2B]" : "bg-white"
                  )}
                />
              )}
            </Link>

            {/* About */}
            <a
              href="#about"
              onClick={() => setActiveTab("About")}
              className={cn(
                "relative py-1 text-[15px] font-medium transition-colors",
                isScrolled
                  ? activeTab === "About" ? "text-[#183B2B] font-semibold" : "text-[#4B5563] hover:text-[#183B2B]"
                  : activeTab === "About" ? "text-white font-semibold" : "text-white/85 hover:text-white"
              )}
            >
              About
              {activeTab === "About" && (
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full transition-colors",
                    isScrolled ? "bg-[#183B2B]" : "bg-white"
                  )}
                />
              )}
            </a>

            {/* B2B Export Catalog (Key Conversion Driver) */}
            <a
              href="#export-catalog"
              onClick={() => setActiveTab("Catalog")}
              className={cn(
                "relative py-1 text-[15px] font-semibold transition-colors flex items-center gap-1.5",
                isScrolled
                  ? activeTab === "Catalog" ? "text-[#2E7D4F] font-bold" : "text-[#183B2B] hover:text-[#2E7D4F]"
                  : activeTab === "Catalog" ? "text-gf-peach font-bold" : "text-white hover:text-gf-peach"
              )}
            >
              <span>Export Catalog</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-gf-peach text-gf-dark font-mono">
                B2B
              </span>
              {activeTab === "Catalog" && (
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full transition-colors",
                    isScrolled ? "bg-[#2E7D4F]" : "bg-gf-peach"
                  )}
                />
              )}
            </a>

            {/* Global Trade & Logistics */}
            <a
              href="#trade-hub"
              onClick={() => setActiveTab("TradeHub")}
              className={cn(
                "relative py-1 text-[15px] font-medium transition-colors",
                isScrolled
                  ? activeTab === "TradeHub" ? "text-[#183B2B] font-semibold" : "text-[#4B5563] hover:text-[#183B2B]"
                  : activeTab === "TradeHub" ? "text-white font-semibold" : "text-white/85 hover:text-white"
              )}
            >
              Global Trade
              {activeTab === "TradeHub" && (
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full transition-colors",
                    isScrolled ? "bg-[#183B2B]" : "bg-white"
                  )}
                />
              )}
            </a>

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 py-1 text-[15px] font-medium transition-colors cursor-pointer",
                  isScrolled
                    ? "text-[#4B5563] hover:text-[#183B2B]"
                    : "text-white/85 hover:text-white"
                )}
              >
                <span>Pavilions & Info</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", pagesOpen && "rotate-180")} />
              </button>

              {/* Dropdown Menu */}
              {pagesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 px-1.5 space-y-1">
                    <a
                      href="#export-catalog"
                      className="block px-3 py-2 text-xs font-semibold text-gf-secondary bg-emerald-50/60 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      🌿 Industrial Hemp & Organic Catalog
                    </a>
                    <a
                      href="#trade-hub"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      ✈️ Air & Sea Freight Routes (Incoterms)
                    </a>
                    <a
                      href="#pavilions"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Exhibition Pavilions
                    </a>
                    <a
                      href="#why-attend"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Why Attend
                    </a>
                    <a
                      href="#process"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Sourcing Workflow
                    </a>
                    <a
                      href="#exhibitors"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Featured Growers & Producers
                    </a>
                    <a
                      href="#pricing"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Stalls & Pricing
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Blog / Insights Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 py-1 text-[15px] font-medium transition-colors cursor-pointer",
                  isScrolled
                    ? "text-[#4B5563] hover:text-[#183B2B]"
                    : "text-white/85 hover:text-white"
                )}
              >
                <span>Market Insights</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", blogOpen && "rotate-180")} />
              </button>

              {/* Dropdown Menu */}
              {blogOpen && (
                <div className="absolute top-full left-0 pt-2 w-52 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 px-1.5 space-y-1">
                    <a
                      href="#insights"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Market Intelligence
                    </a>
                    <a
                      href="#insights"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      EU & US Export Guides
                    </a>
                    <a
                      href="#faq"
                      className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#183B2B] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Frequently Asked Questions
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <a
              href="#contact"
              onClick={() => setActiveTab("Contact")}
              className={cn(
                "relative py-1 text-[15px] font-medium transition-colors",
                isScrolled
                  ? activeTab === "Contact" ? "text-[#183B2B] font-semibold" : "text-[#4B5563] hover:text-[#183B2B]"
                  : activeTab === "Contact" ? "text-white font-semibold" : "text-white/85 hover:text-white"
              )}
            >
              Contact
              {activeTab === "Contact" && (
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full transition-colors",
                    isScrolled ? "bg-[#183B2B]" : "bg-white"
                  )}
                />
              )}
            </a>

          </nav>

          {/* ==========================================================================
              3. RIGHT UTILITY DOCK (Phone Hotline + "Get In Touch ↗" Capsule Pill)
              ========================================================================== */}
          <div className="hidden sm:flex items-center gap-6 shrink-0">
            
            {/* Phone Hotline */}
            <a
              href="tel:018600699"
              className={cn(
                "flex items-center gap-2 text-[15px] font-semibold transition-colors",
                isScrolled
                  ? "text-[#183B2B] hover:text-[#2D6A4F]"
                  : "text-white hover:text-white/90 drop-shadow-sm"
              )}
            >
              <Phone
                className={cn(
                  "w-4 h-4 shrink-0 transition-colors",
                  isScrolled ? "text-[#386641]" : "text-gf-accent-mint"
                )}
              />
              <span className="tracking-tight">018-600699</span>
            </a>

            {/* "Get In Touch" Primary Capsule Pill Button with Circle Arrow */}
            <a
              href="#pricing"
              className={cn(
                "group inline-flex items-center justify-between gap-3 text-sm font-semibold pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300",
                isScrolled
                  ? "bg-[#183B2B] hover:bg-[#122e21] text-white"
                  : "bg-gf-secondary hover:bg-gf-secondary/90 text-white border border-white/20 backdrop-blur-sm"
              )}
            >
              <span>Get In Touch</span>
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0",
                  isScrolled
                    ? "bg-white text-[#183B2B]"
                    : "bg-white text-gf-secondary shadow-xs"
                )}
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>

          </div>

          {/* ==========================================================================
              4. MOBILE MENU HAMBURGER
              ========================================================================== */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#pricing"
              className="bg-[#183B2B] text-white text-xs font-semibold px-4 py-2 rounded-full sm:hidden"
            >
              Get In Touch
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isScrolled
                  ? "bg-gray-100 text-[#183B2B] hover:bg-gray-200"
                  : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
              )}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ==========================================================================
          5. MOBILE RESPONSIVE DRAWER
          ========================================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#183B2B] py-1"
            >
              Home
            </Link>
            <a
              href="#export-catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-gf-secondary bg-emerald-50 px-3 py-1.5 rounded-lg flex items-center justify-between"
            >
              <span>🌿 B2B Export Catalog</span>
              <span className="text-[10px] font-mono bg-gf-secondary text-white px-1.5 py-0.5 rounded">NEW</span>
            </a>
            <a
              href="#trade-hub"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#183B2B] py-1"
            >
              ✈️ Global Trade & Logistics
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#183B2B] py-1"
            >
              About
            </a>
            <a
              href="#pavilions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#183B2B] py-1"
            >
              Pavilions
            </a>
            <a
              href="#why-attend"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#183B2B] py-1"
            >
              Why Attend
            </a>
            <a
              href="#exhibitors"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#183B2B] py-1"
            >
              Exhibitors
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#183B2B] py-1"
            >
              Stalls & Pricing
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#183B2B] py-1"
            >
              Blog & Insights
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#183B2B] py-1"
            >
              Contact
            </a>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:018600699"
              className="flex items-center gap-2 text-sm font-semibold text-[#183B2B]"
            >
              <Phone className="w-4 h-4 text-[#386641]" />
              <span>018-600699</span>
            </a>

            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center justify-between w-full bg-[#183B2B] text-white text-xs font-semibold pl-5 pr-2 py-2 rounded-full"
            >
              <span>Get In Touch</span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#183B2B]">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
