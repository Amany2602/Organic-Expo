"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, FileText, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingSecretariatDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Inquiry Drawer */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-gf-border overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gf-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Expo Trade Secretariat
                </h4>
                <p className="text-[10px] text-gf-accent-sage">Live Desk · Kathmandu (NPT)</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 text-xs text-gf-text">
            <p className="text-gf-text-muted leading-relaxed">
              How can the Nepal Organic Expo Secretariat assist your delegation today?
            </p>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#export-catalog"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-gf-secondary font-bold flex flex-col items-center justify-center gap-1 transition-colors text-center"
              >
                <FileText className="w-4 h-4 text-gf-secondary" />
                <span className="text-[11px]">B2B Export Catalog</span>
              </a>

              <a
                href="https://wa.me/9779800000000?text=Hi%20Organic%20Expo%20Secretariat%20I%20would%20like%20to%20inquire%20about%20buyer%20delegation%20passes%20and%20sample%20kits"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gf-bg-warm hover:bg-gf-bg-tint border border-gf-border text-gf-primary font-bold flex flex-col items-center justify-center gap-1 transition-colors text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px]">WhatsApp Deal Desk</span>
              </a>
            </div>

            {/* Direct Phone Support */}
            <div className="p-3 rounded-xl bg-gf-bg-warm border border-gf-border flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-gf-text-muted block">Direct Secretariat Line</span>
                <span className="font-mono font-bold text-gf-primary">018-600699 / +977 01-4220000</span>
              </div>
              <a
                href="tel:018600699"
                className="w-8 h-8 rounded-full bg-gf-secondary text-white flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Prospectus Download */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 px-3 rounded-xl bg-gf-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-gf-secondary transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Expo Prospectus 2026 (PDF)</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 font-semibold text-xs sm:text-sm cursor-pointer border",
          isOpen
            ? "bg-gf-primary text-white border-white/20"
            : "bg-gf-secondary text-white hover:bg-gf-primary border-white/20 hover:scale-105"
        )}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">Expo Help & Secretariat</span>
        <span className="sm:hidden">Help Desk</span>
      </button>
    </div>
  );
}
