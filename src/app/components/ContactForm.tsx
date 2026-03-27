"use client";

import { FormEvent, useState } from "react";

const RECAPTCHA_SITE_KEY = "6LeIrZosAAAAAL4Y5aE7vNdryAGm9O80Txazor3U";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("sending");

    try {
      // Get invisible reCAPTCHA token
      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: "contact" })
            .then(resolve)
            .catch(reject);
        });
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
          lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          company: (form.elements.namedItem("company") as HTMLInputElement).value,
          inquiryType: (form.elements.namedItem("inquiryType") as HTMLSelectElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
          recaptchaToken: token,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            required
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition text-sm sm:text-base"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            required
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition text-sm sm:text-base"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition text-sm sm:text-base"
          placeholder="john@company.com"
        />
      </div>
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Company
        </label>
        <input
          name="company"
          type="text"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition text-sm sm:text-base"
          placeholder="Company name"
        />
      </div>
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Inquiry Type
        </label>
        <select
          name="inquiryType"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition text-gray-600 text-sm sm:text-base"
        >
          <option>Project Inquiry</option>
          <option>Career / Employment</option>
          <option>Partnership / Subcontracting</option>
          <option>Investor Relations</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition resize-none text-sm sm:text-base"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      {status === "sent" ? (
        <div className="bg-brand-cyan text-brand font-semibold py-4 rounded-lg text-center text-sm sm:text-base">
          Message sent successfully. We&apos;ll be in touch.
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-brand hover:bg-brand-light disabled:opacity-50 text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      )}
    </form>
  );
}
