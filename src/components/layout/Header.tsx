"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Menu, X, Sprout, Search, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Pavilions", href: "#pavilions" },
  { label: "Why Attend", href: "#why-attend" },
  { label: "Process", href: "#process" },
  { label: "Exhibitors", href: "#exhibitors" },
  { label: "Stalls", href: "#pricing" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
          ? "bg-gf-dark/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg"
          : "bg-transparent py-5 sm:py-6 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo (EcoGrow Sprout + Text Style) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gf-secondary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Sprout className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-white uppercase leading-none">
              Organic<span className="text-gf-accent-mint">Expo</span>
            </span>
            <span className="text-[10px] tracking-widest text-gray-300 font-bold uppercase mt-0.5">
              Nepal 2026
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (EcoGrow Style) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors relative py-1",
                idx === 0 ? "text-white" : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
              {idx === 0 && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gf-accent-mint rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & Primary Button (EcoGrow Exact Layout) */}
        <div className="hidden sm:flex items-center gap-5">
          {/* Direct Phone Hotline */}
          <a
            href="tel:+977014220000"
            className="flex items-center gap-2 text-white/90 hover:text-white text-xs font-semibold"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-gf-peach" />
            </div>
            <span className="hidden xl:inline font-mono">+977 01-4220000</span>
          </a>

          {/* Primary Action Button */}
          <a
            href="#pricing"
            className="gf-btn-primary py-2.5 px-6 text-xs sm:text-sm uppercase font-bold tracking-wide"
          >
            <span>Book Stall</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="#pricing"
            className="gf-btn-primary py-2 px-4 text-xs font-bold sm:hidden"
          >
            <span>Book Stall</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gf-dark/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-white hover:text-gf-accent-mint py-1.5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+977014220000"
              className="flex items-center gap-2 text-xs text-gray-300"
            >
              <Phone className="w-4 h-4 text-gf-peach" />
              <span>+977 01-4220000 (Secretariat)</span>
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="gf-btn-primary w-full justify-center text-xs py-3"
            >
              <span>Book Exhibition Stall ➔</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
