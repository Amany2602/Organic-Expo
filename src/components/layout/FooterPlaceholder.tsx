import React from "react";
import { Container } from "@/components/ui/Container";

export function FooterPlaceholder() {
  const currentYear = 2026;

  return (
    <footer className="bg-forest-950 text-cream-200 border-t border-forest-800/80 py-12 relative overflow-hidden">
      {/* Background Topographic Accent */}
      <div className="absolute inset-0 dark-topographic-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-leaf-400" />
            <span className="font-display font-medium text-lg tracking-tight uppercase text-cream-50">
              Organic Expo Nepal 2026
            </span>
            <span className="font-mono text-[10px] text-forest-300 border border-forest-800 px-2.5 py-0.5 rounded-pill bg-forest-900/60">
              Kathmandu Edition
            </span>
          </div>

          <div className="text-xs font-mono text-cream-400 text-center sm:text-right">
            <span>From Nepal&apos;s Soil to the World</span>
            <span className="mx-2 text-forest-700">·</span>
            <span>© {currentYear} Organic Expo Nepal</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
