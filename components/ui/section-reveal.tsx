"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, type TargetAndTransition } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion"

type VariantName = "fadeUp" | "fadeScale" | "fadeBlur"

const hiddenStates: Record<VariantName, TargetAndTransition> = {
  fadeUp: { opacity: 0 },
  fadeScale: { opacity: 0, scale: 0.93 },
  fadeBlur: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
}

const visibleTransition = {
  duration: 0.7,
  ease: [0.23, 1, 0.32, 1] as const,
}

interface SectionRevealProps {
  children: ReactNode
  variant?: VariantName
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function SectionReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  style,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReduced = usePrefersReducedMotion()

  const hidden = prefersReduced
    ? { opacity: 1, scale: 1, filter: "none" }
    : hiddenStates[variant]

  const visible: TargetAndTransition = {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { ...visibleTransition, delay },
  }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
