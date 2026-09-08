"use client";

import React from "react";
import { Radio, Music, Printer, Link2, Soup } from "lucide-react";

export default function Navbar({ onOpenPoster, onOpenAddSong }) {
  return (
    <nav className="fixed top-4 inset-x-0 z-50 px-4 flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-6xl w-full flex flex-wrap items-center justify-between gap-3 px-5 py-2.5 rounded-full glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/20">
        {/* Brand & Live Indicator */}
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-2 group" href="#">
            <span className="w-2.5 h-2.5 rounded-full bg-sindoor animate-ping"></span>
            <span className="font-serif font-bold text-lg md:text-xl text-sholapith tracking-wide group-hover:text-pujaGold transition-colors">
              দুর্গাপূজার গান
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-white/15 text-xs text-sholapith-muted">
            <span className="flex items-center gap-1 text-rose-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> 1,420 listening
            </span>
            <span className="text-white/30">•</span>
            <span className="text-pujaGold font-medium">শারদীয়া উৎসব</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <a
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-sholapith hover:bg-white/10 transition-colors border border-white/10"
            href="#player-section"
          >
            <Radio className="w-3.5 h-3.5 text-pujaGold" /> Radio Deck
          </a>
          <a
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-sholapith hover:bg-white/10 transition-colors border border-white/10"
            href="#playlist-section"
          >
            <Music className="w-3.5 h-3.5 text-pujaGold" /> Playlist
          </a>
          <button
            onClick={onOpenAddSong}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-sindoor/20 hover:bg-sindoor/30 text-rose-200 border border-sindoor/40 transition-all"
            type="button"
          >
            <span className="text-sindoor font-bold">+</span>
            <span>Add Song</span>
          </button>
          <button
            onClick={onOpenPoster}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/15 text-sholapith border border-white/15 transition-all"
            type="button"
          >
            <Printer className="w-3.5 h-3.5 text-pujaGold" />
            <span className="hidden sm:inline">QR Poster</span>
          </button>
          <button
            onClick={onOpenPoster}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sindoor hover:bg-sindoor-dark text-white shadow-lg transition-all border border-rose-400/40"
            type="button"
          >
            <Soup className="w-3.5 h-3.5 text-amber-300" />
            <span>Fuchka Counter</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
