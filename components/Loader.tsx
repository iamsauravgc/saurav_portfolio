"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion"

interface LoaderProps {
  onComplete: () => void
}

const LETTERS = ["S", "A", "U", "R", "A", "V"]
const GLYPH_COUNT = 12

export default function Loader({ onComplete }: LoaderProps) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const sequence = async () => {
      // 1. Letters stagger in
      await animate(
        ".loader-letter",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.3, delay: stagger(0.06), ease: [0.16, 1, 0.3, 1] }
      )

      // 2. Glyph segments draw in
      await animate(
        ".loader-glyph",
        { scaleX: [0, 1], opacity: [0, 1] },
        { duration: 0.15, delay: stagger(0.05), ease: [0.16, 1, 0.3, 1] }
      )

      // 3. Pulse blue
      await animate(
        ".loader-glyph",
        { backgroundColor: ["rgba(255,255,255,0.15)", "#3B8BEB", "rgba(255,255,255,0.15)"] },
        { duration: 0.4, delay: stagger(0.03) }
      )

      // 4. Fade out loader
      await animate(
        scope.current,
        { opacity: 0 },
        { duration: 0.5, delay: 0.1, ease: "easeOut" }
      )

      document.body.style.overflow = ""
      onComplete()
    }

    sequence()

    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <motion.div
      ref={scope}
      className="loader-container"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Letters */}
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        {LETTERS.map((letter, i) => (
          <motion.span
            key={i}
            className="loader-letter"
            initial={{ opacity: 0, y: 10 }}
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "clamp(40px, 8vw, 72px)",
              color: "var(--color-text-primary)",
              display: "block",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Glyph strip */}
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        {Array.from({ length: GLYPH_COUNT }).map((_, i) => (
          <motion.div
            key={i}
            className="loader-glyph"
            initial={{ scaleX: 0, opacity: 0 }}
            style={{
              width: "32px",
              height: "3px",
              borderRadius: "2px",
              backgroundColor: "rgba(255,255,255,0.15)",
              transformOrigin: "left center",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}