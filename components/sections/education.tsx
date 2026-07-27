import Section from "../ui/section";
import Reveal from "../ui/reveal";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <Section id="education" label="Education">
      <div className="space-y-3.5">
        {education.map((item, index) => (
          <Reveal key={item.institution} delay={index * 0.06}>
            <article className="rounded-card border border-line bg-surface p-[1.05rem] transition-[border-color] duration-base hover:border-line-strong sm:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-h3 font-semibold tracking-[-0.015em]">
                  {item.institution}
                </h3>
                <span className="whitespace-nowrap text-xs tabular-nums text-muted">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{item.qualification}</p>
              <p className="mt-1.5 text-xs font-medium tabular-nums text-accent">
                {item.result}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
