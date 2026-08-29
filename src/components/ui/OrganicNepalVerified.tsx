import React from "react";
import { CheckCircle2, Clock, ShieldCheck, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export type VerificationState =
  | "certified-organic"
  | "certification-in-progress"
  | "verified-natural";

export interface OrganicNepalVerifiedProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state: VerificationState;
  variant?: "stamp" | "badge" | "compact";
  registryCode?: string;
  year?: string | number;
}

const STATE_CONFIG: Record<
  VerificationState,
  {
    title: string;
    description: string;
    icon: React.ElementType;
    badgeStyle: string;
    stampStyle: string;
    dotColor: string;
  }
> = {
  "certified-organic": {
    title: "Certified Organic",
    description: "Fully certified organic cultivation & processing standard",
    icon: CheckCircle2,
    badgeStyle:
      "bg-forest-900/10 text-forest-900 border-forest-700/30 hover:border-forest-700/60",
    stampStyle:
      "border-forest-800/40 bg-forest-950/5 text-forest-950 dark:border-forest-300/30 dark:text-forest-100",
    dotColor: "bg-forest-600",
  },
  "certification-in-progress": {
    title: "Organic In Progress",
    description: "Active transition & verification audit underway",
    icon: Clock,
    badgeStyle:
      "bg-mist-900/10 text-mist-900 border-mist-700/30 hover:border-mist-700/60",
    stampStyle:
      "border-mist-800/40 bg-mist-950/5 text-mist-950 dark:border-mist-300/30 dark:text-mist-100",
    dotColor: "bg-mist-600",
  },
  "verified-natural": {
    title: "Verified Natural",
    description: "Verified sustainable & wildcrafted Himalayan origin",
    icon: ShieldCheck,
    badgeStyle:
      "bg-gold-500/15 text-gold-900 border-gold-600/30 hover:border-gold-600/60",
    stampStyle:
      "border-gold-700/40 bg-gold-950/5 text-gold-950 dark:border-gold-400/30 dark:text-gold-200",
    dotColor: "bg-gold-500",
  },
};

export function OrganicNepalVerified({
  state = "certified-organic",
  variant = "stamp",
  registryCode,
  year = 2026,
  className,
  ...props
}: OrganicNepalVerifiedProps) {
  const config = STATE_CONFIG[state];
  const Icon = config.icon;

  if (variant === "badge") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase tracking-wider font-semibold border rounded-xs select-none transition-colors",
          config.badgeStyle,
          className
        )}
        {...props}
      >
        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{config.title}</span>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center w-8 h-8 rounded-xs border transition-colors",
          config.stampStyle,
          className
        )}
        title={`Organic Nepal Verified™: ${config.title}`}
        aria-label={`Organic Nepal Verified™: ${config.title}`}
        {...props}
      >
        <Icon className="w-4 h-4" />
      </div>
    );
  }

  // Authoritative "Stamp / Certificate Mark" layout
  return (
    <div
      className={cn(
        "relative p-4 border rounded-xs select-none transition-all duration-200 group",
        config.stampStyle,
        className
      )}
      {...props}
    >
      {/* Corner Registration Markings */}
      <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-current opacity-60" />
      <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-current opacity-60" />
      <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-current opacity-60" />
      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-current opacity-60" />

      {/* Header */}
      <div className="flex items-center justify-between gap-4 pb-2 mb-2 border-b border-current/15">
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 opacity-80" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-bold">
            Organic Nepal Verified™
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">
          {year}
        </span>
      </div>

      {/* State Badge Body */}
      <div className="flex items-start gap-2.5">
        <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <div className="space-y-0.5">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider">
            {config.title}
          </p>
          <p className="font-sans text-[11px] opacity-75 font-light leading-snug">
            {config.description}
          </p>
        </div>
      </div>

      {/* Registry Code Footer if provided */}
      {registryCode && (
        <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-[9px] font-mono opacity-60">
          <span>REG: {registryCode}</span>
          <span className="flex items-center gap-1">
            <span className={cn("w-1.5 h-1.5 rounded-full", config.dotColor)} />
            AUTHENTICATED
          </span>
        </div>
      )}
    </div>
  );
}
