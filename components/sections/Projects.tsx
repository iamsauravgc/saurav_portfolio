"use client"

import { motion } from "framer-motion"
import { SectionTransition } from "@/components/ui/section-transition"
import { staggerParent } from "@/lib/animation"
import { HoverExpand, type HoverExpandItem } from "@/components/unlumen-ui/hover-expand"

const projects: (HoverExpandItem & { tags: string[]; link: string })[] = [
  {
    label: "Himalayan Hawala",
    sublabel: "ML · Forex",
    image: "/images/projects/himalayan-hawala-1.png",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "scikit-learn"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Paper Recommender",
    sublabel: "NLP",
    image: "/images/projects/paper-recommend.png",
    tags: ["Python", "FastAPI", "React", "NLP"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Economic Dashboard",
    sublabel: "Data Viz",
    image: "/images/projects/economic-dashboard.png",
    tags: ["FastAPI", "React", "PostgreSQL", "scikit-learn"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Credit Risk Predictor",
    sublabel: "MLOps",
    image: "/images/projects/credit-risk-predictor.png",
    tags: ["Airflow", "scikit-learn", "MLflow", "Docker"],
    link: "https://github.com/iamsauravgc",
  },
]

export default function Projects() {
  const items: HoverExpandItem[] = projects.map((p) => ({
    label: p.label,
    sublabel: p.sublabel,
    image: p.image,
    imageAlt: p.label,
    tags: p.tags,
    link: p.link,
  }))

  return (
    <SectionTransition
      style={{
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)",
      }}
    >
      <section id="projects">
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
            },
          }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-accent)",
            fontWeight: 500,
            display: "block",
          }}
        >
          Things I have built
        </motion.h2>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ marginTop: "48px" }}
        >
          <HoverExpand items={items} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5, ease: [0.23, 1, 0.32, 1] },
            },
          }}
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <a
            href="https://github.com/iamsauravgc"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-border-strong)",
              paddingBottom: "2px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)"
            }}
          >
            view all projects →
          </a>
        </motion.div>
      </div>
      </section>
    </SectionTransition>
  )
}
