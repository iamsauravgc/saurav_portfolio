"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { SPRING_SMOOTH, SPRING_SNAPPY } from "@/lib/animation"

const CURRENTLY = [
  { label: "building", value: "this portfolio + MLOps pipeline" },
  { label: "learning", value: "Rust, system design, D3.js" },
  { label: "listening", value: "Blonde — Frank Ocean (always)" },
  { label: "reading", value: "Designing Data-Intensive Applications" },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-about"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 60px",
        position: "relative",
      }}
    >
      <div style={{
        width: "100%",
        maxWidth: "1100px",
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: "64px",
        alignItems: "start",
      }}>
        {/* Left — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ delay: 0.1, ...SPRING_SMOOTH }}
        >
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>
            whoami
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            margin: "0 0 24px",
          }}>
            I build things <br />that work.
          </h2>

          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: 1.75,
            color: "var(--color-text-secondary)",
            maxWidth: "42ch",
          }}>
            CS student based in Kathmandu, Nepal. I care about craft — 
            how clearly things communicate, how well systems scale, and 
            whether the people using them actually enjoy the experience. 
            Always in &quot;let me try this&quot; mode.
          </p>

          <div style={{
            display: "flex",
            gap: "10px",
            marginTop: "32px",
            flexWrap: "wrap",
          }}>
            {["Python", "TypeScript", "React", "FastAPI", "PostgreSQL", "Docker"].map((tech) => (
              <span key={tech} style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.06em",
                padding: "5px 12px",
                borderRadius: "100px",
                border: "1px solid var(--color-border-strong)",
                color: "var(--color-accent2)",
                backgroundColor: "rgba(59,139,235,0.06)",
              }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Photo + Currently */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ delay: 0.2, ...SPRING_SMOOTH }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Photo card */}
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            maxWidth: "400px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(45,25,9,0.18)",
          }}>
            <Image
              src="/images/cam.png"
              alt="Saurav G.C."
              fill
              style={{ objectFit: "cover" }}
              sizes="400px"
            />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "20px",
              background: "linear-gradient(transparent, rgba(22,19,14,0.6))",
            }}>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "rgba(237,224,196,0.8)",
                letterSpacing: "0.1em",
              }}>
                kathmandu · nepal
              </p>
            </div>
          </div>

          {/* Currently card */}
          <div style={{
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "20px 24px",
            maxWidth: "400px",
            backgroundColor: "var(--color-bg)",
          }}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ color: "var(--color-accent)", marginRight: "6px" }}
              >
                ●
              </motion.span>
              currently
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {CURRENTLY.map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "baseline",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.06em",
                    minWidth: "64px",
                    textTransform: "uppercase",
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.4,
                  }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
