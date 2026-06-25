"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export interface HoverExpandItem {
  label: string;
  /** e.g. country, year, category */
  sublabel?: string;
  image: string;
  imageAlt?: string;
  /** short descriptor shown when expanded */
  description?: string;
}

export interface HoverExpandProps {
  items: HoverExpandItem[];
  /**
   * Row height when collapsed, in pixels.
   * @default 68
   */
  collapsedHeight?: number;
  /**
   * Row height when expanded, in pixels.
   * @default 320
   */
  expandedHeight?: number;
  /** Starting index for numbering (e.g. 0-based offset for multi-instance lists) */
  startIndex?: number;
  className?: string;
}

export function HoverExpand({
  items,
  collapsedHeight = 68,
  expandedHeight = 320,
  startIndex = 0,
  className,
}: HoverExpandProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = React.useState<number | null>(null);

  const activeIndex = hoveredIndex ?? tappedIndex;

  const handleTap = (i: number) => {
    setTappedIndex(tappedIndex === i ? null : i);
  };

  const handlePointerEnter = (e: React.PointerEvent, i: number) => {
    if (e.pointerType === "mouse") {
      setHoveredIndex(i);
      setTappedIndex(null);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setHoveredIndex(null);
  };

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <div className="w-full border-t border-current opacity-15" />

      {items.map((item, i) => {
        const isActive = activeIndex === i;
        const isOtherActive = activeIndex !== null && !isActive;

        return (
          <React.Fragment key={i}>
            <motion.div
              className="relative w-full overflow-hidden cursor-default"
              animate={{
                height: isActive ? expandedHeight : collapsedHeight,
                opacity: isOtherActive ? 0.38 : 1,
              }}
              transition={{
                height: {
                  type: "spring",
                  stiffness: 280,
                  damping: 32,
                  mass: 0.9,
                },
                opacity: { duration: 0.22, ease: "easeOut" },
              }}
              onPointerEnter={(e) => handlePointerEnter(e, i)}
              onPointerLeave={handlePointerLeave}
              onClick={() => handleTap(i)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") handleTap(i);
              }}
              role="button"
              tabIndex={0}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.06,
                }}
                transition={{
                  opacity: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                  scale: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
                }}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
              </motion.div>

              <div className="absolute inset-0 flex flex-col justify-end px-5 pb-5">
                <div className="flex w-full items-end justify-between gap-4">
                  <div className="flex items-baseline gap-3 min-w-0">
                    <motion.span
                      className="text-base shrink-0 opacity-40"
                      style={{ fontFamily: "var(--font-accent)" }}
                      animate={{
                        color: isActive ? "#ffffff" : "currentColor",
                        opacity: isActive ? 0.5 : 0.4,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {String(startIndex + i + 1).padStart(2, "0")}
                    </motion.span>

                    <motion.span
                      className="font-semibold tracking-tight"
                      style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
                      animate={{
                        color: isActive ? "#ffffff" : "currentColor",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>

                    {item.sublabel && (
                      <motion.span
                        className="text-xs tracking-widest uppercase shrink-0"
                        animate={{
                          color: isActive
                            ? "rgba(255,255,255,0.55)"
                            : "currentColor",
                          opacity: isActive ? 1 : 0.45,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.sublabel}
                      </motion.span>
                    )}
                  </div>
                </div>

                {item.description && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isActive ? 0.12 : 0,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <span className="text-sm text-white/70 line-clamp-2 mt-2 block px-1">
                      {item.description}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <div className="w-full border-t border-current opacity-15" />
          </React.Fragment>
        );
      })}
    </div>
  );
}
