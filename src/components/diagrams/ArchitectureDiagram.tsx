// src/components/diagrams/ArchitectureDiagram.tsx
// Neurolect — Architecture (single lane; calibrated arrowheads; uniform padding)
// Grid: 20px. Row center y=200. Boxes 200×120 (rx=16). UTF-8 LF.

import * as React from "react";
type Props = React.SVGProps<SVGSVGElement>;

export default function ArchitectureDiagram(props: Props) {
  const W = 200, H = 120, CY = 200, PAD = 20, GAP = 14; // GAP keeps arrowheads out of boxes
  const X = [40, 300, 560, 820, 1080]; // Devices, HAL, AI&Translation, Runtime, BApps
  const TOP = CY - H / 2;

  return (
    <div className="w-full overflow-hidden rounded-xl border bg-background">
      <svg
        role="img"
        aria-labelledby="archTitle archDesc"
        viewBox="0 0 1280 420"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        {...props}
      >
        <title id="archTitle">Neurolect architecture overview</title>
        <desc id="archDesc">
          Devices → HAL (normalize + consent) → AI &amp; Translation → Command Runtime → BApps/SDK.
        </desc>

        {/* Marker sized in user space, calibrated so tip lands at line end minus ~2px */}
        <defs>
          <marker
            id="arrow-arch"
            viewBox="0 0 12 12"
            markerUnits="userSpaceOnUse"
            refX="10" refY="6"
            markerWidth="12" markerHeight="12"
            orient="auto"
          >
            <path d="M0 0 L12 6 L0 12 Z" fill="hsl(215,16%,47%)" />
          </marker>
        </defs>

        {/* Column labels */}
        <g fontFamily="ui-sans-serif, system-ui" fontSize="16" fill="currentColor" opacity="0.85">
          <text x={X[0] + W / 2} y={44} textAnchor="middle">Devices</text>
          <text x={X[1] + W / 2} y={44} textAnchor="middle">HAL</text>
          <text x={X[2] + W / 2} y={44} textAnchor="middle">AI &amp; Translation</text>
          <text x={X[3] + W / 2} y={44} textAnchor="middle">Command Runtime</text>
          <text x={X[4] + W / 2} y={44} textAnchor="middle">BApps</text>
        </g>

        {/* Boxes with uniform text padding (PAD) and tidy baselines */}
        <g fontFamily="ui-sans-serif, system-ui">
          {/* Devices */}
          <g transform={`translate(${X[0]}, ${TOP})`}>
            <rect width={W} height={H} rx="16" fill="hsl(210,40%,98%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="18" fill="currentColor">Sensors / SDKs</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">EEG • ECoG • MEG • Eye/EMG/IMU</text>
            <text x={PAD} y={76} fontSize="12" fill="hsl(215,16%,47%)">vendor streams (raw/preproc)</text>
          </g>

          {/* HAL */}
          <g transform={`translate(${X[1]}, ${TOP})`}>
            <rect width={W} height={H} rx="16" fill="hsl(222,100%,98%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="18" fill="currentColor">HAL adapters</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">normalize • time sync • mux</text>
            <text x={PAD} y={76} fontSize="12" fill="hsl(215,16%,47%)">drivers • device profiles</text>
            <text x={PAD} y={96} fontSize="11" fill="hsl(215,16%,47%)">policy boundary: consent • scopes • quotas</text>
          </g>

          {/* AI & Translation */}
          <g transform={`translate(${X[2]}, ${TOP})`}>
            <rect width={W} height={H} rx="16" fill="hsl(256,100%,97%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="18" fill="currentColor">AI &amp; Translation</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">preproc • features • intent</text>
            <text x={PAD} y={76} fontSize="12" fill="hsl(215,16%,47%)">linguo-emotional decoding</text>
          </g>

          {/* Runtime */}
          <g transform={`translate(${X[3]}, ${TOP})`}>
            <rect width={W} height={H} rx="16" fill="hsl(256,100%,97%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="18" fill="currentColor">Command Runtime</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">rules • planners • bytecode</text>
            <text x={PAD} y={76} fontSize="12" fill="hsl(215,16%,47%)">feedback / RL hooks</text>
          </g>

          {/* BApps */}
          <g transform={`translate(${X[4]}, ${TOP})`}>
            <rect width={W} height={H} rx="16" fill="hsl(141,80%,96%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="18" fill="currentColor">BApps / SDK</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">assistive comms • device ctrl</text>
            <text x={PAD} y={76} fontSize="12" fill="hsl(215,16%,47%)">apps • services • OS hooks</text>
          </g>
        </g>

        {/* Straight connectors (stop GAP before target box) */}
        <g stroke="hsl(215,16%,47%)" strokeWidth="2" markerEnd="url(#arrow-arch)">
          <line x1={X[0] + W} y1={CY} x2={X[1] - GAP} y2={CY} />
          <line x1={X[1] + W + GAP} y1={CY} x2={X[2] - GAP} y2={CY} />
          <line x1={X[2] + W + GAP} y1={CY} x2={X[3] - GAP} y2={CY} />
          <line x1={X[3] + W + GAP} y1={CY} x2={X[4] - GAP} y2={CY} />
        </g>
      </svg>
    </div>
  );
}
