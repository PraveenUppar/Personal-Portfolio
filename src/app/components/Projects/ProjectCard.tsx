import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  BarChart2,
} from "lucide-react";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (showMetrics) setShowMetrics(false);
  };

  const toggleMetrics = () => {
    setShowMetrics(!showMetrics);
    if (showDetails) setShowDetails(false);
  };

  return (
    <motion.div
      className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent h-20"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
        <p className="text-highlight mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-background rounded-md text-xs font-medium text-highlight"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={toggleDetails}
            className="flex items-center text-sm font-medium text-highlight hover:text-white transition-colors"
          >
            {showDetails ? (
              <ChevronUp size={16} className="mr-1" />
            ) : (
              <ChevronDown size={16} className="mr-1" />
            )}
            {showDetails ? "Hide Details" : "Challenge & Solution"}
          </button>

          {project.metrics && (
            <button
              onClick={toggleMetrics}
              className="flex items-center text-sm font-medium text-highlight hover:text-white transition-colors"
            >
              <BarChart2 size={16} className="mr-1" />
              {showMetrics ? "Hide Metrics" : "View Metrics"}
            </button>
          )}
        </div>

        {/* Challenge & Solution */}
        {showDetails && (
          <motion.div
            className="mt-4 pt-4 border-t border-accent"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-3">
              <h4 className="text-sm font-heading font-bold mb-1">Challenge</h4>
              <p className="text-sm text-highlight">{project.challenge}</p>
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold mb-1">Solution</h4>
              <p className="text-sm text-highlight">{project.solution}</p>
            </div>
          </motion.div>
        )}

        {/* Metrics */}
        {showMetrics && project.metrics && (
          <motion.div
            className="mt-4 pt-4 border-t border-accent"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-sm font-heading font-bold mb-2">
              Impact & Metrics
            </h4>
            <ul className="space-y-2">
              {project.metrics.map((metric, index) => (
                <li
                  key={index}
                  className="text-sm text-highlight flex items-start"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-2"></span>
                  {metric}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

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
