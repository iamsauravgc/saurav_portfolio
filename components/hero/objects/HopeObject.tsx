"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { heroLayout } from "@/lib/heroLayout"
import { useSoundEffect } from "@/lib/hooks/useSoundEffect"
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion"

const { top, left, rotate, z } = heroLayout.hope

export default function HopeObject() {
  const playSound = useSoundEffect("/sounds/paper-crinkle.mp3")
  const prefersReducedMotion = usePrefersReducedMotion()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -50])
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0.15])
  const scrollScale = useTransform(scrollY, [0, 400], [1, 0.78])

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
        transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
        style={{
          rotate: `${rotate}deg`,
          width: "170px",
          animation: prefersReducedMotion ? "none" : "float2 9s ease-in-out infinite",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12)) saturate(0.92) brightness(0.97) blur(0.4px)",
        }}
      >
        <motion.div
          onMouseEnter={playSound}
          whileHover={prefersReducedMotion ? { opacity: 0.85 } : { scale: 1.25, y: 10, rotate: 0, rotateX: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            pointerEvents: "auto",
          }}
        >
          <Image
            src="/images/hope.png"
            alt="Hope"
            width={170}
            height={128}
            style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
