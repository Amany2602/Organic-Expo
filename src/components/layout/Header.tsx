"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Menu, X, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Pavilions", href: "#pavilions" },
  { label: "Why Attend", href: "#why-attend" },
  { label: "Process", href: "#process" },
  { label: "Exhibitors", href: "#exhibitors" },
  { label: "Stall Packages", href: "#pricing" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        "sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gf-border",
        isScrolled ? "py-3 shadow-sm" : "py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-gf-bg-tint border border-gf-secondary/20 flex items-center justify-center text-gf-secondary group-hover:bg-gf-secondary group-hover:text-white transition-all duration-300">
            <Sprout className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-lg sm:text-xl font-bold tracking-tight text-gf-primary leading-tight">
              Organic<span className="text-gf-secondary">Expo</span>
            </span>
            <span className="text-[10px] tracking-wider text-gf-text-muted font-medium uppercase">
              Nepal 2026 · 1st Edition
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Greenflow hover underline */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-gf-text hover:text-gf-secondary transition-colors relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gf-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions: Phone Hotline + Primary Pill Button */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          <a
            href="tel:+977014220000"
            className="flex items-center gap-2 text-gf-text hover:text-gf-secondary transition-colors text-[13px] font-semibold"
          >
            <div className="w-8 h-8 rounded-full bg-gf-bg-tint flex items-center justify-center text-gf-secondary">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono text-xs">+977 01-4220000</span>
          </a>

          <a href="#pricing" className="gf-btn-primary text-xs sm:text-sm">
            <span>Book Stall</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gf-primary hover:bg-gf-bg-tint transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gf-border px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gf-text hover:text-gf-secondary py-2 border-b border-gray-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+977014220000"
              className="flex items-center gap-2 text-gf-text text-sm font-semibold py-1"
            >
              <Phone className="w-4 h-4 text-gf-secondary" />
              <span>Hotline: +977 01-4220000</span>
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="gf-btn-primary w-full justify-center"
            >
              <span>Book Exhibition Stall</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
