"use client";

import { useState, FormEvent } from "react";
import {
  ArrowRightIcon,
  XMarkIcon as TwitterIcon,
  PencilSquareIcon as MediumIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement actual submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      setFullName("");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Main Container */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm text-gray-400 tracking-wider mb-8 sm:mb-12">
            Qy9 App | End-to-end CRM
          </p>

          {/* Main Heading */}
          <div className="mb-8 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-4 sm:mb-6">
              Join the waitlist for
            </h1>

            {/* Subtitle with highlighted web3 */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              the Manage{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                web3
              </span>{" "}
              Relationships
            </h2>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md mb-12 sm:mb-16">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            {/* Full Name Input */}
            <div>
              <input
                type="text"
                placeholder="Full name..."
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Address email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-lg text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base group"
            >
              <span>Join the waitlist</span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>
        </div>

        {/* Footer Social Links */}
        <div className="flex items-center gap-8 sm:gap-10">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <TwitterIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-white transition-colors duration-200" />
            <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
              Twitter
            </span>
            <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-200">
              @ciphercast
            </span>
          </a>

          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <MediumIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-white transition-colors duration-200" />
            <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
              Medium
            </span>
            <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-200">
              @ciphercast
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
    </div>
  );
}
