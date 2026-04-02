"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const leftServices = [
  {
    icon: "/services/Nailart.png",
    iconAlt: "Nail art service icon",
    title: "Nail Art",
    desc: "Creative and intricate nail designs tailored to your personal style, from minimalist to bold statements.",
  },
  {
    icon: "/services/Nailrepair.png",
    iconAlt: "Nail repair service icon",
    title: "Nail Repair",
    desc: "Expert repair for broken, chipped, or damaged nails, restoring strength and beauty to your natural nails.",
  },
  {
    icon: "/services/Gelmanicure.jpg",
    iconAlt: "Gel manicure service icon",
    title: "Gel Manicure",
    desc: "Long-lasting gel polish manicure with a high-shine finish that stays chip-free for weeks.",
  },
  {
    icon: "/services/Removal.png",
    iconAlt: "Removal services icon",
    title: "Removal Services",
    desc: "Safe and gentle removal of gel, acrylic, and nail extensions without damaging your natural nails.",
  },
];

const rightServices = [
  {
    icon: "/services/Classicmanicure.png",
    iconAlt: "Classic manicure service icon",
    title: "Classic Manicure",
    desc: "Complete nail care including shaping, cuticle treatment, and your choice of premium polish.",
  },
  {
    icon: "/services/Frenchmanicure.jpg",
    iconAlt: "French manicure service icon",
    title: "French Manicure",
    desc: "Timeless and elegant French manicure with a clean white tip and natural base for a polished look.",
  },
  {
    icon: "/services/Polishchange.png",
    iconAlt: "Polish change service icon",
    title: "Polish Change",
    desc: "Quick and fresh polish change in your favourite colour, keeping your nails looking vibrant and neat.",
  },
  {
    icon: "/services/Feettoes.png",
    iconAlt: "Feet and toes treatment icon",
    title: "Feet and Toes",
    desc: "Rejuvenating foot treatments including scrubs, massage, and polish for happy, healthy feet.",
  },
];

function ServiceItem({
  icon,
  iconAlt,
  title,
  desc,
  align,
}: {
  icon: string;
  iconAlt: string;
  title: string;
  desc: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`service-card reveal flex items-start gap-3 group ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
        <Image
          src={icon}
          alt={iconAlt}
          width={26}
          height={26}
          className="w-6 h-6 object-contain"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-base text-plum-DEFAULT mb-1 tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-plum-muted leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function SpecialServices({
  onBookNow,
}: {
  onBookNow?: () => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".reveal, .reveal-scale");
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-16 md:py-24 bg-rose-blush relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-300/30 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section heading */}
        <div className="text-center mb-14 reveal">
          <h2 className="font-serif text-3xl md:text-5xl text-plum-DEFAULT tracking-tight mb-3">
            Our Special Services
          </h2>
          {/* Decorative flourish */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/40" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C4687A"
              strokeWidth="1.5"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M12 6v6l4 2" />
            </svg>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-primary/40" />
          </div>
        </div>

        {/* Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {leftServices.map((s) => (
              <ServiceItem key={s.title} {...s} align="left" />
            ))}
          </div>

          {/* Center: Product image */}
          <div className="flex justify-center items-center py-6 md:py-0 reveal-scale">
            <div className="relative">
              {/* Circular background */}
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-linear-to-br from-primary/15 via-primary/5 to-accent/10 flex items-center justify-center relative">
                {/* Decorative ring */}
                <div className="absolute inset-3 rounded-full border border-dashed border-primary/20" />

                {/* Shape background */}
                <Image
                  src="/services/Decorative.png"
                  alt="Decorative circular shape background for services section"
                  fill
                  className="object-contain p-4 opacity-20"
                />

                {/* Product image */}
                <Image
                  src="/services/bottle product.jpg"
                  alt="Nail Voyage Saloon signature nail polish bottle product"
                  width={140}
                  height={200}
                  className="relative z-10 w-32 h-44 object-contain services-center-img animate-float"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1.5 shadow-rose-md border border-rose-border whitespace-nowrap">
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                  8 Services
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            {rightServices.map((s) => (
              <ServiceItem key={s.title} {...s} align="right" />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <button
            onClick={onBookNow}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Book a Service Today
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
