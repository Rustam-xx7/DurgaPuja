"use client";

import React, { useState, useEffect } from "react";

export default function HeroDeck() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const now = new Date();
      let targetYear = now.getFullYear();
      let targetDate = new Date(targetYear, 9, 10); // Month 9 is October (0-indexed)
      if (now > targetDate) {
        targetDate = new Date(targetYear + 1, 9, 10);
      }
      const diffTime = targetDate.getTime() - now.getTime();
      const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    calculateDays();
  }, []);

  const toBengaliNumber = (num) => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(num)
      .split("")
      .map((digit) => bengaliDigits[digit] || digit)
      .join("");
  };

  return (
    <section
      className="w-full flex flex-col items-center justify-between text-center relative pt-0 -mt-6 pb-8 sm:pb-12 min-h-[55vh] sm:min-h-[65vh]"
      id="hero-section"
    >
      {/* Top Center: Compact Alpona Image Container with Title */}
      <div className="relative flex items-center justify-center w-24 sm:w-32 aspect-square mx-auto p-1 shrink-0">
        <img
          src="/alpona.jpg"
          alt="Alpona"
          className="w-full h-full object-contain rounded-full shadow-[0_0_25px_rgba(233,195,73,0.35)]"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-serif font-bold text-white tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] px-1 select-none">
          দুর্গাপূজার গান
        </h1>
      </div>

      {/* Centered in the Page: Mahalaya Days Remaining Counter */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 animate-fade-in py-4">
        <div className="glass-panel px-5 py-3 sm:px-8 sm:py-4 rounded-full border border-pujaGold/50 shadow-[0_0_40px_rgba(233,195,73,0.4)] bg-black/75 backdrop-blur-xl flex items-center gap-2.5 sm:gap-4">
          <div className="flex items-center gap-2 font-serif text-sm sm:text-lg">
            <span className="text-sholapith/90">মহালয়ার আর মাত্র</span>
            <span className="text-2xl sm:text-4xl font-bold font-mono text-pujaGold drop-shadow-[0_0_15px_rgba(233,195,73,0.9)] px-1">
              {daysLeft > 0 ? daysLeft : 0}
            </span>
            <span className="text-sholapith/90">
              দিন বাকি ({toBengaliNumber(daysLeft > 0 ? daysLeft : 0)} দিন)
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-serif text-pujaGold/90 mt-3 font-semibold tracking-wide">
          ১০ই অক্টোবর মহালয়া · 10th October Mahalaya
        </p>
      </div>
    </section>
  );
}

