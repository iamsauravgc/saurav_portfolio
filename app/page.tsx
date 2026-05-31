"use client"

import { useEffect, useState } from "react"
import { initLenis } from "@/lib/lenis"

import Cursor from "@/components/Cursor"
import Loader from "@/components/Loader"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false)

  useEffect(() => {
    if (!loaderDone) return
    const timer = setTimeout(() => {
      initLenis()
    }, 100)
    return () => clearTimeout(timer)
  }, [loaderDone])

  return (
    <>
      <Cursor />

      {!loaderDone && (
        <Loader onComplete={() => setLoaderDone(true)} />
      )}

      <div
        style={{
          opacity: loaderDone ? 1 : 0,
          transition: "opacity 0.6s ease-out",
        }}
      >
        <Navbar />
        <main>
          {/* Sections come here in future epics */}
          <div style={{ height: "300vh", paddingTop: "120px", paddingLeft: "40px" }}>
            <p style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}>
              Epic 2 shell test — scroll down to test navbar frost
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}