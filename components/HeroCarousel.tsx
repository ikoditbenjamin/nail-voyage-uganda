"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/carousel/stations.png",
    alt: "Nail Voyage Saloon Uganda salon interior at Motiv Hub showing manicure stations",
    location: "Motiv Hub — Spring Rd",
    tagline: "Glamour At Your Doorsteps",
  },
  {
    src: "/carousel/showingnail.png",
    alt: "Nail Voyage SaloonUganda Motiv Hub branch showing nail art services",
    location: "Motiv Hub — Spring Rd",
    tagline: "Luxury nail care, Ugandan pride.",
  },
  {
    src: "/carousel/interior.jpg",
    alt: "Nail Voyage Saloon Uganda Motiv Hub interior",
    location: "Motiv Hub — Spring Rd",
    tagline: "5 years of perfecting nails.",
  },
  {
    src: "/carousel/artservices.jpg",
    alt: "Nail Voyage Saloon Uganda Voice Motiv Hub branch showing nail art services",
    location: "Motiv Hub — spring rd",
    tagline: "Where beauty meets expertise.",
  },
  {
    src: "/carousel/roadbranch.png",
    alt: "Nail Voyage Saloon Uganda Motiv Hub Spring Road branch",
    location: "Motiv Hub — Spring Rd",
    tagline: "Glamour At Your Doorsteps",
  },
];

export default function HeroCarousel({
  onBookNow,
}: {
  onBookNow?: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning],
  );

  const next = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prev = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative w-full overflow-hidden absolute inset-0"
      style={{ height: "min(90vh, 700px)", minHeight: "500px" }}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-linear-to-b from-plum-DEFAULT/60 via-plum-DEFAULT/20 to-plum-DEFAULT/70 bg-slate-900/50" />
          <div className="absolute inset-0 bg-linear-to-r from-plum-DEFAULT/40 via-transparent to-plum-DEFAULT/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Top badge */}
        <div
          key={`badge-${current}`}
          className="animate-fade-in-up mb-6"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse bg-purple-900" />
            Top Nails Salon Uganda
          </span>
        </div>

        {/* Tagline */}
        <h1
          key={`tagline-${current}`}
          className="animate-fade-in-up delay-100 font-serif text-4xl md:text-6xl lg:text-7xl text-purple-900 tracking-tight leading-tight max-w-3xl mb-4"
          style={{ animationFillMode: "forwards" }}
        >
          {slides[current].tagline}
        </h1>

        <p
          key={`sub-${current}`}
          className="animate-fade-in-up delay-200 text-white/75 text-sm md:text-base font-bold max-w-md mb-8"
          style={{ animationFillMode: "forwards" }}
        >
          Premium nail care in a relaxing atmosphere with friendly prices.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3 items-center"
          style={{ animationFillMode: "forwards" }}
        >
          <button
            onClick={onBookNow}
            className="px-8 py-3.5 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Book Appointment
          </button>
          <a
            href="/service"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-white/40 text-white font-medium text-sm uppercase tracking-wider rounded-full hover:bg-white/15 backdrop-blur-sm transition-all duration-300"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Location Badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-gray-300/90">
        <div className="flex items-center gap-2 px-5 py-2.5 bg-accent/90 backdrop-blur-sm rounded-sm text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] shadow-lg">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {slides[current].location}
        </div>
      </div>

      {/* Nav Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200"
        aria-label="Next slide"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 right-6 md:right-10 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-purple-600" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
