"use client";

import Script from "next/script";

export default function RecaptchaBadge() {
  return (
    <Script
      src="https://www.google.com/recaptcha/api.js?render=6LcTpZosAAAAADbY0QhweVrtgYqxZqCGAV-_rkfo"
      strategy="lazyOnload"
    />
  );
}
