import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import { Sparkles, Code2, Rocket, Zap } from "lucide-react";
import profilePic from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen flex items-center relative overflow-hidden
        bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 text-slate-900
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100 pb-4
      "
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="
            absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl
            bg-purple-400/15 dark:bg-purple-500/10
          "
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="
            absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl
            bg-teal-400/15 dark:bg-teal-500/10
          "
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.25, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap gap-3">
              <motion.div
                className="
                  inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm
                  bg-teal-100/70 border border-teal-200 text-teal-700
                  dark:bg-teal-500/10 dark:border-teal-500/20 dark:text-teal-400
                "
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(20,184,166,0.4)",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="tracking-wide">Available for Work</span>
              </motion.div>

              <motion.div
                className="
                  inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm
                  bg-purple-100/70 border border-purple-200 text-purple-700
                  dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-purple-400
                "
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(168,85,247,0.4)",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Code2 className="w-4 h-4" />
                <span className="tracking-wide">Full Stack Dev</span>
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.p
                className="uppercase tracking-[0.3em] text-teal-500/80 dark:text-teal-400/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Portfolio 2025
              </motion.p>
              <h1 className="space-y-2">
                <motion.div
                  className="text-slate-500 dark:text-slate-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Hello, I&apos;m
                </motion.div>
                <motion.div
                  className="
                    text-5xl md:text-7xl font-extrabold bg-gradient-to-r
                    from-teal-500 via-purple-500 to-pink-500 bg-clip-text text-transparent
                  "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Esubalew Worku
                </motion.div>
              </h1>
              <motion.div
                className="flex items-center gap-3 min-h-[4rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-1 h-8 bg-teal-500 dark:bg-teal-400 rounded-full" />
                <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300">
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "Web Developer",
                      "AI Enthusiast",
                      "Problem Solver",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </h2>
              </motion.div>

              <motion.p
                className="max-w-xl leading-relaxed text-slate-600 dark:text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Building modern web applications with clean UI and scalable
                backends, while learning to bring the same experience to mobile
                and AI-powered features.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <motion.a
                href="#projects"
                className="
                  group relative px-8 py-3 rounded-full font-semibold overflow-hidden
                  bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25
                  dark:text-slate-950
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  View Projects
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="
                  group px-8 py-3 rounded-full font-semibold backdrop-blur-sm
                  border border-slate-300 text-slate-800 hover:border-teal-500 hover:text-teal-600
                  dark:border-slate-700 dark:text-slate-100 dark:hover:border-teal-400 dark:hover:text-teal-300
                  transition-all duration-300
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Let&apos;s Connect
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-slate-500 dark:text-slate-500">
                Connect with me:
              </span>
              {[
                { name: "GitHub", url: "https://github.com/esubaleww" },
                { name: "LinkedIn", url: "https://linkedin.com/in/esuk" },
                { name: "Streamlit", url: "https://spamdete.streamlit.app" },
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="
                    relative group
                    text-slate-700 hover:text-teal-600
                    dark:text-slate-400 dark:hover:text-teal-400
                    transition-colors duration-300
                  "
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              <motion.div
                className="
                  absolute -inset-1 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity
                  bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400
                "
                animate={{ opacity: [0.35, 0.55, 0.35] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative">
                <div
                  className="
                    relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm
                    bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200
                    dark:from-slate-800/70 dark:to-slate-900/80 dark:border-slate-700/60
                  "
                >
                  <img
                    src={profilePic}
                    alt="Esubalew Worku"
                    className="w-full h-full object-cover"
                  />

                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 rounded-full bg-teal-500 dark:bg-teal-400"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                  />
                </div>

                {/* Projects badge */}
                <motion.div
                  className="
    absolute -top-4 -left-4 px-3 py-2 rounded-2xl backdrop-blur-md shadow-xl
    bg-white/90 border border-teal-200 text-slate-900
    dark:bg-slate-800/90 dark:border-teal-500/40 dark:text-slate-100
    text-xs sm:text-sm
    sm:-top-6 sm:-left-6 sm:px-4 sm:py-3
  "
                  initial={{ opacity: 0, x: -20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                    Projects
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-teal-600 dark:text-teal-400">
                    4+
                  </div>
                </motion.div>

                {/* Experience badge */}
                <motion.div
                  className="
    absolute -bottom-4 -right-4 px-3 py-2 rounded-2xl backdrop-blur-md shadow-xl
    bg-white/90 border border-purple-200 text-slate-900
    dark:bg-slate-800/90 dark:border-purple-500/40 dark:text-slate-100
    text-xs sm:text-sm
    sm:-bottom-6 sm:-right-6 sm:px-4 sm:py-3
  "
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                    Experience
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
                    1+ Years
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
