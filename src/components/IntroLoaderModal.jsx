"use client";

import React, { useState, useEffect } from "react";
import { Play, SkipForward } from "lucide-react";

export default function IntroLoaderModal({ onConfirmStart }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if intro modal was already shown during this browser session
    if (typeof window !== "undefined" && sessionStorage.getItem("durgaIntroSeen")) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  }, []);

  const handleDismiss = (startAudio) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("durgaIntroSeen", "true");
      if (startAudio) {
        window.dispatchEvent(new CustomEvent("startPujaAudio"));
      }
    }
    setIsOpen(false);
    if (onConfirmStart) {
      onConfirmStart(startAudio);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative max-w-[350px] sm:max-w-[400px] w-full aspect-square rounded-3xl p-6 sm:p-8 border border-pujaGold/40 shadow-[0_0_50px_rgba(233,195,73,0.35)] text-center overflow-hidden bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/alpona.jpg')" }}
      >
        {/* Ambient Dark & Red Backdrop Overlay for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-sindoor-dark/10 backdrop-blur-[2px]" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
          {/* Main & Subtitle Greeting Text (Centered in upper area) */}
          <div className="my-auto flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sholapith tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              শারদীয়ার আন্তরিক শুভেচ্ছা!
            </h2>

            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-pujaGold mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              শুভ দুর্গা পুজো
            </h3>
          </div>

          {/* Action Buttons: Play & Skip (Anchored near bottom) */}
          <div className="mt-auto flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-sm pt-4">
            <button
              onClick={() => handleDismiss(true)}
              className="w-full sm:flex-1 py-3 px-5 rounded-full bg-sindoor hover:bg-sindoor-dark text-white font-serif font-bold text-base transition-all shadow-[0_4px_25px_rgba(217,56,58,0.7)] border border-rose-300/40 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              type="button"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>প্লে করুন</span>
            </button>

            <button
              onClick={() => handleDismiss(false)}
              className="w-full sm:flex-1 py-3 px-5 rounded-full bg-black/60 hover:bg-white/20 text-sholapith-muted hover:text-sholapith font-serif font-medium text-base transition-all border border-white/30 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              type="button"
            >
              <SkipForward className="w-4 h-4" />
              <span>এড়িয়ে যান</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

