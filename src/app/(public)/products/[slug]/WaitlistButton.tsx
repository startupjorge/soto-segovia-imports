"use client";

import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

export default function WaitlistButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
      <button
        onClick={() => setOpen(true)}
        className="w-full py-4 text-[12px] font-bold tracking-wider uppercase transition-all hover:bg-[#C9A227]"
        style={{ background: "#1A1A1A", color: "white", fontFamily: "var(--font-cinzel), serif" }}
      >
        Join the Waitlist
      </button>
    </>
  );
}
