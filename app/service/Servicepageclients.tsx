"use client";

// app/service/ServicePageClient.tsx
// ─── CLIENT COMPONENT — all interactive / animation code lives here ───────────

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".rv, .rv-up, .rv-left, .rv-right")
              .forEach((el, i) =>
                setTimeout(() => el.classList.add("in"), i * 100),
              );
          }
        });
      },
      { threshold: 0.07 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const categories = ["All", "Manicure", "Pedicure", "Specialty", "Removal"];

const services = [
  {
    id: "nail-art",
    name: "Nail Art",
    category: "Specialty",
    price: 35000,
    duration: "60 min",
    image: "/services/nailart.jpg",
    gallery: "/services/nailart.jpg",
    // SEO: descriptive alt text helps Google Image Search
    alt: "Nail art service at Nail Voyage Uganda — intricate nail designs Kampala",
    tag: "Most Loved",
    tagColor: "bg-purple-600",
    desc: "From minimalist line art to bold 3D sculpted designs — our artists translate your vision into wearable masterpieces. Every stroke is intentional, every finish flawless.",
    includes: [
      "Custom design consultation",
      "Base & top coat",
      "Cuticle care",
      "Finishing gloss",
    ],
  },
  {
    id: "gel-manicure",
    name: "Gel Manicure",
    category: "Manicure",
    price: 50000,
    duration: "75 min",
    image: "/services/Gelmanicure.jpg",
    gallery: "/services/Gelmanicure.jpg",
    alt: "Gel manicure service at Nail Voyage Uganda — chip-free gel nails Kampala",
    tag: "Premium",
    tagColor: "bg-rose-500",
    desc: "A chip-free, high-shine manicure that lasts up to three weeks. Cured under UV light for an unbreakable finish that keeps your nails looking salon-fresh every day.",
    includes: [
      "Gel polish application",
      "UV cure",
      "Cuticle treatment",
      "Hand massage",
    ],
  },
  {
    id: "classic-manicure",
    name: "Classic Manicure",
    category: "Manicure",
    price: 30000,
    duration: "45 min",
    image: "/services/Classicmanicure.jpg",
    gallery: "/services/Classicmanicure.jpg",
    alt: "Classic manicure service at Nail Voyage Uganda — nail shaping and polish Kampala",
    tag: "Classic",
    tagColor: "bg-slate-500",
    desc: "The timeless foundation of nail care. Shape, buff, cuticle work, and a polished finish that leaves your hands looking pristine and perfectly groomed.",
    includes: [
      "Nail shaping & filing",
      "Cuticle care",
      "Hand soak",
      "Polish of choice",
    ],
  },
  {
    id: "french-manicure",
    name: "French Manicure",
    category: "Manicure",
    price: 35000,
    duration: "50 min",
    image: "/services/Frenchmanicure.jpg",
    gallery: "/services/Frenchmanicure.jpg",
    alt: "French manicure service at Nail Voyage Uganda — white tip nails Kampala",
    tag: "Elegant",
    tagColor: "bg-amber-500",
    desc: "Clean white tips on a natural sheer base — the look that never goes out of style. Precision-applied for crisp lines and a polished finish that works with any outfit.",
    includes: [
      "White tip application",
      "Sheer base coat",
      "Cuticle care",
      "Top coat seal",
    ],
  },
  {
    id: "polish-change",
    name: "Polish Change",
    category: "Manicure",
    price: 15000,
    duration: "20 min",
    image: "/services/Polishchange.jpg",
    gallery: "/services/Polishchange.jpg",
    alt: "Nail polish change service at Nail Voyage Uganda — quick nail refresh Kampala",
    tag: "Quick Fix",
    tagColor: "bg-emerald-500",
    desc: "A fast, fresh refresh in your colour of choice. Perfect when you want vibrant nails without the wait — done in under 20 minutes.",
    includes: [
      "Polish removal",
      "New colour application",
      "Quick file & shape",
      "Top coat",
    ],
  },
  {
    id: "nail-repair",
    name: "Nail Repair",
    category: "Specialty",
    price: 5000,
    duration: "30 min",
    image: "/services/Nailrepair.jpg",
    gallery: "/services/Nailrepair.jpg",
    alt: "Nail repair service at Nail Voyage Uganda — fixing broken nails Kampala",
    tag: "Per Nail",
    tagColor: "bg-orange-500",
    desc: "Broken, chipped, or lifting? We restore individual nails back to full strength and beauty using professional-grade repair techniques — no need to redo the whole set.",
    includes: [
      "Damage assessment",
      "Structural repair",
      "Colour match",
      "Seal & finish",
    ],
  },
  {
    id: "removal",
    name: "Removal Services",
    category: "Removal",
    price: 18000,
    duration: "30 min",
    image: "/services/Removal.jpg",
    gallery: "/services/Removal.jpg",
    alt: "Gel and acrylic nail removal service at Nail Voyage Uganda — safe removal Kampala",
    tag: "Safe & Gentle",
    tagColor: "bg-sky-500",
    desc: "Safe, gentle removal of gel, acrylic, dip powder, and extensions without damage to your natural nail. We take our time so your nails stay healthy and intact.",
    includes: [
      "Soak-off removal",
      "Nail bed conditioning",
      "Buffing & smoothing",
      "Nail oil finish",
    ],
  },
  {
    id: "feet-toes",
    name: "Feet & Toes",
    category: "Pedicure",
    price: 40000,
    duration: "60 min",
    image: "/services/feet.jpg",
    gallery: "/services/Feet.jpg",
    alt: "Pedicure feet and toes treatment at Nail Voyage Uganda — foot care Kampala",
    tag: "Rejuvenating",
    tagColor: "bg-teal-500",
    desc: "A full-service foot treatment — soak, scrub, shape, massage, and polish. Leave walking on clouds with soft skin and perfectly painted toes.",
    includes: [
      "Foot soak & scrub",
      "Nail shaping",
      "Callus treatment",
      "Massage & polish",
    ],
  },
];

const faqs = [
  {
    q: "How long do gel nails last?",
    a: "Our gel manicures typically last 2–3 weeks without chipping. Longevity depends on your nail growth rate and daily activities.",
  },
  {
    q: "Is removal safe for my natural nails?",
    a: "Absolutely. We use a careful soak-off method that protects the nail bed. Rushed or DIY removal is the main cause of nail damage — we never rush.",
  },
  {
    q: "Do I need to book in advance?",
    a: "We recommend booking at least 24 hours ahead, especially for nail art and gel services. Walk-ins are welcome for polish changes and quick services.",
  },
  {
    q: "What products do you use?",
    a: "We use premium, skin-safe polish and gel brands sourced from trusted international suppliers. All tools are sterilised between every client.",
  },
  {
    q: "Can I bring my own nail polish?",
    a: "Yes! We're happy to use your personal polish. Just let us know when you book.",
  },
];

// ── ServiceCard ───────────────────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
  onBook,
}: {
  service: (typeof services)[0];
  index: number;
  onBook: (name: string) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const isAboveFold = index < 4;

  return (
    <div
      className="rv-up group cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "340px",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden bg-white border border-purple-100 shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-44 overflow-hidden">
            <Image
              src={service.gallery}
              alt={service.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority={isAboveFold}
              loading={isAboveFold ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 ${service.tagColor} text-white text-[10px] font-bold uppercase tracking-wider rounded-full`}
            >
              {service.tag}
            </span>
            <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-[10px] font-semibold text-purple-100">
                {service.duration}
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between mb-1.5">
              <h3 className="font-serif text-lg text-gray-900 leading-tight">
                {service.name}
              </h3>
              <div className="text-right flex-shrink-0 ml-2">
                <div className="text-xs text-gray-400 leading-none">from</div>
                <div className="font-serif text-lg text-purple-600 font-medium leading-tight">
                  UGX {service.price.toLocaleString()}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
              {service.desc}
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl bg-purple-600 p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="font-serif text-xl text-white mb-1">
              {service.name}
            </h3>
            <p className="text-purple-200 text-xs leading-relaxed mb-5">
              {service.desc}
            </p>
            <div className="space-y-2">
              <p className="text-purple-300 text-[10px] font-bold uppercase tracking-wider">
                What&apos;s included
              </p>
              {service.includes.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c084fc"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-xs text-purple-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <div className="text-purple-300 text-[10px] uppercase tracking-wider">
                Price
              </div>
              <div className="font-serif text-xl text-white font-medium">
                UGX {service.price.toLocaleString()}
              </div>
            </div>
            <button
              onClick={() => onBook(service.name)}
              className="px-5 py-2.5 bg-white text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-purple-50 transition-all duration-200 shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FaqItem ───────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rv-up border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${open ? "border-purple-300 bg-purple-50" : "border-gray-100 bg-white hover:border-purple-200"}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <span
          className={`font-serif text-base ${open ? "text-purple-700" : "text-gray-800"}`}
        >
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-purple-600 rotate-45" : "bg-purple-100"}`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "white" : "#9333ea"}
            strokeWidth="2.5"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ServicePageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [bookingName, setBookingName] = useState<string | null>(null);

  const heroRef = useReveal();
  const filterRef = useReveal();
  const gridRef = useReveal();
  const processRef = useReveal();
  const faqRef = useReveal();
  const ctaRef = useReveal();

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <style>{`
        .rv, .rv-up, .rv-left, .rv-right {
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .rv-up   { transform: translateY(24px); }
        .rv-left { transform: translateX(-24px); }
        .rv-right{ transform: translateX(24px); }
        .rv.in, .rv-up.in, .rv-left.in, .rv-right.in { opacity: 1; transform: none; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes drift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-14px) rotate(2deg); }
        }
        .drift      { animation: drift 6s ease-in-out infinite; }
        .drift-slow { animation: drift 9s ease-in-out infinite reverse; }
      `}</style>

      <main className="pt-[88px] md:pt-[108px] bg-white overflow-x-hidden">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative py-24 md:py-32 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/carousel/artservices.jpg"
              alt="Nail art services at Nail Voyage Uganda Kampala"
              fill
              sizes="100vw"
              className="object-cover opacity-80"
              priority
              quality={75}
            />
          </div>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-300/10 blur-3xl pointer-events-none" />

          <div className="absolute top-12 right-20 drift opacity-20">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#c084fc"
                strokeWidth="1.5"
                strokeDasharray="8 5"
              />
              <circle cx="40" cy="40" r="6" fill="#c084fc" />
            </svg>
          </div>
          <div className="absolute bottom-16 left-16 drift-slow opacity-15">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <rect
                x="6"
                y="6"
                width="44"
                height="44"
                rx="12"
                stroke="#e9d5ff"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>
          </div>
          <div
            className="absolute top-1/2 left-12 drift opacity-10"
            style={{ animationDelay: "3s" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <polygon
                points="20,4 36,36 4,36"
                stroke="#a855f7"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="rv inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 bg-purple-500/10 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-700 animate-pulse" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                8 Signature Services
              </span>
            </div>

            <h1 className="rv-up font-serif text-5xl md:text-7xl text-white tracking-tight leading-tight mb-6">
              Every nail, a{" "}
              <span className="italic" style={{ color: "#c084fc" }}>
                masterpiece.
              </span>
            </h1>

            <p className="rv text-white text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10">
              From quick polish changes to intricate nail art — discover the
              full range of premium services we offer at Nail Voyage Uganda,
              Kampala.
            </p>

            <div className="rv flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#services"
                className="px-8 py-3.5 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Explore Services
              </a>
              <Link
                href="/contact-us"
                className="px-8 py-3.5 border border-purple-400/50 text-purple-200 font-medium text-sm uppercase tracking-wider rounded-full hover:bg-purple-400/20 transition-all duration-300"
              >
                Ask a Question
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* ── CATEGORY FILTER ──────────────────────────────────────────────── */}
        <section
          ref={filterRef}
          id="services"
          className="py-10 bg-white sticky top-16 md:top-20 z-30 border-b border-purple-50"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="rv flex items-center gap-2 overflow-x-auto pb-1 justify-center flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${activeCategory === cat ? "bg-purple-500 text-white" : "bg-purple-200 text-purple-600"}`}
                  >
                    {cat === "All"
                      ? services.length
                      : services.filter((s) => s.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE GRID ─────────────────────────────────────────────────── */}
        <section ref={gridRef} className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 rv">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-tight">
                {activeCategory === "All" ? "All Services" : activeCategory}
              </h2>
              <p className="text-gray-500 text-sm mt-2 font-light">
                Hover over any card to see what&apos;s included
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((service, i) => (
                <div
                  key={service.id}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <ServiceCard
                    service={service}
                    index={i}
                    onBook={(name) => setBookingName(name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────────── */}
        <section
          ref={processRef}
          className="py-16 md:py-24 bg-purple-950 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-white rounded-full"
                style={{
                  width: `${(i + 1) * 15}%`,
                  height: `${(i + 1) * 15}%`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-14 rv">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-3 block">
                Your Visit
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
                How it works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-purple-700" />
              {[
                {
                  step: "01",
                  title: "Book Online",
                  desc: "Choose your service, preferred technician, date and time via our booking system.",
                  icon: "📱",
                },
                {
                  step: "02",
                  title: "Arrive & Relax",
                  desc: "Walk into our calm, welcoming studio at Motiv Hub. Enjoy a complimentary drink.",
                  icon: "☕",
                },
                {
                  step: "03",
                  title: "Get Pampered",
                  desc: "Your technician gets to work — every detail handled with care and precision.",
                  icon: "💅",
                },
                {
                  step: "04",
                  title: "Leave Glowing",
                  desc: "Walk out with show-stopping nails and a smile. We can't wait to see you again.",
                  icon: "✨",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="rv-up flex flex-col items-center text-center relative"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="relative w-20 h-20 rounded-full bg-purple-800 border-2 border-purple-600 flex items-center justify-center mb-4 z-10 text-3xl">
                    {item.icon}
                  </div>
                  <div className="text-purple-500 text-xs font-bold uppercase tracking-wider mb-1">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-purple-300 text-sm leading-relaxed font-light max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOKING CTA BANNER ───────────────────────────────────────────── */}
        <section className="bg-white py-6 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ minHeight: "340px" }}
            >
              <Image
                src="/carousel/stations.png"
                alt="Nail Voyage Uganda salon interior at Motiv Hub Spring Road Kampala"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover object-center"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-900/75 to-purple-800/50" />
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-dashed border-purple-300/20 pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-dashed border-purple-300/15 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-12 py-12">
                <div className="text-center md:text-left max-w-lg">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-300/40 bg-purple-300/10 backdrop-blur-sm mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
                    <span className="text-purple-200 text-[10px] font-bold uppercase tracking-[0.2em]">
                      Kampala&apos;s Top Nail Studio
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight mb-3">
                    Ready to treat <br />
                    <span className="italic" style={{ color: "#c084fc" }}>
                      yourself?
                    </span>
                  </h2>
                  <p className="text-purple-200 text-sm font-light leading-relaxed">
                    Prices start from{" "}
                    <strong className="text-white font-semibold">
                      UGX 5,000
                    </strong>
                    . Book your appointment online in minutes — choose your
                    service, pick a technician, and we&apos;ll handle the rest.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
                    {[
                      { label: "Polish Change", price: "15K" },
                      { label: "Classic Mani", price: "30K" },
                      { label: "Gel Mani", price: "50K" },
                      { label: "Nail Art", price: "35K" },
                    ].map((item) => (
                      <span
                        key={item.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/90"
                      >
                        {item.label}
                        <span className="font-bold text-purple-300">
                          UGX {item.price}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 items-center flex-shrink-0">
                  <Link
                    href="/"
                    className="w-52 text-center px-8 py-4 bg-purple-600 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-purple-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                  >
                    Book Now
                  </Link>
                  <Link
                    href="/contact-us"
                    className="w-52 text-center px-8 py-3.5 border border-white/40 text-white font-medium text-sm uppercase tracking-wider rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    Ask a Question
                  </Link>
                  <a
                    href="https://wa.me/256700485551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-52 text-center px-8 py-3.5 bg-green-500 text-white font-medium text-sm uppercase tracking-wider rounded-full hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section ref={faqRef} className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 rv">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                Got Questions?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-tight">
                Frequently Asked
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={faq.q} style={{ transitionDelay: `${i * 70}ms` }}>
                  <FaqItem q={faq.q} a={faq.a} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section
          ref={ctaRef}
          className="py-20 bg-gradient-to-br from-purple-950 to-purple-900 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/carousel/interior.jpg"
              alt="Nail Voyage Uganda salon interior Kampala"
              fill
              sizes="100vw"
              className="object-cover opacity-10"
              loading="lazy"
              quality={60}
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            <div className="rv">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-400/20 border border-purple-400/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
                <span className="text-purple-200 text-xs font-bold uppercase tracking-[0.2em]">
                  Available Now
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-5">
                Ready for your <br />
                <span className="italic" style={{ color: "#c084fc" }}>
                  next appointment?
                </span>
              </h2>

              <p className="text-purple-200 font-light leading-relaxed mb-10 max-w-lg mx-auto">
                Book online in minutes. Choose your service, pick your
                technician, and we&apos;ll take care of the rest.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-4 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/contact-us"
                  className="px-8 py-4 border border-purple-400/50 text-purple-200 font-medium text-sm uppercase tracking-wider rounded-full hover:bg-purple-400/20 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-purple-300">
                <a
                  href="tel:+256700485551"
                  className="flex items-center gap-2 hover:text-purple-100 transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +256 700 485 551
                </a>
                <span className="hidden sm:block w-px h-4 bg-purple-700" />
                <span className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Motiv Hub, Spring Rd, Kampala
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── BOOKING TOAST ────────────────────────────────────────────────────── */}
      {bookingName && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-purple-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 text-sm font-medium">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {bookingName} selected — use the Book Now button in the nav!
          <button
            onClick={() => setBookingName(null)}
            className="ml-2 text-purple-200 hover:text-white"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
