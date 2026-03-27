"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/capabilities", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/safety", label: "Safety" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger — 9-dot grid */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1"
        aria-label="Toggle menu"
      >
        <div className="grid grid-cols-3 gap-[3px]">
          {[...Array(9)].map((_, i) => (
            <span
              key={i}
              className="block w-[5px] h-[5px] rounded-full bg-white"
            />
          ))}
        </div>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in sidebar panel from right */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-[320px] sm:w-[380px] bg-gray-950 overflow-y-auto transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-8 py-8">
          {/* Top: Logo + Close */}
          <div className="flex items-center justify-between mb-10">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/images/logo-horizontal.png"
                alt="DataOne Construction"
                width={160}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-brand transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            At DataOne Construction, we are redefining mission-critical
            infrastructure with our innovative and sustainable data center
            construction solutions.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Our commitment to combining cutting-edge technology with 50+ years
            of electrical construction expertise sets us apart as leaders in
            the data center revolution.
          </p>

          {/* Nav Links */}
          <div className="space-y-5 mb-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-white text-base font-medium hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <h3 className="text-white font-semibold text-sm mb-1">
              Contact Us
            </h3>
            <div className="w-8 h-0.5 bg-brand mb-6" />

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#40bcab"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <p className="text-gray-400 text-sm">hello@dataone.eu</p>
                </div>
              </div>

              {/* Addresses */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#40bcab"
                    strokeWidth="2"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Addresses</p>
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="text-brand">NJ:</span> 1100 Grant Ave,
                    Franklinville, NJ 08322
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="text-brand">Vineland:</span> South
                    Lincoln Ave, Vineland, NJ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
