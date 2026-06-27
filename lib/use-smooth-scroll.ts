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
    let rafId: number | null = null
    let isIdle = false

    const startRAF = () => {
      isIdle = false
      const tick = (time: number) => {
        if (Date.now() - lastScroll < 3000) {
          lenis.raf(time)
          rafId = requestAnimationFrame(tick)
        } else {
          isIdle = true
          rafId = null
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      lastScroll = Date.now()
      if (isIdle || rafId === null) {
        startRAF()
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    startRAF()

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      lenis.destroy()
      window.removeEventListener("load", refresh)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
}
