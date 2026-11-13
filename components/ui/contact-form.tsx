"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "min-h-13 w-full rounded-2xl border border-line-strong bg-surface px-4 text-base text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export function ContactForm({ formId, email }: { formId: string; email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-eyebrow text-muted">Name</span>
          <input name="name" type="text" autoComplete="name" required className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-eyebrow text-muted">Email</span>
          <input name="email" type="email" autoComplete="email" required className={field} />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-eyebrow text-muted">Message</span>
        <textarea name="message" rows={5} required className={`${field} resize-y py-3`} />
      </label>

      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-13 items-center rounded-full bg-accent px-8 font-bold text-accent-fg transition-colors hover:bg-fg disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message ↗"}
        </button>
        <p role="status" aria-live="polite" className="text-base">
          {status === "sent" && <span className="text-accent">Thanks, your message is on its way. I&apos;ll reply soon.</span>}
          {status === "error" && (
            <span className="text-muted">
              Something went wrong. Please email me at{" "}
              <a href={`mailto:${email}`} className="text-fg underline underline-offset-4">
                {email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
