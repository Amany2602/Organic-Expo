# Nepal Organic Exposition 2026

[![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

An enterprise-grade B2B trade exhibition and sourcing platform built for the **1st National Edition of the Nepal Organic Exposition (2026)** at Bhrikuti Mandap, Kathmandu. 

The application is engineered to connect certified Himalayan organic growers, single-estate tea producers, herbal distillers, and agricultural cooperatives with international commercial buyers, importers, and sustainable agribusiness partners worldwide.

---

## 🌿 Key Features & Architectural Highlights

### 1. Dual-Funnel B2B Conversion Engine
* **For Himalayan Producers & Cooperatives**: Turnkey 3-tier stall reservation engine (Standard 9m² Shell Scheme, Prime Corner Booth, Anchor Island Pavilion) with booth amenities and registration workflows.
* **For International Trade Buyers & Importers**: Direct B2B Matchmaking portal to pre-schedule bilateral trade meetings, participate in specialty tea/coffee cupping labs, and access export compliance desks.

### 2. Commodity Pavilions & Asymmetric Bento Grid
* **Pavilion 01**: Highland Orthodox Tea & Specialty Arabica Coffee (Cupping Labs & Single-Estate Lots)
* **Pavilion 02**: Medicinal Himalayan Herbs & Steam-Distilled Essential Oils
* **Pavilion 03**: Himalayan Superfoods & Heritage Grains (Jumla Beans, Buckwheat, Millet, Raw Forest Honey)
* **Pavilion 04**: AgriTech Innovations, Bio-Fertilizers & International Certification Auditing

### 3. Modern Design System & Token Architecture
* **Typography**: Clean, geometric typography powered by `Inter Tight` with fluid clamp scaling (`clamp()`) across mobile, tablet, and desktop viewports.
* **Palette**: Tailored organic agro-futurism color tokens featuring Deep Forest Green (`#2F5138`), Vibrant Emerald (`#2E7D4F`), Dark Pine Charcoal (`#273C30`), Pale Mint (`#EAF4EC`), and Carbon Dark (`#1A1D1F`).
* **Micro-Interactions**: Smooth hover translations, dynamic highlight headers, and card glow borders.

### 4. Accessibility & Core Web Vitals Optimization
* Strict WCAG AAA compliant text contrast across all light and dark card surfaces.
* Zero layout shifts (CLS = 0) through responsive image aspect ratios and Next.js font optimization.
* Static Site Generation (SSG) with optimized build times under 1 second.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router + Turbopack) | Server Components, SSG, high-performance rendering |
| **UI Library** | React 19 | Component lifecycle and interactive UI modules |
| **Language** | TypeScript 5 | Strict static typing and end-to-end type safety |
| **Styling** | Tailwind CSS v4 + PostCSS | Tokenized design system and utility classes |
| **Icons** | Lucide React | Lightweight, accessible SVG iconography |
| **Typography** | Next Font (`Inter Tight`) | Self-hosted zero-layout-shift Google Fonts |

---

## 📂 Project Structure

```text
├── public/                     # Static assets and media files
├── src/
│   ├── app/
│   │   ├── globals.css         # Design system tokens, color scales & component utilities
│   │   ├── layout.tsx          # Root layout, metadata & Inter Tight font definition
│   │   └── page.tsx            # Main exposition landing page assembly
│   ├── components/
│   │   ├── hero/
│   │   │   ├── ProductionHero.tsx   # Hero canvas with dynamic highlight & 3-photo mosaic
│   │   │   └── EditorialIntro.tsx   # About section with 7-province experience badge
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Sticky navigation with hover underline & hotline
│   │   │   ├── TopBar.tsx           # Event dates, venue & secretariat utility bar
│   │   │   └── Footer.tsx           # 4-column corporate footer
│   │   ├── sections/
│   │   │   ├── PavilionsGrid.tsx         # 4-Card Asymmetric Bento commodity pavilions
│   │   │   ├── ValuePillars.tsx          # 2x2 Why Attend sourcing advantages (01–04)
│   │   │   ├── CorePrinciples.tsx        # 4-Block stats banner & organic principles
│   │   │   ├── ProcessTimeline.tsx       # 4-Step linear trade & sourcing workflow
│   │   │   ├── ExhibitorShowcase.tsx     # Featured Himalayan producer cards
│   │   │   ├── PricingSection.tsx        # 3-Tier stall packages & pricing engine
│   │   │   ├── TestimonialsSpeakers.tsx  # Verified international buyer reviews
│   │   │   ├── InsightsGrid.tsx          # Trade compliance & export market reports
│   │   │   ├── FaqSection.tsx            # Interactive logistics accordion
│   │   │   └── LeadCtaSection.tsx        # Full-width CTA banner & Secretariat inquiry form
│   │   └── ui/                           # Reusable atomic UI primitives
│   └── lib/
│       └── utils.ts            # Classnames merge utility (clsx + twMerge)
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript configuration
└── .gitignore                  # Git exclusion rules
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v18.18.0 or later (Recommended: v20 LTS or v22)
* **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Amany2602/Organic-Expo.git
   cd Organic-Expo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Production Build

To validate type checks and generate the optimized production bundle:

```bash
npm run build
npm run start
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
