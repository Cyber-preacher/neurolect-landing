// src/components/InvestorForm.tsx
"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(1, "Tell us a bit about your interest"),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
  // Anti-spam fields:
  ts: z.number().int().positive(),
  token: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

export default function InvestorForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      website: "",
      ts: 0,
      token: "",
    },
  });

  const [server, setServer] = React.useState<{ ok: boolean; error?: string } | null>(null);

  // Fetch anti-spam token on mount
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/anti-spam", { cache: "no-store" });
        const json = (await res.json()) as { ok: boolean; ts: number; token: string };
        if (alive && json?.ok && typeof json.ts === "number" && typeof json.token === "string") {
          setValue("ts", json.ts, { shouldDirty: false });
          setValue("token", json.token, { shouldDirty: false });
        }
      } catch {
        // ignore; server will reject without token
      }
    })();
    return () => {
      alive = false;
    };
  }, [setValue]);

  const onSubmit = async (values: FormValues) => {
    setServer(null);
    try {
      const res = await fetch("/api/investor", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      setServer({ ok: true });
      reset();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      setServer({ ok: false, error: msg });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        autoComplete="off"
        tabIndex={-1}
        {...register("website")}
        className="hidden"
      />

      {/* Anti-spam hidden fields */}
      <input type="hidden" {...register("ts", { valueAsNumber: true })} />
      <input type="hidden" {...register("token")} />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <Input placeholder="Ada Lovelace" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <Input type="email" placeholder="investor@example.com" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Company (optional)</label>
        <Input placeholder="Acme Ventures" {...register("company")} />
        {errors.company && (
          <p className="mt-1 text-xs text-destructive">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Message</label>
        <Textarea
          placeholder="Tell us about your thesis and what you’d like to explore…"
          rows={6}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Request Access"}
        </Button>
        {isSubmitSuccessful && server?.ok && (
          <span className="text-sm text-green-600">Thanks! We’ll be in touch.</span>
        )}
        {server && !server.ok && (
          <span className="text-sm text-destructive">Error: {server.error}</span>
        )}
      </div>
    </form>
  );
}
