// src/lib/analytics.ts
/**
 * Type-safe wrapper for Plausible (or similar) custom events.
 */

type Primitive = string | number | boolean | null;
export type AnalyticsProps = Record<string, Primitive>;

type PlausibleFn = ((
  eventName: string,
  options?: { props?: AnalyticsProps }
) => void) & { q?: unknown[] };

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

/**
 * Queue-friendly safe caller: works if script hasn't loaded yet.
 */
export function track(eventName: string, props?: AnalyticsProps): void {
  if (typeof window === "undefined") return;

  if (!window.plausible) {
    const queue: unknown[] = [];
    const fn = ((name: string, options?: { props?: AnalyticsProps }) => {
      // Ensure q exists before pushing
      (fn as PlausibleFn).q = (fn as PlausibleFn).q ?? [];
      (fn as PlausibleFn).q!.push([name, options] as const);
    }) as PlausibleFn;
    fn.q = queue;
    window.plausible = fn;
  }

  window.plausible(eventName, props ? { props } : undefined);
}

