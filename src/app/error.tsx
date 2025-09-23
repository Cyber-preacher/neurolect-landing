// src/app/error.tsx
"use client";

import * as React from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Best-effort logging (dev only)
    if (process.env.NODE_ENV !== "production") {
      console.error("[app:error]", error?.message, error?.digest);
    }
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60svh] max-w-2xl flex-col items-start justify-center gap-6 px-4 py-16">
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
        500 â€” Something went wrong
      </div>

      <h1 className="text-4xl font-semibold tracking-tight">We hit a snag</h1>
      <p className="text-muted-foreground">
        An unexpected error occurred. You can try again or head back home.
      </p>

      {error?.digest && (
        <p className="text-xs text-muted-foreground">
          Error ID: <code>{error.digest}</code>
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center rounded-2xl border px-4 py-2 font-medium hover:opacity-90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded-2xl border px-4 py-2 font-medium hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href="/investors"
          className="inline-flex items-center rounded-2xl border px-4 py-2 font-medium hover:opacity-90"
        >
          Investors
        </Link>
      </div>

      <p className="text-xs text-muted-foreground">
        If this keeps happening, contact us and include the Error ID.
      </p>
    </main>
  );
}

