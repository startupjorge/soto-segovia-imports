"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function AuthCallback() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = params.get("token");
    if (!token) { router.replace("/portal/login?error=missing"); return; }
    router.replace(`/api/auth/verify?token=${encodeURIComponent(token)}`);
  }, [params, router]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "radial-gradient(ellipse at center, #1a1810 0%, #080806 100%)" }}>
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ borderColor: "#D4AF37", borderTopColor: "transparent" }} />
        <p className="text-sm" style={{ color: "#888" }}>Signing you in…</p>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return <Suspense><AuthCallback /></Suspense>;
}
