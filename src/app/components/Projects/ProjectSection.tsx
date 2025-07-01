"use client"
import { HeroParallaxDemo } from "../About/Parallax";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <HeroParallaxDemo />
      </div>
    </section>
  );
};

export default ProjectsSection;