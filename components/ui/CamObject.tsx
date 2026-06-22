"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"

export default function CamObject() {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ rotate: -4, scale: 1.07, y: -8 }}
      transition={{ delay: 1.5, ...SPRING_SNAPPY }}
      style={{
        position: "absolute",
        bottom: "4%",
        left: "3%",
        rotate: "12deg",
        width: "150px",
        pointerEvents: "auto",
        cursor: "none",
        animation: "float3 8s ease-in-out infinite",
        filter: hovered ? "drop-shadow(0 20px 30px rgba(0,0,0,0.15)) drop-shadow(0 0 20px rgba(59,139,235,0.4)) brightness(1.05)" : undefined,
        transition: "filter 0.3s ease",
        zIndex: 4,
      }}
    >
      <Image src="/images/cam.png" alt="Nikon Coolpix" width={150} height={190}
        style={{ width: "100%", height: "auto", objectFit: "contain" }} />
    </motion.div>
  )
}