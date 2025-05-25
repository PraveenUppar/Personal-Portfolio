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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">About Me</h3>
            <p className="mb-4">{personalInfo.about}</p>
            <p>
              <Mail className="inline-block mr-2" size={16} />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Education",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-3 rounded-full hover:bg-accent transition-colors"
                whileHover={{ y: -5 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-3 rounded-full hover:bg-accent transition-colors"
                whileHover={{ y: -5 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-3 rounded-full hover:bg-accent transition-colors"
                whileHover={{ y: -5 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
            <p>Location: {personalInfo.location}</p>
          </div>
        </div>

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
