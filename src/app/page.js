"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroDeck from "../components/HeroDeck";
import PlaylistSection from "../components/PlaylistSection";
import AddVideoForm from "../components/AddVideoForm";
import PandalLocationMap from "../components/PandalLocationMap";
import FaqSection from "../components/FaqSection";
import PosterModal from "../components/PosterModal";
import FuchkaModal from "../components/FuchkaModal";
import IntroLoaderModal from "../components/IntroLoaderModal";
import CompactPlayerDock from "../components/CompactPlayerDock";
import VideoModal from "../components/VideoModal";
import { initialPlaylist } from "../data/playlist";
import { useActiveUsers } from "../hooks/useActiveUsers";

export default function Home() {
  const [playlist, setPlaylist] = useState(initialPlaylist);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [isFuchkaOpen, setIsFuchkaOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Real-time live active user counting hook
  const { activeUsers } = useActiveUsers();

  const currentTrack = playlist[currentIndex] || playlist[0];

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNextTrack = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleSelectTrack = (track) => {
    const idx = playlist.findIndex((t) => t.id === track.id);
    if (idx !== -1) {
      if (idx === currentIndex) {
        setIsPlaying((prev) => !prev);
      } else {
        setCurrentIndex(idx);
        setIsPlaying(true);
      }
    } else {
      setPlaylist((prev) => [track, ...prev]);
      setCurrentIndex(0);
      setIsPlaying(true);
    }
  };

  const handleAddTrack = (newTrack) => {
    setPlaylist((prev) => [newTrack, ...prev]);
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between">
      {/* Gentle Ambient Wash Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-black/10 via-black/10 to-black/25"></div>

      {/* Header with Live User Counter and Action Buttons */}
      <Navbar
        activeUsers={activeUsers}
        onOpenFuchka={() => setIsFuchkaOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
      />

      {/* Main Scrollable Content Over Fixed durgaImage Background */}
      <main className="relative z-10 w-full pt-20 pb-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 flex-1">
        {/* Editorial Hero Section */}
        <HeroDeck />

        {/* Dynamic Searchable YouTube Video Playlist Table */}
        <PlaylistSection
          playlist={playlist}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onSelectTrack={handleSelectTrack}
        />

        {/* Interactive Community Modules */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch" id="submit-section">
          <AddVideoForm onAddTrack={handleAddTrack} />
          <PandalLocationMap />
        </section>

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 glass-panel-subtle py-8 text-center text-xs text-sholapith-muted space-y-2 pb-32">
        <p className="font-serif text-pujaGold text-sm">
          শুভ শারদীয়া · দুর্গাপূজার গান ও ভিডিও প্লেলিস্ট
        </p>
        <p>
          Built with Next.js & Tailwind CSS · Design System inspired by Google Stitch Sharad Sholapith
        </p>
      </footer>

      {/* Bottom-Middle Fixed Compact Player Dock with Circular Video Avatar */}
      <CompactPlayerDock
        track={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        onOpenFullVideo={() => setIsVideoModalOpen(true)}
      />

      {/* Modals */}
      <VideoModal
        track={currentTrack}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
      <PosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />
      <FuchkaModal
        isOpen={isFuchkaOpen}
        onClose={() => setIsFuchkaOpen(false)}
      />
      <IntroLoaderModal
        onConfirmStart={(start) => setIsPlaying(start)}
      />
    </div>
  );
}
