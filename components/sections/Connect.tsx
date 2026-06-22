"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SPRING_SNAPPY, SPRING_SMOOTH, clipRevealVariants, fadeUpVariants, EASE_OUT_EXPO } from "@/lib/animation"

const LINKS = [
  { label: "GitHub", href: "https://github.com/saurav856", mono: "saurav856" },
  { label: "LinkedIn", href: "https://linkedin.com/in/iamsauravgc", mono: "iamsauravgc" },
  { label: "Email", href: "mailto:sauravgc33@gmail.com", mono: "sauravgc33@gmail.com" },
]

export default function Connect() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      id="connect"
      className="section-connect"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 80px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>

        {/* "You made it here." */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0, duration: 0.6, ease: EASE_OUT_EXPO }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            color: "var(--color-text-muted)",
            fontStyle: "italic",
            marginBottom: "32px",
            letterSpacing: "0.02em",
          }}
        >
          You made it here.
        </motion.p>

        {/* Headline line 1 */}
        <div style={{ overflow: "hidden", marginBottom: "4px" }}>
          <motion.h2
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ delay: 0.15, duration: 0.85, ease: EASE_OUT_EXPO }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(52px, 8vw, 100px)",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            Let's build something
          </motion.h2>
        </div>

        {/* Headline line 2 */}
        <div style={{ overflow: "hidden", marginBottom: "60px" }}>
          <motion.h2
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ delay: 0.3, duration: 0.85, ease: EASE_OUT_EXPO }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(52px, 8vw, 100px)",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            worth clicking.
          </motion.h2>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.5 + i * 0.08, ...SPRING_SMOOTH }}
              whileHover={{ x: 6, color: "var(--color-accent2)" }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid var(--color-border, rgba(26,24,20,0.08))",
                color: "var(--color-text-primary)",
                transition: "color 0.2s ease",
              }}
            >
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(20px, 3vw, 28px)",
                letterSpacing: "-0.02em",
                flex: 1,
              }}>
                {link.label}
              </span>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-text-muted)",
                letterSpacing: "0.04em",
              }}>
                {link.mono} ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}