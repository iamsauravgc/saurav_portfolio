"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function LaptopObject() {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [14, -14]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-14, 14]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.div
      ref={ref}
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, ...SPRING_BOUNCY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
      style={{
        position: "absolute",
        top: "6%",
        right: "2%",
        rotate: "-6deg",
        width: "280px",
        pointerEvents: "auto",
        cursor: "none",
        animation: "float1 11s ease-in-out infinite",
        transformStyle: "preserve-3d",
        perspective: 800,
        rotateX,
        rotateY,

        zIndex: 6,
      }}
    >
      <Image src="/images/laptop.png" alt="Sticker laptop" width={280} height={210}
        style={{ width: "100%", height: "auto", objectFit: "contain" }} />
    </motion.div>
  )
}