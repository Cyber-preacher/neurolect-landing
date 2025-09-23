"use client";

import SectionShell from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export default function Moat() {
  const items = COPY.moat.bullets;
  return (
    <SectionShell id="moat" title={COPY.moat.title} subtitle={COPY.moat.sub}>
      <div className="grid gap-6 md:grid-cols-5">
        {/* Left: bullets */}
        <div className="md:col-span-3 space-y-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border p-4">
              <h3 className="text-sm font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>

        {/* Right: mini-diagram */}
        <div className="md:col-span-2">
          <div className="rounded-2xl border p-4">
            <MiniDiagram />
          </div>
          {COPY.moat.callout && (
            <p className="mt-3 text-xs text-muted-foreground">{COPY.moat.callout}</p>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

function MiniDiagram() {
  // Simple layered motif â€“ complements HowItWorks visually
  return (
    <svg role="img" aria-label="Moat diagram" viewBox="0 0 520 360" className="w-full h-auto">
      <defs>
        <linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopOpacity=".04" />
          <stop offset="1" stopOpacity=".10" />
        </linearGradient>
        <filter id="d" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="6" floodOpacity="0.15" />
        </filter>
        <style>
          {`
            .box { rx:14; fill:url(#m); stroke: currentColor; }
            .title { font: 600 13px ui-sans-serif, system-ui, -apple-system; }
            .sub { font: 400 11px ui-sans-serif, system-ui, -apple-system; opacity:.75; }
            .arrow { stroke: currentColor; stroke-width:2; fill:none; marker-end: url(#ah) }
          `}
        </style>
        <marker id="ah" orient="auto" markerWidth="8" markerHeight="8" refX="5" refY="3.5">
          <path d="M0,0 L0,7 L7,3.5 z" fill="currentColor" />
        </marker>
      </defs>

      {/* Layers */}
      <rect className="box" filter="url(#d)" x="20" y="20" width="480" height="64" />
      <text className="title" x="260" y="48" textAnchor="middle">Neurosignature Schema</text>
      <text className="sub" x="260" y="66" textAnchor="middle">portable, revocable, provenance-aware</text>

      <rect className="box" filter="url(#d)" x="20" y="104" width="480" height="64" />
      <text className="title" x="260" y="132" textAnchor="middle">Policy Runtime</text>
      <text className="sub" x="260" y="150" textAnchor="middle">consent â€¢ scopes â€¢ rate limits â€¢ audit</text>

      <rect className="box" filter="url(#d)" x="20" y="188" width="480" height="64" />
      <text className="title" x="260" y="216" textAnchor="middle">Hardware Drivers</text>
      <text className="sub" x="260" y="234" textAnchor="middle">EEG/EMG/eye/speech/IMU adapters</text>

      <rect className="box" filter="url(#d)" x="20" y="272" width="480" height="64" />
      <text className="title" x="260" y="300" textAnchor="middle">Evaluation Harness</text>
      <text className="sub" x="260" y="318" textAnchor="middle">benchmarks â€¢ safety tests â€¢ red-team</text>

      {/* arrows */}
      <path className="arrow" d="M260,84 L260,104" />
      <path className="arrow" d="M260,168 L260,188" />
      <path className="arrow" d="M260,252 L260,272" />
    </svg>
  );
}

