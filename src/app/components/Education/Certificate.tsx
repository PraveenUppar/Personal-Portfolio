import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Certification } from "../../types";

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
}) => {
  return (
    <motion.div
      className="bg-slate-100 text-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-6"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.1 }}
    >
      <img
        src={certification.logo}
        alt={certification.issuer}
        className="h-12 mb-4 object-contain"
      />

      <h4 className="text-2xl font-sans font-semibold mb-2">
        {certification.title}
      </h4>
      <p className="text-md  mb-2">
        {certification.issuer} • {certification.date}
      </p>
      
      <div className="mt-4 pt-4 border-t border-accent">
        {/* <p className="text-xs mb-2">
          <span className="text-highlight font-medium">Credential ID:</span>{" "}
          {certification.credentialId}
        </p> */}

        {certification.link && (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-highlight hover:text-white transition-colors"
          >
            View Certificate <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
