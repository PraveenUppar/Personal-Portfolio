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
      className={`fixed top-0 left-10 right-10 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 " : "bg-transparent py-5 "
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#hero" className="text-2xl font-heading font-bold text-white">
          PaviCodes..
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:block text-lg">
          <ul className="flex space-x-8">
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
                  className="font-heading font-medium hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          className="md:hidden bg-card"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="py-4 px-6 space-y-4">
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
                  className="block font-heading font-medium hover:text-white transition-colors"
                  onClick={toggleMenu}
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
