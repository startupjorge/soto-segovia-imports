import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

const HUBSPOT_CLIENT_ID = process.env.HUBSPOT_CLIENT_ID!;
const HUBSPOT_CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET!;
const REDIRECT_URI = "https://www.sotosegoviaimports.com/portal/integrations/hubspot/callback";

export async function GET(req: NextRequest) {
  const session = req.cookies.get("portal_session")?.value;
  if (!session) {
    return NextResponse.redirect(new URL("/portal/login", req.url));
  }
  const payload = await verifyToken(session);
  if (!payload) {
    return NextResponse.redirect(new URL("/portal/login", req.url));
  }

  const { searchParams } = req.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const storedState = req.cookies.get("hubspot_oauth_state")?.value;

  if (!code || !state || state !== storedState) {
    return NextResponse.redirect(
      new URL("/portal/integrations?error=oauth_failed", req.url)
    );
  }

  const tokenRes = await fetch("https://api.hubapi.com/oauth/v1/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: HUBSPOT_CLIENT_ID,
      client_secret: HUBSPOT_CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code,
    }),
  });

  if (!tokenRes.ok) {
    return NextResponse.redirect(
      new URL("/portal/integrations?error=token_exchange", req.url)
    );
  }

  const tokens = await tokenRes.json();

  const res = NextResponse.redirect(
    new URL("/portal/integrations?connected=hubspot", req.url)
  );

  res.cookies.delete("hubspot_oauth_state");

  res.cookies.set("hubspot_access_token", tokens.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: tokens.expires_in ?? 1800,
  });

  if (tokens.refresh_token) {
    res.cookies.set("hubspot_refresh_token", tokens.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 60, // 60 days
    });
  }

  return res;
}
