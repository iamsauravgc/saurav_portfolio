"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUpVariants, staggerContainer, SPRING_SNAPPY } from "@/lib/animation"
import Clock from "@/components/ui/Clock"


const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Connect", href: "#connect" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        style={{
          position: "fixed",
          top: "16px",
          left: "16px",
          right: "16px",
          zIndex: 100,
          borderRadius: "12px",
          filter: `blur(0px)`,
        }}
      >
        <motion.div
          style={{
            backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            transition: "backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease",
          }}
        >
          <motion.nav
            className={scrolled ? "nav-scrolled" : ""}
            style={{
              borderRadius: "12px",
              border: "1px solid",
              borderColor: scrolled ? "var(--color-border)" : "transparent",
              padding: "0 24px",
              height: "52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "background-color 0.4s ease, border-color 0.4s ease",
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "2px",
                cursor: "none",
              }}
            >
              <span>./saurav</span>
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                style={{
                  color: "var(--color-accent)",
                  fontSize: "8px",
                  lineHeight: 1,
                }}
              >
                ●
              </motion.span>
            </a>

            {/* Desktop nav links */}
            <div
              className="hidden sm:flex"
              style={{ gap: "32px", alignItems: "center" }}
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Right: clock + hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div className="hidden md:block">
                <Clock />
              </div>
              {/* Mobile hamburger */}
              <button
                className="sm:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "none",
                  color: "var(--color-text-primary)",
                  fontSize: "18px",
                  lineHeight: 1,
                  padding: "4px",
                }}
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </motion.nav>
        </motion.div>
      </motion.header>

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
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={fadeUpVariants}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(32px, 8vw, 56px)",
                    color: "var(--color-text-primary)",
                    textDecoration: "none",
                    cursor: "none",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
            <Clock />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      data-cursor="link"
      style={{
        position: "relative",
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "13px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--color-text-secondary)",
        textDecoration: "none",
        cursor: "none",
        padding: "4px 0",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.color = "var(--color-accent2)"
        const dot = el.querySelector(".nav-dot") as HTMLElement
        if (dot) dot.style.transform = "scaleX(1)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.color = "var(--color-text-secondary)"
        const dot = el.querySelector(".nav-dot") as HTMLElement
        if (dot) dot.style.transform = "scaleX(0)"
      }}
    >
      {label}
      <span
        className="nav-dot"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "var(--color-accent2)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </a>
  )
}