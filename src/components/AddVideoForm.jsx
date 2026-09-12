"use client";

import React, { useState } from "react";
import { Send, Sparkles, MessageCircle } from "lucide-react";

export default function AddVideoForm({ onAddTrack }) {
  const [title, setTitle] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  // Parse YouTube video ID from URL or iframe string
  const extractYoutubeId = (str) => {
    if (!str) return null;
    const iframeMatch = str.match(/src=["']([^"']+)["']/);
    const targetUrl = iframeMatch ? iframeMatch[1] : str;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = targetUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const songTitle = title.trim() || "Durga Puja Song";
    const songUrl = inputUrl.trim();

    // 1. Build pre-written WhatsApp message
    const waMessage = `হ্যালো! দুর্গাপূজার রেডিওর জন্য একটি নতুন গানের সুপারিশ:\n\n🎵 গানের নাম: ${songTitle}\n🔗 ইউটিউব লিংক: ${songUrl}`;
    const waUrl = `https://wa.me/919641682925?text=${encodeURIComponent(waMessage)}`;

    // 2. Add locally to playlist array if YouTube link/ID is provided
    const ytId = extractYoutubeId(songUrl);
    if (ytId) {
      const newTrack = {
        id: ytId + "_" + Date.now(),
        title: songTitle,
        bengaliTitle: songTitle,
        artist: "Recommended Song",
        album: "Community Recommendation",
        category: "new",
        categoryLabel: "NEW",
        duration: "04:15",
        embedUrl: `https://www.youtube.com/embed/${ytId}?enablejsapi=1&autoplay=1`,
        rawIframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ytId}?enablejsapi=1" title="${songTitle}" frameborder="0" allowfullscreen></iframe>`,
        thumbnail: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
      };
      if (onAddTrack) {
        onAddTrack(newTrack);
      }
    }

    // 3. Redirect directly to WhatsApp with pre-written message
    window.open(waUrl, "_blank");

    // Clear form
    setTitle("");
    setInputUrl("");
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 flex flex-col justify-between max-w-2xl mx-auto w-full" id="submit-section">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30 font-serif">
            WhatsApp Recommendation
          </span>
          <span className="text-xs text-sholapith-muted flex items-center gap-1 font-mono">
            <Sparkles className="w-3 h-3 text-pujaGold" /> Direct Share
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sholapith">
          গানের নতুন সুপারিশ পাঠান
        </h3>
        <p className="text-sm font-serif text-pujaGold mt-1">
          Recommend Your Favorite Durga Puja Songs via WhatsApp
        </p>
        <p className="text-xs sm:text-sm text-sholapith-muted mt-2 leading-relaxed">
          আপনার পছন্দের গান ও লিঙ্ক টাইপ করে সাবমিট করুন। সরাসরি হোয়াটসঅ্যাপে আমাদের কাছে পৌঁছে যাবে আপনার প্রস্তাবিত গান!
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Field 1: Song Name */}
          <div>
            <label className="block text-xs uppercase font-semibold text-sholapith-muted mb-1.5 font-mono">
              Song Name / গানের নাম <span className="text-sindoor">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="গানের নাম লিখুন (e.g. Dugga Ma / Elo Je Maa)..."
              className="w-full px-4 py-3 rounded-xl glass-input text-sm text-sholapith placeholder-sholapith-muted/40 focus:outline-none"
            />
          </div>

          {/* Field 2: YouTube Link */}
          <div>
            <label className="block text-xs uppercase font-semibold text-sholapith-muted mb-1.5 font-mono">
              YouTube Song Link / ইউটিউব লিংক <span className="text-sindoor">*</span>
            </label>
            <input
              type="url"
              required
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="ইউটিউব ভিডিও লিংক পেস্ট করুন (e.g. https://youtu.be/...)"
              className="w-full px-4 py-3 rounded-xl glass-input text-sm text-sholapith placeholder-sholapith-muted/40 font-mono focus:outline-none"
            />
          </div>

          {/* WhatsApp Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-serif font-bold text-base transition-all shadow-[0_4px_25px_rgba(16,185,129,0.4)] border border-emerald-300/30 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>হোয়াটসঅ্যাপে পাঠান (Send via WhatsApp)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
