"use client";

// app/contact-us/ContactPageClient.tsx
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

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 6:00 PM", open: true },
  { day: "Sunday", time: "11:00 AM – 5:00 PM", open: true },
  { day: "Public Holidays", time: "By appointment only", open: false },
];

const channels = [
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Call or WhatsApp",
    value: "+256 700 485 551",
    sub: "Mon–Sat, 9am–7pm",
    href: "tel:+256700485551",
    cta: "Call Now",
    color: "bg-green-50 border-green-200 text-green-700",
    btn: "bg-green-600 hover:bg-green-700",
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
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,12 2,6" />
      </svg>
    ),
    label: "Email Us",
    value: "nailvoyage@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:nailvoyage@gmail.com",
    cta: "Send Email",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    btn: "bg-purple-600 hover:bg-purple-700",
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
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Visit Us",
    value: "Motiv Hub, Spring Rd",
    sub: "Kampala, Uganda",
    href: "https://maps.google.com/?q=Motiv+Hub+Spring+Road+Kampala",
    cta: "Get Directions",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    btn: "bg-amber-500 hover:bg-amber-600",
  },
];

const socials = [
  {
    name: "Instagram",
    handle: "@nailvoyageug",
    href: "https://www.instagram.com/nailvoyageug",
    color: "from-pink-500 to-purple-600",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Nail Voyage Uganda",
    href: "https://www.facebook.com/nailvoyageug",
    color: "from-blue-600 to-blue-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+256 759 143 881",
    href: "https://wa.me/256759143881",
    color: "from-green-500 to-emerald-600",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function ContactPageClient() {
  const heroRef = useReveal();
  const channelsRef = useReveal();
  const formRef = useReveal();
  const mapRef = useReveal();
  const socialsRef = useReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const msg = encodeURIComponent(
      `Hello Nail Voyage Uganda! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`,
    );
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => null);
      window.open(`https://wa.me/256700485551?text=${msg}`, "_blank");
      setSent(true);
    } catch {
      setError(
        "Something went wrong. Please try calling or emailing us directly.",
      );
    } finally {
      setSending(false);
    }
  };

  const canSubmit = form.name && form.email && form.message;

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

        .field {
          width: 100%;
          border: 2px solid #e9d5ff;
          border-radius: 14px;
          padding: 12px 16px;
          font-size: 14px;
          color: #1f1033;
          background: white;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field:focus { border-color: #9333ea; box-shadow: 0 0 0 4px rgba(147,51,234,0.08); }
        .field::placeholder { color: #c4b5d4; }

        .channel-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .channel-card:hover { transform: translateY(-5px); box-shadow: 0 16px 32px rgba(147,51,234,0.12); }

        .social-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .social-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }

        @keyframes float-sm {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-10px) rotate(1deg); }
        }
        .float   { animation: float-sm 6s ease-in-out infinite; }
        .float-r { animation: float-sm 8s ease-in-out infinite reverse; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer {
          background: linear-gradient(90deg,#9333ea,#c084fc,#7c3aed,#9333ea);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .hour-row:nth-child(even) { background: #faf5ff; }
      `}</style>

      <main className="pt-[88px] md:pt-[108px] bg-white overflow-x-hidden">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative py-24 md:py-32 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 overflow-hidden bg-slate-900/50"
        >
          <div className="absolute inset-0">
            <Image
              src="/carousel/interior.jpg"
              alt="Nail Voyage Uganda salon interior at Motiv Hub Spring Road Kampala"
              fill
              sizes="100vw"
              className="object-cover bg-slate-900 opacity-70"
              priority
              quality={75}
            />
          </div>
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full bg-purple-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-purple-300/10 blur-3xl pointer-events-none" />

          <div className="absolute top-14 right-20 float opacity-20">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
              <circle
                cx="34"
                cy="34"
                r="30"
                stroke="#c084fc"
                strokeWidth="1.5"
                strokeDasharray="8 5"
              />
              <circle cx="34" cy="34" r="5" fill="#c084fc" />
            </svg>
          </div>
          <div className="absolute bottom-14 left-16 float-r opacity-15">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect
                x="5"
                y="5"
                width="34"
                height="34"
                rx="9"
                stroke="#e9d5ff"
                strokeWidth="1.5"
                strokeDasharray="5 3"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <div className="rv inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 bg-purple-400/10 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                Get In Touch
              </span>
            </div>

            <h1 className="rv-up font-serif text-5xl md:text-7xl text-white tracking-tight leading-tight mb-6">
              We&apos;d love to{" "}
              <span className="shimmer italic">hear from you.</span>
            </h1>

            <p className="rv text-white text-lg font-light max-w-xl mx-auto leading-relaxed mb-10">
              Questions about our services? Want to book? Just want to say
              hello? Reach out — our team is always happy to chat.
            </p>

            <div className="rv flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact-form"
                className="px-8 py-3.5 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Send a Message
              </a>
              <a
                href="https://wa.me/256700485551"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-purple-400/50 text-purple-200 font-medium text-sm uppercase tracking-wider rounded-full hover:bg-purple-400/20 transition-all duration-300"
              >
                WhatsApp Us
              </a>
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

        {/* ── CONTACT CHANNELS ──────────────────────────────────────────────── */}
        <section ref={channelsRef} className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {channels.map((c, i) => (
                <div
                  key={c.label}
                  className={`rv-up channel-card rounded-2xl border-2 p-6 ${c.color}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center mb-4 shadow-sm">
                    {c.icon}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">
                    {c.label}
                  </div>
                  <div className="font-serif text-lg font-medium mb-0.5">
                    {c.value}
                  </div>
                  <div className="text-xs opacity-60 mb-5">{c.sub}</div>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 ${c.btn} text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm`}
                  >
                    {c.cta}
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
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM + HOURS ──────────────────────────────────────────────────── */}
        <section
          ref={formRef}
          id="contact-form"
          className="py-16 md:py-24 bg-purple-50"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3 rv-left">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                  Send a Message
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-tight mb-2">
                  Drop us a note
                </h2>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Fill in the form below and we&apos;ll get back to you within
                  24 hours — or reach us on WhatsApp for an instant reply.
                </p>

                {sent ? (
                  <div className="bg-purple-600 rounded-3xl p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-purple-200 text-sm leading-relaxed max-w-xs mx-auto mb-6">
                      Your message has been opened in WhatsApp. We&apos;ll reply
                      as soon as possible!
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 bg-white text-purple-700 text-sm font-bold rounded-full hover:bg-purple-50 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="field"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+256 7XX XXX XXX"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="field"
                        >
                          <option value="">Select a topic…</option>
                          <option>Booking Enquiry</option>
                          <option>Service Information</option>
                          <option>Pricing</option>
                          <option>Complaint or Feedback</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind…"
                        rows={5}
                        required
                        className="field resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-xs text-red-500 bg-red-50 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={!canSubmit || sending}
                      className={`w-full py-4 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                        canSubmit && !sending
                          ? "bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:-translate-y-0.5"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {sending ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Opening WhatsApp…
                        </>
                      ) : (
                        <>
                          Send via WhatsApp
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400 font-light">
                      Your message will be sent directly to our WhatsApp for the
                      fastest response.
                    </p>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 rv-right space-y-6">
                {/* Opening hours */}
                <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-sm">
                  <div className="bg-purple-600 px-6 py-4 flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <h3 className="font-serif text-lg text-white">
                      Opening Hours
                    </h3>
                  </div>
                  <div className="divide-y divide-purple-50">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="hour-row flex items-center justify-between px-6 py-3.5"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {h.day}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${h.open ? "bg-green-400" : "bg-gray-300"}`}
                          />
                          <span className="text-sm text-gray-500 font-light">
                            {h.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-lg text-gray-900">
                      Find Us
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                    We&apos;re located inside{" "}
                    <strong className="text-gray-700 font-semibold">
                      Motiv Hub
                    </strong>{" "}
                    on Spring Road, Kampala. Look for the purple signage — you
                    can&apos;t miss us!
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-5">
                    {[
                      "Motiv Hub, Spring Road",
                      "Kampala, Uganda",
                      "Free parking available nearby",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#9333ea"
                          strokeWidth="2"
                          className="mt-0.5 flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://maps.google.com/?q=Motiv+Hub+Spring+Road+Kampala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-purple-700 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Open in Maps
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
                  </a>
                </div>

                {/* Quick links */}
                <div className="bg-purple-600 rounded-3xl p-6 text-white">
                  <h3 className="font-serif text-lg mb-4">Quick Actions</h3>
                  <div className="space-y-2.5">
                    {[
                      { label: "Book an Appointment", href: "/" },
                      { label: "View Our Services", href: "/service" },
                      { label: "Meet the Team", href: "/team" },
                    ].map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center justify-between px-4 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-200 group"
                      >
                        <span className="text-sm font-medium">
                          {link.label}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAP ───────────────────────────────────────────────────────────── */}
        <section ref={mapRef} className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 rv">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                Location
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-tight">
                Motiv Hub, Spring Road
              </h2>
              <p className="text-gray-500 text-sm mt-2 font-light">
                Kampala, Uganda
              </p>
            </div>

            <div
              className="rv rounded-3xl overflow-hidden shadow-lg border border-purple-100"
              style={{ height: "420px" }}
            >
              <iframe
                title="Nail Voyage Uganda — Motiv Hub Spring Road Kampala"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7576019906!2d32.5820!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0e636bef01%3A0x1!2sSpring+Road%2C+Kampala%2C+Uganda!5e0!3m2!1sen!2sug!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://maps.google.com/?q=Motiv+Hub+Spring+Road+Kampala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white text-sm font-bold rounded-full hover:bg-purple-700 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                Open in Google Maps
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
              <a
                href="https://wa.me/256700485551?text=Hi! I need directions to Nail Voyage Uganda at Motiv Hub."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-200 text-purple-700 text-sm font-bold rounded-full hover:border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                Ask for Directions on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── SOCIALS ───────────────────────────────────────────────────────── */}
        <section ref={socialsRef} className="py-16 bg-purple-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="rv mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-3 block">
                Stay Connected
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-tight">
                Follow our journey
              </h2>
              <p className="text-gray-500 text-sm mt-3 font-light max-w-md mx-auto">
                See our latest nail art, client transformations, and
                behind-the-scenes moments.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {socials.map((s, i) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rv-up social-card rounded-2xl bg-gradient-to-br ${s.color} p-6 text-white flex flex-col items-center text-center`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    {s.icon}
                  </div>
                  <div className="font-serif text-lg mb-0.5">{s.name}</div>
                  <div className="text-white/80 text-xs font-medium">
                    {s.handle}
                  </div>
                  <div className="mt-4 px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/30 transition-colors">
                    Follow
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center rv">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
              Ready for your next appointment?
            </h2>
            <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">
              Book online or give us a call — we&apos;re always happy to find a
              time that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/"
                className="px-8 py-4 bg-purple-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Book Now
              </Link>
              <a
                href="tel:+256700485551"
                className="px-8 py-4 border-2 border-purple-200 text-purple-700 font-semibold text-sm uppercase tracking-wider rounded-full hover:border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                +256 700 485 551
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
