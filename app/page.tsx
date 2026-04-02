"use client";

import React, { useState } from "react";
import BookingModal from "@/components/BookingModal";
import PricingCards from "@/components/PricingCard";
import AboutSection from "@/components/AboutSection";
import GallerySlider from "@/components/GallerySlider";
import SpecialServices from "@/components/SpecialService";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-rose-cream">
      {/* Spacer for fixed header (top info bar ~32px + nav ~80px on md) */}
      <div className="h-16 md:h-28" />

      {/* Hero Carousel */}
      <HeroCarousel onBookNow={() => setBookingOpen(true)} />

      {/* Pricing / Service Cards */}
      <PricingCards />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Slider */}
      <GallerySlider />

      {/* Special Services */}
      <SpecialServices onBookNow={() => setBookingOpen(true)} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </main>
  );
}
