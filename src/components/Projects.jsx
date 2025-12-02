import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { projects } from "../constants";
import { Gradient } from "./design/Roadmap";

const Projects = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag=" What I have worked on ?" title="Suggested Projects" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {projects.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-16">
                    <Tagline>{item.date}</Tagline>
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                  <br></br>
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-xs font-semibold uppercase  hover:text-color-1 transition-colors cursor-pointer"
                    >
                      Project Link
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>
    </div>
  </Section>
);

export default Projects;
