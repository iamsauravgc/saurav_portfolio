"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"

export default function HopeObject() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04, rotate: -1 }}
      transition={{ delay: 1.6, ...SPRING_SNAPPY }}
      style={{
        position: "absolute",
        bottom: "18%",
        right: "6%",
        rotate: "2deg",
        width: "160px",
        pointerEvents: "auto",
        cursor: "none",
        animation: "float4 8s ease-in-out infinite",
        filter: "drop-shadow(0 6px 20px rgba(26,24,20,0.12))",
      }}
    >
      <Image
        src="/images/hope.png"
        alt="Hope"
        width={160}
        height={120}
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      />
    </motion.div>
  )
}