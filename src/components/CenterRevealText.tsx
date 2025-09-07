import React from "react";

type CenterRevealTextProps = {
  text: string;
  className?: string;
  /** Total animation duration per letter in seconds */
  durationSec?: number;
  /** Delay step between rings (letters at same distance from center) in seconds */
  staggerSec?: number;
  /** Initial blur in pixels */
  blurPx?: number;
  /** CSS timing function, e.g. 'ease-in-out', 'linear', or a cubic-bezier */
  easing?: string;
  /** Base delay added to all letters (in seconds) */
  baseDelaySec?: number;
  /** If true, the animation will only run on first mount and not on subsequent re-renders (e.g., language change). */
  animateOnMountOnly?: boolean;
};

export default function CenterRevealText({
  text,
  className,
  durationSec = 0.9,
  staggerSec = 0.08,
  blurPx = 12,
  easing = "ease-in",
  baseDelaySec = 0,
  animateOnMountOnly = false,
}: CenterRevealTextProps) {
  const hasMountedRef = React.useRef(false);
  React.useEffect(() => {
    hasMountedRef.current = true;
  }, []);

  const characters = React.useMemo(() => Array.from(text), [text]);
  const centerIndex = (characters.length - 1) / 2;
  const shouldAnimate = animateOnMountOnly ? !hasMountedRef.current : true;

  return (
    <span className={className} style={{ whiteSpace: "pre-wrap" }}>
      {characters.map((char, index) => {
        const distanceFromCenter = Math.abs(index - centerIndex);
        const delay = distanceFromCenter * staggerSec;

        return (
          <span
            key={`${char}-${index}`}
            className={shouldAnimate ? "center-reveal-char" : undefined}
            style={{
              animationDuration: `${durationSec}s`,
              animationDelay: `${baseDelaySec + delay}s`,
              // Pass initial blur amount via CSS var for the keyframes
              // Using CSS variables avoids generating many keyframes variants
              // and keeps styles dynamic.
              // @ts-ignore - CSS custom property string is fine
              "--initial-blur": `${blurPx}px`,
              // @ts-ignore - CSS custom property string is fine
              "--easing": easing,
              display: "inline-block",
            }}
            aria-hidden={char === " "}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}


