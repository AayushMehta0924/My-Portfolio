import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-neutral-700/60 bg-neutral-900/40 text-lg text-neutral-200 backdrop-blur transition-colors hover:border-cyan-400/60 hover:text-cyan-300 dark:bg-neutral-900/40"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ y: -16, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: 16, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 grid place-items-center"
        >
          {isDark ? <FiMoon /> : <FiSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
