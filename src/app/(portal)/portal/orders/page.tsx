"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Plus, Search, Trash2, Eye, ChevronDown, X, CheckCircle,
  Package, Send, Filter
} from "lucide-react";
import {
  Order, OrderStatus, OrderItem,
  loadOrders, createOrder, updateOrder, deleteOrder,
  STATUS_LABELS, STATUS_COLORS, STATUS_PIPELINE,
  orderTotal,
} from "@/lib/portal-store";
import { allProducts } from "@/lib/products";

// ── Add Order Modal ───────────────────────────────────────────────────────────
function AddOrderModal({ onClose, onSave }: { onClose: () => void; onSave: (o: Order) => void }) {
  const [items, setItems] = useState<OrderItem[]>([{ name: allProducts[0].name, quantity: 1, price: allProducts[0].price }]);
  const [form, setForm] = useState({
    recipientName: "", recipientEmail: "", address: "", city: "", state: "", zip: "", country: "US",
    giftNote: "", noteType: "typed" as "typed" | "handwritten", internalNote: "", status: "pre-order" as OrderStatus,
  });

  const set = (f: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [f]: e.target.value }));

  function addItem() {
    setItems(prev => [...prev, { name: allProducts[0].name, quantity: 1, price: allProducts[0].price }]);
  }

  function updateItem(idx: number, field: keyof OrderItem, value: string | number) {
    setItems(prev => prev.map((item, i) => {
      if (i !== idx) return item;
      if (field === "name") {
        const product = allProducts.find(p => p.name === value);
        return { ...item, name: value as string, price: product?.price ?? item.price };
      }
      return { ...item, [field]: field === "quantity" || field === "price" ? Number(value) : value };
    }));
  }

  function removeItem(idx: number) {
    setItems(prev => prev.filter((_, i) => i !== idx));
  }

  function handleSave() {
    const order = createOrder({
      status: form.status,
      recipient: {
        name: form.recipientName, email: form.recipientEmail,
        address: form.address, city: form.city, state: form.state, zip: form.zip, country: form.country,
      },
      items,
      giftNote: form.giftNote,
      noteType: form.noteType,
      tracking: "",
      total: orderTotal(items),
      internalNote: form.internalNote,
    });
    onSave(order);
  }

  const inputClass = "w-full px-3 py-2 text-[12px] border outline-none transition-colors bg-transparent focus:border-[#D4AF37]";
  const inputStyle = { borderColor: "#2A2A1A", color: "#ccc" };
  const labelClass = "block text-[9px] tracking-[0.2em] uppercase mb-1.5 font-semibold";
  const labelStyle = { color: "#666", fontFamily: "var(--font-cinzel), serif" };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8" style={{ background: "rgba(0,0,0,0.85)" }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="w-full max-w-2xl border overflow-y-auto max-h-[90vh]" style={{ background: "#0D0D0A", borderColor: "#2A2A1A", borderTop: "2px solid #D4AF37" }}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#1E1E14" }}>
          <h2 className="font-bold text-[15px]" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F5F0E8" }}>New Order</h2>
          <button onClick={onClose} style={{ color: "#555" }}><X size={16} /></button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5">
          {/* Status */}
          <div>
            <label className={labelClass} style={labelStyle}>Status</label>
            <select value={form.status} onChange={set("status")} className={inputClass} style={{ ...inputStyle, background: "#0D0D0A" }}>
              {STATUS_PIPELINE.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
            </select>
          </div>

          {/* Recipient */}
          <div>
            <p className={labelClass} style={{ ...labelStyle, color: "#D4AF37" }}>Recipient</p>
            <div className="grid grid-cols-2 gap-3">
              {[["recipientName", "Full Name"], ["recipientEmail", "Email"]].map(([f, l]) => (
                <div key={f}>
                  <label className={labelClass} style={labelStyle}>{l}</label>
                  <input value={(form as Record<string,string>)[f]} onChange={set(f)} className={inputClass} style={inputStyle} />
                </div>
              ))}
              <div className="col-span-2">
                <label className={labelClass} style={labelStyle}>Street Address</label>
                <input value={form.address} onChange={set("address")} className={inputClass} style={inputStyle} />
              </div>
              {[["city", "City"], ["state", "State"], ["zip", "ZIP"]].map(([f, l]) => (
                <div key={f}>
                  <label className={labelClass} style={labelStyle}>{l}</label>
                  <input value={(form as Record<string,string>)[f]} onChange={set(f)} className={inputClass} style={inputStyle} />
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className={labelClass} style={{ ...labelStyle, color: "#D4AF37" }}>Products</p>
              <button onClick={addItem} className="text-[9px] tracking-wider flex items-center gap-1 transition-colors hover:text-[#D4AF37]" style={{ color: "#666", fontFamily: "var(--font-cinzel), serif" }}>
                <Plus size={10} /> Add Product
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-[1fr_80px_80px_30px] gap-2 items-center">
                  <select
                    value={item.name}
                    onChange={e => updateItem(idx, "name", e.target.value)}
                    className={inputClass}
                    style={{ ...inputStyle, background: "#0D0D0A" }}
                  >
                    {allProducts.map(p => <option key={p.slug} value={p.name}>{p.name}</option>)}
                  </select>
                  <input type="number" min={1} value={item.quantity} onChange={e => updateItem(idx, "quantity", e.target.value)} className={inputClass} style={inputStyle} placeholder="Qty" />
                  <input type="number" value={item.price} onChange={e => updateItem(idx, "price", e.target.value)} className={inputClass} style={inputStyle} placeholder="$" />
                  <button onClick={() => removeItem(idx)} style={{ color: "#555" }} className="hover:text-red-400 transition-colors flex-shrink-0"><Trash2 size={13} /></button>
                </div>
              ))}
              <div className="text-right text-[11px] font-bold mt-1" style={{ color: "#D4AF37" }}>
                Total: ${orderTotal(items).toFixed(2)}
              </div>
            </div>
          </div>

          {/* Gift note */}
          <div>
            <label className={labelClass} style={labelStyle}>Gift Note</label>
            <textarea rows={3} value={form.giftNote} onChange={set("giftNote")} className={`${inputClass} resize-none`} style={inputStyle} placeholder="Message enclosed with the gift..." />
          </div>

          {/* Internal note */}
          <div>
            <label className={labelClass} style={labelStyle}>Internal Note (not sent to customer)</label>
            <textarea rows={2} value={form.internalNote} onChange={set("internalNote")} className={`${inputClass} resize-none`} style={inputStyle} placeholder="VIP client, priority handling, etc..." />
          </div>
        </div>

        <div className="flex gap-3 px-6 pb-6">
          <button onClick={onClose} className="flex-1 py-2.5 text-[10px] tracking-wider border transition-colors hover:border-[#555]" style={{ fontFamily: "var(--font-cinzel), serif", color: "#666", borderColor: "#2A2A1A" }}>Cancel</button>
          <button onClick={handleSave} className="flex-1 py-2.5 text-[10px] tracking-wider font-bold transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}>
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Delete Confirm ────────────────────────────────────────────────────────────
function ConfirmDelete({ order, onConfirm, onCancel }: { order: Order; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" style={{ background: "rgba(0,0,0,0.85)" }}>
      <div className="w-full max-w-sm border p-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A", borderTop: "2px solid #ef4444" }}>
        <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F5F0E8" }}>Delete Order?</h3>
        <p className="text-[12px] mb-5" style={{ color: "#888" }}>This will permanently delete <strong style={{ color: "#ccc" }}>{order.id}</strong> for <strong style={{ color: "#ccc" }}>{order.recipient.name}</strong>. This cannot be undone.</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-2.5 text-[10px] tracking-wider border" style={{ fontFamily: "var(--font-cinzel), serif", color: "#666", borderColor: "#2A2A1A" }}>Cancel</button>
          <button onClick={onConfirm} className="flex-1 py-2.5 text-[10px] tracking-wider font-bold text-white" style={{ background: "#ef4444", fontFamily: "var(--font-cinzel), serif" }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

// ── Inline Status Editor ──────────────────────────────────────────────────────
function StatusBadge({ order, onChange }: { order: Order; onChange: (s: OrderStatus) => void }) {
  const [open, setOpen] = useState(false);
  const color = STATUS_COLORS[order.status];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-2.5 py-1 text-[8px] tracking-[0.1em] uppercase"
        style={{ background: `${color}18`, color, fontFamily: "var(--font-cinzel), serif" }}
      >
        {STATUS_LABELS[order.status]} <ChevronDown size={9} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 z-10 border w-36 py-1 shadow-xl" style={{ background: "#111108", borderColor: "#2A2A1A" }}>
          {STATUS_PIPELINE.map(s => (
            <button
              key={s}
              onClick={() => { onChange(s); setOpen(false); }}
              className="w-full text-left px-3 py-1.5 text-[9px] tracking-wider hover:bg-white/5 transition-colors"
              style={{ color: s === order.status ? "#D4AF37" : "#888", fontFamily: "var(--font-cinzel), serif" }}
            >
              {STATUS_LABELS[s]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<OrderStatus | "all">("all");
  const [showAdd, setShowAdd] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Order | null>(null);
  const [sendingLink, setSendingLink] = useState<string | null>(null);
  const [sent, setSent] = useState<string | null>(null);

  const refresh = useCallback(() => setOrders(loadOrders()), []);

  useEffect(() => { refresh(); }, [refresh]);

  const filtered = orders.filter(o => {
    const matchSearch = !search || o.id.toLowerCase().includes(search.toLowerCase()) || o.recipient.name.toLowerCase().includes(search.toLowerCase()) || o.recipient.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  function handleStatusChange(orderId: string, status: OrderStatus) {
    updateOrder(orderId, { status });
    refresh();
  }

  function handleDelete(order: Order) {
    deleteOrder(order.id);
    setDeleteTarget(null);
    refresh();
  }

  async function handleSendPaymentLink(order: Order) {
    setSendingLink(order.id);
    try {
      const res = await fetch("/api/stripe/payment-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: order.id, email: order.recipient.email, amount: order.total, recipientName: order.recipient.name }),
      });
      const data = await res.json();
      if (data.url) {
        updateOrder(order.id, {
          stripePaymentLink: data.url,
          stripePaymentLinkSentAt: new Date().toISOString(),
          status: order.status === "confirmed" ? "payment-sent" : order.status,
        });
        setSent(order.id);
        setTimeout(() => setSent(null), 3000);
        refresh();
      }
    } catch {
      alert("Failed to generate payment link. Check your Stripe API key.");
    } finally {
      setSendingLink(null);
    }
  }

  const totalRevenue = orders.filter(o => o.status === "paid" || o.status === "shipped" || o.status === "delivered").reduce((s, o) => s + o.total, 0);
  const pendingCount = orders.filter(o => o.status === "pre-order" || o.status === "confirmed").length;

  return (
    <div className="min-h-screen px-4 lg:px-10 py-8" style={{ background: "#080806" }}>
      {showAdd && (
        <AddOrderModal
          onClose={() => setShowAdd(false)}
          onSave={() => { setShowAdd(false); refresh(); }}
        />
      )}
      {deleteTarget && (
        <ConfirmDelete
          order={deleteTarget}
          onConfirm={() => handleDelete(deleteTarget)}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Order Management</p>
          <h1 className="text-3xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>All Orders</h1>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 px-4 py-2.5 text-[9px] tracking-[0.15em] uppercase font-semibold transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
        >
          <Plus size={12} /> New Order
        </button>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total Orders", value: orders.length },
          { label: "Pending Action", value: pendingCount, highlight: pendingCount > 0 },
          { label: "Revenue Collected", value: `$${totalRevenue.toLocaleString()}` },
          { label: "Awaiting Payment", value: orders.filter(o => o.status === "payment-sent").length },
        ].map(stat => (
          <div key={stat.label} className="border p-4" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <p className="text-[8px] tracking-wider uppercase mb-1" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{stat.label}</p>
            <p className="text-xl font-bold" style={{ fontFamily: "var(--font-cormorant), serif", color: (stat as {highlight?: boolean}).highlight ? "#D4AF37" : "#F5F0E8" }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, email, or order ID…"
            className="w-full pl-9 pr-4 py-2 text-[12px] border outline-none focus:border-[#D4AF37] bg-transparent transition-colors"
            style={{ borderColor: "#2A2A1A", color: "#ccc" }}
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={12} style={{ color: "#555" }} />
          {(["all", ...Object.keys(STATUS_LABELS)] as (OrderStatus | "all")[]).map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className="px-3 py-1 text-[8px] tracking-[0.1em] uppercase border transition-all"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                borderColor: filterStatus === s ? "#D4AF37" : "#2A2A1A",
                color: filterStatus === s ? "#D4AF37" : "#555",
                background: filterStatus === s ? "#D4AF3710" : "transparent",
              }}
            >
              {s === "all" ? "All" : STATUS_LABELS[s as OrderStatus]}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E1E14" }}>
                {["Order", "Recipient", "Items", "Total", "Status", "Actions"].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-[8px] tracking-[0.2em] uppercase" style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-sm" style={{ color: "#444" }}>
                    No orders found.
                  </td>
                </tr>
              ) : filtered.map(order => (
                <tr key={order.id} className="border-b hover:bg-white/[0.015] transition-colors group" style={{ borderColor: "#1A1A12" }}>
                  <td className="px-4 py-3">
                    <p className="text-xs font-mono mb-0.5" style={{ color: "#D4AF37" }}>{order.id}</p>
                    <p className="text-[10px]" style={{ color: "#444" }}>{new Date(order.createdAt).toLocaleDateString()}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-semibold" style={{ color: "#ccc" }}>{order.recipient.name}</p>
                    <p className="text-[10px]" style={{ color: "#555" }}>{order.recipient.email}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-xs" style={{ color: "#888" }}>{order.items.length} item{order.items.length !== 1 ? "s" : ""}</p>
                    <p className="text-[10px]" style={{ color: "#555" }}>{order.items.map(i => i.name).join(", ").slice(0, 40)}{order.items.map(i => i.name).join(", ").length > 40 ? "…" : ""}</p>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#ccc" }}>${order.total.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <StatusBadge order={order} onChange={s => handleStatusChange(order.id, s)} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/portal/orders/${order.id}`}
                        className="p-1.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                        style={{ borderColor: "#2A2A1A", color: "#555" }}
                        title="View & Chat"
                      >
                        <Eye size={12} />
                      </Link>
                      <button
                        onClick={() => handleSendPaymentLink(order)}
                        disabled={sendingLink === order.id}
                        className="p-1.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37] disabled:opacity-40"
                        style={{
                          borderColor: sent === order.id ? "#22c55e" : order.stripePaymentLink ? "#D4AF3730" : "#2A2A1A",
                          color: sent === order.id ? "#22c55e" : order.stripePaymentLink ? "#D4AF37" : "#555",
                        }}
                        title={order.stripePaymentLink ? "Resend Payment Link" : "Send Payment Link"}
                      >
                        {sent === order.id ? <CheckCircle size={12} /> : sendingLink === order.id ? <span className="text-[8px]">…</span> : <Send size={12} />}
                      </button>
                      <button
                        onClick={() => setDeleteTarget(order)}
                        className="p-1.5 border transition-all hover:border-red-500 hover:text-red-500"
                        style={{ borderColor: "#2A2A1A", color: "#555" }}
                        title="Delete"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filtered.length > 0 && (
        <p className="text-[10px] mt-3" style={{ color: "#444" }}>
          Showing {filtered.length} of {orders.length} order{orders.length !== 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
}
