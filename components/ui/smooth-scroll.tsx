"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Smooth scrolling is a flourish, not a feature — skip it entirely for
    // anyone who has asked for reduced motion and let the browser scroll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Touch devices scroll natively on the compositor, with momentum the
    // platform already tuned. Driving that from JS instead moves every frame
    // onto the main thread and lags behind the finger, so Lenis is for
    // pointer devices only — a phone gets the browser's own scroll.
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      lerp: 0.075,
      syncTouch: false,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
