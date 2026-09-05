"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Search, 
  Check, 
  Building2, 
  TreePine, 
  Droplets,
  Flame,
  Layers,
  ArrowUpRight, 
  Zap, 
  Globe2,
  LayoutGrid,
  TableProperties
} from "lucide-react";
import { B2BRfqModal } from "@/components/ui/B2BRfqModal";

export interface B2BProduct {
  id: string;
  name: string;
  category: "hemp-build" | "wellness-oils" | "fibers-textiles" | "spices-botanicals" | "tea-superfoods";
  categoryLabel: string;
  tagline: string;
  terroir: string;
  altitude: string;
  annualCapacity: string;
  moq: string;
  packaging: string;
  keyMetric: { label: string; value: string; percent: number };
  specs: { label: string; value: string }[];
  certifications: string[];
  image: string;
  badge?: string;
  isPopular?: boolean;
}

const B2B_PRODUCTS: B2BProduct[] = [
  // =========================================================================
  // 1. INDUSTRIAL HEMP & ECO-BUILDING
  // =========================================================================
  {
    id: "hemp-hurd",
    name: "Industrial Hempcrete Hurd / Shives (Shiv)",
    category: "hemp-build",
    categoryLabel: "Eco-Building",
    tagline: "Ultra-absorbent woody core for carbon-negative insulation & hempcrete walls.",
    terroir: "Janakpur & Mid-West",
    altitude: "150m – 1,200m",
    annualCapacity: "350 MT / Yr",
    moq: "1 MT Bulk",
    packaging: "20kg Bales / Big Bags",
    keyMetric: { label: "Carbon Balance", value: "-108 kg CO₂/m³", percent: 95 },
    specs: [
      { label: "Dust Content", value: "< 2.5% Dedusted" },
      { label: "Particle Size", value: "5mm – 25mm Calibrated" },
      { label: "Moisture Content", value: "< 12% Kiln Dried" },
      { label: "Bulk Density", value: "90 – 120 kg/m³" }
    ],
    certifications: ["ISO 14001", "ASTM C1177", "Phytosanitary Clean"],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    badge: "Carbon Negative",
    isPopular: true
  },
  {
    id: "hemp-lime-binder",
    name: "Natural Hydraulic Lime & Hemp Binder",
    category: "hemp-build",
    categoryLabel: "Eco-Building",
    tagline: "Engineered breathable mineral binder formulated for high-durability hempcrete casting.",
    terroir: "Chitwan Minerals",
    altitude: "200m",
    annualCapacity: "500 MT / Yr",
    moq: "2 MT",
    packaging: "25kg Multi-Wall Bags",
    keyMetric: { label: "Strength", value: "NHL 3.5 Grade", percent: 88 },
    specs: [
      { label: "Compressive Strength", value: "NHL 3.5 Grade" },
      { label: "Curing Phase", value: "Vapor Permeable" },
      { label: "Free Lime (Ca(OH)₂)", value: "> 25% Active" },
      { label: "VOC Emissions", value: "Zero (A+ Indoor Grade)" }
    ],
    certifications: ["EN 459-1 European Std", "Green Building Verified"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    badge: "Architectural Grade"
  },
  {
    id: "hemp-bamboo-panels",
    name: "Hemp-Bamboo Bio-Composite Boards",
    category: "hemp-build",
    categoryLabel: "Eco-Building",
    tagline: "Rigid non-toxic interior walling & sound-absorbing structural panels.",
    terroir: "Janakpur Workshop",
    altitude: "Regional Hub",
    annualCapacity: "15,000 Pcs / Yr",
    moq: "100 Panels",
    packaging: "Palletized Crates",
    keyMetric: { label: "Acoustic", value: "NRC 0.75 Rating", percent: 82 },
    specs: [
      { label: "Density", value: "450 - 600 kg/m³" },
      { label: "Thermal Conductivity", value: "0.065 W/mK" },
      { label: "Binder System", value: "Zero-Formaldehyde Bio-Resin" },
      { label: "Fire Rating", value: "Class B-s1, d0" }
    ],
    certifications: ["FSC Bamboo", "LEED Eligible"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "Eco Interior"
  },

  // =========================================================================
  // 2. HEMP WELLNESS & COLD-PRESSED OILS
  // =========================================================================
  {
    id: "cold-pressed-hemp-oil",
    name: "Virgin Cold-Pressed Hemp Seed Oil",
    category: "wellness-oils",
    categoryLabel: "Nutraceutical",
    tagline: "100% unrefined golden-emerald oil with optimal 3:1 Omega-6 to Omega-3 ratio.",
    terroir: "Western Foothills",
    altitude: "800m – 1,800m",
    annualCapacity: "60,000 L / Yr",
    moq: "25 L Drum",
    packaging: "25L Carboys / 200L Steel Drums",
    keyMetric: { label: "Omega 3-6-9", value: "3 : 1 Golden Ratio", percent: 96 },
    specs: [
      { label: "Extraction", value: "First Cold-Press (<40°C)" },
      { label: "Omega Profile", value: "LA 55%, ALA 20%, GLA 3.5%" },
      { label: "THC / CBD", value: "0.00% (Non-Psychoactive)" },
      { label: "Peroxide Value", value: "< 4.0 meq O₂/kg" }
    ],
    certifications: ["EU Bio Organic", "USDA NOP", "ISO 22000", "GC/MS Certified"],
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    badge: "Nutraceutical Grade",
    isPopular: true
  },
  {
    id: "hemp-protein-powder",
    name: "50% Raw Organic Hemp Protein Powder",
    category: "wellness-oils",
    categoryLabel: "Nutraceutical",
    tagline: "Water-soluble, cold-milled plant protein with all 9 essential amino acids.",
    terroir: "Highland Organic",
    altitude: "1,200m – 2,200m",
    annualCapacity: "80 MT / Yr",
    moq: "100 kg",
    packaging: "20kg Vacuum Bags",
    keyMetric: { label: "Protein Purity", value: "50.5% Dry Matter", percent: 90 },
    specs: [
      { label: "Protein Content", value: "50.5% Dry Matter" },
      { label: "Dietary Fiber", value: "18% Prebiotic Fiber" },
      { label: "Digestibility", value: "92% Digestibility" },
      { label: "Heavy Metals", value: "Eurofins Clean Passed" }
    ],
    certifications: ["100% Vegan / Non-GMO", "Gluten-Free", "USDA Organic"],
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80",
    badge: "Clean Label"
  },
  {
    id: "hulled-hemp-hearts",
    name: "Hulled Himalayan Hemp Hearts (Seeds)",
    category: "wellness-oils",
    categoryLabel: "Nutraceutical",
    tagline: "Soft, buttery, ready-to-eat organic superfood packed with zinc & magnesium.",
    terroir: "Karnali Belts",
    altitude: "1,500m",
    annualCapacity: "100 MT / Yr",
    moq: "200 kg",
    packaging: "25kg Vacuum Sacks",
    keyMetric: { label: "Dehulled Purity", value: "99.9% Cleaned", percent: 99 },
    specs: [
      { label: "Purity Grade", value: "99.9% Dehulled" },
      { label: "Protein Density", value: "33g per 100g" },
      { label: "Moisture Content", value: "< 7.5%" },
      { label: "Shelf Life", value: "18 Mos Vacuum Stored" }
    ],
    certifications: ["EU Organic", "BRC Food Certified", "Kosher Ready"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    badge: "Superfood"
  },

  // =========================================================================
  // 3. SUSTAINABLE FIBERS & TEXTILES
  // =========================================================================
  {
    id: "raw-hemp-fiber",
    name: "Raw Degummed Hemp Bast Fiber",
    category: "fibers-textiles",
    categoryLabel: "Sustainable Fibers",
    tagline: "Extra-long organic bast fiber with exceptional tensile strength for yarn & composites.",
    terroir: "Bajhang & Rukum",
    altitude: "1,800m – 2,600m",
    annualCapacity: "120 MT / Yr",
    moq: "500 kg",
    packaging: "100kg Compressed Bales",
    keyMetric: { label: "Tensile Strength", value: "850 MPa Peak", percent: 94 },
    specs: [
      { label: "Fiber Length", value: "700mm – 1,400mm" },
      { label: "Tensile Strength", value: "580 - 850 MPa" },
      { label: "Lignin Content", value: "< 3.5% Degummed" },
      { label: "Eco Impact", value: "Zero Chemical Retting" }
    ],
    certifications: ["GOTS Organic", "OEKO-TEX 100", "Fair Trade"],
    image: "https://images.unsplash.com/photo-1594824813590-7856b3e34b7f?auto=format&fit=crop&w=800&q=80",
    badge: "Circular Fiber",
    isPopular: true
  },
  {
    id: "handwoven-hemp-canvas",
    name: "Handwoven Pure Hemp Fabric & Canvas",
    category: "fibers-textiles",
    categoryLabel: "Sustainable Textiles",
    tagline: "Durable, anti-microbial organic textile for sustainable fashion & luggage.",
    terroir: "Janakpur & Baglung",
    altitude: "Artisan Co-ops",
    annualCapacity: "45,000 M / Yr",
    moq: "200 Meters",
    packaging: "50m Eco Rolls",
    keyMetric: { label: "Fabric Density", value: "450 GSM Heavy Duck", percent: 88 },
    specs: [
      { label: "Fabric Weight", value: "280 – 450 GSM" },
      { label: "Weave Type", value: "Plain / Twill / Heavy Duck" },
      { label: "Dye Options", value: "Herbal Dye / Unbleached" },
      { label: "Durability", value: "3x Stronger than Cotton" }
    ],
    certifications: ["Fair Trade Forum Nepal", "Craftmark Authenticated"],
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
    badge: "Artisan B2B"
  },
  {
    id: "hemp-lokta-paper",
    name: "Tree-Free Hemp & Lokta Seed Paper",
    category: "fibers-textiles",
    categoryLabel: "Eco-Packaging",
    tagline: "Heritage Nepalese paper crafted from wild Daphne & hemp pulp for luxury boxes.",
    terroir: "Parbat Mountain Mills",
    altitude: "2,000m – 3,000m",
    annualCapacity: "100,000 Sheets / Yr",
    moq: "1,000 Sheets",
    packaging: "Pallet Moisture Packs",
    keyMetric: { label: "Longevity", value: "Acid-Free 500+ Yrs", percent: 98 },
    specs: [
      { label: "Weight Range", value: "40 GSM to 300 GSM" },
      { label: "Composition", value: "50% Lokta + 50% Hemp" },
      { label: "Insect Resistance", value: "Natural Non-Rotting" },
      { label: "Finishes", value: "Plantable Wildflower Seeds" }
    ],
    certifications: ["Zero Deforestation", "Handicrafts Council Approved"],
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    badge: "Tree-Free"
  },

  // =========================================================================
  // 4. SPICES & BIO-ACTIVE BOTANICALS
  // =========================================================================
  {
    id: "mustang-timur",
    name: "Wild Mustang Timur Pepper (Sichuan Pepper)",
    category: "spices-botanicals",
    categoryLabel: "Himalayan Spices",
    tagline: "Intense citrus-grapefruit aroma and electric tingling sensation with high sanshool.",
    terroir: "Mustang & Myagdi",
    altitude: "2,100m – 2,800m",
    annualCapacity: "80 MT / Yr",
    moq: "100 kg",
    packaging: "25kg Vacuum Kraft Sacks",
    keyMetric: { label: "Sanshool Potency", value: "> 4.5% Active", percent: 92 },
    specs: [
      { label: "Active Compound", value: "Hydroxy-α-sanshool > 4.5%" },
      { label: "Essential Oil Content", value: "3.8% – 5.2% v/w" },
      { label: "Moisture Content", value: "< 9.5%" },
      { label: "Purity Grade", value: "Stem-Cleaned (Grade AAA)" }
    ],
    certifications: ["EU Bio Certified", "USDA Organic", "Pesticide Screened"],
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    badge: "Signature Terroir",
    isPopular: true
  },
  {
    id: "large-black-cardamom",
    name: "Taplejung Large Black Cardamom (Alaichi)",
    category: "spices-botanicals",
    categoryLabel: "Himalayan Spices",
    tagline: "Smokeless kiln-dried jumbo pods boasting sweet camphoraceous and resinous notes.",
    terroir: "Taplejung & Ilam",
    altitude: "1,400m – 2,100m",
    annualCapacity: "150 MT / Yr",
    moq: "500 kg",
    packaging: "50kg Jute Sacks + Liner",
    keyMetric: { label: "1,8-Cineole", value: "38% Volatile Oil", percent: 89 },
    specs: [
      { label: "1,8-Cineole Content", value: "32% – 38% in Volatile Oil" },
      { label: "Pod Size", value: "22mm – 28mm (Jumbo Tail-Cut)" },
      { label: "Drying Tech", value: "Improved Smokeless Bhattis" },
      { label: "Foreign Matter", value: "< 0.5%" }
    ],
    certifications: ["Spices Board Grade 1", "Phytosanitary Clean", "USDA Organic"],
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
    badge: "Top Commercial"
  },
  {
    id: "himalayan-shilajit",
    name: "Purified Himalayan Shilajit Gold Grade Resin",
    category: "spices-botanicals",
    categoryLabel: "Bio-Active Botanicals",
    tagline: "Mineral-rich bio-active biomass harvested from cliffs above 4,500m.",
    terroir: "Dolpa & Humla",
    altitude: "4,500m – 5,200m",
    annualCapacity: "15 MT / Yr",
    moq: "10 kg",
    packaging: "5kg Stainless Tins / Jars",
    keyMetric: { label: "Fulvic Acid Assay", value: "> 62% Standardized", percent: 97 },
    specs: [
      { label: "Fulvic Acid", value: "> 62% Standardized (HPLC)" },
      { label: "Humic Acid", value: "> 14%" },
      { label: "Ionic Minerals", value: "85+ Ionic Minerals" },
      { label: "Heavy Metal Screen", value: "Eurofins Passed" }
    ],
    certifications: ["Ayurvedic GMP", "Heavy Metal Tested", "EU/US Lab COA"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    badge: "Ultra-Pure"
  },
  {
    id: "wintergreen-essential-oil",
    name: "Steam-Distilled Pure Wintergreen Oil",
    category: "spices-botanicals",
    categoryLabel: "Essential Distillates",
    tagline: "Wild Gaultheria fragrantissima distillate rich in natural methyl salicylate.",
    terroir: "Dolakha Slopes",
    altitude: "2,200m – 2,800m",
    annualCapacity: "25,000 kg / Yr",
    moq: "25 kg",
    packaging: "25kg Aluminum Drums",
    keyMetric: { label: "Methyl Salicylate", value: "98.5% GC/MS Pure", percent: 99 },
    specs: [
      { label: "Methyl Salicylate", value: "> 98.2% (GC/MS Pure)" },
      { label: "Refractive Index", value: "1.535 – 1.538 at 20°C" },
      { label: "Optical Rotation", value: "-0.5° to -1.5°" },
      { label: "Flash Point", value: "96°C" }
    ],
    certifications: ["100% Pure IFRA Compliant", "ISO 9001:2015", "EU CPNP"],
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80",
    badge: "Pharma Grade"
  },

  // =========================================================================
  // 5. TEAS, COFFEE & SUPERFOODS
  // =========================================================================
  {
    id: "orthodox-white-tea",
    name: "Ilam Highland Orthodox White Needle Tea",
    category: "tea-superfoods",
    categoryLabel: "Specialty Tea",
    tagline: "Silvery unopened tea buds hand-plucked during spring first flush at 2,150m.",
    terroir: "Ilam Single-Estate",
    altitude: "2,150m",
    annualCapacity: "20 MT / Yr",
    moq: "50 kg",
    packaging: "20kg Wooden Chests",
    keyMetric: { label: "Polyphenols", value: "> 22% Active", percent: 91 },
    specs: [
      { label: "Flush Season", value: "Spring First Flush" },
      { label: "Polyphenol Content", value: "> 22% Active Antioxidants" },
      { label: "Cup Character", value: "Honeysuckle & White Peach" },
      { label: "Leaf Grade", value: "Silver Tips / Imperial" }
    ],
    certifications: ["EU Bio Certified", "USDA Organic", "JAS Japan"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    badge: "Master Reserve",
    isPopular: true
  },
  {
    id: "arabica-coffee",
    name: "Specialty Shade-Grown Arabica Coffee",
    category: "tea-superfoods",
    categoryLabel: "Specialty Coffee",
    tagline: "Glacier-fed micro-lot Arabica grown under native fruit canopies.",
    terroir: "Nuwakot High Valley",
    altitude: "1,400m – 1,750m",
    annualCapacity: "45 MT / Yr",
    moq: "500 kg",
    packaging: "60kg GrainPro Sacks",
    keyMetric: { label: "SCA Score", value: "86.5+ Cupping", percent: 87 },
    specs: [
      { label: "SCA Specialty Score", value: "86.5+ Points Cupping" },
      { label: "Processing Method", value: "Fully Washed & Sun-Dried" },
      { label: "Varietal", value: "Bourbon & Typica" },
      { label: "Moisture Level", value: "10.5% – 11.5%" }
    ],
    certifications: ["Rainforest Compatible", "SCA Specialty Certified"],
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
    badge: "SCA 86.5+"
  },
  {
    id: "annapurna-cliff-honey",
    name: "Raw Annapurna Cliff Honey (Mad Honey)",
    category: "tea-superfoods",
    categoryLabel: "Superfood",
    tagline: "Rare wild crimson honey harvested from Himalayan cliff faces of Apis laboriosa.",
    terroir: "Lamjung Glades",
    altitude: "2,500m – 3,500m",
    annualCapacity: "12 MT / Yr",
    moq: "50 kg",
    packaging: "25kg Food Drums / Jars",
    keyMetric: { label: "Grayanotoxin", value: "Standardized Assay", percent: 93 },
    specs: [
      { label: "Floral Source", value: "Wild Rhododendron" },
      { label: "Grayanotoxin Level", value: "Eurofins Lab Report" },
      { label: "Purity State", value: "Raw Unheated" },
      { label: "Diastase Activity", value: "> 18 DN Units" }
    ],
    certifications: ["Wild Harvest Cert", "DNA Authenticated", "Phytosanitary Clean"],
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    badge: "Rare Harvest"
  },
  {
    id: "jumla-marsi-rice",
    name: "Jumla Marsi Red Rice & Buckwheat",
    category: "tea-superfoods",
    categoryLabel: "Heritage Grains",
    tagline: "World’s highest-altitude rice and heirloom tartary buckwheat packed with rutin.",
    terroir: "Jumla Valley",
    altitude: "2,600m – 3,000m",
    annualCapacity: "90 MT / Yr",
    moq: "1 MT",
    packaging: "25kg Multi-Ply Sacks",
    keyMetric: { label: "Rutin Flavonoid", value: "1,500 mg / 100g", percent: 89 },
    specs: [
      { label: "Glycemic Index", value: "Low GI (54)" },
      { label: "Anthocyanin Content", value: "Rich Natural Red" },
      { label: "Rutin Concentration", value: "> 1,500mg/100g" },
      { label: "Irrigation", value: "Pure Glacial Water" }
    ],
    certifications: ["GI Tag Nepal", "100% Pesticide Free"],
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage"
  }
];

const CATEGORIES = [
  { id: "all", label: "All Commodities", icon: Layers, count: B2B_PRODUCTS.length },
  { id: "hemp-build", label: "Industrial Hemp & Building", icon: Building2, count: 3 },
  { id: "wellness-oils", label: "Hemp Oils & Wellness", icon: Droplets, count: 3 },
  { id: "fibers-textiles", label: "Fibers & Textiles", icon: TreePine, count: 3 },
  { id: "spices-botanicals", label: "Spices & Botanicals", icon: Flame, count: 4 },
  { id: "tea-superfoods", label: "Teas & Superfoods", icon: Sparkles, count: 4 }
];

export function B2BTradeShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"bento" | "table">("bento");
  const [selectedProductForModal, setSelectedProductForModal] = useState<string | undefined>(undefined);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);

  // Filter products based on category and search query
  const filteredProducts = B2B_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.terroir.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.certifications.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOpenRfq = (productName: string) => {
    setSelectedProductForModal(productName);
    setIsRfqModalOpen(true);
  };

  return (
    <section id="export-catalog" className="py-16 lg:py-24 bg-[#F9FBF8] border-t border-gf-border relative overflow-hidden">
      
      {/* Ambient Background Accents */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-amber-100/25 rounded-full blur-[130px] pointer-events-none -z-0" />

      {/* =========================================================================
          1. LIVE B2B COMMODITY ASSAY & EXPORT TICKER MARQUEE
          ========================================================================= */}
      <div className="w-full bg-[#183B2B] text-white py-2.5 border-y border-emerald-800/40 overflow-hidden relative shadow-inner mb-10">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[
            "🌿 Hempcrete Hurd: 350 MT Annual Yield · Kiln-Dried & Dedusted",
            "💧 Virgin Cold-Pressed Hemp Seed Oil: 60,000 L · 3:1 Omega Balance · GC/MS Certified",
            "🌶️ Wild Mustang Timur Pepper: Hydroxy-α-sanshool > 4.5% · Grade AAA",
            "☕ Ilam Highland White Needle Tea: First Flush Reserve · 2,150m Glacial Terroir",
            "🪵 Taplejung Large Cardamom: Smokeless Improved Bhattis · 38% 1,8-Cineole",
            "🧵 Raw Degummed Bast Fiber: 850 MPa Tensile Strength · Zero Chemical Retting",
            "🍯 Raw Annapurna Cliff Mad Honey: DNA Authenticated & Grayanotoxin Standardized",
            "🧪 Purified Himalayan Shilajit: >62% Fulvic Acid HPLC · Eurofins Heavy Metal Screened",
          ].concat([
            "🌿 Hempcrete Hurd: 350 MT Annual Yield · Kiln-Dried & Dedusted",
            "💧 Virgin Cold-Pressed Hemp Seed Oil: 60,000 L · 3:1 Omega Balance · GC/MS Certified",
            "🌶️ Wild Mustang Timur Pepper: Hydroxy-α-sanshool > 4.5% · Grade AAA",
            "☕ Ilam Highland White Needle Tea: First Flush Reserve · 2,150m Glacial Terroir",
          ]).map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2.5 text-xs font-mono font-medium tracking-wide">
              <span className="text-gf-peach font-bold">●</span>
              <span className="text-gray-100">{item}</span>
              <span className="text-emerald-400 font-bold bg-white/10 px-1.5 py-0.2 rounded text-[10px]">EXPORT READY</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-10 relative z-10">
        
        {/* =========================================================================
            2. SECTION HEADER (Sleek Compact Modern Layout)
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-gray-200/80 pb-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-[#1B4D36] text-[11px] font-bold uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5 text-gf-secondary" />
                Global B2B Sourcing Hub
              </span>
              <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-300">
                2026 Raw Materials & Commodities
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#183B2B] leading-tight">
              Himalayan Organic Commodities &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D4F] via-[#386641] to-[#183B2B]">
                Industrial Hemp Bio-Materials
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gf-text-muted leading-relaxed font-normal">
              Direct access to certified Nepalese agricultural cooperatives, sustainable industrial hemp innovators (like <em>Shah Hemp Inno-Ventures</em>), and wild extractors. Turnkey FOB/CIF Incoterms and batch COA testing.
            </p>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* View Mode Toggle: Bento Tiles vs Fast Table */}
            <div className="flex items-center p-1 bg-white rounded-xl border border-gray-200 shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("bento")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "bento"
                    ? "bg-[#183B2B] text-white shadow-xs"
                    : "text-gray-600 hover:text-[#183B2B]"
                }`}
                title="Sleek Landscape Bento View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tiles</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "table"
                    ? "bg-[#183B2B] text-white shadow-xs"
                    : "text-gray-600 hover:text-[#183B2B]"
                }`}
                title="Compact Data Table Matrix"
              >
                <TableProperties className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Data Matrix</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleOpenRfq("All Commodities Sourcing Master Quote")}
              className="gf-btn-primary text-xs py-2.5 px-4 shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-gf-peach" />
              <span>Master RFQ</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            3. INTERACTIVE CATEGORY TABS & COMPACT SEARCH BAR
            ========================================================================= */}
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            
            {/* Horizontal Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                      isActive
                        ? "bg-[#183B2B] text-white border-[#183B2B] shadow-sm"
                        : "bg-white text-gf-text hover:bg-emerald-50/80 hover:text-[#183B2B] border-gray-200"
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-gf-peach" : "text-gf-secondary"}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search raw material, terroir, spec..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 rounded-xl border border-gray-300 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-gray-400 hover:text-gray-700 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer font-bold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. PRODUCTS PRESENTATION: SHORT HORIZONTAL BENTO TILES OR TABLE
            ========================================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3 max-w-md mx-auto">
            <Search className="w-6 h-6 text-gray-400 mx-auto" />
            <p className="text-sm font-bold text-gf-primary">No commodities match &quot;{searchQuery}&quot;</p>
            <button
              type="button"
              onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              className="gf-btn-primary text-xs px-4 py-1.5"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "bento" ? (
          /* =======================================================================
             VIEW 1: SLEEK HORIZONTAL LANDSCAPE BENTO TILES (Short, Compact & Modern)
             ======================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-gray-200/90 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
              >
                {/* Left Side: Compact Image Thumbnail (Squarish on desktop) */}
                <div className="relative w-full sm:w-44 lg:w-48 h-40 sm:h-auto shrink-0 overflow-hidden bg-gray-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

                  {/* Badges Over Image */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 z-10">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md px-2 py-0.5 rounded-md border border-white/20">
                      {product.categoryLabel}
                    </span>

                    {product.badge && (
                      <span className="text-[9px] font-extrabold uppercase tracking-wider bg-gf-peach text-gray-950 px-2 py-0.5 rounded-md font-sans">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex items-center justify-between text-[11px] z-10">
                    <span className="truncate font-semibold text-emerald-100 drop-shadow-sm">
                      📍 {product.terroir}
                    </span>
                    <span className="font-mono text-[10px] text-white/90 bg-black/50 px-1.5 py-0.2 rounded">
                      {product.altitude}
                    </span>
                  </div>
                </div>

                {/* Right Side: Structured Compact Content Pane */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  
                  <div className="space-y-2">
                    {/* Title and Key Metric Chip */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-extrabold text-[#183B2B] group-hover:text-[#2E7D4F] transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-[11px] text-gf-text-muted line-clamp-1 font-light mt-0.5">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Chemical Potency Mini-Badge */}
                      <div className="shrink-0 bg-emerald-50 border border-emerald-200/80 px-2 py-1 rounded-lg text-right">
                        <span className="text-[9px] uppercase font-bold text-emerald-700 block leading-none">
                          {product.keyMetric.label.split(" ")[0]}
                        </span>
                        <span className="font-mono text-[11px] font-extrabold text-[#1B4D36] block">
                          {product.keyMetric.value}
                        </span>
                      </div>
                    </div>

                    {/* Compact Specs Grid (2x2) */}
                    <div className="grid grid-cols-2 gap-2 bg-[#F8FAF7] p-2.5 rounded-xl border border-gray-100 text-[11px]">
                      <div className="flex items-center justify-between border-r border-gray-200 pr-2">
                        <span className="text-gray-500 font-medium">Annual Yield:</span>
                        <span className="font-mono font-bold text-[#183B2B]">{product.annualCapacity}</span>
                      </div>
                      <div className="flex items-center justify-between pl-1">
                        <span className="text-gray-500 font-medium">Min Order:</span>
                        <span className="font-mono font-bold text-[#2E7D4F]">{product.moq}</span>
                      </div>
                      <div className="flex items-center justify-between border-r border-gray-200 pr-2 border-t border-gray-100 pt-1">
                        <span className="text-gray-500 font-medium">Pack:</span>
                        <span className="font-mono text-[10px] text-gray-800 truncate">{product.packaging.split(" / ")[0]}</span>
                      </div>
                      <div className="flex items-center justify-between pl-1 border-t border-gray-100 pt-1">
                        <span className="text-gray-500 font-medium">Quality:</span>
                        <span className="font-mono text-[10px] text-emerald-800 font-bold">{product.certifications[0]}</span>
                      </div>
                    </div>

                    {/* Certifications Inline Chips */}
                    <div className="flex flex-wrap items-center gap-1">
                      {product.certifications.slice(0, 3).map((cert, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[9px] font-bold bg-gray-50 text-gray-700 border border-gray-200 px-1.5 py-0.2 rounded flex items-center gap-1"
                        >
                          <Check className="w-2 h-2 text-emerald-600 stroke-[3]" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Compact Bottom Actions */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenRfq(product.name)}
                      className="gf-btn-primary text-[11px] py-1.5 px-3.5 shadow-xs cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Sample Kit &amp; Specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenRfq(product.name)}
                      className="text-[11px] font-bold text-gf-text-muted hover:text-gf-secondary transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Proforma RFQ</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* =======================================================================
             VIEW 2: FAST COMPACT TRADE DATA MATRIX (Table View)
             ======================================================================= */
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#183B2B] text-white text-[11px] font-mono uppercase tracking-wider">
                    <th className="py-3 px-4">Commodity / Raw Material</th>
                    <th className="py-3 px-3">Terroir / Elevation</th>
                    <th className="py-3 px-3">Key Assay / Compound</th>
                    <th className="py-3 px-3">Annual Yield</th>
                    <th className="py-3 px-3">MOQ</th>
                    <th className="py-3 px-3">Standard Packaging</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gf-text font-medium">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-emerald-50/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-10 h-10 rounded-lg object-cover shrink-0 border border-gray-200"
                          />
                          <div>
                            <span className="font-extrabold text-[#183B2B] block text-xs">{product.name}</span>
                            <span className="text-[10px] text-gray-500 block">{product.categoryLabel}</span>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-3">
                        <span className="font-semibold text-[#183B2B] block">{product.terroir}</span>
                        <span className="text-[10px] font-mono text-gray-500">{product.altitude}</span>
                      </td>

                      <td className="py-3 px-3">
                        <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block text-[11px]">
                          {product.keyMetric.value}
                        </span>
                      </td>

                      <td className="py-3 px-3 font-mono text-gray-700">{product.annualCapacity}</td>
                      <td className="py-3 px-3 font-mono font-bold text-[#2E7D4F]">{product.moq}</td>
                      <td className="py-3 px-3 text-[11px] text-gray-600 truncate max-w-[140px]">{product.packaging}</td>

                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => handleOpenRfq(product.name)}
                          className="gf-btn-primary text-[10px] py-1.5 px-3 shadow-xs cursor-pointer inline-flex items-center gap-1"
                        >
                          <span>Request Quote</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            5. SOURCING SAMPLE BOX BUILDER BANNER (Compact & Elegant)
            ========================================================================= */}
        <div className="rounded-2xl bg-gradient-to-br from-[#183B2B] via-[#1E4533] to-[#2E7D4F] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden border border-emerald-600/30">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-gf-peach text-[10px] font-bold uppercase tracking-wider border border-white/15">
                <Sparkles className="w-3 h-3" />
                Procurement Sample Kit
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Curate Your Custom 5-Item Sourcing &amp; Lab Sample Kit
              </h3>

              <p className="text-xs text-emerald-100 font-light leading-relaxed">
                Request an official export presentation box featuring verified batches of industrial hemp hurd, cold-pressed seed oils, wild spices, and teas with Eurofins/SGS assays. Dispatched in 48h via DHL Express.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => handleOpenRfq("Custom 5-Item Sourcing & Sample Kit Box")}
                className="gf-btn-white text-xs py-2.5 px-5 shadow-lg font-bold cursor-pointer text-center justify-center"
              >
                <span>Request Sample Box</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => handleOpenRfq("2026 Complete Export Price List & Tonnage Schedule")}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-all cursor-pointer text-center"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Export Price List (PDF)</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* RFQ Interactive Modal */}
      <B2BRfqModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        initialProduct={selectedProductForModal}
      />
    </section>
  );
}
