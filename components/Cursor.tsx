"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

type CursorVariant = "default" | "link" | "project" | "vinyl" | "listen"

const CURSOR_VARIANTS = {
  default: { size: 8, opacity: 1, text: "" },
  link:    { size: 40, opacity: 0.15, text: "" },
  project: { size: 64, opacity: 0.12, text: "view ↗" },
  vinyl:   { size: 48, opacity: 0.12, text: "play" },
  listen:  { size: 48, opacity: 0.12, text: "listen" },
}

export default function Cursor() {
  const [variant, setVariant] = useState<CursorVariant>("default")
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    // Detect interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const el = target.closest("[data-cursor]") as HTMLElement | null

      if (el) {
        const cursorType = el.dataset.cursor as CursorVariant
        setVariant(cursorType || "default")
      } else if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setVariant("link")
      } else {
        setVariant("default")
      }
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseleave", handleLeave)
    window.addEventListener("mouseenter", handleEnter)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseleave", handleLeave)
      window.removeEventListener("mouseenter", handleEnter)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [isVisible, mouseX, mouseY])

  const current = CURSOR_VARIANTS[variant]

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-root"
      style={{
        x: springX,
        y: springY,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: current.size,
          height: current.size,
          opacity: isVisible ? current.opacity : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          borderRadius: "50%",
          backgroundColor: "var(--color-text-primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mixBlendMode: "multiply",
        }}
      >
        {current.text && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--color-bg)",
              whiteSpace: "nowrap",
              mixBlendMode: "normal",
            }}
          >
            {current.text}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
}