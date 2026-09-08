"use client";

import React from "react";
import { Play, Sparkles } from "lucide-react";

export default function YoutubePlayer({ track }) {
  if (!track) {
    return (
      <div className="w-full aspect-video rounded-2xl glass-panel-subtle flex flex-col items-center justify-center p-6 text-sholapith-muted border border-white/10">
        <Play className="w-12 h-12 text-pujaGold mb-2 animate-bounce" />
        <p className="text-sm font-serif">Select a song from the playlist below</p>
      </div>
    );
  }

  // Determine embed source URL
  let embedSrc = track.embedUrl;
  if (!embedSrc && track.id) {
    embedSrc = `https://www.youtube.com/embed/${track.id}?autoplay=1`;
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-panel border border-white/20 shadow-2xl relative group">
      {/* Top Video Header Badge */}
      <div className="bg-black/50 px-4 py-2 flex items-center justify-between border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sindoor animate-pulse"></span>
          <span className="font-semibold text-pujaGold font-serif">Now Playing Video</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-sholapith-muted">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>YouTube HD Embed</span>
        </div>
      </div>

      {/* Responsive Video Container */}
      <div className="relative w-full aspect-video bg-black/80">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedSrc}
          title={track.title || "Durga Puja Song Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Video Footer Meta */}
      <div className="p-3 bg-black/40 backdrop-blur-md flex items-center justify-between text-xs border-t border-white/10">
        <div className="min-w-0 flex-1">
          <h4 className="font-serif font-bold text-sholapith truncate text-sm">
            {track.bengaliTitle || track.title}
          </h4>
          <p className="text-sholapith-muted text-[11px] truncate">
            {track.artist} {track.album ? `• ${track.album}` : ""}
          </p>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] bg-sindoor/30 text-rose-200 border border-sindoor/40 font-mono ml-2 shrink-0">
          {track.categoryLabel || "Festive Track"}
        </span>
      </div>
    </div>
  );
}
