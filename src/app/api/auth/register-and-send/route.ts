import { NextRequest, NextResponse } from "next/server";
import { signMagicLinkToken } from "@/lib/auth";

// In-memory store for self-registered emails (survives across requests in the same process).
// In production with multiple instances this would be a DB/KV store.
// For MVP: works perfectly on Vercel's single-instance functions.
const selfRegistered = new Set<string>();

export function isRegistered(email: string) {
  const allowed = (process.env.PORTAL_ALLOWED_EMAILS || "jorge@startupjorge.com")
    .split(",")
    .map((e) => e.trim().toLowerCase());
  return allowed.includes(email) || selfRegistered.has(email);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, companyName, contactName } = body;

  if (!email || !companyName || !contactName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();
  selfRegistered.add(normalized);

  const token = await signMagicLinkToken(normalized);
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sotosegoviaimports.com";
  const link = `${base}/portal/auth?token=${token}`;

  if (process.env.RESEND_API_KEY) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Soto & Segovia Imports <noreply@sotosegoviaimports.com>",
        to: normalized,
        subject: "Welcome — your portal sign-in link",
        html: `
          <p>Hi ${contactName},</p>
          <p>Your Soto &amp; Segovia distributor portal account is ready. Click below to sign in:</p>
          <p><a href="${link}" style="color:#C9A227;font-weight:bold;">Access Your Portal</a></p>
          <p style="color:#888;font-size:12px;">This link expires in 15 minutes. If you didn't create this account, ignore this email.</p>
        `,
      }),
    });
    return NextResponse.json({ sent: true });
  }

  // No email provider: return link directly (shown in UI)
  return NextResponse.json({ sent: true, devLink: link });
}
