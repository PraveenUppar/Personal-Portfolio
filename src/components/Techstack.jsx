import Section from "./Section";
import Heading from "./Heading";
import Tools from "./Tools";

const Techstack = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading tag="How I build ?" title="Tech Stack and Tools" />
        <div className="relative">
          <Tools />
        </div>
      </div>
    </Section>
  );
};

export default Techstack;
