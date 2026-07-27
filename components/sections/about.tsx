import Section from "../ui/section";
import Reveal from "../ui/reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" label="About">
      <Reveal>
        <div className="space-y-4">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-body leading-[1.7] text-muted text-pretty"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-7 rounded-card border border-line bg-surface p-5 sm:p-6">
          <p className="mb-3.5 text-label font-semibold uppercase tracking-[0.1em] text-muted">
            {about.nowLabel}
          </p>
          {/* Two columns once there's room — a single column of short items
              leaves most of the card empty at this width. */}
          <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-x-8">
            {about.now.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-[1.6] text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-pill bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
