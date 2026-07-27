import Section from "../ui/section";
import Reveal from "../ui/reveal";
import { ArrowIcon, GitHubIcon } from "../ui/icons";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div className="space-y-3.5">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.07}>
            <article className="rounded-card border border-line bg-surface p-[1.05rem] transition-[border-color,transform] duration-base hover:-translate-y-0.5 hover:border-line-strong sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-h3 font-semibold tracking-[-0.015em]">
                  {project.name}
                  <span className="font-normal text-muted">
                    {" "}
                    — {project.tagline}
                  </span>
                </h3>
                <span className="whitespace-nowrap text-xs tabular-nums text-muted">
                  {project.period}
                </span>
              </div>

              <ul className="mt-3.5 space-y-2.5">
                {project.points.map((point) => (
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

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
                <ul className="flex flex-1 flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-tag border border-line px-2 py-0.5 text-tag text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-chip border border-line px-3 text-xs text-ink transition-[color,border-color] duration-fast hover:border-accent hover:text-accent"
                  >
                    <GitHubIcon className="size-3.5" />
                    Code
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-chip border border-line px-3 text-xs text-ink transition-[color,border-color] duration-fast hover:border-accent hover:text-accent"
                    >
                      Live <ArrowIcon />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
