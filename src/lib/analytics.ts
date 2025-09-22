type EventProps = Record<string, string | number | boolean | null | undefined>;

export function track(event: string, props?: EventProps) {
  try {
    if (typeof window !== "undefined" && (window as any).plausible) {
      (window as any).plausible(event, { props });
    }
  } catch {
    /* no-op */
  }
}
