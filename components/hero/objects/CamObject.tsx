"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"
import { heroLayout } from "@/lib/heroLayout"
import { useSoundEffect } from "@/lib/hooks/useSoundEffect"
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion"

const { bottom, left, rotate, z } = heroLayout.camera

export default function CamObject() {
  const playShutter = useSoundEffect("/sounds/camera-click.mp3")
  const prefersReducedMotion = usePrefersReducedMotion()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -30])
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0.2])
  const scrollScale = useTransform(scrollY, [0, 400], [1, 0.8])

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom,
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
        transition={{ delay: 1.2, ...SPRING_SNAPPY }}
        style={{
          rotate: `${rotate}deg`,
          width: "150px",
          animation: prefersReducedMotion ? "none" : "float3 8s ease-in-out infinite",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12)) saturate(0.92) brightness(0.97) blur(0.4px)",
        }}
      >
        <motion.div
          onMouseEnter={playShutter}
          whileHover={prefersReducedMotion ? { opacity: 0.85 } : { x: 8, y: -6, rotate: -90, scale: 1.06 }}
          style={{
            pointerEvents: "auto",
          }}
        >
          <Image
            src="/images/cam.png"
            alt="Nikon Coolpix"
            width={150}
            height={190}
            style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
