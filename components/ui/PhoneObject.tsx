"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY, SPRING_BOUNCY } from "@/lib/animation"

export default function PhoneObject() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, ...SPRING_BOUNCY }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ rotate: -4, scale: 1.05 }}
      style={{
        position: "absolute",
        top: "5%",
        left: "-2%",
        rotate: "-8deg",
        width: "160px",
        pointerEvents: "auto",
        cursor: "none",
        animation: "float1 6s ease-in-out infinite",
        filter: hovered
          ? "drop-shadow(0 0 20px rgba(59,139,235,0.5))"
          : "drop-shadow(0 8px 24px rgba(26,24,20,0.15))",
        transition: "filter 0.3s ease",
      }}
    >
      <Image
        src="/images/nothing.png"
        alt="Nothing Phone"
        width={160}
        height={320}
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
        priority
      />
    </motion.div>
  )
}