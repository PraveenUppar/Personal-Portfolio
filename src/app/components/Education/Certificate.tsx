import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Certification } from "../../types";
import Image from "next/image";

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
}) => {
  return (
    <motion.div
      className="bg-neutral-800 text-neutral-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-4 sm:p-6"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.1 }}
    >
      <Image
        width={100}
        height={100}
        src={certification.logo}
        alt={certification.issuer}
        className="h-8 sm:h-12 mb-3 sm:mb-4 object-contain"
      />

      <h4 className="text-lg sm:text-xl lg:text-2xl font-sans font-semibold mb-2">
        {certification.title}
      </h4>
      <p className="text-sm sm:text-base text-neutral-400 mb-2">
        {certification.issuer} • {certification.date}
      </p>

      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-neutral-700">
        {certification.link && (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Certificate <ExternalLink size={12} className="ml-1 sm:w-3.5 sm:h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;