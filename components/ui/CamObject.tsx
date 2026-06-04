"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"

export default function CamObject() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ rotate: -6, scale: 1.07, y: -6 }}
      transition={{ delay: 1.5, ...SPRING_SNAPPY }}
      style={{
        position: "absolute",
        top: "28%",
        right: "3%",
        rotate: "8deg",
        width: "150px",
        pointerEvents: "auto",
        cursor: "none",
        animation: "float2 8s ease-in-out infinite",
        filter: hovered
          ? "drop-shadow(0 0 16px rgba(59,139,235,0.35)) brightness(1.05)"
          : "drop-shadow(0 8px 24px rgba(26,24,20,0.15))",
        transition: "filter 0.3s ease",
      }}
    >
      <Image
        src="/images/cam.png"
        alt="Nikon Coolpix camera"
        width={150}
        height={190}
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      />
    </motion.div>
  )
}