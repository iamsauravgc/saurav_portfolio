"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { motion, useTransform, type Variants } from "framer-motion"
import { useScrollY } from "@/lib/scroll-context"
import { useIsMobile } from "@/hooks/useIsMobile"

const PhoneObject = dynamic(() => import("@/components/hero/objects/PhoneObject"))
const VinylPlayer = dynamic(() => import("@/components/hero/objects/VinylPlayer").then((m) => ({ default: m.VinylPlayer })))
const LaptopObject = dynamic(() => import("@/components/hero/objects/LaptopObject"))
const PolaroidCard = dynamic(() => import("@/components/hero/objects/PolaroidCard"))
const CamObject = dynamic(() => import("@/components/hero/objects/CamObject"))
const HopeObject = dynamic(() => import("@/components/hero/objects/HopeObject"))

interface HeroSectionProps {
  loaderDone: boolean
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const lineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
  },
}

export default function HeroSection({ loaderDone }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollY = useScrollY()
  const isMobile = useIsMobile()
  const scrollOpacity = useTransform(scrollY, [0, 120], [1, 0])
  const scrollScale = useTransform(scrollY, [0, 200], [1, 0.96])
  const scrollYOffset = useTransform(scrollY, [0, 300], [0, 60])
  const scrollBlur = useTransform(scrollY, [0, 300], [0, 4])

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
      {loaderDone && (
        <div className="hero-objects-wrapper">
          <PhoneObject isMobile={isMobile} />
          <VinylPlayer isMobile={isMobile} />
          <LaptopObject isMobile={isMobile} />
          <PolaroidCard isMobile={isMobile} />
          <CamObject isMobile={isMobile} />
          <HopeObject isMobile={isMobile} />
        </div>
      )}

      {loaderDone && (
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-35%",
            scale: isMobile ? 1 : scrollScale,
            zIndex: 10,
            maxWidth: "420px",
            width: "calc(100% - 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
          }}
        >
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-handwritten)",
              fontSize: "clamp(20px, 3vw, 26px)",
              color: "#B5654A",
              margin: 0,
              lineHeight: 1.2,
              y: isMobile ? 0 : scrollYOffset,
            }}
          >
            hey there
          </motion.p>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "var(--color-text-primary)",
              lineHeight: 1.5,
              margin: 0,
              letterSpacing: "0.01em",
              filter: isMobile ? "none" : `blur(${scrollBlur}px)`,
              y: isMobile ? 0 : scrollYOffset,
            }}
          >
            Hi, I&apos;m Saurav — I turn ideas into things you click.
          </motion.p>

          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.5vw, 16px)",
              color: "var(--color-text-muted)",
              margin: 0,
              letterSpacing: "0.03em",
              filter: isMobile ? "none" : `blur(${scrollBlur}px)`,
              y: isMobile ? 0 : scrollYOffset,
            }}
          >
            student · developer · maker
          </motion.p>
        </motion.div>
      )}

      {loaderDone && (
        <motion.div
          variants={lineVariants}
          style={{
            position: "absolute",
            bottom: "8%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 10,
            opacity: scrollOpacity,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "13px",
              color: "var(--color-text-primary)",
              letterSpacing: "0.2em",
              opacity: 0.8,
            }}
          >
            ↓ scroll
          </span>
          <motion.span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "13px",
              color: "var(--color-text-primary)",
              opacity: 0.8,
              animation: "blink 1.2s step-end infinite",
            }}
          >
            _
          </motion.span>
        </motion.div>
      )}
    </section>
  )
}
