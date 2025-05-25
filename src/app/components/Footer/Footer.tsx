"use client"

import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/data";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <div className="border-t border-accent mt-8 pt-8 text-center">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
