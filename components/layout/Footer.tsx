"use client"

import { motion } from "framer-motion"
import { SOCIAL } from "@/lib/constants"
import Clock from "@/components/ui/Clock"

const FOOTER_LINKS = [
  { label: "GitHub", href: SOCIAL.github },
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "Email", href: `mailto:${SOCIAL.email}` },
]

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid var(--color-border)",
        padding: "48px 40px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Signature */}
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Saurav G.C.
          </span>

          {/* Links */}
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {FOOTER_LINKS.map((link) => (
              <FooterLink key={link.label} href={link.href} label={link.label} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--color-border)",
          }}
        />

        {/* Frank Ocean lyric */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            padding: "16px 0",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "18px",
              color: "var(--color-text-secondary)",
              textAlign: "center",
            }}
          >
            &ldquo;We&apos;ll never be those kids again.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              textAlign: "center",
            }}
          >
            — Frank Ocean, Ivy
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--color-border)",
          }}
        />

        {/* Bottom line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {/* Pulsing red dot */}
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--color-accent-red)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            currently breathing · Kathmandu, Nepal ·{" "}
            <Clock />
          </span>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const isEmail = href.startsWith("mailto:")
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      data-cursor="link"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--color-text-secondary)",
        textDecoration: "none",
        cursor: "none",
        position: "relative",
        padding: "2px 0",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--color-nothing-blue)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--color-text-secondary)"
      }}
    >
      {label}
    </a>
  )
}