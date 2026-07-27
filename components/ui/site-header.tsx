import ThemeToggle from "./theme-toggle";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[62rem] items-center justify-between gap-4 px-[1.15rem] sm:px-7">
        <a
          href="#top"
          className="text-sm font-bold tracking-[-0.02em] text-ink"
        >
          Praveen<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Anchors are the whole navigation, so on narrow screens they scroll
              rather than collapse into a menu nobody opens. */}
          <nav
            aria-label="Sections"
            className="-mx-1 flex max-w-[62vw] items-center gap-1 overflow-x-auto px-1 [scrollbar-width:none] sm:max-w-none [&::-webkit-scrollbar]:hidden"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-chip px-2.5 py-1.5 text-xs text-muted transition-colors duration-fast hover:text-ink sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
