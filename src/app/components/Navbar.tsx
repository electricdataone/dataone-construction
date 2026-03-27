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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5 sm:py-4 flex items-center justify-between">
        {/* Left: Nav links (large desktop only — hidden below 1024px to prevent logo overlap) */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
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
        <Link href="/" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Image
            src="/images/logo-horizontal-color.png"
            alt="DataOne Construction"
            width={200}
            height={45}
            className="h-10 w-auto sm:h-10"
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
