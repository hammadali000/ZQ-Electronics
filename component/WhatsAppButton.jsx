"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/923000000000?text=" +
    encodeURIComponent("Assalam o Alaikum ZQ Electronics, mujhe installment plans ke baray mein maloomat chahiye.");

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center gap-2 rounded-full bg-emerald-500 py-3 pl-4 pr-5 font-semibold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
        </span>
        <MessageCircle size={22} className="shrink-0" />
        <span className="hidden text-sm font-bold md:inline">WhatsApp Us</span>
      </a>
    </aside>
  );
}