import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "inline" | "editorial" | "arrow" | "inverse";
  external?: boolean;
}

export function InteractiveLink({
  children,
  className,
  href,
  variant = "editorial",
  external = false,
  ...props
}: InteractiveLinkProps) {
  const isExternal = external || href.startsWith("http");

  const baseStyles =
    "inline-flex items-center gap-1.5 font-medium transition-all group focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantStyles = {
    inline:
      "text-forest-700 hover:text-forest-900 underline underline-offset-4 decoration-forest-700/40 hover:decoration-forest-900",
    editorial:
      "text-soil-900 hover:text-forest-900 tracking-wide border-b border-soil-300 hover:border-forest-800 pb-0.5",
    arrow:
      "text-soil-900 hover:text-forest-800 tracking-wider uppercase text-xs font-mono",
    inverse:
      "text-soil-100 hover:text-gold-300 border-b border-forest-700/60 hover:border-gold-400 pb-0.5",
  };

  const content = (
    <>
      <span>{children}</span>
      {variant === "arrow" && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      )}
      {isExternal && variant !== "arrow" && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 opacity-70 group-hover:opacity-100" />
      )}
    </>
  );

  const combinedClass = cn(baseStyles, variantStyles[variant], className);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClass}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClass} {...props}>
      {content}
    </Link>
  );
}
