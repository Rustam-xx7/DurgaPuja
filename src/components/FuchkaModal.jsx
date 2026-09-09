"use client";

import React, { useState } from "react";
import { X, Soup, Heart, Sparkles, Check } from "lucide-react";

export default function FuchkaModal({ isOpen, onClose }) {
  const [plates, setPlates] = useState(2);
  const [purchased, setPurchased] = useState(false);

  if (!isOpen) return null;

  const pricePerPlate = 30; // ₹30 per plate
  const totalPrice = plates * pricePerPlate;

  const handleBuy = () => {
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all">
      <div className="relative max-w-md w-full glass-panel rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-2xl text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-sholapith flex items-center justify-center transition-colors cursor-pointer"
          type="button"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 p-0.5 shadow-lg flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
            <Soup className="w-8 h-8 text-amber-300 animate-bounce" />
          </div>
        </div>

        {purchased ? (
          <div className="py-8 space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-sholapith">
              অসংখ্য ধন্যবাদ! ❤️
            </h3>
            <p className="text-sm text-pujaGold">
              Thank you for treating us to {plates} plate{plates > 1 ? "s" : ""} of spicy Fuchka!
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-xs text-amber-300 font-serif font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Support Durga Puja Radio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sholapith">
                Buy Me a Fuchka 🥟
              </h2>
              <p className="text-xs sm:text-sm text-sholapith-muted mt-1">
                ফুচকা খাবেন নাকি খাওয়াবেন? Treat the creators to hot & crispy festive Fuchka!
              </p>
            </div>

            {/* Plate Selector */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              <span className="text-xs text-sholapith-muted block">Select number of plates:</span>
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

              <div className="pt-2 text-center">
                <span className="text-xs text-sholapith-muted">Total: </span>
                <span className="text-lg font-bold font-mono text-pujaGold">₹{totalPrice}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleBuy}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-sindoor hover:opacity-95 text-white font-serif font-bold text-sm shadow-xl transition-all border border-amber-300/40 flex items-center justify-center gap-2 cursor-pointer"
                type="button"
              >
                <Heart className="w-4 h-4 fill-white text-rose-200" />
                <span>Treat {plates} Plate{plates > 1 ? "s" : ""} of Fuchka</span>
              </button>
              <p className="text-[11px] text-sholapith-muted">
                Happy Durga Puja · শারদীয়ার প্রীতি ও শুভেচ্ছা
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
