"use client";

import React from "react";
import { QrCode } from "lucide-react";

export default function Navbar({ activeUsers = 1, onOpenFuchka, onOpenPoster }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 p-3 sm:p-6 flex items-center justify-between pointer-events-none">
      {/* Top Left: Live Active Users Counter */}
      <div className="pointer-events-auto flex items-center">
        <div className="flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel shadow-[0_8px_24px_rgba(0,0,0,0.5)] border border-white/20 text-xs sm:text-sm font-medium text-sholapith backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold text-emerald-400 font-mono tracking-wide">
            {activeUsers.toLocaleString()}
          </span>
          <span className="text-sholapith/90 hidden xs:inline sm:inline">
            {activeUsers === 1 ? "user live" : "users live"}
          </span>
          <span className="text-sholapith/90 xs:hidden sm:hidden">
            live
          </span>
        </div>
      </div>

      {/* Top Right: Buy me a Fuchka & Share with QR Buttons */}
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-2.5">
        {/* Buy me a Fuchka Button */}
        <button
          onClick={onOpenFuchka}
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-rose-500 to-sindoor hover:opacity-95 text-white shadow-[0_4px_20px_rgba(217,56,58,0.4)] border border-amber-300/40 transition-all cursor-pointer transform hover:scale-105 active:scale-95 shrink-0"
          title="by me fuchka"
          type="button"
        >
          <img src="/fuchka.png" alt="Fuchka" className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0" />
          <span className="whitespace-nowrap">by me phuchka</span>
        </button>

        {/* Share with QR Button (Round icon on mobile, full button on desktop) */}
        <button
          onClick={onOpenPoster}
          className="inline-flex items-center justify-center gap-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold glass-panel hover:bg-white/20 text-sholapith shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/25 transition-all cursor-pointer transform hover:scale-105 active:scale-95 shrink-0"
          title="Share with QR"
          type="button"
        >
          <QrCode className="w-4 h-4 text-pujaGold shrink-0" />
          <span className="hidden sm:inline whitespace-nowrap">Share with QR</span>
        </button>
      </div>
    </header>
  );
}

