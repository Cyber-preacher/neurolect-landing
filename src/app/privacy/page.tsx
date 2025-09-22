// src/app/privacy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Neurolect handles analytics, forms, and optional storage. Plain-English explanation with contact and data rights.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: September 23, 2025</p>

      <section className="prose prose-sm mt-8 dark:prose-invert">
        <h2>Quick summary</h2>
        <ul>
          <li>No marketing cookies by default; we use privacy-friendly analytics.</li>
          <li>Forms go to our API; we validate inputs, add anti-spam checks, and optionally persist to a database you control.</li>
          <li>You can request access, correction, or deletion of your information.</li>
        </ul>

        <h2>Who we are</h2>
        <p>
          <strong>Neurolect</strong> builds a policy runtime for personal AI. This website is our
          product &amp; investor landing. If you have any questions about this policy, contact{" "}
          <a href="mailto:invest@neurolect.ai">invest@neurolect.ai</a>.
        </p>

        <h2>What we collect</h2>
        <h3>1) Site analytics (Plausible)</h3>
        <p>
          We use <em>Plausible</em> to understand high-level traffic: page views, referrers, and
          similar aggregate metrics. Plausible does not use cookies and does not collect
          personally identifiable information. We only see anonymized, aggregate trends.
        </p>

        <h3>2) Forms you submit</h3>
        <p>
          When you submit forms (e.g., investor interest), we collect the fields you provide such
          as your name, email, company, and message. We also include basic anti-spam fields (a
          hidden honeypot plus a short-lived HMAC token).
        </p>

        <h3>3) Anti-spam</h3>
        <p>
          To prevent abuse, we bind a short-lived HMAC token to basic request characteristics (like
          IP/UA fingerprint) and verify it on submit. This helps us filter automated spam without
          tracking you across the web.
        </p>

        <h2>How we use data</h2>
        <ul>
          <li>To respond to inbound requests (e.g., investor or partner outreach).</li>
          <li>To measure site usage at an aggregate level and improve the site.</li>
          <li>To protect the service from abuse (rate-limiting and anti-spam).</li>
        </ul>

        <h2>Where data is stored</h2>
        <p>
          Form submissions are processed by our API. Persistence is optional: if configured, we may
          store submissions in a database (e.g., Supabase) we administer. If not configured, we may
          process the submission transiently (e.g., send an email) and not store it.
        </p>

        <h2>How long we keep it</h2>
        <p>
          If we store a submission, we keep it only as long as needed for the purpose (e.g., to
          evaluate your request), and then archive or delete it according to internal schedules. You
          can ask us to delete your submission at any time.
        </p>

        <h2>Your choices &amp; rights</h2>
        <ul>
          <li>
            <strong>Access/Correction/Deletion:</strong> Email{" "}
            <a href="mailto:invest@neurolect.ai">invest@neurolect.ai</a> and we’ll assist.
          </li>
          <li>
            <strong>Do Not Track:</strong> Our analytics are cookie-less and do not identify you.
          </li>
          <li>
            <strong>Revocation:</strong> If you previously shared info and want it removed, contact
            us and we will delete it unless we must retain it to comply with law.
          </li>
        </ul>

        <h2>Security</h2>
        <p>
          We use industry-standard controls for our website, infrastructure, and optional storage
          providers. No system is perfect, but we actively reduce the amount of personal data we
          collect and retain.
        </p>

        <h2>Third-party services</h2>
        <ul>
          <li>
            <strong>Plausible Analytics</strong> — cookie-less, aggregate analytics used to count
            visits and measure general usage.
          </li>
          <li>
            <strong>Hosting/CI</strong> — our website is deployed on a cloud provider (e.g.,
            Vercel) that processes logs at the infrastructure level.
          </li>
          <li>
            <strong>Optional Database</strong> — if configured, we use Supabase to store form
            submissions you explicitly send to us.
          </li>
        </ul>

        <h2>International transfers</h2>
        <p>
          Data may be processed in the United States or other jurisdictions depending on our service
          providers. We use providers that maintain strong security practices.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as our product and website evolve. We’ll change the “Last
          updated” date above and, where appropriate, provide additional notice.
        </p>

        <hr />

        <p className="text-xs text-muted-foreground">
          Questions? <a href="mailto:invest@neurolect.ai">invest@neurolect.ai</a>. For press, see{" "}
          <Link href="/press">/press</Link>. For our investor materials, see{" "}
          <Link href="/investors">/investors</Link>.
        </p>
      </section>
    </main>
  );
}
