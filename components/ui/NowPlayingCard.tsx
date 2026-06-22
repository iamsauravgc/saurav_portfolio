"use client"

import { motion } from "framer-motion"
import { SPRING_SNAPPY } from "@/lib/animation"
import { SOCIAL } from "@/lib/constants"

const BARS = [
  { delay: 0, heights: [8, 18, 6, 22, 10, 8] },
  { delay: 0.1, heights: [12, 6, 20, 8, 16, 12] },
  { delay: 0.2, heights: [6, 16, 10, 18, 8, 6] },
  { delay: 0.3, heights: [18, 10, 14, 6, 20, 18] },
  { delay: 0.4, heights: [10, 14, 8, 16, 6, 10] },
]

export default function NowPlayingCard() {
  return (
    <motion.a
      href={SOCIAL.spotify}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, ...SPRING_SNAPPY }}
      whileHover={{ scale: 1.04 }}
      data-cursor="listen"
      style={{
        position: "absolute",
        bottom: "20%",
        left: "4%",
        rotate: "-2deg",
        textDecoration: "none",
        pointerEvents: "auto",
        animation: "float1 7s ease-in-out infinite",
        zIndex: 5,
      }}
    >
      <div className="glass-warm" style={{
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        minWidth: "200px",
      }}>
        {/* Equalizer */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "3px",
          height: "24px",
        }}>
          {BARS.map((bar, i) => (
            <motion.div
              key={i}
              animate={{ height: bar.heights.map(h => `${h}px`) }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: bar.delay,
              }}
              style={{
                width: "3px",
                borderRadius: "2px",
                backgroundColor: "var(--color-accent2)",
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>

        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "8px",
            color: "var(--color-text-muted)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            now playing
          </span>
          <span style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "13px",
            color: "var(--color-text-primary)",
            lineHeight: 1.2,
          }}>
            Godspeed — Frank Ocean
          </span>
        </div>
      </div>
    </motion.a>
  )
}
