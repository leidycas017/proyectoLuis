"use client";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function Providers({ children }: { children: React.ReactNode }) {
  // Sticky Button
  const [sticky] = useState(true);

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
      {/* Sticky Button */}
      <a
        href="https://api.whatsapp.com/send?phone=573136709578"
        className={`fixed right-4 top-1/2 z-50 -translate-y-1/2 transform rounded-full bg-[#189D0E] px-4 py-2 font-bold text-white shadow-md hover:shadow-lg md:right-8 ${sticky ? "visible" : "hidden"}`}
      >
        <FaWhatsapp className="mr-2 inline-block  text-3xl" />
      </a>
    </ThemeProvider>
  );
}
