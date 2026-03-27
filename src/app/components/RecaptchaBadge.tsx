"use client";

import Script from "next/script";

export default function RecaptchaBadge() {
  return (
    <Script
      src="https://www.google.com/recaptcha/api.js?render=6LeIrZosAAAAAL4Y5aE7vNdryAGm9O80Txazor3U"
      strategy="lazyOnload"
    />
  );
}
