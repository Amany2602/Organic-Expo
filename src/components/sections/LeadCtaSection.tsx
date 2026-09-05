"use client";

import React, { useState } from "react";
import { ArrowRight, Phone, Mail, CheckCircle2, Send, Sparkles } from "lucide-react";

export function LeadCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "exhibitor",
    organization: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-t border-gf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-14">
        
        {/* Full-Width High Impact Dark Emerald CTA Banner (Greenflow Exact Layout) */}
        <div className="rounded-[20px] bg-gradient-to-r from-gf-primary to-gf-secondary text-white p-8 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-gf-peach text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                March 27 – 29, 2026 · Kathmandu
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Connect Your Organic Products With Global Trade Buyers?
              </h2>
              <p className="text-sm sm:text-base text-gray-200 font-light max-w-2xl leading-relaxed">
                Reserve your 9m² or 18m² prime exhibition stall at Bhrikuti Mandap, Kathmandu, or register as a commercial trade buyer.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 items-start lg:items-end justify-center">
              <a href="#pricing" className="gf-btn-white w-full sm:w-auto text-center justify-center shadow-lg hover:scale-105 transition-all">
                <span>Book Exhibition Stall</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+977014220000"
                className="flex items-center gap-2 text-white/90 hover:text-white text-xs font-semibold transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-3 h-3 text-gf-peach" />
                </div>
                <span className="font-mono">Direct Desk: +977 01-4220000</span>
              </a>
            </div>

          </div>
        </div>

        {/* Lead Capture & Direct Secretariat Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="gf-badge">Secretariat Inquiries</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gf-primary leading-tight">
              Have Questions Regarding Customs, Stalls, or Buyer Passes?
            </h3>
            <p className="text-sm text-gf-text-muted leading-relaxed">
              Our trade facilitation team is available to assist international trade delegations,
              grower cooperatives, and media partners with all logistics.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gf-text">
                <div className="w-8 h-8 rounded-full bg-gf-bg-tint text-gf-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>secretariat@organicexponepal.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gf-text">
                <div className="w-8 h-8 rounded-full bg-gf-bg-tint text-gf-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+977 01-4220000 · +977 9800000000</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="gf-card p-6 sm:p-8 bg-gf-bg-warm">
              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-white rounded-xl border border-gf-border">
                  <div className="w-12 h-12 rounded-full bg-gf-bg-tint text-gf-secondary flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gf-primary">Inquiry Received Successfully</h4>
                  <p className="text-xs sm:text-sm text-gf-text-muted">
                    Our Secretariat trade officer will contact you within 24 business hours with the official prospectus and stall allocations.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="lead-name" className="text-xs font-bold text-gf-primary">Full Name *</label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Shrestha"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lead-email" className="text-xs font-bold text-gf-primary">Work Email *</label>
                      <input
                        id="lead-email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="lead-org" className="text-xs font-bold text-gf-primary">Organization / Estate</label>
                      <input
                        id="lead-org"
                        type="text"
                        placeholder="Company or Cooperative Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lead-intent" className="text-xs font-bold text-gf-primary">Participation Intent</label>
                      <select
                        id="lead-intent"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                      >
                        <option value="exhibitor">Book Exhibition Stall (Grower/Co-op)</option>
                        <option value="buyer">Register as Commercial Buyer (Importer)</option>
                        <option value="sponsor">Sponsorship & Partnership</option>
                        <option value="media">Media & Delegate Accreditation</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="gf-btn-primary w-full justify-center py-3 text-sm shadow-md hover:scale-[1.01] transition-all">
                    <span>Submit Official Expo Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>


        </div>

      </div>
    </section>
  );
}
