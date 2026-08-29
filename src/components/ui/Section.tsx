import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "soil-light" | "forest-dark" | "paper-subtle" | "mist-slate" | "terroir-warm";
  spacing?: "sm" | "md" | "lg" | "xl" | "none";
  pattern?: "none" | "topographic" | "paper";
}

export function Section({
  children,
  className,
  variant = "soil-light",
  spacing = "lg",
  pattern = "none",
  ...props
}: SectionProps) {
  const variantStyles = {
    "soil-light": "bg-soil-50 text-soil-950",
    "forest-dark": "bg-forest-950 text-soil-50",
    "paper-subtle": "bg-soil-100/60 text-soil-950 border-y border-soil-200/50",
    "mist-slate": "bg-mist-950 text-soil-50",
    "terroir-warm": "bg-soil-800 text-soil-50",
  };

  const spacingStyles = {
    none: "py-0",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16 lg:py-20",
    lg: "py-16 md:py-24 lg:py-32",
    xl: "py-24 md:py-36 lg:py-48",
  };

  const patternStyles = {
    none: "",
    topographic: variant === "forest-dark" || variant === "mist-slate" ? "dark-topographic-grid" : "topographic-grid",
    paper: "paper-texture",
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        variantStyles[variant],
        spacingStyles[spacing],
        patternStyles[pattern],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
