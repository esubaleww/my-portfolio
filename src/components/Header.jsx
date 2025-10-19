// src/components/Header.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white/30 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-purple-600 cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Portfolio
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="text-gray-700 hover:text-purple-500 font-medium transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-purple-500 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-700 hover:text-purple-500 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
