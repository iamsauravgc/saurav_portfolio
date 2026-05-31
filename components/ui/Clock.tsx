"use client"

import { useEffect, useState } from "react"

export default function Clock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const getNPT = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const npt = new Date(utc + 3600000 * 5.75)
      const h = String(npt.getHours()).padStart(2, "0")
      const m = String(npt.getMinutes()).padStart(2, "0")
      const s = String(npt.getSeconds()).padStart(2, "0")
      return `${h}:${m}:${s} NPT`
    }

    setTime(getNPT())
    const interval = setInterval(() => setTime(getNPT()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--color-text-muted)",
        letterSpacing: "0.04em",
        opacity: time ? 1 : 0,
      }}
    >
      {time}
    </span>
  )
}