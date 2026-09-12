"use client";

import { useState, useEffect } from "react";

export function useActiveUsers() {
  const [activeUsers, setActiveUsers] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Generate or retrieve session ID for this browser tab
    let sessionId = sessionStorage.getItem("puja_radio_session_id");
    if (!sessionId) {
      sessionId =
        "session_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now();
      sessionStorage.setItem("puja_radio_session_id", sessionId);
    }

    const sendPing = async () => {
      try {
        const res = await fetch("/api/active-users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, action: "ping" }),
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.activeUsers === "number") {
            setActiveUsers(Math.max(1, data.activeUsers));
          }
        }
      } catch (err) {
        // Ignore network errors gracefully
      }
    };

    // Send initial heartbeat
    sendPing();

    // Heartbeat interval every 5 seconds
    const interval = setInterval(sendPing, 5000);

    // Clean up session on tab close / unload
    const handleUnload = () => {
      try {
        const payload = JSON.stringify({ sessionId, action: "leave" });
        if (navigator.sendBeacon) {
          const blob = new Blob([payload], { type: "application/json" });
          navigator.sendBeacon("/api/active-users", blob);
        }
      } catch (e) {
        // Ignore beacon fallback errors
      }
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleUnload);
      handleUnload();
    };
  }, []);

  return { activeUsers };
}
