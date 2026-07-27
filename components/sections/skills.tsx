import Section from "../ui/section";
import Reveal from "../ui/reveal";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="space-y-6">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.05}>
            <h3 className="mb-2.5 text-sm text-muted">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-chip border border-line bg-surface px-3 py-1.5 text-xs text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
