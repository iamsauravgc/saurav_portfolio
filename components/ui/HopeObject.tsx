"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"

export default function HopeObject() {
  return (
    <motion.div
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, rotate: -2 }}
      transition={{ delay: 1.35, ...SPRING_SNAPPY }}
      style={{
        position: "absolute",
        top: "38%",
        left: "1%",
        rotate: "5deg",
        width: "170px",
        pointerEvents: "auto",
        cursor: "none",
        animation: "float2 9s ease-in-out infinite",

        zIndex: 4,
      }}
    >
      <Image src="/images/hope.png" alt="Hope" width={170} height={128}
        style={{ width: "100%", height: "auto", objectFit: "contain" }} />
    </motion.div>
  )
}