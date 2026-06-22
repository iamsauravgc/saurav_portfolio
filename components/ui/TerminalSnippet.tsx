"use client"

import { motion } from "framer-motion"
import { SPRING_SNAPPY } from "@/lib/animation"

const CIRCLES = [
  { color: "#FF5F56" },
  { color: "#FFBD2E" },
  { color: "#27C93F" },
]

export default function TerminalSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, ...SPRING_SNAPPY }}
      whileHover={{ scale: 1.03 }}
      data-cursor="default"
      style={{
        position: "absolute",
        bottom: "18%",
        right: "6%",
        rotate: "2deg",
        pointerEvents: "auto",
        animation: "float4 8s ease-in-out infinite",
        zIndex: 5,
      }}
    >
      <div className="glass-warm" style={{
        padding: "16px 20px",
        minWidth: "200px",
      }}>
        {/* macOS traffic lights */}
        <div style={{
          display: "flex",
          gap: "6px",
          marginBottom: "12px",
        }}>
          {CIRCLES.map((c, i) => (
            <div key={i} style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: c.color,
            }} />
          ))}
        </div>

        {/* Terminal content */}
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          lineHeight: 1.8,
          color: "var(--color-text-secondary)",
        }}>
          <div>
            <span style={{ color: "var(--color-accent2)" }}>$</span>{" "}
            ls interests/
          </div>
          <div style={{ color: "var(--color-text-muted)" }}>
            → music &nbsp; AI &nbsp; photography
          </div>
        </div>
      </div>
    </motion.div>
  )
}
