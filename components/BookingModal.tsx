"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BRANCH = {
  name: "Nail Voyage Saloon — Motiv Hub, Spring Rd",
  location: "Kampala, Uganda",
  phone: "+256 700 485551",
  email: "nailvoyage@gmail.com",
  image: "/booking/motivhub.png",
};

const SERVICES = [
  { id: "nail-art", name: "Nail Art", duration: "60 min", price: "UGX 35,000" },
  {
    id: "nail-repair",
    name: "Nail Repair",
    duration: "30 min",
    price: "UGX 20,000",
  },
  {
    id: "gel-manicure",
    name: "Gel Manicure",
    duration: "75 min",
    price: "UGX 50,000",
  },
  {
    id: "polish-change",
    name: "Polish Change",
    duration: "20 min",
    price: "UGX 15,000",
  },
  {
    id: "classic-manicure",
    name: "Classic Manicure",
    duration: "45 min",
    price: "UGX 30,000",
  },
  {
    id: "french-manicure",
    name: "French Manicure",
    duration: "50 min",
    price: "UGX 35,000",
  },
  {
    id: "removal",
    name: "Removal Services",
    duration: "30 min",
    price: "UGX 18,000",
  },
  {
    id: "feet-toes",
    name: "Feet and Toes",
    duration: "60 min",
    price: "UGX 40,000",
  },
];

const STAFF = [
  {
    id: "any",
    name: "Any Available",
    role: "Best match for your service",
    avatar: "/booking/available.png",
  },
  {
    id: "aisha",
    name: "Aisha Nakato",
    role: "Senior Nail Technician",
    avatar: "/booking/nakato.png",
  },
  {
    id: "grace",
    name: "Grace Namukasa",
    role: "Nail Art Specialist",
    avatar: "/booking/grace.png",
  },
  {
    id: "diana",
    name: "Diana Akello",
    role: "Manicure & Pedicure Expert",
    avatar: "/booking/diana.jpg",
  },
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const STEPS = [
  {
    label: "Select Branch",
    desc: "Choose the branch nearest to your location.",
  },
  {
    label: "Select Service",
    desc: "Select the desired service from the available options.",
  },
  {
    label: "Select Staff",
    desc: "Choose your preferred staff member for the service.",
  },
  {
    label: "Select Date & Time",
    desc: "Pick a suitable date and time for your booking.",
  },
  { label: "Customer Detail", desc: "Enter your personal details." },
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const resetForm = () => {
    setStep(0);
    setSelectedService("");
    setSelectedStaff("");
    setSelectedDate("");
    setSelectedTime("");
    setForm({ name: "", email: "", phone: "", notes: "" });
    setSubmitted(false);
    setSubmitError("");
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  const canNext = () => {
    if (step === 0) return true;
    if (step === 1) return !!selectedService;
    if (step === 2) return !!selectedStaff;
    if (step === 3) return !!selectedDate && !!selectedTime;
    if (step === 4) return !!form.name && !!form.email && !!form.phone;
    return false;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    const serviceName =
      SERVICES.find((s) => s.id === selectedService)?.name ?? "";
    const staffName = STAFF.find((s) => s.id === selectedStaff)?.name ?? "";
    const servicePrice =
      SERVICES.find((s) => s.id === selectedService)?.price ?? "";

    const message = encodeURIComponent(
      `Hello Nail Voyage Saloon! I'd like to book an appointment.\n\n` +
        `📍 Branch: Motiv Hub — Spring Rd\n` +
        `💅 Service: ${serviceName} (${servicePrice})\n` +
        `👩 Staff: ${staffName}\n` +
        `📅 Date: ${selectedDate}\n` +
        `⏰ Time: ${selectedTime}\n\n` +
        `👤 Name: ${form.name}\n` +
        `📧 Email: ${form.email}\n` +
        `📞 Phone: ${form.phone}\n` +
        (form.notes ? `📝 Notes: ${form.notes}` : ""),
    );

    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          branch: BRANCH.name,
          service: serviceName,
          servicePrice,
          staff: staffName,
          date: selectedDate,
          time: selectedTime,
          customer: form,
        }),
      }).catch(() => null);

      const whatsappPhone = "256700485551";
      window.open(`https://wa.me/${whatsappPhone}?text=${message}`, "_blank");
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const todayMidnight = new Date();
  todayMidnight.setHours(0, 0, 0, 0);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);

  const prevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear((y) => y - 1);
    } else setCalMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear((y) => y + 1);
    } else setCalMonth((m) => m + 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="hidden md:flex flex-col w-64 shrink-0 bg-purple-600 p-6">
          <h2 className="text-white font-serif text-xl mb-8 font-bold">
            Book Appointment
          </h2>
          <div className="flex flex-col gap-0">
            {STEPS.map((s, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      i <= step
                        ? "bg-white border-white"
                        : "bg-transparent border-white/40"
                    }`}
                  >
                    {i < step ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#7C3AED"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${i === step ? "bg-purple-600" : "bg-white/30"}`}
                      />
                    )}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`w-0.5 h-10 mt-1 mb-1 transition-all ${i < step ? "bg-white" : "bg-white/25"}`}
                    />
                  )}
                </div>
                <div className="pb-8">
                  <p
                    className={`text-sm font-semibold leading-tight ${i <= step ? "text-white" : "text-white/50"}`}
                  >
                    {s.label}
                  </p>
                  <p
                    className={`text-xs mt-0.5 leading-snug ${i <= step ? "text-white/80" : "text-white/35"}`}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div>
              <h3 className="font-serif text-xl text-gray-800 font-bold">
                {STEPS[step].label}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5 md:hidden">
                {STEPS[step].desc}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
            >
              <svg
                width="18"
                height="18"
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

          {/* Step Content */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {/* Step 0: Select Branch */}
            {step === 0 && (
              <div
                className="border-2 border-purple-600 rounded-xl p-5 cursor-pointer bg-purple-50 shadow-sm"
                onClick={() => setStep(1)}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-purple-200">
                    <Image
                      src={BRANCH.image}
                      alt="Nail Voyage Saloon Motiv Hub Spring Road branch"
                      fill
                      sizes="64px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base">
                      {BRANCH.name}
                    </h4>
                    <p className="text-sm text-gray-400 mt-0.5">
                      {BRANCH.location}
                    </p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-100 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
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
                    {BRANCH.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
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
                    {BRANCH.email}
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((svc) => (
                  <div
                    key={svc.id}
                    onClick={() => setSelectedService(svc.id)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedService === svc.id
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {svc.name}
                      </h4>
                      {selectedService === svc.id && (
                        <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {svc.duration}
                      </span>
                      <span className="text-xs font-semibold text-purple-600">
                        {svc.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Select Staff */}
            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STAFF.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedStaff(member.id)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all flex items-center gap-3 ${
                      selectedStaff === member.id
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm truncate">
                        {member.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5 truncate">
                        {member.role}
                      </p>
                    </div>
                    {selectedStaff === member.id && (
                      <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Step 3: Select Date & Time */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={prevMonth}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
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
                    </button>
                    <span className="font-semibold text-gray-700 text-sm">
                      {MONTH_NAMES[calMonth]} {calYear}
                    </span>
                    <button
                      onClick={nextMonth}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    >
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

                  <div className="grid grid-cols-7 gap-1 text-center">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <div
                        key={d}
                        className="text-xs font-semibold text-gray-400 py-1"
                      >
                        {d}
                      </div>
                    ))}
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                      const dateObj = new Date(
                        calYear,
                        calMonth,
                        day,
                        0,
                        0,
                        0,
                        0,
                      );
                      const isPast = dateObj < todayMidnight;
                      const isSelected = selectedDate === dateStr;
                      const isToday =
                        day === new Date().getDate() &&
                        calMonth === new Date().getMonth() &&
                        calYear === new Date().getFullYear();

                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={isPast}
                          onClick={() => !isPast && setSelectedDate(dateStr)}
                          className={`w-full aspect-square rounded-full text-xs font-medium transition-all select-none
                            ${
                              isSelected
                                ? "bg-purple-600 text-white shadow-sm"
                                : isPast
                                  ? "text-gray-300 cursor-not-allowed"
                                  : isToday
                                    ? "border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-100"
                                    : "hover:bg-purple-100 text-gray-700 cursor-pointer"
                            }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedDate && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Available Times
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-2 rounded-lg text-xs font-medium border-2 transition-all ${
                            selectedTime === time
                              ? "border-purple-600 bg-purple-600 text-white"
                              : "border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-purple-50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Customer Details */}
            {step === 4 && !submitted && (
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="+256 7XX XXX XXX"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, notes: e.target.value }))
                    }
                    placeholder="Any special requests or notes..."
                    rows={3}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 transition-colors resize-none"
                  />
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-xs text-gray-600">
                  <p className="font-semibold text-gray-700 text-sm mb-2">
                    Booking Summary
                  </p>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Branch</span>
                    <span className="font-medium text-right">
                      Nail Voyage Saloon — Motiv Hub, Spring Rd
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Service</span>
                    <span className="font-medium">
                      {SERVICES.find((s) => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price</span>
                    <span className="font-medium text-purple-600">
                      {SERVICES.find((s) => s.id === selectedService)?.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Staff</span>
                    <span className="font-medium">
                      {STAFF.find((s) => s.id === selectedStaff)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date</span>
                    <span className="font-medium">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                </div>

                {submitError && (
                  <p className="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">
                    {submitError}
                  </p>
                )}
              </div>
            )}

            {/* Success Screen */}
            {step === 4 && submitted && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-gray-800 font-bold mb-2">
                  Booking Received!
                </h3>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Thank you, <strong>{form.name}</strong>! Your appointment
                  request at <strong>Nail Voyage Saloon — Motiv Hub</strong> has
                  been sent via WhatsApp. We will confirm shortly at{" "}
                  <strong>{form.phone}</strong>.
                </p>
                <div className="mt-4 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-xs text-green-700 max-w-xs">
                  💬 A WhatsApp message has been opened with your booking
                  details for the team to confirm.
                </div>
                <button
                  onClick={handleClose}
                  className="mt-6 px-8 py-3 bg-purple-600 text-white font-semibold text-sm rounded-full hover:bg-purple-700 transition-all"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          {!(step === 4 && submitted) && (
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() =>
                  step > 0 ? setStep((s) => s - 1) : handleClose()
                }
                className="px-5 py-2.5 border-2 border-gray-200 text-gray-600 text-sm font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                {step === 0 ? "Cancel" : "Back"}
              </button>

              {/* Mobile step dots */}
              <div className="flex items-center gap-1.5 md:hidden">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all ${
                      i === step
                        ? "w-5 h-2 bg-purple-600"
                        : i < step
                          ? "w-2 h-2 bg-purple-400"
                          : "w-2 h-2 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext()}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${
                    canNext()
                      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-sm"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canNext() || isSubmitting}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all flex items-center gap-2 ${
                    canNext() && !isSubmitting
                      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-sm"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
