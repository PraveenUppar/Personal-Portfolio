import Section from "../ui/section";
import Reveal from "../ui/reveal";
import CertificateThumb from "../ui/certificate-thumb";
import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <Section id="certifications" label="Certifications">
      <div className="space-y-3.5">
        {certifications.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.05}>
            <article className="flex gap-4 rounded-card border border-line bg-surface p-[1.05rem] transition-[border-color,transform] duration-base hover:-translate-y-0.5 hover:border-line-strong sm:p-5">
              <CertificateThumb src={cert.image} label={cert.title} />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-h3 font-semibold tracking-[-0.015em]">
                    {cert.title}
                  </h3>
                  <span className="whitespace-nowrap text-xs tabular-nums text-muted">
                    {cert.date}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer}
                  {cert.score ? (
                    <span className="text-accent"> · {cert.score}</span>
                  ) : null}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
