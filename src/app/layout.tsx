import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DataOne Construction",
  description:
    "DataOne Construction — Powering the infrastructure behind the world's largest AI data centers. A partnership between Data One and Byers Industrial Services.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/safety", label: "Safety" },
  { href: "/careers", label: "Careers" },
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
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-muted/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="DataOne Construction"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <Image
                  src="/logo.jpg"
                  alt="DataOne Construction"
                  width={160}
                  height={48}
                  className="h-10 w-auto brightness-0 invert mb-4"
                />
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Powering the infrastructure behind the world&apos;s largest AI
                  data centers. A partnership between Data One and Byers
                  Industrial Services.
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
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} DataOne Construction. All rights
              reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
