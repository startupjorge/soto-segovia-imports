"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Recipient = {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type NoteType = "typed" | "handwritten";
export type OrderType = "once" | "subscribe";

export const SUBSCRIBE_DISCOUNT = 0.10;

export type CartState = {
  items: CartItem[];
  recipient: Recipient;
  giftNote: string;
  noteType: NoteType;
  orderType: OrderType;
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  setRecipient: (r: Recipient) => void;
  setGiftNote: (note: string) => void;
  setNoteType: (t: NoteType) => void;
  setOrderType: (t: OrderType) => void;
  clearCart: () => void;
  total: number;
  discountedTotal: number;
  itemCount: number;
};

const emptyRecipient: Recipient = {
  name: "", email: "", address: "", city: "", state: "", zip: "", country: "US",
};

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [recipient, setRecipientState] = useState<Recipient>(emptyRecipient);
  const [giftNote, setGiftNoteState] = useState("");
  const [noteType, setNoteTypeState] = useState<NoteType>("typed");
  const [orderType, setOrderTypeState] = useState<OrderType>("once");

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === product.slug);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }, []);

  const updateQty = useCallback((slug: string, qty: number) => {
    if (qty < 1) {
      setItems((prev) => prev.filter((i) => i.product.slug !== slug));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.product.slug === slug ? { ...i, quantity: qty } : i))
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setRecipientState(emptyRecipient);
    setGiftNoteState("");
    setNoteTypeState("typed");
    setOrderTypeState("once");
  }, []);

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const discountedTotal = orderType === "subscribe" ? total * (1 - SUBSCRIBE_DISCOUNT) : total;
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, recipient, giftNote, noteType, orderType,
      addItem, removeItem, updateQty,
      setRecipient: setRecipientState,
      setGiftNote: setGiftNoteState,
      setNoteType: setNoteTypeState,
      setOrderType: setOrderTypeState,
      clearCart, total, discountedTotal, itemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
