import { SignJWT, jwtVerify } from "jose";

const getSecret = () =>
  new TextEncoder().encode(
    process.env.PORTAL_JWT_SECRET || "dev-secret-please-set-in-env"
  );

export type SessionPayload = {
  email: string;
  role: "admin" | "customer";
};

export async function signToken(payload: SessionPayload, expiresIn = "7d") {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(getSecret());
}

export async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export async function signMagicLinkToken(email: string) {
  return new SignJWT({ email, purpose: "magic-link" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(getSecret());
}

export async function verifyMagicLinkToken(token: string): Promise<string | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (payload.purpose !== "magic-link") return null;
    return payload.email as string;
  } catch {
    return null;
  }
}
