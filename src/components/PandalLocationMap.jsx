"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Share2, CheckCircle2 } from "lucide-react";

export default function PandalLocationMap() {
  const [locationName, setLocationName] = useState("");
  const [sharedLocations, setSharedLocations] = useState([
    "Kolkata (Maddox Sq, Bagbazar, Ekdalia)",
    "Howrah & Siliguri",
    "Dhaka & New Delhi"
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleShare = (e) => {
    e.preventDefault();
    if (locationName.trim()) {
      setSharedLocations((prev) => [locationName.trim(), ...prev]);
      setLocationName("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-pujaGold/20 text-pujaGold text-xs font-semibold uppercase tracking-wider border border-pujaGold/30">
            Broadcasting Live
          </span>
          <span className="text-xs text-sholapith-muted">Realtime Pings</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-sholapith">
          আপনার প্যান্ডেলের অবস্থান শেয়ার করুন
        </h3>
        <p className="text-sm font-serif text-pujaGold mt-0.5">
          Share Your Pandal Location
        </p>
        <p className="text-xs sm:text-sm text-sholapith-muted mt-2">
          Tell us where the radio & video playlist is playing right now. Your club or pandal location will appear live for fellow devotees to tune in together.
        </p>

        <form onSubmit={handleShare} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs uppercase font-semibold text-sholapith-muted mb-1.5 font-mono">
              Pandal Name or District
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="e.g. Maddox Square, Ballygunge, South Kolkata"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-sholapith placeholder-sholapith-muted/40 focus:outline-none"
              />
              <Navigation className="w-4 h-4 text-pujaGold absolute left-3 top-3.5" />
            </div>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl glass-panel hover:bg-white/20 text-sholapith font-medium text-sm transition-all border border-white/25 flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4 text-pujaGold" />
              <span>📍 Share Location · অবস্থান প্রকাশ করুন</span>
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Pandal location broadcasted live!</span>
          </div>
        )}
      </div>

      {/* Map Graphic Preview */}
      <div className="mt-6 pt-2">
        <div className="text-xs text-sholapith-muted uppercase tracking-wider mb-2 flex items-center justify-between font-mono">
          <span>Active Pandals Broadcasting</span>
          <span className="text-rose-400 font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-sindoor animate-ping"></span> 48 Active
          </span>
        </div>
        <div
          className="w-full h-44 rounded-2xl overflow-hidden relative border border-white/20 flex flex-col justify-end p-3 shadow-inner bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url('/images/durgaImage.jpg')`
          }}
        >
          <div className="relative z-10 flex flex-wrap gap-1.5">
            {sharedLocations.slice(0, 3).map((loc, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg glass-panel-subtle text-sholapith text-[11px] flex items-center gap-1.5 border border-white/15"
              >
                <MapPin className="w-3 h-3 text-sindoor" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
