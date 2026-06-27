"use client"

import { motion, useTransform } from "framer-motion"
import { useScrollY } from "@/lib/scroll-context"
import Image from "next/image"
import { SPRING_BOUNCY } from "@/lib/animation"
import { heroLayout } from "@/lib/heroLayout"
import { useSoundEffect } from "@/lib/hooks/useSoundEffect"
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion"

interface LaptopObjectProps {
  isMobile?: boolean
}

export default function LaptopObject({ isMobile }: LaptopObjectProps) {
  const playSound = useSoundEffect("/sounds/windows.mp3")
  const prefersReducedMotion = usePrefersReducedMotion()
  const scrollY = useScrollY()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -60])
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0.25])
  const scrollScale = useTransform(scrollY, [0, 400], [1, 0.82])
  const layout = isMobile ? heroLayout.mobile.laptop : heroLayout.laptop
  const { top, right, rotate, z, width } = layout
  const disableParallax = prefersReducedMotion || isMobile
  const disableEffects = prefersReducedMotion

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        right,
        zIndex: z,
        y: disableParallax ? 0 : parallaxY,
        opacity: disableParallax ? 1 : scrollOpacity,
        scale: disableParallax ? 1 : scrollScale,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, ...SPRING_BOUNCY }}
        style={{
          rotate: `${rotate}deg`,
          width: `${width}px`,
          animation: disableEffects ? "none" : "float1 13s ease-in-out infinite",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12)) saturate(1.03) brightness(1.02)",
          pointerEvents: "auto",
        }}
      >
        <motion.div
          onMouseEnter={disableEffects ? undefined : playSound}
          whileHover={disableEffects ? undefined : {
            filter: [
              "brightness(0.3)",
              "brightness(0.7)",
              "brightness(0.35)",
              "brightness(1.15) drop-shadow(0 0 30px rgba(255,220,160,0.7)) drop-shadow(0 0 60px rgba(255,200,120,0.35))",
            ],
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          initial={{ filter: "brightness(0.3)" }}
          style={{ lineHeight: 0 }}
        >
          <Image
            src="/images/laptop.png"
            alt="Sticker laptop"
            width={parseInt(width.toString())}
            height={Math.round(width * 618 / 805)}
            style={{ display: "block" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
