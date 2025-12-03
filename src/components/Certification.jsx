import Section from "./Section";
import Heading from "./Heading";
import CloudCert from "./CloudCert";
import Courses from "./Courses";

const Certification = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading
          tag="My Professional Growth Track "
          title="Certification and Courses"
        />
        <div className="relative">
          <CloudCert />
          <br></br>
          <Courses />
        </div>
      </div>
    </Section>
  );
};

export default Certification;
