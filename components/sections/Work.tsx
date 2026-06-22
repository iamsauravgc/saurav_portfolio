"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SPRING_SMOOTH } from "@/lib/animation"
import { PROJECTS as PROJECT_DATA } from "@/lib/constants"
import ProjectPanel from "@/components/ui/ProjectPanel"

const PROJECTS = PROJECT_DATA.map((p, i) => ({
  index: i,
  name: p.name.replace("Nepal Economic Dashboard", "Nepal Dashboard").replace("MLOps Credit Default Pipeline", "MLOps Pipeline").replace("TheAlgorithms Contributions", "TheAlgorithms"),
  description: p.description,
  stack: p.stack,
  live: p.live,
  github: p.github,
  image: p.image,
}))

const PER_PANEL = 150
const N = PROJECTS.length

function PanelWrapper({ children, index, scrollYProgress }: {
  children: React.ReactNode
  index: number
  scrollYProgress: any
}) {
  const start = index / N
  const y = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.15), start],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  )

  const nextStart = (index + 1) / N
  const scale = useTransform(
    scrollYProgress,
    [nextStart - 0.05, nextStart + 0.15],
    [1, 0.88]
  )

  const borderRadius = index === 0 ? "0px" : "20px 20px 0 0"

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        y: index === 0 ? "0%" : y,
        scale: index < N - 1 ? scale : 1,
        zIndex: index + 1,
        borderRadius,
        overflow: "hidden",
        transformOrigin: "top center",
        boxShadow: index > 0 ? "0 -8px 40px rgba(45,25,9,0.14)" : "none",
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <section id="work" className="section-work" style={{ width: "100%", position: "relative" }}>
      {/* Eyebrow */}
      <div style={{
        position: "absolute",
        top: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        textAlign: "center",
        pointerEvents: "none",
      }}>
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ...SPRING_SMOOTH }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          projects
        </motion.p>
      </div>

      <div
        ref={containerRef}
        style={{ height: `${N * PER_PANEL}vh`, position: "relative" }}
      >
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          {PROJECTS.map((project, i) => (
            <PanelWrapper key={i} index={i} scrollYProgress={scrollYProgress}>
              <ProjectPanel project={project} isFirst={i === 0} />
            </PanelWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
