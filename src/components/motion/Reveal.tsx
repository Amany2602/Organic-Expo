"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "down" | "left" | "right" | "fade";
  delayMs?: number;
  durationMs?: number;
  threshold?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  direction = "up",
  delayMs = 0,
  durationMs = 700,
  threshold = 0.15,
  once = true,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentEl = ref.current;
    if (!currentEl) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const raf = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && currentEl) {
            observer.unobserve(currentEl);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(currentEl);

    return () => {
      observer.unobserve(currentEl);
    };
  }, [threshold, once]);

  const getTransformStyles = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0";

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-6";
      case "down":
        return "opacity-0 -translate-y-6";
      case "left":
        return "opacity-0 translate-x-6";
      case "right":
        return "opacity-0 -translate-x-6";
      case "fade":
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all will-change-[transform,opacity]",
        getTransformStyles(),
        className
      )}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
