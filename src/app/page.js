"use client";

import React, { useState } from "react";
import { Linkedin, Instagram, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import HeroDeck from "../components/HeroDeck";
import PlaylistSection from "../components/PlaylistSection";
import AddVideoForm from "../components/AddVideoForm";
import FaqSection from "../components/FaqSection";
import PosterModal from "../components/PosterModal";
import FuchkaModal from "../components/FuchkaModal";
import IntroLoaderModal from "../components/IntroLoaderModal";
import CompactPlayerDock from "../components/CompactPlayerDock";
import VideoModal from "../components/VideoModal";
import DhaakSoundWidget from "../components/DhaakSoundWidget";
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

        {/* Song Recommendation Module (WhatsApp Share) */}
        <section className="max-w-2xl mx-auto w-full" id="submit-section">
          <AddVideoForm onAddTrack={handleAddTrack} />
        </section>

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/15 glass-panel-subtle py-10 px-4 text-center text-xs text-sholapith-muted space-y-5 pb-48 sm:pb-40">
        {/* Festive Good Wishes for Durga Puja */}
        <div className="space-y-1.5">
          <h3 className="font-serif text-pujaGold text-base sm:text-lg font-bold tracking-wide flex items-center justify-center gap-2">
            <span>🪔</span>
            <span>শুভ শারদীয়া · শারদীয়ার প্রীতি ও শুভেচ্ছা</span>
            <span>✨</span>
          </h3>
          <p className="text-xs sm:text-sm text-sholapith/90 font-serif max-w-xl mx-auto leading-relaxed">
            মা দুর্গার পুণ্য আশীর্বাদে আপনার ও আপনার পরিবারের জীবন আনন্দ, শান্তি ও সমৃদ্ধিতে ভরে উঠুক।
          </p>
        </div>

        {/* Developer Credits Section */}
        <div className="pt-3 border-t border-white/10 max-w-md mx-auto space-y-3">
          <p className="text-xs text-sholapith/90 font-serif flex items-center justify-center gap-1.5">
            <span>নির্মাতা · Developer:</span>
            <span className="text-pujaGold font-bold text-sm sm:text-base">দীপায়ন চক্রবর্তী</span>
            <span className="text-sholapith-muted text-[11px]">(Dipayan Chakraborty)</span>
          </p>

          {/* Social Links & Contact Number */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dipayan-chakraborty-961232348/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-blue-600/30 text-sholapith hover:text-white border border-white/15 transition-all cursor-pointer shadow-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>LinkedIn</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/chakroborty_rustom_09/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-pink-600/30 text-sholapith hover:text-white border border-white/15 transition-all cursor-pointer shadow-sm"
              title="Instagram Profile"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
              <span>Instagram</span>
            </a>

            {/* Contact Phone */}
            <a
              href="tel:9641682925"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-emerald-600/30 text-sholapith hover:text-white border border-white/15 transition-all cursor-pointer font-mono shadow-sm"
              title="Contact Phone"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>9641682925</span>
            </a>
          </div>
        </div>

        <p className="text-[10px] text-sholapith-muted/60 pt-1 font-mono">
          Built with Love · Durga Puja Pandal Radio & Song Playlist
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

      {/* Floating Dhaak Sound Control Widget */}
      <DhaakSoundWidget />

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
