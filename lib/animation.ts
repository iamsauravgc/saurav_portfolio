import { Variants } from "framer-motion"

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
