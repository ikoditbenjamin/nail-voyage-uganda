// app/team/page.tsx
// ─── SERVER COMPONENT — exports metadata, renders client component ────────────

import type { Metadata } from "next";
import TeamPageClient from "./Teampageclients";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Our Team | Nail Voyage Uganda",
  description:
    "Meet the expert nail technicians at Nail Voyage Uganda — Aisha Nakato, Grace Namukasa, and Diana Akello. Certified professionals delivering premium nail care at Motiv Hub, Spring Road, Kampala.",
  keywords: [
    "nail technician Kampala",
    "Nail Voyage team Uganda",
    "Aisha Nakato nail technician",
    "Grace Namukasa nail art specialist",
    "Diana Akello manicure pedicure",
    "nail artist Uganda",
    "certified nail technician Kampala",
    "best nail technician Uganda",
    "nail salon staff Kampala",
    "gel nail technician Uganda",
  ],
  alternates: {
    canonical: "https://nailvoyageug.com/team",
  },
  openGraph: {
    title: "Meet Our Team | Nail Voyage Uganda",
    description:
      "Certified, passionate nail technicians ready to make your nails shine. Book with Aisha, Grace or Diana at Nail Voyage Uganda, Motiv Hub, Spring Road Kampala.",
    url: "https://nailvoyageug.com/team",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nail Voyage Uganda nail technicians — Aisha Nakato, Grace Namukasa, Diana Akello",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | Nail Voyage Uganda",
    description:
      "Meet Aisha, Grace and Diana — certified nail technicians at Nail Voyage Uganda, Motiv Hub Kampala.",
    images: ["/og-image.jpg"],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TeamPage() {
  return <TeamPageClient />;
}
