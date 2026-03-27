"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

declare global {
  interface Window {
    grecaptcha: {
      getResponse: () => string;
      reset: () => void;
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
    const recaptchaResponse = window.grecaptcha?.getResponse();

    if (!recaptchaResponse) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
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
          recaptchaToken: recaptchaResponse,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        window.grecaptcha?.reset();
      } else {
        setStatus("error");
        window.grecaptcha?.reset();
      }
    } catch {
      setStatus("error");
      window.grecaptcha?.reset();
    }
  }

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
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

        <div
          className="g-recaptcha"
          data-sitekey="6LcTpZosAAAAADbY0QhweVrtgYqxZqCGAV-_rkfo"
        />

        {status === "error" && (
          <p className="text-red-600 text-sm">
            Please complete the reCAPTCHA and try again.
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
    </>
  );
}
