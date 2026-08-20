"use client";

import { useState } from "react";
import {
  Users, CreditCard, Building2, Plus, Trash2, Send,
  CheckCircle, Lock, Shield,
} from "lucide-react";

type Teammate = { id: number; name: string; email: string; role: "Admin" | "Member"; status: "Active" | "Invited" };
type PaymentMethod = { id: number; type: "card" | "ach"; label: string; last4: string; expiry?: string; isDefault: boolean };

const TABS = [
  { id: "team", label: "Team", icon: Users },
  { id: "payments", label: "Payment Methods", icon: CreditCard },
];

const INITIAL_TEAM: Teammate[] = [
  { id: 1, name: "Jorge Soto", email: "jorge@startupjorge.com", role: "Admin", status: "Active" },
];

const INITIAL_PAYMENTS: PaymentMethod[] = [];

export default function SettingsPage() {
  const [tab, setTab] = useState("team");

  // Team state
  const [teammates, setTeammates] = useState<Teammate[]>(INITIAL_TEAM);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"Admin" | "Member">("Member");
  const [inviting, setInviting] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);

  // Payment state
  const [payments, setPayments] = useState<PaymentMethod[]>(INITIAL_PAYMENTS);
  const [showAddCard, setShowAddCard] = useState(false);
  const [showAddACH, setShowAddACH] = useState(false);
  const [cardForm, setCardForm] = useState({ number: "", expiry: "", cvc: "", name: "" });
  const [achForm, setAchForm] = useState({ routingNumber: "", accountNumber: "", accountName: "", accountType: "checking" });
  const [savingPayment, setSavingPayment] = useState(false);

  async function sendInvite(e: React.FormEvent) {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    setInviting(true);

    const scriptUrl = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL;
    if (scriptUrl) {
      await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "Portal Team Invite", email: inviteEmail, role: inviteRole }),
      }).catch(() => {});
    }

    setTeammates((t) => [
      ...t,
      { id: Date.now(), name: inviteEmail.split("@")[0], email: inviteEmail, role: inviteRole, status: "Invited" },
    ]);
    setInviteEmail("");
    setInviting(false);
    setInviteSent(true);
    setTimeout(() => setInviteSent(false), 3000);
  }

  function removeTeammate(id: number) {
    setTeammates((t) => t.filter((m) => m.id !== id));
  }

  function saveCard(e: React.FormEvent) {
    e.preventDefault();
    setSavingPayment(true);
    setTimeout(() => {
      const last4 = cardForm.number.replace(/\s/g, "").slice(-4);
      setPayments((p) => [
        ...p,
        { id: Date.now(), type: "card", label: `Visa ending ${last4}`, last4, expiry: cardForm.expiry, isDefault: p.length === 0 },
      ]);
      setCardForm({ number: "", expiry: "", cvc: "", name: "" });
      setShowAddCard(false);
      setSavingPayment(false);
    }, 800);
  }

  function saveACH(e: React.FormEvent) {
    e.preventDefault();
    setSavingPayment(true);
    setTimeout(() => {
      const last4 = achForm.accountNumber.slice(-4);
      setPayments((p) => [
        ...p,
        { id: Date.now(), type: "ach", label: `${achForm.accountType === "checking" ? "Checking" : "Savings"} ···· ${last4}`, last4, isDefault: p.length === 0 },
      ]);
      setAchForm({ routingNumber: "", accountNumber: "", accountName: "", accountType: "checking" });
      setShowAddACH(false);
      setSavingPayment(false);
    }, 800);
  }

  function setDefault(id: number) {
    setPayments((p) => p.map((m) => ({ ...m, isDefault: m.id === id })));
  }

  function removePayment(id: number) {
    setPayments((p) => {
      const filtered = p.filter((m) => m.id !== id);
      if (filtered.length > 0 && !filtered.some((m) => m.isDefault)) {
        filtered[0].isDefault = true;
      }
      return filtered;
    });
  }

  const inputClass = "w-full px-4 py-2.5 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]";
  const inputStyle = { borderColor: "#2A2A1A", color: "#ccc" };
  const labelClass = "block text-[9px] tracking-[0.2em] uppercase mb-1.5";
  const labelStyle = { color: "#888", fontFamily: "var(--font-cinzel), serif" };

  return (
    <div className="min-h-screen px-6 lg:px-12 py-10" style={{ background: "#080806" }}>
      <div className="mb-8">
        <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
          Distributor Portal
        </p>
        <h1 className="text-3xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
          Account Settings
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b" style={{ borderColor: "#2A2A1A" }}>
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex items-center gap-2 px-5 py-3 text-[10px] tracking-[0.15em] uppercase border-b-2 -mb-px transition-all"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              borderColor: tab === id ? "#D4AF37" : "transparent",
              color: tab === id ? "#D4AF37" : "#555",
            }}
          >
            <Icon size={13} /> {label}
          </button>
        ))}
      </div>

      {/* TEAM TAB */}
      {tab === "team" && (
        <div className="max-w-2xl">
          <div className="border mb-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <div className="px-6 py-4 border-b" style={{ borderColor: "#1A1A12" }}>
              <h2 className="text-base font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
                Team Members
              </h2>
              <p className="text-xs mt-0.5" style={{ color: "#555" }}>
                Invite colleagues to manage orders and integrations.
              </p>
            </div>

            {teammates.map((m) => (
              <div key={m.id} className="flex items-center justify-between px-6 py-4 border-b last:border-0" style={{ borderColor: "#1A1A12" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#1E1C10", border: "1px solid #2A2A1A", color: "#D4AF37" }}
                  >
                    {m.name[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#ccc" }}>{m.name}</p>
                    <p className="text-[10px]" style={{ color: "#555" }}>{m.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[9px] px-2 py-0.5 uppercase tracking-widest"
                    style={{
                      background: m.status === "Active" ? "#0D1A0F" : "#1A1A0D",
                      color: m.status === "Active" ? "#4ADE80" : "#888",
                      border: `1px solid ${m.status === "Active" ? "#1A4D2A" : "#2A2A1A"}`,
                    }}
                  >
                    {m.status}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest" style={{ color: "#666" }}>{m.role}</span>
                  {m.role !== "Admin" && (
                    <button
                      onClick={() => removeTeammate(m.id)}
                      className="p-1 transition-colors hover:text-red-400"
                      style={{ color: "#444" }}
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Invite form */}
          <div className="border p-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <h3 className="text-sm font-bold mb-4" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
              Invite Teammate
            </h3>
            {inviteSent && (
              <div className="flex items-center gap-2 px-4 py-3 mb-4 border" style={{ background: "#0D1A0F", borderColor: "#1A4D2A", color: "#4ADE80" }}>
                <CheckCircle size={14} />
                <span className="text-xs">Invitation sent successfully.</span>
              </div>
            )}
            <form onSubmit={sendInvite} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="colleague@company.com"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Role</label>
                  <select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value as "Admin" | "Member")}
                    className={inputClass}
                    style={{ ...inputStyle, background: "#0D0D0A" }}
                  >
                    <option value="Member" style={{ background: "#0D0D0A" }}>Member — view orders & catalog</option>
                    <option value="Admin" style={{ background: "#0D0D0A" }}>Admin — full access</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={inviting}
                className="flex items-center justify-center gap-2 py-2.5 text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
              >
                <Send size={12} /> {inviting ? "Sending…" : "Send Invitation"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PAYMENTS TAB */}
      {tab === "payments" && (
        <div className="max-w-2xl">
          {/* Saved methods */}
          {payments.length > 0 && (
            <div className="border mb-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: "#1A1A12" }}>
                <h2 className="text-base font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
                  Saved Payment Methods
                </h2>
              </div>
              {payments.map((pm) => (
                <div key={pm.id} className="flex items-center justify-between px-6 py-4 border-b last:border-0" style={{ borderColor: "#1A1A12" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 flex items-center justify-center border" style={{ background: "#1A1A12", borderColor: "#2A2A1A" }}>
                      {pm.type === "ach" ? <Building2 size={14} style={{ color: "#D4AF37" }} /> : <CreditCard size={14} style={{ color: "#D4AF37" }} />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#ccc" }}>{pm.label}</p>
                      {pm.expiry && <p className="text-[10px]" style={{ color: "#555" }}>Expires {pm.expiry}</p>}
                    </div>
                    {pm.isDefault && (
                      <span className="text-[9px] px-2 py-0.5 uppercase tracking-widest" style={{ background: "#1E1C10", color: "#D4AF37", border: "1px solid #D4AF3740" }}>
                        Default
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {!pm.isDefault && (
                      <button onClick={() => setDefault(pm.id)} className="text-[10px] uppercase tracking-wider transition-colors hover:text-[#D4AF37]" style={{ color: "#555" }}>
                        Set Default
                      </button>
                    )}
                    <button onClick={() => removePayment(pm.id)} className="p-1 transition-colors hover:text-red-400" style={{ color: "#444" }}>
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Security note */}
          <div className="flex items-start gap-3 px-5 py-4 mb-6 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <Shield size={16} style={{ color: "#D4AF37", flexShrink: 0, marginTop: 2 }} />
            <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
              Payment information is encrypted and stored securely. Your card details are never stored on our servers — processed via Stripe PCI-compliant infrastructure.
            </p>
          </div>

          {/* Add buttons */}
          {!showAddCard && !showAddACH && (
            <div className="flex gap-3">
              <button
                onClick={() => setShowAddCard(true)}
                className="flex items-center gap-2 px-5 py-3 border text-[10px] tracking-[0.15em] uppercase transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                style={{ borderColor: "#2A2A1A", color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                <Plus size={12} /> Add Credit / Debit Card
              </button>
              <button
                onClick={() => setShowAddACH(true)}
                className="flex items-center gap-2 px-5 py-3 border text-[10px] tracking-[0.15em] uppercase transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                style={{ borderColor: "#2A2A1A", color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                <Plus size={12} /> Add ACH / Bank Account
              </button>
            </div>
          )}

          {/* Add card form */}
          {showAddCard && (
            <div className="border p-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Add Credit / Debit Card</h3>
                <button onClick={() => setShowAddCard(false)} className="text-xs hover:text-white transition-colors" style={{ color: "#555" }}>Cancel</button>
              </div>
              <form onSubmit={saveCard} className="flex flex-col gap-4">
                <div>
                  <label className={labelClass} style={labelStyle}>Cardholder Name</label>
                  <input type="text" required placeholder="Jane Smith" value={cardForm.name} onChange={(e) => setCardForm({ ...cardForm, name: e.target.value })} className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      maxLength={19}
                      placeholder="1234 5678 9012 3456"
                      value={cardForm.number}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                        setCardForm({ ...cardForm, number: v.replace(/(.{4})/g, "$1 ").trim() });
                      }}
                      className={inputClass}
                      style={inputStyle}
                    />
                    <Lock size={13} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#444" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={labelStyle}>Expiry</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      maxLength={5}
                      value={cardForm.expiry}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                        setCardForm({ ...cardForm, expiry: v.length > 2 ? `${v.slice(0, 2)}/${v.slice(2)}` : v });
                      }}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle}>CVC</label>
                    <input type="text" required placeholder="123" maxLength={4} value={cardForm.cvc} onChange={(e) => setCardForm({ ...cardForm, cvc: e.target.value.replace(/\D/g, "") })} className={inputClass} style={inputStyle} />
                  </div>
                </div>
                <button type="submit" disabled={savingPayment} className="py-2.5 text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 disabled:opacity-60" style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}>
                  {savingPayment ? "Saving…" : "Save Card"}
                </button>
              </form>
            </div>
          )}

          {/* Add ACH form */}
          {showAddACH && (
            <div className="border p-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Add ACH / Bank Account</h3>
                <button onClick={() => setShowAddACH(false)} className="text-xs hover:text-white transition-colors" style={{ color: "#555" }}>Cancel</button>
              </div>
              <form onSubmit={saveACH} className="flex flex-col gap-4">
                <div>
                  <label className={labelClass} style={labelStyle}>Account Holder Name</label>
                  <input type="text" required placeholder="Company Name or Full Name" value={achForm.accountName} onChange={(e) => setAchForm({ ...achForm, accountName: e.target.value })} className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Account Type</label>
                  <select value={achForm.accountType} onChange={(e) => setAchForm({ ...achForm, accountType: e.target.value })} className={inputClass} style={{ ...inputStyle, background: "#0D0D0A" }}>
                    <option value="checking" style={{ background: "#0D0D0A" }}>Checking</option>
                    <option value="savings" style={{ background: "#0D0D0A" }}>Savings</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Routing Number</label>
                  <input type="text" required placeholder="021000021" maxLength={9} value={achForm.routingNumber} onChange={(e) => setAchForm({ ...achForm, routingNumber: e.target.value.replace(/\D/g, "") })} className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Account Number</label>
                  <input type="text" required placeholder="Your account number" value={achForm.accountNumber} onChange={(e) => setAchForm({ ...achForm, accountNumber: e.target.value.replace(/\D/g, "") })} className={inputClass} style={inputStyle} />
                </div>
                <button type="submit" disabled={savingPayment} className="py-2.5 text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 disabled:opacity-60" style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}>
                  {savingPayment ? "Saving…" : "Save Bank Account"}
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
