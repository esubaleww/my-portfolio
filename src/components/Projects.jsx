import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-20
        bg-slate-50 text-slate-900
        dark:bg-slate-950 dark:text-slate-100
      "
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
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
          Projects
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl font-bold text-center mb-3 text-slate-900 dark:text-slate-50"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real‑world work from the last year.
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-slate-600 dark:text-slate-400 text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          A selection of 5+ projects that showcase full‑stack development and
          clean UI, with experiments in AI‑powered features.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.article
              key={proj.title}
              className="
                group relative overflow-hidden flex flex-col rounded-2xl shadow-lg backdrop-blur-xl
                border bg-white/90 border-slate-200
                dark:border-slate-800 dark:bg-slate-900/60
              "
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {proj.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent dark:from-slate-950/70" />
                </div>
              )}

              <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
                    {proj.title}
                  </h3>
                  {proj.type && (
                    <span
                      className="
                        rounded-full px-3 py-1 text-xs
                        border bg-slate-100 text-slate-700 border-slate-200
                        dark:bg-slate-900/80 dark:text-slate-300 dark:border-slate-700
                      "
                    >
                      {proj.type}
                    </span>
                  )}
                </div>

                {proj.description && (
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {proj.description}
                  </p>
                )}

                {proj.role && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Role:
                    </span>{" "}
                    {proj.role}
                  </p>
                )}

                {proj.tech && (
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {proj.tech.map((t) => (
                      <li
                        key={t}
                        className="
                          rounded-full px-2.5 py-1 text-xs
                          bg-slate-100 text-slate-800
                          dark:bg-slate-800 dark:text-slate-200
                        "
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold
                        bg-teal-500 text-white hover:bg-teal-400
                        dark:text-slate-950
                        transition-colors
                      "
                    >
                      <FaExternalLinkAlt className="h-3 w-3" />
                      Live Demo
                    </a>
                  )}
                  {proj.codeUrl && (
                    <a
                      href={proj.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold
                        border border-slate-300 text-slate-800 hover:border-teal-500 hover:text-teal-600
                        dark:border-slate-600 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300
                        transition-colors
                      "
                    >
                      <FaGithub className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
