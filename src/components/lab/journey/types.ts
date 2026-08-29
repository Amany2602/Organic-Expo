export type JourneyStageId = "soil" | "farm" | "process" | "certification" | "market";

export interface JourneyMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface JourneyStageData {
  id: JourneyStageId;
  index: number;
  number: string;
  label: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  elevation: string;
  coordinates: string;
  transformationGrammar: {
    from: string;
    action: string;
    to: string;
  };
  metrics: JourneyMetric[];
  palette: {
    bg: string;
    bgHex: string;
    accent: string;
    accentHex: string;
    badgeBorder: string;
    contourStroke: string;
    glow: string;
  };
  anchorHighlight: {
    nepal: boolean;
    soil: boolean;
    cultivation: boolean;
    refinement: boolean;
    standards: boolean;
    world: boolean;
  };
}

export const JOURNEY_STAGES: JourneyStageData[] = [
  {
    id: "soil",
    index: 0,
    number: "01",
    label: "SOIL",
    kicker: "THE LIVING FOUNDATION",
    title: "Indigenous Himalayan Terroir",
    subtitle: "Untouched Microbial Earth & Mountain Strata",
    description:
      "Where the organic cycle begins. High-altitude soils nourished by mineral-rich glacial runoffs, undisturbed humus, and ancient microbial biomes free from chemical synthetic inputs.",
    elevation: "1,200m – 3,500m",
    coordinates: "27°42′N / 85°19′E",
    transformationGrammar: {
      from: "Deep earth strata",
      action: "Organic contours pulsate & expand",
      to: "Living biological foundation",
    },
    metrics: [
      { label: "Organic Humus", value: "4.8%+", subtext: "High microbial vitality" },
      { label: "Synthetic Chemicals", value: "0.0%", subtext: "Pristine mountain soil" },
      { label: "Mineral Strata", value: "Glacial Silt", subtext: "Deep crystalline trace" },
    ],
    palette: {
      bg: "from-[#0c0907] via-[#18120d] to-[#292017]",
      bgHex: "#18120d",
      accent: "text-soil-300",
      accentHex: "#cbba9f",
      badgeBorder: "border-soil-600/40 text-soil-200 bg-soil-950/60",
      contourStroke: "#856a4f",
      glow: "rgba(133, 106, 79, 0.15)",
    },
    anchorHighlight: {
      nepal: true,
      soil: true,
      cultivation: false,
      refinement: false,
      standards: false,
      world: false,
    },
  },
  {
    id: "farm",
    index: 1,
    number: "02",
    label: "FARM",
    kicker: "MOUNTAIN POLYCULTURE",
    title: "High-Altitude Terraced Cultivation",
    subtitle: "Stepped Agro-Ecology & Indigenous Wildcrafting",
    description:
      "The organic contours elevate into stepped mountain terraces. Smallholder farming families preserve 140+ heirloom crops, wildcrafted herbs, and sacred tea gardens in harmony with the terrain.",
    elevation: "800m – 3,800m",
    coordinates: "77 Mountain Districts",
    transformationGrammar: {
      from: "Geological contours",
      action: "Contours elevate & segment into terraces",
      to: "Stepped agricultural geometry",
    },
    metrics: [
      { label: "Agro-Ecological Zones", value: "5 Zones", subtext: "Terai to High Alpine" },
      { label: "Heirloom Varieties", value: "140+", subtext: "Indigenous seed genetics" },
      { label: "Smallholder Guilds", value: "30,000+", subtext: "Mountain farming units" },
    ],
    palette: {
      bg: "from-[#040e09] via-[#081a12] to-[#102e21]",
      bgHex: "#081a12",
      accent: "text-forest-300",
      accentHex: "#82cca5",
      badgeBorder: "border-forest-600/40 text-forest-200 bg-forest-950/60",
      contourStroke: "#35835f",
      glow: "rgba(53, 131, 95, 0.18)",
    },
    anchorHighlight: {
      nepal: true,
      soil: false,
      cultivation: true,
      refinement: false,
      standards: false,
      world: false,
    },
  },
  {
    id: "process",
    index: 2,
    number: "03",
    label: "PROCESS",
    kicker: "VALUE CREATION & INTEGRITY",
    title: "Clean Artisanal & Solar Processing",
    subtitle: "Bio-Potency Retention & Traceable Refinement",
    description:
      "Terrace curves align into structural modular grids. Cold-pressing, solar dehydration, and clean vacuum packaging lock in the active phyto-nutrients and distinctive organoleptic profiles.",
    elevation: "Kathmandu & Regional Hubs",
    coordinates: "Batch Origin Tracked",
    transformationGrammar: {
      from: "Terrace curves",
      action: "Lines straighten into precision grid matrix",
      to: "Modular processing architecture",
    },
    metrics: [
      { label: "Nutrient Retention", value: "98.4%", subtext: "Solar & low-temp drying" },
      { label: "Additive Policy", value: "100% Pure", subtext: "Zero synthetic additives" },
      { label: "Batch Traceability", value: "Source-to-Lot", subtext: "Geotagged supply trail" },
    ],
    palette: {
      bg: "from-[#070d12] via-[#0d1720] to-[#172938]",
      bgHex: "#0d1720",
      accent: "text-mist-300",
      accentHex: "#a7c6df",
      badgeBorder: "border-mist-600/40 text-mist-200 bg-mist-950/60",
      contourStroke: "#4d7ea6",
      glow: "rgba(77, 126, 166, 0.18)",
    },
    anchorHighlight: {
      nepal: true,
      soil: false,
      cultivation: false,
      refinement: true,
      standards: false,
      world: false,
    },
  },
  {
    id: "certification",
    index: 3,
    number: "04",
    label: "CERTIFY",
    kicker: "AUTHORITATIVE VERIFICATION",
    title: "Organic Nepal Verified™ Protocol",
    subtitle: "Concentric Purity Standards & IFOAM Alignment",
    description:
      "Modular grid matrices coalesce into the authoritative concentric seal of trust. Multi-tier audits certify soil sanctity, chemical absence, fair farmer compensation, and international compliance.",
    elevation: "National & Global Standards",
    coordinates: "Verified Registry",
    transformationGrammar: {
      from: "Precision grid",
      action: "Grid lines contract into concentric seal",
      to: "Emblematic authentication mark",
    },
    metrics: [
      { label: "Protocol Standard", value: "IFOAM Aligned", subtext: "Equivalency benchmarking" },
      { label: "Verification Tiers", value: "3 Tiers", subtext: "Farm, Process, Export" },
      { label: "Lab Residue Screen", value: "ND (<0.01ppm)", subtext: "Non-detect pesticide screen" },
    ],
    palette: {
      bg: "from-[#1c1503] via-[#2b2005] to-[#4a3809]",
      bgHex: "#2b2005",
      accent: "text-gold-300",
      accentHex: "#eed07d",
      badgeBorder: "border-gold-600/40 text-gold-200 bg-gold-950/60",
      contourStroke: "#c9991e",
      glow: "rgba(201, 153, 30, 0.22)",
    },
    anchorHighlight: {
      nepal: true,
      soil: false,
      cultivation: false,
      refinement: false,
      standards: true,
      world: false,
    },
  },
  {
    id: "market",
    index: 4,
    number: "05",
    label: "WORLD",
    kicker: "GLOBAL COMMERCE & EXCHANGE",
    title: "Himalayan Harvest to Global Buyers",
    subtitle: "Direct B2B Trade Corridors & Sustainable Export",
    description:
      "The concentric seal projects outward into expanding trade corridors. Connecting certified Himalayan tea, specialty coffee, medicinal honey, and essential oils to ethical markets worldwide.",
    elevation: "20+ Destination Markets",
    coordinates: "KTM -> TYO / LON / BER / NYC / DXB",
    transformationGrammar: {
      from: "Central seal",
      action: "Seal rays project outward into global routes",
      to: "Expansive international trade network",
    },
    metrics: [
      { label: "Export Corridors", value: "24+ Countries", subtext: "Direct buyer partnerships" },
      { label: "Producer Premium", value: "+35% Above Spot", subtext: "Direct ethical trade yield" },
      { label: "Expo Trade Target", value: "$40M+ Pipeline", subtext: "B2B commitments 2026" },
    ],
    palette: {
      bg: "from-[#0c0907] via-[#111211] to-[#1a1b1a]",
      bgHex: "#0c0907",
      accent: "text-paper-100",
      accentHex: "#edefe7",
      badgeBorder: "border-paper-600/40 text-paper-200 bg-paper-950/60",
      contourStroke: "#e2b640",
      glow: "rgba(226, 182, 64, 0.2)",
    },
    anchorHighlight: {
      nepal: true,
      soil: false,
      cultivation: false,
      refinement: false,
      standards: false,
      world: true,
    },
  },
];
