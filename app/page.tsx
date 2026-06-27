"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

import Cursor from "@/components/Cursor"
import Loader from "@/components/Loader"
import MobileCaution from "@/components/MobileCaution"
import ScrollProgress from "@/components/ui/scroll-progress"

const HeroSection = dynamic(() => import("@/components/hero/HeroSection"), { ssr: false })
const WhoAmI = dynamic(() => import("@/components/sections/WhoAmI"), { ssr: false })
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false })
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false })

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <>
      <Cursor />
      <ScrollProgress />
      {!loaderDone && (
        <Loader onComplete={() => setLoaderDone(true)} />
      )}
      <MobileCaution />
      <main>
        <HeroSection loaderDone={loaderDone} />
        <WhoAmI />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
