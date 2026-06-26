"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface HoverExpandItem {
  label: string;
  sublabel?: string;
  image: string;
  imageAlt?: string;
  tags?: string[];
  link?: string;
}

export interface HoverExpandProps {
  items: HoverExpandItem[];
  rowHeight?: number;
  className?: string;
}

export function HoverExpand({ items, rowHeight = 110, className }: HoverExpandProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <div
      className={cn("relative w-full", className)}
    >
      <div style={{ width: "100%", borderTop: "1px solid var(--color-border)" }} />

      {items.map((item, i) => {
        const isActive = activeIndex === i;
        const isOtherActive = activeIndex !== null && !isActive;

        return (
          <React.Fragment key={i}>
            <div
              className="relative w-full cursor-pointer"
              style={{ height: rowHeight }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => item.link && window.open(item.link, "_blank")}
            >
              <div style={{ display: "flex", height: "100%", padding: "0 8px" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "14px",
                        color: "var(--color-text-muted)",
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>

                    <motion.span
                      style={{
                        fontWeight: 500,
                        fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                        letterSpacing: "-0.02em",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      animate={{
                        color: isActive ? "var(--color-accent)" : "var(--color-text-primary)",
                        opacity: isOtherActive ? 0.35 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      {item.label}
                      {isActive && item.link && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      )}
                    </motion.span>
                  </div>

                  <motion.div
                    style={{
                      display: "flex",
                      gap: "8px",
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "var(--color-text-secondary)",
                      marginTop: "2px",
                      marginLeft: "calc(2.5rem)",
                    }}
                    animate={{ opacity: isOtherActive ? 0.4 : 0.8 }}
                  >
                    {item.tags?.map((tag, idx) => (
                      <span key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        {idx > 0 && <span style={{ opacity: 0.5, color: "var(--color-text-secondary)" }}>●</span>}
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", borderTop: "1px solid var(--color-border)" }} />
          </React.Fragment>
        );
      })}

      {/* Floating preview panel — follows the active row */}
      <AnimatePresence>
        {activeIndex !== null && (
          <FloatingImage
            item={items[activeIndex]}
            top={activeIndex * (rowHeight + 1)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function FloatingImage({ item, top }: { item: HoverExpandItem; top: number }) {
  const [natural, setNatural] = React.useState<{ w: number; h: number } | null>(null);
  const panelWidth = 420;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      className="hidden md:block absolute pointer-events-none z-10"
      style={{
        right: "0px",
        top,
        width: panelWidth,
        height: natural ? panelWidth * (natural.h / natural.w) : 240,
      }}
    >
      <img
        src={item.image}
        alt={item.imageAlt ?? ""}
        onLoad={(e) => {
          const img = e.currentTarget;
          setNatural({ w: img.naturalWidth, h: img.naturalHeight });
        }}
        className="w-full h-full object-contain rounded-md shadow-2xl bg-white"
      />
    </motion.div>
  );
}
