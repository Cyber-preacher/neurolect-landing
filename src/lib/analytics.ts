// src/lib/analytics.ts

/**
 * Type-safe wrapper for Plausible (or similar) custom events.
 * Avoids `any`; uses structured, serializable props.
 */

type Primitive = string | number | boolean | null;
export type AnalyticsProps = Record<string, Primitive>;

declare global {
  interface Window {
    plausible?: ((eventName: string, options?: { props?: AnalyticsProps }) => void) & {
      q?: unknown[];
    };
  }
}

/**
 * Queue-friendly safe caller: works if script hasn't loaded yet.
 */
export function track(eventName: string, props?: AnalyticsProps): void {
  if (typeof window === "undefined") return;
  // Initialize a lightweight queue if plausible is not yet ready
  if (!window.plausible) {
    const q: unknown[] = [];
    const fn = ((name: string, options?: { props?: AnalyticsProps }) => {
      (fn.q = fn.q ?? []);
      fn.q.push([name, options] as const);
    }) as Window["plausible"];
    fn.q = q;
    window.plausible = fn;
  }
  window.plausible(eventName, props ? { props } : undefined);
}
