"use client";

// app/about-us/AboutPageClient.tsx
// ─── CLIENT COMPONENT — handles all animations and interactivity ──────────────

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Animation helper ─────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(
                ".reveal, .reveal-up, .reveal-left, .reveal-right",
              )
              .forEach((el, i) =>
                setTimeout(() => el.classList.add("in"), i * 110),
              );
          }
        });
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "5+", label: "Years of Excellence" },
  { value: "2K+", label: "Happy Clients" },
  { value: "8", label: "Signature Services" },
  { value: "3", label: "Expert Technicians" },
];

const values = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Client First",
    desc: "Every decision we make centers on delivering an exceptional, personalised experience for each guest.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Premium Quality",
    desc: "We use only the finest, skin-safe products sourced from trusted global brands — no compromises.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Always On-Trend",
    desc: "Our team stays current with the latest international nail art trends and techniques, year-round.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Welcoming Space",
    desc: "A calm, relaxed atmosphere where every client feels seen, valued and completely at ease.",
  },
];

const team = [
  {
    name: "Aisha Nakato",
    role: "Senior Nail Technician",
    image: "/booking/nakato.png",
    bio: "5 years of precision nail artistry. Aisha specialises in intricate gel designs and extensions.",
  },
  {
    name: "Grace Namukasa",
    role: "Nail Art Specialist",
    image: "/booking/grace.png",
    bio: "Grace transforms nails into miniature canvases — bold patterns, florals and 3D art are her signature.",
  },
  {
    name: "Diana Akello",
    role: "Manicure & Pedicure Expert",
    image: "/booking/diana.jpg",
    bio: "Diana's gentle touch and attention to detail make every classic treatment feel like a luxury ritual.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "We Opened Our Doors",
    desc: "Nail Voyage was born at Motiv Hub, Spring Rd — a small studio with a big dream.",
  },
  {
    year: "2020",
    title: "Survived & Thrived",
    desc: "Through the pandemic we pivoted to home-visit services, keeping our loyal clients glowing.",
  },
  {
    year: "2022",
    title: "Expanded the Team",
    desc: "Brought on two specialist technicians to meet the growing demand for premium nail care.",
  },
  {
    year: "2024",
    title: "2,000 Happy Clients",
    desc: "Reached a milestone of over two thousand satisfied clients across Kampala.",
  },
];

// ─── Gallery images ───────────────────────────────────────────────────────────
const galleryImages = [
  {
    src: "/carousel/stations.png",
    alt: "Nail Voyage Uganda manicure stations at Motiv Hub",
    tall: true,
  },
  {
    src: "/carousel/showingnail.png",
    alt: "Nail art services at Nail Voyage Uganda",
    tall: false,
  },
  {
    src: "/carousel/artservices.jpg",
    alt: "Nail art close up at Nail Voyage Uganda",
    tall: false,
  },
  {
    src: "/carousel/roadbranch.png",
    alt: "Nail Voyage Uganda Spring Road branch exterior",
    tall: true,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AboutPageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useReveal();
  const storyRef = useReveal();
  const valuesRef = useReveal();
  const timelineRef = useReveal();
  const teamRef = useReveal();
  const galleryRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <style>{`
        .reveal, .reveal-up, .reveal-left, .reveal-right {
          opacity: 0;
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .reveal-up    { transform: translateY(28px); }
        .reveal-left  { transform: translateX(-28px); }
        .reveal-right { transform: translateX(28px); }
        .reveal.in, .reveal-up.in, .reveal-left.in, .reveal-right.in {
          opacity: 1; transform: none;
        }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(147,51,234,0.12); }
        .team-card:hover .team-overlay { opacity: 1; }
        .team-overlay { opacity: 0; transition: opacity 0.3s ease; }
        .timeline-dot::before {
          content: '';
          position: absolute;
          left: 50%; top: 100%;
          transform: translateX(-50%);
          width: 2px; height: 100%;
          background: linear-gradient(to bottom, #9333ea, transparent);
        }
        .timeline-item:last-child .timeline-dot::before { display: none; }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(1deg); }
        }
        .float { animation: float-gentle 5s ease-in-out infinite; }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #9333ea, #c084fc, #7c3aed, #9333ea);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      <main className="pt-[88px] md:pt-[108px] bg-white overflow-x-hidden">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-500 bg-slate-900/50"
        >
          <div className="absolute inset-0">
            <Image
              src="/carousel/interior.jpg"
              alt="Nail Voyage Uganda salon interior at Motiv Hub Kampala"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-80"
              priority
              quality={80}
            />
          </div>

          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-300/10 blur-3xl pointer-events-none" />

          <div className="absolute top-16 right-16 float opacity-30">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle
                cx="30"
                cy="30"
                r="28"
                stroke="#c084fc"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <circle cx="30" cy="30" r="4" fill="#c084fc" />
            </svg>
          </div>
          <div
            className="absolute bottom-20 left-20 float opacity-20"
            style={{ animationDelay: "2s" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect
                x="4"
                y="4"
                width="32"
                height="32"
                stroke="#e9d5ff"
                strokeWidth="1.5"
                rx="8"
                strokeDasharray="5 3"
              />
            </svg>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 bg-purple-400/10 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-purple-100 text-xs font-semibold uppercase tracking-[0.2em]">
                Our Story
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl text-white tracking-tight leading-tight mb-6">
              Beauty crafted with{" "}
              <span className="shimmer-text italic">passion.</span>
            </h1>

            <p className="text-white text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Since 2019, Nail Voyage Uganda has been Kampala&apos;s destination
              for world-class nail care — where artistry, warmth, and expertise
              come together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/service"
                className="px-8 py-3.5 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Our Services
              </Link>
              <Link
                href="/contact-us"
                className="px-8 py-3.5 border border-purple-400/50 text-purple-200 font-medium text-sm uppercase tracking-wider rounded-full hover:bg-purple-400/20 backdrop-blur-sm transition-all duration-300"
              >
                Get in Touch
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

        {/* ── STATS ─────────────────────────────────────────────────────────── */}
        <section className="py-14 bg-white" ref={statsRef}>
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="reveal-up text-center p-6 rounded-2xl bg-purple-50 border border-purple-100 card-hover"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-serif text-4xl md:text-5xl text-purple-600 font-medium mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORY ─────────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" ref={storyRef}>
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              {/* Images collage */}
              <div className="relative h-[480px] reveal-left">
                <div className="absolute left-0 top-0 w-[62%] h-[75%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/carousel/stations.png"
                    alt="Nail Voyage Uganda manicure stations Kampala"
                    fill
                    sizes="(min-width: 1024px) 30vw, 60vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute right-0 bottom-0 w-[52%] h-[60%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/carousel/showingnail.png"
                    alt="Nail art services at Nail Voyage Uganda"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute right-4 top-6 w-[36%] h-[38%] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/carousel/artservices.jpg"
                    alt="Nail art close up Nail Voyage Uganda"
                    fill
                    sizes="(min-width: 1024px) 18vw, 36vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-4 left-6 bg-purple-600 text-white rounded-2xl px-5 py-3 shadow-lg z-10">
                  <div className="font-serif text-2xl font-medium leading-none">
                    5+
                  </div>
                  <div className="text-xs text-purple-200 uppercase tracking-wider mt-0.5">
                    Years in Kampala
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-dashed border-purple-200 pointer-events-none" />
              </div>

              {/* Text */}
              <div>
                <div className="reveal-right">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-4">
                    <span className="w-8 h-px bg-purple-400" />
                    Who We Are
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight mb-6">
                    Uganda&apos;s home of <br />
                    <span className="italic text-purple-600">
                      nail artistry.
                    </span>
                  </h2>
                </div>
                <div className="reveal space-y-4 text-gray-500 font-light leading-relaxed">
                  <p>
                    Nail Voyage Uganda was founded in 2019 with one clear vision
                    — to bring world-class nail care to Kampala in a space that
                    feels as good as it looks. Tucked inside Motiv Hub on Spring
                    Road, our studio is a sanctuary of calm, creativity, and
                    craftsmanship.
                  </p>
                  <p>
                    We believe your nails are a canvas for self-expression.
                    Whether you want an understated classic finish or an
                    eye-catching statement piece, our team of passionate
                    technicians is dedicated to exceeding your expectations —
                    every single visit.
                  </p>
                  <p>
                    From first-time guests to loyal regulars, everyone who walks
                    through our door leaves feeling seen, beautiful, and ready
                    to take on the world.
                  </p>
                </div>

                <div className="reveal flex flex-wrap gap-3 mt-8">
                  {[
                    "Certified Technicians",
                    "Premium Products",
                    "Hygienic Studio",
                    "Friendly Prices",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-xs font-semibold text-purple-700"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="#9333ea"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ────────────────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-24 bg-gradient-to-br from-purple-950 to-purple-900 relative overflow-hidden"
          ref={valuesRef}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
            <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
          </div>
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-300/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-14 reveal">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-3 block">
                What Drives Us
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="reveal-up p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300 card-hover group"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-600/30 flex items-center justify-center mb-4 text-purple-200 group-hover:bg-purple-600/50 transition-colors duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-serif text-lg text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-purple-200/70 leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-purple-50" ref={timelineRef}>
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14 reveal">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                Our Journey
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-tight">
                5 Years of Growth
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-200 -translate-x-1/2 hidden md:block" />
              <div className="flex flex-col gap-12">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className={`timeline-item reveal-up flex flex-col md:flex-row items-center gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <div
                      className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      <div className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full mb-2">
                        {item.year}
                      </div>
                      <h3 className="font-serif text-xl text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="timeline-dot relative flex-shrink-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-md hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ──────────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" ref={teamRef}>
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14 reveal">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                The Experts
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-tight">
                Meet Our Team
              </h2>
              <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto font-light">
                Skilled, passionate, and dedicated to making you look and feel
                your best.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className="reveal-up team-card group cursor-pointer"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-80 rounded-3xl overflow-hidden mb-5 shadow-lg">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role} at Nail Voyage Uganda`}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="team-overlay absolute inset-0 bg-purple-900/70 flex items-end p-6">
                      <p className="text-purple-100 text-sm leading-relaxed font-light">
                        {member.bio}
                      </p>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-700">
                      {member.role}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-lg text-gray-900 mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-xs text-purple-600 font-semibold uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 reveal">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 border-b border-purple-300 pb-0.5 hover:border-purple-600 transition-colors duration-200"
              >
                View Full Team
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
              </Link>
            </div>
          </div>
        </section>

        {/* ── SALON GALLERY ─────────────────────────────────────────────────── */}
        <section
          className="py-16 bg-purple-50 overflow-hidden"
          ref={galleryRef}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 reveal">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                Our Space
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-tight">
                Inside Nail Voyage Uganda
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={img.src}
                  className={`reveal-up relative rounded-2xl overflow-hidden shadow-md group ${img.tall ? "row-span-2 h-72 md:h-auto md:aspect-[3/4]" : "h-36 md:h-44"}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white" ref={ctaRef}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                <span className="text-purple-700 text-xs font-bold uppercase tracking-[0.2em]">
                  Ready to Visit?
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-tight mb-5">
                Come experience the{" "}
                <span className="italic text-purple-600">
                  Nail Voyage difference.
                </span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-10 max-w-xl mx-auto">
                Whether you&apos;re booking your first appointment or returning
                for your monthly treat, we&apos;re here to make every visit
                unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  href="/"
                  className="px-8 py-4 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/service"
                  className="px-8 py-4 border-2 border-purple-200 text-purple-700 font-semibold text-sm uppercase tracking-wider rounded-full hover:border-purple-600 hover:bg-purple-50 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>

              <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a
                  href="tel:+256700485551"
                  className="flex items-center gap-2 hover:text-purple-600 transition-colors"
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
                <span className="hidden sm:block w-px h-4 bg-gray-200" />
                <a
                  href="mailto:nailvoyage@gmail.com"
                  className="flex items-center gap-2 hover:text-purple-600 transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,12 2,6" />
                  </svg>
                  nailvoyage@gmail.com
                </a>
                <span className="hidden sm:block w-px h-4 bg-gray-200" />
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
    </>
  );
}
