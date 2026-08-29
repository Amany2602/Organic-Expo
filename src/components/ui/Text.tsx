import React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div" | "label";
  size?: "body-large" | "body" | "body-small" | "caption" | "label" | "metadata";
  tone?: "primary" | "secondary" | "muted" | "inverse" | "inverse-muted" | "gold" | "forest";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
}

export function Text({
  children,
  className,
  as: Component = "p",
  size = "body",
  tone = "primary",
  weight = "normal",
  ...props
}: TextProps) {
  const sizeStyles = {
    "body-large": "text-lg sm:text-xl leading-relaxed font-light",
    body: "text-sm sm:text-base leading-relaxed",
    "body-small": "text-xs sm:text-sm leading-normal",
    caption: "text-xs leading-normal",
    label: "text-xs uppercase tracking-wider font-semibold",
    metadata: "font-mono text-[11px] tracking-wide",
  };

  const toneStyles = {
    primary: "text-soil-950",
    secondary: "text-soil-700",
    muted: "text-soil-500",
    inverse: "text-paper-50",
    "inverse-muted": "text-forest-200/80",
    gold: "text-gold-600",
    forest: "text-forest-700",
  };

  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <Component
      className={cn(sizeStyles[size], toneStyles[tone], weightStyles[weight], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
