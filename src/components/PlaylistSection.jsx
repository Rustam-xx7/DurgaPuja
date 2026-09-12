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
    { id: "all", label: "All Tracks (সব গান)" },
    { id: "new", label: "NEW (নতুন গান)" },
    { id: "old_is_gold", label: "OLD IS GOLD (সোনালী দিনের গান)" },
    { id: "mohaloya", label: "MOHALOYA (মহালয়া)" }
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
            Streams live via embedded YouTube video engine. Filter by NEW hits, OLD IS GOLD Bengali classics, or MOHALOYA chanting.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 glass-panel-subtle p-1.5 rounded-2xl border border-white/15">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
          placeholder="Search by song title, artist, or category (e.g. Arijit, SVF, Mahalaya, Classic)..."
          className="w-full bg-transparent text-sm text-sholapith placeholder-sholapith-muted/50 focus:outline-none"
        />
        <span className="text-xs text-sholapith-muted whitespace-nowrap mr-2 font-mono">
          {filteredTracks.length} tracks
        </span>
      </div>

      {/* Playlist Table (Title & Artist, Duration, Play) */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
        <div className="w-full">
          <table className="w-full text-left table-fixed">
            <thead className="bg-black/40 text-sholapith-muted text-[10px] sm:text-[11px] uppercase tracking-wider border-b border-white/10 font-mono">
              <tr>
                <th className="py-2.5 px-2 sm:py-3.5 sm:px-4 w-10 text-center hidden sm:table-cell">#</th>
                <th className="py-2.5 px-3 sm:py-3.5 sm:px-4">Song Name (গানের নাম)</th>
                <th className="py-2.5 px-2 sm:py-3.5 sm:px-4 hidden sm:table-cell w-32">Category</th>
                <th className="py-2.5 px-2 sm:py-3.5 sm:px-4 text-right w-16 sm:w-24">Duration</th>
                <th className="py-2.5 px-2 sm:py-3.5 sm:px-4 w-12 sm:w-20 text-center">Play</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTracks.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-sm text-sholapith-muted">
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
                      {/* Track Number / Active Indicator (Desktop only) */}
                      <td className="py-2 px-2 sm:py-3.5 sm:px-4 text-center text-xs font-mono text-sholapith-muted hidden sm:table-cell">
                        {isActive ? (
                          <span className="text-pujaGold font-bold">▶</span>
                        ) : (
                          String(idx + 1).padStart(2, "0")
                        )}
                      </td>

                      {/* Song Name Only on Mobile / Title & Artist on Desktop */}
                      <td className="py-2 px-3 sm:py-3.5 sm:px-4 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-lg hidden sm:flex items-center justify-center shrink-0 transition-colors ${
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
                          <div className="min-w-0 flex-1">
                            <span
                              className={`font-serif font-medium text-xs sm:text-sm truncate block leading-tight ${
                                isActive ? "text-pujaGold font-bold" : "text-sholapith"
                              }`}
                              title={track.bengaliTitle || track.title}
                            >
                              {track.bengaliTitle || track.title}
                            </span>
                            <span className="hidden sm:block text-xs text-sholapith-muted truncate">
                              {track.artist} {track.album ? `· ${track.album}` : ""}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Category Badge (Desktop only) */}
                      <td className="py-2 px-2 sm:py-3.5 sm:px-4 hidden sm:table-cell">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold whitespace-nowrap ${
                            track.category === "new"
                              ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                              : track.category === "old_is_gold"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                              : "bg-pujaGold/20 text-pujaGold border border-pujaGold/40"
                          }`}
                        >
                          {track.categoryLabel || "NEW"}
                        </span>
                      </td>

                      {/* Duration Column */}
                      <td className="py-2 px-2 sm:py-3.5 sm:px-4 text-right text-[11px] sm:text-xs font-mono text-sholapith-muted whitespace-nowrap">
                        {track.duration || "04:00"}
                      </td>

                      {/* Play Action Button Column */}
                      <td className="py-2 px-2 sm:py-3.5 sm:px-4 text-center shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectTrack(track);
                          }}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full inline-flex items-center justify-center transition-all cursor-pointer ${
                            isActive && isPlaying
                              ? "bg-sindoor text-white shadow-md"
                              : "bg-white/10 hover:bg-sindoor text-sholapith hover:text-white"
                          }`}
                          type="button"
                        >
                          {isActive && isPlaying ? (
                            <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          ) : (
                            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 fill-current" />
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
