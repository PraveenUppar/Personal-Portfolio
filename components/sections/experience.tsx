import Section from "../ui/section";
import Reveal from "../ui/reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div className="space-y-3.5">
        {experience.map((item, index) => (
          <Reveal key={item.org} delay={index * 0.07}>
            <article className="rounded-card border border-line bg-surface p-[1.05rem] transition-[border-color,transform] duration-base hover:-translate-y-0.5 hover:border-line-strong sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-h3 font-semibold tracking-[-0.015em]">
                  {item.role}
                </h3>
                <span className="whitespace-nowrap text-xs tabular-nums text-muted">
                  {item.period}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-accent">
                {item.org}
                <span className="text-muted"> · {item.location}</span>
              </p>

              <ul className="mt-3.5 space-y-2.5">
                {item.points.map((point) => (
                  <li
                    key={point.slice(0, 40)}
                    className="flex gap-3 text-sm leading-[1.65] text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1 shrink-0 rounded-pill bg-line-strong"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-tag border border-line px-2 py-0.5 text-tag text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
