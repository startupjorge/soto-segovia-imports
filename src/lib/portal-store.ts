"use client";

// ── Types ─────────────────────────────────────────────────────────────────────

export type OrderStatus =
  | "pre-order"
  | "confirmed"
  | "payment-sent"
  | "paid"
  | "shipped"
  | "delivered"
  | "cancelled";

export type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

export type ChatMessage = {
  id: string;
  role: "admin" | "customer";
  text: string;
  timestamp: string;
};

export type Order = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  recipient: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  items: OrderItem[];
  giftNote: string;
  noteType: "typed" | "handwritten";
  tracking: string;
  stripePaymentLink: string;
  stripePaymentLinkSentAt: string;
  total: number;
  messages: ChatMessage[];
  internalNote: string;
};

// ── Defaults ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = "soto_segovia_orders";

function generateId(): string {
  const date = new Date();
  const year = date.getFullYear();
  const seq = Math.floor(Math.random() * 9000) + 1000;
  return `ORD-${year}-${seq}`;
}

function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

// ── Seed data ─────────────────────────────────────────────────────────────────

const SEED_ORDERS: Order[] = [
  {
    id: "ORD-2026-0012",
    createdAt: "2026-08-14T10:23:00Z",
    status: "paid",
    recipient: { name: "Michael Torres", email: "m.torres@vertexcap.com", address: "888 Brickell Ave", city: "Miami", state: "FL", zip: "33131", country: "US" },
    items: [
      { name: "Truffle Olive Oil", quantity: 2, price: 38 },
      { name: "Vanilla Vinegar", quantity: 1, price: 28 },
    ],
    giftNote: "Michael, thank you for being an incredible partner. Looking forward to many more years of success together.",
    noteType: "handwritten",
    tracking: "",
    stripePaymentLink: "https://buy.stripe.com/test_demo",
    stripePaymentLinkSentAt: "2026-08-14T11:00:00Z",
    total: 104,
    messages: [
      { id: "m1", role: "admin", text: "Hi Michael! Your pre-order has been confirmed. I've sent you a payment link. Let me know if you need anything.", timestamp: "2026-08-14T11:05:00Z" },
      { id: "m2", role: "customer", text: "Thank you! Just completed the payment. Excited to receive these.", timestamp: "2026-08-14T11:30:00Z" },
      { id: "m3", role: "admin", text: "Payment received — thank you! We're preparing your order now. Expected ship date is Aug 18.", timestamp: "2026-08-14T12:00:00Z" },
    ],
    internalNote: "VIP client — Vertex Capital. Handle with priority.",
  },
  {
    id: "ORD-2026-0011",
    createdAt: "2026-08-13T14:45:00Z",
    status: "payment-sent",
    recipient: { name: "Sarah Chen", email: "schen@bridgewatergroup.com", address: "200 Park Ave", city: "New York", state: "NY", zip: "10016", country: "US" },
    items: [
      { name: "Garlic Olive Oil", quantity: 3, price: 28 },
      { name: "Orange Wine 500ml", quantity: 2, price: 32 },
    ],
    giftNote: "Sarah, congratulations on the new role! Wishing you every success in this exciting next chapter.",
    noteType: "typed",
    tracking: "",
    stripePaymentLink: "https://buy.stripe.com/test_demo2",
    stripePaymentLinkSentAt: "2026-08-13T15:00:00Z",
    total: 148,
    messages: [
      { id: "m4", role: "admin", text: "Hi Sarah! Your gift order is confirmed. I just sent a secure payment link to your email.", timestamp: "2026-08-13T15:05:00Z" },
    ],
    internalNote: "",
  },
  {
    id: "ORD-2026-0010",
    createdAt: "2026-08-12T09:00:00Z",
    status: "pre-order",
    recipient: { name: "James Rodriguez", email: "jrodriguez@apexre.com", address: "1000 Brickell Plaza", city: "Miami", state: "FL", zip: "33131", country: "US" },
    items: [
      { name: "Truffle Olive Oil", quantity: 1, price: 38 },
      { name: "Orange Vinegar Reserva", quantity: 1, price: 34 },
      { name: "Lemon Olive Oil", quantity: 2, price: 28 },
    ],
    giftNote: "James, thanks for being an amazing client. Enjoy your new home!",
    noteType: "handwritten",
    tracking: "",
    stripePaymentLink: "",
    stripePaymentLinkSentAt: "",
    total: 128,
    messages: [],
    internalNote: "New pre-order from /shop. Waiting to confirm and send payment link.",
  },
];

// ── Storage helpers ───────────────────────────────────────────────────────────

export function loadOrders(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ORDERS));
      return SEED_ORDERS;
    }
    return JSON.parse(raw) as Order[];
  } catch {
    return SEED_ORDERS;
  }
}

function saveOrders(orders: Order[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export function getOrder(id: string): Order | undefined {
  return loadOrders().find((o) => o.id === id);
}

export function createOrder(data: Omit<Order, "id" | "createdAt" | "messages" | "stripePaymentLink" | "stripePaymentLinkSentAt">): Order {
  const order: Order = {
    ...data,
    id: generateId(),
    createdAt: new Date().toISOString(),
    messages: [],
    stripePaymentLink: "",
    stripePaymentLinkSentAt: "",
  };
  const orders = loadOrders();
  saveOrders([order, ...orders]);
  return order;
}

export function updateOrder(id: string, updates: Partial<Order>): Order | null {
  const orders = loadOrders();
  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return null;
  orders[idx] = { ...orders[idx], ...updates };
  saveOrders(orders);
  return orders[idx];
}

export function deleteOrder(id: string): boolean {
  const orders = loadOrders();
  const filtered = orders.filter((o) => o.id !== id);
  if (filtered.length === orders.length) return false;
  saveOrders(filtered);
  return true;
}

export function addMessage(orderId: string, role: "admin" | "customer", text: string): ChatMessage | null {
  const orders = loadOrders();
  const idx = orders.findIndex((o) => o.id === orderId);
  if (idx === -1) return null;
  const msg: ChatMessage = {
    id: generateMessageId(),
    role,
    text,
    timestamp: new Date().toISOString(),
  };
  orders[idx].messages = [...(orders[idx].messages ?? []), msg];
  saveOrders(orders);
  return msg;
}

// ── Computed helpers ──────────────────────────────────────────────────────────

export const STATUS_LABELS: Record<OrderStatus, string> = {
  "pre-order": "Pre-Order",
  confirmed: "Confirmed",
  "payment-sent": "Payment Sent",
  paid: "Paid",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export const STATUS_COLORS: Record<OrderStatus, string> = {
  "pre-order": "#888",
  confirmed: "#C9A227",
  "payment-sent": "#D4AF37",
  paid: "#3b82f6",
  shipped: "#8b5cf6",
  delivered: "#22c55e",
  cancelled: "#ef4444",
};

export const STATUS_PIPELINE: OrderStatus[] = [
  "pre-order",
  "confirmed",
  "payment-sent",
  "paid",
  "shipped",
  "delivered",
];

export function orderTotal(items: OrderItem[]): number {
  return items.reduce((s, i) => s + i.price * i.quantity, 0);
}
