import Lenis from "lenis"

let lenisInstance: Lenis | null = null

export function initLenis() {
  if (typeof window === "undefined") return null

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  })

  function raf(time: number) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return lenisInstance
}

export function destroyLenis() {
  lenisInstance?.destroy()
  lenisInstance = null
}