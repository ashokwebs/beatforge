import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeatForge — Autonomous AI Music Studio & Generative Audio Workstation",
  description: "Next-gen generative music engine, 808 beat synthesis, and automated vertical visualizer videos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#080A10] text-slate-100 antialiased selection:bg-rose-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
