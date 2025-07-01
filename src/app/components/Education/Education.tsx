"use client";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education, certifications } from "../../data/data";
import TimelineItem from "./Timeline";
import CertificationCard from "./Certificate";
import Image from "next/image";
import Srcoll from "../Animations/ScrollTextAnimation";

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div>
          <Srcoll />
        </div>

        {/* Education Timeline */}
        <div className="mb-12 lg:mb-16">
          <VerticalTimeline lineColor="#fafafa">
            {education.map((item) => (
              <TimelineItem
                key={item.id}
                date={item.date}
                title={item.institution}
                subtitle={item.degree}
                description={item.description}
                icon={
                  <Image
                    width={50}
                    height={50}
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
          className="mb-12 lg:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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