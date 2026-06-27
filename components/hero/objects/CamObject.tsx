"use client"

import { motion, useTransform } from "framer-motion"
import { useScrollY } from "@/lib/scroll-context"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"
import { heroLayout } from "@/lib/heroLayout"
import { useSoundEffect } from "@/lib/hooks/useSoundEffect"
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion"

interface CamObjectProps {
  isMobile?: boolean
}

export default function CamObject({ isMobile }: CamObjectProps) {
  const playShutter = useSoundEffect("/sounds/camera-click.mp3")
  const prefersReducedMotion = usePrefersReducedMotion()
  const scrollY = useScrollY()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -30])
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0.2])
  const scrollScale = useTransform(scrollY, [0, 400], [1, 0.8])
  const layout = isMobile ? heroLayout.mobile.camera : heroLayout.camera
  const { bottom, left, rotate, z, width } = layout
  const disableParallax = prefersReducedMotion || isMobile
  const disableEffects = prefersReducedMotion

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom,
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
        transition={{ delay: 1.2, ...SPRING_SNAPPY }}
        style={{
          rotate: `${rotate}deg`,
          width: `${width}px`,
          animation: disableEffects ? "none" : "float3 8s ease-in-out infinite",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12)) saturate(0.92) brightness(0.97) blur(0.4px)",
        }}
      >
        <motion.div
          onMouseEnter={disableEffects ? undefined : playShutter}
          whileHover={disableEffects ? undefined : { x: 8, y: -6, rotate: -90, scale: 1.06 }}
          style={{
            pointerEvents: "auto",
          }}
        >
          <Image
            src="/images/cam.webp"
            alt="Nikon Coolpix"
            width={width}
            height={Math.round(width * 225 / 150)}
            style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
