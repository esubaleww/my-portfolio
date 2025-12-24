import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, X, Menu } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 text-slate-900 shadow-sm backdrop-blur dark:bg-slate-950/95 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-3">
        <nav className="flex items-center justify-between rounded-full bg-white/90 border border-slate-200 px-4 py-2 shadow-md dark:bg-slate-900/80 dark:border-slate-800/70">
          <motion.a
            href="#home"
            className="text-sm md:text-base font-semibold tracking-tight"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="text-teal-500 dark:text-teal-400">Esubalew</span>
            {"  "}
            {"  "}
            <span className="text-slate-900 dark:text-slate-100">Worku</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-300 transition-colors"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 * i }}
              >
                {link.name}
              </motion.a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-teal-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-teal-400 transition-colors"
            >
              Contact
            </a>

            <a
              href="/esubalew-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-800 hover:border-teal-400 hover:text-teal-500 transition-colors dark:border-slate-600 dark:text-slate-100 dark:hover:text-teal-300"
            >
              Download CV
            </a>

            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 hover:border-teal-400 hover:text-teal-500 transition-colors dark:border-slate-600 dark:text-slate-100 dark:hover:text-teal-300"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-slate-800 dark:text-slate-100 text-xl focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto max-w-6xl px-4 md:px-6 pb-3"
          >
            <div className="rounded-2xl bg-white/95 border border-slate-200 py-4 px-4 flex flex-col gap-3 text-sm shadow-md dark:bg-slate-900/95 dark:border-slate-800/70">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-1 text-slate-700 hover:text-teal-500 transition-colors dark:text-slate-200 dark:hover:text-teal-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-1 inline-flex justify-center rounded-full bg-teal-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              <a
                href="/esubalew-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-800 hover:border-teal-400 hover:text-teal-500 transition-colors dark:border-slate-600 dark:text-slate-100 dark:hover:text-teal-300"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>

              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="mt-1 inline-flex justify-center items-center gap-2 rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-800 hover:border-teal-400 hover:text-teal-500 transition-colors dark:border-slate-600 dark:text-slate-100 dark:hover:text-teal-300"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
