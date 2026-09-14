"use client";

import React, { useState } from "react";
import { X, Copy, Check, Sparkles, CreditCard } from "lucide-react";

export default function FuchkaModal({ isOpen, onClose }) {
  const [plates, setPlates] = useState(2);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const upiId = "cdipayan6@okicici";
  const pricePerPlate = 30; // ₹30 per plate
  const totalPrice = plates * pricePerPlate;

  const handleCopyUpi = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all">
      <div className="relative max-w-md w-full glass-panel rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-2xl text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-sholapith flex items-center justify-center transition-colors cursor-pointer"
          type="button"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Fuchka PNG Icon Only */}
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 p-0.5 shadow-lg flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center p-3">
            <img src="/fuchka.png" alt="Fuchka" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-xs text-amber-300 font-serif font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Support Developer</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sholapith">
              Treat the Developer
            </h2>

            <p className="text-sm font-serif text-pujaGold font-semibold mt-1">
              দীপায়ন চক্রবর্তী (Dipayan Chakraborty)
            </p>

            <p className="text-xs sm:text-sm text-sholapith/90 mt-2 leading-relaxed font-serif">
              শুভ শারদীয়া! মা দুর্গার আশীর্বাদে আপনার জীবন আনন্দ ও শান্তিতে ভরে উঠুক।
            </p>
          </div>

          {/* Fuchka Plate Selector */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
            <span className="text-xs text-sholapith-muted flex items-center justify-center gap-1.5 font-medium">
              <img src="/fuchka.png" alt="Fuchka" className="w-4 h-4 object-contain" />
              <span>Select number of phuchka plates:</span>
            </span>

            <div className="flex items-center justify-center gap-2">
              {[1, 2, 5, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setPlates(num)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    plates === num
                      ? "bg-amber-500 text-black shadow-lg font-bold border border-amber-300"
                      : "bg-white/10 hover:bg-white/15 text-sholapith border border-white/10"
                  }`}
                  type="button"
                >
                  {num} {num === 1 ? "Plate" : "Plates"}
                </button>
              ))}
            </div>

            <div className="pt-1 text-center flex items-center justify-center gap-2">
              <span className="text-xs text-sholapith-muted">Total Contribution:</span>
              <span className="text-lg font-bold font-mono text-pujaGold">₹{totalPrice}</span>
            </div>
          </div>

          {/* Developer UPI ID Box */}
          <div className="bg-black/60 border border-amber-400/40 rounded-2xl p-3.5 space-y-2">
            <span className="text-[11px] uppercase font-mono font-semibold text-sholapith-muted tracking-wider block">
              Developer UPI ID (GPay / PhonePe / Paytm / BHIM)
            </span>

            <div className="flex items-center justify-between bg-white/10 rounded-xl px-3 py-2 border border-white/15">
              <span className="font-mono text-sm font-bold text-pujaGold select-all">
                {upiId}
              </span>

              <button
                onClick={handleCopyUpi}
                className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-all flex items-center gap-1 cursor-pointer"
                type="button"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Pay via UPI Action Button */}
          <div className="pt-1">
            <a
              href={`upi://pay?pa=${upiId}&pn=Dipayan%20Chakraborty&am=${totalPrice}&cu=INR`}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-sindoor hover:opacity-95 text-white font-serif font-bold text-sm shadow-xl transition-all border border-amber-300/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-4 h-4" />
              <span>Treat {plates} Plate{plates > 1 ? "s" : ""} of phuchka (₹{totalPrice})</span>
            </a>

            <p className="text-[11px] text-sholapith-muted mt-2">
              Happy Durga Puja · শারদীয়ার প্রীতি ও শুভেচ্ছা
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
