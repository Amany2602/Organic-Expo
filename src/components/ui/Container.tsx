import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  size = "default",
  as: Component = "div",
  ...props
}: ContainerProps) {
  const sizeStyles = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[90rem]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
