import React from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { InteractiveLink } from "@/components/ui/InteractiveLink";
import { OrganicNepalVerified } from "@/components/ui/OrganicNepalVerified";
import { Divider } from "@/components/ui/Divider";
import { Media } from "@/components/ui/Media";
import { Grid } from "@/components/ui/Grid";
import { Cluster } from "@/components/ui/Cluster";

export const metadata = {
  title: "Design System Laboratory | Organic Expo Nepal 2026",
  description: "Visual design tokens, typography, surfaces, and UI primitives.",
};

export default function DesignSystemPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-100 text-charcoal-900 py-16 selection:bg-forest-800 selection:text-cream-50">
      <Container>
        {/* Lab Header */}
        <div className="max-w-4xl pb-12 border-b border-cream-300">
          <Eyebrow step="01" withDot variant="forest" className="mb-3">
            Design System Laboratory
          </Eyebrow>
          <Heading as="h1" size="display-large" font="display" className="mb-4 text-forest-950">
            Organic Expo Nepal 2026
          </Heading>
          <Text size="body-large" tone="secondary">
            Visual tokens, typographic hierarchy, materiality surfaces, and reusable UI
            primitives. Designed around the core thesis:{" "}
            <strong className="text-forest-950 font-semibold">PREMIUM ORGANIC AGRICULTURE + CONTEMPORARY EDITORIAL DESIGN</strong>.
          </Text>
        </div>

        {/* SECTION 1: TYPOGRAPHY HIERARCHY */}
        <div className="py-16 space-y-10 border-b border-cream-300">
          <div>
            <Eyebrow variant="leaf" className="mb-2">01 / Typographic System</Eyebrow>
            <Heading as="h2" size="h2" className="text-forest-950">Editorial Hierarchy & Scale</Heading>
          </div>

          <div className="space-y-8 bg-cream-50 p-6 sm:p-10 border border-cream-300 rounded-2xl shadow-subtle">
            <div className="space-y-2 pb-6 border-b border-cream-200">
              <span className="font-mono text-[10px] uppercase text-charcoal-500">Display XL — Cormorant Garamond</span>
              <Heading as="h2" size="display-xl" className="text-forest-950">Soil to World</Heading>
            </div>

            <div className="space-y-2 pb-6 border-b border-cream-200">
              <span className="font-mono text-[10px] uppercase text-charcoal-500">Display Large</span>
              <Heading as="h3" size="display-large" className="text-forest-950">Himalayan Agro-Ecosystem</Heading>
            </div>

            <div className="space-y-2 pb-6 border-b border-cream-200">
              <span className="font-mono text-[10px] uppercase text-charcoal-500">Heading 1</span>
              <Heading as="h3" size="h1" className="text-forest-950">Organic Nepal Verified™ Standards</Heading>
            </div>

            <div className="space-y-2 pb-6 border-b border-cream-200">
              <span className="font-mono text-[10px] uppercase text-charcoal-500">Heading 2</span>
              <Heading as="h4" size="h2" className="text-forest-950">Connecting Farmers, Buyers & Global Trade</Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase text-charcoal-500">Body Large (Plus Jakarta Sans)</span>
                <Text size="body-large" tone="secondary">
                  The flagship international platform connecting certified farmers, organic producers, and sustainable enterprises with ethical global buyers.
                </Text>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase text-charcoal-500">Body Regular & Metadata</span>
                <Text size="body" tone="secondary">
                  Rigorous traceability and ecological standards ensure authentic Himalayan origin.
                </Text>
                <Text size="metadata" tone="muted">
                  REGISTRY CODE: OEN-2026-KTM-089 // BATCH: ORGANIC-AA
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: COLOR PALETTE & MATERIALITY */}
        <div className="py-16 space-y-10 border-b border-cream-300">
          <div>
            <Eyebrow variant="forest" className="mb-2">02 / Color System</Eyebrow>
            <Heading as="h2" size="h2" className="text-forest-950">Terroir & Materiality Palette</Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Forest */}
            <div className="bg-forest-50 p-5 border border-forest-200 rounded-2xl space-y-3">
              <div className="w-full h-16 bg-forest-900 rounded-xl" />
              <div className="space-y-1 font-mono text-xs">
                <p className="font-semibold text-forest-950">Himalayan Forest</p>
                <p className="text-forest-700 text-[10px]">--color-forest-900 (#0C2016)</p>
                <p className="text-forest-600 text-[10px]">Deep evergreen</p>
              </div>
            </div>

            {/* Leaf */}
            <div className="bg-leaf-50 p-5 border border-leaf-200 rounded-2xl space-y-3">
              <div className="w-full h-16 bg-leaf-600 rounded-xl" />
              <div className="space-y-1 font-mono text-xs">
                <p className="font-semibold text-leaf-950">Botanical Leaf</p>
                <p className="text-leaf-700 text-[10px]">--color-leaf-600 (#2E8350)</p>
                <p className="text-leaf-600 text-[10px]">Organic vibrant green</p>
              </div>
            </div>

            {/* Olive */}
            <div className="bg-olive-50 p-5 border border-olive-200 rounded-2xl space-y-3">
              <div className="w-full h-16 bg-olive-700 rounded-xl" />
              <div className="space-y-1 font-mono text-xs">
                <p className="font-semibold text-olive-950">Muted Olive</p>
                <p className="text-olive-700 text-[10px]">--color-olive-700 (#475844)</p>
                <p className="text-olive-600 text-[10px]">Mountain sage & herb</p>
              </div>
            </div>

            {/* Cream */}
            <div className="bg-cream-200 p-5 border border-cream-300 rounded-2xl space-y-3">
              <div className="w-full h-16 bg-cream-50 border border-cream-300 rounded-xl" />
              <div className="space-y-1 font-mono text-xs">
                <p className="font-semibold text-charcoal-950">Warm Cream</p>
                <p className="text-charcoal-700 text-[10px]">--color-cream-100 (#FAF8F3)</p>
                <p className="text-charcoal-600 text-[10px]">Warm paper surface</p>
              </div>
            </div>

            {/* Clay */}
            <div className="bg-clay-50 p-5 border border-clay-200 rounded-2xl space-y-3">
              <div className="w-full h-16 bg-clay-600 rounded-xl" />
              <div className="space-y-1 font-mono text-xs">
                <p className="font-semibold text-clay-950">Terracotta Clay</p>
                <p className="text-clay-700 text-[10px]">--color-clay-600 (#BD593C)</p>
                <p className="text-clay-600 text-[10px]">Warm soil accent</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: BUTTONS & CONTROLS */}
        <div className="py-16 space-y-10 border-b border-cream-300">
          <div>
            <Eyebrow variant="clay" className="mb-2">03 / Interaction System</Eyebrow>
            <Heading as="h2" size="h2" className="text-forest-950">Buttons & Link Controls</Heading>
          </div>

          <div className="p-8 bg-cream-50 border border-cream-300 rounded-2xl space-y-8 shadow-subtle">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase text-charcoal-500">Organic Button Variants</span>
              <Cluster gap="normal" align="center">
                <Button variant="forest" size="lg">Forest Action</Button>
                <Button variant="leaf" size="md">Leaf Action</Button>
                <Button variant="clay" size="md">Clay Accent</Button>
                <Button variant="secondary" size="md">Secondary Paper</Button>
                <Button variant="outline" size="sm">Outline Control</Button>
                <Button variant="ghost" size="sm">Ghost Control</Button>
              </Cluster>
            </div>

            {/* Dark Surface Context */}
            <div className="p-6 bg-forest-950 rounded-2xl space-y-4">
              <span className="font-mono text-xs uppercase text-leaf-300">Dark Forest Surface Controls</span>
              <Cluster gap="normal" align="center">
                <Button variant="inverse" size="md">Inverse Button</Button>
                <Button variant="leaf" size="md">Leaf CTA</Button>
                <InteractiveLink href="#inverse" variant="inverse">
                  Inverse Editorial Link
                </InteractiveLink>
              </Cluster>
            </div>
          </div>
        </div>

        {/* SECTION 4: ORGANIC NEPAL VERIFIED™ FOUNDATION */}
        <div className="py-16 space-y-10 border-b border-cream-300">
          <div>
            <Eyebrow variant="forest" className="mb-2">04 / Certification Architecture</Eyebrow>
            <Heading as="h2" size="h2" className="text-forest-950">Organic Nepal Verified™ Component</Heading>
            <Text size="body" tone="muted" className="mt-2 max-w-2xl">
              Authoritative certification mark for exhibitor profiles, product directories, and international trade showcases.
            </Text>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase text-charcoal-500">01. Certificate Stamp Variant</span>
              <Grid cols={3} gap="md">
                <OrganicNepalVerified
                  state="certified-organic"
                  variant="stamp"
                  registryCode="NPL-ORG-2026-001"
                />
                <OrganicNepalVerified
                  state="certification-in-progress"
                  variant="stamp"
                  registryCode="NPL-AUD-2026-114"
                />
                <OrganicNepalVerified
                  state="verified-natural"
                  variant="stamp"
                  registryCode="NPL-NAT-2026-482"
                />
              </Grid>
            </div>

            <div className="space-y-4 pt-6 border-t border-cream-200">
              <span className="font-mono text-xs uppercase text-charcoal-500">02. Inline Badges & Micro Seals</span>
              <Cluster gap="normal" align="center">
                <OrganicNepalVerified state="certified-organic" variant="badge" />
                <OrganicNepalVerified state="certification-in-progress" variant="badge" />
                <OrganicNepalVerified state="verified-natural" variant="badge" />
                <Divider className="my-0 w-8" />
                <OrganicNepalVerified state="certified-organic" variant="compact" />
                <OrganicNepalVerified state="certification-in-progress" variant="compact" />
                <OrganicNepalVerified state="verified-natural" variant="compact" />
              </Cluster>
            </div>
          </div>
        </div>

        {/* SECTION 5: MEDIA & EDITORIAL CROPS */}
        <div className="py-16 space-y-10">
          <div>
            <Eyebrow variant="olive" className="mb-2">05 / Media & Organic Masking</Eyebrow>
            <Heading as="h2" size="h2" className="text-forest-950">Responsive Media & Shape Primitives</Heading>
          </div>

          <Grid cols={3} gap="lg">
            <Media
              alt="Himalayan Highland Tea Processing"
              shape="arch"
              caption="Orthodox Green Tea Cultivation"
              meta="Ilam, 2,100m"
              overlay="botanical"
            />
            <Media
              alt="Organic Wild Honey Harvesters"
              shape="curved"
              caption="Cliff Honey Ecosystem"
              meta="Annapurna Terraces"
              overlay="dark"
            />
            <Media
              alt="Medicinal Herbs & Cardamom"
              shape="leaf"
              caption="Indigenous Herbal Processing"
              meta="Sankhuwasabha"
              overlay="gradient"
            />
          </Grid>
        </div>
      </Container>
    </div>
  );
}
