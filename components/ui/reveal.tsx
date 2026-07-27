"use client";

import { useLayoutEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in seconds, for siblings revealed in sequence. */
  delay?: number;
};

/**
 * Scroll-triggered fade-and-rise. Transform and opacity only — never layout
 * properties — so it stays on the compositor.
 *
 * Content is only ever hidden once the observer has confirmed it is off
 * screen. Anything already in view on load is left alone, so a missed callback
 * can't strand a section at zero opacity, and above-the-fold content doesn't
 * flash. No JS, no IntersectionObserver, or a reduced-motion preference all
 * leave the markup exactly as rendered.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Decide synchronously, from layout, whether this starts off screen.
    // Anything already visible is left untouched — no flash, and nothing that
    // depends on a callback arriving to become readable.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.style.transitionDelay = `${delay}s`;
    el.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.dataset.reveal = "in";
          observer.disconnect();
          return;
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
