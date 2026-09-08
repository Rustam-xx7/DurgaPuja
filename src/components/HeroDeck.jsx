"use client";

import React from "react";
import { Printer, Music, Sparkles, Radio, Play } from "lucide-react";

export default function HeroDeck({ onOpenPoster, onScrollToSubmit }) {
  return (
    <section className="pt-6 pb-4 max-w-4xl mx-auto text-center space-y-6" id="hero-section">
      {/* Live Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-subtle text-xs text-sholapith-muted border border-white/15 shadow-md">
        <span className="w-2.5 h-2.5 rounded-full bg-sindoor animate-ping"></span>
        <span className="font-semibold text-rose-300 uppercase tracking-widest text-[11px] font-mono">
          Live Streaming Radio & Playlist
        </span>
        <span className="text-white/30">•</span>
        <span className="text-pujaGold font-serif">ম্যাডক্স স্কোয়ার টু বাগবাজার</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-sholapith tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          দুর্গাপূজার গান <span className="text-pujaGold block sm:inline font-sans font-light text-3xl sm:text-5xl">· শারদীয়া রেডিও</span>
        </h1>
        <p className="text-lg sm:text-2xl font-serif text-pujaGold/90 drop-shadow-md">
          Durga Puja Pandal Songs & 24/7 Festive Video Playlist
        </p>
      </div>

      {/* Hero Description */}
      <p className="text-sholapith/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        A free Bengali Durga Puja pandal radio & video player. Listen to Mahalaya chants, Dhaak rhythms, and Bengali festive hit songs live in a compact bottom player.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={onOpenPoster}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-sindoor hover:bg-sindoor-dark text-white font-medium text-sm transition-all shadow-[0_4px_20px_rgba(217,56,58,0.5)] border border-rose-300/30"
          type="button"
        >
          <Printer className="w-4 h-4" />
          <span>Print QR Poster</span>
        </button>
        <button
          onClick={onScrollToSubmit}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel hover:bg-white/15 text-sholapith font-medium text-sm transition-all border border-white/20"
          type="button"
        >
          <Music className="w-4 h-4 text-pujaGold" />
          <span>Add Your YouTube Song</span>
        </button>
      </div>

      {/* Feature Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-sholapith-muted pt-2">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel-subtle border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Free YouTube Stream</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel-subtle border border-white/10">
          <span className="w-2 h-2 rounded-full bg-sindoor"></span>
          <span>Dhak & Conch Layers</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel-subtle border border-white/10">
          <span className="w-2 h-2 rounded-full bg-pujaGold"></span>
          <span>Dynamic Playlist Array</span>
        </div>
      </div>
    </section>
  );
}
