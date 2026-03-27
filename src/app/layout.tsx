import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./components/MobileNav";
import RecaptchaBadge from "./components/RecaptchaBadge";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DataOne Construction | Giga-Scale Data Center Electrical",
  description:
    "DataOne Construction — Powering the infrastructure behind the world's largest AI data centers. 50+ years of electrical construction excellence.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/capabilities", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <RecaptchaBadge />
        {/* Navigation — dark bar matching dataone.eu */}
        <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            {/* Left: Nav links (desktop) */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-brand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center: Logo */}
            <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
              <Image
                src="/images/emblem.png"
                alt="DataOne Construction"
                width={36}
                height={36}
                className="h-8 w-auto sm:hidden brightness-0 invert"
                priority
              />
              <Image
                src="/images/logo-horizontal.png"
                alt="DataOne Construction"
                width={200}
                height={45}
                className="h-10 w-auto hidden sm:block brightness-0 invert"
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

        {/* Page Content */}
        <main className="overflow-x-hidden">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
              <div className="sm:col-span-2">
                <Image
                  src="/images/logo-horizontal.png"
                  alt="DataOne Construction"
                  width={200}
                  height={45}
                  className="h-8 sm:h-10 w-auto brightness-0 invert mb-4"
                />
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Powering the infrastructure behind the world&apos;s largest AI
                  data centers. 50+ years of electrical construction excellence.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">
                  Navigation
                </h4>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">
                  Headquarters
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Franklinville, NJ
                  <br />
                  1-800-505-9225
                </p>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mt-6 mb-4">
                  Project Office
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Vineland, NJ
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 text-center text-xs sm:text-sm text-gray-500">
              &copy; {new Date().getFullYear()} DataOne Construction. All rights
              reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
