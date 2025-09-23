// src/components/sections/Section.tsx
"use client";

import * as React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Simple layout wrapper for homepage/internals sections.
 * - Adds vertical rhythm
 * - Centers to max width
 * - Optional title + subtitle
 */
export default function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <header className="mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

