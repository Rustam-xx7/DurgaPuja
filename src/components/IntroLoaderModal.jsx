"use client";

import React, { useState, useEffect } from "react";
import { Play, Sparkles, X } from "lucide-react";

export default function IntroLoaderModal({ onConfirmStart }) {
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if intro loader was already shown during this browser session
    if (typeof window !== "undefined" && sessionStorage.getItem("durgaIntroSeen")) {
      setLoading(false);
      setShowPrompt(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setShowPrompt(true);
    }, 800);

    // Auto-safety fallback: automatically hide loader after 3 seconds if stuck
    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  const handleDismiss = (startAudio) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("durgaIntroSeen", "true");
    }
    setLoading(false);
    setShowPrompt(false);
    if (onConfirmStart) {
      onConfirmStart(startAudio);
    }
  };

  if (!loading && !showPrompt) return null;

  return (
    <>
      {/* Loading Overlay Screen */}
      {loading && (
        <div
          onClick={() => handleDismiss(true)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 bg-black/80 backdrop-blur-xl transition-opacity duration-500 cursor-pointer"
          title="Click anywhere to skip loading"
        >
          <div className="relative max-w-md w-full glass-panel rounded-3xl p-8 border border-white/20 shadow-2xl flex flex-col items-center text-center">
            {/* Pulsing Acoustic Rings */}
            <div className="relative w-20 h-20 flex items-center justify-center mb-4">
              <div className="absolute inset-0 rounded-full border border-pujaGold/40 animate-ripple"></div>
              <div
                className="absolute inset-2 rounded-full border border-sindoor/50 animate-ripple"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sindoor/40 via-black/80 to-pujaGold/40 border-2 border-pujaGold/70 flex items-center justify-center shadow-[0_0_20px_rgba(233,195,73,0.4)] animate-trinetra">
                <span className="text-xl">🕉️</span>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sindoor/25 border border-sindoor/40 text-[11px] font-semibold uppercase text-rose-300 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-sindoor animate-ping"></span>
                ঢাকের আওয়াজ লোড হচ্ছে...
              </span>
              <h2 className="text-2xl font-serif font-bold text-sholapith">
                মা আসছেন... সুর বাঁধছে
              </h2>
              <p className="text-xs font-serif text-pujaGold">
                Loading Durga Puja Pandal Radio...
              </p>
            </div>

            <div className="w-full bg-black/50 rounded-full h-2 p-0.5 border border-white/20 overflow-hidden mb-2">
              <div className="loader-progress-active h-full bg-gradient-to-r from-sindoor via-pujaGold to-amber-300 rounded-full shadow-[0_0_12px_rgba(217,56,58,0.8)]"></div>
            </div>
            <p className="text-[10px] text-sholapith-muted">Click anywhere to skip</p>
          </div>
        </div>
      )}

      {/* Start Audio User Gesture Prompt Modal */}
      {showPrompt && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all">
          <div className="relative max-w-lg w-full glass-panel rounded-3xl p-6 sm:p-8 border border-white/25 shadow-2xl text-center overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => handleDismiss(false)}
              className="absolute top-4 right-4 p-2 rounded-full glass-panel-subtle hover:bg-white/20 text-sholapith transition-colors"
              title="Close"
              type="button"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-sindoor/25 to-pujaGold/25 border border-pujaGold/40 text-xs text-pujaGold font-semibold uppercase tracking-wider mb-3 font-serif">
              <Sparkles className="w-3.5 h-3.5" />
              <span>শুভ শারদীয়া · Sharadotsav Live Radio</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sholapith">
              শারদীয়ার সুর শুনবেন কি?
            </h3>
            <p className="text-sm font-serif text-pujaGold mt-1">
              Tune into the live Durga Puja festival beats?
            </p>
            <p className="text-xs sm:text-sm text-sholapith-muted mt-3 leading-relaxed max-w-md mx-auto">
              Join 1,420+ devotees listening to live Dhaak, Agomoni, and YouTube video playlists. Tap play to enable rich pandal audio.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleDismiss(true)}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-sindoor hover:bg-sindoor-dark text-white font-serif font-bold text-base transition-all shadow-[0_4px_25px_rgba(217,56,58,0.6)] border border-rose-300/40 flex items-center justify-center gap-2 cursor-pointer"
                type="button"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>সুর বাজান · Start Music & Video</span>
              </button>
              <button
                onClick={() => handleDismiss(false)}
                className="w-full sm:w-auto py-3.5 px-5 rounded-full glass-panel hover:bg-white/15 text-sholapith-muted hover:text-sholapith font-medium text-xs sm:text-sm transition-all border border-white/20 whitespace-nowrap cursor-pointer"
                type="button"
              >
                Explore Muted · নিঃশব্দে দেখুন
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
