"use client";

import Image from "next/image";
import { useState } from "react";

interface LeadershipCardProps {
  name: string;
  bio: string;
  image: string;
  portrait?: boolean;
}

export default function LeadershipCard({ name, bio, image, portrait }: LeadershipCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-xl border border-brand-muted/30 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer sm:cursor-default"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative aspect-[3/4] bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover ${portrait ? "object-center" : "object-[center_25%]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-3 sm:p-5">
        <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
          {name}
        </h3>
        <p className={`mt-1 sm:mt-2 text-gray-600 text-[10px] sm:text-xs leading-relaxed ${
          expanded ? "" : "line-clamp-4"
        } sm:line-clamp-none`}>
          {bio}
        </p>
        <button className="sm:hidden text-brand text-[10px] font-semibold mt-1">
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
}
