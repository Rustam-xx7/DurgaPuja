"use client";

import React, { useState } from "react";
import { PlusCircle, Send, CheckCircle2, Youtube, Sparkles } from "lucide-react";

export default function AddVideoForm({ onAddTrack }) {
  const [inputUrl, setInputUrl] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [category, setCategory] = useState("modern");
  const [successMsg, setSuccessMsg] = useState(false);

  // Parse YouTube video ID from URL or iframe string
  const extractYoutubeId = (str) => {
    if (!str) return null;
    
    // Check if it's an iframe code
    const iframeMatch = str.match(/src=["']([^"']+)["']/);
    const targetUrl = iframeMatch ? iframeMatch[1] : str;

    // Match embed URL or standard video URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = targetUrl.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ytId = extractYoutubeId(inputUrl);

    const videoId = ytId || "3Gg0GP8DxhU";
    const newTrack = {
      id: videoId + "_" + Date.now(),
      title: title.trim() || "Durga Puja Special Song",
      bengaliTitle: title.trim() || "দুর্গাপূজার নতুন গান",
      artist: artist.trim() || "Bengali Artist",
      album: "User Uploaded Playlist",
      category: category,
      categoryLabel:
        category === "agomoni"
          ? "Mahalaya"
          : category === "dhaak"
          ? "Dhaak Beats"
          : category === "classic"
          ? "Classic 90s"
          : "Modern Festive",
      duration: "04:15",
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
      rawIframe: inputUrl.includes("<iframe")
        ? inputUrl
        : `<iframe width="1059" height="595" src="https://www.youtube.com/embed/${videoId}" title="${title}" frameborder="0" allowfullscreen></iframe>`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    };

    onAddTrack(newTrack);
    setSuccessMsg(true);
    setInputUrl("");
    setTitle("");
    setArtist("");

    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 flex flex-col justify-between" id="submit-section">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider border border-rose-500/30">
            Community Playlist Extender
          </span>
          <span className="text-xs text-sholapith-muted flex items-center gap-1 font-mono">
            <Sparkles className="w-3 h-3 text-amber-300" /> Dynamic Array
          </span>
        </div>

        <h3 className="text-2xl font-serif font-bold text-sholapith">
          গানের লিংক বা iframe কোড যোগ করুন
        </h3>
        <p className="text-sm font-serif text-pujaGold mt-0.5">
          Add YouTube Video Link / Iframe Code to Playlist
        </p>
        <p className="text-xs sm:text-sm text-sholapith-muted mt-2">
          Paste any YouTube video link or iframe embed code below. It will automatically parse and insert the video into the playlist array to play immediately.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs uppercase font-semibold text-sholapith-muted mb-1.5 font-mono">
              YouTube Video URL or Iframe Code <span className="text-sindoor">*</span>
            </label>
            <textarea
              rows="3"
              required
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder='Paste YouTube URL (https://youtu.be/...) or <iframe width="..." height="..." src="https://www.youtube.com/embed/..." ...></iframe>'
              className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-sholapith placeholder-sholapith-muted/40 font-mono focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-semibold text-sholapith-muted mb-1.5 font-mono">
                Song Title / গানের নাম <span className="text-sindoor">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Dugga Ma / Bolo Dugga Maiki"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-sholapith placeholder-sholapith-muted/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-semibold text-sholapith-muted mb-1.5 font-mono">
                Artist / Singer Name
              </label>
              <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="e.g. Arijit Singh / Shreya Ghoshal"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-sholapith placeholder-sholapith-muted/40 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-semibold text-sholapith-muted mb-1.5 font-mono">
              Select Song Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-sholapith bg-black/60 focus:outline-none"
            >
              <option value="modern">Modern Festive</option>
              <option value="agomoni">Mahalaya & Chants</option>
              <option value="dhaak">Dhaak Beats</option>
              <option value="classic">Classic 80s-90s</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-sindoor hover:bg-sindoor-dark text-white font-medium text-sm transition-all shadow-[0_4px_16px_rgba(217,56,58,0.4)] border border-rose-300/30 flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add to Playlist & Play Now · প্লেলিস্টে যোগ করুন</span>
            </button>
          </div>
        </form>
      </div>

      {successMsg && (
        <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>Awesome! Your YouTube video has been added to the playlist array and is now playing!</span>
        </div>
      )}
    </div>
  );
}
