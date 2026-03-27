"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
              className={`block w-[5px] h-[5px] rounded-full transition-colors ${
                scrolled ? "bg-gray-700" : "bg-white"
              }`}
            />
          ))}
        </div>
      </button>

      {/* Portal backdrop + sidebar to body so they escape navbar stacking context */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className={`fixed inset-0 z-[90] bg-black/40 transition-opacity duration-300 ${
                open ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setOpen(false)}
            />

            {/* Slide-in sidebar panel — wider, matching dataone.eu */}
            <div
              className={`fixed top-0 right-0 z-[100] h-full w-full sm:w-[420px] md:w-[480px] bg-gray-950 overflow-y-auto transition-transform duration-300 ease-in-out ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="px-8 sm:px-10 py-8 min-h-full flex flex-col">
                {/* Top: Close + Login */}
                <div className="flex items-center justify-between mb-10">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/images/logo-horizontal.png"
                      alt="DataOne Construction"
                      width={180}
                      height={40}
                      className="h-9 sm:h-10 w-auto brightness-0 invert"
                    />
                  </Link>
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://portal.dataone.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand hover:bg-brand-light text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
                    >
                      Login
                    </Link>
                    <button
                      onClick={() => setOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Close menu"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
                  At DataOne Construction, we are redefining mission-critical
                  infrastructure with our innovative and sustainable data center
                  construction solutions.
                </p>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10">
                  Our commitment to combining cutting-edge technology with 50+ years
                  of electrical construction expertise sets us apart as leaders in
                  the data center revolution.
                </p>

                {/* Nav Links */}
                <div className="space-y-1 mb-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block text-xl sm:text-2xl font-medium py-2 transition-colors ${
                        pathname === link.href
                          ? "text-brand"
                          : "text-white hover:text-brand"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Contact */}
                <div className="border-t border-gray-800 pt-6 mt-auto">
                  <div className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#40bcab"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13 2 4" />
                    </svg>
                    <a
                      href="mailto:hello@dataone.eu"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      hello@dataone.eu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
