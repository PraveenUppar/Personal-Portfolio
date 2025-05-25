"use client"

import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/data";
import SkillsGalaxy from "./SkillsGalaxy";

const SkillsSection: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryTitles = {
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    monitoring: "Monitoring",
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center;">
            Technical Skills
          </h2>
          {/* <p className="text-xl text-highlight mb-12  text-center max-w-3xl mx-auto">
            My technical toolkit encompasses a wide range of technologies across
            the full development stack.
          </p> */}
        </motion.div>

        {/* 3D Skills Galaxy */}
        <div className="mb-16 h-96">
          <SkillsGalaxy skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
