import { socials } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";

const Socials = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl justify-center"
          tag="Get in touch"
          title="Let's Connect!"
        />

        {/* Changed gap and alignment */}
        <div className="flex flex-wrap gap-6 mb-10 justify-center">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="relative block w-[20rem] p-0.5 bg-n-6 rounded-[2rem] transition-transform hover:scale-105 duration-300 cursor-pointer group"
            >
              <div className="relative bg-n-8 rounded-[1.9rem] p-8 flex flex-col items-center justify-center overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h5 className="h5 mb-2 relative z-10 text-center">
                  {item.title}
                </h5>

                {item.light && <GradientLight />}
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Socials;
