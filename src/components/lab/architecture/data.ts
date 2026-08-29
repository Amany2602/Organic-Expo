export type VisualRhythm = "immersive" | "editorial" | "functional" | "trust";

export interface SectionSpec {
  id: string;
  number: string;
  name: string;
  rhythm: VisualRhythm;
  purpose: string;
  coreStatement: string;
  contentHierarchy: {
    eyebrow: string;
    headline: string;
    supportingCopy: string;
    primaryAction: string;
    secondaryAction?: string;
    metadataFields: string[];
  };
  componentsRequired: string[];
  responsiveBehavior: {
    desktop: string;
    mobile: string;
  };
  animationTransition: {
    entry: string;
    exit: string;
    scrollRole: string;
  };
  dataBindings: string[];
}

export const HOMEPAGE_SECTIONS: SectionSpec[] = [
  {
    id: "hero",
    number: "01",
    name: "Entry / Hero",
    rhythm: "immersive",
    purpose:
      "Immediately anchor the brand narrative, establish high-altitude mountain terroir authority, clarify the event premise, and present high-conviction entry actions without overwhelming the first viewport.",
    coreStatement: "FROM NEPAL'S SOIL TO THE WORLD",
    contentHierarchy: {
      eyebrow: "Himalayan Agro-Ecological Platform · Kathmandu 2026",
      headline: "From Nepal's Soil to the World",
      supportingCopy:
        "The flagship international summit uniting certified organic growers, traditional wildcrafters, and modern ethical producers with global buyers.",
      primaryAction: "Explore The Expo",
      secondaryAction: "Register Interest",
      metadataFields: [
        "Terrain Span: 60m — 8,848m",
        "Edition: Kathmandu 2026",
        "Venue: Bhrikuti Mandap Arena",
      ],
    },
    componentsRequired: [
      "HeroTerrain / HeroSpatialAnchor",
      "Eyebrow",
      "Heading",
      "Text",
      "Button",
      "Cluster",
    ],
    responsiveBehavior: {
      desktop: "Asymmetric 7/5 grid with interactive topographic contour vector on right.",
      mobile:
        "Stacked vertical layout with compact elevation badges and prioritized primary action.",
    },
    animationTransition: {
      entry: "Cinematic fade & typographic lift on initial viewport load.",
      exit: "Smooth natural scroll into Section 02 narrative anchor.",
      scrollRole: "Standard natural scroll.",
    },
    dataBindings: ["EventMetadata", "HeroAnchorConfig"],
  },
  {
    id: "journey",
    number: "02",
    name: "The Organic Journey (Narrative Backbone)",
    rhythm: "immersive",
    purpose:
      "The signature continuous spatial narrative engine. Guides the visitor through the 5-stage transformation: Soil → Farm → Process → Certification → Global Market.",
    coreStatement: "NATURE → CULTIVATION → REFINEMENT → TRUST → GLOBAL COMMERCE",
    contentHierarchy: {
      eyebrow: "5-Stage Continuum Protocol",
      headline: "The Continuous Value Chain",
      supportingCopy:
        "Traverse the journey from pristine Himalayan microbial earth to verified international trade corridors.",
      primaryAction: "Transform Stage / Explore Corridor",
      metadataFields: [
        "Soil Humus: 4.8%+",
        "Agro-Zones: 5 Distinct Zones",
        "Nutrient Retention: 98.4%",
        "Standard: IFOAM Aligned",
        "Corridors: 24+ Countries",
      ],
    },
    componentsRequired: [
      "JourneyEngine (Production Refined)",
      "JourneyCanvas",
      "JourneyNarrative",
      "JourneyStageIndicator",
    ],
    responsiveBehavior: {
      desktop: "Full 12-column interactive canvas with live elevation track and keyboard shortcuts.",
      mobile:
        "Art-directed vertical card stack with simplified vector states and touch-friendly steppers.",
    },
    animationTransition: {
      entry: "Visual state inherits from hero contour geometry.",
      exit: "Global trade routes open into Section 03 editorial breathing space.",
      scrollRole: "Client-side scroll pinned narrative sequence (reduced to essentials).",
    },
    dataBindings: ["JourneyStageData[]", "ScientificMetrics"],
  },
  {
    id: "about",
    number: "03",
    name: "What is Organic Nepal Expo?",
    rhythm: "editorial",
    purpose:
      "Provide calm, high-clarity editorial space after the immersive journey. Explains the national summit purpose, multi-stakeholder ecosystem, and broader socio-economic vision.",
    coreStatement: "IMMERSION → CLARITY: UNDERSTANDING THE MOVEMENT",
    contentHierarchy: {
      eyebrow: "National Agro-Ecological Initiative",
      headline: "A Living Bridge for Nepal's Sustainable Economy",
      supportingCopy:
        "Organic Nepal Expo 2026 is the definitive national and international platform convening producers, certifiers, buyers, policymakers, and consumers to accelerate Nepal's organic transition.",
      primaryAction: "Read The Full Mission",
      secondaryAction: "View Organizing Partners",
      metadataFields: [
        "Organized by: National Organic Secretariat",
        "Scope: 77 Districts Nationwide",
        "Focus: Regenerative & Export Growth",
      ],
    },
    componentsRequired: [
      "Section",
      "Container",
      "Heading",
      "Text",
      "EditorialMedia",
      "Grid",
      "Divider",
    ],
    responsiveBehavior: {
      desktop: "Editorial 2-column layout with documentary imagery and pillar quotes.",
      mobile: "Single column with high-contrast pull quotes and structured bullet points.",
    },
    animationTransition: {
      entry: "Clean whitespace break, subtle reveal on scroll.",
      exit: "Seamless background color step into ecosystem taxonomy.",
      scrollRole: "Natural document flow.",
    },
    dataBindings: ["AboutPillars", "SummitManifesto"],
  },
  {
    id: "ecosystem",
    number: "04",
    name: "The Ecosystem (Category Taxonomy)",
    rhythm: "functional",
    purpose:
      "Showcase the agricultural sectors and product categories represented at the Expo without resorting to repetitive generic card grids.",
    coreStatement: "VISUAL TAXONOMY OF HIMALAYAN FLORA & CULTIVATION",
    contentHierarchy: {
      eyebrow: "Sectors & Classifications",
      headline: "Curated Sectors of the Himalayan Bio-Economy",
      supportingCopy:
        "Explore certified organic sectors from high-altitude specialty tea to indigenous medicinal wildcrafting.",
      primaryAction: "Explore Category Index",
      metadataFields: [
        "01 Specialty Mountain Tea & Coffee",
        "02 Medicinal Herbs & Essential Oils",
        "03 Wildcrafted Honey & Forest Produce",
        "04 Indigenous Heirloom Grains",
        "05 Natural Textiles & Eco-Products",
      ],
    },
    componentsRequired: [
      "CategoryTaxonomyGrid",
      "TaxonomyPill",
      "Media",
      "InteractiveLink",
      "Badge",
    ],
    responsiveBehavior: {
      desktop: "Asymmetric masonry / typographic index with hover imagery previews.",
      mobile: "Horizontal scroll strip / swipeable accordion with category count chips.",
    },
    animationTransition: {
      entry: "Staggered reveal of category nodes.",
      exit: "Clean typographic border divider.",
      scrollRole: "Natural document flow with micro-hover interactions.",
    },
    dataBindings: ["ProductCategory[]", "SectorStats"],
  },
  {
    id: "business",
    number: "05",
    name: "Business / Global Market (Trade Signals)",
    rhythm: "functional",
    purpose:
      "Incorporate Direction C (Global Signal) to position Nepal as an active international trade hub. Engages B2B buyers, distributors, hotel chains, and international importers.",
    coreStatement: "NEPAL'S ORGANIC SECTOR → INTERNATIONAL VALUE CREATION",
    contentHierarchy: {
      eyebrow: "B2B Trade Platform & Export Hub",
      headline: "Direct Trade Corridors to Global Buyers",
      supportingCopy:
        "Facilitating structured sourcing agreements, export logistics matchmaking, and verified origin traceability for international trade delegations.",
      primaryAction: "Connect With Buyers & Exporters",
      secondaryAction: "Download B2B Trade Prospectus",
      metadataFields: [
        "Expected Trade Flow: $40M+ Pipeline",
        "International Delegations: 20+ Countries",
        "B2B Matchmaking Sessions: 500+ Scheduled",
      ],
    },
    componentsRequired: [
      "GlobalSignalMatrix",
      "TradeCorridorMap",
      "StatCard",
      "Button",
      "Cluster",
    ],
    responsiveBehavior: {
      desktop: "Split layout with interactive global trade corridor vectors and B2B stat cards.",
      mobile: "Linear stat stack with direct inquiry trigger.",
    },
    animationTransition: {
      entry: "Deep dark paper transition (`bg-soil-950`).",
      exit: "Concentric seal illumination into Section 06.",
      scrollRole: "Natural document flow.",
    },
    dataBindings: ["TradeMetrics", "ExportCorridorData"],
  },
  {
    id: "verified",
    number: "06",
    name: "Verified Organic (Trust & Protocol)",
    rhythm: "trust",
    purpose:
      "Establish the authoritative verification framework (Organic Nepal Verified™). Explains audit standards, lab testing, and IFOAM alignment using approved conceptual guidelines.",
    coreStatement: "WHERE TRUST BECOMES VISIBLE: AUTHENTICATION STANDARD",
    contentHierarchy: {
      eyebrow: "Integrity & Compliance Protocol",
      headline: "The Organic Nepal Verified™ Standard",
      supportingCopy:
        "A rigorous multi-tier audit protocol ensuring chemical-free soil sanctity, ethical supply chains, and international compliance.",
      primaryAction: "Verify an Inscription",
      secondaryAction: "View Protocol Guidelines",
      metadataFields: [
        "Tier 1: Certified Organic (0.0% synthetic)",
        "Tier 2: In Transition Audit",
        "Tier 3: Verified Natural Wildcrafted",
      ],
    },
    componentsRequired: [
      "OrganicNepalVerified",
      "ProtocolTierCard",
      "VerificationChecklist",
      "Badge",
    ],
    responsiveBehavior: {
      desktop: "Interactive stamp badge preview alongside the 3-tier protocol table.",
      mobile: "Stacked protocol tiers with interactive verification code simulator.",
    },
    animationTransition: {
      entry: "Gold metallic accent glow (`gold-400`).",
      exit: "Transition into audience participation.",
      scrollRole: "Natural document flow.",
    },
    dataBindings: ["VerificationTiers", "RegistrySchema"],
  },
  {
    id: "participate",
    number: "07",
    name: "Participate (Audience Pathways)",
    rhythm: "functional",
    purpose:
      "Replace generic 'Register' buttons with tailored, intention-driven conversion funnels for Exhibitors, Buyers, Attendees, and Institutional Partners.",
    coreStatement: "INTENTIONAL CONVERSION FOR EVERY STAKEHOLDER",
    contentHierarchy: {
      eyebrow: "Registration & Inscription Corridors",
      headline: "Join the 2026 Movement",
      supportingCopy:
        "Select your pathway to secure exhibition space, schedule B2B meetings, or acquire general attendee accreditation.",
      primaryAction: "Select Your Pathway",
      metadataFields: [
        "Path 01: Exhibit (Brands & Producers)",
        "Path 02: Source / Buy (B2B Buyers)",
        "Path 03: Visit (General Public & Students)",
        "Path 04: Partner (Institutions & Media)",
      ],
    },
    componentsRequired: [
      "AudiencePathwayGrid",
      "PathwayCard",
      "Button",
      "InteractiveLink",
    ],
    responsiveBehavior: {
      desktop: "4-column interactive card matrix with custom hover elevation.",
      mobile: "2x2 grid or segmented tabs with immediate action buttons.",
    },
    animationTransition: {
      entry: "Crisp architectural line separator.",
      exit: "Direct slide into event logistics.",
      scrollRole: "Natural document flow.",
    },
    dataBindings: ["AudiencePathways[]"],
  },
  {
    id: "event-info",
    number: "08",
    name: "Event Logistics & Venue",
    rhythm: "trust",
    purpose:
      "Deliver essential confirmed logistical data: Dates, venue (Bhrikuti Mandap Arena, Kathmandu), program tracks, and travel guidelines with structured placeholders for unconfirmed items.",
    coreStatement: "LOGISTICS, VENUE & SCHEDULE CLARITY",
    contentHierarchy: {
      eyebrow: "Summit Details & Schedule",
      headline: "Event Information & Logistics",
      supportingCopy:
        "Everything you need to plan your attendance, exhibition setup, and international travel to Kathmandu.",
      primaryAction: "Download Visitor Guide",
      secondaryAction: "View Arena Map",
      metadataFields: [
        "Location: Bhrikuti Mandap, Kathmandu, Nepal",
        "Agro-Summit Track: 3 Days of Keynotes & B2B",
        "Public Exhibition: 4 Days of Consumer Pavilion",
      ],
    },
    componentsRequired: [
      "EventMetaBlock",
      "VenueMapPlaceholder",
      "ScheduleTimeline",
      "Cluster",
    ],
    responsiveBehavior: {
      desktop: "Side-by-side venue layout with interactive schedule accordion.",
      mobile: "Stacked logistical cards with direct maps integration link.",
    },
    animationTransition: {
      entry: "Structured grid layout.",
      exit: "Whitespace padding into editorial news.",
      scrollRole: "Natural document flow.",
    },
    dataBindings: ["EventLogistics", "ScheduleDays[]"],
  },
  {
    id: "insights",
    number: "09",
    name: "Stories & Insights (Ecosystem Knowledge)",
    rhythm: "editorial",
    purpose:
      "Editorial reservoir for producer spotlights, Himalayan terroir research, regenerative agriculture case studies, and policy news.",
    coreStatement: "STORIES OF RESILIENCE, TERROIR & INNOVATION",
    contentHierarchy: {
      eyebrow: "Ecosystem Journal",
      headline: "Field Notes & Himalayan Insights",
      supportingCopy:
        "Documenting the farmers, scientists, and entrepreneurs transforming Nepal's organic landscape.",
      primaryAction: "Read All Articles",
      metadataFields: [
        "Story 01: High-Altitude Orthodox Tea in Ilam",
        "Story 02: Microbial Health of Mustang Glacial Soil",
        "Story 03: The Future of Jumla Organic Apple Orchards",
      ],
    },
    componentsRequired: [
      "StoryCardGrid",
      "EditorialCard",
      "Badge",
      "InteractiveLink",
    ],
    responsiveBehavior: {
      desktop: "Featured primary article + 2 secondary editorial story cards.",
      mobile: "Vertical swipeable article cards with clear reading timestamps.",
    },
    animationTransition: {
      entry: "Editorial paper texture overlay.",
      exit: "Dramatic dark transition into Final CTA.",
      scrollRole: "Natural document flow.",
    },
    dataBindings: ["ArticlePreview[]"],
  },
  {
    id: "final-cta",
    number: "10",
    name: "Final Global Call to Action",
    rhythm: "immersive",
    purpose:
      "Conclude the homepage by returning to the primary thesis (*From Nepal's Soil to the World*), transforming the initial promise into an actionable reality for all visitors.",
    coreStatement: "FROM NEPAL'S SOIL TO THE WORLD: YOUR INVITATION",
    contentHierarchy: {
      eyebrow: "Organic Expo Nepal 2026",
      headline: "Be Part of the Himalayan Organic Era",
      supportingCopy:
        "Whether you are cultivating organic crops in the Himalayas or sourcing certified goods for international markets, your place in the ecosystem starts here.",
      primaryAction: "Register for Expo 2026",
      secondaryAction: "Inquire as Exhibitor",
      metadataFields: [
        "Inaugural Edition 2026",
        "Kathmandu, Nepal",
        "Connecting Soil to World",
      ],
    },
    componentsRequired: [
      "FinalCTAContainer",
      "Button",
      "Cluster",
      "TopographicVectorWatermark",
    ],
    responsiveBehavior: {
      desktop: "Centered high-impact typography with subtle glowing trade vectors.",
      mobile: "Stacked prominent CTA buttons with high-contrast dark terroir background.",
    },
    animationTransition: {
      entry: "Deep forest/soil background (`bg-forest-950`).",
      exit: "Seamless connection to production footer.",
      scrollRole: "Natural document flow.",
    },
    dataBindings: ["FinalCTAConfig"],
  },
];

export interface UserJourneySpec {
  role: string;
  audience: string;
  primaryGoal: string;
  funnelSteps: {
    step: string;
    sectionTarget: string;
    keyAction: string;
    conversionSuccess: string;
  }[];
  criticalRequirements: string[];
}

export const USER_JOURNEYS: UserJourneySpec[] = [
  {
    role: "General Visitor / Attendee",
    audience: "Local & regional public, consumers, students, organic food enthusiasts.",
    primaryGoal: "Understand what the expo is, explore what will be showcased, and secure entry access.",
    funnelSteps: [
      {
        step: "01 Land on Hero",
        sectionTarget: "Section 01 (Hero)",
        keyAction: "Read core statement and check dates/venue.",
        conversionSuccess: "Curiosity triggered.",
      },
      {
        step: "02 Discover Sectors",
        sectionTarget: "Section 04 (Ecosystem)",
        keyAction: "Browse tea, herbs, honey, and natural product categories.",
        conversionSuccess: "Identified personal areas of interest.",
      },
      {
        step: "03 Check Logistics",
        sectionTarget: "Section 08 (Event Info)",
        keyAction: "Confirm Bhrikuti Mandap venue details and opening hours.",
        conversionSuccess: "Event added to calendar.",
      },
      {
        step: "04 Register",
        sectionTarget: "Section 07 (Participate: Visit)",
        keyAction: "Submit simple visitor registration pass request.",
        conversionSuccess: "Visitor badge/confirmation QR generated.",
      },
    ],
    criticalRequirements: [
      "Zero friction visitor pass request",
      "Clear timetable of public vs. B2B days",
      "Mobile-friendly map and directions",
    ],
  },
  {
    role: "Exhibitor / Organic Producer",
    audience: "Certified organic farmers, wildcrafting cooperatives, tea estates, processors, exporters.",
    primaryGoal: "Evaluate trade ROI, verify eligibility, understand booth packages, and apply for space.",
    funnelSteps: [
      {
        step: "01 Land & Validate",
        sectionTarget: "Section 01 (Hero)",
        keyAction: "Identify B2B buyer presence and global platform scale.",
        conversionSuccess: "Recognized as commercial export platform.",
      },
      {
        step: "02 Explore Value Chain",
        sectionTarget: "Section 02 (Journey) & 05 (Business)",
        keyAction: "See international buyer corridors and trade targets.",
        conversionSuccess: "Commercial value proposition proven.",
      },
      {
        step: "03 Review Verification",
        sectionTarget: "Section 06 (Verified Organic)",
        keyAction: "Check Organic Nepal Verified™ protocol and audit criteria.",
        conversionSuccess: "Product eligibility confirmed.",
      },
      {
        step: "04 Inquire / Apply",
        sectionTarget: "Section 07 (Participate: Exhibit)",
        keyAction: "Submit exhibitor space application and company profile.",
        conversionSuccess: "Exhibitor lead generated for sales team.",
      },
    ],
    criticalRequirements: [
      "Clear stall/pavilion tier descriptions",
      "Direct link to verification criteria",
      "B2B matchmaking buyer guarantee numbers",
    ],
  },
  {
    role: "Trade Buyer / Importer",
    audience: "International importers, supermarket buyers, organic store chains, hotel procurement.",
    primaryGoal: "Discover verified authentic suppliers, verify certifications, and book B2B sourcing sessions.",
    funnelSteps: [
      {
        step: "01 Direct B2B Hook",
        sectionTarget: "Section 05 (Global Signal / Business)",
        keyAction: "Review export commodities (tea, coffee, herbs, honey) and volume capacities.",
        conversionSuccess: "Himalayan supply viability verified.",
      },
      {
        step: "02 Trust Audit",
        sectionTarget: "Section 06 (Verified Organic)",
        keyAction: "Confirm IFOAM equivalency and lab pesticide screen standards.",
        conversionSuccess: "Compliance risk cleared.",
      },
      {
        step: "03 Product Discovery",
        sectionTarget: "Section 04 (Ecosystem)",
        keyAction: "Filter verified producer lots by region and certification.",
        conversionSuccess: "Shortlisted 5+ producer targets.",
      },
      {
        step: "04 Schedule Matchmaking",
        sectionTarget: "Section 07 (Participate: Source)",
        keyAction: "Request formal B2B buyer pass and pre-scheduled seller meetings.",
        conversionSuccess: "Buyer matchmaking profile activated.",
      },
    ],
    criticalRequirements: [
      "Prominent IFOAM & international certification details",
      "Volume and batch traceability metrics",
      "Dedicated concierge registration channel",
    ],
  },
  {
    role: "International Delegate / Media",
    audience: "Foreign trade attachés, organic agriculture researchers, journalists, development partners.",
    primaryGoal: "Understand Nepal's macroeconomic agro-ecology policy and access official press materials.",
    funnelSteps: [
      {
        step: "01 Macro Narrative",
        sectionTarget: "Section 01 (Hero) & 03 (What is Expo)",
        keyAction: "Review national vision, 77-district scope, and policy goals.",
        conversionSuccess: "Understood strategic national significance.",
      },
      {
        step: "02 Read Journal",
        sectionTarget: "Section 09 (Insights)",
        keyAction: "Read field research on Himalayan soil and terroir studies.",
        conversionSuccess: "Academic / journalistic credibility established.",
      },
      {
        step: "03 Partner Inscription",
        sectionTarget: "Section 07 (Participate: Partner)",
        keyAction: "Request institutional delegation pack or press accreditation.",
        conversionSuccess: "Partnership liaison established.",
      },
    ],
    criticalRequirements: [
      "Official Secretariat contact points",
      "Downloadable high-res press assets and fact sheets",
      "Visa and international travel guidance",
    ],
  },
];

export interface NavigationModelSpec {
  desktopStates: {
    initial: string;
    scrolled: string;
    transition: string;
  };
  destinations: {
    label: string;
    href: string;
    description: string;
    category: "primary" | "secondary" | "action";
  }[];
  mobileStrategy: {
    approach: string;
    trigger: string;
    drawerContent: string;
    touchOptimizations: string[];
  };
  accessibility: {
    keyboard: string;
    landmarks: string;
    focusVisible: string;
  };
}

export const NAVIGATION_MODEL: NavigationModelSpec = {
  desktopStates: {
    initial: "Transparent background with thin border, integrated into Hero aesthetic.",
    scrolled: "Glassmorphic blur (`bg-soil-50/90` or `bg-soil-950/90`) with elevated shadow and condensed padding.",
    transition: "Smooth 300ms transition with no layout shift.",
  },
  destinations: [
    { label: "The Expo", href: "#about", description: "Summit purpose, mission and venue overview", category: "primary" },
    { label: "The Journey", href: "#journey", description: "5-stage continuous value transformation engine", category: "primary" },
    { label: "Ecosystem", href: "#ecosystem", description: "Categories: tea, coffee, herbs, honey & grains", category: "primary" },
    { label: "Business Hub", href: "#business", description: "B2B export corridors, buyers & trade matchmaking", category: "primary" },
    { label: "Verified™", href: "#verified", description: "Organic Nepal Verified™ standard & protocol", category: "primary" },
    { label: "Insights", href: "#insights", description: "Field notes, terroir research & producer stories", category: "secondary" },
    { label: "Participate", href: "#participate", description: "Register, exhibit, buy or partner", category: "action" },
  ],
  mobileStrategy: {
    approach: "Full-screen editorial command sheet with segmented audience filters rather than a generic small hamburger drawer.",
    trigger: "Minimal pill trigger in top-right with clear label [ MENU ].",
    drawerContent: "Primary navigation items grouped by audience intention + fast language switcher + quick WhatsApp/Secretariat contact.",
    touchOptimizations: [
      "Minimum 48px tap targets across all interactive links",
      "Swipe-down to dismiss gesture support",
      "Thumb-friendly bottom-anchored primary action bar",
    ],
  },
  accessibility: {
    keyboard: "Tab/Shift+Tab cycles through links cleanly; Escape key closes mobile sheet; Enter/Space activates triggers.",
    landmarks: "<header>, <nav aria-label='Main Navigation'>, <main>, <footer role='contentinfo'>.",
    focusVisible: "High-contrast 2px ring with 3px offset adhering to design token `--color-forest-600`.",
  },
};

export interface TechnicalBlueprintSpec {
  performanceArchitecture: {
    ssrScope: string[];
    clientIslandScope: string[];
    budgets: {
      initialJsGzip: string;
      maxLcp: string;
      maxCls: string;
      targetInp: string;
    };
    imageStrategy: string[];
  };
  progressive3DMatrix: {
    layer: string;
    title: string;
    technology: string;
    status: "Implemented" | "Next Phase" | "Future Evaluation";
    rationale: string;
  }[];
  animationStrategy: {
    philosophy: string;
    rules: string[];
    reducedMotionFallback: string;
  };
}

export const TECHNICAL_BLUEPRINT: TechnicalBlueprintSpec = {
  performanceArchitecture: {
    ssrScope: [
      "Section 01 (Hero static markup)",
      "Section 03 (About & Manifesto)",
      "Section 04 (Ecosystem taxonomy)",
      "Section 06 (Verified Organic standards)",
      "Section 07 (Audience participation pathways)",
      "Section 08 (Event logistics & schedule)",
      "Section 09 (Editorial stories)",
      "Section 10 (Final CTA) & Footer",
    ],
    clientIslandScope: [
      "Section 02: Journey Engine (Dynamic scroll & vector morphing)",
      "Navigation sticky scroll observer & mobile drawer",
      "Interactive category filters & registry search simulator",
    ],
    budgets: {
      initialJsGzip: "< 75 KB gzipped initial bundle",
      maxLcp: "< 1.4s on 4G mobile",
      maxCls: "0.00 (Zero layout shift)",
      targetInp: "< 50ms responsive latency",
    },
    imageStrategy: [
      "Next.js optimized responsive WebP / AVIF formats",
      "Explicit aspect-ratio containers to prevent layout shift",
      "Native lazy-loading for all media below Section 02",
    ],
  },
  progressive3DMatrix: [
    {
      layer: "Layer 1",
      title: "SVG / CSS Topological Depth",
      technology: "Pure SVG paths, layered DOM masks, CSS gradients & CSS variables.",
      status: "Implemented",
      rationale: "Delivers 90% of spatial impact at 0kb additional runtime cost. Works seamlessly across all devices.",
    },
    {
      layer: "Layer 2",
      title: "Controlled Parallax & Spatial Response",
      technology: "Passive mousemove / device-tilt matrix transforms.",
      status: "Implemented",
      rationale: "Adds subtle living depth for desktop viewers without compromising scroll performance.",
    },
    {
      layer: "Layer 3",
      title: "Selective 3D WebGL (Trust Stamp & Globe Nexus)",
      technology: "Isolated canvas island targeting Stage 04 Certification Seal & Stage 05 Global Trade Arcs.",
      status: "Next Phase",
      rationale: "The only point where real 3D provides meaningful value: tactile material rendering of the physical stamp and glowing orbital trade lines.",
    },
    {
      layer: "Layer 4",
      title: "Full Volumetric Digital Twin",
      technology: "Complete 3D terrain environment with Three.js / WebGPU.",
      status: "Future Evaluation",
      rationale: "Deferred until post-launch; evaluated only if required for high-end exhibition floor kiosk displays.",
    },
  ],
  animationStrategy: {
    philosophy: "Motion must serve narrative clarity and spatial continuity. Never animate merely for decoration.",
    rules: [
      "Immersive sections (Hero, Journey, Final CTA) use continuous spatial transitions.",
      "Editorial and functional sections (About, Ecosystem, Logistics) use quiet, confident static typography with clean scroll entries.",
      "No animation should delay user readability or block interactive buttons.",
      "Zero continuous RAF loops when offscreen (use IntersectionObserver).",
    ],
    reducedMotionFallback:
      "When `prefers-reduced-motion: reduce` is active, all dynamic rotations and multi-step morphs are replaced by high-contrast static state layouts with immediate tab switches.",
  },
};
