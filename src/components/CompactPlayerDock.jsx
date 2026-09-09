"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2, VolumeX, BarChart2 } from "lucide-react";

export default function CompactPlayerDock({
  track,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  onOpenFullVideo
}) {
  const [volume, setVolume] = useState(85);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [ambience, setAmbience] = useState({
    dhaak: false,
    shonkho: false
  });

  const playerRef = useRef(null);
  const audioCtxRef = useRef(null);
  const dhaakTimerRef = useRef(null);

  // Initialize Web Audio Context on user gesture safely on client
  const getAudioContext = () => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // 1. Initialize Official YouTube IFrame Player API
  useEffect(() => {
    if (typeof window === "undefined" || !track) return;

    const initPlayer = () => {
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player("youtube-compact-iframe-player", {
        videoId: track.id,
        playerVars: {
          autoplay: isPlaying ? 1 : 0,
          enablejsapi: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            setIsPlayerReady(true);
            event.target.setVolume(volume);
            if (isPlaying) {
              event.target.playVideo();
            }
          },
          onStateChange: (event) => {
            // YT.PlayerState.ENDED = 0
            if (event.data === 0) {
              onNextTrack();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Load YouTube API script dynamically
      if (!document.getElementById("yt-iframe-api-script")) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api-script";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    }
  }, []);

  // 2. React to track changes -> Load new video
  useEffect(() => {
    if (!track?.id) return;
    if (playerRef.current && typeof playerRef.current.loadVideoById === "function") {
      playerRef.current.loadVideoById(track.id);
      if (isPlaying) {
        playerRef.current.playVideo();
      }
    }
  }, [track?.id]);

  // 3. React to isPlaying changes -> Play/Pause YouTube video
  useEffect(() => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        if (typeof playerRef.current.playVideo === "function") {
          playerRef.current.playVideo();
        }
      } else {
        if (typeof playerRef.current.pauseVideo === "function") {
          playerRef.current.pauseVideo();
        }
      }
    } catch (err) {
      // Ignored
    }
  }, [isPlaying]);

  // Play / Pause Click Handler
  const handlePlayPauseClick = () => {
    getAudioContext();
    onTogglePlay();
  };

  // Handle Volume Slider Change
  const handleVolumeChange = (e) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);
    setIsMuted(newVol === 0);

    if (playerRef.current && typeof playerRef.current.setVolume === "function") {
      playerRef.current.setVolume(newVol);
      if (newVol > 0 && typeof playerRef.current.unMute === "function") {
        playerRef.current.unMute();
      }
    }
  };

  // Mute / Unmute Handler
  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);

    if (playerRef.current) {
      if (nextMute && typeof playerRef.current.mute === "function") {
        playerRef.current.mute();
      } else if (!nextMute && typeof playerRef.current.unMute === "function") {
        playerRef.current.unMute();
        if (typeof playerRef.current.setVolume === "function") {
          playerRef.current.setVolume(volume || 80);
        }
      }
    }
  };

  // Authentic Bengali Dhaak Beat Synthesizer
  const playDhaakBeat = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.15);
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);

    setTimeout(() => {
      if (!audioCtxRef.current) return;
      const t = audioCtxRef.current.currentTime;
      const osc2 = audioCtxRef.current.createOscillator();
      const gain2 = audioCtxRef.current.createGain();
      osc2.type = "square";
      osc2.frequency.setValueAtTime(420, t);
      gain2.gain.setValueAtTime(0.3, t);
      gain2.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
      osc2.connect(gain2);
      gain2.connect(audioCtxRef.current.destination);
      osc2.start(t);
      osc2.stop(t + 0.08);
    }, 120);
  };

  // Sacred Shonkho (Conch) Sound Synthesizer
  const playShonkhoSound = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.linearRampToValueAtTime(460, now + 0.6);
    osc.frequency.linearRampToValueAtTime(420, now + 1.8);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.5, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 2.0);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 2.0);
  };

  // Ambience Toggle Logic
  const toggleAmbience = (type) => {
    getAudioContext();
    if (type === "dhaak") {
      const nextState = !ambience.dhaak;
      setAmbience((prev) => ({ ...prev, dhaak: nextState }));
      if (nextState) {
        playDhaakBeat();
        dhaakTimerRef.current = setInterval(playDhaakBeat, 600);
      } else {
        if (dhaakTimerRef.current) clearInterval(dhaakTimerRef.current);
      }
    } else if (type === "shonkho") {
      const nextState = !ambience.shonkho;
      setAmbience((prev) => ({ ...prev, shonkho: nextState }));
      if (nextState) {
        playShonkhoSound();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (dhaakTimerRef.current) clearInterval(dhaakTimerRef.current);
    };
  }, []);

  if (!track) return null;

  return (
    <aside className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl px-2">
      <div className="glass-panel rounded-3xl sm:rounded-full shadow-[0_16px_50px_rgba(0,0,0,0.85)] p-2.5 sm:px-5 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3 border-2 border-white/20 relative overflow-hidden backdrop-blur-2xl bg-black/80">
        
        {/* Festive aura glow inside dock */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-sindoor/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Left Side: Circular Video Player Avatar with YouTube API Container */}
        <div className="flex items-center gap-3.5 w-full md:w-auto min-w-0">
          <div
            onClick={onOpenFullVideo}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-pujaGold shadow-[0_0_16px_rgba(233,195,73,0.5)] shrink-0 cursor-pointer group bg-black"
            title="Click to view full video"
          >
            {/* Embedded YouTube IFrame API Target Element */}
            <div className="absolute top-1/2 left-1/2 w-[240%] h-[240%] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110">
              <div id="youtube-compact-iframe-player" className="w-full h-full"></div>
            </div>

            {/* Hover Expand Overlay Ring */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-pujaGold z-10">
              <Maximize2 className="w-5 h-5 drop-shadow-md" />
            </div>

            {/* Circular Ring Border Accent */}
            <div className="absolute inset-0 rounded-full border border-white/30 pointer-events-none z-10"></div>
          </div>

          {/* Track Metadata & Live Sound Bar Visualizer */}
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-sindoor animate-ping" : "bg-gray-500"}`}></span>
              <span className="text-rose-300 font-semibold uppercase">Pandal Radio</span>
              <span className="text-white/30">•</span>
              <span className="text-pujaGold truncate">{track.categoryLabel || "Bengali Track"}</span>
            </div>
            <h4 className="text-sm sm:text-base font-serif font-bold text-sholapith truncate leading-snug">
              {track.bengaliTitle || track.title}
            </h4>
            <p className="text-xs text-sholapith-muted truncate">
              {track.artist}
            </p>
          </div>

          {/* Interactive Sound Bar Visualizer (Equalizer) */}
          <div className="flex items-end gap-1 h-5 px-2 py-0.5 rounded-lg bg-black/40 border border-white/10 shrink-0" title="Sound Bar Visualizer">
            <span className={`w-1 bg-pujaGold rounded-full transition-all ${isPlaying ? "animate-eq-1" : "h-1 opacity-40"}`}></span>
            <span className={`w-1 bg-rose-400 rounded-full transition-all ${isPlaying ? "animate-eq-2" : "h-2 opacity-40"}`}></span>
            <span className={`w-1 bg-pujaGold rounded-full transition-all ${isPlaying ? "animate-eq-3" : "h-1.5 opacity-40"}`}></span>
            <span className={`w-1 bg-sindoor rounded-full transition-all ${isPlaying ? "animate-eq-4" : "h-1 opacity-40"}`}></span>
          </div>
        </div>

        {/* Middle: Playback Controls (Previous, Play/Pause, Next) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Previous Track Button */}
          <button
            onClick={onPrevTrack}
            className="w-10 h-10 rounded-full glass-panel-subtle hover:bg-sindoor/40 hover:text-white flex items-center justify-center text-sholapith transition-colors active:scale-95 cursor-pointer"
            title="Previous Track"
            type="button"
          >
            <SkipBack className="w-4 h-4" />
          </button>
          
          {/* Play / Pause Toggle Button */}
          <button
            onClick={handlePlayPauseClick}
            className="w-12 h-12 rounded-full bg-sindoor hover:bg-sindoor-dark text-white flex items-center justify-center transition-all shadow-[0_0_22px_rgba(217,56,58,0.7)] border border-rose-300/40 active:scale-95 cursor-pointer"
            title={isPlaying ? "Pause Video" : "Play Video"}
            type="button"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          {/* Next Track Button */}
          <button
            onClick={onNextTrack}
            className="w-10 h-10 rounded-full glass-panel-subtle hover:bg-sindoor/40 hover:text-white flex items-center justify-center text-sholapith transition-colors active:scale-95 cursor-pointer"
            title="Next Track"
            type="button"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side: Ambience Buttons, Volume Slider & Full Video Modal Button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Ambience Layer Toggles */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-black/50 border border-white/10">
            <button
              onClick={() => toggleAmbience("dhaak")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 cursor-pointer ${
                ambience.dhaak ? "bg-sindoor text-white shadow-md font-bold" : "text-sholapith-muted hover:text-white"
              }`}
              type="button"
            >
              <span>🥁</span>
              <span>Dhaak</span>
            </button>
            <button
              onClick={() => toggleAmbience("shonkho")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 cursor-pointer ${
                ambience.shonkho ? "bg-pujaGold/30 text-pujaGold border border-pujaGold/40 font-bold" : "text-sholapith-muted hover:text-white"
              }`}
              type="button"
            >
              <span>🐚</span>
              <span>Shonkho</span>
            </button>
          </div>

          {/* Working Volume Slider Bar & Mute Control */}
          <div className="hidden sm:flex items-center gap-1.5 text-sholapith-muted">
            <button onClick={toggleMute} className="hover:text-pujaGold transition-colors cursor-pointer" type="button">
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-pujaGold" />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 sm:w-20 accent-pujaGold bg-black/50 h-1.5 rounded-lg cursor-pointer"
              title={`Volume: ${isMuted ? 0 : volume}%`}
            />
          </div>

          {/* Expand Video Button */}
          <button
            onClick={onOpenFullVideo}
            className="p-2 rounded-full glass-panel-subtle hover:bg-white/20 text-pujaGold hover:text-white transition-colors cursor-pointer"
            title="Open Full Video Modal"
            type="button"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
}
