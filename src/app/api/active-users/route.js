import { NextResponse } from "next/server";

// Global session map to persist across Next.js dev server reloads
if (!globalThis._activeSessionsMap) {
  globalThis._activeSessionsMap = new Map();
}
const activeSessions = globalThis._activeSessionsMap;

// Consider a session inactive if no heartbeat received for 12 seconds
const SESSION_TIMEOUT_MS = 12000;

function cleanupSessions() {
  const now = Date.now();
  for (const [sessionId, lastPing] of activeSessions.entries()) {
    if (now - lastPing > SESSION_TIMEOUT_MS) {
      activeSessions.delete(sessionId);
    }
  }
}

export async function GET() {
  cleanupSessions();
  const count = activeSessions.size;

  return NextResponse.json(
    {
      activeUsers: count,
      timestamp: Date.now(),
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { sessionId, action } = body || {};

    if (sessionId) {
      if (action === "leave") {
        activeSessions.delete(sessionId);
      } else {
        activeSessions.set(sessionId, Date.now());
      }
    }
  } catch (err) {
    // Ignore JSON parse error for beacon payloads
  }

  cleanupSessions();
  const count = activeSessions.size;

  return NextResponse.json(
    {
      activeUsers: count,
      timestamp: Date.now(),
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
