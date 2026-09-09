"use client";

import React, { useState } from "react";
import { Search, Play, Pause, Music, Radio } from "lucide-react";

export default function PlaylistSection({
  playlist,
  currentTrack,
  isPlaying,
  onSelectTrack
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Category list for top filter pills
  const categories = [
    { id: "all", label: "All Tracks" },
    { id: "agomoni", label: "Mahalaya & Chants" },
    { id: "dhaak", label: "Dhaak Beats" },
    { id: "classic", label: "Puja 80s-90s" },
    { id: "modern", label: "Modern Festive" }
  ];

  // Filtered tracks
  const filteredTracks = playlist.filter((track) => {
    const matchesCategory =
      selectedCategory === "all" || track.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      (track.title && track.title.toLowerCase().includes(q)) ||
      (track.bengaliTitle && track.bengaliTitle.toLowerCase().includes(q)) ||
      (track.artist && track.artist.toLowerCase().includes(q)) ||
      (track.album && track.album.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="space-y-6 pt-4" id="playlist-section">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pujaGold"></span>
            <span className="text-xs uppercase tracking-widest text-pujaGold font-bold">
              Curated Festive Archive
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sholapith">
            বাংলা উৎসবের প্লেলিস্ট · YouTube Video Playlist
          </h2>
          <p className="text-sm text-sholapith-muted max-w-2xl">
            Streams live via embedded YouTube video engine. Filter by Mahalaya chanting, high-energy dhak rhythms, or modern Durga Puja hit songs.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 glass-panel-subtle p-1.5 rounded-2xl border border-white/15">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-sindoor text-white shadow-md"
                  : "text-sholapith-muted hover:text-sholapith hover:bg-white/10"
              }`}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input Box */}
      <div className="glass-panel rounded-2xl p-3 flex items-center gap-3 border border-white/15 shadow-md">
        <Search className="w-4 h-4 text-pujaGold ml-2 shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by song title, artist, or category (e.g. Arijit, Birendra Krishna, Dhak)..."
          className="w-full bg-transparent text-sm text-sholapith placeholder-sholapith-muted/50 focus:outline-none"
        />
        <span className="text-xs text-sholapith-muted whitespace-nowrap mr-2 font-mono">
          {filteredTracks.length} tracks
        </span>
      </div>

      {/* Playlist Table (Title & Artist, Duration, Play) */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-black/40 text-sholapith-muted text-[11px] uppercase tracking-wider border-b border-white/10 font-mono">
              <tr>
                <th className="py-3.5 px-4 w-12 text-center">#</th>
                <th className="py-3.5 px-4">Title & Artist (গানের নাম ও শিল্পী)</th>
                <th className="py-3.5 px-4 text-right">Duration</th>
                <th className="py-3.5 px-4 w-28 text-center">Play</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTracks.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-8 text-center text-sm text-sholapith-muted">
                    No songs found matching your search. Try adding a new YouTube link below!
                  </td>
                </tr>
              ) : (
                filteredTracks.map((track, idx) => {
                  const isActive = currentTrack && currentTrack.id === track.id;
                  return (
                    <tr
                      key={track.id || idx}
                      onClick={() => onSelectTrack(track)}
                      className={`track-row hover:bg-white/10 transition-colors group cursor-pointer ${
                        isActive
                          ? "bg-sindoor/20 border-l-4 border-sindoor"
                          : ""
                      }`}
                    >
                      {/* Track Number / Active Indicator */}
                      <td className="py-4 px-4 text-center text-xs font-mono text-sholapith-muted">
                        {isActive ? (
                          <span className="text-pujaGold font-bold">▶</span>
                        ) : (
                          String(idx + 1).padStart(2, "0")
                        )}
                      </td>

                      {/* Title & Artist Column */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isActive
                                ? "bg-sindoor text-white"
                                : "bg-white/10 text-pujaGold group-hover:text-sindoor"
                            }`}
                          >
                            {isActive ? (
                              <Radio className="w-4 h-4 animate-pulse" />
                            ) : (
                              <Music className="w-4 h-4" />
                            )}
                          </div>
                          <div>
                            <span
                              className={`font-serif font-medium block leading-snug ${
                                isActive ? "text-pujaGold font-bold" : "text-sholapith"
                              }`}
                            >
                              {track.bengaliTitle || track.title}
                            </span>
                            <span className="text-xs text-sholapith-muted">
                              {track.artist} {track.album ? `· ${track.album}` : ""}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Duration Column */}
                      <td className="py-4 px-4 text-right text-xs font-mono text-sholapith-muted">
                        {track.duration || "04:00"}
                      </td>

                      {/* Play Action Button Column */}
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectTrack(track);
                          }}
                          className={`w-8 h-8 rounded-full inline-flex items-center justify-center transition-all cursor-pointer ${
                            isActive && isPlaying
                              ? "bg-sindoor text-white shadow-md"
                              : "bg-white/10 hover:bg-sindoor text-sholapith hover:text-white"
                          }`}
                          type="button"
                        >
                          {isActive && isPlaying ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4 ml-0.5 fill-current" />
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
