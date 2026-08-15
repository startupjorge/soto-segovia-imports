import { NextRequest, NextResponse } from "next/server";
import { verifyMagicLinkToken, signToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/portal/login?error=missing", req.url));
  }

  const email = await verifyMagicLinkToken(token);
  if (!email) {
    return NextResponse.redirect(new URL("/portal/login?error=expired", req.url));
  }

  const session = await signToken({ email, role: "admin" });

  const res = NextResponse.redirect(new URL("/portal/dashboard", req.url));
  res.cookies.set("portal_session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
