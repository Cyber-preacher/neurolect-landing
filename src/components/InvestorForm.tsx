"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function InvestorForm() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/investor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus("ok");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <Input placeholder="Your email" {...register("email")} />
      <Input placeholder="Your name (optional)" {...register("name")} />
      <Textarea
        placeholder="Message or request"
        {...register("message")}
        className="min-h-[120px]"
      />
      <Button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "Sending..." : "Submit"}
      </Button>
      {status === "ok" && <p className="text-green-600">Thanks, we’ll reach out soon.</p>}
      {status === "error" && <p className="text-red-600">Something went wrong.</p>}
    </form>
  );
}
