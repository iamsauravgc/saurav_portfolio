"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on("scroll", ScrollTrigger.update)

    let lastScroll = Date.now()
    const onScroll = () => { lastScroll = Date.now() }
    window.addEventListener("scroll", onScroll, { passive: true })

    gsap.ticker.add((time) => {
      if (Date.now() - lastScroll < 3000) {
        lenis.raf(time * 1000)
      }
    })
    gsap.ticker.lagSmoothing(0)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)

    return () => {
      lenis.destroy()
      window.removeEventListener("load", refresh)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
}
