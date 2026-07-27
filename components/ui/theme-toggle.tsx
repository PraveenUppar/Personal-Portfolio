"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-4"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  // Starts undefined so the first paint matches whatever the pre-hydration
  // script already put on <html>, rather than flipping under the reader.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    const root = document.documentElement;

    // Freeze transitions across the swap, then release once the new palette
    // has painted — otherwise colours mid-transition keep the old value.
    root.setAttribute("data-theme-switching", "");
    root.dataset.theme = next;
    setTheme(next);

    requestAnimationFrame(() =>
      requestAnimationFrame(() => root.removeAttribute("data-theme-switching")),
    );

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage — the toggle still works this session.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
      className="grid size-9 shrink-0 place-items-center rounded-chip border border-line bg-surface text-muted transition-[color,border-color] duration-fast hover:border-accent hover:text-accent"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
