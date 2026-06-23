"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"

export default function PhoneObject() {
  return (
    <motion.div
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, ...SPRING_SNAPPY }}
      style={{
        position: "absolute",
        top: "5%",
        left: "8%",
        rotate: "-10deg",
        width: "190px",
        animation: "float1 6s ease-in-out infinite",
        zIndex: 5,
      }}
    >
      <Image
        src="/images/nothing.png"
        alt="Nothing Phone"
        width={190}
        height={380}
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
        priority
      />
    </motion.div>
  )
}
