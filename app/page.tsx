"use client";

import { useState, FormEvent } from "react";
import {
  ArrowRightIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import logo from "../../../public/images/logos/swiv-white-nobg.png"
import blogo from "../../../public/images/logos/swiv-black-nobg.png"
import mlogo from "../../../public/images/logos/icon.png"
import Image from "next/image";

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setUsername("");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#05070d] text-white overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,101,242,0.15),transparent_70%)]" />

      <header className="fixed z-50 px-2 md:px-4 top-0 left-0 right-0 w-full flex justify-center bg-background/10 backdrop-blur-xl border-b border-border pointer-events-none">
        <nav
          className={`flex items-center justify-between px-0 sm-px-2 py-2 shadow-lg pointer-events-auto
          transition-all duration-500 ease-in-out
          ${
            // scrolled
            "w-full max-w-7xl rounded-none shadow-md translate-y-0"
            // "w-[95%] max-w-6xl mt-6 rounded-2xl shadow-xl"
            }`}
        >
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href={"/"} className="flex items-center">
              <Image className="w-16 hidden dark:md:flex" src={logo} alt="logo" />
              <Image className="w-16 hidden md:flex dark:hidden" src={blogo} alt="logo" />
              <Image className="w-8 md:hidden flex" src={mlogo} alt="mlogo" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="relative px-6 py-2 text-sm font-semibold text-white bg-linear-to-r from-primary to-accent rounded-xl transition-smooth hover:shadow-lg hover:shadow-primary/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Join Waitlist
            </button>
          </div>
        </nav>
      </header>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Top Label */}
        <p className="text-xs tracking-widest text-gray-400 mb-16">
          Qy9 App | End-to-end CRM
        </p>

        {/* Heading */}
        <div className="text-center space-y-2 mb-14">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-200">
            Join the waitlist for
          </h1>

          <h2 className="text-4xl sm:text-5xl font-light text-gray-200">
            the Manage{" "}
            <span className="text-[#8b5cf6]">
              web3
            </span>{" "}
            Relationships
          </h2>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 mb-20"
        >
          {/* X Username Input */}
          <div className="relative">
            <UserIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="X username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-400/40 focus:bg-white/10 transition"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <EnvelopeIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              placeholder="Email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-400/40 focus:bg-white/10 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] transition flex items-center justify-center gap-2 text-sm font-medium disabled:opacity-50"
          >
            Join the waitlist
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </form>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/swiv0fficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaXTwitter className="w-5 h-5" />
            <span className="text-sm">@swiv0fficial</span>
          </a>
        </div>
      </div>
    </div>
  );
}