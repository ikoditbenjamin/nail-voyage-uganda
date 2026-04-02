"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BookingModal from "@/components/BookingModal";

const services = [
  {
    name: "Nail Repair (Each)",
    price: "5,000/=",
    image: "/pricing/close-up.jpg",
    alt: "Nail repair service showing repaired nail close-up",
    tag: "Most Popular",
    color: "#FAE8E8",
  },
  {
    name: "Gel Builder Refill",
    price: "50,000/=",
    image: "/pricing/gelnail.jpg",
    alt: "Gel builder refill service showing gel nail application",
    tag: "Premium",
    color: "#FFF0EE",
  },
  {
    name: "Stick-Ons / Regular Polish",
    price: "30,000/=",
    image: "/pricing/colorful.jpg",
    alt: "Stick-on and regular polish nail service showing colorful nail designs",
    tag: "Classic",
    color: "#FDF6F0",
  },
];

export default function PricingCards({
  onBookNow,
}: {
  onBookNow?: () => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".reveal");
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 },
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <>
      <section
        className="py-16 md:py-20 bg-white relative overflow-hidden"
        ref={sectionRef}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section header */}
          <div className="text-center mb-12 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
              Our Prices
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-plum-DEFAULT tracking-tight">
              Services &amp; Pricing
            </h2>
            <div className="w-12 h-0.5 bg-purple-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services?.map((service) => (
              <div
                key={service?.name}
                className="pricing-card reveal rounded-2xl overflow-hidden border border-rose-border group cursor-pointer"
                style={{ background: service?.color }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <Image
                    src={service?.image}
                    alt={service?.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center img-zoom"
                  />
                  {/* Tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
                    {service?.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="font-serif text-lg text-plum-DEFAULT mb-1 tracking-tight">
                    {service?.name}
                  </h3>
                  <div className="flex items-end justify-between mt-3">
                    <div>
                      <span className="text-xs text-plum-muted uppercase tracking-wider">
                        Starts from
                      </span>
                      <div className="text-2xl font-serif font-medium text-purple-600 mt-0.5">
                        UGX {service?.price}
                      </div>
                    </div>
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 text-white text-xs font-semibold uppercase tracking-wide rounded-full hover:bg-purple-700 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Book
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="group-hover:translate-x-0.5 transition-transform"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all CTA */}
          <div className="text-center mt-10 reveal">
            <a
              href="/service"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 border-b border-purple-300 pb-0.5 hover:border-purple-600 transition-colors duration-200"
            >
              View All Services &amp; Prices
              <svg
                width="14"
                height="14"
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
      </section>

      {/* Booking Modal — opens when any Book button is clicked */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
