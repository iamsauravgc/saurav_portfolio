"use client"

import { motion, useTransform } from "framer-motion"
import { useScrollY } from "@/lib/scroll-context"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"
import { heroLayout } from "@/lib/heroLayout"
import { useSoundEffect } from "@/lib/hooks/useSoundEffect"
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion"

interface PhoneObjectProps {
  isMobile?: boolean
}

export default function PhoneObject({ isMobile }: PhoneObjectProps) {
  const playSound = useSoundEffect("/sounds/oi.mp3")
  const prefersReducedMotion = usePrefersReducedMotion()
  const scrollY = useScrollY()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40])
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0.3])
  const scrollScale = useTransform(scrollY, [0, 400], [1, 0.85])
  const layout = isMobile ? heroLayout.mobile.phone : heroLayout.phone
  const { top, left, rotate, z, width } = layout
  const disableParallax = prefersReducedMotion || isMobile
  const disableEffects = prefersReducedMotion

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        zIndex: z,
        y: disableParallax ? 0 : parallaxY,
        opacity: disableParallax ? 1 : scrollOpacity,
        scale: disableParallax ? 1 : scrollScale,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, ...SPRING_SNAPPY }}
        style={{
          rotate: `${rotate}deg`,
          width: `${width}px`,
          animation: disableEffects ? "none" : "float1 6s ease-in-out infinite",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12)) saturate(0.97) brightness(0.99)",
          pointerEvents: "auto",
        }}
      >
        <motion.div
          onMouseEnter={disableEffects ? undefined : playSound}
          whileHover={disableEffects ? undefined : { x: [0, -8, 8, -6, 6, -4, 4, 0], rotate: [0, -5, 5, -3, 3, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/images/nothing.webp"
            alt="Nothing Phone"
            width={width}
            height={Math.round(width * 276 / 190)}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
