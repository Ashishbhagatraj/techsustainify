"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────
interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// ─── Context ─────────────────────────────────────────────────────
const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});

// ─── Provider ────────────────────────────────────────────────────
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // ✅ localStorage SSR fix — useEffect mein padhna safe hai
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDarkMode(saved);
    document.body.classList.toggle("dark", saved);
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.body.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ─── Hook ────────────────────────────────────────────────────────
export const useTheme = (): ThemeContextType => useContext(ThemeContext);