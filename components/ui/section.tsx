/**
 * Shared page furniture: the single narrow measure the whole site sits on,
 * and the rule-flanked label that opens each section.
 */

type SectionProps = {
  id: string;
  label: string;
  children: React.ReactNode;
  /** Trims the top padding where a section follows a closely-related one. */
  tight?: boolean;
};

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[62rem] px-[1.15rem] sm:px-7 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center gap-4 text-section font-semibold tracking-[-0.02em] text-ink">
      {children}
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </h2>
  );
}

export default function Section({
  id,
  label,
  children,
  tight = false,
}: SectionProps) {
  return (
    <section id={id} className={tight ? "pb-14 sm:pb-20" : "py-14 sm:py-20"}>
      <Container>
        <SectionLabel>{label}</SectionLabel>
        {children}
      </Container>
    </section>
  );
}
