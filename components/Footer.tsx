import React from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/header/art.jpg",
    alt: "Nail art gallery image showing detailed nail design",
  },
  {
    src: "/header/interior.jpg",
    alt: "Nail Voyage Saloon salon interior gallery photo",
  },
  {
    src: "/header/application.jpg",
    alt: "Nail polish application gallery image",
  },
  {
    src: "/header/extensions.jpg",
    alt: "Gel nail extensions gallery photo",
  },
  {
    src: "/header/Manicure.jpg",
    alt: "Manicure service gallery image",
  },
  {
    src: "/header/team.jpg",
    alt: "Nail Voyage Saloon Uganda team photo",
  },
];

const importantLinks = [
  { label: "Our Services", href: "/service" },
  { label: "Make Your Booking", href: "/service" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Contacts", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-purple-500 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Column 1: Gallery */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white mb-5">
            Gallery
          </h4>
          <div className="grid grid-cols-3 gap-1.5">
            {galleryImages?.map((img, i) => (
              <a
                key={i}
                href={img?.src}
                // target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden rounded-sm group"
              >
                <Image
                  src={img?.src}
                  alt={img?.alt}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Important Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white mb-5">
            Important Links
          </h4>
          <ul className="space-y-3">
            {importantLinks?.map((link) => (
              <li key={link?.label}>
                <a
                  href={link?.href}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white font-bold hover:text-white/80 transition-colors duration-200 group"
                >
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    className="text-white group-hover:translate-x-0.5 transition-transform"
                  >
                    <path
                      d="M1 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {link?.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect With Us */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white mb-5">
            Connect With Us
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href=""
              // target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/header/Google.png"
                alt="Get Nail Voyage Saloon app on Google Play Store"
                width={160}
                height={160}
                className="h-11 w-auto object-contain"
              />
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity">
              <Image
                src="/header/Apple.png"
                alt="Get Nail Voyage Saloon app on Apple App Store"
                width={160}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </a>
          </div>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/nailvoyageug/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:text-white hover:border-white transition-all duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nailvoyageug/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:text-white hover:border-white transition-all duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:text-white hover:border-white transition-all duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 4: Our Contacts */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white mb-5">
            Our Contacts
          </h4>
          <div className="space-y-4 text-sm text-white font-bold">
            <p className="text-white/90 italic font-semibold text-sm">
              Glamour At Your Doorsteps
            </p>
            <div className="flex items-start gap-2.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="mt-0.5 shrink-0 text-white"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Motiv Hub(Spring Rd)</span>
            </div>
            <div className="flex items-start gap-2.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="mt-0.5 shrink-0 text-white"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Motiv Hub — Spring Rd</span>
            </div>
            <div className="flex items-start gap-2.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="mt-0.5 shrink-0 text-white"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,12 2,6" />
              </svg>
              <a
                href="mailto:info@perfectnailsug.com"
                className="hover:text-white/80 transition-colors break-all"
              >
                nailvoyage@gmail.com
              </a>
            </div>
            <a
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors text-xs font-bold mt-1"
            >
              See All Branches
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-5 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-white">
            Copyright 2026 Nail Voyage Saloon Ug. All Rights Reserved.
          </p>
          <Image
            src="/header/payments.png"
            alt="Accepted payment methods including Visa, Mastercard and mobile money"
            width={200}
            height={20}
            className="h-6 w-auto object-contain opacity-50"
          />
        </div>
      </div>
    </footer>
  );
}
