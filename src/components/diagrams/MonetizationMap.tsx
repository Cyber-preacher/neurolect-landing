// src/components/diagrams/MonetizationMap.tsx
// Neurolect — Monetization (orthogonal lanes; calibrated arrowheads; no stray captions)
// Grid: 20px. Core 260×120 at (510,120). UTF-8 LF.

import * as React from "react";
type Props = React.SVGProps<SVGSVGElement>;

export default function MonetizationMap(props: Props) {
  // Core
  const core = { left: 510, top: 120, w: 260, h: 120 };
  const coreMid = { cx: core.left + core.w / 2, cy: core.top + core.h / 2 };

  // Targets
  const topLeft = { left: 220, top: 40, w: 260, h: 100 }; // Runtime licensing
  const topRight = { left: 800, top: 40, w: 260, h: 100 }; // BApp marketplace
  const botLeft = { left: 200, top: 280, w: 300, h: 110 }; // Enterprise / On-prem
  const botRight = { left: 780, top: 280, w: 300, h: 110 }; // Adapter / Device cert
  const research = { left: 510, top: 300, w: 260, h: 110 }; // Research partnerships

  // Anchors (edge midpoints)
  const A = {
    coreRight: { x: core.left + core.w, y: coreMid.cy },
    coreLeft: { x: core.left, y: coreMid.cy },
    coreBottom: { x: coreMid.cx, y: core.top + core.h },

    licRight: { x: topLeft.left + topLeft.w, y: topLeft.top + topLeft.h / 2 },
    mrktLeft: { x: topRight.left, y: topRight.top + topRight.h / 2 },
    entRight: { x: botLeft.left + botLeft.w, y: botLeft.top + botLeft.h / 2 },
    certLeft: { x: botRight.left, y: botRight.top + botRight.h / 2 },
    resTop: { x: research.left + research.w / 2, y: research.top },
  };

  // Lanes & margins
  const LEFT_LANE = 470;   // safe vertical lane left of core
  const RIGHT_LANE = 790;  // safe vertical lane right of core
  const PAD = 20, GAP = 14;

  // Orthogonal (Manhattan) path helper:
  // Start (sx,sy) → laneX → down/up to ey → final horizontal to (ex,ey).
  // The last segment stops GAP short of the target edge so the arrow tip lands perfectly.
  const orthToLeftEdge = (sx: number, sy: number, laneX: number, targetX: number, ey: number) =>
    `M ${sx} ${sy} L ${laneX} ${sy} L ${laneX} ${ey} L ${targetX - GAP} ${ey}`;
  const orthToRightEdge = (sx: number, sy: number, laneX: number, targetX: number, ey: number) =>
    `M ${sx} ${sy} L ${laneX} ${sy} L ${laneX} ${ey} L ${targetX + GAP} ${ey}`;
  const downToTopEdge = (sx: number, sy: number, ex: number, targetY: number) =>
    `M ${sx} ${sy} L ${ex} ${sy} L ${ex} ${targetY - GAP}`;

  return (
    <div className="w-full overflow-hidden rounded-xl border bg-background">
      <svg
        role="img"
        aria-labelledby="bizTitle bizDesc"
        viewBox="0 0 1280 460"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        {...props}
      >
        <title id="bizTitle">Neurolect monetization map</title>
        <desc id="bizDesc">
          Runtime licensing, BApp marketplace, enterprise/on-prem, adapter/device certification, and research partnerships.
        </desc>

        <defs>
          <marker
            id="arrow-biz"
            viewBox="0 0 12 12"
            markerUnits="userSpaceOnUse"
            refX="10" refY="6"
            markerWidth="12" markerHeight="12"
            orient="auto"
          >
            <path d="M0 0 L12 6 L0 12 Z" fill="hsl(215,16%,47%)" />
          </marker>
        </defs>

        {/* Core */}
        <g transform={`translate(${core.left}, ${core.top})`} fontFamily="ui-sans-serif, system-ui">
          <rect width={core.w} height={core.h} rx="16" fill="hsl(222,100%,98%)" stroke="hsl(215,16%,80%)" />
          <text x={PAD} y={34} fontSize="18" fill="currentColor">Neurolect Runtime</text>
          <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">protocol • HAL • translator • mapper</text>
          <text x={PAD} y={76} fontSize="12" fill="hsl(215,16%,47%)">basis for licensing</text>
        </g>

        {/* Quadrants */}
        <g fontFamily="ui-sans-serif, system-ui">
          {/* Top-left */}
          <g transform={`translate(${topLeft.left}, ${topLeft.top})`}>
            <rect width={topLeft.w} height={topLeft.h} rx="16" fill="hsl(256,100%,97%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="16" fill="currentColor">Runtime licensing</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">per-device / MAU • edge or hosted</text>
          </g>

          {/* Top-right */}
          <g transform={`translate(${topRight.left}, ${topRight.top})`}>
            <rect width={topRight.w} height={topRight.h} rx="16" fill="hsl(141,80%,96%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="16" fill="currentColor">BApp marketplace</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">rev share • listing &amp; cert</text>
          </g>

          {/* Bottom-left */}
          <g transform={`translate(${botLeft.left}, ${botLeft.top})`}>
            <rect width={botLeft.w} height={botLeft.h} rx="16" fill="hsl(256,100%,97%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="16" fill="currentColor">Enterprise / On-prem</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">custom SLAs • privacy reqs • support</text>
          </g>

          {/* Bottom-right */}
          <g transform={`translate(${botRight.left}, ${botRight.top})`}>
            <rect width={botRight.w} height={botRight.h} rx="16" fill="hsl(141,80%,96%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="16" fill="currentColor">Adapter / Device cert</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">compatibility badges • partner tiers</text>
          </g>

          {/* Bottom-center: research */}
          <g transform={`translate(${research.left}, ${research.top})`}>
            <rect width={research.w} height={research.h} rx="16" fill="hsl(222,100%,98%)" stroke="hsl(215,16%,80%)" />
            <text x={PAD} y={34} fontSize="16" fill="currentColor">Research partnerships</text>
            <text x={PAD} y={56} fontSize="12" fill="hsl(215,16%,47%)">de-identified • consented datasets</text>
            <text x={PAD} y={76} fontSize="12" fill="hsl(215,16%,47%)">compliant licensing • IRB-style gates</text>
          </g>
        </g>

        {/* Orthogonal connectors (use lanes; stop GAP before edges) */}
        <g stroke="hsl(215,16%,47%)" strokeWidth="2" fill="none" markerEnd="url(#arrow-biz)">
          {/* Core → Marketplace (right lane → left edge) */}
          <path d={orthToLeftEdge(A.coreRight.x, A.coreRight.y, RIGHT_LANE, A.mrktLeft.x, A.mrktLeft.y)} />
          {/* Core → Licensing (left lane → right edge) */}
          <path d={orthToRightEdge(A.coreLeft.x, A.coreLeft.y, LEFT_LANE, A.licRight.x, A.licRight.y)} />
          {/* Core → Enterprise (left lane → right edge) */}
          <path d={orthToRightEdge(A.coreLeft.x, A.coreLeft.y, LEFT_LANE, A.entRight.x, A.entRight.y)} />
          {/* Core → Device cert (right lane → left edge) */}
          <path d={orthToLeftEdge(A.coreRight.x, A.coreRight.y, RIGHT_LANE, A.certLeft.x, A.certLeft.y)} />
          {/* Core → Research (straight down to top edge) */}
          <path d={downToTopEdge(A.coreBottom.x, A.coreBottom.y, A.resTop.x, A.resTop.y)} />
        </g>
      </svg>
    </div>
  );
}
