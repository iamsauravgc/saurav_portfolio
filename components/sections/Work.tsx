"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ProjectPanel from "@/components/ui/ProjectPanel"

const PROJECTS = [
  {
    index: 0,
    name: "Nepal Dashboard",
    description: "A real-time data visualization platform for Nepal's economic and social indicators. Built to make public data actually readable.",
    stack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    live: "https://nepal-dashboard.vercel.app",
    github: "https://github.com/saurav856/nepal-dashboard",
  },
  {
    index: 1,
    name: "MLOps Pipeline",
    description: "End-to-end machine learning pipeline with automated training, evaluation, and deployment. CI/CD for models.",
    stack: ["Python", "FastAPI", "Docker", "PostgreSQL"],
    live: null,
    github: "https://github.com/saurav856/mlops-pipeline",
  },
  {
    index: 2,
    name: "AI News Scraper",
    description: "Intelligent news aggregator that scrapes, summarizes, and categorizes articles using LLMs. No more doomscrolling.",
    stack: ["Python", "FastAPI", "OpenAI", "Redis"],
    live: null,
    github: "https://github.com/saurav856/ai-news-scraper",
  },
  {
    index: 3,
    name: "TheAlgorithms",
    description: "Open source contribution — implemented and optimized sorting algorithms in Java. Merged into the main repo.",
    stack: ["Java", "Open Source", "Algorithms"],
    live: "https://the-algorithms.com",
    github: "https://github.com/TheAlgorithms/Java",
  },
]

const PER_PANEL = 150
const N = PROJECTS.length

function PanelWrapper({ children, index, scrollYProgress }: {
  children: React.ReactNode
  index: number
  scrollYProgress: any
}) {
  const start = index / N
  const end = (index + 1) / N

  // This panel slides up into view
  const y = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.15), start],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  )

  // This panel scales down as the NEXT panel comes in
  const nextStart = (index + 1) / N
  const scale = useTransform(
    scrollYProgress,
    [nextStart - 0.05, nextStart + 0.15],
    [1, 0.88]
  )

  const borderRadius = index === 0 ? "0px" : "20px 20px 0 0"

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        y: index === 0 ? "0%" : y,
        scale: index < N - 1 ? scale : 1,
        zIndex: index + 1,
        borderRadius,
        overflow: "hidden",
        transformOrigin: "top center",
        boxShadow: index > 0 ? "0 -8px 40px rgba(26,24,20,0.14)" : "none",
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <section id="work" className="section-work" style={{ width: "100%", position: "relative" }}>
      <div
        ref={containerRef}
        style={{ height: `${N * PER_PANEL}vh`, position: "relative" }}
      >
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          {PROJECTS.map((project, i) => (
            <PanelWrapper key={i} index={i} scrollYProgress={scrollYProgress}>
              <ProjectPanel project={project} isFirst={i === 0} />
            </PanelWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}