"use client";

import { useState, useEffect } from "react";

export function useActiveUsers() {
  const [activeUsers, setActiveUsers] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Unique per-tab session ID
    let sessionId = sessionStorage.getItem("durga_puja_session_id");
    if (!sessionId) {
      sessionId = "sess_" + Math.random().toString(36).substring(2, 9) + "_" + Date.now();
      sessionStorage.setItem("durga_puja_session_id", sessionId);
    }

    const sendPing = async (action = "ping") => {
      try {
        const res = await fetch("/api/active-users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, action }),
          cache: "no-store",
        });

        if (res.ok) {
          const data = await res.json();
          if (typeof data.activeUsers === "number") {
            // Keep at least 1 user if connected
            setActiveUsers(Math.max(1, data.activeUsers));
          }
        }
      } catch (err) {
        // Silently fail network error
      }
    };

    // Send immediate ping on load
    sendPing("ping");

    // Ping every 4 seconds to maintain active session heartbeat and update live count
    const interval = setInterval(() => {
      sendPing("ping");
    }, 4000);

    // Ping immediately when user switches back to this tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        sendPing("ping");
      }
    };

    // Remove active session when tab/window is closed
    const handleUnload = () => {
      const payload = JSON.stringify({ sessionId, action: "leave" });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/active-users", payload);
      } else {
        fetch("/api/active-users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return { activeUsers };
}
