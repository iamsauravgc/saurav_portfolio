"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HopeObject() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.35, duration: 0.5, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: "46%",
        left: "5%",
      }}
    >
      <audio ref={audioRef} src="/sounds/paper-crinkle.mp3" preload="auto" />
      <div
        style={{
          rotate: "5deg",
          width: "170px",
          animation: "float2 9s ease-in-out infinite",
        }}
      >
        <motion.div
          onMouseEnter={playSound}
          whileHover={{ scale: 1.25, y: 10, rotate: 0, rotateX: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            pointerEvents: "auto",
            cursor: "none",
          }}
        >
          <Image
            src="/images/hope.png"
            alt="Hope"
            width={170}
            height={128}
            style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
