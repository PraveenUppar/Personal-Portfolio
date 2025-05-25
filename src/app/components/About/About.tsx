"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "../../data/data";
import profilePic from "../../../../public/me.png";

function About() {
  return (
    <div>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="container-custom z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Avatar */}
            <motion.div
              className="mb-8 md:mb-0 md:mr-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.img
                  src={profilePic.src}
                  alt="Profile Picture"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent"
                  animate={{
                    objectPosition: [
                      "center top",
                      "center bottom",
                      "center top",
                    ],
                  }}
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-accent to-highlight opacity-70 blur-md -z-10"></div>
              </div>
            </motion.div>
            {/* Content */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Hi, I'm <span className="text-white ">{personalInfo.name}</span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl text-highlight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {personalInfo.title}
              </motion.h2>

              <motion.p
                className="text-lg mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {personalInfo.about}
              </motion.p>

              {/* Social Icons */}
              <motion.div
                className="flex justify-center md:justify-start space-x-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <motion.a
                  href="https://github.com/PraveenUppar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:text-white transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/praveen-uppar-5b0565277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:text-white transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://x.com/PraveenUppar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:text-white transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <Twitter size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
