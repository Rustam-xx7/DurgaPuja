"use client";

import { useState } from "react";

export function useActiveUsers() {
  // Paused active user background API polling
  const [activeUsers] = useState(1);

  return { activeUsers };
}
