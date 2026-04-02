"use client";

// app/team/TeamPageClient.tsx
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

const team = [
  {
    id: 1,
    name: "Aisha Nakato",
    role: "Senior Nail Technician",
    subtitle: "Lead Artist",
    image: "/team/aisha.png",
    // SEO: descriptive alt text — helps Google Image Search
    alt: "Aisha Nakato — Senior Nail Technician at Nail Voyage Uganda, Kampala",
    experience: "5 years",
    specialties: ["Gel Extensions", "Nail Art", "Acrylic Sets"],
    bio: "Aisha is the heart of Nail Voyage Uganda. With five years of hands-on experience, she combines technical precision with an artist's eye to deliver flawless results every time. Her calm, welcoming energy puts even first-time clients instantly at ease.",
    quote: "Every nail tells a story — I make sure it's a beautiful one.",
    social: {
      instagram: "https://www.instagram.com/nailvoyageug",
      facebook: "https://www.facebook.com/nailvoyageug",
    },
    staffId: "aisha",
  },
  {
    id: 2,
    name: "Grace Namukasa",
    role: "Nail Art Specialist",
    subtitle: "Creative Director",
    image: "/team/grace.png",
    alt: "Grace Namukasa — Nail Art Specialist at Nail Voyage Uganda, Kampala",
    experience: "3 years",
    specialties: ["3D Nail Art", "Floral Designs", "Ombre & Gradients"],
    bio: "Grace sees nails as miniature canvases. Trained in advanced nail artistry, she's the go-to technician for clients who want something truly eye-catching — from intricate florals to bold geometric patterns that stop people in the street.",
    quote: "Dare to wear art on your fingertips.",
    social: {
      instagram: "https://www.instagram.com/nailvoyageug",
      facebook: "https://www.facebook.com/nailvoyageug",
    },
    staffId: "grace",
  },
  {
    id: 3,
    name: "Diana Akello",
    role: "Manicure & Pedicure Expert",
    subtitle: "Wellness Specialist",
    image: "/team/diana.png",
    alt: "Diana Akello — Manicure and Pedicure Expert at Nail Voyage Uganda, Kampala",
    experience: "4 years",
    specialties: ["Classic Manicure", "Spa Pedicure", "Nail Repair"],
    bio: "Diana's gentle touch and meticulous attention to detail transform every classic treatment into a luxury ritual. She specialises in restorative nail care, helping clients with damaged or brittle nails rediscover healthy, beautiful hands.",
    quote: "Self-care starts at your fingertips.",
    social: {
      instagram: "https://www.instagram.com/nailvoyageug",
      facebook: "https://www.facebook.com/nailvoyageug",
    },
    staffId: "diana",
  },
];

const values = [
  {
    icon: "🎓",
    title: "Certified & Trained",
    desc: "Every technician holds professional nail certification and participates in ongoing training to stay current with global trends.",
  },
  {
    icon: "🧼",
    title: "Hygiene First",
    desc: "All tools are sterilised between every single client. We never compromise on cleanliness — your health is our priority.",
  },
  {
    icon: "💜",
    title: "Client-Centred",
    desc: "We listen first. Every service is tailored to your preferences, nail health, and lifestyle — not a one-size-fits-all approach.",
  },
  {
    icon: "✨",
    title: "Trend-Forward",
    desc: "Our team regularly studies international nail trends and techniques so you always have access to the latest looks in Kampala.",
  },
];

const perks = [
  { label: "Free design consultation", icon: "🎨" },
  { label: "Complimentary hand massage", icon: "🤲" },
  { label: "Sanitised tools every visit", icon: "🧴" },
  { label: "Premium, skin-safe products", icon: "💎" },
  { label: "Welcoming, relaxed atmosphere", icon: "🌿" },
  { label: "Flexible booking options", icon: "📅" },
];

// ─── Safe image with fallback ─────────────────────────────────────────────────
function MemberImage({
  src,
  alt,
  initial,
  fill = false,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  initial: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-600 flex items-center justify-center">
        <span className="text-white font-serif text-7xl opacity-30 select-none">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-400 flex items-center justify-center z-0">
        <span className="text-white font-serif text-6xl opacity-30 select-none">
          {initial}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={`relative z-10 ${className}`}
        onError={() => setErrored(true)}
      />
    </>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function TeamPageClient() {
  const [activeId, setActiveId] = useState<number>(1);

  const heroRef = useReveal();
  const teamRef = useReveal();
  const valuesRef = useReveal();
  const perksRef = useReveal();
  const ctaRef = useReveal();

  const active = team.find((m) => m.id === activeId) ?? team[0];

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

        .member-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .member-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(147,51,234,0.18); }
        .member-card.active-card {
          box-shadow: 0 0 0 3px #9333ea, 0 24px 48px rgba(147,51,234,0.2);
          transform: translateY(-8px);
        }

        .specialty-pill { transition: background 0.2s, color 0.2s; }
        .specialty-pill:hover { background: #9333ea; color: white; }

        @keyframes float-slow {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-12px) rotate(1.5deg); }
        }
        .float       { animation: float-slow 7s ease-in-out infinite; }
        .float-delay { animation: float-slow 9s ease-in-out infinite reverse; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg,#9333ea,#c084fc,#7c3aed,#9333ea);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        @keyframes bounce-x {
          0%,100% { transform: translateX(0); }
          50%      { transform: translateX(4px); }
        }
        .bounce-x { animation: bounce-x 1.2s ease-in-out infinite; }
      `}</style>

      <main className="pt-[88px] md:pt-[108px] bg-white overflow-x-hidden">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative py-24 md:py-32 overflow-hidden bg-slate-900/50"
        >
          <div className="absolute inset-0">
            <Image
              src="/carousel/stations.png"
              alt="Nail Voyage Uganda salon interior — nail technicians at work in Kampala"
              fill
              sizes="100vw"
              className="object-cover opacity-60"
              priority
              quality={75}
            />
          </div>

          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-300/10 blur-3xl pointer-events-none" />

          <div className="absolute top-10 right-16 float opacity-20">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle
                cx="36"
                cy="36"
                r="32"
                stroke="#c084fc"
                strokeWidth="1.5"
                strokeDasharray="8 5"
              />
              <circle cx="36" cy="36" r="6" fill="#c084fc" />
            </svg>
          </div>
          <div className="absolute bottom-14 left-14 float-delay opacity-15">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect
                x="5"
                y="5"
                width="38"
                height="38"
                rx="10"
                stroke="#e9d5ff"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <div className="rv inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-600 bg-purple-400/10 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                Our People
              </span>
            </div>

            <h1 className="rv-up font-serif text-5xl md:text-7xl text-white tracking-tight leading-tight mb-6">
              The hands behind{" "}
              <span className="shimmer-text italic">your glow.</span>
            </h1>

            <p className="rv text-white text-lg font-light max-w-xl mx-auto leading-relaxed mb-10">
              Meet the passionate technicians who pour their skill, creativity,
              and care into every appointment at Nail Voyage Uganda.
            </p>

            <div className="rv flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#team"
                className="px-8 py-3.5 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Meet the Team
              </a>
              <Link
                href="/?book=true"
                className="px-8 py-3.5 border border-purple-400/50 text-white font-medium text-sm uppercase tracking-wider rounded-full hover:bg-purple-400/20 transition-all duration-300"
              >
                Book an Appointment
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

        {/* ── TEAM SPOTLIGHT ────────────────────────────────────────────────── */}
        <section ref={teamRef} id="team" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14 rv">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                Expert Team
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-tight">
                Our Technicians
              </h2>
              <p className="text-gray-500 text-sm mt-3 font-light max-w-md mx-auto flex items-center justify-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-400 flex-shrink-0"
                >
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                </svg>
                Click any card to learn more about your next favourite
                technician.
              </p>
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {team.map((member, i) => {
                const isActive = activeId === member.id;
                return (
                  <div
                    key={member.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    aria-label={`View profile of ${member.name}`}
                    className={`rv-up member-card rounded-3xl overflow-hidden cursor-pointer border-2 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                      isActive
                        ? "active-card border-purple-500"
                        : "border-transparent hover:border-purple-200"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                    onClick={() => setActiveId(member.id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setActiveId(member.id)
                    }
                  >
                    {/* Photo */}
                    <div className="relative h-80 overflow-hidden bg-purple-100">
                      <MemberImage
                        src={member.image}
                        alt={member.alt}
                        initial={member.name.charAt(0)}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent z-20" />

                      {!isActive && (
                        <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#9333ea"
                            strokeWidth="2.5"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">
                            Tap to learn more
                          </span>
                        </div>
                      )}

                      {isActive && (
                        <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 rounded-full shadow-sm">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-[10px] font-bold text-white uppercase tracking-wide">
                            Selected
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                        <div className="inline-block px-2.5 py-1 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                          {member.subtitle}
                        </div>
                        <h3 className="font-serif text-xl text-white leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-purple-200 text-xs mt-0.5">
                          {member.role}
                        </p>
                      </div>

                      <div className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-purple-700">
                        {member.experience}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="p-5 bg-white">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specialties.map((s) => (
                          <span
                            key={s}
                            className="specialty-pill text-[11px] font-semibold px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full cursor-default"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <div
                        className={`flex items-center justify-between pt-3 border-t ${isActive ? "border-purple-200" : "border-gray-100"}`}
                      >
                        <span
                          className={`text-xs font-semibold ${isActive ? "text-purple-600" : "text-gray-400"}`}
                        >
                          {isActive
                            ? "Viewing profile below ↓"
                            : "Click to view profile"}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-purple-600" : "bg-gray-100"}`}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isActive ? "white" : "#9333ea"}
                            strokeWidth="2.5"
                            className={isActive ? "" : "bounce-x"}
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bio panel */}
            <div className="rv bg-gradient-to-br from-purple-50 to-white rounded-3xl border border-purple-100 overflow-hidden">
              <div className="px-8 pt-6 pb-0 flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
                  Profile —
                </span>
                <span className="text-xs font-bold text-gray-700">
                  {active.name}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto min-h-[300px] bg-purple-100 overflow-hidden">
                  <MemberImage
                    src={active.image}
                    alt={active.alt}
                    initial={active.name.charAt(0)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-50/50 hidden md:block z-20" />
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-8 h-px bg-purple-400" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                      {active.role}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl text-gray-900 mb-4">
                    {active.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light mb-6">
                    {active.bio}
                  </p>

                  <blockquote className="border-l-4 border-purple-400 pl-4 mb-6">
                    <p className="text-purple-700 italic font-serif text-base">
                      {active.quote}
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-6 text-sm mb-8">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        Experience
                      </div>
                      <div className="font-semibold text-gray-800">
                        {active.experience}
                      </div>
                    </div>
                    <div className="w-px h-8 bg-gray-200" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        Specialties
                      </div>
                      <div className="font-semibold text-gray-800">
                        {active.specialties.length} areas
                      </div>
                    </div>
                    <div className="w-px h-8 bg-gray-200" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        Location
                      </div>
                      <div className="font-semibold text-gray-800">
                        Motiv Hub
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <Link
                      href={`/?book=true&staff=${active.staffId}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-purple-700 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                    >
                      Book with {active.name.split(" ")[0]}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                    <div className="flex gap-2">
                      <a
                        href={active.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border-2 border-purple-200 flex items-center justify-center text-purple-500 hover:border-purple-600 hover:bg-purple-50 transition-all duration-200"
                        aria-label={`${active.name} on Instagram`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                      <a
                        href={active.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border-2 border-purple-200 flex items-center justify-center text-purple-500 hover:border-purple-600 hover:bg-purple-50 transition-all duration-200"
                        aria-label={`${active.name} on Facebook`}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR STANDARDS ─────────────────────────────────────────────────── */}
        <section
          ref={valuesRef}
          className="py-16 md:py-24 bg-purple-950 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-white rounded-full"
                style={{
                  width: `${(i + 1) * 18}%`,
                  height: `${(i + 1) * 18}%`,
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
                Team Standards
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
                What sets us apart
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="rv-up p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
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

        {/* ── PERKS ─────────────────────────────────────────────────────────── */}
        <section ref={perksRef} className="py-16 md:py-20 bg-purple-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 rv">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                Every Visit
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-tight">
                What you get with every appointment
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {perks.map((perk, i) => (
                <div
                  key={perk.label}
                  className="rv-up flex items-center gap-3 p-4 bg-white rounded-2xl border border-purple-100 shadow-sm hover:border-purple-300 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-2xl flex-shrink-0">{perk.icon}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {perk.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOIN THE TEAM ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="rv bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-400/20 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-300/10 blur-2xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-purple-400/30 border border-purple-300/40 text-purple-100 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    We&apos;re Growing
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight mb-4">
                    Passionate about nails?
                    <br />
                    <span className="italic text-purple-200">
                      Join our team.
                    </span>
                  </h2>
                  <p className="text-purple-200 font-light leading-relaxed text-sm">
                    We&apos;re always looking for talented, dedicated nail
                    technicians who share our commitment to excellence. If you
                    love your craft and want to be part of Uganda&apos;s top
                    nail studio, reach out.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      title: "Competitive pay",
                      desc: "Fair compensation with tips and bonuses",
                    },
                    {
                      title: "Ongoing training",
                      desc: "We invest in your professional growth",
                    },
                    {
                      title: "Great team culture",
                      desc: "A supportive, creative environment",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {item.title}
                        </div>
                        <div className="text-purple-200 text-xs font-light">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                  <a
                    href="mailto:nailvoyage@gmail.com?subject=Job Application — Nail Technician"
                    className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 text-sm font-bold rounded-full hover:bg-purple-50 transition-all duration-300 hover:-translate-y-0.5 shadow-md self-start"
                  >
                    Send Your CV
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

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section ref={ctaRef} className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center rv">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-purple-700 text-xs font-bold uppercase tracking-[0.2em]">
                Ready?
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-tight mb-5">
              Book with your{" "}
              <span className="italic text-purple-600">
                favourite technician.
              </span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-10 max-w-md mx-auto">
              Choose the person you&apos;d like to see, pick a time that works
              for you, and leave the rest to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/?book=true"
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

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
              <a
                href="tel:+256759143881"
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
                +256 759 143 881
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
        </section>
      </main>
    </>
  );
}
