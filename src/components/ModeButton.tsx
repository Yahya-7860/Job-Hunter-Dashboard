"use client";

import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    const html = document.documentElement;
    const currentMode = html.classList.contains("dark") ? "dark" : "light";
    const next = currentMode === "dark" ? "light" : "dark";
    html.classList.remove(currentMode);
    html.classList.add(next);
    localStorage.setItem("themeMode", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-[18px] p-1.5 rounded-full transition-all border border-white bg-white text-black"
      aria-label="Toggle Dark Mode"
    >
      {dark ? (
        <MdLightMode className="text-yellow-500 " />
      ) : (
        <MdDarkMode className="text-black " />
      )}
    </button>
  );
};

export default ThemeToggle;
