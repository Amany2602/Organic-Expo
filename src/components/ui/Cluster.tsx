import React from "react";
import { cn } from "@/lib/utils";

export interface ClusterProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "compact" | "normal" | "spacious" | "none";
  align?: "start" | "center" | "end" | "baseline";
  justify?: "start" | "center" | "end" | "between";
  as?: React.ElementType;
}

export function Cluster({
  children,
  className,
  gap = "normal",
  align = "center",
  justify = "start",
  as: Component = "div",
  ...props
}: ClusterProps) {
  const gapStyles = {
    none: "gap-0",
    compact: "gap-2 sm:gap-3",
    normal: "gap-3 sm:gap-4",
    spacious: "gap-6 sm:gap-8",
  };

  const alignStyles = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    baseline: "items-baseline",
  };

  const justifyStyles = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  return (
    <Component
      className={cn(
        "flex flex-wrap",
        gapStyles[gap],
        alignStyles[align],
        justifyStyles[justify],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
