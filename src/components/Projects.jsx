import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    img: "skills/project2.jpg",
    github: "https://github.com/esubaleww/server",
  },
  {
    title: "Project Two",
    img: "skills/project1.ico",
    github: "https://github.com/esubaleww/lost-and-found-app",
  },
  {
    title: "Project Three",
    img: "skills/project3.png",
    github: "https://github.com/esubaleww/project-three",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-12 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-600">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 + i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold mb-3">
                {proj.title}
              </h3>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-medium transition"
              >
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
