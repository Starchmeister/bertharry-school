"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="mono-label text-[11px] text-[var(--text-dimmer)]">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full bg-transparent border-0 border-b border-[var(--line-strong)] focus:border-[var(--text)] outline-none py-3 text-lg transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="mono-label text-[11px] text-[var(--text-dimmer)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full bg-transparent border-0 border-b border-[var(--line-strong)] focus:border-[var(--text)] outline-none py-3 text-lg transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="mono-label text-[11px] text-[var(--text-dimmer)]">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full bg-transparent border-0 border-b border-[var(--line-strong)] focus:border-[var(--text)] outline-none py-3 text-lg transition-colors resize-none"
        />
      </div>

      <button type="submit" className="btn-solid self-start mt-2">
        Send Message
      </button>
      <p className="text-xs text-[var(--text-dimmer)]">
        Opens your email app addressed to {site.email}.
      </p>
    </form>
  );
}
