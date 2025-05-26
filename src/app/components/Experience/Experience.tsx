"use client";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences} from "../../data/data";
import TimelineItem from "./Timeline";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className=" ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center">
            Experience
          </h2>
          {/* <p className="section-subtitle text-white">
            My academic journey, professional certifications, and notable
            recognitions. 
          </p> */}
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          {/* <h3 className="text-3xl font-heading text-center font-bold mb-8 text-white">
            Educational Journey
          </h3> */}
          <VerticalTimeline lineColor="#fafafa">
            {experiences.map((item) => (
              <TimelineItem
                key={item.id}
                date={item.date}
                title={item.institution}
                subtitle={item.degree}
                description={item.description}
                icon={
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-full h-full rounded-full"
                  />
                }
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
