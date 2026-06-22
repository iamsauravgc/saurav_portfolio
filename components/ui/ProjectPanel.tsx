"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SPRING_SMOOTH, SPRING_SNAPPY } from "@/lib/animation"

interface Project {
  index: number
  name: string
  description: string
  stack: string[]
  live: string | null
  github: string | null
}

interface ProjectPanelProps {
  project: Project
  isFirst: boolean
}

const STACK_COLOR = "#3B8BEB"

export default function ProjectPanel({ project, isFirst }: ProjectPanelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const shouldAnimate = isFirst || isInView

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--color-bg)",
        display: "flex",
        alignItems: "center",
        padding: "0 80px",
        gap: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Panel counter */}
      <span style={{
        position: "absolute",
        top: "32px",
        left: "80px",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--color-text-muted)",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
      }}>
        {String(project.index + 1).padStart(2, "0")} / 04
      </span>

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ delay: 0.15, ...SPRING_SMOOTH }}
        style={{ flex: 1, maxWidth: "480px" }}
      >
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(40px, 5vw, 72px)",
          color: "var(--color-text-primary)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          margin: "0 0 24px",
        }}>
          {project.name}
        </h3>

        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "18px",
          color: "var(--color-text-secondary)",
          lineHeight: 1.7,
          margin: "0 0 32px",
          maxWidth: "420px",
        }}>
          {project.description}
        </p>

        {/* Stack tags — one color always */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
          {project.stack.map(tag => (
            <span key={tag} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: STACK_COLOR,
              border: `1px solid ${STACK_COLOR}40`,
              borderRadius: "4px",
              padding: "4px 10px",
              letterSpacing: "0.06em",
              backgroundColor: `${STACK_COLOR}08`,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "24px" }}>
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={SPRING_SNAPPY}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                borderBottom: "1px solid var(--color-text-primary)",
                paddingBottom: "2px",
              }}
            >
              Live ↗
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={SPRING_SNAPPY}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                borderBottom: "1px solid var(--color-text-muted)",
                paddingBottom: "2px",
              }}
            >
              GitHub ↗
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* Right — placeholder image */}
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 2 }}
        animate={shouldAnimate ? { opacity: 1, x: 0, rotate: 1 } : { opacity: 0, x: 40, rotate: 2 }}
        transition={{ delay: 0.3, ...SPRING_SMOOTH }}
        style={{ flex: 1, maxWidth: "560px" }}
      >
        <motion.div
          whileHover={{ scale: 1.02, rotate: 0 }}
          transition={SPRING_SMOOTH}
          style={{
            width: "100%",
            aspectRatio: "16/10",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 24px 48px rgba(26,24,20,0.12)",
            position: "relative",
            backgroundColor: "var(--color-bg-elevated, #1a1814)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(59,139,235,0.12)",
          }}
        >
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "rgba(59,139,235,0.4)",
            letterSpacing: "0.1em",
          }}>
            screenshot coming
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}