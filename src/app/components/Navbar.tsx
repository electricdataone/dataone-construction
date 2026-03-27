"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/capabilities", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/safety", label: "Safety" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur border-brand-muted/30"
          : "bg-gray-950 border-gray-800"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Left: Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-brand"
                  : "text-gray-300 hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          {/* White logo for dark nav (top) */}
          <Image
            src="/images/emblem.png"
            alt="DataOne Construction"
            width={36}
            height={36}
            className={`h-8 w-auto sm:hidden ${scrolled ? "" : "brightness-0 invert"}`}
            priority
          />
          <Image
            src="/images/logo-horizontal.png"
            alt="DataOne Construction"
            width={200}
            height={45}
            className={`h-10 w-auto hidden sm:block transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Right: Login + Menu dots */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="https://portal.dataone.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-brand hover:bg-brand-light text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
          >
            Login
          </Link>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
