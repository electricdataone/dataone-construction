"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/safety", label: "Safety" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col items-center pt-8 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-700 hover:text-brand transition-colors py-3 px-8 w-full text-center"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-brand text-white font-semibold px-8 py-3 rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
