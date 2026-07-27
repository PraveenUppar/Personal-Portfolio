import Section from "../ui/section";
import Reveal from "../ui/reveal";
import CertificateThumb from "../ui/certificate-thumb";
import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <Section id="achievements" label="Achievements">
      <div className="space-y-3.5">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="flex gap-4 rounded-card border border-line bg-surface p-[1.05rem] transition-[border-color,transform] duration-base hover:-translate-y-0.5 hover:border-line-strong sm:p-5">
              {item.image ? (
                <CertificateThumb src={item.image} label={item.title} />
              ) : null}

              {/* Title and year share one baseline row so the year stays level
                  with the heading rather than drifting against the thumbnail. */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-h3 font-semibold tracking-[-0.015em]">
                    {item.title}
                  </h3>
                  <span className="whitespace-nowrap text-xs tabular-nums text-muted">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1.5 max-w-[64ch] text-sm leading-[1.6] text-muted">
                  {item.detail}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
