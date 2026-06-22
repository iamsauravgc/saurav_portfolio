"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { EASE_OUT_EXPO, SPRING_SMOOTH, SPRING_BOUNCY, SPRING_SNAPPY } from "@/lib/animation"
import PhoneObject from "@/components/ui/PhoneObject"
import VinylObject from "@/components/ui/VinylObject"
import LaptopObject from "@/components/ui/LaptopObject"
import PolaroidStack from "@/components/ui/PolaroidStack"
import CamObject from "@/components/ui/CamObject"
import HopeObject from "@/components/ui/HopeObject"


interface HeroProps {
  loaderDone: boolean
}

export default function Hero({ loaderDone }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const scrollOpacity = useTransform(scrollY, [0, 120], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "120px 40px 80px",
      }}
    >
      {/* Scattered objects — desktop only */}
      {loaderDone && (
        <div
          className="hidden lg:block"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <PhoneObject />
          <VinylObject />
          <LaptopObject />
          <PolaroidStack />
          <CamObject />
          <HopeObject />
        </div>
      )}

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "900px",
          width: "100%",
          gap: "16px",
        }}
      >

        {/* Greeting */}
        {loaderDone && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE_OUT_EXPO }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Hi, internet wanderer.
          </motion.p>
        )}

        {/* Name — THE WOW MOMENT */}
        <div style={{ overflow: "hidden", lineHeight: 0.95 }}>
          {loaderDone && (
            <motion.h1
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ delay: 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(72px, 14vw, 180px)",
                color: "var(--color-text-primary)",
                textShadow: "0 2px 0 rgba(255,255,255,0.3)",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              SAURAV G.C.
            </motion.h1>
          )}
        </div>

        {/* Tagline */}
        {loaderDone && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, ...SPRING_SMOOTH }}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(16px, 2.5vw, 24px)",
              color: "var(--color-text-primary)",
              maxWidth: "540px",
              lineHeight: 1.5,
            }}
          >
            I turn ideas into things you can click.
          </motion.p>
        )}

        {/* Sub */}
        {loaderDone && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, ...SPRING_SMOOTH }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            CS · AI/ML · Kathmandu · GMT+5:45
          </motion.p>
        )}

        {/* Scroll indicator */}
        {loaderDone && (
          <motion.div
            style={{ opacity: scrollOpacity, marginTop: "16px" }}
          >
            <motion.p
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--color-text-muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              scroll ↓
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  )
}