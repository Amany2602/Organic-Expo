import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "certified"
    | "in-progress"
    | "verified-natural"
    | "neutral"
    | "forest"
    | "leaf"
    | "clay"
    | "gold"
    | "inverse";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "neutral",
  size = "md",
  ...props
}: BadgeProps) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  const variantStyles = {
    certified:
      "bg-forest-800/10 text-forest-800 border border-forest-700/20",
    "in-progress":
      "bg-olive-800/10 text-olive-800 border border-olive-700/20",
    "verified-natural":
      "bg-gold-500/15 text-gold-900 border border-gold-600/30",
    forest:
      "bg-forest-900 text-cream-50 font-semibold border border-forest-800",
    leaf:
      "bg-leaf-100 text-leaf-800 border border-leaf-300 font-semibold",
    clay:
      "bg-clay-100 text-clay-800 border border-clay-300 font-semibold",
    gold:
      "bg-gold-500 text-forest-950 font-semibold border border-gold-400",
    neutral:
      "bg-cream-200 text-charcoal-800 border border-cream-300",
    inverse:
      "bg-cream-50/10 text-cream-100 border border-cream-50/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-medium rounded-pill select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
