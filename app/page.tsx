"use client";

import { useState, SubmitEvent, useEffect } from "react";
import {
  ArrowRightIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import mlogo from "../public/images/logos/icon.png";

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api2.swiv.xyz";
      const response = await fetch(`${apiUrl}/api/waitlist/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          xUsername: username,
          email: email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to join waitlist");
      }

      setSuccessMessage("🎉 Successfully joined the waitlist! We'll be in touch soon.");
      setShowSuccessModal(true);
      setUsername("");
      setEmail("");

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setErrorMessage(message);

      // Clear error message after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05070d] text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]" />

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
        <nav className="w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src={mlogo} alt="Swiv Logo" className="w-8 h-8" />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <Link href="#" className="hover:text-white transition">
              About
            </Link>
            <Link href="#" className="hover:text-white transition">
              Docs(soon)
            </Link>
            <Link href="#" className="hover:text-white transition">
              Roadmap(soon)
            </Link>
          </div>

          {/* CTA */}
          <button className="px-5 py-2 text-sm font-medium rounded-xl bg-[#8b5cf6] hover:opacity-90 transition">
            Join Waitlist
          </button>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-44 text-center">

        {/* Main Heading with Animated Carousel */}
        <h1 className="text-4xl md:text-6xl font-light leading-normal md:leading-20 text-gray-100 max-w-5xl">
          Trade your Predictions on
          <div className="relative h-10 md:h-20 flex items-center justify-center mt-2">
            <AnimatedCarousel />
          </div>
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-gray-400 max-w-2xl text-base sm:text-lg">
          Precision-based prediction market with private execution powered by MagicBlock.
          Make numerical forecasts on real word outcomes like crypto, politics e.t.c
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 mt-10"
        >
          {/* Success Message */}
          {successMessage && (
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm animate-fade-in">
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-fade-in">
              {errorMessage}
            </div>
          )}

          {/* Username */}
          <div className="relative">
            <UserIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <input
              type="text"
              placeholder="X username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:bg-white/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <EnvelopeIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <input
              type="email"
              placeholder="Email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:bg-white/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl bg-[#8b5cf6] hover:opacity-90 transition flex items-center justify-center gap-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Joining..." : "Request Early Access"}
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </form>

        {/* Social */}
        <div className="mt-12 flex flex-col items-center gap-4 px-6 py-4 rounded-xl  transition">
          <span className="text-gray-400 text-sm">Follow us on X for more updates</span>
          <a
            href="https://x.com/SwivOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8b5cf6] hover:text-white transition group"
          >
            <span className="font-medium">@SwivOfficial</span>
            <FaXTwitter className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Success Share Modal */}
      <SuccessShareModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}

function AnimatedCarousel() {
  const [current, setCurrent] = useState(0);
  const items = ["Crypto Prices", "Stock Prices", "Political Events", "Real-World Events"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute text-[#8b5cf6] font-light text-4xl sm:text-5xl lg:text-6xl transition-all duration-500 ${index === current
            ? "opacity-100 translate-y-0"
            : index === (current - 1 + items.length) % items.length
              ? "opacity-0 translate-y-16"
              : "opacity-0 -translate-y-16"
            }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

interface SuccessShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SuccessShareModal({ isOpen, onClose }: SuccessShareModalProps) {
  if (!isOpen) return null;

  const shareText = "Just applied for @SwivOfficial early access, the privacy-first prediction market to make precision-based forecasts on crypto, politics & real-world events. Join the waitlist: https://swiv.xyz ";
  const xShareUrl = `https://x.com/intent/post?text=${encodeURIComponent(shareText)}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto relative w-full max-w-md bg-[#05070d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-modal-in">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-[#8b5cf6]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Glass Background */}
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent backdrop-blur-xl pointer-events-none" />

          {/* Content */}
          <div className="relative px-8 py-10 text-center">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#8b5cf6]/30 to-transparent border border-[#8b5cf6]/50 flex items-center justify-center">
                <div className="text-3xl">✓</div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl font-light text-white mb-3">
              🎉 Successfully joined the waitlist!
            </h2>

            {/* Message */}
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              You're now on our exclusive early access waitlist. Share the word and let others know you're joining the revolution in prediction markets.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              {/* Share on X Button */}
              <a
                href={xShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] transition-all duration-200 text-white font-medium group"
              >
                <FaXTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Share on X</span>
              </a>

              {/* Maybe Later Button */}
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 text-gray-300 hover:text-white font-medium"
              >
                Maybe Later
              </button>
            </div>

            {/* Close Icon */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}