"use client";

import { useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("themeMode") || "dark";
    setTheme(saved);
    document.documentElement.classList.add(saved);
  }, []);

  return <>{children}</>;
};
