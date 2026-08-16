import { NextRequest, NextResponse } from "next/server";
import { signMagicLinkToken } from "@/lib/auth";

const ALLOWED_EMAILS = (process.env.PORTAL_ALLOWED_EMAILS || "jorge@startupjorge.com")
  .split(",")
  .map((e) => e.trim().toLowerCase());

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  const normalized = email.trim().toLowerCase();
  if (!ALLOWED_EMAILS.includes(normalized)) {
    // Return generic response, don't reveal whether email is valid
    return NextResponse.json({ sent: true });
  }

  const token = await signMagicLinkToken(normalized);
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sotosegoviaimports.com";
  const link = `${base}/portal/auth?token=${token}`;

  // In production: send via Resend / SendGrid / etc.
  // For now: return the link so you can access it directly (dev mode)
  const isDev = process.env.NODE_ENV === "development" || !process.env.RESEND_API_KEY;

  if (!isDev && process.env.RESEND_API_KEY) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Soto & Segovia Imports <noreply@sotosegoviaimports.com>",
        to: normalized,
        subject: "Your portal sign-in link",
        html: `
          <p>Click the link below to sign in to your Soto & Segovia portal. It expires in 15 minutes.</p>
          <p><a href="${link}" style="color:#C9A227;font-weight:bold;">Sign In to Portal</a></p>
          <p style="color:#888;font-size:12px;">If you didn't request this, you can safely ignore this email.</p>
        `,
      }),
    });
    return NextResponse.json({ sent: true });
  }

  // Dev mode: return the link directly so it can be displayed
  return NextResponse.json({ sent: true, devLink: link });
}
