"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function VinylObject() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.3, ...SPRING_BOUNCY }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      style={{
        position: "absolute",
        bottom: "10%",
        left: "2%",
        rotate: "5deg",
        width: "180px",
        pointerEvents: "auto",
        cursor: "none",
        /* spin speed changes on hover via inline style on inner */
      }}
    >
      <div
        style={{
          animation: hovered
            ? "spin 1.5s linear infinite"
            : "spin 8s linear infinite",
          filter: "drop-shadow(0 8px 32px rgba(26,24,20,0.2))",
        }}
      >
        <Image
          src="/images/vinyl.png"
          alt="Blond — Frank Ocean vinyl"
          width={180}
          height={180}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>
    </motion.div>
  )
}