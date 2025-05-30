import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,

} from "lucide-react";
import { Project } from "../../types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {


  return (
    <motion.div
      className="bg-slate-100 text-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          width={500}
          height={500}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent h-20"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
        <p className="text-highlight mb-4">{project.description}</p>
      
        {/* Links */}
        <div className="flex justify-between mt-4 pt-4 border-t border-accent">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-highlight hover:text-white transition-colors"
            >
              <ExternalLink size={16} className="mr-1" /> Live Demo
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-highlight hover:text-white transition-colors"
            >
              <Github size={16} className="mr-1" /> View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
