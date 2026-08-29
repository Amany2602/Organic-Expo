import React from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Sparkles, Sprout, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

const CATEGORY_ITEMS = [
  {
    id: "tea-coffee",
    count: "01 / SECTOR",
    title: "Highland Tea & Coffee",
    tagline: "Orthodox single-origin teas, high-grown Arabica coffees cultivated above 1,800m in mineral-rich mountain soil.",
    icon: Sprout,
    badge: "35+ Exhibitors",
  },
  {
    id: "herbs-oils",
    count: "02 / SECTOR",
    title: "Herbs & Essential Oils",
    tagline: "Wildcrafted medicinal botanicals, Himalayan cardamom, lemongrass, and steam-distilled organic essential oils.",
    icon: Sparkles,
    badge: "50+ Producers",
  },
  {
    id: "honey-superfoods",
    count: "03 / SECTOR",
    title: "Forest Honey & Superfoods",
    tagline: "Raw cliff honey, nutrient-dense Himalayan buckwheat, stinging nettle powder, and wild sea buckthorn.",
    icon: ShieldCheck,
    badge: "40+ Cooperatives",
  },
  {
    id: "agrotech-trade",
    count: "04 / SECTOR",
    title: "Agro-Tech & Clean Trade",
    tagline: "Bio-fertilizer innovations, solar dehydration, organic certification consultancy, and ethical export logistics.",
    icon: Globe,
    badge: "25+ Tech Partners",
  },
];

export function JourneyEcosystemIntro() {
  return (
    <section
      id="ecosystem-intro"
      aria-label="The Organic Ecosystem Architecture Introduction"
      className="relative w-full bg-forest-950 text-cream-50 border-t border-forest-800/80 py-24 lg:py-36 overflow-hidden"
    >
      {/* Calm Ambient Background Glow */}
      <div className="absolute inset-0 bg-radial from-forest-900/30 via-forest-950 to-forest-950 pointer-events-none" />

      <Container size="wide" className="relative z-10 space-y-16">
        {/* Editorial Eyebrow & Transition Header */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-leaf-400" />
            <span className="font-mono text-xs text-leaf-300 uppercase tracking-widest font-semibold">
              The Expo Landscape
            </span>
            <span className="font-mono text-xs text-forest-600">{"//"}</span>
            <span className="font-mono text-xs text-cream-400 uppercase tracking-wider">
              4 Primary Exhibition Sectors
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-cream-50 tracking-tight leading-[1.08]">
            Explore Nepal&apos;s Diverse Organic Agriculture Ecosystem
          </h2>

          <p className="text-cream-200/90 font-light text-lg sm:text-xl leading-relaxed max-w-2xl">
            From world-renowned orthodox tea gardens in the east to wild alpine herbal collection in the western Himalayas, meet verified producers driving sustainable global trade.
          </p>
        </div>

        {/* 4-Sector Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {CATEGORY_ITEMS.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="p-8 bg-forest-900/70 border border-forest-800 rounded-2xl transition-all duration-300 hover:bg-forest-900 hover:border-leaf-600/60 hover:-translate-y-1 shadow-card space-y-5 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cream-400">
                      {cat.count}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center text-leaf-300 group-hover:bg-leaf-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-medium text-cream-50 group-hover:text-white transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-cream-300 font-light leading-relaxed">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-forest-800/80 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-leaf-300 bg-forest-800/60 px-2 py-1 rounded-pill">
                    {cat.badge}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-leaf-400 group-hover:text-leaf-300 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Whitespace & Transition Lead-in */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-forest-800 font-mono text-xs text-cream-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-leaf-400 animate-pulse" />
            <span className="font-sans text-cream-300">
              Organic Expo Nepal 2026 Platform Directory & B2B Matchmaking
            </span>
          </div>

          <Button
            variant="inverse"
            size="md"
            href="#participate"
            className="gap-2 font-medium"
          >
            <span>Register as Trade Buyer</span>
            <ArrowRight className="w-4 h-4 text-forest-950 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
