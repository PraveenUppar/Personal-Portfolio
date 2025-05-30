"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/data";
import SkillsGalaxy from "./SkillsGalaxy";
import { Block } from "../Feature/Blocks";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6  lg:px-8 max-w-7xl">
        {/* Flex container for heading and SkillsGalaxy */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Technical Skills heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-mono ">
              Technical Proficiency
            </h2>
          </motion.div>

          {/* SkillsGalaxy */}
          <div className="flex-1 h-[600px]">
            <SkillsGalaxy skills={skills} />
          </div>
        </div>

        {/* Block component below */}
        <div className="mt-10">
          <Block />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
