"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollY } from "@/lib/scroll-context";
import { heroLayout } from "@/lib/heroLayout";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

const BLONDE_COVER = "/images/blonde.jpeg"

interface VinylPlayerProps {
  isMobile?: boolean
}

export function VinylPlayer({ isMobile }: VinylPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previewUrlRef = useRef<string | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollY = useScrollY();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -80]);
  const scrollRotate = useTransform(scrollY, [0, 500], [0, 15]);
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  const scrollScale = useTransform(scrollY, [0, 400], [1, 0.78]);
  const layout = isMobile ? heroLayout.mobile.vinyl : heroLayout.vinyl
  const { top, left, rotate, z, width } = layout
  const disableParallax = prefersReducedMotion || isMobile
  const disableEffects = prefersReducedMotion

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=frank+ocean+white+ferrari&entity=song&limit=10")
      .then(r => r.json())
      .then(data => {
        const track = data.results?.find(
          (r: any) =>
            r.artistName?.toLowerCase().includes("frank ocean") &&
            r.trackName.startsWith("White Ferrari")
        );
        if (track?.previewUrl) {
          previewUrlRef.current = track.previewUrl;
          const audio = new Audio();
          audio.crossOrigin = "anonymous";
          audio.preload = "auto";
          audio.src = track.previewUrl;
          audio.addEventListener("ended", () => setIsPlaying(false));
          audioRef.current = audio;
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const togglePlay = () => setIsPlaying(prev => !prev);

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        width: width,
        height: width,
        zIndex: z,
        y: disableParallax ? 0 : parallaxY,
        opacity: disableParallax ? 1 : scrollOpacity,
        scale: disableParallax ? 1 : scrollScale,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 100, damping: 20, mass: 1 }}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          rotate: `${rotate}deg`,
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12)) saturate(0.97) brightness(0.99)",
          animation: disableEffects ? "none" : "float2 11s ease-in-out infinite",
        }}
      >
        {/* Tonearm */}
        <motion.div
          className="absolute z-20 pointer-events-none"
          style={{
            top: "2%",
            right: "0%",
            width: "26%",
            height: "52%",
            transformOrigin: "16px 10px",
          }}
          initial={false}
          animate={{ rotate: isPlaying ? 32 : 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg
            viewBox="0 0 40 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.12))" }}
          >
            <rect x="8" y="0" width="14" height="20" rx="7" fill="#d4d4d4" />
            <rect x="12" y="-3" width="6" height="8" rx="3" fill="#b0b0b0" />
            <line
              x1="15"
              y1="18"
              x2="15"
              y2="92"
              stroke="#d4d4d4"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M15 92 Q15 112 6 120"
              stroke="#d4d4d4"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="4" cy="126" rx="4" ry="6" fill="#d4d4d4" />
            <path
              d="M1 131 Q4 136 7 131"
              stroke="#b0b0b0"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>

        {/* Vinyl disc */}
        <div
          className="relative"
          style={{ width: "100%", height: "100%" }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              rotate: disableParallax ? 0 : scrollRotate,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                animation: !disableEffects && isPlaying ? "spin 3s linear infinite" : "none",
              }}
            >
              <img
                src="/images/vinyl.png"
                alt="Vinyl record"
                width={width}
                height={width}
                className="w-full h-full object-contain"
                draggable={false}
              />
              <div
                className="absolute rounded-full overflow-hidden bg-[#f0ece6] cursor-pointer"
                style={{
                  width: "28%",
                  height: "28%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 0 1.5px rgba(0,0,0,0.12)",
                }}
                onClick={togglePlay}
              >
                <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                  <img
                    src={BLONDE_COVER}
                    alt="Frank Ocean Blonde"
                    width={104}
                    height={104}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
