// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/esuk/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/esubaleww",
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      link: "https://t.me/medhne",
    },
    {
      name: "esuw02024@gmail.com",
      icon: "📧",
      link: "mailto:esuw02024@gmail.com",
    },
    {
      name: "+251933839525",
      icon: "📞",
      link: "tel:+251933839525",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 p-12"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-white text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-lg text-gray-800 font-semibold hover:bg-gray-100 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + i * 0.2 }}
          >
            <span className="text-2xl text-purple-600">{c.icon}</span>
            <span>{c.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
