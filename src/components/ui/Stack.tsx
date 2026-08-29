import React from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "compact" | "normal" | "spacious" | "editorial" | "none";
  align?: "start" | "center" | "end" | "stretch";
  as?: React.ElementType;
}

export function Stack({
  children,
  className,
  gap = "normal",
  align = "stretch",
  as: Component = "div",
  ...props
}: StackProps) {
  const gapStyles = {
    none: "space-y-0",
    compact: "space-y-2 sm:space-y-3",
    normal: "space-y-4 sm:space-y-6",
    spacious: "space-y-8 sm:space-y-12",
    editorial: "space-y-12 sm:space-y-16 lg:space-y-24",
  };

  const alignStyles = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  return (
    <Component
      className={cn("flex flex-col", gapStyles[gap], alignStyles[align], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
