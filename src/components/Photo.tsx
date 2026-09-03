import { PHOTOS } from "@/lib/keom";

/**
 * Stock photo local (public/photos). Plain <img> inside an aspect-ratio box.
 * No absolute overlays or filters on the <img> (they broke the render in this
 * environment); on a light page the photo carries itself.
 */
export function Photo({
  name,
  priority = false,
  className = "",
  rounded = "rounded-2xl",
  bordered = true,
}: {
  name: keyof typeof PHOTOS;
  priority?: boolean;
  className?: string;
  rounded?: string;
  bordered?: boolean;
}) {
  const p = PHOTOS[name];
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${
        bordered ? "border border-line" : ""
      } bg-surface-2 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.src}
        alt={p.alt}
        loading="eager"
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        width={p.w}
        height={p.h}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
