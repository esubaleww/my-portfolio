// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-300 rounded-full opacity-30 blur-3xl animate-spin-slow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl animate-spin-slow-reverse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 text-center"
      >
        Hello, I'm Esubalew Worku
      </motion.h1>

      {/* Typewriter subtitle */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl md:text-3xl font-medium text-center mb-8"
      >
        <Typewriter
          words={["Full Stack Developer", "Mobile & Web Developer", "AI Enthusiast"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h2>

      {/* Call-to-action button */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.1, rotate: 3 }}
        className="mt-10 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
      >
        See My Work
      </motion.a>
    </section>
  );
}
