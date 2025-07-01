import React from "react";
import { motion } from "framer-motion";
import { Award } from "../../types";
import Image from "next/image";

interface AwardCardProps {
  award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
  return (
    <motion.div
      className="bg-slate-200 text-black rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 h-48 lg:h-auto relative overflow-hidden">
          <Image
            width={500}
            height={500}
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-accent bg-opacity-40 flex items-center justify-center"></div>
        </div>

        <div className="lg:w-3/5 p-4 sm:p-6 font-sans font-light">
          <h4 className="text-lg sm:text-xl font-heading font-medium mb-2">
            {award.title}
          </h4>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            {award.organization} • {award.date}
          </p>
          <p className="text-sm sm:text-base font-light font-sans">{award.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardCard;