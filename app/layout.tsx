import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Site-wide SEO metadata ───────────────────────────────────────────────────
export const metadata: Metadata = {
  // Title template — each page sets its own; "%s" becomes the page title
  title: {
    default: "Nail Voyage Uganda | Premium Nail Salon in Kampala",
    template: "%s | Nail Voyage Uganda",
  },
  description:
    "Nail Voyage Uganda is Kampala's top nail salon, located at Motiv Hub, Spring Road. Offering gel manicures, nail art, pedicures, classic manicures, french manicures and more. Book online today.",

  keywords: [
    "nail salon Kampala",
    "nail salon Uganda",
    "manicure Kampala",
    "pedicure Kampala",
    "gel nails Kampala",
    "nail art Uganda",
    "Nail Voyage Uganda",
    "Motiv Hub Spring Road",
    "best nail salon Uganda",
    "nail technician Kampala",
    "gel manicure Kampala",
    "french manicure Uganda",
    "nail repair Kampala",
    "luxury nail care Uganda",
  ],

  // ── Update this to your live domain when you deploy ───────────────────────
  metadataBase: new URL("https://nailvoyageug.com"),

  authors: [{ name: "Nail Voyage Uganda", url: "https://nailvoyageug.com" }],
  creator: "Nail Voyage Uganda",
  publisher: "Nail Voyage Uganda",
  applicationName: "Nail Voyage Uganda",
  category: "Beauty & Wellness",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph — controls WhatsApp, Facebook & LinkedIn link previews ─────
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://nailvoyageug.com",
    siteName: "Nail Voyage Uganda",
    title: "Nail Voyage Uganda | Premium Nail Salon in Kampala",
    description:
      "Kampala's top nail salon at Motiv Hub, Spring Road. Gel manicures, nail art, pedicures and more. Book your appointment today.",
    images: [
      {
        // Add a 1200×630 salon photo at public/og-image.jpg
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nail Voyage Uganda — Premium Nail Salon in Kampala",
      },
    ],
  },

  // ── Twitter / X card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Nail Voyage Uganda | Premium Nail Salon in Kampala",
    description:
      "Kampala's top nail salon. Gel manicures, nail art, pedicures and more at Motiv Hub, Spring Road.",
    images: ["/og-image.jpg"],
    creator: "@nailvoyageug",
  },

  alternates: {
    canonical: "https://nailvoyageug.com",
  },

  // ── Uncomment and add your Google Search Console code when ready ───────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  // },
};

// ── Viewport — sets theme colour to your purple brand colour ──────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c3aed",
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ── JSON-LD Structured Data ──────────────────────────────────────
            Tells Google you're a BeautySalon with address, hours, phone.
            Can trigger rich results: map pins, opening hours in search.   */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Nail Voyage Uganda",
              description:
                "Premium nail salon in Kampala, Uganda offering gel manicures, nail art, pedicures, and more.",
              url: "https://nailvoyageug.com",
              telephone: "+256700485551",
              email: "nailvoyage@gmail.com",
              image: "https://nailvoyageug.com/og-image.jpg",
              priceRange: "UGX 5,000 – UGX 50,000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Spring Road, Motiv Hub",
                addressLocality: "Kampala",
                addressCountry: "UG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 0.3136,
                longitude: 32.582,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "11:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/nailvoyageug",
                "https://www.instagram.com/nailvoyageug",
              ],
              hasMap:
                "https://maps.google.com/?q=Motiv+Hub+Spring+Road+Kampala",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
