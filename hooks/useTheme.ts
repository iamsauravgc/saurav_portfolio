"use client"
import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem("theme") as Theme | null
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = stored ?? (system ? "dark" : "light")
    setTheme(initial)
    document.documentElement.setAttribute("data-theme", initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
  }

  return { theme, toggleTheme }
}