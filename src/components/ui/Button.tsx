import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "forest"
    | "leaf"
    | "clay"
    | "secondary"
    | "gold"
    | "outline"
    | "ghost"
    | "inverse";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "forest",
      size = "md",
      href,
      external = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group focus-visible:outline-2 focus-visible:outline-offset-2";

    const sizeStyles = {
      sm: "px-4 py-2 text-xs min-h-[38px] rounded-pill gap-1.5",
      md: "px-6 py-2.5 text-sm min-h-[46px] rounded-pill gap-2 font-medium",
      lg: "px-8 py-3.5 text-base min-h-[52px] rounded-pill gap-2.5 font-medium",
    };

    const variantStyles = {
      primary:
        "bg-forest-900 text-cream-50 hover:bg-forest-800 active:bg-forest-950 shadow-subtle hover:shadow-card focus-visible:outline-forest-700",
      forest:
        "bg-forest-900 text-cream-50 hover:bg-forest-800 active:bg-forest-950 shadow-subtle hover:shadow-card focus-visible:outline-forest-700",
      leaf:
        "bg-leaf-600 text-white hover:bg-leaf-700 active:bg-leaf-800 shadow-subtle hover:shadow-card focus-visible:outline-leaf-600",
      clay:
        "bg-clay-600 text-white hover:bg-clay-700 active:bg-clay-800 shadow-subtle hover:shadow-card focus-visible:outline-clay-600",
      secondary:
        "bg-cream-200 text-charcoal-900 border border-cream-300 hover:bg-cream-300/80 active:bg-cream-400 focus-visible:outline-charcoal-600",
      gold:
        "bg-gold-500 text-forest-950 font-semibold hover:bg-gold-400 active:bg-gold-600 shadow-subtle hover:shadow-card focus-visible:outline-gold-600",
      outline:
        "border border-charcoal-900/20 text-charcoal-900 hover:border-forest-900 hover:bg-forest-900/5 active:bg-forest-900/10 focus-visible:outline-forest-800",
      ghost:
        "text-charcoal-900 hover:text-forest-900 hover:bg-forest-900/5 active:bg-forest-900/10 focus-visible:outline-forest-800",
      inverse:
        "bg-cream-100 text-forest-950 hover:bg-white active:bg-cream-200 shadow-subtle hover:shadow-card focus-visible:outline-cream-100",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
