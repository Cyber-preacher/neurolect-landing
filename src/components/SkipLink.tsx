// src/components/SkipLink.tsx
"use client";
import * as React from "react";

/**
 * Keyboard-first skip link. Appears on focus and jumps to #main.
 */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50
                 focus:rounded-xl focus:bg-background focus:text-foreground
                 focus:px-4 focus:py-2 focus:shadow-lg border"
    >
      Skip to content
    </a>
  );
}

