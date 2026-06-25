"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { HoverExpand, type HoverExpandItem } from "@/components/unlumen-ui/hover-expand"

const projects: (HoverExpandItem & { tags: string[]; link: string })[] = [
  {
    label: "Himalayan Hawala",
    sublabel: "ML · Forex",
    description:
      "Remittance intelligence dashboard for Nepal's forex market. Combines NRB exchange rates, ML-based 7-day forecasts, and FinBERT news sentiment into a single-page dashboard.",
    image: "/images/projects/himalayan-hawala-1.png",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "scikit-learn"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Paper Recommender",
    sublabel: "NLP",
    description:
      "Paste an ArXiv paper link and instantly find semantically similar research papers — ranked by match score.",
    image: "/images/projects/paper-recommend.png",
    tags: ["Python", "FastAPI", "React", "NLP"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Economic Dashboard",
    sublabel: "Data Viz",
    description:
      "Tracking remittance inflows, exchange rate, and inflation in Nepal from 2000–2024.",
    image: "/images/projects/economic-dashboard.png",
    tags: ["FastAPI", "React", "PostgreSQL", "scikit-learn"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Credit Risk Predictor",
    sublabel: "MLOps",
    description:
      "End-to-end MLOps pipeline that predicts credit card default risk using Airflow, MLflow, and a Streamlit dashboard.",
    image: "/images/projects/credit-risk-predictor.png",
    tags: ["Airflow", "scikit-learn", "MLflow", "Docker"],
    link: "https://github.com/iamsauravgc",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  const items: HoverExpandItem[] = projects.map((p) => ({
    label: p.label,
    sublabel: p.sublabel,
    description: p.description,
    image: p.image,
    imageAlt: p.label,
  }))

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      style={{
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
            },
          }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 500,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          Things I have built
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ marginTop: "48px" }}
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <HoverExpand
                items={[item]}
                startIndex={i}
                className="projects-hover-expand"
                expandedHeight={380}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
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
    </motion.section>
  )
}
