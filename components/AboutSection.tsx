"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
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
      { threshold: 0.1 },
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      className="py-16 md:py-24 bg-rose-cream overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with circular badge */}
          <div className="relative flex items-center justify-center reveal-scale">
            {/* Decorative ring — purple dashed */}
            <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-dashed border-purple-300 transition-colors duration-500 hover:border-purple-500" />

            {/* Main image in oval */}
            <div className="relative w-60 h-72 md:w-72 md:h-88 rounded-[50%] overflow-hidden border-4 border-white shadow-rose-lg z-10">
              <Image
                src="/nail technician.png"
                alt="Nail Voyage Saloon Uganda professional nail technician performing manicure service"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>

            {/* Circular SVG badge — purple ring */}
            <div className="absolute -bottom-4 -right-2 md:right-4 w-28 h-28 z-20 transition-transform duration-300 hover:scale-105">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-rotate-text"
              >
                <defs>
                  <path
                    id="circle-path"
                    d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="white"
                  stroke="#9333ea"
                  strokeWidth="2"
                />
                <text className="circular-text-path" fill="#9333ea">
                  <textPath href="#circle-path" startOffset="0%">
                    TOP NAILS SALON UGANDA • TOP NAILS •
                  </textPath>
                </text>
              </svg>
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/nail polish icon.png"
                  alt="Nail Voyage Saloon brand nail polish icon"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -top-4 -left-2 md:left-0 z-20 bg-white rounded-2xl shadow-rose-md px-4 py-3 border border-rose-border">
              <div className="font-serif text-2xl text-purple-600 font-medium">
                5+
              </div>
              <div className="text-xs text-plum-muted uppercase tracking-wider">
                Years Experience
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                <span className="w-8 h-px bg-accent" />
                Experience Nail Voyage Saloon
                <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] rounded-full">
                  5 YEARS
                </span>
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-plum-DEFAULT tracking-tight leading-tight mb-5">
                Uganda&apos;s most <br />
                <span className="italic text-primary">loved nail studio.</span>
              </h2>
              <p className="text-plum-muted font-light leading-relaxed mb-8 max-w-lg">
                Nail Voyage Saloon Ug is the right place to enjoy a good
                manicure and pedicure in a relaxing atmosphere with friendly
                prices. Nail Voyage Saloon is always up-to-date with the latest
                trends in the nail industry.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Manicure */}
              <div className="service-card reveal bg-purple-50 rounded-2xl p-5 border border-purple-200 group hover:bg-purple-100 hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors duration-300">
                  <Image
                    src="/Manicure service icon.png"
                    alt="Manicure service icon"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(4)]?.map((_, i) => (
                    <svg
                      key={i}
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="#9333ea"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-serif text-base text-plum-DEFAULT mb-1.5 group-hover:text-purple-700 transition-colors duration-300">
                  Manicure
                </h3>
                <p className="text-xs text-plum-muted leading-relaxed font-light">
                  A manicure is a cosmetic beauty treatment for the fingernails
                  and hands performed by Nail Voyage Saloon.
                </p>
              </div>

              {/* Pedicure */}
              <div
                className="service-card reveal bg-purple-50 rounded-2xl p-5 border border-purple-200 group hover:bg-purple-100 hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors duration-300">
                  <Image
                    src="/Pedicure service icon.png"
                    alt="Pedicure service icon"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(4)]?.map((_, i) => (
                    <svg
                      key={i}
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="#9333ea"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-serif text-base text-plum-DEFAULT mb-1.5 group-hover:text-purple-700 transition-colors duration-300">
                  Pedicure
                </h3>
                <p className="text-xs text-plum-muted leading-relaxed font-light">
                  Treatment for feet and toenails; trimming, shaping, and
                  painting with softening, exfoliating, and massaging.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 reveal">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                Learn Our Story
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
        </div>
      </div>
    </section>
  );
}
