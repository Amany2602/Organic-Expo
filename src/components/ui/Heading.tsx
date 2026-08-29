import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "display-xl" | "display-large" | "display" | "h1" | "h2" | "h3" | "h4";
  font?: "display" | "sans";
  tracking?: "tight" | "normal" | "wide";
}

export function Heading({
  children,
  className,
  as: Component = "h2",
  size = "h2",
  font = "display",
  tracking = "tight",
  ...props
}: HeadingProps) {
  const sizeStyles = {
    "display-xl":
      "text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.94] tracking-[-0.03em]",
    "display-large":
      "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.98] tracking-[-0.025em]",
    display:
      "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-[-0.02em]",
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-[-0.02em]",
    h2: "text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.18] tracking-[-0.015em]",
    h3: "text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25] tracking-[-0.01em]",
    h4: "text-lg sm:text-xl md:text-2xl font-medium leading-[1.3] tracking-normal",
  };

  const fontStyles = {
    display: "font-display",
    sans: "font-sans",
  };

  const trackingStyles = {
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
  };

  return (
    <Component
      className={cn(
        fontStyles[font],
        sizeStyles[size],
        trackingStyles[tracking],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
