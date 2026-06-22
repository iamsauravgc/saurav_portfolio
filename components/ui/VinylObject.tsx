"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function VinylObject() {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.25, ...SPRING_BOUNCY }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.06 }}
      style={{
        position: "absolute",
        bottom: "4%",
        left: "22%",
        rotate: "8deg",
        width: "260px",
        pointerEvents: "auto",
        cursor: "none",
        zIndex: 4,
      }}
    >
      <div style={{
        animation: hovered ? "spin 1.5s linear infinite" : "spin 10s linear infinite",
      }}>
        <Image src="/images/vinyl.png" alt="Blond — Frank Ocean" width={260} height={260}
          style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </div>
    </motion.div>
  )
}