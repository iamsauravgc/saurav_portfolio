"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"
import { heroLayout } from "@/lib/heroLayout"
import { useSoundEffect } from "@/lib/hooks/useSoundEffect"
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion"

const { top, left, rotate, z } = heroLayout.phone

export default function PhoneObject() {
  const playSound = useSoundEffect("/sounds/oi.mp3")
  const prefersReducedMotion = usePrefersReducedMotion()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40])
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0.3])
  const scrollScale = useTransform(scrollY, [0, 400], [1, 0.85])

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        zIndex: z,
        y: prefersReducedMotion ? 0 : parallaxY,
        opacity: prefersReducedMotion ? 1 : scrollOpacity,
        scale: prefersReducedMotion ? 1 : scrollScale,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, ...SPRING_SNAPPY }}
        style={{
          rotate: `${rotate}deg`,
          width: "190px",
          animation: prefersReducedMotion ? "none" : "float1 6s ease-in-out infinite",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12)) saturate(0.97) brightness(0.99)",
          pointerEvents: "auto",
        }}
      >
        <motion.div
          onMouseEnter={playSound}
          whileHover={prefersReducedMotion ? { opacity: 0.85 } : { x: [0, -8, 8, -6, 6, -4, 4, 0], rotate: [0, -5, 5, -3, 3, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
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
      </motion.div>
    </motion.div>
  )
}
