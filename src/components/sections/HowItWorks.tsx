"use client";

import { COPY } from "@/lib/copy";
import SectionShell from "@/components/SectionShell";

export default function HowItWorks() {
  return (
    <SectionShell id="how-it-works" title={COPY.howItWorks.title} subtitle={COPY.howItWorks.sub}>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Diagram */}
        <div className="rounded-2xl border p-4">
          <Diagram />
        </div>

        {/* Textual bullets */}
        <div className="space-y-4">
          {COPY.howItWorks.layers.map((layer, i) => (
            <div key={i} className="rounded-xl border p-4">
              <h3 className="font-medium text-base">{layer.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{layer.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Diagram() {
  return (
    <svg
      role="img"
      aria-label="Signals flow through processing and models into a policy runtime and SDKs"
      viewBox="0 0 820 520"
      className="w-full h-auto"
    >
      <defs>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="6" floodOpacity="0.15" />
        </filter>

        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopOpacity=".04" />
          <stop offset="1" stopOpacity=".09" />
        </linearGradient>

        <style>
          {`
            .box { rx:16; fill:url(#g); stroke: currentColor; }
            .label { font: 600 14px ui-sans-serif, system-ui, -apple-system; }
            .sub   { font: 400 12px ui-sans-serif, system-ui, -apple-system; opacity:.75; }
            .arrow { stroke: currentColor; stroke-width:2; fill:none; marker-end: url(#arrowHead) }
            .ghost { opacity:.03 }
            @media (prefers-color-scheme: dark) { .ghost { opacity:.06 } }
          `}
        </style>

        <marker id="arrowHead" orient="auto" markerWidth="8" markerHeight="8" refX="5" refY="3.5">
          <path d="M0,0 L0,7 L7,3.5 z" fill="currentColor" />
        </marker>
      </defs>

      {/* background guide */}
      <rect x="0" y="0" width="820" height="520" className="ghost" fill="currentColor" />

      {/* 1. Signals */}
      <rect className="box" filter="url(#s)" x="40" y="40" width="220" height="90" />
      <text className="label" x="150" y="75" textAnchor="middle">Signals</text>
      <text className="sub" x="150" y="98" textAnchor="middle">EEG â€¢ EMG â€¢ eye â€¢ speech â€¢ IMU</text>

      {/* 2. Processing */}
      <rect className="box" filter="url(#s)" x="300" y="40" width="220" height="90" />
      <text className="label" x="410" y="75" textAnchor="middle">Processing</text>
      <text className="sub" x="410" y="98" textAnchor="middle">denoise â€¢ features â€¢ alignment</text>

      {/* 3. Intent Models */}
      <rect className="box" filter="url(#s)" x="560" y="40" width="220" height="90" />
      <text className="label" x="670" y="75" textAnchor="middle">Intent Models</text>
      <text className="sub" x="670" y="98" textAnchor="middle">decoders â€¢ personalization</text>

      {/* arrows top row */}
      <path className="arrow" d="M260,85 L300,85" />
      <path className="arrow" d="M520,85 L560,85" />

      {/* 4. Policy Runtime */}
      <rect className="box" filter="url(#s)" x="150" y="210" width="520" height="110" />
      <text className="label" x="410" y="245" textAnchor="middle">Policy Runtime</text>
      <text className="sub" x="410" y="268" textAnchor="middle">consent â€¢ scopes â€¢ rate limits â€¢ audit</text>

      {/* arrows down */}
      <path className="arrow" d="M670,130 C670,170 670,170 670,210" />
      <path className="arrow" d="M410,130 C410,170 410,170 410,210" />
      <path className="arrow" d="M150,130 C150,170 150,170 150,210" />

      {/* 5. SDKs & Apps */}
      <rect className="box" filter="url(#s)" x="40" y="380" width="740" height="90" />
      <text className="label" x="410" y="415" textAnchor="middle">SDKs & Apps</text>
      <text className="sub" x="410" y="438" textAnchor="middle">TypeScript/Rust SDKs â€¢ simulators â€¢ reference apps</text>

      {/* arrows bottom */}
      <path className="arrow" d="M410,320 C410,360 410,360 410,380" />
    </svg>
  );
}

