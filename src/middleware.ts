import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const getSecret = () =>
  new TextEncoder().encode(
    process.env.PORTAL_JWT_SECRET || "dev-secret-please-set-in-env"
  );

const PROTECTED = ["/portal/dashboard", "/portal/orders", "/portal/invoices"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED.some((p) => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get("portal_session")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/portal/login", req.url));
  }

  try {
    await jwtVerify(token, getSecret());
    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/portal/login", req.url));
    res.cookies.delete("portal_session");
    return res;
  }
}

export const config = {
  matcher: [
    "/portal/dashboard/:path*",
    "/portal/orders/:path*",
    "/portal/invoices/:path*",
  ],
};
