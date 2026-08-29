import React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: string | number;
  variant?: "forest" | "leaf" | "olive" | "clay" | "gold" | "soil" | "mist" | "muted" | "inverse";
  withDot?: boolean;
}

export function Eyebrow({
  children,
  className,
  step,
  variant = "forest",
  withDot = false,
  ...props
}: EyebrowProps) {
  const variantStyles = {
    forest: "text-forest-700",
    leaf: "text-leaf-600",
    olive: "text-olive-700",
    clay: "text-clay-600",
    gold: "text-gold-600",
    soil: "text-charcoal-600",
    mist: "text-charcoal-500",
    muted: "text-charcoal-500",
    inverse: "text-forest-200/90",
  };

  const dotStyles = {
    forest: "bg-forest-600",
    leaf: "bg-leaf-500",
    olive: "bg-olive-600",
    clay: "bg-clay-500",
    gold: "bg-gold-500",
    soil: "bg-charcoal-500",
    mist: "bg-charcoal-400",
    muted: "bg-charcoal-400",
    inverse: "bg-forest-300",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {withDot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full inline-block", dotStyles[variant])}
          aria-hidden="true"
        />
      )}
      {step && (
        <span className="opacity-60 select-none">
          {String(step).padStart(2, "0")} /
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
