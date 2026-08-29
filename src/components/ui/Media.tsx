import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface MediaProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  aspectRatio?: "video" | "cinema" | "portrait" | "square" | "editorial" | "wide" | "arch" | "auto";
  shape?: "default" | "arch" | "curved" | "leaf" | "pill" | "circle";
  priority?: boolean;
  fill?: boolean;
  caption?: string;
  meta?: string;
  overlay?: "none" | "gradient" | "dark" | "topographic" | "botanical";
  imageProps?: Partial<ImageProps>;
}

export function Media({
  src,
  alt,
  aspectRatio = "editorial",
  shape = "default",
  priority = false,
  fill = true,
  caption,
  meta,
  overlay = "none",
  className,
  imageProps,
  ...props
}: MediaProps) {
  const aspectStyles = {
    auto: "",
    video: "aspect-video",
    cinema: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
    editorial: "aspect-[4/5]",
    arch: "aspect-[4/5] sm:aspect-[3/4]",
    square: "aspect-square",
    wide: "aspect-[16/10]",
  };

  const shapeStyles = {
    default: "rounded-2xl",
    arch: "mask-organic-arch",
    curved: "mask-organic-curve",
    leaf: "mask-organic-leaf",
    pill: "rounded-pill",
    circle: "rounded-full aspect-square",
  };

  const overlayStyles = {
    none: "",
    gradient:
      "bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent",
    dark: "bg-forest-950/35",
    topographic:
      "bg-gradient-to-t from-forest-950/90 to-forest-950/30 dark-topographic-grid",
    botanical:
      "bg-gradient-to-tr from-forest-900/40 via-transparent to-leaf-500/10",
  };

  return (
    <figure className={cn("group flex flex-col space-y-2.5", className)} {...props}>
      <div
        className={cn(
          "relative w-full overflow-hidden bg-cream-200 border border-cream-300 shadow-card transition-transform duration-500",
          aspectStyles[aspectRatio],
          shapeStyles[shape]
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill={fill}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            {...imageProps}
          />
        ) : (
          <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-cream-200/80 text-charcoal-700">
            <span className="w-2.5 h-2.5 rounded-full bg-leaf-600 mb-2" />
            <p className="font-mono text-[11px] uppercase tracking-widest text-charcoal-700 font-medium">
              {alt || "Himalayan Agro-Ecological Media"}
            </p>
          </div>
        )}

        {/* Optional Editorial Texture / Gradient Overlay */}
        {overlay !== "none" && (
          <div
            className={cn(
              "absolute inset-0 pointer-events-none transition-opacity duration-300",
              overlayStyles[overlay]
            )}
          />
        )}
      </div>

      {/* Optional Caption & Technical Meta */}
      {(caption || meta) && (
        <figcaption className="flex items-center justify-between text-xs text-charcoal-600 pt-1 px-1">
          {caption && <span className="font-light italic text-charcoal-700">{caption}</span>}
          {meta && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-500 ml-auto">
              {meta}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
