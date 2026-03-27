import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
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
  { href: "/projects", label: "Projects" },
  { href: "/safety", label: "Safety" },
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
        <Navbar />

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
