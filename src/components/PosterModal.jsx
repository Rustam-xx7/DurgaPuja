"use client";

import React from "react";
import { X, Printer, QrCode, Sparkles } from "lucide-react";

export default function PosterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all">
      <div className="relative max-w-lg w-full glass-panel rounded-3xl p-6 sm:p-8 border border-white/25 shadow-2xl text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-sholapith flex items-center justify-center transition-colors"
          type="button"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Printable Card Area */}
        <div id="printable-poster" className="p-6 rounded-2xl bg-gradient-to-b from-sindoor/30 via-black/80 to-black border border-pujaGold/40 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pujaGold/20 border border-pujaGold/40 text-xs text-pujaGold font-serif font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>শুভ শারদীয়া · Pandal QR Poster</span>
          </div>

          <h2 className="text-3xl font-serif font-bold text-sholapith">
            দুর্গাপূজার গান
          </h2>
          <p className="text-sm font-serif text-pujaGold">
            Durga Puja Pandal Radio & Live Video Playlist
          </p>

          <div className="my-4 p-4 bg-white rounded-2xl inline-block shadow-xl border-4 border-pujaGold">
            <QrCode className="w-36 h-36 text-slate-900" />
          </div>

          <p className="text-xs text-sholapith/90 leading-relaxed font-serif">
            স্ক্যান করুন এবং যেকোনো প্যান্ডেল থেকে সরাসরি বিনামূল্যে শুনুন ও দেখুন বাংলা শারদীয়া গান ও ভিডিও প্লেলিস্ট।
          </p>
          <p className="text-[11px] text-sholapith-muted">
            Scan with smartphone camera to stream 24/7 Durga Puja Songs.
          </p>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex-1 py-3 rounded-full bg-sindoor hover:bg-sindoor-dark text-white font-serif font-bold text-sm transition-all shadow-lg border border-rose-300/40 flex items-center justify-center gap-2"
            type="button"
          >
            <Printer className="w-4 h-4" />
            <span>Print A4 / A3 Poster</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-full glass-panel hover:bg-white/15 text-sholapith-muted text-xs font-medium transition-all border border-white/20"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
