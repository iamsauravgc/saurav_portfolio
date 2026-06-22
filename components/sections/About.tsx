"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { SPRING_SMOOTH } from "@/lib/animation"

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
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }}>
        {/* Left — Intro */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ delay: 0.1, ...SPRING_SMOOTH }}
        >
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-copper)",
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
            Saurav G.C.
          </h2>

          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: 1.75,
            color: "var(--color-text-secondary)",
            maxWidth: "42ch",
          }}>
            CS student based in Kathmandu, Nepal. I build things that work — 
            full-stack apps, ML pipelines, and the occasional open source PR. 
            I care about craft, how clearly things communicate, and systems 
            that scale. Always in &quot;let me try this&quot; mode.
          </p>

          <div style={{
            display: "flex",
            gap: "12px",
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
                color: "var(--color-text-secondary)",
              }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Photo card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ delay: 0.2, ...SPRING_SMOOTH }}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3/4",
            maxWidth: "360px",
            marginLeft: "auto",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(28,24,20,0.18)",
          }}
        >
          <Image
            src="/images/cam.png"
            alt="Saurav G.C."
            fill
            style={{ objectFit: "cover" }}
            sizes="360px"
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "20px",
            background: "linear-gradient(transparent, rgba(20,18,16,0.6))",
          }}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.1em",
            }}>
              kathmandu · nepal
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}