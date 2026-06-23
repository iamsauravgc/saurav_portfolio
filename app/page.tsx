"use client"

import { useEffect, useState } from "react"
import { initLenis } from "@/lib/lenis"

import Cursor from "@/components/Cursor"
import Loader from "@/components/Loader"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/hero/HeroSection"
import About from "@/components/sections/About" 
import Work from "@/components/sections/Work"
import Connect from "@/components/sections/Connect"


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
          <HeroSection loaderDone={loaderDone} />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Work />
          <div className="section-divider" />
          <Connect />
        </main>
        <Footer />
      </div>
    </>
  )
}
