"use client"

import { motion, useTransform } from "framer-motion"
import { useScrollY } from "@/lib/scroll-context"
import Image from "next/image"
import { SPRING_BOUNCY } from "@/lib/animation"
import { heroLayout } from "@/lib/heroLayout"
import { useSoundEffect } from "@/lib/hooks/useSoundEffect"
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion"

interface PolaroidCardProps {
  isMobile?: boolean
}

export default function PolaroidCard({ isMobile }: PolaroidCardProps) {
  const playSound = useSoundEffect("/sounds/eject.mp3")
  const prefersReducedMotion = usePrefersReducedMotion()
  const scrollY = useScrollY()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -70])
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0.25])
  const scrollScale = useTransform(scrollY, [0, 400], [1, 0.82])
  const layout = isMobile ? heroLayout.mobile.polaroid : heroLayout.polaroid
  const { bottom, right, rotate, z, width } = layout
  const disableParallax = prefersReducedMotion || isMobile
  const disableEffects = prefersReducedMotion

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom,
        right,
        zIndex: z,
        y: disableParallax ? 0 : parallaxY,
        opacity: disableParallax ? 1 : scrollOpacity,
        scale: disableParallax ? 1 : scrollScale,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, rotate: 4 }}
        transition={{ delay: 2.0, ...SPRING_BOUNCY }}
        style={{
          rotate: `${rotate}deg`,
          width: `${width}px`,
          animation: disableEffects ? "none" : "float4 12s ease-in-out infinite",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12)) saturate(0.97) brightness(0.99)",
          pointerEvents: "auto",
        }}
      >
        <div
          onMouseEnter={disableEffects ? undefined : playSound}
          style={{ position: "relative", lineHeight: 0 }}
        >
          <Image
            src="/images/polaroid.webp"
            alt="Polaroid"
            width={width}
            height={Math.round(width * 293 / 220)}
            style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
            priority
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={disableEffects ? undefined : { opacity: [0.85, 0] }}
            transition={{ duration: 0.35 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "#fff",
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
