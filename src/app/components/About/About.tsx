"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail,Code2 } from "lucide-react";
import { personalInfo } from "../../data/data";
import profilePic from "../../../../public/me.png";
import { Cover } from "../ui/cover";
import { FlipWords } from "../ui/flip-words";
import MarqueeScroll from "../Animations/MarqueeScroll";

function About() {
  const words = [
    "Full Stack Developer.",
    "Open Source Contributor.",
    "AWS Cloud Enthusiast.",
    "Aspiring DevOps Eng.",
    "College Grad."
  ];

  return (
    <div>
      <section
        id="about"
        className="min-h-screen flex items-center justify-around relative overflow-hidden pt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Profile Pic */}
            <motion.div
              className="mb-8 md:mb-0 md:mr-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative">
                <motion.img
                  src={profilePic.src}
                  alt="Profile Picture"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-4xl object-cover"
                  animate={{
                    objectPosition: [
                      "center top",
                      "center bottom",
                      "center top",
                    ],
                  }}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-light  font-sans mb-4 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Hello👋, I am{" "}
                <span className="text-8xl text-white tracking-tighter text-balance">
                  <Cover>{personalInfo.name}</Cover>
                </span>
              </motion.h1>
              <motion.h2
                className="text-4xl mb-4 max-w-2xl font-light font-sans "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                A 19 year old<FlipWords words={words}></FlipWords>
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl  text-left font-mono max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-600 dark:from-neutral-400 dark:to-white"
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
                  className=" hover:text-white transition-colors text-neutral-400"
                  whileHover={{ y: -5, scale: 1.5 }}
                >
                  <Github size={28} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/praveen-uppar-5b0565277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white transition-colors text-neutral-400"
                  whileHover={{ y: -5, scale: 1.5 }}
                >
                  <Linkedin size={28} />
                </motion.a>
                <motion.a
                  href="https://x.com/PraveenUppar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white transition-colors text-neutral-400"
                  whileHover={{ y: -5, scale: 1.5 }}
                >
                  <Twitter size={28} />
                </motion.a>
                <motion.a
                  href="mailto:praveenuppar718@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white transition-colors text-neutral-400"
                  whileHover={{ y: -5, scale: 1.5 }}
                >
                  <Mail size={28} />
                </motion.a>
                <motion.a
                  href="https://codolio.com/profile/pavicodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white transition-colors text-neutral-400"
                  whileHover={{ y: -5, scale: 1.5 }}
                >
                  <Code2 size={28} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          <MarqueeScroll />
        </div>
      </section>
    </div>
  );
}

export default About;
