"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  linkTo?: string;
}

const sizes = {
  sm: { width: 160, height: 60 },
  md: { width: 240, height: 90 },
  lg: { width: 340, height: 128 },
  xl: { width: 480, height: 180 },
};

export default function Logo({ className = "", size = "md", linkTo = "/" }: LogoProps) {
  const { width, height } = sizes[size];

  const svg = (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Soto & Segovia Imports"
    >
      <defs>
        {/* Main gold gradient — matches the shiny metallic from the logo */}
        <linearGradient id="goldMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A5800" />
          <stop offset="20%" stopColor="#C9A227" />
          <stop offset="40%" stopColor="#FFE566" />
          <stop offset="50%" stopColor="#FFF0A0" />
          <stop offset="60%" stopColor="#FFE566" />
          <stop offset="80%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#7A5800" />
        </linearGradient>

        {/* Lighter gradient for "IMPORTS" text */}
        <linearGradient id="goldImports" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A5800" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFE566" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7A5800" />
        </linearGradient>

        {/* Laurel leaf gradient */}
        <linearGradient id="goldLeaf" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="30%" stopColor="#C9A227" />
          <stop offset="55%" stopColor="#FFE566" />
          <stop offset="80%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Glow filter for the star */}
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ── Laurel Branch ── */}
      {/* Main stem curving from lower-left to upper-right */}
      <path
        d="M 88 115 Q 130 85 190 62 Q 230 50 260 42"
        stroke="url(#goldLeaf)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Leaf pairs along the branch */}
      {[
        { x: 100, y: 106, angle: -45 },
        { x: 114, y: 97, angle: -50 },
        { x: 128, y: 89, angle: -55 },
        { x: 143, y: 81, angle: -58 },
        { x: 158, y: 74, angle: -60 },
        { x: 173, y: 67, angle: -62 },
        { x: 188, y: 61, angle: -65 },
        { x: 203, y: 56, angle: -68 },
        { x: 218, y: 51, angle: -70 },
        { x: 233, y: 47, angle: -72 },
        { x: 248, y: 44, angle: -73 },
      ].map((leaf, i) => (
        <g key={i} transform={`translate(${leaf.x}, ${leaf.y})`}>
          {/* Upper leaf */}
          <ellipse
            rx="9"
            ry="4"
            transform={`rotate(${leaf.angle})`}
            fill="url(#goldLeaf)"
            opacity="0.95"
          />
          {/* Lower leaf (mirrored) */}
          <ellipse
            rx="8"
            ry="3.5"
            transform={`rotate(${leaf.angle + 25})`}
            fill="url(#goldLeaf)"
            opacity="0.75"
          />
        </g>
      ))}

      {/* Star / sparkle at the left end of the laurel */}
      <g filter="url(#starGlow)">
        <path
          d="M 88 115 L 91 107 L 94 115 L 102 118 L 94 121 L 91 129 L 88 121 L 80 118 Z"
          fill="url(#goldMain)"
          opacity="0.9"
        />
        <circle cx="91" cy="118" r="2.5" fill="#FFF8DC" opacity="0.95" />
      </g>

      {/* ── Main Title "SOTO & SEGOVIA" ── */}
      <text
        x="240"
        y="122"
        textAnchor="middle"
        fontSize="56"
        fontFamily="var(--font-cinzel), 'Cinzel', 'Trajan Pro', 'Times New Roman', serif"
        fontWeight="700"
        letterSpacing="3"
        fill="url(#goldMain)"
      >
        Soto &amp; Segovia
      </text>

      {/* ── Divider lines ── */}
      <line x1="100" y1="136" x2="183" y2="136" stroke="url(#goldImports)" strokeWidth="0.8" />
      <line x1="297" y1="136" x2="380" y2="136" stroke="url(#goldImports)" strokeWidth="0.8" />

      {/* ── "IMPORTS" subtitle ── */}
      <text
        x="240"
        y="151"
        textAnchor="middle"
        fontSize="14"
        fontFamily="var(--font-cinzel), 'Cinzel', 'Trajan Pro', 'Times New Roman', serif"
        fontWeight="400"
        letterSpacing="8"
        fill="url(#goldImports)"
      >
        IMPORTS
      </text>

      {/* ── Ornamental flourish below "IMPORTS" ── */}
      {/* Center diamond */}
      <path
        d="M 240 158 L 243 163 L 240 168 L 237 163 Z"
        fill="url(#goldImports)"
        opacity="0.85"
      />
      {/* Left scrollwork */}
      <path
        d="M 200 163 Q 210 158 218 163 Q 225 168 233 163"
        stroke="url(#goldImports)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right scrollwork */}
      <path
        d="M 280 163 Q 270 158 262 163 Q 255 168 247 163"
        stroke="url(#goldImports)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left dots */}
      <circle cx="200" cy="163" r="1.5" fill="url(#goldImports)" opacity="0.7" />
      <circle cx="195" cy="163" r="1" fill="url(#goldImports)" opacity="0.5" />
      {/* Right dots */}
      <circle cx="280" cy="163" r="1.5" fill="url(#goldImports)" opacity="0.7" />
      <circle cx="285" cy="163" r="1" fill="url(#goldImports)" opacity="0.5" />
    </svg>
  );

  if (linkTo) {
    return <Link href={linkTo} className="inline-block">{svg}</Link>;
  }
  return svg;
}
