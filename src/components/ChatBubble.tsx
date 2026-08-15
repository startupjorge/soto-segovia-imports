"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";

type Message = { role: "user" | "concierge"; text: string; time: string; sender?: string };

function now() {
  return new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

const SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL || "";

const TEAM = [
  { name: "Jorge", photo: "/jorge-soto.jpg", title: "Co-Founder" },
  { name: "Roberto", photo: "/roberto-segovia.jpg", title: "Co-Founder" },
  { name: "Maite", photo: "/maite-aranaz.jpg", title: "Concierge" },
];

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "concierge",
      sender: "Jorge",
      text: "Hola! 👋 I'm Jorge, co-founder of Soto & Segovia. Along with Roberto and our concierge Maite, we hand-source every product from small artisan producers in Altea, Spain. Whether you need the perfect corporate gift or have a question about an order — we're personally here to help.",
      time: now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"intro" | "chat">("intro");
  const [sending, setSending] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function startChat(e: React.FormEvent) {
    e.preventDefault();
    setStep("chat");
    const firstName = name.split(" ")[0];
    setMessages((prev) => [
      ...prev,
      {
        role: "concierge",
        sender: "Jorge",
        text: `So nice to meet you, ${firstName}! 🙏 Roberto, Maite, and I are all here. What can we help you with — a corporate gift, a product question, or something else?`,
        time: now(),
      },
    ]);
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || sending) return;
    const text = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text, time: now() }]);
    setSending(true);

    try {
      if (SCRIPT_URL) {
        const params = new URLSearchParams({
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" "),
          email,
          message: text,
          lang: "EN",
          source: "chat_bubble",
        });
        await fetch(`${SCRIPT_URL}?${params}`, { method: "GET", mode: "no-cors" });
      }

      setTimeout(() => {
        // Alternate between Jorge and Roberto for a personal feel
        const responders = ["Roberto", "Maite", "Jorge"];
        const responder = responders[messages.filter(m => m.role === "concierge").length % 3];
        setMessages((prev) => [
          ...prev,
          {
            role: "concierge",
            sender: responder,
            text: `Thanks for reaching out! We'll personally get back to you very soon. In the meantime, feel free to browse our curated gift boxes — designed specifically for executives and corporate gifting. 🎁`,
            time: now(),
          },
        ]);
        setSending(false);
      }, 1200);
    } catch {
      setSending(false);
    }
  }

  return (
    <>
      {/* Bubble button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[500] shadow-2xl transition-transform hover:scale-105 active:scale-95"
        style={{ background: "none", border: "none", padding: 0 }}
        aria-label="Open concierge chat"
      >
        {open ? (
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)" }}>
            <X size={22} style={{ color: "#000" }} />
          </div>
        ) : (
            <div className="flex flex-col items-end gap-1">
            <div className="relative flex -space-x-2">
              {TEAM.map((t) => (
                <div key={t.name} className="w-9 h-9 rounded-full overflow-hidden border-2 shadow-lg" style={{ borderColor: "#D4AF37" }}>
                  <Image src={t.photo} alt={t.name} width={36} height={36} className="w-full h-full object-cover" />
                </div>
              ))}
              {unread > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white z-10" style={{ background: "#ef4444" }}>
                  {unread}
                </span>
              )}
            </div>
            <span className="text-[9px] font-bold tracking-wider px-2 py-0.5" style={{ background: "linear-gradient(135deg, #8B6914, #C9A227)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}>
              💬 Need Help?
            </span>
          </div>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[499] w-[340px] shadow-2xl flex flex-col border"
          style={{ background: "#0D0D0A", borderColor: "#2A2A1A", borderTop: "2px solid #D4AF37", maxHeight: "520px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "#1E1E14" }}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {TEAM.map((t) => (
                  <div key={t.name} className="w-9 h-9 rounded-full overflow-hidden border-2" style={{ borderColor: "#D4AF37" }}>
                    <Image src={t.photo} alt={t.name} width={36} height={36} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[11px] font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cinzel), serif" }}>Jorge, Roberto & Maite</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
                  <p className="text-[9px]" style={{ color: "#22c55e" }}>All online · reply within minutes</p>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: "#555" }}>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                {msg.role === "concierge" && msg.sender && (
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full overflow-hidden" style={{ border: "1px solid #D4AF37" }}>
                      <Image
                        src={TEAM.find(t => t.name === msg.sender)?.photo || "/jorge-soto.jpg"}
                        alt={msg.sender}
                        width={20} height={20}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[9px] font-bold tracking-wide" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>{msg.sender}</p>
                  </div>
                )}
                <div
                  className="max-w-[85%] px-3 py-2 text-[12px] leading-relaxed"
                  style={{
                    background: msg.role === "user" ? "linear-gradient(135deg, #8B6914, #C9A227)" : "#1A1A12",
                    color: msg.role === "user" ? "#000" : "#ccc",
                  }}
                >
                  {msg.text}
                </div>
                <p className="text-[9px] mt-0.5 px-1" style={{ color: "#444" }}>{msg.time}</p>
              </div>
            ))}
            {sending && (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden" style={{ border: "1px solid #D4AF37" }}>
                  <Image src="/maite-aranaz.jpg" alt="Maite" width={20} height={20} className="w-full h-full object-cover" />
                </div>
                <div className="px-3 py-2 text-[12px]" style={{ background: "#1A1A12", color: "#555" }}>
                  <span className="animate-pulse">Maite is typing…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Intro form or chat input */}
          {step === "intro" ? (
            <form onSubmit={startChat} className="border-t p-4 flex flex-col gap-3" style={{ borderColor: "#1E1E14" }}>
              <p className="text-[11px] leading-relaxed" style={{ color: "#666" }}>Tell us your name so we can greet you personally:</p>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-3 py-2.5 text-[12px] border outline-none focus:border-[#D4AF37] bg-transparent transition-colors"
                style={{ borderColor: "#2A2A1A", color: "#ccc" }}
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-3 py-2.5 text-[12px] border outline-none focus:border-[#D4AF37] bg-transparent transition-colors"
                style={{ borderColor: "#2A2A1A", color: "#ccc" }}
              />
              <button
                type="submit"
                className="py-2.5 text-[10px] tracking-wider font-bold flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
              >
                Chat with Us
              </button>
            </form>
          ) : (
            <form onSubmit={sendMessage} className="border-t p-3 flex gap-2" style={{ borderColor: "#1E1E14" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message us…"
                className="flex-1 px-3 py-2 text-[12px] border outline-none focus:border-[#D4AF37] bg-transparent transition-colors"
                style={{ borderColor: "#2A2A1A", color: "#ccc" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || sending}
                className="px-3 py-2 flex items-center justify-center disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, #8B6914, #C9A227)", color: "#000" }}
              >
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
