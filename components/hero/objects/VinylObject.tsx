"use client"

import { useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function VinylObject() {
  const needleControls = useAnimation()
  const spinRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleHoverStart = () => {
    if (spinRef.current) {
      spinRef.current.style.setProperty("--spin-duration", "2s")
    }
    needleControls.start({ rotate: 0, transition: { duration: 0.4, ease: "easeOut" } })
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  const handleHoverEnd = () => {
    if (spinRef.current) {
      spinRef.current.style.setProperty("--spin-duration", "8s")
    }
    needleControls.start({ rotate: -25, transition: { duration: 0.4, ease: "easeOut" } })
    audioRef.current?.pause()
  }

  return (
    <motion.div
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.25, ...SPRING_BOUNCY }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{
        position: "absolute",
        bottom: "4%",
        left: "22%",
        rotate: "8deg",
        width: "260px",
        pointerEvents: "auto",
        cursor: "none",
        zIndex: 4,
      }}
    >
      <audio ref={audioRef} src="/sounds/frank-ocean-clip.mp3" preload="auto" />

      {/* Needle arm */}
      <motion.div
        animate={needleControls}
        initial={{ rotate: -25 }}
        style={{
          position: "absolute",
          top: "-20%",
          right: "-15%",
          zIndex: 10,
          width: "120%",
          height: "20px",
          transformOrigin: "top right",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#9CA3AF",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            transform: "translate(50%, -50%)",
            border: "4px solid #E5E7EB",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "4px",
            right: "20px",
            width: "90%",
            height: "8px",
            backgroundColor: "#9CA3AF",
            borderRadius: "4px",
            transformOrigin: "right center",
            rotate: "-12deg",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#1F2937",
              boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </motion.div>

      {/* Record */}
      <div
        ref={spinRef}
        style={{
          width: "100%",
          aspectRatio: "1",
          borderRadius: "50%",
          border: "6px solid rgba(0,0,0,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          overflow: "hidden",
          position: "relative",
          animation: "spin var(--spin-duration, 8s) linear infinite",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(https://i.scdn.co/image/ab67616d0000b27315ebbedaacef61af244262a8)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.2)",
            background: "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 21%, transparent 22%, transparent 35%, rgba(0,0,0,0.5) 36%, transparent 37%, transparent 50%, rgba(0,0,0,0.3) 51%, transparent 52%, transparent 65%, rgba(0,0,0,0.6) 66%, transparent 67%, transparent 80%, rgba(0,0,0,0.4) 81%, transparent 82%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            pointerEvents: "none",
            background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            height: "30%",
            borderRadius: "50%",
            backgroundColor: "#111827",
            border: "1px solid #374151",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#D1D5DB",
              border: "1px solid rgba(0,0,0,0.4)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}
