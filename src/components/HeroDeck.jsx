"use client";

import React from "react";

export default function HeroDeck() {
  return (
    <section
      className="min-h-screen w-full flex items-start justify-center text-start relative py-12 -mt-20"
      id="hero-section"
    >
      {/* Centered Alpona Image Container with Centered White Text Overlay */}
      <div className="relative top-45 flex items-center justify-center w-40 max-w-80 sm:max-w-xl aspect-square mx-auto p-4">
        {/* Alpona Image from /public/alpona.jpg */}
        <img
          src="/alpona.jpg"
          alt="Alpona"
          className="h-100 w-100 object-contain rounded-full shadow-[0_0_50px_rgba(0,0,0,0.7)]"
        />

        {/* White Text Overlay */}
        <h1 className="absolute inset-0 flex items-center justify-center text-sm sm:text-mg lg:text-mg font-serif font-bold text-white tracking-wide drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)] px-4 select-none">
          দুর্গাপূজার গান
        </h1>
      </div>
    </section>
  );
}
