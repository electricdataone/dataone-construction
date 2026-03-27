"use client";

import Image from "next/image";

export default function SpinningBadge() {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
      {/* Rotating text circle */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin-slow"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        {/* Outer circle ring */}
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.5"
        />
        {/* Rotating text */}
        <text
          fill="rgba(255,255,255,0.6)"
          fontSize="12"
          fontWeight="500"
          letterSpacing="2.5"
        >
          <textPath href="#circlePath" startOffset="0%">
            Building a Greener Digital Future • Powering AI •
          </textPath>
        </text>
      </svg>

      {/* Center emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/emblem.png"
          alt="DataOne"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />
      </div>

      {/* Diagonal green lines (top-right decorative element) */}
      <div className="absolute -top-8 -right-16 sm:-top-10 sm:-right-20 w-32 sm:w-40 h-48 sm:h-56 overflow-hidden opacity-40 pointer-events-none">
        <div className="flex gap-2 rotate-[-35deg] origin-center translate-x-4 -translate-y-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-[3px] bg-brand rounded-full"
              style={{ height: `${80 + i * 12}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
