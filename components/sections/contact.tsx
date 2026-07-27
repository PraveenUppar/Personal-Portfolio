import { Container, SectionLabel } from "../ui/section";
import { SocialIcon } from "../ui/icons";
import Reveal from "../ui/reveal";
import { contact, profile } from "@/lib/content";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="py-14 sm:py-20">
      <Container>
        <SectionLabel>Get in touch</SectionLabel>

        <Reveal>
          <p className="max-w-[58ch] text-body leading-[1.68] text-muted text-pretty">
            {contact.blurb}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-chip border border-line bg-surface px-4 text-sm font-medium text-ink transition-[color,border-color,transform] duration-fast hover:-translate-y-px hover:border-accent hover:text-accent"
          >
            <SocialIcon label="Email" className="size-4" />
            {contact.email}
          </a>

          <nav aria-label="Profiles" className="mt-4 flex flex-wrap gap-2">
            {contact.links
              .filter((link) => link.label !== "Email")
              .map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer noopener" : undefined}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-chip border border-line bg-surface px-3 text-xs text-ink transition-[color,border-color] duration-fast hover:border-accent hover:text-accent"
                  >
                    <SocialIcon label={link.label} className="size-3.5" />
                    {link.label}
                  </a>
                );
              })}
          </nav>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-5 text-xs text-faint">
          <p>
            © {year} {profile.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
