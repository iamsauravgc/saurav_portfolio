"use client"

import { IconCloud } from "@/components/ui/icon-cloud"

const bioParagraphs = [
  "I am a CS/AI student from Kathmandu who believes the best software feels like something — not just works like something. I built Himalayan Hawala to predict forex rates for remittance corridors, a Paper Recommender that maps ArXiv papers by semantic similarity, and an MLOps pipeline for credit card default prediction that monitors drift in production. Every project starts with a question I actually want answered.",
  "Outside of code, I think a lot about interface design — how a button feels, why one layout breathes and another chokes. I shoot with a Nikon when I remember to carry it, and I have spent more hours than I would admit arranging playlists around Frank Ocean transitions. I care about creative people who make things that feel like them.",
  "Right now I am exploring the intersection of machine learning and product design — building tools that do not just output predictions but fit into how people actually think. I use Next.js, Python, FastAPI, PostgreSQL, and Airflow daily. Figma is where I argue with myself about margins. I open-source what I can because someone else's public repo taught me most of what I know.",
]

const slugs = [
  "python",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "fastapi",
  "postgresql",
  "docker",
  "git",
  "github",
  "scikitlearn",
  "pandas",
  "jupyter",
  "linux",
  "figma",
  "nodedotjs",
]

export default function WhoAmI() {
  const images = slugs.map(
    (slug) => `/images/tech/${slug}.svg`
  )

  return (
    <section
      id="whoami"
      style={{
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-accent)",
            fontWeight: 500,
          }}
        >
          about
        </span>

        <div
          className="about-grid"
          style={{
            display: "flex",
            gap: "80px",
            marginTop: "48px",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "0 0 55%", minWidth: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {bioParagraphs.map((p, i) => (
                <p key={i} className="scroll-reveal-text">{p}</p>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", justifyContent: "center", cursor: "grab" }}>
            <IconCloud images={images} size={520} iconSize={64} />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-grid {
              flex-direction: column !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
