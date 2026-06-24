"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { UseInViewOptions } from "motion/react"

interface SplitTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  animationFrom?: { y?: number | string; opacity?: number }
  animationTo?: { y?: number | string; opacity?: number }
  threshold?: number
  rootMargin?: string
}

export default function SplitText({
  text,
  className,
  style,
  delay = 80,
  animationFrom = { y: "110%", opacity: 0 },
  animationTo = { y: "0%", opacity: 1 },
  threshold = 0.2,
  rootMargin = "-80px",
}: SplitTextProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: rootMargin as UseInViewOptions["margin"], amount: threshold })

  const chars = text.split("")

  return (
    <span ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={animationFrom}
            animate={inView ? animationTo : animationFrom}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: (i * delay) / 1000,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
