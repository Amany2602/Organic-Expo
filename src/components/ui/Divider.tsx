import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  variant?: "subtle" | "medium" | "dark" | "gold";
}

export function Divider({
  className,
  label,
  variant = "subtle",
  ...props
}: DividerProps) {
  const lineStyles = {
    subtle: "border-soil-200/60",
    medium: "border-soil-300",
    dark: "border-forest-800/60",
    gold: "border-gold-500/40",
  };

  if (!label) {
    return (
      <hr
        className={cn("w-full border-t border-solid my-8", lineStyles[variant], className)}
        {...props}
      />
    );
  }

  return (
    <div className={cn("relative flex items-center w-full my-8", className)} {...props}>
      <div className={cn("flex-grow border-t", lineStyles[variant])} />
      <span className="flex-shrink mx-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-soil-500">
        {label}
      </span>
      <div className={cn("flex-grow border-t", lineStyles[variant])} />
    </div>
  );
}
