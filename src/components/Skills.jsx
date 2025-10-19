// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    img: "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
  },
  {
    name: "Node.js",
    img: "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
  },
  {
    name: "Tailwind CSS",
    img: "https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png",
  },
  {
    name: "JavaScript",
    img: "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
  },
  {
    name: "React Native",
    img: "https://raw.githubusercontent.com/github/explore/main/topics/react-native/react-native.png",
  },
  {
    name: "HTML5",
    img: "https://raw.githubusercontent.com/github/explore/main/topics/html/html.png",
  },
  {
    name: "CSS3",
    img: "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png",
  },
  {
    name: "GitHub",
    img: "https://raw.githubusercontent.com/github/explore/main/topics/github/github.png",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen p-12 bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-purple-700"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + i * 0.1 }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-center font-semibold text-gray-800">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
