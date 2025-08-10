import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krrish — your go-to freelancer | Videography, Editing & AI Automations (Toronto)",
  description: "Videography and automations that get results. Retention reels, corporate video, and AI systems that book calls and collect payments. Toronto & GTA.",
  keywords: ["video editor toronto","videography toronto","video editing gta","ai automation toronto","lead gen automation gta"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
