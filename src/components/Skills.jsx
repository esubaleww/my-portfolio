import { motion } from "framer-motion";
import { skills } from "../data/skills";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-20
        bg-slate-50 text-slate-900
        dark:bg-slate-950 dark:text-slate-100
      "
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
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
          Skills & Technologies
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-900 dark:text-slate-50"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tools I use to build products — and technologies I&apos;m learning.
        </motion.p>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.group}
              variants={cardVariants}
              className="
                rounded-2xl p-5 md:p-6 backdrop-blur-xl
                border bg-white/90 border-slate-200
                dark:border-slate-800 dark:bg-slate-900/70
              "
            >
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
                {group.group}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-2 rounded-full px-3 py-1.5 text-xs md:text-sm transition-colors
                      bg-slate-100 text-slate-800 hover:bg-slate-200
                      dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-700/90
                    "
                  >
                    {skill.img && (
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="h-5 w-5 rounded object-contain"
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
