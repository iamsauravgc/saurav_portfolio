"use client"

import { type ReactNode } from "react"
import { useSmoothScroll } from "@/lib/use-smooth-scroll"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useSmoothScroll()
  return <>{children}</>
}
