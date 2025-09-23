// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60svh] max-w-2xl flex-col items-start justify-center gap-6 px-4 py-16">
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
        404 â€” Page not found
      </div>

      <h1 className="text-4xl font-semibold tracking-tight">We canâ€™t find that page</h1>
      <p className="text-muted-foreground">
        The URL might be wrong or the page moved. Try our home page or the investors page.
      </p>

      <div className="flex flex-wrap gap-3">
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
        <Link
          href="/privacy"
          className="inline-flex items-center rounded-2xl border px-4 py-2 font-medium hover:opacity-90"
        >
          Privacy
        </Link>
      </div>

      <p className="text-xs text-muted-foreground">
        If you expected something here, ping us and weâ€™ll help.
      </p>
    </main>
  );
}

