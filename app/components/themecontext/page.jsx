"use client";
// ↑ Sirf yeh line add ki — localStorage aur document.body
//   browser APIs hain, server pe nahi chalte, isliye zaruri hai

// ThemeContext.jsx
// App ke root mein wrap karo — sari website dark mode share karegi
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      // body par class lagao — poora app react kare
      document.body.classList.toggle("dark", next);
      return next;
    });
  };

  // App load hone par body class set karo
  React.useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook — kisi bhi component mein use karo
export const useTheme = () => useContext(ThemeContext);
