"use client";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education, certifications} from "../../data/data";
import TimelineItem from "./Timeline";
import CertificationCard from "./Certificate";

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center">
            Education
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
            {education.map((item) => (
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
