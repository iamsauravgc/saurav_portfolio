import { Variants } from "framer-motion"

// Spring presets
export const SPRING_SMOOTH = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 1,
}

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

export const SPRING_SLOW = {
  type: "spring" as const,
  stiffness: 60,
  damping: 20,
  mass: 1.2,
}

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1]

// Shared variants
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: SPRING_SMOOTH },
}

export const fadeUpFastVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: SPRING_SNAPPY },
}

export const clipRevealVariants: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: SPRING_SMOOTH },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}