// app/contact-us/page.tsx
// ─── SERVER COMPONENT — exports metadata, renders client component ────────────

import type { Metadata } from "next";
import ContactPageClient from "./Contactpageclients";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Contact Us | Nail Voyage Uganda",
  description:
    "Get in touch with Nail Voyage Uganda. Visit us at Motiv Hub, Spring Road Kampala, call +256 700 485 551, or WhatsApp us. Open Monday–Saturday 9am–7pm, Sunday 11am–5pm.",
  keywords: [
    "contact Nail Voyage Uganda",
    "nail salon Kampala location",
    "Motiv Hub Spring Road Kampala",
    "Nail Voyage phone number",
    "book nail appointment Kampala",
    "nail salon near me Kampala",
    "nail salon Uganda contact",
    "WhatsApp nail salon Kampala",
  ],
  alternates: {
    canonical: "https://nailvoyageug.com/contact-us",
  },
  openGraph: {
    title: "Contact Nail Voyage Uganda | Book or Get Directions",
    description:
      "Reach us at Motiv Hub, Spring Road Kampala. Call, WhatsApp or fill our contact form. Open Mon–Sat 9am–7pm. We reply within 24 hours.",
    url: "https://nailvoyageug.com/contact-us",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nail Voyage Uganda — Contact us at Motiv Hub Spring Road Kampala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nail Voyage Uganda | Book or Get Directions",
    description:
      "Motiv Hub, Spring Road Kampala. Call +256 700 485 551 or WhatsApp us. Mon–Sat 9am–7pm.",
    images: ["/og-image.jpg"],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return <ContactPageClient />;
}
