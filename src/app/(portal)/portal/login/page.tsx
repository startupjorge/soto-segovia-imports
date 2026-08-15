"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { Mail, ArrowRight, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

function LoginForm() {
  const params = useSearchParams();
  const error = params.get("error");

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [devLink, setDevLink] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/send-magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setSent(true);
      if (data.devLink) setDevLink(data.devLink);
    } catch {
      setSent(true); // still show success (don't leak errors)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "radial-gradient(ellipse at center, #1a1810 0%, #080806 100%)" }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Logo size="lg" linkTo="" />
          <p className="mt-4 text-[9px] tracking-[0.25em] uppercase" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
            Client Portal
          </p>
        </div>

        {/* Error banner */}
        {error && (
          <div className="flex items-center gap-3 px-4 py-3 mb-5 border border-red-900/40" style={{ background: "#1a0808" }}>
            <AlertCircle size={14} style={{ color: "#ef4444", flexShrink: 0 }} />
            <p className="text-[12px]" style={{ color: "#ef4444" }}>
              {error === "expired" ? "That sign-in link has expired. Request a new one below." : "Invalid sign-in link. Please try again."}
            </p>
          </div>
        )}

        <div className="p-8 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A", borderTop: "2px solid #D4AF37" }}>
          {!sent ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-2" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
                Welcome Back
              </h1>
              <p className="text-xs text-center mb-8" style={{ color: "#555" }}>
                Enter your email and we&apos;ll send you a secure sign-in link. No password needed.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]"
                      style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-[10px] tracking-[0.25em] uppercase font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
                >
                  {loading ? "Sending…" : <><ArrowRight size={13} /> Send Sign-In Link</>}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#D4AF3720", border: "2px solid #D4AF37" }}>
                <CheckCircle size={24} style={{ color: "#D4AF37" }} />
              </div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
                Check Your Email
              </h2>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#666" }}>
                We&apos;ve sent a secure sign-in link to <strong style={{ color: "#ccc" }}>{email}</strong>. Click the link in that email to access your portal.
              </p>
              <p className="text-[10px] mb-6" style={{ color: "#444" }}>The link expires in 15 minutes.</p>

              {/* Dev mode: show the link directly */}
              {devLink && (
                <div className="border border-[#D4AF3730] p-4 mb-5 text-left" style={{ background: "#111108" }}>
                  <p className="text-[9px] tracking-wider uppercase mb-2 font-bold" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
                    Dev Mode — Your Sign-In Link:
                  </p>
                  <a
                    href={devLink}
                    className="text-[11px] break-all flex items-start gap-2 transition-colors hover:text-[#D4AF37]"
                    style={{ color: "#888" }}
                  >
                    <ExternalLink size={12} className="flex-shrink-0 mt-0.5" /> {devLink}
                  </a>
                  <p className="text-[9px] mt-2" style={{ color: "#444" }}>This appears because no email service (RESEND_API_KEY) is configured.</p>
                </div>
              )}

              <button
                onClick={() => { setSent(false); setDevLink(null); }}
                className="text-[10px] tracking-wider transition-colors hover:text-[#D4AF37]"
                style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
              >
                Use a different email
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-center flex items-center justify-center gap-6">
          <Link href="/contact?type=wholesale" className="text-[9px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]" style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}>
            Become a Partner
          </Link>
          <span style={{ color: "#2A2A1A" }}>|</span>
          <Link href="/" className="text-[9px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]" style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}>
            Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return <Suspense><LoginForm /></Suspense>;
}
