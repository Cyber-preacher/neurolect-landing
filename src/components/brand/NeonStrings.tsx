// src/components/brand/NeonStrings.tsx
import React from "react";

type Props = {
  className?: string;
  density?: number;    // number of rings (6–14 looks good)
  speed?: number;      // base seconds for dash animation
  intensity?: number;  // 0..1 global opacity
};

/**
 * Animated neon “threads” background.
 * GPU-friendly: SVG strokes + CSS dash animation + blur, no heavy JS loop.
 */
export default function NeonStrings({
  className = "",
  density = 10,
  speed = 32,
  intensity = 0.22,
}: Props) {
  const size = 1000; // virtual viewport
  const cx = size / 2;
  const cy = size / 2;

  // build a set of elliptical loop paths around center
  const rings = Array.from({ length: density }).map((_, i) => {
    const r = 180 + i * 28;                       // radius
    const ex = r * (1 + (i % 3 === 0 ? 0.15 : 0.05)); // ellipse x-axis
    const ey = r * (1 + (i % 2 === 0 ? 0.08 : 0.02)); // ellipse y-axis
    const rot = (i * 360) / density + (i % 2 ? 14 : -12);
    const dash = 900 + i * 80;                    // dash length
    const dur = speed + i * 2.1;                  // seconds
    const id = `ring-${i}`;

    // create a looped oval path using two arcs
    const d = [
      `M ${cx - ex} ${cy}`,
      `a ${ex} ${ey} ${rot} 1 0 ${ex * 2} 0`,
      `a ${ex} ${ey} ${rot} 1 0 ${-ex * 2} 0`,
    ].join(" ");

    return (
      <path
        key={id}
        d={d}
        className="ns-path"
        style={{
          strokeDasharray: dash,
          animationDuration: `${dur}s`,
        }}
      />
    );
  });

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid slice"
        className="block h-full w-full"
        role="img"
        aria-label="Neon threads background"
      >
        <defs>
          <linearGradient id="nl-neon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(186 92% 58%)" />
            <stop offset="60%" stopColor="hsl(313 82% 66%)" />
            <stop offset="100%" stopColor="hsl(186 92% 58%)" />
          </linearGradient>
          <filter id="nl-soft-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            .ns-root { mix-blend-mode: screen; opacity: ${intensity}; filter: url(#nl-soft-glow); }
            .ns-path {
              fill: none;
              stroke: url(#nl-neon);
              stroke-width: 2.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-dashoffset: 0;
              animation: ns-dash linear infinite;
            }
            @keyframes ns-dash { to { stroke-dashoffset: -2000; } }
            @media (prefers-reduced-motion: reduce) {
              .ns-path { animation: none !important; }
            }
          `}</style>
        </defs>
        <g className="ns-root">{rings}</g>
      </svg>
    </div>
  );
}
