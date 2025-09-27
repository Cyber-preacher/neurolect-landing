// src/components/ui/Tile.tsx
import Link from "next/link";
import React from "react";

type TileProps = {
  title: string;
  desc?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  badge?: string;
};

export default function Tile({ title, desc, href, children, className = "", badge }: TileProps) {
  const inner = (
    <article className={`tile ${className}`}>
      <div className="tile-body">
        {badge && <span className="chip mb-3">{badge}</span>}
        <h3 className="tile-title text-base sm:text-lg">{title}</h3>
        {desc ? <p className="tile-desc mt-2 text-sm leading-relaxed">{desc}</p> : null}
        {children}
        {href ? (
          <div className="mt-4">
            <span className="tile-cta text-sm">Learn more →</span>
          </div>
        ) : null}
      </div>
    </article>
  );

  return href ? (
    <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {inner}
    </Link>
  ) : (
    inner
  );
}
