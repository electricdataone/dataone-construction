"use client";

import Image from "next/image";

export default function GreenSpinningBadge() {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
      {/* Green background circle with thin dark border */}
      <div className="absolute inset-[5%] rounded-full bg-brand border-2 border-gray-900/40" />

      {/* Rotating text circle */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin-slow"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="greenCirclePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        {/* Outer circle ring */}
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="rgba(64,188,171,0.3)"
          strokeWidth="1"
        />
        {/* Rotating text */}
        <text
          fill="#1a1a1a"
          fontSize="14"
          fontWeight="600"
          letterSpacing="7"
        >
          <textPath href="#greenCirclePath" startOffset="0%">
            Powering AI and Sustainability
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
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 brightness-0"
        />
      </div>
    </div>
  );
}
