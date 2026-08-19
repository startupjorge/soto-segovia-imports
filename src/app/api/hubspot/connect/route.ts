import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { randomBytes } from "crypto";

const HUBSPOT_CLIENT_ID = process.env.HUBSPOT_CLIENT_ID!;
const REDIRECT_URI = "https://www.sotosegoviaimports.com/portal/integrations/hubspot/callback";
const SCOPES = [
  "crm.objects.contacts.read",
  "crm.objects.contacts.write",
  "crm.objects.deals.read",
  "crm.objects.deals.write",
  "crm.objects.companies.read",
  "crm.objects.companies.write",
].join(" ");

export async function GET(req: NextRequest) {
  const session = req.cookies.get("portal_session")?.value;
  if (!session) {
    return NextResponse.redirect(new URL("/portal/login", req.url));
  }
  const payload = await verifyToken(session);
  if (!payload) {
    return NextResponse.redirect(new URL("/portal/login", req.url));
  }

  const state = randomBytes(16).toString("hex");

  const url = new URL("https://app.hubspot.com/oauth/authorize");
  url.searchParams.set("client_id", HUBSPOT_CLIENT_ID);
  url.searchParams.set("redirect_uri", REDIRECT_URI);
  url.searchParams.set("scope", SCOPES);
  url.searchParams.set("state", state);

  const res = NextResponse.redirect(url.toString());
  res.cookies.set("hubspot_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 300,
  });
  return res;
}
