"use client"

import React from "react";
import { personalInfo } from "../../data/data";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="border-t border-accent mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;