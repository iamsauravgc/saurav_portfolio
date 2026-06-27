"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "@/hooks/useIsMobile"

export default function MobileCaution() {
  const isMobile = useIsMobile()
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    if (!isMobile) return
    const stored = localStorage.getItem("mobileCautionDismissed")
    if (!stored) setDismissed(false)
  }, [isMobile])

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem("mobileCautionDismissed", "true")
  }

  if (!isMobile) return null

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div
            style={{
              background: "var(--color-accent)",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(13px, 3.5vw, 16px)",
                color: "#2C1810",
                lineHeight: 1.4,
              }}
            >
              Still adapting this for mobile — best on desktop for now.
            </span>
            <button
              onClick={handleDismiss}
              aria-label="Dismiss"
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "4px",
                lineHeight: 1,
                opacity: 0.8,
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
