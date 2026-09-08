"use client";

import React from "react";
import { X, Sparkles, Youtube } from "lucide-react";

export default function VideoModal({ track, isOpen, onClose }) {
  if (!isOpen || !track) return null;

  let embedSrc = track.embedUrl;
  if (!embedSrc && track.id) {
    embedSrc = `https://www.youtube.com/embed/${track.id}?autoplay=1`;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl transition-all">
      <div className="relative max-w-4xl w-full glass-panel rounded-3xl p-5 sm:p-6 border border-white/25 shadow-2xl space-y-4">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sindoor animate-ping"></span>
            <span className="font-serif font-bold text-sholapith text-base sm:text-lg">
              {track.bengaliTitle || track.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-sholapith flex items-center justify-center transition-colors"
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Embed Frame */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/15">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedSrc}
            title={track.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-sholapith-muted gap-2">
          <div>
            <span className="font-semibold text-pujaGold">{track.artist}</span>
            {track.album ? ` • ${track.album}` : ""}
          </div>
          <span className="px-3 py-1 rounded-full bg-sindoor/20 text-rose-200 border border-sindoor/40 font-mono w-fit">
            {track.categoryLabel || "YouTube Video"}
          </span>
        </div>
      </div>
    </div>
  );
}
