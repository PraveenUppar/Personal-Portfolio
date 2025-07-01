"use client";

import React, { useEffect, useState } from "react";
import { Menu, X} from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-4 right-4 sm:left-6 sm:right-6 lg:left-10 lg:right-10 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 sm:py-3 bg-card/80 backdrop-blur-sm rounded-lg" : "bg-transparent py-3 sm:py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-center items-center px-4 sm:px-6">
        {/* Desktop Navigation */}
        <nav className="hidden font-mono md:block text-base lg:text-xl">
          <ul className="flex space-x-4 lg:space-x-8">
            {[
              "About",
              "Education",
              "Skills",
              "Projects",
              "Experience",
              "Achievements",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-heading font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white px-2 sm:px-3 py-2 rounded text-sm lg:text-base"
                  onClick={(e) => {
                    // Smooth scroll behavior
                    e.preventDefault();
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          className="md:hidden bg-card/95 backdrop-blur-sm mt-2 rounded-lg mx-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="py-4 px-6 space-y-3">
            {[
              "About",
              "Education",
              "Skills",
              "Projects",
              "Experience",
              "Achievements",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block font-heading font-medium hover:text-white transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}

export default Navbar;