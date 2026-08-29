"use client";

import React, { Suspense, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export interface SceneWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  fallback?: React.ReactNode;
  aspectRatio?: "video" | "square" | "portrait" | "hero" | "auto";
  priority?: boolean;
}

const emptySubscribe = () => () => {};

function getWebGLSnapshot() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function getServerWebGLSnapshot() {
  return false;
}

export function SceneWrapper({
  children,
  className,
  fallback,
  aspectRatio = "auto",
  priority: _priority = false,
  ...props
}: SceneWrapperProps) {
  const hasWebGL = useSyncExternalStore(
    emptySubscribe,
    getWebGLSnapshot,
    getServerWebGLSnapshot
  );

  const aspectStyles = {
    auto: "",
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    hero: "aspect-[16/10] md:aspect-[21/9]",
  };

  const defaultFallback = (
    <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center bg-soil-100/40 border border-soil-200/50 p-6 text-center">
      <div className="w-8 h-8 rounded-full border border-soil-300 flex items-center justify-center mb-3">
        <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse" />
      </div>
      <p className="font-mono text-xs uppercase tracking-widest text-soil-600">
        Organic Ecosystem Visualization
      </p>
    </div>
  );

  return (
    <div
      className={cn("relative w-full overflow-hidden", aspectStyles[aspectRatio], className)}
      {...props}
    >
      {!hasWebGL ? (
        fallback || defaultFallback
      ) : (
        <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>
      )}
    </div>
  );
}
