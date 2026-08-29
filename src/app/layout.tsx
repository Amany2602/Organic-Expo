import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0C2016",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://organicexponepal.com"),
  title: {
    default: "Organic Expo Nepal 2026 | From Nepal's Soil to the World",
    template: "%s | Organic Expo Nepal 2026",
  },
  description:
    "The premier international gateway and exhibition connecting Nepal's certified organic agriculture, high-altitude terroir, and sustainable innovators directly with global markets, buyers, and investors.",
  keywords: [
    "Organic Expo Nepal 2026",
    "Nepal Organic Agriculture",
    "Himalayan Organic Products",
    "Organic Nepal Verified",
    "Kathmandu Expo 2026",
    "High Altitude Organic Tea",
    "Himalayan Herbs & Essential Oils",
    "B2B Organic Nepal Trade",
  ],
  authors: [{ name: "Organic Expo Nepal Secretariat" }],
  creator: "Organic Expo Nepal",
  publisher: "Organic Expo Nepal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://organicexponepal.com",
    siteName: "Organic Expo Nepal 2026",
    title: "Organic Expo Nepal 2026 | From Nepal's Soil to the World",
    description:
      "Nepal's flagship international exhibition and trade summit for certified organic, natural, and sustainable products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Organic Expo Nepal 2026 - From Nepal's Soil to the World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Expo Nepal 2026",
    description: "From Nepal's Soil to the World — Flagship Organic Trade & Ecosystem Platform",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable}`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-white text-gf-text selection:bg-gf-primary selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
