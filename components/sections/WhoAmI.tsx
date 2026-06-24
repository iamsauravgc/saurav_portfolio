"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SplitText from "@/components/ui/SplitText"
import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"
import { SPRING_BOUNCY } from "@/lib/animation"

const cards = [
  { label: "currently building", value: "saurav-portfolio" },
  { label: "currently in", value: "Kathmandu, Nepal · GMT+5:45" },
  { label: "vibe", value: "Frank Ocean on repeat" },
]

const marqueeItems = [
  "React", "Machine Learning", "Frank Ocean", "UI/UX", "Kathmandu",
  "Photography", "Nothing Phone", "Framer Motion", "Blond", "Open Source",
  "Kanye West", "Next.js", "Design Systems", "Nikon", "Figma",
]

export default function WhoAmI() {
  return (
    <section
      id="whoami"
      style={{
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", paddingLeft: "clamp(0px, 2vw, 32px)" }}>
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
          about
        </span>

        {/* Block 2: Headline + floating object */}
        <div style={{ position: "relative", marginTop: "28px" }}>
          {/* Headline text */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ overflow: "hidden" }}>
              <SplitText
                text="Building things"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 200,
                  fontSize: "clamp(52px, 7.5vw, 108px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text-primary)",
                }}
                delay={80}
                animationFrom={{ y: "110%", opacity: 0 }}
                animationTo={{ y: "0%", opacity: 1 }}
                threshold={0.2}
                rootMargin="-80px"
              />
            </div>
            <div style={{ overflow: "hidden", marginLeft: "clamp(60px, 8vw, 120px)" }}>
              <SplitText
                text="worth clicking."
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 200,
                  fontSize: "clamp(52px, 7.5vw, 108px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text-primary)",
                }}
                delay={80}
                animationFrom={{ y: "110%", opacity: 0 }}
                animationTo={{ y: "0%", opacity: 1 }}
                threshold={0.2}
                rootMargin="-80px"
              />
            </div>
          </div>

          {/* Floating polaroid object — slightly overlapping headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 1.0, ...SPRING_BOUNCY }}
            style={{
              position: "absolute",
              right: "-20px",
              top: "-10px",
              zIndex: 1,
              rotate: "-3deg",
              width: "clamp(100px, 14vw, 180px)",
              filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.10))",
              pointerEvents: "none",
            }}
          >
            <div style={{
              background: "#fff",
              padding: "8px 8px 28px 8px",
              borderRadius: "2px",
              lineHeight: 0,
            }}>
              <Image
                src="/images/cam.png"
                alt=""
                width={180}
                height={180}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Block 3: Two Column — slightly offset right */}
        <div className="whoami-two-col" style={{
          display: "flex",
          gap: "80px",
          alignItems: "flex-start",
          marginTop: "64px",
          marginLeft: "clamp(0px, 4vw, 48px)",
        }}>
          {/* LEFT — Bio + Stack */}
          <div style={{ flex: "0 0 58%" }}>
            <BlurFade delay={0.28} inView>
              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.65,
                color: "var(--color-text-secondary)",
                maxWidth: "480px",
              }}>
                CS/AI/ML student from Kathmandu building things on the internet.
                I care about design as much as I care about the code behind it.
              </p>
            </BlurFade>

            <BlurFade delay={0.38} inView>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-text-muted)",
                letterSpacing: "0.04em",
                marginTop: "32px",
              }}>
                <span style={{ color: "var(--color-accent)" }}>{">"}</span>
                {"  "}Next.js
                <span style={{ color: "var(--color-accent2)" }}> {"·"} </span>
                Python
                <span style={{ color: "var(--color-accent2)" }}> {"·"} </span>
                Figma
                <span style={{ color: "var(--color-accent2)" }}> {"·"} </span>
                TailwindCSS
                <span style={{ color: "var(--color-accent2)" }}> {"·"} </span>
                Framer Motion
              </p>
            </BlurFade>
          </div>

          {/* RIGHT — Fact Cards */}
          <div style={{ flex: 1 }}>
            {cards.map((card, i) => (
              <BlurFade key={card.label} delay={0.3 + i * 0.08} inView>
                <div style={{ borderBottom: "1px solid var(--color-border)", padding: "16px 0" }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    display: "block",
                  }}>
                    {card.label}
                  </span>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "15px",
                    color: "var(--color-text-primary)",
                    marginTop: "4px",
                  }}>
                    {card.value}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Block 4: Marquee Strip */}
        <div style={{
          borderTop: "1px solid var(--color-border-strong)",
          borderBottom: "1px solid var(--color-border-strong)",
          padding: "14px 0",
          marginTop: "80px",
          overflow: "hidden",
        }}>
          <Marquee pauseOnHover>
            {marqueeItems.map((item, i) => (
              <span key={i} style={{ marginRight: "24px" }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-muted)",
                }}>
                  {item}
                </span>
                <span style={{
                  color: "var(--color-accent)",
                  fontSize: "8px",
                  marginLeft: "24px",
                }}>
                  {"\u25CF"}
                </span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .whoami-two-col {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}
