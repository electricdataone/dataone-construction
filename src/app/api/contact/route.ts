import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, company, inquiryType, message, recaptchaToken } = body;

  if (!recaptchaToken) {
    return NextResponse.json({ error: "reCAPTCHA required" }, { status: 400 });
  }

  // Verify reCAPTCHA with Google
  const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });

  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success) {
    return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
  }

  // Log the submission (replace with email/DB integration later)
  console.log("Contact form submission:", {
    firstName,
    lastName,
    email,
    company,
    inquiryType,
    message,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
