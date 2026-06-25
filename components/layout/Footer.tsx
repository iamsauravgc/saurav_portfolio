"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SectionReveal from "@/components/ui/section-reveal"
import { SOCIAL } from "@/lib/constants"

const FOOTER_LINKS = [
  { label: "GitHub", href: SOCIAL.github },
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "Email", href: `mailto:${SOCIAL.email}` },
]

export default function Footer() {
  return (
    <SectionReveal variant="fadeUp">
      <footer
        style={{
          width: "100%",
          padding: "80px 40px 48px",
        }}
      >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Name — large signature hero */}
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-signature)",
              fontSize: "clamp(52px, 10vw, 80px)",
              color: "#1A1613",
              lineHeight: 1,
              display: "block",
            }}
          >
            Saurav G.C.
          </span>
        </div>

        {/* Credit */}
        <div style={{ textAlign: "center", marginTop: "-12px" }}>
          <span
            style={{
              fontFamily: "var(--font-handwritten)",
              fontSize: "17px",
              color: "var(--color-text-secondary)",
            }}
          >
            crafted with coffee and code
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            flexWrap: "wrap",
          }}
        >
          {FOOTER_LINKS.map((link) => (
            <FooterLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Lyric with larger wave */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "var(--color-text-secondary)",
              textAlign: "center",
              margin: 0,
            }}
          >
            <span style={{ fontSize: "24px", lineHeight: 1, marginRight: "4px", display: "inline-block" }}>🌊</span>
            &ldquo;I'm sure we're taller in another dimension.&rdquo;
          </p>
        </div>
      </div>
    </footer>
    </SectionReveal>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  const isEmail = href.startsWith("mailto:")

  return (
    <motion.a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      data-cursor="link"
      onMouseEnter={(e) => {
        setHovered(true)
        const brandColors: Record<string, string> = { GitHub: "#181717", LinkedIn: "#0A66C2", Email: "#EA4335" }
        e.currentTarget.style.color = brandColors[label] || "var(--color-accent2)"
      }}
      onMouseLeave={(e) => {
        setHovered(false)
        e.currentTarget.style.color = "var(--color-text-secondary)"
      }}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--color-text-secondary)",
        textDecoration: "none",
        cursor: "none",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        position: "relative",
      }}
    >
      <motion.span
        animate={{ width: hovered ? 18 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ overflow: "hidden", display: "inline-flex", alignItems: "center", lineHeight: 1 }}
      >
        {label === "GitHub" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/>
          </svg>
        )}
        {label === "LinkedIn" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )}
        {label === "Email" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        )}
      </motion.span>
      <motion.span
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.span>
    </motion.a>
  )
}
