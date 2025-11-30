import { benefits2 } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow"; // Assuming you have this
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl justify-center"
          title="Let's Connect!"
        />

        {/* Changed gap and alignment */}
        <div className="flex flex-wrap gap-6 mb-10 justify-center">
          {benefits2.map((item) => (
            <a
              key={item.id}
              href={item.url} // 1. Link connected here
              target="_blank" // Opens in new tab
              rel="noreferrer"
              // 2. Redesigned Card Container:
              // - Removed fixed height (min-h)
              // - Added specific width (w-[20rem])
              // - Added hover effects (scale and border color)
              className="relative block w-[20rem] p-0.5 bg-n-6 rounded-[2rem] transition-transform hover:scale-105 duration-300 cursor-pointer group"
            >
              {/* This div creates the inner dark background */}
              <div className="relative bg-n-8 rounded-[1.9rem] p-8 flex flex-col items-center justify-center overflow-hidden h-full">
                {/* Optional: A subtle gradient glow behind the text */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title */}
                <h5 className="h5 mb-2 relative z-10 text-center">
                  {item.title}
                </h5>

                {/* Call to Action Text */}
                {/* <p className="body-2 text-n-3 text-sm mb-6 relative z-10">
                  View Profile
                </p> */}

                {/* Arrow Icon that lights up on hover */}
                {/* <div className="flex items-center justify-center w-12 h-12 bg-n-7 rounded-full group-hover:bg-n-6 transition-colors z-10">
                  <Arrow />
                </div> */}

                {/* Light Effect from original design */}
                {item.light && <GradientLight />}
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
