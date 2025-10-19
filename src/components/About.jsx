// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-pink-100 p-12"
    >
      {/* Title with underline animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-purple-700 relative after:block after:w-24 after:h-1 after:bg-purple-500 after:rounded-full after:mt-2 after:mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      {/* Paragraph with staggered fade-in */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl leading-relaxed text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I am a{" "}
        <span className="font-semibold text-purple-600">
          4th-year Software Engineering student{" "}
        </span>
        passionate about building modern applications. I specialize as a
        <span className="font-semibold text-purple-600">
          {" "}
          full-stack developer
        </span>{" "}
        for both web and mobile platforms, and I have a keen interest in{" "}
        <span className="font-semibold text-purple-600">
          AI and emerging technologies
        </span>
        . I love creating solutions that are not only{" "}
        <span className="italic text-pink-500">functional</span> but also
        <span className="italic text-pink-500"> elegant and engaging</span>.
      </motion.p>

      {/* Optional: Animated highlight circles */}
      <motion.div
        className="flex space-x-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.span
          className="w-4 h-4 bg-purple-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
        />
        <motion.span
          className="w-4 h-4 bg-pink-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
        />
        <motion.span
          className="w-4 h-4 bg-purple-400 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
        />
      </motion.div>
    </section>
  );
}
