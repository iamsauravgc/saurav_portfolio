"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionTransition } from "@/components/ui/section-transition"
import { IconCloud } from "@/components/ui/icon-cloud"

const titles = [
  "CS/AI student,",
  "builder,",
  "curious nerd,",
  "explorer.",
]
const bioBody = [
  "working at the point where machine learning meets actual product thinking. Based in Kathmandu, Nepal — usually somewhere between a forecasting model and a dataset that refuses to cooperate.",
  "Full-stack by training, AI/ML by current obsession. He's equally interested in whether a model performs well and whether the thing built around it feels right to use — most tools fail at the second part.",
  "Guided by curiosity more than a fixed plan. Outside of that: Frank Ocean on repeat, narrative non-fiction about psychology and power, and a Nikon he means to carry more than he actually does.",
]

const slugs = [
  "python", "javascript", "typescript", "react", "nextdotjs",
  "fastapi", "postgresql", "docker", "git", "github",
  "scikitlearn", "pandas", "jupyter", "linux", "figma", "nodedotjs",
]

export default function WhoAmI() {
  const images = slugs.map((slug) => `/images/tech/${slug}.svg`)
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <SectionTransition
      style={{
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)",
      }}
    >
      <section id="whoami">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
            },
          }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-accent)",
            fontWeight: 500,
            display: "block",
          }}
        >
          whoami
        </motion.span>

        <div
          className="about-grid"
          style={{
            display: "flex",
            gap: "80px",
            marginTop: "48px",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "0 0 55%", minWidth: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)",
                  lineHeight: 1.3,
                  color: "var(--color-text-primary)",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Saurav is a{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={titles[titleIndex]}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      style={{ display: "inline-block" }}
                    >
                      {titles[titleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </p>
              {bioBody.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.6vw, 16px)",
                    lineHeight: 1.65,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] },
              },
            }}
            style={{ flex: 1, display: "flex", justifyContent: "center", cursor: "grab" }}
          >
            <IconCloud images={images} size={520} iconSize={64} />
          </motion.div>
        </div>


      </div>
      </section>
    </SectionTransition>
  )
}
