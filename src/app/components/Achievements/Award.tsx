import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Award } from "../../types";

interface AwardCardProps {
  award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
  return (
    <motion.div
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 h-60 relative overflow-hidden">
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent bg-opacity-40 flex items-center justify-center">
            <Trophy size={48} className="text-white" />
          </div>
        </div>

        <div className="md:w-3/5 p-6">
          <h4 className="text-xl font-heading font-bold mb-2">{award.title}</h4>
          <p className="text-sm mb-4">
            {award.organization} • {award.date}
          </p>
          <p className="text-highlight">{award.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardCard;
