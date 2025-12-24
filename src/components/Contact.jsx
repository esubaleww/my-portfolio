import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

const contacts = [
  {
    name: "Email",
    icon: "📧",
    link: "mailto:esuw02024@gmail.com",
    value: "esuwo2024@gmail.com (preferred)",
  },
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
    link: "https://t.me/medhne2",
  },
  {
    name: "Phone",
    icon: "📞",
    link: "tel:+251933839525",
    value: "+251 93 383 9525",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20
        bg-slate-50 text-slate-900
        dark:bg-slate-950 dark:text-slate-100
      "
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.h2
          className="
            text-sm font-semibold tracking-[0.25em] uppercase mb-3 text-center
            text-teal-600 dark:text-teal-400
          "
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-slate-50"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let&apos;s build something together.
        </motion.p>

        <motion.p
          className="
            mt-3 text-sm md:text-base text-center max-w-2xl mx-auto
            text-slate-600 dark:text-slate-300
          "
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Whether you have a project in mind, want to collaborate, or just say
          hi, feel free to reach out through any of the channels below.
        </motion.p>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {contacts.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.link}
              target={c.link.startsWith("http") ? "_blank" : undefined}
              rel={
                c.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="
                flex items-center gap-3 px-4 py-3 text-sm md:text-base rounded-2xl transition-colors
                border bg-white/90 text-slate-900
                border-slate-200 hover:border-teal-500 hover:text-teal-600
                dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100
                dark:hover:border-teal-400 dark:hover:text-teal-200
              "
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2, delay: i * 0.02 }}
            >
              <span
                className="
                  flex h-9 w-9 items-center justify-center rounded-full text-lg
                  bg-slate-100 text-teal-600
                  dark:bg-slate-800 dark:text-teal-300
                "
              >
                {c.icon}
              </span>
              <div className="flex flex-col">
                <span className="font-semibold">{c.name}</span>
                {c.value && (
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {c.value}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
