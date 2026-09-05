"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, Sparkles, Building, Globe, PackageCheck, ShieldCheck } from "lucide-react";

export interface B2BRfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export function B2BRfqModal({ isOpen, onClose, initialProduct }: B2BRfqModalProps) {
  const [prevInitialProduct, setPrevInitialProduct] = useState(initialProduct);
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || "Hempcrete Hurd / Shives");
  const [volume, setVolume] = useState("1 - 5 MT (Trial Commercial)");
  const [incoterm, setIncoterm] = useState("FOB Kolkata Port (Sea)");
  const [requestSample, setRequestSample] = useState(true);
  const [needPrivateLabel, setNeedPrivateLabel] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync state with prop change without useEffect anti-pattern
  if (initialProduct !== prevInitialProduct) {
    setPrevInitialProduct(initialProduct);
    setSelectedProduct(initialProduct || "Hempcrete Hurd / Shives");
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gf-border overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-gf-primary via-[#24422E] to-gf-secondary text-white px-6 sm:px-8 py-5 flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/15 px-2.5 py-0.5 rounded-full text-gf-peach border border-white/10">
                <Sparkles className="w-3 h-3" />
                Direct Secretariat B2B Deal Desk
              </span>
              <span className="text-white/60 text-xs hidden sm:inline">|</span>
              <span className="text-xs font-mono text-emerald-200 hidden sm:inline">Priority Export Routing</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Request B2B Quotation & Lab Sample Kit
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-gf-text space-y-6">
          {isSubmitted ? (
            <div className="text-center py-8 sm:py-12 space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-gf-secondary flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-gf-primary">
                  Official Trade RFQ Dispatched!
                </h4>
                <p className="text-sm text-gf-text-muted leading-relaxed">
                  Thank you, <strong className="text-gf-text">{formData.name || "Valued Buyer"}</strong>. Your commercial inquiry for <strong className="text-gf-secondary">{selectedProduct} ({volume})</strong> has been assigned an export tracking token and dispatched to our Trade Facilitation Desk.
                </p>
              </div>

              {/* Action Cards */}
              <div className="bg-gf-bg-tint p-4 rounded-2xl border border-gf-secondary/20 text-left space-y-2">
                <div className="flex items-center gap-2 text-gf-secondary font-bold text-xs uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  What Happens Next?
                </div>
                <ul className="text-xs text-gf-text space-y-1.5 list-disc list-inside">
                  <li>Our Export Officer will email formal CIF/FOB proforma pricing within <strong>12 business hours</strong>.</li>
                  {requestSample && <li>Lab Sample & Certificate of Analysis (COA) parcel preparation initiated via DHL Express.</li>}
                  <li>Direct WhatsApp/Zoom bilateral scheduling link dispatched to your inbox.</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="gf-btn-primary text-xs sm:text-sm px-6 py-2.5"
                >
                  Done & Close Window
                </button>
                <a
                  href="#trade-hub"
                  onClick={handleReset}
                  className="gf-btn-outline text-xs sm:text-sm px-6 py-2.5"
                >
                  Explore Export Logistics & QA
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Product & Volume Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Commodity Select */}
                <div className="space-y-1.5">
                  <label htmlFor="rfq-product" className="text-xs font-bold text-gf-primary flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5 text-gf-secondary" />
                    Target Organic Commodity / Raw Material *
                  </label>
                  <select
                    id="rfq-product"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-gf-bg-warm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                  >
                    <optgroup label="Industrial Hemp & Eco-Building">
                      <option value="Hempcrete Hurd / Shives">Hempcrete Hurd / Shives (Woody Core)</option>
                      <option value="Natural Hydraulic Lime Binder">Natural Hydraulic Lime & Hemp Binder</option>
                      <option value="Hemp-Bamboo Bio-Composite Panels">Hemp-Bamboo Bio-Composite Panels</option>
                    </optgroup>
                    <optgroup label="Hemp Wellness & Cold-Pressed Nutrition">
                      <option value="Cold-Pressed Hemp Seed Oil">Virgin Cold-Pressed Hemp Seed Oil (3:1 Omega)</option>
                      <option value="50% Raw Hemp Protein Powder">50% Raw Hemp Protein Powder (Water-Soluble)</option>
                      <option value="Hulled Organic Hemp Hearts">Hulled Organic Hemp Hearts (Superfood Seeds)</option>
                      <option value="Himalayan Herbal Hemp Balms">Herbal Hemp Body & Muscle Relief Balms</option>
                    </optgroup>
                    <optgroup label="Sustainable Fibers & Textiles">
                      <option value="Raw Degummed Hemp Bast Fiber">Raw Degummed Hemp Bast Fiber</option>
                      <option value="Handspun Hemp Yarn & Twine">Handspun Natural Hemp Yarn & Twine</option>
                      <option value="Handwoven Pure Hemp Fabric">Handwoven Pure Hemp Canvas & Fabrics</option>
                      <option value="Hemp & Lokta Seed Paper">Tree-Free Hemp & Lokta Handmade Paper</option>
                    </optgroup>
                    <optgroup label="Highland Spices & Bio-Active Botanicals">
                      <option value="Wild Mustang Timur Pepper">Wild Mustang Timur Pepper (Sichuan Pepper)</option>
                      <option value="Taplejung Large Black Cardamom">Taplejung Large Black Cardamom (Alaichi)</option>
                      <option value="Purified Himalayan Shilajit">Purified Himalayan Shilajit Resin (60%+ Fulvic)</option>
                      <option value="Pure Steam-Distilled Essential Oils">Steam Distilled Essential Oils (Wintergreen/Lemongrass)</option>
                    </optgroup>
                    <optgroup label="Highland Tea, Coffee & Superfoods">
                      <option value="Ilam High-Altitude Orthodox Tea">Ilam Orthodox White Needle & Green Tea</option>
                      <option value="Single-Estate Arabica Coffee">Specialty Shade-Grown Arabica (86+ SCA)</option>
                      <option value="Raw Annapurna Cliff Honey">Raw Annapurna Cliff Honey (Mad Honey)</option>
                      <option value="Jumla Marsi Red Rice & Buckwheat">Jumla Marsi Red Rice & Tartary Buckwheat</option>
                    </optgroup>
                  </select>
                </div>

                {/* Target Volume */}
                <div className="space-y-1.5">
                  <label htmlFor="rfq-volume" className="text-xs font-bold text-gf-primary flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-gf-secondary" />
                    Required Annual / Order Volume *
                  </label>
                  <select
                    id="rfq-volume"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-gf-bg-warm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                  >
                    <option value="100 - 500 kg (Micro / Lab Batch)">100 - 500 kg (Micro / Lab Trial Batch)</option>
                    <option value="1 - 5 MT (Trial Commercial)">1 - 5 MT (Commercial Trial Order)</option>
                    <option value="5 - 20 MT (FCL Container)">5 - 20 MT (Full Container Load / FCL)</option>
                    <option value="20 - 100+ MT (Annual Supply Contract)">20 - 100+ MT (Annual Sourcing Contract)</option>
                  </select>
                </div>

              </div>

              {/* Incoterms & Trade Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Incoterms Preference */}
                <div className="space-y-1.5">
                  <label htmlFor="rfq-incoterm" className="text-xs font-bold text-gf-primary">
                    Preferred Shipping Incoterm
                  </label>
                  <select
                    id="rfq-incoterm"
                    value={incoterm}
                    onChange={(e) => setIncoterm(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-gf-bg-warm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                  >
                    <option value="FOB Kolkata Port (Sea)">FOB Kolkata Dry Port (Ocean Freight)</option>
                    <option value="FOB Tribhuvan Airport (Air Cargo)">FOB Kathmandu Airport KTM (Direct Air)</option>
                    <option value="CIF Major Destination Port (All-Inclusive)">CIF Destination Sea/Air Port (Turnkey)</option>
                    <option value="DAP Door Delivery (Courier/Cargo)">DAP Delivered at Place (Doorstep)</option>
                  </select>
                </div>

                {/* Destination Country */}
                <div className="space-y-1.5">
                  <label htmlFor="rfq-country" className="text-xs font-bold text-gf-primary">
                    Destination Country & Port of Entry *
                  </label>
                  <input
                    id="rfq-country"
                    type="text"
                    required
                    placeholder="e.g. Hamburg (Germany) or Los Angeles (USA)"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                  />
                </div>

              </div>

              {/* Checkboxes: Sample Kit & White Label */}
              <div className="bg-gf-bg-warm p-4 rounded-2xl border border-gf-border grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <label className="flex items-start gap-2.5 cursor-pointer text-xs font-semibold text-gf-primary">
                  <input
                    type="checkbox"
                    checked={requestSample}
                    onChange={(e) => setRequestSample(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-gf-secondary focus:ring-gf-secondary"
                  />
                  <span>
                    <strong>Request Free Physical Sample Kit & COA</strong>
                    <span className="block text-[11px] text-gf-text-muted font-normal mt-0.5">
                      Lab batch samples sent via express courier (DHL/FedEx).
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer text-xs font-semibold text-gf-primary">
                  <input
                    type="checkbox"
                    checked={needPrivateLabel}
                    onChange={(e) => setNeedPrivateLabel(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-gf-secondary focus:ring-gf-secondary"
                  />
                  <span>
                    <strong>Require Custom OEM / White-Label Packaging</strong>
                    <span className="block text-[11px] text-gf-text-muted font-normal mt-0.5">
                      Custom retail boxes, tins, pouches or bulk branded labeling.
                    </span>
                  </span>
                </label>

              </div>

              {/* Company & Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label htmlFor="rfq-name" className="text-xs font-bold text-gf-primary">
                    Buyer / Procurement Manager Name *
                  </label>
                  <input
                    id="rfq-name"
                    type="text"
                    required
                    placeholder="e.g. Jonathan Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="rfq-company" className="text-xs font-bold text-gf-primary flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-gf-secondary" />
                    Company / Enterprise Name *
                  </label>
                  <input
                    id="rfq-company"
                    type="text"
                    required
                    placeholder="e.g. Alpine Botanicals GmbH"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="rfq-email" className="text-xs font-bold text-gf-primary">
                    Corporate Email *
                  </label>
                  <input
                    id="rfq-email"
                    type="email"
                    required
                    placeholder="procurement@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="rfq-phone" className="text-xs font-bold text-gf-primary">
                    WhatsApp / Direct Phone (With Country Code) *
                  </label>
                  <input
                    id="rfq-phone"
                    type="tel"
                    required
                    placeholder="+49 170 0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                  />
                </div>

              </div>

              {/* Special Requirements / Specifications */}
              <div className="space-y-1.5">
                <label htmlFor="rfq-notes" className="text-xs font-bold text-gf-primary">
                  Specific Quality Parameters / Target Price / Certification Needs (Optional)
                </label>
                <textarea
                  id="rfq-notes"
                  rows={2}
                  placeholder="e.g. Need GC/MS test report for essential oil purity, requires USDA Organic seal, interested in meeting at the Kathmandu Expo on March 28."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gf-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary transition-all"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-gf-border">
                <div className="flex items-center gap-2 text-xs text-gf-text-muted">
                  <ShieldCheck className="w-4 h-4 text-gf-secondary" />
                  <span>Encrypted 256-Bit B2B Transmission · Zero Spam</span>
                </div>

                <button
                  type="submit"
                  className="gf-btn-primary w-full sm:w-auto px-8 py-3 text-sm shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Transmit Official RFQ & Sample Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
