// app/service/page.tsx
// ─── SERVER COMPONENT — exports metadata, renders client component ────────────

import type { Metadata } from "next";
import ServicePageClient from "./Servicepageclients";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Our Services & Prices | Nail Voyage Uganda",
  description:
    "Explore all nail services at Nail Voyage Uganda — gel manicures, nail art, classic manicures, French manicures, pedicures, nail repair and removal. Prices from UGX 5,000 in Kampala at Motiv Hub, Spring Road.",
  keywords: [
    "nail services Kampala",
    "gel manicure Uganda price",
    "nail art Kampala",
    "pedicure Kampala price",
    "french manicure Uganda",
    "nail repair Kampala",
    "nail salon prices Uganda",
    "Nail Voyage services",
    "classic manicure Kampala",
    "nail polish change Uganda",
    "gel nails Kampala price",
    "nail removal Kampala",
    "feet and toes pedicure Uganda",
  ],
  alternates: {
    canonical: "https://nailvoyageug.com/service",
  },
  openGraph: {
    title: "Nail Services & Prices | Nail Voyage Uganda",
    description:
      "Gel manicures, nail art, pedicures, polish changes and more. 8 signature services starting from UGX 5,000 at Nail Voyage Uganda, Motiv Hub Kampala.",
    url: "https://nailvoyageug.com/service",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nail Voyage Uganda nail services — gel manicure, nail art, pedicure in Kampala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Services & Prices | Nail Voyage Uganda",
    description:
      "8 signature nail services from UGX 5,000 at Nail Voyage Uganda, Motiv Hub, Spring Road Kampala.",
    images: ["/og-image.jpg"],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicePage() {
  return <ServicePageClient />;
}
