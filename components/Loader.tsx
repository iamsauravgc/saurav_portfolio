"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoaderProps {
  onComplete: () => void
}

const COUNT = 5

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Loader({ onComplete }: LoaderProps) {
  const [order, setOrder] = useState(Array.from({ length: COUNT }, (_, i) => i))
  const [show, setShow] = useState(true)
  const count = useRef(0)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    timer.current = window.setInterval(() => {
      count.current++
      setOrder((prev) => shuffle(prev))
      if (count.current >= 2) {
        if (timer.current) window.clearInterval(timer.current)
        setTimeout(() => {
          setShow(false)
          document.body.style.overflow = ""
          onComplete()
        }, 200)
      }
    }, 500)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
      document.body.style.overflow = ""
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {order.map((id) => (
              <motion.div
                key={id}
                layout
                transition={{ type: "spring", stiffness: 350, damping: 24 }}
                style={{ width: 36, height: 36, backgroundColor: "#FFFFFF" }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
