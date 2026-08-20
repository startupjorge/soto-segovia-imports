"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ChevronDown } from "lucide-react";

type Message = {
  id: number;
  from: "user" | "manager";
  text: string;
  time: string;
};

const INITIAL: Message[] = [
  {
    id: 1,
    from: "manager",
    text: "Hi! I'm Maria, your account manager. How can I help you today?",
    time: "Now",
  },
];

export default function PortalChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [open, messages]);

  async function send() {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    setSending(true);

    const userMsg: Message = { id: Date.now(), from: "user", text, time: "Now" };
    setMessages((m) => [...m, userMsg]);

    // Submit to Apps Script
    const scriptUrl = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL;
    if (scriptUrl) {
      fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "Portal Chat Message", message: text }),
      }).catch(() => {});
    }

    // Auto-reply after short delay
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        from: "manager",
        text: "Thanks for reaching out! I'll get back to you shortly. For urgent orders call +1 (305) 555-0120.",
        time: "Now",
      };
      setMessages((m) => [...m, reply]);
      if (!open) setUnread((u) => u + 1);
      setSending(false);
    }, 1200);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div
          className="flex flex-col w-80 shadow-2xl border overflow-hidden"
          style={{ background: "#0D0D0A", borderColor: "#2A2A1A", height: 420 }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ background: "#111108", borderColor: "#2A2A1A" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ background: "#1E1C10", border: "1px solid #D4AF37" }}
              >
                👤
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#F5F0E8" }}>Maria González</p>
                <p className="text-[10px] flex items-center gap-1" style={{ color: "#4ADE80" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Account Manager
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: "#555" }} className="hover:text-white transition-colors">
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[75%] px-3 py-2 text-xs leading-relaxed"
                  style={{
                    background: msg.from === "user" ? "#D4AF37" : "#1A1A12",
                    color: msg.from === "user" ? "#000" : "#ccc",
                    borderRadius: msg.from === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="px-3 py-2 text-xs" style={{ background: "#1A1A12", color: "#555", borderRadius: "12px 12px 12px 2px" }}>
                  Typing…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-3 py-3 border-t" style={{ borderColor: "#2A2A1A" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Message your account manager…"
              className="flex-1 text-xs bg-transparent outline-none placeholder-[#444]"
              style={{ color: "#ccc" }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || sending}
              className="w-8 h-8 flex items-center justify-center transition-colors disabled:opacity-40"
              style={{ background: "#D4AF37", color: "#000" }}
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-105 relative"
        style={{ background: open ? "#1A1A12" : "#C9A227", color: open ? "#C9A227" : "#000", border: "1px solid #2A2A1A" }}
      >
        {open ? <X size={18} /> : <MessageSquare size={18} />}
        {!open && unread > 0 && (
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{ background: "#ef4444", color: "#fff" }}
          >
            {unread}
          </span>
        )}
      </button>
    </div>
  );
}
