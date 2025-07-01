"use client"
import React from "react";
import { motion } from "framer-motion";
import { awards } from "../../data/data";

import AwardCard from "./Award";

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light font-sans mb-8 md:mb-12 text-center lg:text-left">
            Achievements
          </h2>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {awards.map((award) => (
              <AwardCard key={award.id} award={award} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;