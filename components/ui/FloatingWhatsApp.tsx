"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/constants/contact";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hola, quiero más información sobre los planes de Covirnet")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
