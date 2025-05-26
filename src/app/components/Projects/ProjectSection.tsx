"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/data";

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = [
    { value: "all", label: "All Projects" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "AWS", label: "AWS" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.techStack.includes(activeFilter));

  return (
    <section id="projects" className="py-16 md:py-24  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center">
            Featured Projects
          </h2>
          {/* <p className="text-xl text-highlight mb-12  text-center max-w-3xl mx-auto">
            A showcase of my technical projects, highlighting problem-solving
            skills and implementation expertise.
          </p> */}
        </motion.div>

        {/* Filters */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={`px-4 py-2 rounded-full font-heading text-sm transition-all ${
                activeFilter === option.value
                  ? "bg-accent text-white"
                  : "bg-card text-highlight hover:bg-accent hover:text-white"
              }`}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
