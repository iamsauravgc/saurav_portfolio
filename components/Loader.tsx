"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion"

interface LoaderProps {
  onComplete: () => void
}

const LETTERS = ["S", "A", "U", "R", "A", "V"]

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

      // 2. Fade out loader
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


    </motion.div>
  )
}