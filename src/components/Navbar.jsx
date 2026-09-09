"use client";

import React from "react";
import { Soup, QrCode } from "lucide-react";

export default function Navbar({ activeUsers = 1, onOpenFuchka, onOpenPoster }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
      {/* Top Left: Live Active Users Counter */}
      <div className="pointer-events-auto flex items-center">
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel shadow-[0_8px_24px_rgba(0,0,0,0.5)] border border-white/20 text-xs sm:text-sm font-medium text-sholapith backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold text-emerald-400 font-mono tracking-wide">
            {activeUsers.toLocaleString()}
          </span>
          <span className="text-sholapith/90">
            {activeUsers === 1 ? "user live on site" : "users live on site"}
          </span>
        </div>
      </div>

      {/* Top Right: Buy me a Fuchka & Share with QR Buttons */}
      <div className="pointer-events-auto flex items-center gap-2.5">
        {/* Buy me a Fuchka Button */}
        <button
          onClick={onOpenFuchka}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-rose-500 to-sindoor hover:opacity-95 text-white shadow-[0_4px_20px_rgba(217,56,58,0.4)] border border-amber-300/40 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
          type="button"
        >
          <Soup className="w-4 h-4 text-amber-300 animate-bounce" />
          <span>Buy me a Fuchka</span>
        </button>

        {/* Share with QR Button */}
        <button
          onClick={onOpenPoster}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold glass-panel hover:bg-white/20 text-sholapith shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/25 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
          type="button"
        >
          <QrCode className="w-4 h-4 text-pujaGold" />
          <span>Share with QR</span>
        </button>
      </div>
    </header>
  );
}
