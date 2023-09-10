"use client";
import { useState, useEffect, useCallback } from "react";

export const useThemeMode = () => {
  const [theme, setTheme] = useState("light");
  const updateThemeDisplay = useCallback(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!("theme" in localStorage)) {
        localStorage.setItem(
          "theme",
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        );
      }
      setTheme(localStorage.getItem("theme"));
    }
  }, [typeof window]);

  const toggleTheme = useCallback(() => {
    const currentTheme = localStorage.getItem("theme") ?? "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }, []);

  useEffect(() => {
    updateThemeDisplay();
  }, [theme]);

  return { theme, toggleTheme };
};
