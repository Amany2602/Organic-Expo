"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  desc?: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  lang: "EN" | "NE";
  onToggleLang: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  items,
  lang,
  onToggleLang,
}: MobileMenuProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-cream-100 text-charcoal-900 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Background Topographic Subtle Ambient Texture */}
      <div className="absolute inset-0 topographic-grid opacity-30 pointer-events-none" />

      {/* Header Bar within Menu */}
      <div className="relative z-10 px-6 py-5 flex items-center justify-between border-b border-cream-300">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-forest-900 flex items-center justify-center text-cream-50">
            <span className="w-2 h-2 rounded-full bg-leaf-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-base tracking-tight uppercase text-forest-950">
              Organic Expo Nepal
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-charcoal-500">
              2026 Edition
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 text-charcoal-700 hover:text-forest-950 border border-cream-300 rounded-full bg-cream-50 transition-colors cursor-pointer"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation Editorial Links */}
      <div className="relative z-10 px-6 py-8 space-y-6 flex-grow flex flex-col justify-center max-w-lg mx-auto w-full">
        <div className="space-y-1 font-mono text-[10px] uppercase tracking-[0.25em] text-leaf-700">
          <span>Platform Directory</span>
        </div>

        <nav className="flex flex-col divide-y divide-cream-300 border-y border-cream-300">
          {items.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="py-4 flex items-center justify-between group text-charcoal-800 hover:text-forest-900 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-charcoal-400 group-hover:text-leaf-600 transition-colors">
                  0{idx + 1}
                </span>
                <span className="font-display text-2xl tracking-tight">
                  {item.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="font-mono text-[9px] bg-forest-100 text-forest-800 border border-forest-200 px-2 py-0.5 rounded-pill uppercase">
                    {item.badge}
                  </span>
                )}
                <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-leaf-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </nav>

        {/* Terroir & Context Snapshot */}
        <div className="p-4 bg-cream-200/80 border border-cream-300 rounded-xl space-y-2 font-mono text-xs text-charcoal-600">
          <div className="flex items-center justify-between text-forest-800 font-semibold">
            <span className="flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5" />
              Kathmandu Valley
            </span>
            <span>27°42′N / 85°19′E</span>
          </div>
          <p className="text-[11px] text-charcoal-600 leading-relaxed font-sans">
            From Nepal&apos;s soil to the global market. Flagship inaugural Himalayan agro-ecological platform.
          </p>
        </div>
      </div>

      {/* Footer Controls & Primary Action */}
      <div className="relative z-10 px-6 py-6 border-t border-cream-300 bg-cream-50 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <button
          type="button"
          onClick={onToggleLang}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono text-charcoal-700 hover:text-forest-950 border border-cream-300 rounded-pill bg-cream-100 transition-colors cursor-pointer"
        >
          <span>Language:</span>
          <span className="font-bold text-forest-800">
            {lang === "EN" ? "English" : "Nepali (नेपाली)"}
          </span>
        </button>

        <Button
          variant="forest"
          size="lg"
          href="#journey"
          onClick={onClose}
          className="w-full sm:w-auto text-xs uppercase tracking-wider"
        >
          Explore Journey
        </Button>
      </div>
    </div>
  );
}
