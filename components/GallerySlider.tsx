"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
const galleryImages = [
  {
    src: "/gallery/interior.jpg",
    alt: "Nail Voyage Saloon gallery - salon interior with nail stations",
  },
  {
    src: "/gallery/detailed.png",
    alt: "Nail Voyage Saloon gallery - detailed nail art close-up",
  },
  {
    src: "/gallery/design.jpg",
    alt: "Nail Voyage Saloon gallery - nail design showcase",
  },
  {
    src: "/gallery/progress.png",
    alt: "Nail Voyage Saloon gallery - manicure in progress",
  },
  {
    src: "/gallery/gel.png",
    alt: "Nail Voyage Saloon gallery - gel nail application",
  },
  {
    src: "/gallery/portfolio.png",
    alt: "Nail Voyage Saloon gallery - nail art portfolio",
  },
  {
    src: "/gallery/pedicureservice.png",
    alt: "Nail Voyage Saloon gallery - pedicure service",
  },
  {
    src: "/gallery/nailextensions.png",
    alt: "Nail Voyage Saloon gallery - nail extensions",
  },
  {
    src: "/gallery/polishselection.jpg",
    alt: "Nail Voyage Saloon gallery - nail polish selection",
  },
];

export default function GallerySlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !revealed) {
          setRevealed(true);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, [revealed]);

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < galleryImages?.length;

  const prev = () => {
    if (canPrev) setStartIndex((s) => s - 1);
  };

  const next = () => {
    if (canNext) setStartIndex((s) => s + 1);
  };

  const visibleImages = galleryImages?.slice(
    startIndex,
    startIndex + visibleCount,
  );

  return (
    <section
      className="py-16 md:py-20 bg-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row justify-between items-end mb-10 gap-4 transition-all duration-700 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-plum-DEFAULT tracking-tight">
              Our Work Gallery
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 ${canPrev ? "text-plum-DEFAULT hover:text-primary cursor-pointer" : "text-plum-muted/40 cursor-not-allowed"}`}
              aria-label="Previous gallery images"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              PREV
            </button>
            <div className="w-px h-4 bg-rose-border" />
            <button
              onClick={next}
              disabled={!canNext}
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 ${canNext ? "text-plum-DEFAULT hover:text-primary cursor-pointer" : "text-plum-muted/40 cursor-not-allowed"}`}
              aria-label="Next gallery images"
            >
              NEXT
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleImages?.map((img, i) => (
            <div
              key={`${startIndex}-${i}`}
              className={`group relative overflow-hidden rounded-2xl aspect-4/3 bg-rose-soft transition-all duration-500 ${revealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Image
                src={img?.src}
                alt={img?.alt}
                fill
                className="object-cover img-zoom"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-plum-DEFAULT/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-primary-light" />
                  <span className="text-white text-xs font-medium uppercase tracking-wider">
                    Nail Voyage Saloon
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-1.5 mt-8">
          {galleryImages?.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${i >= startIndex && i < startIndex + visibleCount ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-rose-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
