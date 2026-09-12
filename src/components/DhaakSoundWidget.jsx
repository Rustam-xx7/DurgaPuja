"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, X } from "lucide-react";

export default function DhaakSoundWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [dhaakVolume, setDhaakVolume] = useState(0); // Starts at 0%
  const audioRef = useRef(null);

  // Sync Dhaak Audio element volume & playback state
  useEffect(() => {
    if (!audioRef.current) return;
    const vol = dhaakVolume / 100;
    audioRef.current.volume = vol;

    if (dhaakVolume > 0) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Dhaak audio play error:", err);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [dhaakVolume]);

  const handleToggleWidget = () => {
    setIsOpen((prev) => !prev);
    // If opening for first time and volume is 0, set to 50% for instant feedback
    if (!isOpen && dhaakVolume === 0) {
      setDhaakVolume(50);
    }
  };

  const isPlaying = dhaakVolume > 0;

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Hidden Loop Audio Element for Dhaak Sound */}
      <audio ref={audioRef} src="/sounds/dhaak.mp3" loop preload="auto" />

      {/* Floating Sound Bar Control Card (shown when user taps the circular button) */}
      {isOpen && (
        <div className="glass-panel p-4 rounded-2xl border border-pujaGold/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl bg-black/85 flex flex-col items-center gap-3 w-52 animate-fade-in text-center select-none border-2">
          <div className="flex items-center justify-between w-full border-b border-white/10 pb-2">
            <span className="text-xs font-serif font-bold text-pujaGold flex items-center gap-1.5">
              <span>ঢাকের শব্দ (Dhaak)</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sholapith-muted hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10"
              title="Close"
              type="button"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Dhaak Volume Slider */}
          <div className="flex flex-col items-center gap-2 w-full pt-1">
            <div className="flex items-center justify-between w-full text-[11px]">
              <span className="text-sholapith-muted flex items-center gap-1">
                {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-pujaGold" /> : <VolumeX className="w-3.5 h-3.5 text-rose-400" />}
                <span>Volume</span>
              </span>
              <span className="font-mono font-bold text-pujaGold">{dhaakVolume}%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={dhaakVolume}
              onChange={(e) => setDhaakVolume(Number(e.target.value))}
              className="w-full accent-pujaGold bg-black/60 h-2 rounded-lg cursor-pointer"
            />

            {/* Quick Volume Preset Buttons */}
            <div className="flex items-center justify-between w-full gap-1 pt-1">
              {[0, 35, 70, 100].map((v) => (
                <button
                  key={v}
                  onClick={() => setDhaakVolume(v)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                    dhaakVolume === v
                      ? "bg-pujaGold text-black font-bold shadow-md"
                      : "bg-white/10 text-sholapith-muted hover:text-white"
                  }`}
                  type="button"
                >
                  {v === 0 ? "Mute" : `${v}%`}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Circular Button with Dhaak PNG Image ONLY */}
      <button
        onClick={handleToggleWidget}
        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-2.5 bg-gradient-to-br from-amber-500/90 via-sindoor/90 to-rose-600/90 border-2 border-pujaGold transition-all cursor-pointer transform hover:scale-110 active:scale-95 flex items-center justify-center shrink-0 ${
          isPlaying
            ? "shadow-[0_0_25px_rgba(233,195,73,0.8)] border-pujaGold animate-pulse"
            : "shadow-[0_8px_25px_rgba(0,0,0,0.6)] border-pujaGold/50 hover:border-pujaGold"
        }`}
        title="Dhaak Ambience Sound"
        type="button"
      >
        <img
          src="/dhaak.png"
          alt="Dhaak"
          className="w-full h-full object-contain pointer-events-none drop-shadow-md"
        />

        {/* Playing Sound Indicator Ring */}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pujaGold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-pujaGold text-[8px] items-center justify-center font-bold text-black">
              🔊
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
