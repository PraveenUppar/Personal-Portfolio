import { aboutme } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Aboutme = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl justify-center"
          title="About Me"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {aboutme.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full md:max-w-[24rem] border rounded-xl border-n-6"
              // style={{
              //   backgroundImage: `url(${item.backgroundUrl})`,
              // }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[16rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>
              {item.light && <GradientLight />}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Aboutme;
