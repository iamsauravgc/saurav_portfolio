"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SectionTransitionProps {
  children: ReactNode
  pin?: boolean
  className?: string
  style?: React.CSSProperties
}

export function SectionTransition({ children, pin = false, className, style }: SectionTransitionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const inner = el.querySelector(".section-inner")
    if (!inner) return

    if (pin) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=100%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      })
      tl.fromTo(inner, { opacity: 0 }, { opacity: 1, ease: "power2.out" })
      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom 25%",
        scrub: 1.5,
      },
    })

    tl.fromTo(inner, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" }, 0)

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [pin])

  return (
    <section ref={sectionRef} className={className} style={style}>
      <div className="section-inner">{children}</div>
    </section>
  )
}
