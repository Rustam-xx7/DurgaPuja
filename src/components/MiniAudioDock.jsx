"use client";

import React from "react";
import { Play, Pause, Radio, ChevronUp } from "lucide-react";

export default function MiniAudioDock({ track, isPlaying, onTogglePlay }) {
  if (!track) return null;

  return (
    <aside className="fixed bottom-4 inset-x-0 z-40 px-4 pointer-events-none">
      <div className="max-w-4xl mx-auto w-full pointer-events-auto glass-panel rounded-full shadow-[0_16px_40px_rgba(0,0,0,0.7)] px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 border border-white/20">
        {/* Track Title Info */}
        <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
          <button
            onClick={onTogglePlay}
            className="w-10 h-10 shrink-0 rounded-full bg-sindoor hover:bg-sindoor-dark text-white flex items-center justify-center transition-all shadow-md border border-rose-400/40"
            type="button"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-pujaGold font-semibold uppercase font-mono">
                Pandal Live Radio
              </span>
              <span className="text-white/30">•</span>
              <span className="text-rose-300 font-medium">Mahashtami Stream</span>
            </div>
            <span className="text-sm font-serif font-bold text-sholapith truncate">
              {track.bengaliTitle || track.title}
            </span>
          </div>
        </div>

        {/* Action Button to scroll to player */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          <a
            href="#player-section"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs bg-pujaGold/20 hover:bg-pujaGold/30 text-pujaGold border border-pujaGold/40 transition-colors font-serif"
          >
            <span>View Player</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
