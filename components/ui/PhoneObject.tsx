"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY, SPRING_BOUNCY } from "@/lib/animation"

export default function PhoneObject() {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, ...SPRING_BOUNCY }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ rotate: -4, scale: 1.05 }}
      style={{
        position: "absolute",
        top: "2%",
        left: "2%",
        rotate: "-10deg",
        width: "190px",
        pointerEvents: "auto",
        cursor: "none",
        animation: "float1 6s ease-in-out infinite",
        filter: hovered ? "drop-shadow(0 20px 30px rgba(0,0,0,0.15)) drop-shadow(0 0 24px rgba(59,139,235,0.5))" : undefined,
        transition: "filter 0.3s ease",
        zIndex: 5,
      }}
    >
      <Image src="/images/nothing.png" alt="Nothing Phone" width={190} height={380}
        style={{ width: "100%", height: "auto", objectFit: "contain" }} priority />
    </motion.div>
  )
}