"use client"

import { useEffect, useState } from "react"
import { initLenis } from "@/lib/lenis"

import Cursor from "@/components/Cursor"
import Loader from "@/components/Loader"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/hero/HeroSection"
import WhoAmI from "@/components/sections/WhoAmI"
import Projects from "@/components/sections/Projects"
import ScrollProgress from "@/components/ui/scroll-progress"
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
      <ScrollProgress />
      {!loaderDone && (
        <Loader onComplete={() => setLoaderDone(true)} />
      )}
      <div
        style={{
          opacity: loaderDone ? 1 : 0,
          transition: "opacity 0.6s ease-out",
        }}
      >
        <main>
          <HeroSection loaderDone={loaderDone} />
          <WhoAmI />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
