"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import PhoneObject from "@/components/hero/objects/PhoneObject"
import VinylObject from "@/components/hero/objects/VinylObject"
import LaptopObject from "@/components/hero/objects/LaptopObject"
import PolaroidCard from "@/components/hero/objects/PolaroidCard"
import CamObject from "@/components/hero/objects/CamObject"
import HopeObject from "@/components/hero/objects/HopeObject"

interface HeroSectionProps {
  loaderDone: boolean
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
  },
}

export default function HeroSection({ loaderDone }: HeroSectionProps) {
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
          }}
        >
          <PhoneObject />
          <VinylObject />
          <LaptopObject />
          <PolaroidCard />
          <CamObject />
          <HopeObject />
        </div>
      )}

      {/* Center content */}
      {loaderDone && (
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          {/* Line 1 — greeting */}
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "18px",
              color: "var(--color-text-muted)",
              marginBottom: "12px",
            }}
          >
            Welcome to my little corner of the internet
          </motion.p>

          {/* Line 2 — headline */}
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(48px, 9vw, 120px)",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            I turn ideas into
          </motion.p>

          {/* Line 3 — headline */}
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(48px, 9vw, 120px)",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            things you can click.
          </motion.p>

          {/* Line 4 — sub */}
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "15px",
              color: "var(--color-text-muted)",
              marginTop: "24px",
            }}
          >
            a room on the internet.
          </motion.p>

          {/* Byline */}
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              alignSelf: "flex-end",
              marginTop: "8px",
              letterSpacing: "0.02em",
            }}
          >
            — Saurav G.C.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            variants={lineVariants}
            style={{ opacity: scrollOpacity, marginTop: "48px" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-text-muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
              }}
            >
              scroll
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
