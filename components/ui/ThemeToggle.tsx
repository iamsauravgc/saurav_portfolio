"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
      style={{
        background: "none",
        border: "none",
        cursor: "none",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-text-secondary)",
      }}
    >
      <motion.span
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          display: "block",
          fontSize: "16px",
          lineHeight: 1,
          fontFamily: "var(--font-mono)",
        }}
      >
        ◐
      </motion.span>
    </motion.button>
  )
}