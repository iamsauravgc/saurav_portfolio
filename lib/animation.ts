import type { Variants } from "framer-motion"

export const SPRING_SNAPPY = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
}

export const SPRING_BOUNCY = {
  type: "spring" as const,
  stiffness: 200,
  damping: 15,
  mass: 1,
}

export const EASE_OUT_EXPO = [0.23, 1, 0.32, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.93, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

export const fadeBlur: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
}

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
}
