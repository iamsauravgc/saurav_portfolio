"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import SplitText from "@/components/ui/SplitText"
import { BlurFade } from "@/components/ui/blur-fade"
import { AnimatedBackground } from "@/components/motion-primitives/animated-background"

const projects = [
  {
    index: "01",
    name: "Himalayan Hawala",
    tagline: "Remittance intelligence platform predicting forex rates and generating AI-powered market alerts.",
    tags: ["Next.js", "FastAPI", "Python", "ML"],
    year: "2026",
    image: "/images/projects/himalayan-hawala.svg",
    href: "https://github.com/saurav856/himalayan-hawala",
    external: true,
  },
  {
    index: "02",
    name: "Credit Card Default Prediction",
    tagline: "End-to-end MLOps pipeline from raw data to deployed model with Airflow orchestration and drift monitoring.",
    tags: ["Python", "Airflow", "Docker", "ML"],
    year: "2026",
    image: "/images/projects/mlops.svg",
    href: "https://github.com/saurav856/Credit-Card-Default-Prediction",
    external: true,
  },
  {
    index: "03",
    name: "Paper Recommender",
    tagline: "Paste an ArXiv paper URL and instantly find semantically similar research papers.",
    tags: ["Python", "FastAPI", "React", "NLP"],
    year: "2026",
    image: "/images/projects/paper-recommender.svg",
    href: "https://github.com/saurav856/paper_recommender",
    external: true,
  },
  {
    index: "04",
    name: "Nepal Economic Dashboard",
    tagline: "Tracking remittance inflows, exchange rates, and inflation with a 3-year ML forecast.",
    tags: ["React", "FastAPI", "PostgreSQL", "ML"],
    year: "2026",
    image: "/images/projects/nepal-dashboard.svg",
    href: "https://github.com/saurav856/nepal-economic-dashboard",
    external: true,
  },
]

export default function Work() {
  const [hovered, setHovered] = useState<string | null>(null)
  const hoveredProject = projects.find((p) => p.index === hovered)

  return (
    <section
      id="work"
      style={{
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Block 1: Section Tag */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--color-accent)",
          }}
        >
          selected work
        </span>

        {/* Block 1: Headline */}
        <div style={{ overflow: "hidden", marginTop: "16px" }}>
          <SplitText
            text="Things I've built."
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
            }}
            delay={80}
            animationFrom={{ y: "110%", opacity: 0 }}
            animationTo={{ y: "0%", opacity: 1 }}
            threshold={0.2}
          />
        </div>

        {/* Block 2: Two-column container */}
        <div className="work-two-col" style={{
          display: "flex",
          gap: "80px",
          marginTop: "64px",
          alignItems: "flex-start",
        }}>
          {/* LEFT - Project rows */}
          <div style={{ flex: "0 0 60%" }}>
            <AnimatedBackground
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              enableHover
            >
              {projects.map((project, index) => (
                <BlurFade
                  key={project.index}
                  delay={0.1 + index * 0.12}
                  inView
                >
                  <motion.a
                    data-id={project.index}
                    href={project.href}
                    target={project.external ? "_blank" : undefined}
                    rel={project.external ? "noopener noreferrer" : undefined}
                    onMouseEnter={() => setHovered(project.index)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "24px 8px",
                      borderBottom: "1px solid var(--color-border)",
                      borderTop: index === 0 ? "1px solid var(--color-border)" : "none",
                      position: "relative",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {/* Index */}
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--color-text-muted)",
                      minWidth: "32px",
                      flexShrink: 0,
                    }}>
                      {project.index}
                    </span>

                    {/* Name + tagline */}
                    <div style={{ flex: 1, padding: "0 32px" }}>
                      <div style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 200,
                        fontSize: "clamp(28px, 3.5vw, 52px)",
                        lineHeight: 1.1,
                        color: hovered === project.index
                          ? "var(--color-accent)"
                          : "var(--color-text-primary)",
                        transition: "color 0.2s ease",
                      }}>
                        {project.name}
                      </div>

                      <motion.div
                        style={{ overflow: "hidden" }}
                        initial={{ height: 0, opacity: 0 }}
                        animate={
                          hovered === project.index
                            ? { height: "auto", opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <p style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "var(--color-text-secondary)",
                          marginTop: "4px",
                        }}>
                          {project.tagline}
                        </p>
                      </motion.div>
                    </div>

                    {/* Tags — plain mono + dot separators */}
                    <div className="work-tags" style={{ display: "flex", flexShrink: 0 }}>
                      {project.tags.map((tag, i) => (
                        <span key={tag}>
                          <span style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            color: "var(--color-text-muted)",
                            letterSpacing: "0.04em",
                          }}>
                            {tag}
                          </span>
                          {i < project.tags.length - 1 && (
                            <span style={{
                              color: "var(--color-accent)",
                              margin: "0 6px",
                              fontSize: "8px",
                            }}>
                              {"\u25CF"}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Year */}
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "var(--color-text-muted)",
                      marginLeft: "32px",
                      flexShrink: 0,
                    }}>
                      {project.year}
                    </span>

                    {/* Arrow */}
                    <motion.span
                      style={{
                        color: "var(--color-accent2)",
                        fontFamily: "var(--font-body)",
                        fontSize: "20px",
                        marginLeft: "16px",
                        flexShrink: 0,
                      }}
                      initial={{ x: -10, opacity: 0 }}
                      animate={
                        hovered === project.index
                          ? { x: 0, opacity: 1 }
                          : { x: -10, opacity: 0 }
                      }
                      transition={{ duration: 0.2 }}
                    >
                      {"\u2192"}
                    </motion.span>

                    {/* Border expand */}
                    <motion.div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "1px",
                        width: "100%",
                        background: "var(--color-accent)",
                        transformOrigin: "left",
                      }}
                      initial={{ scaleX: 0 }}
                      animate={hovered === project.index ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </motion.a>
                </BlurFade>
              ))}
            </AnimatedBackground>
          </div>

          {/* RIGHT - Sticky polaroid preview */}
          <div className="work-preview" style={{
            flex: 1,
            position: "sticky",
            top: "120px",
          }}>
            <AnimatePresence mode="wait">
              {hoveredProject ? (
                <motion.div
                  key={hoveredProject.index}
                  initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 2 }}
                  exit={{ opacity: 0, scale: 0.92, rotate: 2 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    rotate: "2deg",
                    filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.10))",
                  }}
                >
                  <div style={{
                    background: "#fff",
                    padding: "10px 10px 36px 10px",
                    borderRadius: "2px",
                    lineHeight: 0,
                    position: "relative",
                  }}>
                    {/* Tape */}
                    <div style={{
                      position: "absolute",
                      top: "-6px",
                      left: "50%",
                      marginLeft: "-14px",
                      width: "28px",
                      height: "16px",
                      background: "rgba(200,190,175,0.35)",
                      borderRadius: "1px",
                      rotate: "-2deg",
                      opacity: 0.8,
                    }} />
                    <Image
                      src={hoveredProject.image}
                      alt={hoveredProject.name}
                      width={320}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "280px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                    background: "rgba(43,37,33,0.03)",
                  }}
                >
                  hover a project
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Block 3: Footer link */}
        <motion.a
          href="https://github.com/saurav856"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "48px",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "15px",
            color: "var(--color-text-muted)",
            textDecoration: "none",
          }}
          whileHover={{ color: "var(--color-text-primary)" }}
          transition={{ duration: 0.2 }}
        >
          more on GitHub
          <motion.span
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {"\u2192"}
          </motion.span>
        </motion.a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-two-col {
            flex-direction: column;
          }
          .work-preview {
            order: -1;
            margin-bottom: 32px;
          }
          .work-tags {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
