"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Send, CheckCircle, Package, Truck, CreditCard,
  ChevronDown, Pencil, Save, X, ExternalLink, MessageSquare, AlertCircle
} from "lucide-react";
import {
  Order, OrderStatus, ChatMessage,
  getOrder, updateOrder, addMessage, deleteOrder,
  STATUS_LABELS, STATUS_COLORS, STATUS_PIPELINE,
} from "@/lib/portal-store";

// ── Status Timeline ───────────────────────────────────────────────────────────
function StatusTimeline({ status }: { status: OrderStatus }) {
  const activeIdx = STATUS_PIPELINE.indexOf(status);
  return (
    <div className="flex items-center gap-0 overflow-x-auto pb-2">
      {STATUS_PIPELINE.map((s, idx) => {
        const done = idx <= activeIdx;
        const active = idx === activeIdx;
        return (
          <div key={s} className="flex items-center flex-1 last:flex-none min-w-0">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all"
                style={{
                  borderColor: done ? STATUS_COLORS[s] : "#2A2A1A",
                  background: done ? (active ? STATUS_COLORS[s] : "transparent") : "transparent",
                  color: done ? (active ? "#000" : STATUS_COLORS[s]) : "#444",
                }}
              >
                {idx + 1}
              </div>
              <p className="text-[8px] tracking-wider mt-1 text-center whitespace-nowrap" style={{ color: done ? STATUS_COLORS[s] : "#444", fontFamily: "var(--font-cinzel), serif" }}>
                {STATUS_LABELS[s]}
              </p>
            </div>
            {idx < STATUS_PIPELINE.length - 1 && (
              <div className="flex-1 h-px mx-2 mt-[-12px]" style={{ background: idx < activeIdx ? "#D4AF37" : "#2A2A1A" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Chat ─────────────────────────────────────────────────────────────────────
function ChatPanel({ order, onUpdate }: { order: Order; onUpdate: () => void }) {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [order.messages]);

  function send(role: "admin" | "customer") {
    if (!text.trim()) return;
    setSending(true);
    addMessage(order.id, role, text.trim());
    setText("");
    onUpdate();
    setSending(false);
  }

  function formatTime(iso: string) {
    return new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "#1E1E14" }}>
        <div className="flex items-center gap-2">
          <MessageSquare size={14} style={{ color: "#D4AF37" }} />
          <h3 className="text-sm font-bold" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F5F0E8" }}>Concierge Chat</h3>
        </div>
        <p className="text-[9px]" style={{ color: "#555" }}>{order.recipient.name}</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ minHeight: 300, maxHeight: 420 }}>
        {(order.messages ?? []).length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[12px] text-center" style={{ color: "#444" }}>
              No messages yet. Start the conversation with your client.
            </p>
          </div>
        ) : (
          <>
            {(order.messages ?? []).map((msg: ChatMessage) => (
              <div key={msg.id} className={`flex flex-col ${msg.role === "admin" ? "items-end" : "items-start"}`}>
                <div
                  className="max-w-[80%] px-4 py-2.5 text-[12px] leading-relaxed"
                  style={{
                    background: msg.role === "admin" ? "linear-gradient(135deg, #8B6914, #C9A227)" : "#1A1A12",
                    color: msg.role === "admin" ? "#000" : "#ccc",
                    borderRadius: "2px",
                  }}
                >
                  {msg.text}
                </div>
                <p className="text-[9px] mt-1 px-1" style={{ color: "#444" }}>
                  {msg.role === "admin" ? "You" : order.recipient.name} · {formatTime(msg.timestamp)}
                </p>
              </div>
            ))}
            <div ref={bottomRef} />
          </>
        )}
      </div>

      {/* Input */}
      <div className="border-t p-4" style={{ borderColor: "#1E1E14" }}>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send("admin"); } }}
          rows={3}
          placeholder="Type your message… (Enter to send, Shift+Enter for new line)"
          className="w-full px-3 py-2 text-[12px] border outline-none focus:border-[#D4AF37] bg-transparent transition-colors resize-none mb-3"
          style={{ borderColor: "#2A2A1A", color: "#ccc" }}
        />
        <div className="flex gap-2">
          <button
            onClick={() => send("admin")}
            disabled={!text.trim() || sending}
            className="flex-1 flex items-center justify-center gap-2 py-2 text-[9px] tracking-wider font-bold disabled:opacity-40 transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
          >
            <Send size={11} /> Send as You
          </button>
          <button
            onClick={() => send("customer")}
            disabled={!text.trim() || sending}
            className="px-4 py-2 text-[9px] tracking-wider border disabled:opacity-40 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{ borderColor: "#2A2A1A", color: "#666", fontFamily: "var(--font-cinzel), serif" }}
            title="Simulate customer reply (for testing)"
          >
            As Client
          </button>
        </div>
        <p className="text-[9px] mt-2" style={{ color: "#333" }}>
          "As Client" simulates a customer reply for testing purposes.
        </p>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [editTracking, setEditTracking] = useState(false);
  const [tracking, setTracking] = useState("");
  const [editNote, setEditNote] = useState(false);
  const [internalNote, setInternalNote] = useState("");
  const [sendingLink, setSendingLink] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const refresh = useCallback(() => {
    const o = getOrder(id);
    if (o) {
      setOrder(o);
      setTracking(o.tracking);
      setInternalNote(o.internalNote);
    }
  }, [id]);

  useEffect(() => { refresh(); }, [refresh]);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080806" }}>
        <p className="text-sm" style={{ color: "#555" }}>Order not found.</p>
      </div>
    );
  }

  function saveTracking() {
    updateOrder(order!.id, { tracking });
    setEditTracking(false);
    refresh();
  }

  function saveNote() {
    updateOrder(order!.id, { internalNote });
    setEditNote(false);
    refresh();
  }

  function changeStatus(status: OrderStatus) {
    updateOrder(order!.id, { status });
    setStatusOpen(false);
    refresh();
  }

  async function sendPaymentLink() {
    setSendingLink(true);
    try {
      const res = await fetch("/api/stripe/payment-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: order!.id, email: order!.recipient.email, amount: order!.total, recipientName: order!.recipient.name }),
      });
      const data = await res.json();
      if (data.url) {
        updateOrder(order!.id, {
          stripePaymentLink: data.url,
          stripePaymentLinkSentAt: new Date().toISOString(),
          status: order!.status === "confirmed" ? "payment-sent" : order!.status,
        });
        // Auto-send a chat message
        addMessage(order!.id, "admin", `Hi ${order!.recipient.name.split(" ")[0]}! Your order ${order!.id} is confirmed. I've sent a secure payment link to ${order!.recipient.email}. Please complete payment at your convenience and we'll ship within 3–5 business days. Let me know if you have any questions!`);
        setLinkSent(true);
        setTimeout(() => setLinkSent(false), 4000);
        refresh();
      }
    } catch {
      alert("Failed to generate payment link. Check your Stripe API key in .env.");
    } finally {
      setSendingLink(false);
    }
  }

  const color = STATUS_COLORS[order.status];

  const inputClass = "px-3 py-1.5 text-[12px] border outline-none focus:border-[#D4AF37] bg-transparent transition-colors";
  const inputStyle = { borderColor: "#2A2A1A", color: "#ccc" };

  return (
    <div className="min-h-screen px-4 lg:px-10 py-8" style={{ background: "#080806" }}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/portal/orders" className="p-2 border transition-colors hover:border-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#555" }}>
          <ArrowLeft size={14} />
        </Link>
        <div className="flex-1">
          <p className="text-[9px] tracking-[0.3em] uppercase mb-0.5" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Order Detail</p>
          <h1 className="text-2xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>{order.id}</h1>
        </div>
        <div className="flex items-center gap-2">
          {/* Status dropdown */}
          <div className="relative">
            <button
              onClick={() => setStatusOpen(o => !o)}
              className="flex items-center gap-2 px-3 py-2 text-[9px] tracking-wider border transition-all"
              style={{ borderColor: color, color, fontFamily: "var(--font-cinzel), serif" }}
            >
              {STATUS_LABELS[order.status]} <ChevronDown size={10} />
            </button>
            {statusOpen && (
              <div className="absolute right-0 top-full mt-1 z-10 border w-40 py-1 shadow-xl" style={{ background: "#111108", borderColor: "#2A2A1A" }}>
                {STATUS_PIPELINE.map(s => (
                  <button key={s} onClick={() => changeStatus(s)} className="w-full text-left px-3 py-1.5 text-[9px] tracking-wider hover:bg-white/5" style={{ color: s === order.status ? "#D4AF37" : "#888", fontFamily: "var(--font-cinzel), serif" }}>
                    {STATUS_LABELS[s]}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Send Payment Link */}
          <button
            onClick={sendPaymentLink}
            disabled={sendingLink}
            className="flex items-center gap-2 px-4 py-2 text-[9px] tracking-wider font-bold disabled:opacity-50 transition-opacity hover:opacity-90"
            style={{
              background: linkSent ? "#22c55e" : "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)",
              color: "#000",
              fontFamily: "var(--font-cinzel), serif",
            }}
          >
            {linkSent ? <><CheckCircle size={11} /> Sent!</> : sendingLink ? "Sending…" : <><Send size={11} /> Send Payment Link</>}
          </button>
        </div>
      </div>

      {/* Status Timeline */}
      <div className="border p-5 mb-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
        <StatusTimeline status={order.status} />
        {order.stripePaymentLink && (
          <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: "#1E1E14" }}>
            <div>
              <p className="text-[9px] tracking-wider uppercase mb-1" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Payment Link</p>
              <p className="text-[11px]" style={{ color: "#888" }}>Sent {order.stripePaymentLinkSentAt ? new Date(order.stripePaymentLinkSentAt).toLocaleString() : ""}</p>
            </div>
            <a href={order.stripePaymentLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] tracking-wider transition-colors hover:text-[#D4AF37]" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
              <ExternalLink size={11} /> View Link
            </a>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-5">
          {/* Recipient */}
          <div className="border p-5" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <p className="text-[9px] tracking-[0.2em] uppercase mb-4 font-bold" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Recipient</p>
            <div className="text-[13px] leading-relaxed" style={{ color: "#ccc" }}>
              <p className="font-bold text-white">{order.recipient.name}</p>
              <p style={{ color: "#888" }}>{order.recipient.email}</p>
              <p className="mt-1">{order.recipient.address}</p>
              <p>{order.recipient.city}, {order.recipient.state} {order.recipient.zip}</p>
              <p>{order.recipient.country}</p>
            </div>
          </div>

          {/* Order Items */}
          <div className="border p-5" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <p className="text-[9px] tracking-[0.2em] uppercase mb-4 font-bold" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Order Items</p>
            <div className="flex flex-col gap-2 mb-4">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="text-[12px]" style={{ color: "#ccc" }}>{item.name}</p>
                    <p className="text-[10px]" style={{ color: "#555" }}>Qty {item.quantity} × ${item.price}</p>
                  </div>
                  <p className="text-[13px] font-bold" style={{ color: "#ccc" }}>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 flex justify-between" style={{ borderColor: "#1E1E14" }}>
              <p className="text-[11px]" style={{ color: "#666" }}>Total</p>
              <p className="text-[15px] font-bold" style={{ color: "#D4AF37", fontFamily: "var(--font-cormorant), serif" }}>${order.total.toFixed(2)}</p>
            </div>
          </div>

          {/* Gift Note */}
          <div className="border p-5" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Gift Note</p>
              <span className="text-[9px] tracking-wider px-2 py-0.5 border" style={{ borderColor: "#D4AF3730", color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
                {order.noteType === "handwritten" ? "✍️ Handwritten" : "🖨️ Typed"}
              </span>
            </div>
            {order.giftNote ? (
              <p className="text-[13px] leading-relaxed italic" style={{ color: "#888", fontFamily: order.noteType === "handwritten" ? "cursive" : "var(--font-cormorant), serif" }}>
                &ldquo;{order.giftNote}&rdquo;
              </p>
            ) : (
              <p className="text-[12px]" style={{ color: "#444" }}>No gift note.</p>
            )}
          </div>

          {/* Tracking */}
          <div className="border p-5" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-2" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
                <Truck size={12} /> Tracking Number
              </p>
              {!editTracking && (
                <button onClick={() => setEditTracking(true)} style={{ color: "#555" }} className="hover:text-[#D4AF37] transition-colors"><Pencil size={12} /></button>
              )}
            </div>
            {editTracking ? (
              <div className="flex gap-2">
                <input value={tracking} onChange={e => setTracking(e.target.value)} className={`flex-1 ${inputClass}`} style={inputStyle} placeholder="Enter tracking number…" />
                <button onClick={saveTracking} className="p-1.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"><Save size={12} /></button>
                <button onClick={() => setEditTracking(false)} style={{ color: "#555" }}><X size={12} /></button>
              </div>
            ) : (
              <p className="text-[13px] font-mono" style={{ color: order.tracking ? "#ccc" : "#444" }}>
                {order.tracking || "Not yet added"}
              </p>
            )}
          </div>

          {/* Internal Note */}
          <div className="border p-5" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-2" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
                <AlertCircle size={12} /> Internal Note
              </p>
              {!editNote && (
                <button onClick={() => setEditNote(true)} style={{ color: "#555" }} className="hover:text-[#D4AF37] transition-colors"><Pencil size={12} /></button>
              )}
            </div>
            {editNote ? (
              <div className="flex flex-col gap-2">
                <textarea value={internalNote} onChange={e => setInternalNote(e.target.value)} rows={3} className={`w-full ${inputClass} resize-none`} style={inputStyle} placeholder="Internal notes not visible to client…" />
                <div className="flex gap-2">
                  <button onClick={saveNote} className="flex items-center gap-1 px-3 py-1.5 text-[9px] tracking-wider border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all" style={{ fontFamily: "var(--font-cinzel), serif" }}><Save size={10} /> Save</button>
                  <button onClick={() => setEditNote(false)} style={{ color: "#555" }}><X size={12} /></button>
                </div>
              </div>
            ) : (
              <p className="text-[12px] leading-relaxed" style={{ color: order.internalNote ? "#888" : "#444" }}>
                {order.internalNote || "No internal notes."}
              </p>
            )}
          </div>
        </div>

        {/* Right column — Chat */}
        <div className="border flex flex-col" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
          <ChatPanel order={order} onUpdate={refresh} />
        </div>
      </div>

      {/* Danger zone */}
      <div className="mt-8 border border-red-900/30 p-5" style={{ background: "#0D0D0A" }}>
        <p className="text-[9px] tracking-wider uppercase mb-3 font-bold" style={{ color: "#ef4444", fontFamily: "var(--font-cinzel), serif" }}>Danger Zone</p>
        <div className="flex items-center justify-between">
          <p className="text-[12px]" style={{ color: "#666" }}>Permanently delete this order and all its messages.</p>
          <button
            onClick={() => { if (confirm(`Delete ${order.id}? This cannot be undone.`)) { deleteOrder(order.id); router.push("/portal/orders"); } }}
            className="px-4 py-2 text-[9px] tracking-wider border border-red-900 text-red-500 hover:bg-red-900/20 transition-all"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Delete Order
          </button>
        </div>
      </div>
    </div>
  );
}
