// src/components/ui/textarea.tsx
"use client";

import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

/**
 * Shadcn-style Textarea with forwardRef.
 * Matches your token-based theme (bg-background, text-foreground, border).
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={
          "flex min-h-[120px] w-full rounded-xl border bg-background px-3 py-2 " +
          "text-sm text-foreground ring-offset-background " +
          "placeholder:text-muted-foreground " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
          "disabled:cursor-not-allowed disabled:opacity-50 " +
          className
        }
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
