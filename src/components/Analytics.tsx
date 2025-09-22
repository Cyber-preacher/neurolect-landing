import Script from "next/script";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "localhost";
const ENABLED = process.env.NODE_ENV === "production";

export default function Analytics() {
  if (!ENABLED) return null;
  return (
    <>
      <Script
        src="https://plausible.io/js/script.js"
        data-domain={PLAUSIBLE_DOMAIN}
        strategy="afterInteractive"
      />
    </>
  );
}
