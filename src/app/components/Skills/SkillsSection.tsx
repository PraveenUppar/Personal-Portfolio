"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/data";
import SkillsGalaxy from "./SkillsGalaxy";
import { Block } from "../Feature/Blocks";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-12 md:py-16 lg:py-24 bg-card px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Flex container for heading and SkillsGalaxy */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Technical Skills heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-mono">
              Technical Proficiency
            </h2>
          </motion.div>

          {/* SkillsGalaxy */}
          <div className="flex-1 h-[400px] sm:h-[500px] lg:h-[600px] w-full">
            <SkillsGalaxy skills={skills} />
          </div>
        </div>

        {/* Block component below */}
        <div className="mt-8 lg:mt-10">
          <Block />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;