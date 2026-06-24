"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUpVariants, staggerContainer } from "@/lib/animation"

const NAV_LINKS = [
  { label: "whoami", href: "#whoami" },
  { label: "Work", href: "#work" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Signature name — scrolls away naturally */}
      <a
        href="#"
        style={{
          position: "absolute",
          top: "24px",
          left: "24px",
          zIndex: 100,
          fontFamily: "var(--font-signature)",
          fontSize: "64px",
          color: "#1A1613",
          textShadow: "0 3px 6px rgba(43,37,33,0.12)",
          textDecoration: "none",
          cursor: "none",
          lineHeight: 1,
          letterSpacing: "0.02em",
        }}
      >
        Saurav
      </a>

      {/* Desktop nav links — right side, stacked */}
      <div
        className="hidden sm:flex"
        style={{
          position: "fixed",
          top: "28px",
          right: "28px",
          zIndex: 100,
          flexDirection: "column",
          gap: "6px",
          alignItems: "flex-end",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            data-cursor="link"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "var(--color-text-muted)",
              textDecoration: "none",
              cursor: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1.6,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-muted)"
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger — left side */}
      <button
        className="sm:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        style={{
          position: "fixed",
          top: "28px",
          left: "24px",
          zIndex: 100,
          background: "none",
          border: "none",
          cursor: "none",
          color: "var(--color-text-primary)",
          fontSize: "16px",
          lineHeight: 1,
          padding: "4px",
        }}
      >
        ☰
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              backgroundColor: "var(--color-bg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                position: "fixed",
                top: "28px",
                right: "24px",
                background: "none",
                border: "none",
                cursor: "none",
                color: "var(--color-text-primary)",
                fontSize: "18px",
                lineHeight: 1,
                padding: "4px",
                zIndex: 100,
              }}
            >
              ✕
            </button>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-signature)",
                  fontSize: "68px",
                  color: "#1A1613",
                  textDecoration: "none",
                  cursor: "none",
                  lineHeight: 1,
                }}
              >
                Saurav
              </a>
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  data-cursor="link"
                  variants={fadeUpVariants}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "clamp(28px, 6vw, 42px)",
                    color: "var(--color-text-primary)",
                    textDecoration: "none",
                    cursor: "none",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
