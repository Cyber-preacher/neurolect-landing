// src/components/diagrams/PipelineDiagram.tsx
// Neurolect — Signal → Meaning pipeline (calibrated arrows; feedback from runtime→features)
// Grid: 20px. Boxes 220×120. Centers y=200. UTF-8 LF.

import * as React from "react";
type Props = React.SVGProps<SVGSVGElement>;

export default function PipelineDiagram(props: Props) {
  const CY = 200, PAD = 20, W = 220, H = 120, GAP = 14;
  const stages = [
    { x: 80, title: "Preprocessing", sub: "ICA • filters • artifact rm" },
    { x: 340, title: "Feature extraction", sub: "CNN • Transformer encoders" },
    { x: 600, title: "Intent & affect", sub: "semantic + coarse affect" },
    { x: 860, title: "Command mapper", sub: "rules • planners" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border bg-background">
      <svg
        role="img"
        aria-labelledby="pipeTitle pipeDesc"
        viewBox="0 0 1280 440"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        {...props}
      >
        <title id="pipeTitle">Signal to Meaning pipeline</title>
        <desc id="pipeDesc">
          Preprocessing → Feature extraction → Intent &amp; affect → Command mapper → BApp/OS; feedback refines features.
        </desc>

        <defs>
          <marker
            id="arrow-pipe"
            viewBox="0 0 12 12"
            markerUnits="userSpaceOnUse"
            refX="10" refY="6"
            markerWidth="12" markerHeight="12"
            orient="auto"
          >
            <path d="M0 0 L12 6 L0 12 Z" fill="hsl(215,16%,47%)" />
          </marker>
        </defs>

        {/* Stages */}
        {stages.map((b, i) => (
          <g key={i} transform={`translate(${b.x}, ${CY - H / 2})`} fontFamily="ui-sans-serif, system-ui">
            <rect width={W} height={H} rx="16" fill="hsl(256,100%,97%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="18" fill="currentColor">{b.title}</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">{b.sub}</text>
          </g>
        ))}

        {/* Output */}
        <g transform="translate(1120, 160)" fontFamily="ui-sans-serif, system-ui">
          <rect width="120" height="80" rx="12" fill="hsl(141,80%,96%)" stroke="hsl(215,16%,80%)" />
          <text x={PAD - 4} y={34} fontSize="14" fill="currentColor">BApp / OS</text>
          <text x={PAD - 4} y={54} fontSize="12" fill="hsl(215,16%,47%)">actions • text</text>
        </g>

        {/* Forward arrows (stop GAP before next box) */}
        <g stroke="hsl(215,16%,47%)" strokeWidth="2" markerEnd="url(#arrow-pipe)">
          <line x1={stages[0].x + W} y1={CY} x2={stages[1].x - GAP} y2={CY} />
          <line x1={stages[1].x + W + GAP} y1={CY} x2={stages[2].x - GAP} y2={CY} />
          <line x1={stages[2].x + W + GAP} y1={CY} x2={stages[3].x - GAP} y2={CY} />
          <line x1={1080} y1={CY} x2={1120 - GAP} y2={CY} />
        </g>

        {/* Feedback loop: Command mapper → Feature extraction (below boxes) */}
        {/* Start at mapper center below; end at features center below */}
        <path
          d="M 970 260 C 970 340, 450 340, 450 260"
          fill="none"
          stroke="hsl(215,16%,47%)"
          strokeWidth="2"
          markerEnd="url(#arrow-pipe)"
        />
      </svg>
    </div>
  );
}
