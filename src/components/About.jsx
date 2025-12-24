import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-[60vh] flex items-center py-20
        bg-slate-50 text-slate-900
        dark:bg-slate-950 dark:text-slate-100
      "
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.h2
          className="
            text-sm font-semibold tracking-[0.25em] uppercase mb-3 text-center md:text-left
            text-teal-600 dark:text-teal-400
          "
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
              4th‑year software engineering student building real‑world
              products.
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              I&apos;m a{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-300">
                4th‑year Software Engineering student
              </span>{" "}
              with{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-300">
                1+ year of hands‑on experience
              </span>{" "}
              building web applications. As a{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-300">
                full‑stack developer
              </span>{" "}
              I enjoy turning ideas into usable products with clean interfaces
              and reliable backends.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Over the past year, I&apos;ve worked on{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-300">
                5+ real projects
              </span>{" "}
              including an Orthodox resources platform, a spam detection app,
              and other full‑stack products. My interests include{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-300">
                AI and emerging technologies
              </span>
              , and I often experiment with ML‑powered features such as spam
              detection and intelligent search.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              The goal is always the same: build solutions that are both
              functional and enjoyable to use, with code that is maintainable
              and easy to extend.
            </p>
          </div>

          <div className="w-full md:w-64 space-y-4">
            <div
              className="
                rounded-2xl border p-4
                bg-white/90 border-slate-200
                dark:bg-slate-900/60 dark:border-slate-800
              "
            >
              <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-slate-500 dark:text-slate-400">
                Highlights
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>• Full‑stack web development</li>
                <li>• React, Node.js, MongoDB, Python</li>
                <li>• 1+ year building real projects</li>
                <li>• Exploring mobile dev with Flutter / React Native</li>
                <li>• Passion for clean, modern UI</li>
              </ul>
            </div>

            <div
              className="
                rounded-2xl border p-4
                bg-white/90 border-slate-200
                dark:bg-slate-900/60 dark:border-slate-800
              "
            >
              <p className="text-xs font-semibold uppercase tracking-wide mb-1 text-slate-500 dark:text-slate-400">
                Currently
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Working on personal web projects, learning mobile development,
                refining my portfolio, and open to internships, junior roles,
                and collaborations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
