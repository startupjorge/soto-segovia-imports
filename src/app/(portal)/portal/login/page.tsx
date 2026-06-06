"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function PortalLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate auth — replace with real auth
    await new Promise((r) => setTimeout(r, 1000));
    router.push("/portal/dashboard");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a1810 0%, #080806 100%)",
      }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Logo size="lg" linkTo="" />
          <p
            className="mt-4 text-[9px] tracking-[0.25em] uppercase"
            style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
          >
            Distributor Portal
          </p>
        </div>

        {/* Card */}
        <div className="p-8 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
          <h1
            className="text-2xl font-bold text-center mb-1"
            style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
          >
            Welcome Back
          </h1>
          <p className="text-xs text-center mb-8" style={{ color: "#555" }}>
            Sign in to access your account, orders, and invoices
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label
                className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "#555" }}
                />
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]"
                  style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "#555" }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]"
                  style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "#555" }}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-right -mt-2">
              <Link
                href="#"
                className="text-[9px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]"
                style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 text-[10px] tracking-[0.25em] uppercase font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
                color: "#000",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              {loading ? "Signing In…" : "Sign In"}
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div className="mt-6 text-center flex items-center justify-center gap-6">
          <Link
            href="/contact?type=wholesale"
            className="text-[9px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]"
            style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}
          >
            Become a Partner
          </Link>
          <span style={{ color: "#2A2A1A" }}>|</span>
          <Link
            href="/"
            className="text-[9px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]"
            style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}
          >
            Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
