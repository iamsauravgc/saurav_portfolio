"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function LaptopObject() {
  return (
    <motion.div
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, ...SPRING_BOUNCY }}
      style={{
        position: "absolute",
        top: "5%",
        right: "8%",
        rotate: "-6deg",
        width: "280px",
        animation: "float1 11s ease-in-out infinite",
        zIndex: 6,
      }}
    >
      <Image
        src="/images/laptop.png"
        alt="Sticker laptop"
        width={280}
        height={210}
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      />
    </motion.div>
  )
}
