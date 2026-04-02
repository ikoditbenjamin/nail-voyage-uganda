// app/about-us/page.tsx
// ─── SERVER COMPONENT — can export metadata ───────────────────────────────────
// This file stays server-side so Next.js can read the metadata at build time.
// All the interactive / animation code lives in AboutPageClient below.

import type { Metadata } from "next";
import AboutPageClient from "./Aboutpageclient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Us | Nail Voyage Uganda",
  description:
    "Learn about Nail Voyage Uganda — Kampala's premier nail salon since 2019. Meet our expert nail technicians at Motiv Hub, Spring Road and discover our story of passion and artistry.",
  keywords: [
    "about Nail Voyage Uganda",
    "nail salon Kampala story",
    "nail technician Uganda",
    "best nail salon Kampala",
    "Motiv Hub Spring Road nail salon",
    "Kampala beauty salon",
    "nail artistry Uganda",
  ],
  alternates: {
    canonical: "https://nailvoyageug.com/about-us",
  },
  openGraph: {
    title: "About Nail Voyage Uganda | Our Story & Team",
    description:
      "5 years of crafting beautiful nails in Kampala. Discover the team, values and vision behind Nail Voyage Uganda at Motiv Hub, Spring Road.",
    url: "https://nailvoyageug.com/about-us",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nail Voyage Uganda salon team at Motiv Hub Kampala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nail Voyage Uganda | Our Story & Team",
    description:
      "5 years of crafting beautiful nails in Kampala. Meet our passionate team of nail technicians.",
    images: ["/og-image.jpg"],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return <AboutPageClient />;
}
