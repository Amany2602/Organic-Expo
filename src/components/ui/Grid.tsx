import React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | "auto";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  as?: React.ElementType;
}

export function Grid({
  children,
  className,
  cols = "auto",
  gap = "md",
  as: Component = "div",
  ...props
}: GridProps) {
  const colStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    12: "grid-cols-12",
    auto: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  const gapStyles = {
    none: "gap-0",
    sm: "gap-3 sm:gap-4",
    md: "gap-6 sm:gap-8",
    lg: "gap-8 sm:gap-12",
    xl: "gap-12 sm:gap-16 lg:gap-20",
  };

  return (
    <Component
      className={cn("grid", colStyles[cols], gapStyles[gap], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
