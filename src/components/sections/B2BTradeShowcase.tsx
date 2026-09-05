"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Package, 
  ShieldCheck, 
  Layers, 
  Droplets, 
  Flame, 
  Search, 
  Check, 
  Building2, 
  TreePine, 
  Eye, 
  Activity, 
  ArrowUpRight, 
  Zap, 
  CheckCircle2, 
  Globe2 
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
    categoryLabel: "Eco-Building Materials",
    tagline: "Ultra-absorbent woody core for carbon-negative insulation & hempcrete walls.",
    terroir: "Janakpur & Mid-Western Belts",
    altitude: "150m – 1,200m",
    annualCapacity: "350 Metric Tons / Year",
    moq: "1 MT (Baled / Bulk)",
    packaging: "20kg High-Density Bales / Big Bags",
    keyMetric: { label: "Carbon Sequestration", value: "-108 kg CO₂/m³", percent: 95 },
    specs: [
      { label: "Dust Content", value: "< 2.5% Dedusted" },
      { label: "Particle Size", value: "5mm – 25mm Calibrated" },
      { label: "Moisture Content", value: "< 12% Kiln Dried" },
      { label: "Bulk Density", value: "90 – 120 kg/m³" }
    ],
    certifications: ["ISO 14001", "ASTM C1177 Tested", "Phytosanitary Clean"],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    badge: "Carbon-Negative Pioneer",
    isPopular: true
  },
  {
    id: "hemp-lime-binder",
    name: "Natural Hydraulic Lime & Hemp Binder",
    category: "hemp-build",
    categoryLabel: "Eco-Building Materials",
    tagline: "Engineered breathable mineral binder formulated for high-durability hempcrete casting.",
    terroir: "Chitwan Mineral Formulations",
    altitude: "200m",
    annualCapacity: "500 Metric Tons / Year",
    moq: "2 MT",
    packaging: "25kg Multi-Wall Moisture-Proof Bags",
    keyMetric: { label: "Hydraulic Strength", value: "NHL 3.5 Grade", percent: 88 },
    specs: [
      { label: "Compressive Strength", value: "NHL 3.5 Grade" },
      { label: "Curing Phase", value: "Vapor Permeable Setting" },
      { label: "Free Lime (Ca(OH)₂)", value: "> 25% Active" },
      { label: "VOC Emissions", value: "Zero (A+ Indoor Air Grade)" }
    ],
    certifications: ["EN 459-1 European Standard", "Green Building Council Verified"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    badge: "Architectural Grade"
  },
  {
    id: "hemp-bamboo-panels",
    name: "Hemp-Bamboo Bio-Composite Boards",
    category: "hemp-build",
    categoryLabel: "Eco-Building Materials",
    tagline: "Rigid non-toxic interior walling & sound-absorbing structural panels.",
    terroir: "Janakpur Innovation Workshop",
    altitude: "Regional Processing",
    annualCapacity: "15,000 Panels / Year",
    moq: "100 Panels (2.4m x 1.2m)",
    packaging: "Palletized & Edge-Protected Crates",
    keyMetric: { label: "Acoustic Absorption", value: "NRC 0.75", percent: 82 },
    specs: [
      { label: "Density", value: "450 - 600 kg/m³" },
      { label: "Thermal Conductivity", value: "0.065 W/mK" },
      { label: "Binder System", value: "Zero-Formaldehyde Bio-Resin" },
      { label: "Fire Rating", value: "Class B-s1, d0 Fire Retardant" }
    ],
    certifications: ["FSC Certified Bamboo", "LEED Point Eligible"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "Eco Interior Design"
  },

  // =========================================================================
  // 2. HEMP WELLNESS & COLD-PRESSED OILS
  // =========================================================================
  {
    id: "cold-pressed-hemp-oil",
    name: "Virgin Cold-Pressed Hemp Seed Oil",
    category: "wellness-oils",
    categoryLabel: "Nutraceutical & Wellness",
    tagline: "100% unrefined golden-emerald oil with the optimal 3:1 Omega-6 to Omega-3 ratio.",
    terroir: "Western Himalayan Foothills",
    altitude: "800m – 1,800m",
    annualCapacity: "60,000 Liters / Year",
    moq: "25 Liters (HDPE Drum / Food Grade)",
    packaging: "25L Carboys, 200L Steel Drums, or Custom Dark Glass Bottles",
    keyMetric: { label: "Omega 3-6-9 Ratio", value: "3 : 1 Golden Ratio", percent: 96 },
    specs: [
      { label: "Extraction", value: "First Cold-Press (<40°C)" },
      { label: "Omega Profile", value: "LA 55%, ALA 20%, GLA 3.5%" },
      { label: "THC / CBD Content", value: "0.00% (Non-Psychoactive)" },
      { label: "Peroxide Value", value: "< 4.0 meq O₂/kg" }
    ],
    certifications: ["EU Bio Organic", "USDA NOP Compliant", "ISO 22000 / HACCP", "GC/MS Certified"],
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
    badge: "Nutraceutical Grade",
    isPopular: true
  },
  {
    id: "hemp-protein-powder",
    name: "50% Raw Organic Hemp Protein Powder",
    category: "wellness-oils",
    categoryLabel: "Nutraceutical & Wellness",
    tagline: "Water-soluble, cold-milled plant protein with all 9 essential amino acids & edestin.",
    terroir: "Highland Organic Farms",
    altitude: "1,200m – 2,200m",
    annualCapacity: "80 Metric Tons / Year",
    moq: "100 kg",
    packaging: "20kg Multi-Ply Foil-Lined Vacuum Bags",
    keyMetric: { label: "Plant Protein Purity", value: "50.5% Dry Matter", percent: 90 },
    specs: [
      { label: "Protein Content", value: "50.5% Dry Matter" },
      { label: "Dietary Fiber", value: "18% Prebiotic Fiber" },
      { label: "Digestibility", value: "92% Protein Digestibility" },
      { label: "Heavy Metals", value: "Eurofins Clean Passed" }
    ],
    certifications: ["100% Vegan / Non-GMO", "Gluten-Free Certified", "USDA Organic"],
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=1200&q=80",
    badge: "Clean Label"
  },
  {
    id: "hulled-hemp-hearts",
    name: "Hulled Himalayan Hemp Hearts (Seeds)",
    category: "wellness-oils",
    categoryLabel: "Nutraceutical & Wellness",
    tagline: "Soft, buttery, ready-to-eat organic superfood packed with zinc, magnesium & protein.",
    terroir: "Karnali & Gandaki Belts",
    altitude: "1,500m",
    annualCapacity: "100 Metric Tons / Year",
    moq: "200 kg",
    packaging: "25kg Vacuum Sealed Nitrogen-Flushed Sacks",
    keyMetric: { label: "Dehulled Purity", value: "99.9% Cleaned", percent: 99 },
    specs: [
      { label: "Purity Grade", value: "99.9% Dehulled" },
      { label: "Protein Density", value: "33g per 100g" },
      { label: "Moisture Content", value: "< 7.5%" },
      { label: "Shelf Life", value: "18 Months Vacuum Stored" }
    ],
    certifications: ["EU Organic Verified", "BRC Food Certified", "Kosher / Halal Ready"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
    badge: "Superfood Export"
  },

  // =========================================================================
  // 3. SUSTAINABLE FIBERS & TEXTILES
  // =========================================================================
  {
    id: "raw-hemp-fiber",
    name: "Raw Degummed Hemp Bast Fiber",
    category: "fibers-textiles",
    categoryLabel: "Sustainable Fibers & Textiles",
    tagline: "Extra-long natural organic bast fiber with exceptional tensile strength for yarn & composites.",
    terroir: "Bajhang, Rukum & Rolpa",
    altitude: "1,800m – 2,600m",
    annualCapacity: "120 Metric Tons / Year",
    moq: "500 kg",
    packaging: "100kg High-Pressure Compressed Bales",
    keyMetric: { label: "Tensile Strength", value: "850 MPa Peak", percent: 94 },
    specs: [
      { label: "Fiber Length", value: "700mm – 1,400mm" },
      { label: "Tensile Strength", value: "580 - 850 MPa" },
      { label: "Lignin Content", value: "< 3.5% Degummed" },
      { label: "Eco Impact", value: "Zero Chemical Retting" }
    ],
    certifications: ["GOTS Organic Certified", "OEKO-TEX Standard 100", "Fair Trade"],
    image: "https://images.unsplash.com/photo-1594824813590-7856b3e34b7f?auto=format&fit=crop&w=1200&q=80",
    badge: "Circular Textile",
    isPopular: true
  },
  {
    id: "handwoven-hemp-canvas",
    name: "Handwoven Pure Hemp Fabric & Canvas",
    category: "fibers-textiles",
    categoryLabel: "Sustainable Fibers & Textiles",
    tagline: "Durable, anti-microbial, breathable organic textile for sustainable apparel & luggage.",
    terroir: "Janakpur & Baglung Artisans",
    altitude: "Artisan Co-ops",
    annualCapacity: "45,000 Meters / Year",
    moq: "200 Meters (Roll Form)",
    packaging: "50m Rolls Wrapped in Waterproof Eco-Packaging",
    keyMetric: { label: "Fabric Density", value: "450 GSM Heavy Duck", percent: 88 },
    specs: [
      { label: "Fabric Weight (GSM)", value: "280 – 450 GSM" },
      { label: "Weave Type", value: "Plain / Twill / Heavy Duck Canvas" },
      { label: "Dye Options", value: "Natural Herbal Dye / Unbleached" },
      { label: "Durability", value: "3x Stronger than Cotton" }
    ],
    certifications: ["Fair Trade Forum Nepal", "Craftmark Authenticated"],
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80",
    badge: "Artisan B2B"
  },
  {
    id: "hemp-lokta-paper",
    name: "Tree-Free Hemp & Lokta Seed Paper",
    category: "fibers-textiles",
    categoryLabel: "Sustainable Fibers & Textiles",
    tagline: "Heritage Nepalese paper crafted from wild Daphne bush & hemp pulp for luxury eco-packaging.",
    terroir: "Parbat & Dolakha Mountain Mills",
    altitude: "2,000m – 3,000m",
    annualCapacity: "100,000 Sheets / Year",
    moq: "1,000 Sheets (Custom Girth & GSM)",
    packaging: "Reinforced Pallet Packs with Moisture Barrier",
    keyMetric: { label: "Natural Longevity", value: "Acid-Free 500+ Yrs", percent: 98 },
    specs: [
      { label: "Weight Range", value: "40 GSM to 300 GSM" },
      { label: "Composition", value: "50% Wild Lokta + 50% Hemp Fiber" },
      { label: "Insect Resistance", value: "Natural Non-Rotting Fibers" },
      { label: "Special Finishes", value: "Botanical Petals / Plantable Wildflower Seeds" }
    ],
    certifications: ["Zero Deforestation", "Nepal Handicrafts Council Approved"],
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80",
    badge: "Tree-Free Packaging"
  },

  // =========================================================================
  // 4. SPICES & BIO-ACTIVE BOTANICALS
  // =========================================================================
  {
    id: "mustang-timur",
    name: "Wild Mustang Timur Pepper (Sichuan Pepper)",
    category: "spices-botanicals",
    categoryLabel: "Himalayan Spices & Botanicals",
    tagline: "Intense citrus-grapefruit aroma and electric tingling sensation with high sanshool potency.",
    terroir: "Mustang & Myagdi Districts",
    altitude: "2,100m – 2,800m",
    annualCapacity: "80 Metric Tons / Year",
    moq: "100 kg (Whole Dried Berries)",
    packaging: "25kg Multi-Layer Vacuum Sealed Kraft Bags",
    keyMetric: { label: "Bio-Active Sanshool", value: "> 4.5% Potency", percent: 92 },
    specs: [
      { label: "Active Compound", value: "Hydroxy-α-sanshool > 4.5%" },
      { label: "Essential Oil Content", value: "3.8% – 5.2% v/w" },
      { label: "Moisture Content", value: "< 9.5%" },
      { label: "Purity Grade", value: "Stem-Cleaned (Grade AAA)" }
    ],
    certifications: ["EU Bio Certified", "USDA Organic", "Pesticide Screened"],
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=80",
    badge: "Signature Terroir",
    isPopular: true
  },
  {
    id: "large-black-cardamom",
    name: "Taplejung Large Black Cardamom (Alaichi)",
    category: "spices-botanicals",
    categoryLabel: "Himalayan Spices & Botanicals",
    tagline: "Smokeless kiln-dried jumbo pods boasting sweet camphoraceous and warming resinous notes.",
    terroir: "Taplejung & Ilam Himalayan Slopes",
    altitude: "1,400m – 2,100m",
    annualCapacity: "150 Metric Tons / Year",
    moq: "500 kg",
    packaging: "50kg Jute Bags with Poly Liner",
    keyMetric: { label: "1,8-Cineole Content", value: "38% Volatile Oil", percent: 89 },
    specs: [
      { label: "1,8-Cineole Content", value: "32% – 38% in Volatile Oil" },
      { label: "Pod Size", value: "22mm – 28mm (Jumbo Tail-Cut)" },
      { label: "Drying Technology", value: "Improved Smokeless Bhattis" },
      { label: "Foreign Matter", value: "< 0.5%" }
    ],
    certifications: ["Spices Board Grade 1", "Phytosanitary Clean", "USDA Organic"],
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80",
    badge: "Top Commercial Spice"
  },
  {
    id: "himalayan-shilajit",
    name: "Purified Himalayan Shilajit Gold Grade Resin",
    category: "spices-botanicals",
    categoryLabel: "Himalayan Spices & Botanicals",
    tagline: "Mineral-rich bio-active biomass harvested from cliffs above 4,500m and purified with spring water.",
    terroir: "Dolpa & Humla High Himalayas",
    altitude: "4,500m – 5,200m",
    annualCapacity: "15 Metric Tons / Year",
    moq: "10 kg (Bulk Resin or Standardized Powder)",
    packaging: "5kg Food-Grade Stainless Tins / Heavy-Duty Sealed Jars",
    keyMetric: { label: "Fulvic Acid Assay", value: "> 62% Standardized", percent: 97 },
    specs: [
      { label: "Fulvic Acid", value: "> 62% Standardized (HPLC)" },
      { label: "Humic Acid", value: "> 14%" },
      { label: "Ionic Trace Minerals", value: "85+ Ionic Minerals" },
      { label: "Heavy Metal Screen", value: "Eurofins Lead/Mercury Passed" }
    ],
    certifications: ["Ayurvedic GMP Certified", "Heavy Metal Lab Tested", "EU/US Lab COA"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80",
    badge: "Ultra-High Purity"
  },
  {
    id: "wintergreen-essential-oil",
    name: "Steam-Distilled Pure Wintergreen Essential Oil",
    category: "spices-botanicals",
    categoryLabel: "Himalayan Spices & Botanicals",
    tagline: "Wild-harvested Gaultheria fragrantissima distillate rich in natural methyl salicylate for pain therapies.",
    terroir: "Dolakha & Sindhupalchok",
    altitude: "2,200m – 2,800m",
    annualCapacity: "25,000 Kilograms / Year",
    moq: "25 kg (UN Certified Aluminum Flacon / Drum)",
    packaging: "25kg Food/Pharma Grade Aluminum Drums",
    keyMetric: { label: "Methyl Salicylate", value: "98.5% GC/MS Pure", percent: 99 },
    specs: [
      { label: "Methyl Salicylate", value: "> 98.2% (GC/MS Pure)" },
      { label: "Refractive Index", value: "1.535 – 1.538 at 20°C" },
      { label: "Optical Rotation", value: "-0.5° to -1.5°" },
      { label: "Flash Point", value: "96°C" }
    ],
    certifications: ["100% Pure & Natural IFRA Compliant", "ISO 9001:2015", "EU Cosmetic Reg. CPNP"],
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&q=80",
    badge: "Pharma Grade"
  },

  // =========================================================================
  // 5. TEAS, COFFEE & SUPERFOODS
  // =========================================================================
  {
    id: "orthodox-white-tea",
    name: "Ilam Highland Orthodox White Needle Tea",
    category: "tea-superfoods",
    categoryLabel: "Specialty Tea & Coffee",
    tagline: "Delicate silvery unopened tea buds hand-plucked during the spring first flush at 2,150m.",
    terroir: "Ilam Single-Estate Slopes",
    altitude: "2,150m",
    annualCapacity: "20 Metric Tons / Year",
    moq: "50 kg",
    packaging: "20kg Foil-Lined Moisture-Barrier Wooden Chests",
    keyMetric: { label: "Antioxidant Polyphenols", value: "> 22% Active", percent: 91 },
    specs: [
      { label: "Flush Season", value: "Spring First Flush (March-April)" },
      { label: "Polyphenol Content", value: "> 22% Active Antioxidants" },
      { label: "Cup Character", value: "Honeysuckle, White Peach & Alpine Dew" },
      { label: "Leaf Grade", value: "Silver Tips / Imperial White" }
    ],
    certifications: ["EU Bio Certified", "USDA Organic", "JAS Japan Organic"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
    badge: "Master Reserve",
    isPopular: true
  },
  {
    id: "arabica-coffee",
    name: "Specialty Shade-Grown Arabica Green Coffee Beans",
    category: "tea-superfoods",
    categoryLabel: "Specialty Tea & Coffee",
    tagline: "Glacier-fed micro-lot specialty Arabica grown under native fruit tree canopies with exceptional acidity.",
    terroir: "Nuwakot & Lalitpur High Valleys",
    altitude: "1,400m – 1,750m",
    annualCapacity: "45 Metric Tons / Year",
    moq: "500 kg (Green Unroasted Beans)",
    packaging: "60kg GrainPro Hermetic Bags inside Jute Sacks",
    keyMetric: { label: "SCA Specialty Score", value: "86.5+ Points Cupping", percent: 87 },
    specs: [
      { label: "SCA Specialty Score", value: "86.5+ Points Cupping" },
      { label: "Processing Method", value: "Fully Washed & Natural Sun-Dried" },
      { label: "Varietal", value: "Bourbon & Typica Micro-lot" },
      { label: "Moisture Level", value: "10.5% – 11.5% Stabilized" }
    ],
    certifications: ["Rainforest Alliance Compatible", "Specialty Coffee Assoc. Certified"],
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=1200&q=80",
    badge: "SCA 86.5+ Specialty"
  },
  {
    id: "annapurna-cliff-honey",
    name: "Raw Annapurna Cliff Honey (Mad Honey)",
    category: "tea-superfoods",
    categoryLabel: "Himalayan Superfoods",
    tagline: "Rare crimson wild honey harvested from Himalayan cliff faces of Apis laboriosa with natural bio-activity.",
    terroir: "Lamjung & Annapurna Glades",
    altitude: "2,500m – 3,500m",
    annualCapacity: "12 Metric Tons / Year",
    moq: "50 kg (Bulk Drums / Sealed Jars)",
    packaging: "Food-Grade 25kg Sealed Drums or 500g Glass Jars",
    keyMetric: { label: "Bioactive Grayanotoxin", value: "Standardized Lab COA", percent: 93 },
    specs: [
      { label: "Floral Source", value: "Wild Rhododendron arboreum" },
      { label: "Grayanotoxin Level", value: "Lab Standardized (Eurofins Report)" },
      { label: "Purity State", value: "Raw Unheated / Unpasteurized" },
      { label: "Diastase Activity", value: "> 18 DN Units" }
    ],
    certifications: ["Wild Harvest Certificate", "DNA Authenticated", "Phytosanitary Approved"],
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=80",
    badge: "Rare Himalayan Jewel"
  },
  {
    id: "jumla-marsi-rice",
    name: "Jumla Marsi Red Rice & Tartary Buckwheat",
    category: "tea-superfoods",
    categoryLabel: "Himalayan Superfoods",
    tagline: "World’s highest-altitude rice and heirloom tartary buckwheat packed with rutin and slow-release energy.",
    terroir: "Jumla Valley Terroir",
    altitude: "2,600m – 3,000m",
    annualCapacity: "90 Metric Tons / Year",
    moq: "1 Metric Ton",
    packaging: "25kg Multi-Ply Poly-Lined Export Sacks",
    keyMetric: { label: "Rutin Flavonoid Assay", value: "1,500 mg / 100g", percent: 89 },
    specs: [
      { label: "Glycemic Index", value: "Low GI (54)" },
      { label: "Anthocyanin Content", value: "Rich Natural Pigmentation" },
      { label: "Rutin Concentration", value: "Tartary Buckwheat > 1,500mg/100g" },
      { label: "Irrigation", value: "Pure Glacial Meltwater" }
    ],
    certifications: ["Geographical Indication (GI) Nepal", "100% Pesticide Free"],
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=1200&q=80",
    badge: "Heritage High-Altitude"
  }
];

const CATEGORIES = [
  { id: "all", label: "All Commodities & Raw Materials", icon: Layers, count: B2B_PRODUCTS.length },
  { id: "hemp-build", label: "Industrial Hemp & Eco-Building", icon: Building2, count: 3 },
  { id: "wellness-oils", label: "Hemp Wellness & Cold-Pressed Oils", icon: Droplets, count: 3 },
  { id: "fibers-textiles", label: "Sustainable Fibers & Textiles", icon: TreePine, count: 3 },
  { id: "spices-botanicals", label: "Spices & Bio-Active Botanicals", icon: Flame, count: 4 },
  { id: "tea-superfoods", label: "Specialty Teas, Coffee & Superfoods", icon: Sparkles, count: 4 }
];

export function B2BTradeShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductForModal, setSelectedProductForModal] = useState<string | undefined>(undefined);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

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

  const toggleExpandCard = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="export-catalog" className="py-24 lg:py-32 bg-[#F9FBF8] border-t border-gf-border relative overflow-hidden">
      
      {/* Decorative Luxury Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[140px] pointer-events-none -z-0" />

      {/* =========================================================================
          1. LIVE B2B COMMODITY ASSAY & EXPORT TICKER MARQUEE
          ========================================================================= */}
      <div className="w-full bg-[#183B2B] text-white py-3 border-y border-emerald-800/40 overflow-hidden relative shadow-inner mb-14">
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
            <div key={idx} className="inline-flex items-center gap-3 text-xs font-mono font-medium tracking-wide">
              <span className="text-gf-peach font-bold">●</span>
              <span className="text-gray-100">{item}</span>
              <span className="text-emerald-400 font-bold bg-white/10 px-2 py-0.5 rounded text-[10px]">EXPORT READY</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16 relative z-10">
        
        {/* =========================================================================
            2. SECTION HEADER (High-End Luxury Editorial)
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-gray-200/80 pb-10">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-[#1B4D36] text-xs font-bold uppercase tracking-wider shadow-xs">
                <Globe2 className="w-3.5 h-3.5 text-gf-secondary" />
                Global B2B Sourcing & Export Directory
              </span>
              <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300">
                Official 2026 Raw Materials Catalog
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-[3.4rem] font-extrabold tracking-tight text-[#183B2B] leading-[1.08]">
              Standardized Organic Commodities, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D4F] via-[#386641] to-[#183B2B]">
                Industrial Hemp & Bio-Materials
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gf-text-muted leading-relaxed font-normal">
              Direct commercial access to certified Nepalese agricultural cooperatives, sustainable industrial hemp innovators (like <em>Shah Hemp Inno-Ventures</em>), and high-altitude wild botanical extractors. All consignments are backed with GC/MS purity assays, SGS inspection, and turnkey FOB/CIF Incoterms.
            </p>
          </div>

          {/* Quick Action Dock */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleOpenRfq("All Commodities Sourcing Master Quote")}
              className="gf-btn-primary text-xs sm:text-sm py-3.5 px-7 shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-gf-peach" />
              <span>Request Master Proforma & RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#trade-hub"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-white hover:bg-emerald-50 text-[#183B2B] border border-gray-300 text-xs font-bold tracking-wide shadow-xs transition-all text-center"
            >
              <span>View Air / Sea Logistics Matrix ✈️</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            3. INTERACTIVE CATEGORY TABS & SEARCH/METRICS FILTER BAR
            ========================================================================= */}
        <div className="space-y-6">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2.5 border ${
                      isActive
                        ? "bg-[#183B2B] text-white border-[#183B2B] shadow-lg scale-[1.02]"
                        : "bg-white text-gf-text hover:bg-emerald-50/80 hover:text-[#183B2B] border-gray-200 shadow-xs"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? "text-gf-peach" : "text-gf-secondary"}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
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
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search commodity, assay, terroir..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-gray-300 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-gf-secondary/20 focus:border-gf-secondary shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-gray-400 hover:text-gray-700 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer font-bold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Sourcing Guarantee Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-gray-200 shadow-sm text-xs">
            <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#F4F9F5]">
              <div className="w-9 h-9 rounded-xl bg-[#2E7D4F] text-white flex items-center justify-center shadow-sm shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#183B2B] block leading-tight">100% Assay Certified</span>
                <span className="text-[11px] text-gf-text-muted">HPLC & GC/MS Tested</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#F4F9F5]">
              <div className="w-9 h-9 rounded-xl bg-[#2E7D4F] text-white flex items-center justify-center shadow-sm shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#183B2B] block leading-tight">Flexible Bulk MOQs</span>
                <span className="text-[11px] text-gf-text-muted">From 25kg to 50MT FCL</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#F4F9F5]">
              <div className="w-9 h-9 rounded-xl bg-[#2E7D4F] text-white flex items-center justify-center shadow-sm shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#183B2B] block leading-tight">Lab Sample Parcels</span>
                <span className="text-[11px] text-gf-text-muted">DHL / FedEx Express</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#F4F9F5]">
              <div className="w-9 h-9 rounded-xl bg-[#2E7D4F] text-white flex items-center justify-center shadow-sm shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#183B2B] block leading-tight">OEM Private Label</span>
                <span className="text-[11px] text-gf-text-muted">Custom Retail Packaging</span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            4. LUXURY B2B COMMODITY CARDS (Redesigned with Potency Bars & Spec Drawers)
            ========================================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-sm space-y-4 max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-gf-secondary flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <p className="text-lg font-bold text-gf-primary">No organic products match &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-gf-text-muted leading-relaxed">
              Try searching for &quot;Hemp&quot;, &quot;Timur&quot;, &quot;Cardamom&quot;, &quot;Shilajit&quot;, &quot;Tea&quot;, &quot;Oil&quot;, or reset your filters.
            </p>
            <button
              type="button"
              onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              className="gf-btn-primary text-xs px-5 py-2.5 mt-2"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isExpanded = expandedCardId === product.id;

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white border border-gray-200/90 hover:border-emerald-500 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
                >
                  <div>
                    {/* Visual Hero Area with Overlaid Badges */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Top Glass Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                          {product.categoryLabel}
                        </span>

                        {product.badge && (
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gf-peach text-gray-950 px-3 py-1 rounded-full shadow-md font-sans">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Bottom Floating Terroir and Elevation */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white flex items-center justify-between text-xs z-10">
                        <span className="truncate font-bold drop-shadow-md text-emerald-100 flex items-center gap-1.5">
                          <span className="text-gf-peach">📍</span> {product.terroir}
                        </span>
                        <span className="font-mono text-[11px] font-bold text-white bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/15">
                          {product.altitude}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 space-y-4">
                      
                      {/* Name & Tagline */}
                      <div className="space-y-1.5">
                        <h3 className="text-xl font-extrabold text-[#183B2B] group-hover:text-[#2E7D4F] transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gf-text-muted line-clamp-2 leading-relaxed font-light">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Chemical Potency & Key Assay Progress Bar (Luxury Feature) */}
                      <div className="bg-[#F4F8F5] rounded-2xl p-3.5 border border-emerald-100 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#183B2B] flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-gf-secondary" />
                            {product.keyMetric.label}
                          </span>
                          <span className="font-mono font-extrabold text-[#2E7D4F] bg-white px-2 py-0.5 rounded-md border border-emerald-200/80 shadow-xs">
                            {product.keyMetric.value}
                          </span>
                        </div>
                        {/* Visual Potency Level */}
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-[#183B2B] h-full rounded-full transition-all duration-1000"
                            style={{ width: `${product.keyMetric.percent}%` }}
                          />
                        </div>
                      </div>

                      {/* Technical Spec Matrix */}
                      <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-inner space-y-1.5 text-xs">
                        {product.specs.slice(0, 3).map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center justify-between gap-2 border-b border-gray-100 last:border-0 pb-1 last:pb-0">
                            <span className="text-[11px] font-medium text-gf-text-muted">{spec.label}</span>
                            <span className="font-mono text-[11px] font-bold text-[#183B2B] text-right">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Logistics & Supply Capacity Grid */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                          <span className="text-[10px] uppercase font-bold text-gray-400 block">Annual Yield</span>
                          <span className="font-mono font-bold text-[#183B2B] text-[11px] truncate block">
                            {product.annualCapacity.split(" / ")[0]}
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs">
                          <span className="text-[10px] uppercase font-bold text-emerald-700 block">Minimum Order (MOQ)</span>
                          <span className="font-mono font-bold text-[#2E7D4F] text-[11px] truncate block">
                            {product.moq}
                          </span>
                        </div>
                      </div>

                      {/* Expandable Extended Specs & Packaging Details */}
                      {isExpanded && (
                        <div className="p-3 bg-amber-50/70 rounded-2xl border border-amber-200/80 text-xs space-y-2 animate-in fade-in duration-200">
                          <div className="font-bold text-amber-950 flex items-center justify-between">
                            <span>Packaging & Incoterms</span>
                            <span className="text-[10px] font-mono font-normal">FOB KTM / Sea FCL</span>
                          </div>
                          <p className="text-[11px] text-amber-900 leading-tight">
                            <strong>Standard Export Pack:</strong> {product.packaging}
                          </p>
                          <p className="text-[11px] text-amber-900 leading-tight">
                            <strong>Additional Assay:</strong> {product.specs[3]?.label}: {product.specs[3]?.value}
                          </p>
                        </div>
                      )}

                      {/* Certification Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.certifications.map((cert, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[10px] font-bold bg-emerald-50 text-[#1B4D36] border border-emerald-200/80 px-2.5 py-0.5 rounded-lg flex items-center gap-1 shadow-xs"
                          >
                            <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />
                            {cert}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-6 pt-0 space-y-2.5 border-t border-gray-100">
                    <div className="flex items-center gap-2 pt-3">
                      <button
                        type="button"
                        onClick={() => handleOpenRfq(product.name)}
                        className="gf-btn-primary flex-1 justify-center text-xs py-3 px-4 shadow-md hover:scale-[1.02] cursor-pointer"
                      >
                        <span>Request Spec & Sample</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleExpandCard(product.id)}
                        className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                        title={isExpanded ? "Collapse Specs" : "View Packaging & Logistics"}
                        aria-label="Toggle card details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOpenRfq(product.name)}
                      className="w-full text-center text-[11px] font-bold text-gf-text-muted hover:text-gf-secondary py-1 transition-colors cursor-pointer flex items-center justify-center gap-1"
                    >
                      <span>Instant FOB / CIF Proforma Calculation</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            5. INTERACTIVE 5-ITEM SOURCING SAMPLE BOX BUILDER BANNER
            ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-[#183B2B] via-[#1E4533] to-[#2E7D4F] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-emerald-600/30">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-10 top-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gf-peach text-xs font-bold uppercase tracking-wider border border-white/15 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                International Procurement Sourcing Box
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Curate Your Custom 5-Item Himalayan Sourcing & Lab Sample Kit
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100 font-light max-w-2xl leading-relaxed">
                Qualified commercial importers, brand formulators, and textile mills can request an official export presentation box featuring verified batches of industrial hemp hurd, cold-pressed seed oils, wild spices, Shilajit, and organic teas with corresponding Eurofins/SGS laboratory assays.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gf-peach" />
                  Dispatched via DHL Express within 48h
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gf-peach" />
                  Full Certificate of Analysis (COA) Included
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 items-stretch lg:items-end justify-center">
              <button
                type="button"
                onClick={() => handleOpenRfq("Custom 5-Item Sourcing & Sample Kit Box")}
                className="gf-btn-white w-full text-center justify-center text-xs sm:text-sm py-4 shadow-2xl hover:scale-105 transition-all font-bold cursor-pointer"
              >
                <span>Request Sample Kit Parcel</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleOpenRfq("2026 Complete Export Price List & Tonnage Schedule")}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold tracking-wide transition-all cursor-pointer text-center"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download 2026 Export Pricing (PDF)</span>
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
