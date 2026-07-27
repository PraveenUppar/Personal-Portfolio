import { Container } from "../ui/section";
import { PinIcon, SocialIcon } from "../ui/icons";
import Avatar from "../ui/avatar";
import { contact, profile } from "@/lib/content";

export default function Hero() {
  return (
    <header className="pb-10 pt-16 sm:pb-14 sm:pt-24">
      <Container>
        <p className="mb-6 inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-3 py-1.5 text-xs text-muted">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-pill bg-accent shadow-[0_0_0_3px_var(--color-accent-dim)] motion-safe:animate-pulse"
          />
          {profile.status}
        </p>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
          <Avatar
            src="/profile.jpg"
            alt={`Portrait of ${profile.name}`}
            initials="PU"
          />

          <div className="min-w-0">
            <h1 className="text-display font-bold leading-tight tracking-[-0.03em]">
              {profile.name}
            </h1>
            <p className="mt-1.5 text-body font-medium text-muted">
              {profile.role} ·{" "}
              <span className="text-accent">{profile.specialism}</span>
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-[90ch] text-body leading-[1.68] text-muted text-pretty">
          {profile.bio}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <PinIcon />
            {profile.location}
          </span>

          <nav aria-label="Profiles" className="flex flex-wrap gap-2">
            {contact.links.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer noopener" : undefined}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-chip border border-line bg-surface px-3 text-xs text-ink transition-[color,border-color,transform] duration-fast hover:-translate-y-px hover:border-accent hover:text-accent"
                >
                  <SocialIcon label={link.label} className="size-3.5" />
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
