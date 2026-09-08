"use client";

import React from "react";
import { HelpCircle } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      qEn: "What is Durga Puja pandal radio & video playlist?",
      qBn: "দুর্গাপূজার প্যান্ডেল রেডিও ও ভিডিও প্লেলিস্ট কী?",
      aEn: "Durga Puja Pandal Songs (দুর্গাপূজার গান) is a free online Bengali radio and video player that streams Durga Puja songs and classic Bangla music live from YouTube embedded playlists. No app download or sign-up needed.",
      aBn: "দুর্গাপূজার গান হলো একটি ফ্রি অনলাইন বাংলা রেডিও ও ভিডিও প্লেলিস্ট, যেখানে YouTube প্লেলিস্ট থেকে দুর্গাপূজার গান ও ভিডিও সরাসরি বাজে। কোনো অ্যাপ ডাউনলোড লাগে না।"
    },
    {
      qEn: "How do I add my own YouTube video link or iframe?",
      qBn: "নিজের পছন্দমতো YouTube ভিডিও লিংক বা iframe কীভাবে যোগ করব?",
      aEn: "Use the 'Add YouTube Video Link / Iframe Code' form above. Paste any YouTube video URL or iframe code, provide the title, and hit Submit. It instantly updates the active array and starts playing!",
      aBn: "উপরের 'Add YouTube Video Link / Iframe Code' ফর্মটি ব্যবহার করুন। YouTube লিঙ্ক বা iframe কোড পেস্ট করে Submit চাপুন — সঙ্গে সঙ্গে গানটি প্লেলিস্টে যুক্ত হয়ে বাজতে শুরু করবে!"
    },
    {
      qEn: "What are the dhaak, conch (shonkho) and adda soundscape buttons?",
      qBn: "ঢাক, শঙ্খ ও আড্ডার শব্দ কীভাবে কাজ করে?",
      aEn: "Toggle the ambience buttons under the radio player deck to layer authentic festival drums (ঢাক), conch blowing (শঙ্খ), and crowd adda over your video music, recreating the feeling of being inside a Kolkata pandal.",
      aBn: "রেডিও ডেকের নিচে থাকা অ্যাম্বিয়েন্স বোতাম চাপলেই গানের সঙ্গে ঢাক, শঙ্খ ও আড্ডার শব্দ যুক্ত হবে — যেন প্যান্ডেলের ভেতরে দাঁড়িয়ে আছেন।"
    },
    {
      qEn: "Can I print a QR code poster for our neighborhood pandal?",
      qBn: "আমাদের স্থানীয় প্যান্ডেলের জন্য QR কোড পোস্টার প্রিন্ট করতে পারব?",
      aEn: "Yes! Click the 'Print QR Poster' button in the top navigation or hero section to download/print a ready-to-hang A4/A3 poster featuring a scanable QR code for pandal visitors.",
      aBn: "হ্যাঁ! নেভিগেশনের 'QR Poster' বোতামটি চেপে প্যান্ডেল দর্শনার্থীদের জন্য QR কোড সহ সুন্দর A4/A3 পোস্টার প্রিন্ট করে টাঙাতে পারবেন।"
    }
  ];

  return (
    <section className="space-y-8 pt-4">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel-subtle text-pujaGold text-xs font-semibold border border-pujaGold/30 font-serif">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>সাধারণ প্রশ্ন · FAQ</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-sholapith">
          Frequently Asked Questions
        </h2>
        <p className="text-sm font-serif text-pujaGold">
          Everything about Durga Puja pandal songs · দুর্গাপূজার গান
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-3xl p-6 shadow-lg border border-white/15 flex flex-col justify-between space-y-4"
          >
            <div>
              <h4 className="text-lg font-serif font-semibold text-sholapith">
                {faq.qEn}
              </h4>
              <p className="text-sm font-serif text-pujaGold mt-0.5">
                {faq.qBn}
              </p>
              <p className="text-xs sm:text-sm text-sholapith/90 mt-2.5 leading-relaxed">
                {faq.aEn}
              </p>
            </div>
            <div className="p-3 rounded-2xl glass-panel-subtle text-xs text-sholapith-muted border border-white/10 leading-relaxed font-serif">
              {faq.aBn}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
