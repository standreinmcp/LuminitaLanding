import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_URL || "https://lumi.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Private Interior Design Advisory | Lumi",
    template: "%s | Lumi Interior Design",
  },
  description:
    "One focused session with an architect and interior designer — before you renovate, before you commit, before mistakes become permanent. Get clarity exactly when it matters most.",
  keywords: [
    "interior design advisory",
    "interior design consultation",
    "renovation advice",
    "architect consultation",
    "interior designer",
    "home renovation planning",
    "design advisory session",
    "Luminita Campian",
    "Lisbon interior designer",
    "online design consultation",
  ],
  authors: [{ name: "Luminita Campian" }],
  creator: "Luminita Campian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Lumi Interior Design Advisory",
    title: "Private Interior Design Advisory | Lumi",
    description:
      "One focused session with an architect and interior designer — before you renovate, before you commit, before mistakes become permanent.",
    images: [
      {
        url: "/01_07_2026_Pixellab7699.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Lumi Interior Design Advisory — Bring Your Doubts, Leave With Clarity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Interior Design Advisory | Lumi",
    description:
      "One focused session with an architect and interior designer — before you renovate, before you commit, before mistakes become permanent.",
    images: ["/01_07_2026_Pixellab7699.jpg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
