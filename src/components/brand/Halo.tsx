// src/components/brand/Halo.tsx
"use client";

import React from "react";

/**
 * Animated concentric halo (neon cyan → pink), inspired by the moodboard.
 * Respects prefers-reduced-motion. Pure SVG; no deps.
 */
export default function Halo({
  size = 540,
  lines = 7,
  thickness = 1.8,
  className = "",
  ariaLabel = "Aureole halo animation",
}: {
  size?: number;
  lines?: number;
  thickness?: number;
  className?: string;
  ariaLabel?: string;
}) {
  const center = size / 2;
  const maxR = center * 0.9;

  // Slightly irregular radii & speeds for organic motion
  const radii = Array.from({ length: lines }, (_, i) => maxR - i * (maxR / (lines + 4)));
  const speeds = Array.from({ length: lines }, (_, i) => 10 + (i * 6)); // seconds

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      <defs>
        <linearGradient id="haloGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(186 92% 58%)" />
          <stop offset="100%" stopColor="hsl(313 92% 68%)" />
        </linearGradient>
        {radii.map((r, idx) => (
          <path
            key={`p${idx}`}
            id={`haloPath${idx}`}
            d={`
              M ${center - r}, ${center}
              a ${r},${r} 0 1,0 ${r * 2},0
              a ${r},${r} 0 1,0 -${r * 2},0
            `}
          />
        ))}
      </defs>

      <g style={{ mixBlendMode: "screen" }} className="prefers-reduced-motion">
        {radii.map((_, idx) => (
          <use
            key={`u${idx}`}
            href={`#haloPath${idx}`}
            stroke="url(#haloGrad)"
            strokeWidth={thickness}
            fill="none"
            strokeLinecap="round"
            strokeDasharray="16 22"
            style={{
              opacity: 0.9 - idx * 0.09,
              filter: "drop-shadow(0 0 12px hsl(186 92% 58% / .35))",
              animation: `halo-drift ${speeds[idx]}s var(--nl-ease-soft) infinite`,
            }}
          />
        ))}
      </g>
    </svg>
  );
}
