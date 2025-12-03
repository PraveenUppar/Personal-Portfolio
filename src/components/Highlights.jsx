import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3 } from "../assets";
import { Gradient } from "./design/Services";

const Highlights = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Highlights of my journey.  "
          text="Some of my notable milestones and achievements"
        />
        <div className="relative">
          <div className="relative z-1 flex flex-col lg:flex-row lg:items-center h-auto lg:h-[39rem] mb-5 border border-n-1/10 rounded-3xl overflow-hidden xl:h-[46rem]">
            {/* IMAGE CONTAINER */}
            {/* Mobile: Relative height of 20rem. Desktop: Absolute full height */}
            <div className="relative h-[20rem] w-full shrink-0 lg:absolute lg:top-0 lg:left-0 lg:h-full lg:w-3/5 pointer-events-none xl:w-auto">
              <img
                className="w-full h-full object-cover lg:object-right"
                width={800}
                height={730}
                src={service1}
                alt="Hackbyte Runner Up"
              />
            </div>

            {/* TEXT CONTAINER */}
            {/* Mobile: Standard padding. Desktop: ML-Auto to push right */}
            <div className="relative z-1 px-8 py-10 lg:p-20 max-w-[25rem] lg:max-w-30rem] lg:ml-auto">
              <h4 className="h4 mb-4">HackByte 3.0 Runner Up</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Secured 2nd position in the Wikimedia-sponsored track at
                HackByte 3.0 Hackathon, IIIT Jabalpur
              </p>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Open Source Contributor</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  I had an amazing experience participating in Hacktoberfest
                  2024 and GirlScript Summer of Code 2024. Making meaningful
                  contributions working on both the frontend and backend.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Technical Team Lead</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Led a team of developers in the successful redesign and
                  rebuilding of the VITBMUN website, implementing new UI/UX
                  features that significantly improved user experience and
                  functionality.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Highlights;
