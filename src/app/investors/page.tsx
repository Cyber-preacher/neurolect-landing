"use client";

import { useState } from "react";
import { COPY } from "@/lib/copy";

export default function Investors() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setMsg("");

    const form = e.currentTarget;
    const body = new FormData(form);

    try {
      const res = await fetch("/api/investor", { method: "POST", body });
      const json = await res.json();
      if (!res.ok || !json?.ok) {
        throw new Error("Validation failed");
      }
      setStatus("ok");
      setMsg("Thanks! We’ll get back to you shortly.");
      form.reset();
    } catch (err) {
      setStatus("err");
      setMsg("Could not submit right now. Please try again in a minute.");
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{COPY.investors.title}</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">{COPY.investors.body}</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Calendly embed */}
        <div className="rounded-2xl border overflow-hidden">
          <iframe
            title="Investor Call"
            src={COPY.investors.calendlyUrl}
            className="w-full h-[720px]"
          />
        </div>

        {/* Pack + Form */}
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-medium">Investor Pack</h2>
          <p className="mt-2 text-muted-foreground">
            Download the teaser. For the full data room, submit the form below.
          </p>

          <div className="mt-4">
            <a
              className="inline-block px-4 py-2 rounded-xl border"
              href="/pack/neurolect-investor-pack.pdf"
              target="_blank"
              rel="noreferrer"
              data-analytics="cta-investor-pack"
            >
              Download Teaser (PDF)
            </a>
          </div>

          <form className="mt-8 space-y-3" onSubmit={onSubmit}>
            {/* Honeypot (hidden) */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <input className="w-full border rounded-lg p-2" name="name" placeholder="Your name" required />
            <input className="w-full border rounded-lg p-2" name="fund" placeholder="Fund / Role" required />
            <input className="w-full border rounded-lg p-2" name="email" placeholder="Work email" type="email" required />
            <select className="w-full border rounded-lg p-2" name="tier" defaultValue="general" required>
              <option value="general">General</option>
              <option value="strategic">Strategic</option>
              <option value="tier1">Tier-1</option>
            </select>

            <button className="px-4 py-2 rounded-lg border" type="submit" data-analytics="cta-investor-submit">
              Request Data Room
            </button>

            {status !== "idle" && (
              <p
                className={`text-sm mt-2 ${
                  status === "ok" ? "text-green-600" : "text-red-600"
                }`}
                role="status"
              >
                {msg}
              </p>
            )}
          </form>

          <p className="mt-3 text-xs text-muted-foreground">
            By submitting, you agree to be contacted about Neurolect investment materials.
          </p>
        </div>
      </div>
    </div>
  );
}
