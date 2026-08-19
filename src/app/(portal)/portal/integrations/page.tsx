"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

function IntegrationsContent() {
  const searchParams = useSearchParams();
  const connected = searchParams.get("connected");
  const error = searchParams.get("error");

  const isHubSpotConnected = connected === "hubspot";

  return (
    <div className="min-h-screen px-6 lg:px-12 py-10" style={{ background: "#080806" }}>
      <div className="mb-10">
        <p
          className="text-[9px] tracking-[0.3em] uppercase mb-1"
          style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
        >
          Distributor Portal
        </p>
        <h1
          className="text-3xl font-bold"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          Integrations
        </h1>
        <p className="text-sm mt-1" style={{ color: "#555" }}>
          Connect your tools to sync orders, contacts, and deal activity automatically.
        </p>
      </div>

      {connected === "hubspot" && (
        <div
          className="flex items-center gap-3 px-5 py-4 mb-8 border"
          style={{ background: "#0D1A0F", borderColor: "#1A4D2A", color: "#4ADE80" }}
        >
          <CheckCircle size={18} />
          <p className="text-sm">HubSpot connected successfully. Your CRM is now synced.</p>
        </div>
      )}

      {error && (
        <div
          className="flex items-center gap-3 px-5 py-4 mb-8 border"
          style={{ background: "#1A0D0D", borderColor: "#4D1A1A", color: "#F87171" }}
        >
          <AlertCircle size={18} />
          <p className="text-sm">
            {error === "oauth_failed"
              ? "OAuth authorization failed. Please try again."
              : "Could not exchange token with HubSpot. Please try again."}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* HubSpot */}
        <div
          className="p-6 border flex flex-col gap-5"
          style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}
        >
          <div className="flex items-center justify-between">
            <img src="/logos/hubspot.png" alt="HubSpot" style={{ height: 32, width: "auto" }} />
            {isHubSpotConnected ? (
              <span
                className="text-[10px] tracking-widest uppercase px-3 py-1"
                style={{ background: "#0D1A0F", color: "#4ADE80", border: "1px solid #1A4D2A" }}
              >
                Connected
              </span>
            ) : (
              <span
                className="text-[10px] tracking-widest uppercase px-3 py-1"
                style={{ background: "#1A1A0D", color: "#888", border: "1px solid #2A2A1A" }}
              >
                Not Connected
              </span>
            )}
          </div>

          <div>
            <h2
              className="text-lg font-semibold mb-1"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              HubSpot CRM
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
              Sync your contacts, companies, and deals with HubSpot. New orders automatically
              create or update deal records in your pipeline.
            </p>
          </div>

          <ul className="space-y-2">
            {[
              "Sync contacts and companies",
              "Auto-create deals from orders",
              "Update deal stage on order status",
              "Log order history as CRM notes",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#888" }}>
                <span style={{ color: "#D4AF37" }}>+</span> {f}
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            {isHubSpotConnected ? (
              <button
                className="w-full py-3 text-sm tracking-widest uppercase border transition-colors"
                style={{ borderColor: "#2A2A1A", color: "#555" }}
                disabled
              >
                Connected
              </button>
            ) : (
              <a
                href="/api/hubspot/connect"
                className="block w-full py-3 text-sm tracking-widest uppercase text-center transition-colors"
                style={{ background: "#FF7A59", color: "#fff" }}
              >
                Connect HubSpot
              </a>
            )}
          </div>
        </div>

        {/* Salesforce - coming soon */}
        <div
          className="p-6 border flex flex-col gap-5 opacity-60"
          style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}
        >
          <div className="flex items-center justify-between">
            <img src="/logos/salesforce.webp" alt="Salesforce" style={{ height: 44, width: "auto" }} />
            <span
              className="text-[10px] tracking-widest uppercase px-3 py-1"
              style={{ background: "#1A1A0D", color: "#888", border: "1px solid #2A2A1A" }}
            >
              Coming Soon
            </span>
          </div>

          <div>
            <h2
              className="text-lg font-semibold mb-1"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Salesforce CRM
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
              Connect your Salesforce org to sync opportunities, accounts, and order data across
              your sales team.
            </p>
          </div>

          <div className="mt-auto">
            <a
              href="/integrations/salesforce"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm tracking-widest uppercase border"
              style={{ borderColor: "#2A2A1A", color: "#555" }}
            >
              Learn More <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <Suspense>
      <IntegrationsContent />
    </Suspense>
  );
}
