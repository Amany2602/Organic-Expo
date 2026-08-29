"use client";

import React from "react";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

const ARTICLES = [
  {
    title: "Complete Compliance Guide to Exporting Himalayan Teas & Herbs to the EU",
    date: "March 2026",
    category: "Export & Regulatory",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why Nepal's High-Altitude Terroir Produces Superior Medicinal Bioactives",
    date: "March 2026",
    category: "Terroir & Agronomy",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Rise of Single-Estate Himalayan Specialty Arabica in Global Markets",
    date: "March 2026",
    category: "Market Intelligence",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
  },
];

export function InsightsGrid() {
  return (
    <section id="insights" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Title and Right Pill Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-gf-border pb-6">
          <div className="space-y-2">
            <span className="gf-badge">Market Intelligence & Research</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gf-primary">
              Insights & Guides For Smarter Trade
            </h2>
            <p className="text-sm sm:text-base text-gf-text-muted">
              Authoritative industry reports, phytosanitary standards, and export analysis by Nepal trade specialists.
            </p>
          </div>

          <a href="#contact" className="gf-btn-primary shrink-0">
            <span>View All Trade Reports</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Card Grid (Greenflow Exact Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <div
              key={article.title}
              className="gf-card overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gf-bg-tint">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-gf-secondary border border-gf-border shadow-xs">
                  {article.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-gf-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gf-secondary" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gf-primary group-hover:text-gf-secondary transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-gf-border flex items-center gap-1.5 text-xs font-semibold text-gf-secondary group-hover:underline">
                  <span>Read Full Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
